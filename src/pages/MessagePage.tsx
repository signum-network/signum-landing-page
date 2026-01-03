import SeoHelmet from "../components/SEOHelmet";
import Container from "../components/Container";
import { Link } from "react-router-dom";

import Platine from "../assets/img/mining/Platine.svg";
import MesssageArt from "../assets/img/messages/Message.svg";
import SignumLight from "../assets/img/main/SignumLight.svg";

import {
  MessageSquare,
  Lock,
  Globe,
  Wallet,
  FileText,
  Link2,
  Send,
  Shield,
  Code2,
} from "lucide-react";

export default function MessagesPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Messages — public or encrypted, on-chain • Signum Network"
        description="Attach notes to payments and transfers, or send message-only transactions. Public or end-to-end encrypted. Low fees, global reach."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/messages"
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
          className="pointer-events-none select-none absolute z-0 right-[-15%] top-[-40%] h-[170%] w-auto opacity-60 hidden lg:block -scale-x-100
                     [mask-image:linear-gradient(to_left,black)]
                     [-webkit-mask-image:linear-gradient(to_left,black)]"
        />
        <Container className="relative z-10 py-12 sm:py-16">
          <div className="grid items-center gap-8 xl:grid-cols-2">
            <figure className="order-1 xl:order-2 justify-self-center xl:justify-self-end">
              <img
                src={MesssageArt}
                alt="Signum Tokens illustration"
                className="w-[260px] sm:w-[420px] md:w-[520px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>

            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">
                SMART MESSAGES
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Pay, transfer… and talk.
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Messages let you attach public or encrypted notes to
                transactions — or send a message-only transactions.
              </p>
              <p className="mx-auto md:mx-0 max-w-2xl text-[20px] text-white">
                Simple, on-chain, global.
              </p>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <div className="relative isolate">
          <Benefits />
          <WhatAreMessages />
          <UseCases />
          <HowItWorks />
          <FactsAndFeesBand />
          <CTA />
        </div>
      </main>
    </>
  );
  function Benefits() {
    const items = [
      {
        icon: <Globe className="h-5 w-5" />,
        title: "On-chain by default",
        body: "Add notes to payments, token transfers, subscriptions—or send message-only transactions.",
      },
      {
        icon: <Lock className="h-5 w-5" />,
        title: "Public or encrypted",
        body: "Readable by everyone or just sender ↔ recipient via end-to-end encryption.",
      },
      {
        icon: <Wallet className="h-5 w-5" />,
        title: "Human-scale fees",
        body: "Messages ride with normal tx fees, with a small surcharge for longer texts.",
      },
    ];

    return (
      <section id="benefits">
        <Container className="py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {items.map((i) => (
              <article key={i.title} className="card p-6">
                <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/80 w-fit">
                  {i.icon}
                </div>
                <h3 className="mt-3 font-semibold text-signum-midnight">
                  {i.title}
                </h3>
                <p className="mt-2 text-[15px] text-neutral-700">{i.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  function WhatAreMessages() {
    return (
      <section id="what" className="scroll-mt-28">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold text-signum-midnight">
            What are Signum Messages?
          </h2>
          <p className="mt-3 text-neutral-700">
            Up to <strong>1,000 characters</strong> of arbitrary data per
            transaction. Messages can be <strong>public</strong> or{" "}
            <strong>encrypted</strong> for sender &amp; recipient. Since it’s
            just bytes, you can send <strong>any encoding</strong> (JSON,
            base64, custom formats).
          </p>

          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            <li className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
              <div className="text-sm font-medium text-signum-midnight">
                Attachable or standalone
              </div>
              <div className="text-[14px] text-neutral-700 mt-1">
                Attach to most tx types—or send message-only transactions.
              </div>
            </li>
            <li className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
              <div className="text-sm font-medium text-signum-midnight">
                Choose visibility
              </div>
              <div className="text-[14px] text-neutral-700 mt-1">
                Public or encrypted (sender ↔ recipient).
              </div>
            </li>
            <li className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
              <div className="text-sm font-medium text-signum-midnight">
                Flexible payloads
              </div>
              <div className="text-[14px] text-neutral-700 mt-1">
                Any format or structure that suits your app.
              </div>
            </li>
          </ul>
        </Container>
      </section>
    );
  }

  function UseCases() {
    const cards = [
      {
        icon: <FileText className="h-5 w-5" />,
        title: "Order & invoice refs",
        body: "Include customer-facing references directly on payments.",
      },
      {
        icon: <MessageSquare className="h-5 w-5" />,
        title: "Customer memos",
        body: "Add short notes that both parties can reference on-chain.",
      },
      {
        icon: <Code2 className="h-5 w-5" />,
        title: "DApp signals",
        body: "Compact, structured payloads for app workflows.",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Receipts & auditing",
        body: "Immutable context for transfers and settlement.",
      },
      {
        icon: <Link2 className="h-5 w-5" />,
        title: "Off-chain linking",
        body: "Bridge external processes with on-chain proofs.",
      },
      {
        icon: <Send className="h-5 w-5" />,
        title: "Airdrops context",
        body: "Attach metadata to token distributions.",
      },
    ];

    return (
      <section id="use-cases" className="scroll-mt-28">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold text-signum-midnight">
            Popular use cases
          </h2>
          <p className="mt-2 text-neutral-700">
            From customer notes to DApp workflows—keep everything connected.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article key={c.title} className="card p-6 h-full">
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
        </Container>
      </section>
    );
  }

  function HowItWorks() {
    const steps = [
      {
        n: "1",
        title: "Compose",
        body: "Write your text or encoded data (e.g., JSON).",
      },
      {
        n: "2",
        title: "Choose visibility",
        body: "Public for all, or encrypted for sender ↔ recipient.",
      },
      {
        n: "3",
        title: "Attach / send",
        body: "Add to your transaction—or send as message-only. It becomes part of the on-chain record.",
      },
    ];

    return (
      <section id="how" className="scroll-mt-28">
        <Container className="py-12">
          <h2 className="text-2xl font-semibold text-signum-midnight">
            How it works
          </h2>
          <p className="mt-2 text-neutral-700">
            Three simple steps—then your message is stored immutably on-chain.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.n} className="card p-6">
                <div className="text-xs font-medium text-neutral-500">
                  Step {s.n}
                </div>
                <h3 className="mt-1 font-semibold text-signum-midnight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] text-neutral-700">{s.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  function FactsAndFeesBand() {
    const stats = [
      { label: "Max length", value: "Up to 1,000 chars" },
      { label: "Visibility", value: "Public or encrypted" },
      { label: "Attachable", value: "Most tx types" },
      { label: "Standalone", value: "Message-only tx" },
      { label: "Fees", value: "0.01–0.06 SIGNA" },
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
                {s.label}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/70">
                {s.value}
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

  function CTA() {
    return (
      <section id="get-sig" className="py-24">
        <Container className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-signum-midnight">
            Start with SIGNA today
          </h2>
          <p className="mt-4 text-signum-midnight max-w-xl mx-auto">
            Download a wallet, get SIGNA, and join a community building
            practical crypto—without the noise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/wallet"
              key="wallets"
              className="rounded-full bg-signum-midnight text-white px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              Download Wallet
            </Link>
            <Link
              to="/exchanges"
              key="exchanges"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Get SIGNA
            </Link>
          </div>
        </Container>
      </section>
    );
  }
}
