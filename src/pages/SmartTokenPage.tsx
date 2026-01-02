import SeoHelmet from "../components/SEOHelmet";
import Container from "../components/Container";
import { Link } from "react-router-dom";

import Platine from "../assets/img/mining/Platine.svg";
import Token from "../assets/img/main/Tokens.svg";
import TokenCreation from "../assets/img/tokens/TokenCreation.svg";
import TokenFees from "../assets/img/tokens/TokenFees.svg";
import TokenFubgible from "../assets/img/tokens/TokenFubgible.svg";
import TokenWorld from "../assets/img/tokens/TokenWorldwide.svg";
import TokenDistribution from "../assets/img/tokens/TokenDistribution.svg";
import TokenMarket from "../assets/img/tokens/TokenMarket.svg";
import TokenTrading from "../assets/img/tokens/TokenTrading.svg";
import Club from "../assets/img/tokens/Club.svg";
import Crowd from "../assets/img/tokens/Crowd.svg";
import Rewards from "../assets/img/tokens/Rewards.svg";
import Tipping from "../assets/img/tokens/Tipping.svg";
import Community from "../assets/img/tokens/Community.svg";
import VIP from "../assets/img/tokens/VIP.svg";
import SignumJS from "../assets/img/tokens/Signum_Badge_JS.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faDownload,
  faPenToSquare,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

export default function TokensPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Tokens — simple, on-chain, everywhere • Signum Network"
        description="Create and transfer on-chain tokens with low fees. Built-in market, distributions to up to 1.2M holders per block. Sustainable PoC+."
        image="https://www.signum.network/og/tokens.svg"
        url="https://www.signum.network/tokens"
      />

      {/* HERO */}
      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-darkblue ">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0 left-[-10%] top-0 h-[120%] w-auto opacity-70 hidden xl:block
                     [mask-image:linear-gradient(to_right,black,transparent_80%)]
                     [-webkit-mask-image:linear-gradient(to_right,black,transparent_80%)]"
        />
        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0 right-[-25%] top-[-40%] h-[170%] w-auto opacity-60 hidden lg:block -scale-x-100
                     [mask-image:linear-gradient(to_left,black)]
                     [-webkit-mask-image:linear-gradient(to_left,black)]"
        />

        <Container className="relative z-10 py-12 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <figure className="order-1 md:order-2 justify-self-center md:justify-self-end">
              <img
                src={Token}
                alt="Signum Tokens illustration"
                className="w-[260px] sm:w-[420px] md:w-[520px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>

            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">SMART TOKENS</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Ideas, simple on-chain
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Create and transfer digital assets with near-zero friction.
                Fully on-chain, low fees, and sustainably secured by PoC+.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://www.signumswap.com/tokens/new"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Create a token
                </a>
                <a
                  href="#highlights"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Learn the basics
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
              <OnThisPageTokens />
            </aside>
            <div className="md:col-span-2 space-y-10 min-w-0">
              <WhatAreTokens />
              <HighlightsGrid />
              <UseCasesGrid />
              <CreateTokenSteps />
              <MarketSection />
              <DevBox />
              <FAQ />
              <FinalCTA />
            </div>
          </div>
        </Container>
        <TokensStatsBand />
      </main>
    </>
  );
}

