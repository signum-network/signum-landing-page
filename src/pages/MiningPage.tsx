import { useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../components/SEOHelmet";
import Container from "../components/Container";
import Platine from "../assets/img/mining/Platine.svg";
import HDD from "../assets/img/mining/SignumHDD.svg";
import Factor1 from "../assets/img/pocplus/Factor1.svg";
import Factor8 from "../assets/img/pocplus/Factor8.svg";
import Factor0125 from "../assets/img/pocplus/Factor0125.svg";
import { SignumMiningLanding } from "../components/Calculator/Mining";
import {
  ArrowRight,
  HardDrive,
  Wallet,
  Users,
  Server,
  Settings,
  Gauge,
  Network,
  Database,
  ExternalLink,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faArrowUpRightFromSquare,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import { AddCommitmentButton } from "@lib/components/AddCommitmentButton";
import { RemoveCommitmentButton } from "@lib/components/RemoveCommitmentButton";
/**
 * Sections: Hero • Quick Start (Pool/Solo) • Requirements • Plotting • Configure • Commitment • Calculator • Pools/Network • FAQ • Final CTA
 */
export default function MiningPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Mining — Just add disk space"
        description="Mine Signa on everyday machines. No GPUs. No noise. Storage does the work."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/mining"
      />

      {/* HERO */}
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
                        right-[-10%] top-[-40%] h-[170%]           
                        w-auto opacity-60 
                        -scale-x-100
                        [mask-image:linear-gradient(to_left,black)]
                        [-webkit-mask-image:linear-gradient(to_left,black)]"
        />

        <Container className="relative z-10 py-12 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <figure className="order-1 md:order-2 justify-self-center md:justify-self-end">
              <img
                src={HDD}
                alt="Signum HDD mining illustration"
                className="w-[260px] sm:w-[320px] md:w-[420px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">MINING</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Just add disk space
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Mining, minus the rig. Use your PC, a Raspberry Pi, even an old
                phone. With PoC+, storage does the work.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#quickstart"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Start pool mining <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#calculator" className="btn-white">
                  Estimate income
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Container className="py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <aside className="md:col-span-1">
              <OnThisPage />
            </aside>

            {/* Sections */}
            <div className="md:col-span-2 space-y-10">
              <QuickStart />
              <Requirements />
              <Plotting />
              <Configure />
              <Commitment />
              <CalculatorSection />
              <CTACommitment />
              <PoolsAndNetwork />
              <FAQ />
              <FinalCTA />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

/* ========================= Helper: Sticky Index ========================= */
function OnThisPage() {
  const items = [
    { href: "#quickstart", label: "Quick Start" },
    { href: "#requirements", label: "Requirements" },
    { href: "#plotting", label: "Plotting" },
    { href: "#configure", label: "Configure" },
    { href: "#commitment", label: "Commitment" },
    { href: "#calculator", label: "Calculator" },
    { href: "#pools", label: "Pools & Network" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <nav aria-label="On this page" className="card p-4 sticky top-24">
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-600">
        On this page
      </div>
      <ul className="space-y-1 text-sm">
        {items.map((i) => (
          <li key={i.href}>
            <a
              href={i.href}
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

/* ========================= Section: Quick Start ========================= */
function QuickStart() {
  return (
    <section id="quickstart" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        From zero to mining
      </h2>
      <p className="mt-1 text-neutral-600">
        Pick a path — pool or solo — and get started in minutes.
      </p>
      <div className="mt-6 card p-6">
        <SegmentedTabs
          tabs={["Pool", "Solo"]}
          render={({ active }) =>
            active === "Pool" ? <PoolSteps /> : <SoloSteps />
          }
        />
      </div>
    </section>
  );
}

function PoolSteps() {
  return (
    <div className="grid gap-4 xl:grid-cols-3 items-stretch">
      <StepCard
        icon={<Wallet className="h-5 w-5" />}
        title="Install XT Wallet"
        text="Create an account and back up your passphrase."
        href="https://docs.signum.network/signum/install-and-set-up-the-xt-wallet"
      />
      <StepCard
        icon={<Users className="h-5 w-5" />}
        title="Choose a pool"
        text="Pick a pool and assign the reward recipient."
        href="https://docs.signum.network/signum/assign-reward-recipient"
        extraLink={{
          label: "Pool list",
          href: "https://docs.signum.network/signum/signum-pools-list",
        }}
      />
      <StepCard
        icon={<HardDrive className="h-5 w-5" />}
        title="Plot & start mining"
        text="Create plots and point your miner to the pool."
        href="https://docs.signum.network/signum/plotting"
        extraLink={{
          label: "Pool setup",
          href: "https://docs.signum.network/signum/configure-and-start-mining",
        }}
      />
    </div>
  );
}

function SoloSteps() {
  return (
    <div className="grid gap-4 xl:grid-cols-3 items-stretch">
      <StepCard
        icon={<Server className="h-5 w-5" />}
        title="Run a node"
        text="Install and fully sync your Signum node."
        href="https://docs.signum.network/signum/enable-your-node"
      />
      <StepCard
        icon={<Settings className="h-5 w-5" />}
        title="Enable mining"
        text="Set mining keys and open required ports."
        href="https://docs.signum.network/signum/enable-mining"
      />
      <StepCard
        icon={<HardDrive className="h-5 w-5" />}
        title="Plot & start"
        text="Create plots and connect your miner to your node."
        href="https://docs.signum.network/signum/solo-mining"
      />
    </div>
  );
}

/* ========================= Section: Requirements ========================= */
function Requirements() {
  const items = [
    {
      title: "Hardware",
      text: "Your PC, Raspberry Pi, or NAS. No GPUs required.",
      icon: <Gauge className="h-5 w-5" />,
    },
    {
      title: "Disk space",
      text: "More TBs help. Start with what you have.",
      icon: <HardDrive className="h-5 w-5" />,
    },
    {
      title: "OS",
      text: "Windows, Linux, or macOS.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Network & power",
      text: "Very low usage. Quiet and efficient.",
      icon: <Network className="h-5 w-5" />,
    },
  ];
  return (
    <section id="requirements" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Requirements
      </h2>
      <p className="mt-1 text-neutral-600">Runs on what you already have.</p>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="card p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
                {it.icon}
              </div>
              <div>
                <h3 className="font-semibold text-signum-midnight">
                  {it.title}
                </h3>
                <p className="text-neutral-700 text-[15px]">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-neutral-600">
        Learn more in the docs:{" "}
        <LinkOut href="https://docs.signum.network/signum/requirements">
          Requirements
        </LinkOut>
      </p>
    </section>
  );
}

/* ========================= Section: Plotting ========================= */
function Plotting() {
  return (
    <section id="plotting" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">Plotting</h2>
      <p className="mt-1 text-neutral-600">
        Create plot files once — storage does the heavy lifting.
      </p>
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <div className="card p-5">
          <h3 className="font-semibold text-signum-midnight">Simple (GUI)</h3>
          <p className="mt-1 text-neutral-700 text-[15px]">
            Use a graphical plotter for a friendly setup. You can keep using
            your machine while plotting.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            Guide:{" "}
            <LinkOut href="https://docs.signum.network/signum/plotting">
              Plotting (GUI)
            </LinkOut>
          </p>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold text-signum-midnight">Advanced (CLI)</h3>
          <p className="mt-1 text-neutral-700 text-[15px]">
            Prefer the terminal? Use the CLI plotter for maximum control and
            batching.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            Guide:{" "}
            <LinkOut href="https://docs.signum.network/signum/plotting">
              Plotting (CLI)
            </LinkOut>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ========================= Section: Configure ========================= */
function Configure() {
  return (
    <section id="configure" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Configure & start
      </h2>
      <p className="mt-1 text-neutral-600">Point. Start. Earn.</p>
      <div className="mt-6 card p-6">
        <SegmentedTabs
          tabs={["Pool", "Solo"]}
          render={({ active }) =>
            active === "Pool" ? <ConfigPool /> : <ConfigSolo />
          }
        />
      </div>
    </section>
  );
}

function ConfigPool() {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      <StepCard
        icon={<Wallet className="h-5 w-5" />}
        title="XT Wallet ready"
        text="Account created and secured."
        href="https://docs.signum.network/signum/install-and-set-up-the-xt-wallet"
      />
      <StepCard
        icon={<Users className="h-5 w-5" />}
        title="Assign reward recipient"
        text="Tell the network which pool should receive your rewards."
        href="https://docs.signum.network/signum/assign-reward-recipient"
      />
      <StepCard
        icon={<Settings className="h-5 w-5" />}
        title="Configure miner"
        text="Pool URL, account, plot path — then press start."
        href="https://docs.signum.network/signum/configure-and-start-mining"
      />
    </div>
  );
}

function ConfigSolo() {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      <StepCard
        icon={<Server className="h-5 w-5" />}
        title="Node running"
        text="Fully synced and reachable."
        href="https://docs.signum.network/signum/enable-your-node"
      />
      <StepCard
        icon={<Settings className="h-5 w-5" />}
        title="Enable mining"
        text="Set keys, confirm config, open port if needed."
        href="https://docs.signum.network/signum/enable-mining"
      />
      <StepCard
        icon={<Database className="h-5 w-5" />}
        title="Start miner"
        text="Point the miner to your node and watch shares."
        href="https://docs.signum.network/signum/solo-mining"
      />
    </div>
  );
}

/* ========================= Section: Commitment ========================= */
function Commitment() {
  return (
    <section id="commitment" className="scroll-mt-28">
      <div className="card p-6">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-signum-midnight">
              More commitment. More capacity.
            </h2>
            <p className="mt-1 text-neutral-700 text-[15px]">
              Add a Signa commitment to boost your effective capacity.{" "}
            </p>
            <p className="mt-1 text-neutral-700 text-[15px]">
              Match the network average for <strong>1×</strong>. Go higher to
              unlock up to <strong>8×</strong>.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Learn more:{" "}
              <LinkOut href="https://docs.signum.network/signum/adding-commitment">
                Adding commitment
              </LinkOut>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={Factor0125}
              alt="Factor 1x"
              className="max-h-10"
              loading="lazy"
            />
            <img
              src={Factor1}
              alt="Factor 1x"
              className="max-h-10"
              loading="lazy"
            />
            <img
              src={Factor8}
              alt="Factor 1x"
              className="max-h-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTACommitment() {
  return (
    <div className="-mt-10 bg-gradient-to-b from-signum-acqua/40 to-white text-signum-midnight">
      <section className="pt-6 pb-12">
        {" "}
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Manage your Commitment
          </h1>

          <div className="grid gap-6 xl:grid-cols-2 items-start">
            <div>
              <AddCommitmentButton />
            </div>
            <div>
              <RemoveCommitmentButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========================= Section: Calculator ========================= */
function CalculatorSection() {
  return (
    <section id="calculator" className="scroll-mt-28">
      <div className="mt-4">
        <SignumMiningLanding />
      </div>
    </section>
  );
}

/* ========================= Section: Pools & Network ========================= */
function PoolsAndNetwork() {
  return (
    <section id="pools" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Pools & network
      </h2>
      <div className="mt-4 grid gap-4 lx:grid-cols-2">
        <div className="card p-5">
          <h3 className="font-semibold text-signum-midnight">Find a pool</h3>
          <p className="mt-1 text-neutral-700 text-[15px]">
            Choose a pool that fits your preferences and payout style.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            <LinkOut href="https://docs.signum.network/signum/signum-pools-list">
              Pool list
            </LinkOut>
          </p>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold text-signum-midnight">Network stats</h3>
          <p className="mt-1 text-neutral-700 text-[15px]">
            Explore the chain: blocks, accounts, miners and more.
          </p>
          <div className="mt-3 flex gap-3 text-sm text-neutral-600">
            <LinkOut href="https://explorer.signum.network">Explorer</LinkOut>
            <span>•</span>
            <LinkOut href="https://stats.signum.network/miner/">
              Chain statistics
            </LinkOut>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Section: FAQ ========================= */
function FAQ() {
  const faqs = [
    {
      q: "Plots done but no shares?",
      a: (
        <>
          Check your pool URL and reward recipient. Ensure the miner sees your
          plot path.
          <span className="ml-1">
            <LinkOut href="https://docs.signum.network/signum/configure-and-start-mining">
              Configure miner
            </LinkOut>
          </span>
        </>
      ),
    },
    {
      q: "Can’t assign reward recipient?",
      a: (
        <>
          Make sure you have enough balance for fees and wait for confirmation.
          <span className="ml-1">
            <LinkOut href="https://docs.signum.network/signum/assign-reward-recipient">
              Guide
            </LinkOut>
          </span>
        </>
      ),
    },
    {
      q: "Solo miner can’t reach node?",
      a: (
        <>
          Check API access, port forwarding, and authentication.
          <span className="ml-1">
            <LinkOut href="https://docs.signum.network/signum/enable-mining">
              Enable mining
            </LinkOut>
          </span>
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        FAQ
        <FontAwesomeIcon icon={faCircleQuestion} className="text-lg" />
      </h2>
      <div className="mt-4 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium text-signum-midnight">
                <strong>{f.q}</strong>
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
            </summary>
            <div className="mt-2 text-signum-midnight text-[15px]">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ========================= Section: Final CTA ========================= */
function FinalCTA() {
  return (
    <section className="scroll-mt-28">
      <div className="card p-6 text-center">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          Ready to start?
        </h2>
        <p className="mt-1 text-neutral-700">
          Pick a pool or run your own node — either way, storage powers the
          network.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#quickstart" className="btn btn-primary">
            Start pool mining
          </a>
          <Link to="/poc-plus" className="btn btn-ghost">
            Learn about PoC+
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ========================= Small building blocks ========================= */
function SegmentedTabs({
  tabs,
  render,
}: {
  tabs: ("Pool" | "Solo")[] | string[];
  render: ({ active }: { active: string }) => JSX.Element;
}) {
  const [active, setActive] = useState<string>(tabs[0]);
  return (
    <div>
      <div className="inline-flex rounded-xl ring-1 ring-neutral-200 bg-white p-1">
        {tabs.map((t) => (
          <button
            key={t as string}
            type="button"
            onClick={() => setActive(t as string)}
            className={`px-4 py-2 rounded-lg text-sm transition
              ${
                active === t
                  ? "bg-signum-blue text-white shadow"
                  : "text-signum-midnight hover:bg-neutral-50"
              }
            `}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-6">{render({ active })}</div>
    </div>
  );
}

function StepCard({
  icon,
  title,
  text,
  href,
  extraLink,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
  href: string;
  extraLink?: { label: string; href: string };
}) {
  return (
    <article className="card h-full p-5 flex flex-col">
      {" "}
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-signum-midnight">{title}</h3>
          <p className="mt-1 text-neutral-700 text-[15px]">{text}</p>
        </div>
      </div>
      <div className="mt-auto pt-4 space-y-2">
        {" "}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary-sm w-full  justify-center text-signum-midnight"
        >
          <FontAwesomeIcon icon={faBook} className="text-sm" />
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-sm"
          />
        </a>
        {extraLink && (
          <a
            href={extraLink.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary-sm w-full  justify-center text-signum-midnight"
          >
            {extraLink.label}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-sm"
            />
          </a>
        )}
      </div>
    </article>
  );
}

function LinkOut({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-neutral-900"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}
