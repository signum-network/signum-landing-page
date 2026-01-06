import { Link } from "react-router-dom";
import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import Platine from "../assets/img/mining/Platine.svg";
import Processor from "../assets/img/smartcontracts/SignumProcessor.svg";
import Maps from "../assets/img/smartcontracts/PersistentMaps.png";
import Randomness from "../assets/img/smartcontracts/RandomnessOnChain.png";
import TokenMgmt from "../assets/img/smartcontracts/TokenManagement.png";
import SmartJC from "../assets/img/smartcontracts/SmartContracts.png";
import GreenContract from "../assets/img/smartcontracts/GreenContract.png";
import { ArrowRight } from "lucide-react";

export default function SmartContractsPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Smart Contracts - Self-running, efficient, on-chain"
        description="Self-executing smart contracts (AT) on Signum: schedule by block height, interoperate on-chain with SIP-38 Maps, and run with human-scale fees."
        image="https://www.signum.network/og/smart-contracts.png"
        url="https://www.signum.network/smart-contracts"
      />
      {/* HERO */}
      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-darkblue ">
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
          src={Processor}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0 
                        hidden lg:block
                        right-[-20%] top-[-40%] h-[170%]           
                        w-auto opacity-60 
                        -scale-x-100
                        [mask-image:linear-gradient(to_left,black)]
                        [-webkit-mask-image:linear-gradient(to_left,black)]"
        />
        <Container className="relative z-10 py-12 min-h-110.25 sm:py-16">
          <div className="grid items-center gap-8 xl:grid-cols-2">
            <div className="order-2 xl:order-1 text-center xl:text-left">
              <p className="text-sm tracking-widest text-white">
                SMART CONTRACTS
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Self-executing — reliably and on-chain
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Signum delivers lightweight, self-executing smart contracts (AT)
                that can be scheduled by block height, interoperate on-chain,
                and run with human-scale fees.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://github.com/signum-network/signum-smartj"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Build with SmartJ <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/deleterium/SmartC"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white"
                >
                  Build with SmartC <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <div className="relative isolate">
          <Container className="py-12">
            <WhyDifferent />
            <Framework />
          </Container>
          <SpecsBand />
          <Container className="py-12">
            <MapsSection />
            <RandomnessSection />
            <GreenContractsSection />
            <TokenAutomation />
            <FAQ />
          </Container>
          <FinalCTA />
        </div>
      </main>
    </>
  );
}
/* ---------------------------------------------
   Specs used in the band
----------------------------------------------*/
const SMART_CONTRACT_SPECS = [
  {
    label: "Step-fee",
    value: "0.001",
    unit: "SIGNA",
    blurb:
      "Fee charged per executed operation (e.g., arithmetic, jumps, storage ops).",
  },
  {
    label: "Max steps per block",
    value: "1,000,000",
    unit: "steps",
    blurb:
      "If reached, the contract state is saved and execution continues next block.",
  },
  {
    label: "Cost per page",
    value: "0.01",
    unit: "SIGNA",
    blurb:
      "Registration/creation fee per code page (each page up to 256 bytes).",
  },
  {
    label: "Maximum pages",
    value: "40",
    unit: "pages",
    blurb: "Maximum compiled code a contract can register on-chain.",
  },
];

/* ---------------------------------------------
   Sections
----------------------------------------------*/