/* ========================= Sticky Index ========================= */
function OnThisPageTokens() {
  const items = [
    { href: "#what", label: "What are tokens" },
    { href: "#highlights", label: "Highlights" },
    { href: "#use-cases", label: "Use cases" },
    { href: "#how-to-create", label: "Create a token" },
    { href: "#market", label: "Token market" },
    { href: "#dev", label: "Developers" },
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

/* ========================= Stats Band (full-bleed) ========================= */
function TokensStatsBand() {
  const stats = [
    { label: "Creation fee", value: "150 SIGNA" },
    { label: "On-chain market", value: "Trade with SIGNA" },
    { label: "Block time", value: "~4 min" },
    { label: "Distribution scale", value: "1 TX for all holders" },
    { label: "Consensus", value: "PoC+" },
  ];
  return (
    <section className="relative bg-signum-blue text-white overflow-hidden">
      <Container className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
    </section>
  );
}

/* ========================= What are tokens ========================= */
function WhatAreTokens() {
  return (
    <section id="what" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        What are Signum Smart Tokens?
      </h2>
      <p className="mt-3 text-signum-midnight">
        Beyond the native coin SIGNA, Signum lets anyone create smart tokens
        with ne simple transaction. Because they’re native to Signum, they
        automatically share the network’s security and are ready to use
        immediately—no sidechains, bridges, or extra code.
      </p>
      <p className="mt-3 text-signum-midnight">
        Use them for community coins, loyalty points, access passes, in-app
        credits, or even governance. Transfers are low-fee and fully on-chain —
        no sidechains or bridges.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card p-5">
          <h3 className="font-semibold text-signum-midnight">
            On-chain by default
          </h3>
          <p className="mt-2 text-signum-midnight text-[15px]">
            Tokens live directly on the Signum blockchain — simple and
            verifiable.
          </p>
        </article>
        <article className="card p-5">
          <h3 className="font-semibold text-signum-midnight">
            Human-scale fees
          </h3>
          <p className="mt-2 text-signum-midnight text-[15px]">
            Affordable creation and transfers — built for everyday use.
          </p>
        </article>
        <article className="card p-5">
          <h3 className="font-semibold text-signum-midnight">
            Sustainable by PoC+
          </h3>
          <p className="mt-2 text-signum-midnight text-[15px]">
            Energy-light consensus that keeps things efficient.
          </p>
        </article>
      </div>
    </section>
  );
}

/* ========================= Highlights ========================= */
function HighlightsGrid() {
  const cards = [
    {
      title: "Easy creation",
      body: "Creating tokens is as easy as sending an email. Set your token economics and publish from your wallet.",
      img: TokenCreation,
    },
    {
      title: "Fungible by nature",
      body: "Transfer, buy, and sell right after creation — no extra setup required.",
      img: TokenFubgible,
    },
    {
      title: "Low fees",
      body: "Creating a token costs 150 SIGNA. There are no recurring costs after creation.",
      img: TokenFees,
    },
    {
      title: "Accessible worldwide",
      body: "Available anywhere the blockchain is reachable — no borders attached.",
      img: TokenWorld,
    },
    {
      title: "Smart distributions",
      body: "Distribute SIGNA or other tokens to up to 1,200,000 holders per block.",
      img: TokenDistribution,
    },
    {
      title: "Integrated market",
      body: "Trade any created token for SIGNA on the on-chain market — accessible via SignumSwap.",
      img: TokenMarket,
    },
  ];
  return (
    <section id="highlights" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Highlights
      </h2>
      <p className="mt-2 text-signum-midnight">
        The essentials that make Signum tokens practical — and powerful.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article key={c.title} className="card p-6 h-full overflow-hidden">
            <img
              src={c.img}
              alt=""
              className="h-14 w-14 object-contain mb-3 opacity-90"
            />
            <h3 className="font-semibold text-signum-midnight">{c.title}</h3>
            <p className="mt-2 text-[15px] text-signum-midnight">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ========================= Use cases ========================= */
function UseCasesGrid() {
  const cases = [
    {
      title: "Community & fan tokens",
      img: Community,
    },
    {
      title: "Loyalty & rewards",
      img: Rewards,
    },
    {
      title: "In-app credits & tipping",
      img: Tipping,
    },
    {
      title: "Event & access passes",
      img: VIP,
    },
    {
      title: "Club & treasury shares",
      img: Club,
    },
    {
      title: "Crowdsales & launches",
      img: Crowd,
    },
  ];
  return (
    <section id="use-cases" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">Use cases</h2>
      <p className="mt-2 text-signum-midnight">
        From communities to products — tokens add simple, programmable value.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <article key={c.title} className="card p-6 h-full overflow-hidden">
            <img
              src={c.img}
              alt=""
              className="h-12 w-12 object-contain mb-3 opacity-90"
            />
            <h3 className="font-semibold text-signum-midnight">{c.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ========================= Create a token ========================= */
function CreateTokenSteps() {
  type Step = {
    step: string;
    title: string;
    body: string;
    img: IconProp;
    link?: { label: string; to: string };
    extern?: { label: string; href: string };
  };

  const steps: Step[] = [
    {
      step: "1",
      title: "Install XT Wallet & fund fees",
      body: "Set up the XT Wallet and add SIGNA for fees.",
      img: faDownload,
      link: { label: "Get XT Wallet", to: "/wallet" },
    },
    {
      step: "2",
      title: "Define your token",
      body: "Choose a name, symbol, total supply, decimals, and an optional description.",
      img: faPenToSquare,
    },
    {
      step: "3",
      title: "Create on-chain",
      body: "Publish your token from the wallet — it’s ready to use immediately.",
      img: faDiagramProject,
      extern: {
        label: "Open Token Creator",
        href: "https://www.signumswap.com/tokens/new",
      },
    },
  ];

  return (
    <section id="how-to-create" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Create a token
      </h2>
      <p className="mt-2 text-signum-midnight">
        Three simple steps — then your token is live and transferable.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <article
            key={s.title}
            className="card p-6 flex flex-col h-full overflow-hidden"
          >
            <FontAwesomeIcon
              icon={s.img}
              style={{ color: "#021851" }}
              size="xl"
            />
            <div className="text-xs font-medium text-neutral-500">
              Step {s.step}
            </div>
            <h3 className="mt-1 font-semibold text-signum-midnight">
              {s.title}
            </h3>
            <p className="mt-2 text-[15px] text-signum-midnight">{s.body}</p>

            {/* Buttons */}
            {s.link && (
              <Link to={s.link.to} className="btn btn-ghost mt-4 w-fit">
                {s.link.label}
              </Link>
            )}
            {!s.link && s.extern && (
              <a
                href={s.extern.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4 w-fit"
              >
                {s.extern.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ========================= Market ========================= */
function MarketSection() {
  return (
    <section id="market" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">
        Integrated token market
      </h2>
      <p className="mt-2 text-signum-midnight">
        Tokens are tradable for SIGNA on the on-chain market. <br></br>
        Access it via SignumSwap — the first DeFi portal for Signum.
      </p>
      <div className="mt-6 card p-14 overflow-hidden">
        <img
          src={TokenTrading}
          alt="Market visual placeholder"
          className="m-auto  w-auto h-auto justify-center"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://www.signumswap.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Open SignumSwap
        </a>
        <a
          href="https://explorer.signum.network/assets/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
        >
          View in Explorer
        </a>
      </div>
    </section>
  );
}

/* ========================= Developers ========================= */
function DevBox() {
  return (
    <section id="dev" className="scroll-mt-28">
      {/* Kopfbereich: Text links, Icon rechts */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Developers
          </h2>
          <p className="mt-2 text-signum-midnight">
            Build with the Signum SDKs and APIs.
            <br />
            Create, transfer, and distribute tokens with a few lines of code.
          </p>
        </div>

        <img
          src={SignumJS}
          alt="Signum JS"
          className="hidden md:block h-24 lg:h-32 xl:h-36"
        />
      </div>

      <article className="card mt-6 p-6">
        <h3 className="font-semibold text-signum-midnight">SDKs & APIs</h3>
        <p className="mt-2 text-[15px] text-neutral-700">
          Use <code>@signumjs/*</code> packages for assets, accounts, and
          transactions.
        </p>

        <pre className="mt-4 rounded-xl bg-neutral-900 text-white text-xs p-4 overflow-x-auto whitespace-pre">
          {`// Install
            npm i @signumjs/core @signumjs/util

            // Create a client
            import { LedgerClientFactory } from "@signumjs/core";
            const ledger = LedgerClientFactory.createClient({
              nodeHost: "https://europe.signum.network"
            });`}
        </pre>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://docs.signum.network/signum/signumjs"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            Open Docs
          </a>
          <a
            href="https://signum-network.github.io/signumjs/index.html"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            API Guide
          </a>
        </div>
      </article>
    </section>
  );
}
/* ========================= FAQ ========================= */
function FAQ() {
  const faqs = [
    {
      q: "How much does token creation cost?",
      a: "Creating a token costs 150 SIGNA. Transfers use small network fees.",
    },
    {
      q: "Are tokens fully on-chain?",
      a: "Yes. Tokens live on the Signum blockchain — no sidechains or bridges required.",
    },
    {
      q: "Can I distribute dividends to many holders?",
      a: "Yes — you can distribute to up to 1,200,000 holders per block, in SIGNA or other tokens.",
    },
    {
      q: "How do I see a token in my wallet?",
      a: "Add the token in XT Wallet by searching or using its asset ID; then it appears in your list.",
    },
    {
      q: "Is there a built-in market?",
      a: "Yes — an on-chain market lets you trade tokens for SIGNA. Access it via SignumSwap.",
    },
    {
      q: "Is Signum sustainable?",
      a: "Yes — PoC+ uses disk capacity and minimal energy, keeping the network efficient.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-signum-midnight">FAQ</h2>
      <div className="mt-4 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium text-signum-midnight">
                <strong>{f.q}</strong>
              </span>
              <span className="ml-4 text-neutral-400 transition group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-2 text-neutral-700 text-[15px]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ========================= Final CTA ========================= */
function FinalCTA() {
  return (
    <section className="scroll-mt-28 text-center">
      <div className="card p-10">
        <h3 className="text-xl font-semibold text-signum-midnight">
          Launch something people can actually use.
        </h3>
        <p className="mt-2 text-neutral-700">
          Create a token in minutes — and keep everything on-chain.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.signumswap.com/tokens/new"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Create a token
          </a>
          <a
            href="https://explorer.signum.network/assets/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            View in Explorer
          </a>
        </div>
      </div>
    </section>
  );
}
