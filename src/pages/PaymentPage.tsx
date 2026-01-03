import { Link } from "react-router-dom";
import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import Platine from "../assets/img/mining/Platine.svg";
import SignumLight from "../assets/img/main/SignumLight.svg";
import { QrCode, Repeat, Wallet, Link2, Store, ArrowRight } from "lucide-react";
import SinglePayment from "../assets/img/payments/SinglePayment.svg";
import MultiSamePayment from "../assets/img/payments/MultiSame.svg";
import MultiDiffePayment from "../assets/img/payments/MultiDifferent.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

type Card = {
  eyebrow?: string;
  title: string;
  body: string;
  image?: string;
  bullets?: string[];
  alt?: string;
};

export default function PaymentsPage() {
  return (
    <div className="relative isolate">
      {" "}
      <SeoHelmet
        title="Signum Payments — fast, fair, global"
        description="Accept SIGNA on web, POS or with simple links. Low fees, real on-chain finality, and sustainable PoC+."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/payments"
      />
      <header
        className="relative border-b border-neutral-200/60 bg-signum-darkblue backdrop-blur"
        id="hero"
      >
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
                        right-[-10%] top-[-40%] h-[170%]           
                        w-auto opacity-60 
                        -scale-x-100
                        [mask-image:linear-gradient(to_left,black)]
                        [-webkit-mask-image:linear-gradient(to_left,black)]"
        />
        <Container className="py-14">
          <div className="grid xl:grid-cols-2 items-center gap-10">
            <div className="text-white">
              <p className="text-white">SMART PAYMENTS</p>
              <h1 className="mt-2 text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight">
                Pay with Signum —
              </h1>
              <h1 className="mt-2 text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight">
                fast, fair, global.
              </h1>
              <p className="mt-4 text-white max-w-2xl">
                Accept SIGNA on the web, at the point of sale, or with a simple
                link.<br></br> Enjoy ultra-low fees, real on-chain finality, and
                sustainable PoC+.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#ways"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Start accepting payments
                </a>
                <a href="#types" className="btn btn-primary">
                  Explore payment types
                </a>
              </div>
            </div>

            <div className="order-first xl:order-last xl:justify-self-end">
              <div
                className="
                w-[260px] sm:w-[320px] md:w-[360px] lg:w-[420px]
                aspect-[4/3]
                rounded-2xl bg-white/95 ring-1 ring-black/5
                shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]
                grid place-items-center overflow-hidden
                p-4 sm:p-5
              "
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="rounded-xl bg-signum-acqua p-4 ring-1 ring-black/5">
                    <QrCode className="h-8 w-8 text-signum-midnight" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-28 rounded bg-neutral-200" />
                    <div className="h-2.5 w-36 rounded bg-neutral-200" />
                    <div className="h-2.5 w-20 rounded bg-neutral-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <aside className="md:col-span-1">
              <OnThisPage />
            </aside>
            <div className="md:col-span-2 space-y-10">
              <WaysToAccept />
              <PaymentTypes />
              <SubscriptionPlan />
              <Cashback />
              <QRDemo />
              <DeveloperTools />
              <FAQ />
              <FinalCTA />
            </div>
          </div>
        </Container>
        <StatsBand />
      </main>
    </div>
  );
}

/* -------------------------------
 * Sections
 * ----------------------------- */