function SpecsBand() {
  return (
    <section className="relative bg-signum-blue text-white">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-4 gap-6">
          {SMART_CONTRACT_SPECS.map((s) => (
            <article
              key={s.label}
              className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)]"
            >
              <div className="text-xs uppercase tracking-widest text-white/70">
                {s.label}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                {s.value}{" "}
                <span className="text-white/70 text-base">{s.unit}</span>
              </div>
              <p className="mt-2 text-sm text-white/80">{s.blurb}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyDifferent() {
  return (
    <section className="bg-white">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          Why Signum smart contracts are different
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              Self-running by design
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              Schedule execution at a specific block height. No external
              triggers needed — great for time-based logic like settlements and
              round ends.
            </p>
          </article>
          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              Efficient & sustainable
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              Human-scale fees on energy-light PoC+. Predictable and affordable
              for real-world use.
            </p>
          </article>
          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              On-chain finality
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              Contract state lives directly on chain — no sidechains or
              middleware required.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

function Framework() {
  return (
    <section id="framework" className="scroll-mt-28">
      <Container className="py-14 grid gap-10 xl:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            A framework designed for innovative solutions
          </h2>
          <p className="mt-3 text-neutral-700">
            Build with languages you know. Use <strong>SmartJ (Java)</strong>{" "}
            for a clean, high-level experience, or <strong>SmartC (C)</strong>{" "}
            for compact, low-level control. Both compile to Signum’s AT bytecode
            for deterministic on-chain execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="btn btn-ghost"
              href="https://github.com/signum-network/signum-smartj"
              target="_blank"
              rel="noreferrer"
            >
              SmartJ on Github
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/deleterium/SmartC"
              target="_blank"
              rel="noreferrer"
            >
              SmartC on GitHub
            </a>
          </div>
        </div>
        <div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] grid place-items-center overflow-hidden">
            <img
              src={SmartJC}
              alt="Java or C easy to learn"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function MapsSection() {
  return (
    <section id="maps" className="scroll-mt-14 bg-white">
      <Container className="py-14 grid gap-10 xl:grid-cols-2 items-center">
        <div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] grid place-items-center overflow-hidden">
            <img
              src={Maps}
              alt="Persistent Maps onchain"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Persistent Maps (SIP-38) & interoperability
          </h2>
          <p className="mt-3 text-neutral-700">
            With <strong>SIP-38 Maps</strong>, contracts can store and read
            arbitrary <code>(key1, key2) → value</code> entries in persistent
            storage. Contracts can also{" "}
            <strong>read maps from other contracts</strong> without sending a
            transaction.
          </p>
          <ul className="mt-3 list-disc pl-5 text-neutral-700">
            <li>Scalable participant registries</li>
            <li>Oracle-style cross-contract reads</li>
            <li>Cleaner designs for on-chain protocols</li>
          </ul>
          <div className="mt-4">
            <a
              className="btn btn-ghost"
              href="https://github.com/signum-network/SIPs/blob/master/SIP/sip-38.md"
              target="_blank"
              rel="noreferrer"
            >
              Read SIP-38
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function RandomnessSection() {
  return (
    <section id="randomness" className="scroll-mt-14 bg-white">
      <Container className="py-14 flex flex-col-reverse xl:grid gap-10 xl:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Fair randomness for games & lotteries
          </h2>
          <p className="mt-3 text-neutral-700">
            Signum contracts can derive randomness from multiple historical
            block hashes,
            <strong> mixing bits across several blocks</strong> to form a
            128-bit seed. Combined with scheduled execution at a specific block
            height, attempts to influence outcomes become unprofitable.
          </p>
          <p className="mt-3 text-neutral-700">
            Great for lotteries, raffles, and time-based drawings — no trusted
            oracles required.
          </p>
        </div>
        <div className="order-2 md:order-1">
          <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] grid place-items-center overflow-hidden">
            <img
              src={Randomness}
              alt="Fair randomness for games & lotteries"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TokenAutomation() {
  return (
    <section id="token-automation" className="scroll-mt-14 bg-white">
      <Container className="py-14 flex flex-col-reverse xl:grid gap-10 xl:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Token automation: create, mint & distribute
          </h2>
          <p className="mt-3 text-neutral-700">
            Contracts can create and manage Signum tokens, then automate payouts
            using the built-in <strong>“Distribute to Holders”</strong>{" "}
            transaction — capable of sending SIGNA or tokens to{" "}
            <strong>up to 1,200,000 holders per block</strong>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/tokens" className="btn btn-ghost">
              Learn about tokens
            </Link>
            <a
              className="btn btn-ghost"
              href="https://explorer.signum.network"
              target="_blank"
              rel="noreferrer"
            >
              Browse on Explorer
            </a>
          </div>
        </div>
        <div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] grid place-items-center overflow-hidden">
            <img
              src={TokenMgmt}
              alt="Token automation"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Can contracts run without incoming transactions?",
      a: "Yes. You can schedule execution at a specific block height. No external triggers required.",
    },
    {
      q: "How big can a contract be?",
      a: "Up to 40 pages (each page up to 256 bytes).",
    },
    {
      q: "How do fees work?",
      a: "Fees are per executed step and per code page. See the spec band above for typical values.",
    },
    {
      q: "Which language should I pick?",
      a: "SmartJ if you prefer Java and higher-level ergonomics, SmartC if you want compact low-level control. Both compile to the same AT bytecode.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-28 bg-white">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {items.map((it) => (
            <article key={it.q} className="card p-6">
              <h3 className="font-semibold text-signum-midnight">{it.q}</h3>
              <p className="mt-2 text-[15px] text-neutral-700">{it.a}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-signum-midnight text-white">
      <Container className="py-12 text-center">
        <h3 className="text-2xl font-semibold">Ready to build?</h3>
        <p className="mt-2 text-white/80">
          Explore the docs, pick SmartJ or SmartC, and ship your first contract.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            className="btn btn-primary"
            href="https://github.com/signum-network/signum-smartj"
            target="_blank"
            rel="noreferrer"
          >
            Bulid with SmartJ
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/deleterium/SmartC"
            target="_blank"
            rel="noreferrer"
          >
            Build with SmartC
          </a>
        </div>
      </Container>
    </section>
  );
}

function GreenContractsSection() {
  return (
    <section id="green-contracts" className="scroll-mt-14 bg-white">
      <Container className="py-14 grid gap-10 xl:grid-cols-2 items-center">
        {/* Visual */}
        <div>
          <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] grid place-items-center overflow-hidden">
            <img
              src={GreenContract}
              alt="SIP-30 Green / Carbon Contracts"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Green Contracts
          </h2>
          <p className="mt-3 text-neutral-700">
            With <strong>SIP-30</strong>, a contract’s <em>machine code</em> can
            be referenced from an existing contract using the transaction’s{" "}
            <code>fullHash</code> instead of uploading the code again. The new
            contract reuses the original code on-chain.
          </p>

          <ul className="mt-3 list-disc pl-5 text-neutral-700">
            <li>
              <strong>Identical logic by reference</strong> – guarantees the
              exact same code
            </li>
            <li>
              <strong>No duplicate storage</strong> – saves block space
            </li>
            <li>
              <strong>Lower deployment fees</strong> – code is just referenced
            </li>
            <li>
              <strong>Scales instances</strong> – ideal for many contracts like
              NFTs
            </li>
          </ul>

          <div className="mt-3 rounded-xl bg-signum-acqua/40 p-3 text-[13px] text-signum-midnight/80">
            <span className="font-medium">
              <strong>Spec note:</strong>
            </span>{" "}
            When deploying via API, leave <code>code</code> empty and set{" "}
            <code>referencedTransactionFullHash</code> to the original contract
            deployment. The node will use that code and related params (
            <code>dpages</code>, <code>cspages</code>, <code>uspages</code>,{" "}
            <code>minActivationAmountNQT</code>).
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="btn btn-ghost"
              href="https://github.com/signum-network/SIPs/blob/master/SIP/sip-30.md"
              target="_blank"
              rel="noreferrer"
            >
              Read SIP-30
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
