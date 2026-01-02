import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import Platine from "../assets/img/mining/Platine.svg";
import Alias from "../assets/img/alias/AliasTeaser.svg";
import {
  ArrowRight,
  AtSign,
  Globe,
  FileText,
  Shield,
  RefreshCcw,
  Wallet,
  Clock,
  Tag,
} from "lucide-react";

export default function AliasesPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Aliases — human-readable names on-chain • Signum Network"
        description="Claim a human-readable alias on Signum and point it to an account, a URL, or a text record. SIP-48 adds “_”, STLD namespaces, and a renewal model similar to web domains."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/aliases"
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
                src={Alias}
                alt="Signum Tokens illustration"
                className="w-[260px] sm:w-[420px] md:w-[520px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>

            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">
                SMART ALIASES
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Human-readable names — on-chain & flexible
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Claim a readable alias and point it to a Signum account, a URL,
                or a text record. Native to the blockchain — simple to manage
                and easy to share.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://www.signumswap.com/alias"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Create / Manage Alias <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.signum.domains/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Explore Signum Domains <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <div className="relative isolate">
          <Container className="py-12">
            <WhatAreAliases />
            <WhatCanAnAliasBe />
          </Container>

          <StatsBand />

          <Container className="py-12">
            <Sip48 />
            <Stlds />
            <Renewal />
            <LegacyAliases />
            <TransferTrading />
            <GettingStarted />
            <FAQ />
          </Container>

          <FinalCTA />
        </div>
      </main>
    </>
  );
}

/* ---------------------------------------------
   Stats used in the band
----------------------------------------------*/
const ALIAS_STATS = [
  {
    label: "Allowed characters",
    value: "a–z, 0–9, _",
    unit: "",
    blurb: "Underscore “_” is supported in addition to letters and numbers.",
  },
  {
    label: "Max alias length",
    value: "100",
    unit: "chars",
    blurb: "Maximum length remains unchanged.",
  },
  {
    label: "Default namespace",
    value: ".signum",
    unit: "free",
    blurb:
      "Aliases created without selecting an STLD resolve under “.signum” at no cost.",
  },
  {
    label: "Renewal cycle",
    value: "3",
    unit: "months",
    blurb:
      "Newly registered aliases are tied to a renewal subscription on a fixed cycle.",
  },
  {
    label: "Renewal amount",
    value: "12.5",
    unit: "SIGNA",
    blurb:
      "If renewal fails or is cancelled, the alias is deleted and becomes available again.",
  },
];

const DEFAULT_STLDS = [
  "blockchain",
  "coin",
  "crypto",
  "dao",
  "decentral",
  "dex",
  "free",
  "nft",
  "p2p",
  "sig",
  "signa",
  "sns",
  "w3",
  "wallet",
  "web3",
  "x",
  "y",
  "z",
];

/* ---------------------------------------------
   Sections
----------------------------------------------*/

