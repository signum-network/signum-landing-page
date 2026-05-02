import { useMemo, useState } from "react";
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
  Leaf,
  ShieldCheck,
  PlugZap,
  Cpu,
  FileText,
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
 * HDD Mining Pillar Page
 * Goals:
 * - Rank for "hdd mining" / "hard drive mining" / "proof of capacity mining"
 * - Provide "guide" + "how to" + "faq" content directly on-page
 * - Add structured data (FAQPage + HowTo) for rich results
 */
export default function HDDMiningPage() {
  const faqItems = useMemo(
    () => [
      {
        q: "What is HDD mining?",
        a: "HDD mining (hard drive mining) uses disk space instead of GPUs/ASICs. With Proof of Capacity (PoC), you precompute plot files once, then your storage participates in mining efficiently.",
      },
      {
        q: "Do I need an SSD to mine with Signum?",
        a: "No. SSDs can speed up plotting, but mining itself runs from HDDs. Many miners plot on an SSD (optional) and store finished plots on HDDs.",
      },
      {
        q: "What is plotting?",
        a: "Plotting is the one-time creation of plot files that contain precomputed data used during mining. After plotting, the miner reads small portions from disk each block.",
      },
      {
        q: "Can I mine on a Raspberry Pi or low-power hardware?",
        a: "Yes. Once plots exist, HDD mining can run on low-power devices (Pi/NAS/mini PC) as long as storage is connected and the miner can reach a pool or node.",
      },
      {
        q: "Pool mining vs solo mining — what should I choose?",
        a: "Pool mining is easiest and provides frequent payouts. Solo mining requires running a fully synced node and is better suited for advanced users with larger capacity.",
      },
      {
        q: "What is Signum PoC+ and commitment?",
        a: "PoC+ is Signum’s Proof of Capacity evolution. A SIGNA commitment can boost your effective capacity (up to 8×) and helps align incentives for long-term miners.",
      },
      {
        q: "Why is HDD mining considered energy-efficient?",
        a: "HDD mining avoids continuous high-power computation. Disks do lightweight reads, so power draw and noise are much lower than typical GPU/ASIC mining.",
      },
      {
        q: "My plots are done but I see no shares — what now?",
        a: "Verify pool URL, reward recipient, plot path(s), and that the miner detects your plots. Then check firewall/network access.",
      },
    ],
    []
  );

  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
  }, [faqItems]);

  const howToJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to start HDD mining with Signum (pool mining)",
      description:
        "Step-by-step guide to start HDD mining (Proof of Capacity) with Signum using a pool.",
      totalTime: "PT10M",
      step: [
        {
          "@type": "HowToStep",
          name: "Install XT Wallet",
          text: "Install the Signum XT Wallet, create an account, and back up your passphrase securely.",
          url: "https://www.signum.network/hdd-mining#quickstart",
        },
        {
          "@type": "HowToStep",
          name: "Choose a pool and assign reward recipient",
          text: "Pick a pool and set the reward recipient to the pool account so you can receive payouts.",
          url: "https://www.signum.network/hdd-mining#quickstart",
        },
        {
          "@type": "HowToStep",
          name: "Plot your disk(s)",
          text: "Create plot files once (GUI or CLI). Store plots on HDDs.",
          url: "https://www.signum.network/hdd-mining#plotting",
        },
        {
          "@type": "HowToStep",
          name: "Configure miner and start",
          text: "Point your miner to the pool, set your account, add plot paths, and start mining.",
          url: "https://www.signum.network/hdd-mining#configure",
        },
      ],
    };
  }, []);

  return (
    <>
      <SeoHelmet
        title="HDD Mining (Proof of Capacity) — Start Guide + Calculator | Signum"
        description="Learn HDD mining (hard drive mining) with Signum PoC+. Step-by-step setup for pool or solo mining, plotting guides, hardware tips, commitment boosts, and an earnings calculator."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/hdd-mining"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* HERO */}
      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-blue">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0
                   left-[-10%] top-0 h-[120%] hidden xl:block w-auto opacity-70
                   [mask-image:linear-gradient(to_right,black,transparent_80%)]
                   [-webkit-mask-image:linear-gradient(to_right,black,transparent_80%)]"
        />
        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0
                   hidden lg:block right-[-10%] top-[-40%] h-[170%] w-auto opacity-60 -scale-x-100
                   [mask-image:linear-gradient(to_left,black)]
                   [-webkit-mask-image:linear-gradient(to_left,black)]"
        />

        <Container className="relative z-10 py-12 min-h-110.25 sm:py-16">
          <div className="grid items-center gap-8 xl:grid-cols-2">
            <figure className="order-1 xl:order-2 justify-self-center xl:justify-self-end">
              <img
                src={HDD}
                alt="HDD mining illustration for Signum Proof of Capacity"
                className="w-[260px] sm:w-[320px] md:w-[420px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>

            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">
                HDD MINING • PROOF OF CAPACITY
              </p>

              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                HDD Mining
              </h1>

              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Mine crypto with <strong>hard drives</strong>, not GPUs.
                Signum’s <strong>Proof of Capacity (PoC+)</strong> lets storage
                do the work — quiet, efficient, and friendly to everyday
                hardware.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#quickstart"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Start in ~10 minutes <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#calculator" className="btn-white">
                  Earnings calculator
                </a>
              </div>

              <p className="mt-4 text-sm text-white/90">
                Also known as: <strong>hard drive mining</strong>,{" "}
                <strong>storage mining</strong>,{" "}
                <strong>Proof of Capacity mining</strong>.
              </p>
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

            <div className="md:col-span-2 space-y-10">
              <WhatIsHDDMining />
              <WhySignum />
              <QuickStart />
              <Requirements />
              <Plotting />
              <Configure />
              <Commitment />
              <CTACommitment />
              <CalculatorSection />
              <PoolsAndNetwork />
              <Glossary />
              <FAQ faqItems={faqItems} />
              <FinalCTA />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

/* ========================= Sticky Index ========================= */
function OnThisPage() {
  const items = [
    { href: "#what-is-hdd-mining", label: "What is HDD mining?" },
    { href: "#why-signum", label: "Why Signum" },
    { href: "#quickstart", label: "Quick Start" },
    { href: "#requirements", label: "Hardware & Requirements" },
    { href: "#plotting", label: "Plotting" },
    { href: "#configure", label: "Configure & Start" },
    { href: "#commitment", label: "Commitment (PoC+)" },
    { href: "#calculator", label: "Calculator" },
    { href: "#pools", label: "Pools & Network" },
    { href: "#glossary", label: "Glossary" },
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

/* ========================= Section: What is HDD Mining ========================= */
function WhatIsHDDMining() {
  return (
    <section id="what-is-hdd-mining" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        What is HDD mining (hard drive mining)?
      </h2>

      <div className="mt-2 space-y-3 text-neutral-700 text-[15px]">
        <p>
          <strong>HDD mining</strong> (hard drive mining) is a method of
          securing a blockchain using <strong>disk space</strong> instead of
          continuous heavy computation. Signum uses{" "}
          <strong>Proof of Capacity (PoC+)</strong>: you create{" "}
          <strong>plot files</strong> once, then your miner reads small parts
          from disk to participate in block creation.
        </p>
        <p>
          In practice, this means: <strong>no GPU rigs</strong>, no constant
          high-power hashing, and a setup that can run quietly on everyday
          hardware.
        </p>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        <InfoCard
          icon={<PlugZap className="h-5 w-5" />}
          title="Low power"
          text="Lightweight disk reads instead of constant compute."
        />
        <InfoCard
          icon={<Leaf className="h-5 w-5" />}
          title="Quiet & efficient"
          text="HDDs + low-power devices can run 24/7 without noise."
        />
        <InfoCard
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Proven technology"
          text="PoC mining has a long operational history on Signum."
        />
      </div>
    </section>
  );
}

/* ========================= Section: Why Signum ========================= */
function WhySignum() {
  return (
    <section id="why-signum" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Why mine with Signum?
      </h2>

      <p className="mt-2 text-neutral-600">
        If you’re searching “hdd mining”, you’re probably looking for something
        practical: simple setup, low power, and a network where storage actually
        matters.
      </p>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <div className="card p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-signum-midnight">
                PoC+ built for long-term miners
              </h3>
              <p className="text-neutral-700 text-[15px] mt-1">
                Signum’s Proof of Capacity evolution improves incentive
                alignment and supports a stable mining ecosystem.
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Learn more:{" "}
                <LinkOut href="https://www.signum.network/poc-plus">
                  PoC+
                </LinkOut>
              </p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-signum-midnight">
                Use what you already have
              </h3>
              <p className="text-neutral-700 text-[15px] mt-1">
                Mine on a PC, a NAS, a Raspberry Pi — even low-power setups work
                well once plots exist.
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Quick start below or jump to the{" "}
                <a className="underline underline-offset-4" href="#calculator">
                  calculator
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Section: Quick Start ========================= */
function QuickStart() {
  return (
    <section id="quickstart" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Start HDD mining (pool or solo)
      </h2>
      <p className="mt-1 text-neutral-600">
        Choose a path — pool is recommended for beginners.
      </p>

      <div className="mt-6 card p-6">
        <SegmentedTabs
          tabs={["Pool (recommended)", "Solo (advanced)"]}
          render={({ active }) =>
            active.startsWith("Pool") ? <PoolSteps /> : <SoloSteps />
          }
        />
      </div>

      <div className="mt-4 text-sm text-neutral-600">
        Want the most detailed docs?{" "}
        <LinkOut href="https://docs.signum.network/signum/signum-mining">
          Signum mining documentation
        </LinkOut>
      </div>
    </section>
  );
}

function PoolSteps() {
  return (
    <div className="grid gap-4 xl:grid-cols-3 items-stretch">
      <StepCard
        icon={<Wallet className="h-5 w-5" />}
        title="1) Install XT Wallet"
        text="Create an account and back up your passphrase."
        href="https://docs.signum.network/signum/install-and-set-up-the-xt-wallet"
      />
      <StepCard
        icon={<Users className="h-5 w-5" />}
        title="2) Choose a pool"
        text="Pick a pool and assign the reward recipient."
        href="https://docs.signum.network/signum/assign-reward-recipient"
        extraLink={{
          label: "Pool list",
          href: "https://docs.signum.network/signum/signum-pools-list",
        }}
      />
      <StepCard
        icon={<HardDrive className="h-5 w-5" />}
        title="3) Plot & start mining"
        text="Create plots once and point your miner to the pool."
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
        title="1) Run a node"
        text="Install and fully sync your Signum node."
        href="https://docs.signum.network/signum/enable-your-node"
      />
      <StepCard
        icon={<Settings className="h-5 w-5" />}
        title="2) Enable mining"
        text="Set mining keys and open required ports."
        href="https://docs.signum.network/signum/enable-mining"
      />
      <StepCard
        icon={<HardDrive className="h-5 w-5" />}
        title="3) Plot & start"
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
      text: "PC, NAS, mini PC, or Raspberry Pi. No GPUs required for HDD mining.",
      icon: <Gauge className="h-5 w-5" />,
    },
    {
      title: "Disk space",
      text: "More TBs help. Start with what you have and scale over time.",
      icon: <HardDrive className="h-5 w-5" />,
    },
    {
      title: "OS",
      text: "Windows, Linux, or macOS.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Network & power",
      text: "Low usage. Quiet and efficient compared to typical mining rigs.",
      icon: <Network className="h-5 w-5" />,
    },
  ];

  return (
    <section id="requirements" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Hardware & requirements for HDD mining
      </h2>
      <p className="mt-1 text-neutral-600">
        HDD mining runs on what you already have — the main “upgrade” is more
        disk space.
      </p>

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
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Plotting for HDD mining
      </h2>
      <p className="mt-1 text-neutral-600">
        Plot once — mine for the long run. Plotting creates the files that your
        disks will use during PoC mining.
      </p>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <div className="card p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-signum-midnight">
                Simple (GUI)
              </h3>
              <p className="mt-1 text-neutral-700 text-[15px]">
                Friendly setup with a graphical plotter. You can keep using your
                machine while plotting.
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                Guide:{" "}
                <LinkOut href="https://docs.signum.network/signum/plotting">
                  Plotting (GUI)
                </LinkOut>
              </p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
              <TerminalIcon />
            </div>
            <div>
              <h3 className="font-semibold text-signum-midnight">
                Advanced (CLI)
              </h3>
              <p className="mt-1 text-neutral-700 text-[15px]">
                Prefer the terminal? Use the CLI plotter for batching and
                maximum control.
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                Guide:{" "}
                <LinkOut href="https://docs.signum.network/signum/plotting">
                  Plotting (CLI)
                </LinkOut>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-neutral-600">
        Tip: For best results, avoid interrupting plotting jobs and ensure your
        destination HDD has healthy SMART values.
      </div>
    </section>
  );
}

/* ========================= Section: Configure ========================= */
function Configure() {
  return (
    <section id="configure" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Configure & start HDD mining
      </h2>
      <p className="mt-1 text-neutral-600">
        Point your miner to a pool (recommended) or your own node (solo), then
        start earning.
      </p>

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
              Commitment boosts effective capacity (PoC+)
            </h2>
            <p className="mt-1 text-neutral-700 text-[15px]">
              Add a SIGNA commitment to boost your{" "}
              <strong>effective capacity</strong>.
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
              alt="Factor 0.125x"
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
              alt="Factor 8x"
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
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Manage your Commitment
          </h2>

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
    <section id="calculator" className="scroll-mt-28 mb-0">
      <h2 className="text-2xl font-semibold text-signum-midnight text-center">
        HDD mining calculator
      </h2>
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

/* ========================= Section: Glossary ========================= */
function Glossary() {
  const items = [
    {
      term: "HDD mining",
      def: "Mining using hard drive storage instead of continuous compute.",
    },
    {
      term: "Proof of Capacity (PoC)",
      def: "Consensus method that uses precomputed plot data stored on disk.",
    },
    {
      term: "PoC+",
      def: "Signum’s enhanced PoC design with commitment-based incentives.",
    },
    {
      term: "Plot / plotting",
      def: "One-time creation of plot files used during mining.",
    },
    {
      term: "Pool mining",
      def: "Mining together for frequent payouts; simplest for most users.",
    },
    {
      term: "Solo mining",
      def: "Mining with your own node; advanced setup, payouts are less frequent.",
    },
    {
      term: "Reward recipient",
      def: "Setting that routes mining rewards to a pool or recipient account.",
    },
    {
      term: "Commitment",
      def: "Locked SIGNA that boosts effective capacity and aligns long-term incentives.",
    },
  ];

  return (
    <section id="glossary" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">Glossary</h2>
      <p className="mt-1 text-neutral-600">
        Quick definitions for the most common HDD mining terms.
      </p>

      <div className="mt-4 card p-6">
        <dl className="space-y-4">
          {items.map((it) => (
            <div
              key={it.term}
              className="border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0"
            >
              <dt className="font-semibold text-signum-midnight">{it.term}</dt>
              <dd className="text-neutral-700 text-[15px] mt-1">{it.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ========================= Section: FAQ ========================= */
function FAQ({ faqItems }: { faqItems: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        FAQ <FontAwesomeIcon icon={faCircleQuestion} className="text-lg" />
      </h2>

      <div className="mt-4 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        {faqItems.map((f, i) => (
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

      <p className="mt-3 text-sm text-neutral-600">
        More troubleshooting:{" "}
        <LinkOut href="https://docs.signum.network/signum/configure-and-start-mining">
          Configure & start mining
        </LinkOut>
      </p>
    </section>
  );
}

/* ========================= Final CTA ========================= */
function FinalCTA() {
  return (
    <section className="scroll-mt-28">
      <div className="card p-6 text-center">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          Ready to start HDD mining?
        </h2>
        <p className="mt-1 text-neutral-700">
          Start with a pool for the smoothest setup — then scale storage over
          time.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#quickstart" className="btn btn-primary">
            Start now
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
  tabs: string[];
  render: ({ active }: { active: string }) => JSX.Element;
}) {
  const [active, setActive] = useState<string>(tabs[0]);
  return (
    <div>
      <div className="inline-flex rounded-xl ring-1 ring-neutral-200 bg-white p-1">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-lg text-sm transition
              ${
                active === t
                  ? "bg-signum-blue text-white shadow"
                  : "text-signum-midnight hover:bg-neutral-50"
              }`}
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
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary-sm w-full justify-center text-signum-midnight"
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
            className="btn btn-primary-sm w-full justify-center text-signum-midnight"
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

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-signum-midnight">{title}</h3>
          <p className="text-neutral-700 text-[15px] mt-1">{text}</p>
        </div>
      </div>
    </div>
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

function TerminalIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center">⌘</span>
  );
}
