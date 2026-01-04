import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Platine from "../assets/img/mining/Platine.svg";
import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Subscription } from "@signumjs/core";
import { Amount, ChainTime } from "@signumjs/util";
import { useAccount } from "@lib/hooks/useAccount";
import { useLedger } from "@lib/hooks/useLedger";
import { useAppSelector } from "@lib/hooks/useAppSelector";
import {
  selectIsWalletConnected,
  selectWalletNodeHost,
} from "@lib/states/walletState/selectors";

import { SubscriptionCancelButton } from "@lib/components/CancelSubscription";

// @ts-expect-error: hashicon ships without type definitions
import hashicon from "hashicon";

export default function SignumSubscriptions() {
  const { accountId } = useAccount();
  const ledger = useLedger();
  const isWalletConnected = useAppSelector(selectIsWalletConnected);
  const walletNodeHost = useAppSelector(selectWalletNodeHost);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [receivingSubscriptions, setReceivingSubscriptions] = useState<
    Subscription[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, setLastUpdated] = useState<Date | null>(null);

  const fetchSubscriptions = useCallback(async () => {
    if (!ledger || !accountId || !isWalletConnected || !walletNodeHost) {
      setSubscriptions([]);
      setReceivingSubscriptions([]);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const { subscriptions: all = [] } =
        await ledger.account.getAccountSubscriptions(accountId);

      const byId = new Map<string, Subscription>();
      for (const s of all) byId.set(s.id, s);
      const list = [...byId.values()];

      const outgoing = list.filter((s) => s.sender === accountId);
      const incoming = list.filter((s) => s.recipient === accountId);

      setSubscriptions(outgoing);
      setReceivingSubscriptions(incoming);
      setLastUpdated(new Date());
    } catch (e: any) {
      setError(e?.message ?? "Unable to load subscriptions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [ledger, accountId, isWalletConnected, walletNodeHost]);

  useEffect(() => {
    if (!isWalletConnected || !ledger || !accountId) {
      setSubscriptions([]);
      setReceivingSubscriptions([]);
      setError(null);
      return;
    }

    fetchSubscriptions();
    const intervalId = window.setInterval(fetchSubscriptions, 240_000);
    return () => window.clearInterval(intervalId);
  }, [accountId, fetchSubscriptions, isWalletConnected, ledger]);

  // Outgoing Plans
  const subscriptionViews = useMemo(() => {
    return subscriptions.map((subscription) => {
      const amount = Number(
        Amount.fromPlanck(subscription.amountNQT).getSigna()
      );
      const nextPaymentDate = getDateFromSignumTimestamp(subscription.timeNext);
      const hasAlias = Boolean(subscription.aliasName);
      const displayName =
        subscription.aliasName && subscription.tldName
          ? `${subscription.aliasName}.${subscription.tldName}`
          : subscription.recipientRS;
      const aliasLabel =
        subscription.aliasName && subscription.tldName
          ? `${subscription.aliasName}.${subscription.tldName}`
          : (subscription.aliasName ?? null);
      const avatar = hashicon(subscription.recipient, { size: 48 }).toDataURL();

      return {
        raw: subscription,
        amount,
        nextPaymentDate,
        displayName,
        avatar,
        aliasLabel,
        hasAlias,
      };
    });
  }, [subscriptions]);

  // Incoming Plans
  const receivingViews = useMemo(() => {
    return receivingSubscriptions.map((subscription) => {
      const amount = Number(
        Amount.fromPlanck(subscription.amountNQT).getSigna()
      );
      const nextPaymentDate = getDateFromSignumTimestamp(subscription.timeNext);

      const displayName = subscription.senderRS;
      const avatar = hashicon(subscription.sender, { size: 48 }).toDataURL();

      const hasAlias = Boolean(subscription.aliasName);
      const aliasLabel =
        subscription.aliasName && subscription.tldName
          ? `${subscription.aliasName}.${subscription.tldName}`
          : (subscription.aliasName ?? null);

      return {
        raw: subscription,
        amount,
        nextPaymentDate,
        displayName,
        avatar,
        aliasLabel,
        hasAlias,
      };
    });
  }, [receivingSubscriptions]);

  const upcomingSubscriptions = useMemo(() => {
    const now = new Date();
    const tenDaysInMs = 10 * 24 * 60 * 60 * 1000;

    return subscriptionViews
      .filter((subscription) => {
        const diff = subscription.nextPaymentDate.getTime() - now.getTime();
        return diff >= 0 && diff <= tenDaysInMs;
      })
      .sort(
        (left, right) =>
          left.nextPaymentDate.getTime() - right.nextPaymentDate.getTime()
      );
  }, [subscriptionViews]);

  // --- Summaries: Outgoing vs Incoming ---
  type Summary = {
    totalAmount: number;
    monthlyEstimate: number;
    nextPayment: Date | null;
  };

  function computeSummary(views: SubscriptionView[]): Summary {
    if (!views.length)
      return { totalAmount: 0, monthlyEstimate: 0, nextPayment: null };

    const totalAmount = views.reduce((sum, v) => sum + v.amount, 0);

    const monthlyEstimate = views.reduce((sum, v) => {
      const freq = v.raw.frequency;
      if (!freq) return sum;
      const paymentsPerMonth = (30 * 24 * 60 * 60) / freq;
      return sum + v.amount * paymentsPerMonth;
    }, 0);

    const nextPayment =
      views
        .filter((v) => v.nextPaymentDate > new Date())
        .sort(
          (a, b) => a.nextPaymentDate.getTime() - b.nextPaymentDate.getTime()
        )[0]?.nextPaymentDate ?? null;

    return { totalAmount, monthlyEstimate, nextPayment };
  }

  const outgoingSummary = useMemo(
    () => computeSummary(subscriptionViews),
    [subscriptionViews]
  );
  const incomingSummary = useMemo(
    () => computeSummary(receivingViews),
    [receivingViews]
  );

  const handleManualRefresh = () => {
    fetchSubscriptions();
  };

  return (
    <>
      <SeoHelmet
        title="Signum Autopayments — Easy to use"
        description="Review every recurring SIGNA payment linked to your wallet and stay in control of your auto-payments."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/mining"
      />

      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-blue">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0
                           left-[-10%] top-0 h-[120%] 
                           hidden xl:block
                           w-auto opacity-70 
                        [mask-image:linear-gradient(to_right,black,transparent_80%)]
                        [-webkit-mask-image:linear-gradient(to_right,black,transparent_80%)]"
        />
        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0 
                        hidden lg:block
                        right-[-10%] top-[-20%] h-[170%]           
                        w-auto opacity-60 
                        -scale-x-100
                        [mask-image:linear-gradient(to_left,black)]
                        [-webkit-mask-image:linear-gradient(to_left,black)]"
        />
        <Container className="relative z-10 py-12 min-h-110.25 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">
                AUTOMATED PAYMENTS
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Manage Plans
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Review every recurring SIGNA payment linked to your wallet,
                monitor upcoming charges and stay in control of your
                auto-payments.
              </p>
            </div>
          </div>
        </Container>
      </header>

      <div className="relative isolate">
        <main id="dashboard">
          <Container className="py-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-3 space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold">Your subscriptions</h2>
                  <button
                    type="button"
                    onClick={handleManualRefresh}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold
                           text-signum-midnight shadow-sm transition hover:border-signum-blue hover:text-signum-blue"
                    disabled={isLoading}
                  >
                    <RefreshCw
                      className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                    />
                    Refresh
                  </button>
                </div>

                {!isWalletConnected && <ConnectWalletNotice />}

                {error && <InfoBanner message={error} variant="error" />}

                {isWalletConnected && walletNodeHost && !error && (
                  <SummaryComparePanel
                    isWalletConnected={isWalletConnected}
                    outgoing={outgoingSummary}
                    incoming={incomingSummary}
                  />
                )}

                {isWalletConnected && walletNodeHost && !error && (
                  <SubscriptionsSection
                    subscriptions={subscriptionViews}
                    upcoming={upcomingSubscriptions}
                    receiving={receivingViews}
                    isLoading={isLoading}
                  />
                )}
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
}

type SubscriptionView = {
  raw: Subscription;
  amount: number;
  nextPaymentDate: Date;
  displayName: string;
  avatar: string;
  aliasLabel: string | null;
  hasAlias: boolean;
};

function SubscriptionsSection({
  subscriptions,
  upcoming,
  receiving,
  isLoading,
}: {
  subscriptions: SubscriptionView[];
  upcoming: SubscriptionView[];
  receiving: SubscriptionView[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="card p-6 text-center text-sm text-neutral-600">
        Loading subscriptions…
      </div>
    );
  }

  if (!subscriptions.length && !receiving.length) {
    return (
      <div className="card p-8 text-center">
        <h3 className="text-xl font-semibold text-signum-midnight">
          No active subscriptions yet
        </h3>
        <p className="mt-3 text-sm text-neutral-600">
          Create a subscription from your Signum wallet to see it appear here.
          Once it is set up the dashboard keeps track of every automatic payment
          for you.
        </p>
        <a
          href="https://docs.signum.network/reference/subscriptions"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-signum-blue px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-signum-darkblue"
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <UpcomingPayments upcoming={upcoming} />
      {/* Outgoing */}
      {subscriptions.length > 0 && (
        <ActiveSubscriptions subscriptions={subscriptions} />
      )}
      {/* Incoming */}
      {receiving.length > 0 && (
        <ActiveReceivingSubscriptions subscriptions={receiving} />
      )}
    </div>
  );
}

function UpcomingPayments({ upcoming }: { upcoming: SubscriptionView[] }) {
  if (!upcoming.length) return null;

  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Upcoming payments</h3>
        <p className="text-sm text-signum-midnight">
          Due within the next 10 days.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <table className="min-w-full divide-y divide-neutral-200 text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Subscription</th>
              <th className="px-4 py-3 font-semibold text-right">Amount</th>
              <th className="px-4 py-3 font-semibold text-right">
                Next payment
              </th>
              <th className="px-4 py-3 font-semibold text-right">
                Cancel plan
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-200">
            {upcoming.map((subscription) => (
              <tr key={subscription.raw.id} className="bg-white/80">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={subscription.avatar}
                      alt="Subscription avatar"
                      className="h-8 w-8 flex-none rounded-lg"
                    />
                    <div>
                      <div className="font-medium text-signum-midnight">
                        {subscription.displayName}
                      </div>
                      <div className="text-xs text-neutral-500">
                        ID {subscription.raw.id}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3 text-right font-semibold text-signum-midnight">
                  Ꞩ {formatSigna(subscription.amount)}
                </td>

                <td className="px-4 py-3 text-right text-sm text-neutral-600 whitespace-nowrap">
                  {formatRelative(subscription.nextPaymentDate)}
                  <span className="ml-2 text-xs text-neutral-400">
                    ({formatDate(subscription.nextPaymentDate)})
                  </span>
                </td>

                <td className="px-4 py-3 text-right">
                  <SubscriptionCancelButton id={subscription.raw.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ActiveSubscriptions({
  subscriptions,
}: {
  subscriptions: SubscriptionView[];
}) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Active subscriptions</h3>
        <p className="text-sm text-neutral-600">
          Every recurring payment created from this account.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {subscriptions.map((subscription) => (
          <article
            key={subscription.raw.id}
            className="card flex h-full flex-col gap-4 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={subscription.avatar}
                  alt="Subscription avatar"
                  className="h-8 w-8 rounded-xl"
                />
                <div>
                  <div className="font-semibold text-signum-midnight">
                    {subscription.displayName}
                  </div>
                  <div className="text-xs text-neutral-500">
                    Recipient ID {subscription.raw.recipient}
                  </div>
                </div>
              </div>
              <span className="rounded-full bg-signum-acqua px-3 py-1 text-xs font-semibold text-signum-midnight">
                Every {describeFrequency(subscription.raw.frequency)}
              </span>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-2 text-sm">
              <div className="text-neutral-600">
                <div>Amount per cycle</div>
                <div className="mt-1 flex items-center gap-3 whitespace-nowrap">
                  <div className="text-lg font-semibold text-signum-midnight leading-none">
                    Ꞩ {formatSigna(subscription.amount)}
                  </div>
                  <SubscriptionCancelButton id={subscription.raw.id} />
                </div>
              </div>

              <div className="text-neutral-600">
                Next payment
                <div className="text-sm font-semibold text-signum-midnight">
                  {formatRelative(subscription.nextPaymentDate)}
                </div>
                <div className="text-xs text-neutral-500">
                  {formatDate(subscription.nextPaymentDate)}
                </div>
              </div>
            </div>

            {subscription.hasAlias && subscription.aliasLabel && (
              <div className="rounded-xl bg-signum-acqua px-3 py-2 text-xs text-signum-midnight">
                Alias renewal fees for {subscription.aliasLabel}
              </div>
            )}

            <div className="text-xs text-neutral-400">
              Subscription ID: {subscription.raw.id}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ActiveReceivingSubscriptions({
  subscriptions,
}: {
  subscriptions: SubscriptionView[];
}) {
  if (!subscriptions.length) return null;

  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">
          Active receiving subscriptions
        </h3>
        <p className="text-sm text-neutral-600">
          Recurring payments **to** this account (created by other accounts).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {subscriptions.map((subscription) => (
          <article
            key={subscription.raw.id}
            className="card flex h-full flex-col gap-4 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={subscription.avatar}
                  alt="Sender avatar"
                  className="h-8 w-8 rounded-xl"
                />
                <div>
                  <div className="font-semibold text-signum-midnight">
                    {subscription.displayName}
                  </div>
                  <div className="text-xs text-neutral-500">
                    Sender ID {subscription.raw.sender}
                  </div>
                </div>
              </div>
              <span className="rounded-full bg-signum-acqua px-3 py-1 text-xs font-semibold text-signum-midnight">
                Every {describeFrequency(subscription.raw.frequency)}
              </span>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-2 text-sm">
              <div className="text-neutral-600">
                <div>Amount per cycle</div>
                <div className="mt-1 text-lg font-semibold text-signum-midnight leading-none">
                  Ꞩ {formatSigna(subscription.amount)}
                </div>
              </div>

              <div className="text-neutral-600">
                Next payment
                <div className="text-sm font-semibold text-signum-midnight">
                  {formatRelative(subscription.nextPaymentDate)}
                </div>
                <div className="text-xs text-neutral-500">
                  {formatDate(subscription.nextPaymentDate)}
                </div>
              </div>
            </div>

            {subscription.hasAlias && subscription.aliasLabel && (
              <div className="rounded-xl bg-signum-acqua px-3 py-2 text-xs text-signum-midnight">
                Alias renewal fees for {subscription.aliasLabel}
              </div>
            )}

            <div className="text-xs text-neutral-400">
              Subscription ID: {subscription.raw.id}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SummaryComparePanel({
  isWalletConnected,
  outgoing,
  incoming,
}: {
  isWalletConnected: boolean;
  outgoing: {
    totalAmount: number;
    monthlyEstimate: number;
    nextPayment: Date | null;
  };
  incoming: {
    totalAmount: number;
    monthlyEstimate: number;
    nextPayment: Date | null;
  };
}) {
  if (!isWalletConnected) {
    return (
      <div className="card p-6 text-sm text-neutral-600">
        Connect your Signum wallet to inspect subscriptions and balances.
      </div>
    );
  }

  const TwoCol = ({ left, right }: { left: ReactNode; right: ReactNode }) => (
    <div className="mt-3 grid grid-cols-2 items-baseline gap-4">
      <div>
        <div className="text-[11px] uppercase tracking-wider text-red-900">
          Payments
        </div>
        <div className="mt-1 font-semibold text-signum-midnight">{left}</div>
      </div>
      <div className="text-right">
        <div className="text-[11px] uppercase tracking-wider text-green-900">
          Earnings
        </div>
        <div className="mt-1 font-semibold text-signum-midnight">{right}</div>
      </div>
    </div>
  );

  const nextText = (d: Date | null) =>
    d ? (
      <>
        {formatRelative(d)} <br></br>
        <span className="text-xs text-neutral-500">({formatDate(d)})</span>
      </>
    ) : (
      "—"
    );

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Total per cycle */}
      <div className="card p-6">
        <div className="text-xs uppercase tracking-wider text-signum-midnight font-bold">
          Total per cycle
        </div>
        <TwoCol
          left={`Ꞩ ${formatSigna(outgoing.totalAmount)}`}
          right={`Ꞩ ${formatSigna(incoming.totalAmount)}`}
        />
      </div>

      {/* Estimated per month */}
      <div className="card p-6">
        <div className="text-xs uppercase tracking-wider text-signum-midnight font-bold">
          Estimated per month
        </div>
        <TwoCol
          left={`Ꞩ ${formatSigna(outgoing.monthlyEstimate)}`}
          right={`Ꞩ ${formatSigna(incoming.monthlyEstimate)}`}
        />
      </div>

      {/* Next payment */}
      <div className="card p-6">
        <div className="text-xs uppercase tracking-wider text-signum-midnight font-bold">
          Next payment
        </div>
        <TwoCol
          left={nextText(outgoing.nextPayment)}
          right={nextText(incoming.nextPayment)}
        />
      </div>
    </div>
  );
}

function ConnectWalletNotice() {
  return (
    <div className="card border border-dashed border-signum-blue/40 bg-signum-acqua/40 p-8 text-center">
      <h3 className="text-xl font-semibold text-signum-midnight">
        Connect a Signum wallet
      </h3>
      <p className="mt-3 text-sm text-neutral-600">
        Open the wallet connection panel and link your account to load your
        subscriptions. You can monitor every automatic payment right after
        connecting.
      </p>
    </div>
  );
}

function InfoBanner({
  message,
  variant,
}: {
  message: string;
  variant: "warning" | "error";
}) {
  const baseStyles =
    "rounded-2xl border px-4 py-3 text-sm font-medium flex items-start gap-3";
  const styles =
    variant === "error"
      ? `${baseStyles} border-red-200 bg-red-50 text-red-700`
      : `${baseStyles} border-amber-200 bg-amber-50 text-amber-700`;

  return <div className={styles}>{message}</div>;
}

function describeFrequency(seconds: number) {
  if (!seconds) return "moment";

  const units: { label: string; seconds: number }[] = [
    { label: "year", seconds: 365 * 24 * 60 * 60 },
    { label: "month", seconds: 30 * 24 * 60 * 60 },
    { label: "week", seconds: 7 * 24 * 60 * 60 },
    { label: "day", seconds: 24 * 60 * 60 },
    { label: "hour", seconds: 60 * 60 },
    { label: "minute", seconds: 60 },
  ];

  for (const unit of units) {
    if (seconds % unit.seconds === 0) {
      const amount = seconds / unit.seconds;
      return amount === 1 ? unit.label : `${amount} ${unit.label}s`;
    }
  }

  if (seconds > 24 * 60 * 60) {
    return `${Math.round(seconds / (24 * 60 * 60))} days`;
  }

  if (seconds > 60 * 60) {
    return `${Math.round(seconds / (60 * 60))} hours`;
  }

  if (seconds > 60) {
    return `${Math.round(seconds / 60)} minutes`;
  }

  return `${seconds} seconds`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatRelative(date: Date) {
  const diffMs = date.getTime() - Date.now();
  const diffSeconds = Math.round(diffMs / 1000);

  const units: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { unit: "year", seconds: 365 * 24 * 60 * 60 },
    { unit: "month", seconds: 30 * 24 * 60 * 60 },
    { unit: "week", seconds: 7 * 24 * 60 * 60 },
    { unit: "day", seconds: 24 * 60 * 60 },
    { unit: "hour", seconds: 60 * 60 },
    { unit: "minute", seconds: 60 },
  ];

  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

  for (const { unit, seconds } of units) {
    if (Math.abs(diffSeconds) >= seconds) {
      const value = Math.round(diffSeconds / seconds);
      return rtf.format(value, unit);
    }
  }

  return rtf.format(0, "second");
}

function formatSigna(value: number) {
  if (!Number.isFinite(value)) return "0.00";

  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function getDateFromSignumTimestamp(timestamp: number) {
  return ChainTime.fromChainTimestamp(timestamp).getDate();
}