function StatsBand() {
  return (
    <section className="relative bg-signum-blue text-white">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {ALIAS_STATS.map((s) => (
            <article
              key={s.label}
              className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)]"
            >
              <div className="text-xs uppercase tracking-widest text-white/70">
                {s.label}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                {s.value}{" "}
                {s.unit ? (
                  <span className="text-white/70 text-base">{s.unit}</span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-white/80">{s.blurb}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhatAreAliases() {
  return (
    <section>
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          What are Signum Aliases?
        </h2>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          Ease of use is at the core of Signum. Aliases are unique,
          human-friendly names stored on-chain that can represent a Signum
          account or a piece of data. Instead of sharing long identifiers, you
          can share a readable name and decide what it points to.
        </p>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          Aliases are native features of the Signum blockchain — you can create
          them, update them, transfer them, and even sell them.
        </p>
      </Container>
    </section>
  );
}

function WhatCanAnAliasBe() {
  const items = [
    {
      icon: Wallet,
      title: "Account pointer",
      text: "Map a readable name to a Signum account for easier sending and sharing.",
    },
    {
      icon: Globe,
      title: "URL / link pointer",
      text: "Point your alias to a website, profile, landing page, or other link.",
    },
    {
      icon: FileText,
      title: "Text record",
      text: "Store a short public record: notes, handles, metadata, or instructions.",
    },
    {
      icon: Shield,
      title: "Tradable name",
      text: "Transfer or sell an alias like a digital right to a name — the pointer moves with ownership.",
    },
  ];

  return (
    <section>
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          What can an alias be?
        </h2>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          An alias is a flexible on-chain pointer. Choose what it represents and
          update it anytime.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <article key={it.title} className="card p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-neutral-100 ring-1 ring-black/5 grid place-items-center">
                  <it.icon className="h-5 w-5 text-signum-midnight" />
                </div>
                <h3 className="font-semibold text-signum-midnight">
                  {it.title}
                </h3>
              </div>
              <p className="mt-3 text-[15px] text-neutral-700">{it.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Sip48() {
  return (
    <section id="sip-48" className="scroll-mt-28 bg-white">
      <Container className="py-14 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Modernized aliases with SIP-48
          </h2>
          <p className="mt-3 text-neutral-700">
            SIP-48 modernizes the alias system to better match real-world naming
            and future use cases — including domains and application naming. It
            introduces a broader naming format, adds top-level namespaces
            (STLDs), and brings a renewal model comparable to web domains.
          </p>

          <ul className="mt-4 space-y-3 text-neutral-700">
            <li className="flex gap-3">
              <span className="mt-1">
                <AtSign className="h-4 w-4 text-signum-midnight" />
              </span>
              <span>
                <strong>New allowed character:</strong> underscore{" "}
                <code>_</code> in addition to letters and numbers.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1">
                <Tag className="h-4 w-4 text-signum-midnight" />
              </span>
              <span>
                <strong>Namespaces (STLDs):</strong> register names under
                top-level domains like <code>.crypto</code>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1">
                <Clock className="h-4 w-4 text-signum-midnight" />
              </span>
              <span>
                <strong>Renewal model:</strong> new aliases can renew
                automatically on a recurring schedule.
              </span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="btn btn-ghost inline-flex items-center gap-2"
              href="https://github.com/signum-network/SIPs/blob/master/SIP/sip-48.md"
              target="_blank"
              rel="noreferrer"
            >
              Read SIP-48 <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="btn btn-ghost inline-flex items-center gap-2"
              href="https://www.signum.domains/"
              target="_blank"
              rel="noreferrer"
            >
              Explore domains <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-signum-midnight">
            A naming layer you can actually share
          </h3>
          <p className="mt-2 text-[15px] text-neutral-700">
            Aliases make addresses and on-chain records easier to use — while
            staying verifiable and transferable. With STLDs, the same name can
            exist under different namespaces.
          </p>

          <div className="mt-4 rounded-2xl bg-neutral-50 ring-1 ring-neutral-200/70 p-4">
            <div className="text-sm text-neutral-600">Example namespaces</div>
            <div className="mt-2 flex flex-wrap gap-2 font-mono text-sm">
              <span className="rounded-xl bg-white ring-1 ring-neutral-200/70 px-3 py-1">
                spaceship.signum
              </span>
              <span className="rounded-xl bg-white ring-1 ring-neutral-200/70 px-3 py-1">
                spaceship.crypto
              </span>
              <span className="rounded-xl bg-white ring-1 ring-neutral-200/70 px-3 py-1">
                spaceship.wallet
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-signum-acqua/40 p-3 text-[13px] text-signum-midnight/80">
            <strong>Legacy note:</strong> aliases registered before SIP-48
            activation remain with the current owner without renewals unless
            they are updated or sold later.
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stlds() {
  return (
    <section id="stlds" className="scroll-mt-28 bg-white">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          STLDs (Signum Top-Level Domains)
        </h2>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          SIP-48 adds STLDs — Signum top-level domains — so the same name can
          exist under different namespaces (similar to domains on the web).
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              Default behavior
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              Aliases created without selecting an STLD (including all legacy
              aliases created before SIP-48 activates) use{" "}
              <strong>.signum</strong> for free.
            </p>

            <div className="mt-4 rounded-2xl bg-neutral-50 ring-1 ring-neutral-200/70 p-4">
              <div className="text-sm text-neutral-600">Examples</div>

              <div className="mt-3">
                <div className="text-[13px] text-neutral-600">
                  Register <strong>“Spaceship”</strong> (no STLD):
                </div>
                <div className="mt-2 flex flex-wrap gap-2 font-mono text-sm">
                  <span className="rounded-xl bg-white ring-1 ring-neutral-200/70 px-3 py-1">
                    Spaceship
                  </span>
                  <span className="rounded-xl bg-white ring-1 ring-neutral-200/70 px-3 py-1">
                    Spaceship.signum
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-[13px] text-neutral-600">
                  Register <strong>“Spaceship.crypto”</strong>:
                </div>
                <div className="mt-2 flex flex-wrap gap-2 font-mono text-sm">
                  <span className="rounded-xl bg-white ring-1 ring-neutral-200/70 px-3 py-1">
                    Spaceship.crypto
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              Default STLDs provided by Signum
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              The following namespaces are available by default:
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {DEFAULT_STLDS.map((tld) => (
                <span
                  key={tld}
                  className="rounded-xl bg-neutral-100 px-3 py-1 text-sm text-neutral-800 ring-1 ring-black/5"
                >
                  .{tld}
                </span>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-signum-acqua/40 p-3 text-[13px] text-signum-midnight/80">
              <strong>Custom STLDs:</strong> Signum accounts can create new
              namespaces on-chain. If an alias uses a custom STLD, renewals can
              be distributed to the current STLD owner.
            </div>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="btn btn-ghost inline-flex items-center gap-2"
            href="https://www.signum.domains/"
            target="_blank"
            rel="noreferrer"
          >
            Explore Signum Domains <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}

function Renewal() {
  return (
    <section id="renewal" className="scroll-mt-28 bg-white">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          Renewal & expiration
        </h2>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          With SIP-48, newly registered aliases become tied to a renewal
          subscription.
        </p>
        <p className="text-neutral-700 max-w-3xl">
          Ownership stays active as long as renewals succeed.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              Renewal subscription
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              When a new alias is registered, a subscription is created with a{" "}
              <strong>3-month deadline</strong> and a renewal amount of{" "}
              <strong>12.5 SIGNA</strong>.
            </p>
          </article>

          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              If renewal fails
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              If the owner does not have enough balance when renewal runs, the
              alias is <strong>deleted</strong> and becomes available again.
            </p>
          </article>

          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">
              If renewal is cancelled
            </h3>
            <p className="mt-2 text-[15px] text-neutral-700">
              If the owner cancels the renewal subscription, the alias is{" "}
              <strong>deleted</strong> and becomes available again.
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-xl bg-neutral-50 ring-1 ring-neutral-200/70 p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 h-10 w-10 rounded-2xl bg-white ring-1 ring-neutral-200/70 grid place-items-center">
              <RefreshCcw className="h-5 w-5 text-signum-midnight" />
            </div>
            <div>
              <h3 className="font-semibold text-signum-midnight">
                Sales keep the deadline
              </h3>
              <p className="mt-1 text-[15px] text-neutral-700">
                If an alias with an active subscription is sold, the
                subscription transfers to the new owner with the{" "}
                <strong>current deadline</strong>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LegacyAliases() {
  return (
    <section id="legacy" className="scroll-mt-28 bg-white">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          Legacy aliases stay protected
        </h2>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          Aliases registered before SIP-48 activates remain with their current
          owner <strong>without any renewal fee</strong>. A renewal subscription
          for a legacy alias is only created once that alias is{" "}
          <strong>updated or sold</strong> after the upgrade.
        </p>
      </Container>
    </section>
  );
}

function TransferTrading() {
  return (
    <section id="transfer" className="scroll-mt-28 bg-white">
      <Container className="py-14 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Transfer, sell, or trade aliases
          </h2>
          <p className="mt-3 text-neutral-700">
            Aliases can be transferred or offered for sale — publicly or
            privately — and remain a powerful “digital pointer” that can change
            hands.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="btn btn-ghost inline-flex items-center gap-2"
              href="https://www.signumswap.com/alias"
              target="_blank"
              rel="noreferrer"
            >
              Manage aliases on SignumSwap <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-signum-midnight">
            Special case: private sale for zero
          </h3>
          <p className="mt-2 text-[15px] text-neutral-700">
            If an alias is transferred via a{" "}
            <strong>private sale with price 0</strong>, it is transferred
            immediately. The renewal subscription remains on the former owner
            until the new owner performs a set/update action for that alias.
            Until then, the former owner continues paying renewals — and if they
            cancel or can’t pay, the alias may be deleted and become available
            again.
          </p>

          <div className="mt-4 rounded-xl bg-signum-acqua/40 p-3 text-[13px] text-signum-midnight/80">
            <strong>Tip:</strong> after receiving an alias, update it once to
            ensure renewals are tied to your account going forward.
          </div>
        </div>
      </Container>
    </section>
  );
}

function GettingStarted() {
  return (
    <section id="getting-started" className="scroll-mt-28 bg-white">
      <Container className="py-14">
        <h2 className="text-2xl font-semibold text-signum-midnight">
          Get started in minutes
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="font-semibold text-signum-midnight">Quick steps</h3>
            <ol className="mt-3 space-y-2 text-[15px] text-neutral-700 list-decimal pl-5">
              <li>Open a Signum wallet / account</li>
              <li>Search for an available name</li>
              <li>Choose what it points to: account, URL, or text record</li>
              <li>
                Optionally pick an STLD (like <code>.signum</code> or{" "}
                <code>.crypto</code>)
              </li>
              <li>
                Keep your balance ready for renewals (for newly created aliases)
              </li>
            </ol>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="btn btn-primary inline-flex items-center gap-2"
                href="https://www.signumswap.com/alias"
                target="_blank"
                rel="noreferrer"
              >
                Create / Manage Alias <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="btn btn-ghost inline-flex items-center gap-2"
                href="https://www.signum.domains/"
                target="_blank"
                rel="noreferrer"
              >
                Explore domains <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Are aliases private?",
      a: "No. Alias data is stored on-chain and is publicly readable.",
    },
    {
      q: "What characters are allowed in an alias name?",
      a: "SIP-48 allows letters and numbers, plus the underscore “_”. Alias length can be up to 100 characters.",
    },
    {
      q: "What’s the difference between name, name.signum, and name.crypto?",
      a: "“.signum” is the default namespace. Other STLDs (like “.crypto”) are separate namespaces — the same label can exist under different STLDs.",
    },
    {
      q: "What happens if I don’t renew?",
      a: "If a renewal fails due to insufficient balance — or if you cancel the renewal subscription — the alias is deleted and becomes available again.",
    },
    {
      q: "Do legacy aliases need renewal payments?",
      a: "No. Aliases created before SIP-48 activation stay with their owner without renewals, unless they are updated or sold after the upgrade.",
    },
    {
      q: "Can I change what my alias points to?",
      a: "Yes. You can update the alias content and change its pointer type.",
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
        <h3 className="text-2xl font-semibold">Claim your name on-chain.</h3>
        <p className="mt-2 text-white/80">
          Create an alias, choose a namespace, and point it anywhere — account,
          link, or record.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            className="btn btn-primary inline-flex items-center gap-2"
            href="https://www.signumswap.com/alias"
            target="_blank"
            rel="noreferrer"
          >
            Create / Manage Alias <ArrowRight className="h-4 w-4" />
          </a>
          <a
            className="btn btn-ghost inline-flex items-center gap-2"
            href="https://www.signum.domains/"
            target="_blank"
            rel="noreferrer"
          >
            Explore Signum Domains <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
