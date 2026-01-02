import Container from "../components/Container";
import { ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import SeoHelmet from "../components/SEOHelmet";
import { Link } from "react-router-dom";

import Platine from "../assets/img/mining/Platine.svg";

import BitmartLogo from "../assets/img/exchanges/Bitmart.svg";
import BitstorageLogo from "../assets/img/exchanges/bitstorage.webp";
import DexTradeLogo from "../assets/img/exchanges/Dex-Trade.webp";
import AzbitLogo from "../assets/img/exchanges/AzbitLogo.png";
import SuperExLogo from "../assets/img/exchanges/SuperExLogo.png";

import SignumVideoTicker from "../components/VideoTicker";
import XTWalletVideo from "../assets/img/video/XTWallet.png";
import AccountHnadlinngVideo from "../assets/img/video/AccountSetup.webp";
import MiningVideo from "../assets/img/video/Mining.png";
import GPUPlotsVideo from "../assets/img/video/GPUPlots.webp";
import CommitmentVideo from "../assets/img/video/Commitment.png";
type Exchange = {
  name: string;
  href: string;
  logo: string;
  region?: string;
  kyc?: boolean;
  notes?: string;
  status?: "active" | "restricted" | "maintenance";
};

const CEXES: Exchange[] = [
  {
    name: "Bitmart",
    href: "https://www.bitmart.com/invite/Signum/en",
    logo: BitmartLogo,
    region: "Global",
    kyc: true,
    notes: "Top 20 CEX",
    status: "active",
  },
  {
    name: "Dex-Trade",
    href: "https://dex-trade.com/refcode/119za6",
    logo: DexTradeLogo,
    region: "Global",
    kyc: false,
    notes: "Classic CEX interface",
    status: "active",
  },
  {
    name: "AZBIT",
    href: "https://azbit.com/?rcode=8W7N5OO",
    logo: AzbitLogo,
    region: "Global",
    kyc: false,
    notes: "Classic CEX interface",
    status: "active",
  },
  {
    name: "SuperEx",
    href: "https://app.superex.live/register?invitationCode=VKD86JADQ&language=en",
    logo: SuperExLogo,
    region: "Global",
    kyc: false,
    notes: "Signum Smart Tokens are inegrated in the free market",
    status: "active",
  },
  {
    name: "Bitstorage",
    href: "https://bitstorage.finance/refcode/h9akri",
    logo: BitstorageLogo,
    region: "Global",
    kyc: false,
    notes: "Classic CEX interface",
    status: "active",
  },
];

const videos = [
  {
    title: "How to use XT-Wallet",
    href: "https://youtu.be/EWVOStOR0Vs",
    thumbnail: XTWalletVideo,
  },
  {
    title: "How to create and set up an account on Signum",
    href: "https://youtu.be/seUnm0GEwXY",
    thumbnail: AccountHnadlinngVideo,
  },
  {
    title: "How to Mine on the Signum Blockchain",
    href: "https://youtu.be/zeIVCKN6Kpo",
    thumbnail: MiningVideo,
  },
  {
    title: "How to create plots using your GPU",
    href: "https://youtu.be/erTp8J2oVgM",
    thumbnail: GPUPlotsVideo,
  },
  {
    title: "How to manage your Signa commitment",
    href: "https://youtu.be/p-jEkv3aGAs",
    thumbnail: CommitmentVideo,
  },
];
export default function ExchangesPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Exchanges — Join the movement"
        description="Buy & trade SIGNA on centralized exchanges."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/exchanges"
      />
      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-midnight">
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
          <p className="text-white">CEX LIST</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Trade SIGNA on a CEX
          </h1>
          <p className="mt-4 max-w-2xl text-white">
            A curated list of exchanges that list SIGNA. Availability and pairs
            can change — please check the exchange before depositing funds.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/wallet"
              key="wallets"
              className="rounded-full bg-signum-blue/50 text-white px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              Download Wallet
            </Link>
          </div>
        </Container>
      </header>
      <CexGrid />
      <HowToBuy />
      <SafetyNotes />
      <FinalCTA />
      <SignumVideoTicker
        title="Signum Videos"
        subtitle="Short videos to get you from zero to Signum Pro."
        items={videos}
        speed={{ base: 40, md: 30, lg: 60, "2xl": 80 }}
        direction="left"
        pauseOnHover
      />
    </>
  );
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "success" | "warning";
}) {
  const tones = {
    neutral: "bg-neutral-100 text-neutral-700 ring-neutral-200",
    success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    warning: "bg-amber-50 text-amber-800 ring-amber-200",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function CexCard({ ex }: { ex: Exchange }) {
  const statusTone =
    ex.status === "active"
      ? "success"
      : ex.status === "restricted"
        ? "warning"
        : "neutral";
  return (
    <article className="group relative rounded-2xl bg-white p-6 ring-1 ring-neutral-200/70 shadow-[var(--shadow-card)] transition hover:shadow-lift">
      <div className="flex items-center gap-3">
        <img
          src={ex.logo}
          alt={`${ex.name} logo`}
          className="h-8 w-auto rounded-md object-contain"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-signum-midnight">{ex.name}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            {ex.region && <Badge>{ex.region}</Badge>}
            {typeof ex.kyc === "boolean" && (
              <Badge tone={ex.kyc ? "neutral" : "success"}>
                {ex.kyc ? "KYC" : "No KYC"}
              </Badge>
            )}
            {ex.status && (
              <Badge tone={statusTone as any}>
                {ex.status === "active" ? "Active" : ex.status}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {ex.notes && (
        <p className="mt-4 text-[15px] text-neutral-700">{ex.notes}</p>
      )}

      <div className="mt-5">
        <a
          href={ex.href}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary inline-flex items-center gap-2"
        >
          Visit exchange <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function CexGrid() {
  return (
    <section className="relative z-10">
      <Container className="py-10">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          Centralized exchanges (CEX)
        </h2>
        <p className="mt-2 text-signum-midnight">
          These platforms list SIGNA. Always verify pairs, liquidity and
          supported regions.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CEXES.map((ex) => (
            <CexCard ex={ex} key={ex.name} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowToBuy() {
  return (
    <section className="relative z-10">
      <Container className="py-12">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-signum-midnight">
            How to get SIGNA in 3 steps
          </h3>
          <ol className="mt-4 grid gap-6 sm:grid-cols-3">
            <li className="rounded-xl bg-signum-acqua/50 p-4">
              <div className="text-sm font-semibold text-signum-midnight">
                1. Choose a CEX
              </div>
              <p className="mt-1 text-[15px] text-neutral-700">
                Create an account and complete verification if required.
              </p>
            </li>
            <li className="rounded-xl bg-signum-acqua/50 p-4">
              <div className="text-sm font-semibold text-signum-midnight">
                2. Deposit funds
              </div>
              <p className="mt-1 text-[15px] text-neutral-700">
                Deposit fiat or crypto supported by the exchange.
              </p>
            </li>
            <li className="rounded-xl bg-signum-acqua/50 p-4">
              <div className="text-sm font-semibold text-signum-midnight">
                3. Buy & withdraw
              </div>
              <p className="mt-1 text-[15px] text-neutral-700">
                Trade to SIGNA and withdraw to your personal wallet.
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
}

function SafetyNotes() {
  return (
    <section className="relative z-10">
      <Container className="py-10">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-200/70 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-emerald-50 p-2 ring-1 ring-emerald-200">
              <ShieldCheck className="h-5 w-5 text-emerald-700" />
            </div>
            <div>
              <h3 className="font-semibold text-signum-midnight">
                Tips for choosing an exchange
              </h3>
              <ul className="mt-2 space-y-2 text-[15px] text-neutral-700 list-disc pl-5">
                <li>Prefer exchanges with good volume and reputation.</li>
                <li>
                  Check supported regions, pairs, deposit/withdrawal options.
                </li>
                <li>
                  Use strong 2FA. Withdraw to your own wallet whenever possible.
                </li>
                <li>
                  We do not endorse any service listed here. Do your own
                  research (DYOR).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative z-10">
      <Container className="py-12 text-center">
        <div className="card p-8">
          <h3 className="text-2xl font-semibold text-signum-midnight">
            Ready to explore the Signum ecosystem?
          </h3>
          <p className="mt-2 text-neutral-700">
            After purchasing SIGNA, move them to your personal wallet and try
            apps, tokens and more.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/wallet"
              key="wallets"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Download Wallet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