function OnThisPage() {
  const items = [
    { id: "#ways", label: "Ways to accept" },
    { id: "#types", label: "Payment types" },
    { id: "#subscription", label: "Subscription plan" },
    { id: "#cashback", label: "Node cashback" },
    { id: "#QR", label: "Create a QR" },
    { id: "#dev", label: "Developer tools" },
    { id: "#faq", label: "FAQ" },
  ];
  return (
    <nav aria-label="On this page" className="card p-4 sticky top-24">
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-600">
        On this page
      </div>
      <ul className="space-y-1 text-sm">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={i.id}
              className="block rounded-lg px-2 py-1 text-neutral-700 hover:text-neutral-900 hover:bg-signum-acqua"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function WaysToAccept() {
  const cards = [
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Web checkout",
      body: "Integrate payments on your website or app. Generate payment requests with amount, memo and expiry.",
      cta: {
        href: "https://docs.signum.network/signum/starting-mining-signa",
        label: "Docs",
      },
    },
    {
      icon: <Store className="h-5 w-5" />,
      title: "Point of sale",
      body: "Show a QR-code at the counter and accept SIGNA within seconds — confirmation is on-chain.",
      cta: { href: "https://docs.signum.network", label: "Get started" },
    },
    {
      icon: <Link2 className="h-5 w-5" />,
      title: "Payment links",
      body: "No integration? Send a one-time link with prefilled details or share a reusable link for tips/donations.",
      cta: { href: "https://docs.signum.network", label: "How it works" },
    },
  ];
  return (
    <section id="ways">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        From web to POS — your choice
      </h2>
      <p className="mt-2 text-neutral-700 pr-6">
        Accept payments where your customers are. Clean UX, predictable fees and
        real on-chain finality.
      </p>

      <div className="mt-6 grid p-6 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article key={c.title} className="card p-6">
            <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80 w-fit">
              {c.icon}
            </div>
            <h3 className="mt-3 font-semibold text-signum-midnight">
              {c.title}
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PaymentTypes() {
  const cards: Card[] = [
    {
      eyebrow: "One-time",
      title: "Single Payment",
      body: "A one-time SIGNA transfer — like a bank transfer. Attach a message (up to 1,000 chars), public or encrypted for the recipient.",
      image: SinglePayment,
      alt: "Single payment illustration",
      bullets: ["Attach a message", "Fast on-chain finality", "Low fees"],
    },
    {
      eyebrow: "Multi-out same amount",
      title: "Multi-Payment — same amount",
      body: "Send the same amount to up to 128 recipients in a single transaction — simple, fast and cost-effective.",
      image: MultiSamePayment,
      alt: "Multi payment same amount",
      bullets: ["Up to 128 recipients", "One transaction", "Save fees & time"],
    },
    {
      eyebrow: "Distribution",
      title: "Multi-Payment — different amount",
      body: "Send different amounts to up to 64 recipients at once — ideal for payouts, airdrops and distributions.",
      image: MultiDiffePayment,
      alt: "Multi payment different amount",
      bullets: ["Up to 64 recipients", "Custom amounts", "Batch once, done"],
    },
  ];

  return (
    <section id="types">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Payment types
      </h2>
      <p className="mt-2 text-neutral-700">
        Choose the format that fits your flow — from a single checkout to mass
        payouts.
      </p>

      <div className="mt-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article
            key={c.title}
            className="relative rounded-2xl bg-white p-6 ring-1 ring-neutral-200/70 shadow-[var(--shadow-card)]"
          >
            {c.image && (
              <img
                src={c.image}
                alt={c.alt ?? ""}
                className="absolute right-4 top-4 h-8 w-auto"
                loading="lazy"
              />
            )}

            {c.eyebrow && (
              <div className="text-[12px] font-semibold uppercase tracking-wide text-neutral-600">
                {c.eyebrow}
              </div>
            )}

            <h3 className="mt-1 text-xl font-semibold text-signum-midnight">
              {c.title}
            </h3>

            <p className="mt-2 text-[15px] text-neutral-700">{c.body}</p>

            {c.bullets?.length ? (
              <ul className="mt-3 space-y-2 text-[15px] text-signum-midnight">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-signum-blue" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
function SubscriptionPlan() {
  return (
    <section id="subscription">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Subscription plan (Auto Payment)
      </h2>
      <p className="mt-2 text-neutral-700 pr-6">
        Schedule recurring on-chain payments — like standing orders. Select
        amount and interval (from 60 minutes to days or months). Optionally
        include a message that’s sent when the plan starts.
      </p>

      <div className="mt-6 card p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80 w-fit">
            <Repeat className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-signum-midnight">
              Why it’s different
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              Plans execute at your chosen interval regardless of network load.
              This enables effectively{" "}
              <strong>unlimited transactions per block</strong>, similar in
              result to “lightning” — but all transactions remain fully
              on-chain.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link className="btn btn-primary" to="/autopayment">
                Manage your plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cashback() {
  return (
    <section id="cashback">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Node fee cashback (25%)
      </h2>
      <p className="mt-2 text-neutral-700 pr-6">
        If your node signs the transaction, you can receive{" "}
        <strong>25% cashback</strong> on network fees. This also benefits
        operators who provide remote nodes to apps or the community.
      </p>

      <div className="mt-6 card p-6">
        <h3 className="font-semibold text-signum-midnight">How to activate</h3>
        <ol className="mt-2 list-decimal pl-5 space-y-1 text-[15px] text-neutral-700">
          <li>Open your node configuration.</li>
          <li>
            Uncomment <code className="font-mono">node.cashBackId</code> and set
            it to your account ID (RS).
          </li>
          <li>Restart the node to apply changes.</li>
        </ol>
        <div className="mt-4">
          <a
            className="btn btn-primary"
            href="https://docs.signum.network/signum/activate-cashback"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faBook} className="text-lg" />
            Cashback guide
          </a>
        </div>
      </div>
    </section>
  );
}

function DeveloperTools() {
  return (
    <section id="dev">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Developer tools
      </h2>
      <p className="mt-2 text-neutral-700 pr-6">
        Build custom flows with SignumJS and documented APIs — from simple links
        to full checkouts.
      </p>

      <div className="mt-6 grid xl:grid-cols-2 gap-6">
        <article className="card p-6">
          <h3 className="font-semibold text-signum-midnight">SignumJS</h3>
          <p className="mt-2 text-[15px] text-neutral-700">
            Official TypeScript/JavaScript library for interacting with nodes,
            accounts, transactions and more.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              className="btn btn-primary"
              href="https://github.com/signum-network/signumjs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href="https://signum-network.github.io/signumjs/"
              target="_blank"
              rel="noreferrer"
            >
              API Reference
            </a>
          </div>
        </article>

        <article className="card p-6">
          <h3 className="font-semibold text-signum-midnight">
            Explorer & test tools
          </h3>
          <p className="mt-2 text-[15px] text-neutral-700">
            Inspect transactions, test flows and monitor confirmations directly
            on the explorer or your own node.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              className="btn btn-primary"
              href="https://explorer.signum.network"
              target="_blank"
              rel="noreferrer"
            >
              Explorer
            </a>
            <Link className="btn btn-ghost" to="/poc-plus">
              PoC+
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "How fast are payments final?",
      a: "Payments are shown in the memepool within seconds and reach strong finality within a few minutes — no off-chain channels required.",
    },
    {
      q: "What are typical fees?",
      a: "Fees are typically fractions of a cent in USD terms, predictable and do not depend on a volatile gas market.The minimum fee on the Signum blockchain is 0.01 SIGNA",
    },
    {
      q: "Can I attach an order reference or note?",
      a: "Yes. Add a message (up to 1,000 characters). It can be public or encrypted so only the recipient can read it.",
    },
  ];
  return (
    <section id="faq">
      <h2 className="text-2xl font-semibold text-signum-midnight">FAQ</h2>
      <div className="mt-6 grid gap-4">
        {items.map((f) => (
          <details
            key={f.q}
            className="rounded-xl border border-neutral-200/70 bg-white/70 p-4"
          >
            <summary className="cursor-pointer font-semibold text-signum-midnight">
              {f.q}
            </summary>
            <p className="mt-2 text-[15px] text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="text-center">
      <div className="card p-8">
        <h3 className="text-xl font-semibold text-signum-midnight">
          Ready to accept SIGNA?
        </h3>
        <p className="mt-2 text-neutral-700">
          Start with a simple link, scale to web and POS — and keep everything
          on-chain.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a className="btn btn-primary" href="#ways">
            Start accepting payments
          </a>
          <a className="btn btn-ghost" href="#dev">
            Developer docs
          </a>
        </div>
      </div>
    </section>
  );
}
function StatsBand() {
  const stats = [
    { label: "Block time", value: "~4 min" },
    { label: "Max TX per Block", value: "2040" },
    { label: "Block maximum Size", value: "375,360 Bytes" },
    { label: "Max Daily TX", value: "Up to 734,400" },
    { label: "Min fee", value: "0.01 SIGNA" },
  ];
  return (
    <section className="relative bg-signum-blue text-white overflow-hidden">
      <img
        src={SignumLight}
        alt="Signum Power"
        className="hidden 2xl:block absolute left-0 top-1/2 -translate-y-1/2 w-80 opacity-80 pointer-events-none select-none"
      />
      <Container className="py-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-semibold tracking-tight">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-white/70">
              {s.label}
            </div>
          </div>
        ))}
      </Container>
      <img
        src={SignumLight}
        alt="Signum Power"
        className="scale-x-[-1] hidden 2xl:block absolute right-0 top-1/2 -translate-y-1/2 w-80 opacity-80 pointer-events-none select-none"
      />
    </section>
  );
}
function QRDemo() {
  return (
    <section id="QR" className="bg-white">
      <div className="mt-6 card p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
            <QrCode className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-signum-midnight">
            Payment link & QR generator
          </h3>
        </div>
        <p className="mt-2 text-signum-midnight">
          Quickly generate a SIGNA <strong>receive payment QR</strong> for your
          account with amount and (optional) memo. Share it or display as a QR
          code.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-signum-midnight">
              Amount (SIGNA)
            </label>
            <input
              className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2"
              placeholder="10"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-signum-midnight">
              Memo (optional)
            </label>
            <input
              className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2"
              placeholder="Order #1234"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button className="btn btn-primary inline-flex items-center gap-2">
            Generate <ArrowRight className="h-4 w-4" />
          </button>
          <button className="btn btn-ghost">Copy link</button>
          <button className="btn btn-ghost">Show QR</button>
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          For demo purposes only. You can connect this widget to your wallet and
          SignumJS later.
        </p>
      </div>
    </section>
  );
}
