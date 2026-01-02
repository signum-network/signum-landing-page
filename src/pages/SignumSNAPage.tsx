import SeoHelmet from "../components/SEOHelmet";
import Container from "../components/Container";
import { Link } from "react-router-dom";

import Platine from "../assets/img/mining/Platine.svg";
import SNA from "../assets/img/sna/SNA_switzerland.svg";

import SignumVideoTicker from "../components/VideoTicker";
import XTWalletVideo from "../assets/img/video/XTWallet.png";
import AccountHnadlinngVideo from "../assets/img/video/AccountSetup.webp";
import MiningVideo from "../assets/img/video/Mining.png";
import GPUPlotsVideo from "../assets/img/video/GPUPlots.webp";
import CommitmentVideo from "../assets/img/video/Commitment.png";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
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

const Mail = {
  base: "SNA@signum.network",
  build(subject: string, body: string = "") {
    const s = encodeURIComponent(subject);
    const b = encodeURIComponent(body);
    return `mailto:${this.base}?subject=${s}&body=${b}`;
  },
};

const Pillars = [
  {
    title: "Represent the ecosystem",
    body: "Present members’ interests to national and international authorities and organizations.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="currentColor" d="M4 6h16v4H4zM4 11h16v7H4z" opacity=".2" />
        <path
          fill="currentColor"
          d="M6 9h12V7H6v2zm0 7h12v-3H6v3zM4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4z"
        />
      </svg>
    ),
  },
  {
    title: "Support builders & research",
    body: "Directly or indirectly fund projects, developers and academic research that strengthen Signum.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="currentColor" d="M12 3l8 5-8 5-8-5 8-5z" />
        <path fill="currentColor" d="M4 14l8 5 8-5" opacity=".35" />
      </svg>
    ),
  },
  {
    title: "Grow the network",
    body: "Help establish regional & international branches and nurture a strong association network.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="6" r="3" fill="currentColor" />
        <circle cx="5" cy="18" r="3" fill="currentColor" />
        <circle cx="19" cy="18" r="3" fill="currentColor" />
        <path d="M9 8l-3 8M15 8l3 8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Promote adoption",
    body: "Advance practical use cases and initiatives across industries for a sustainable crypto future.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.77 5.82 22 7 14.15l-5-4.88 6.91-1.01z"
        />
      </svg>
    ),
  },
  {
    title: "Collaborate globally",
    body: "Join and cooperate with organizations working on cryptography, DLT and adjacent technologies.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M3 12h18M12 3c2.5 3 2.5 15 0 18"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Educate & connect",
    body: "Organize conferences, hackathons and learning programs; facilitate member meetups and contacts.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M3 6l9-3 9 3-9 3-9-3zm2 5l7 2.333L19 11v5l-7 2.333L5 16v-5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Communicate & market",
    body: "Run initiatives that raise awareness for Signum’s truly energy-efficient technology.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M3 10h8l7-4v12l-7-4H3v-4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Transparency & integrity",
    body: "Foster a culture of diversity, collegiality and clear reporting across all SNA activities.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"
          fill="currentColor"
        />
        <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SnaPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Network Association (SNA) • Signum Network"
        description="The SNA advances the Signum ecosystem: representing members, funding builders and research, growing adoption and education — with transparency and a focus on sustainability."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/sna"
      />

      {/* ========================= HERO ========================= */}
      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-blue">
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
          <div className="grid items-center gap-8 md:grid-cols-2">
            <figure className="order-1 md:order-2 justify-self-center md:justify-self-end">
              <img
                src={SNA}
                alt="SNA in Switzerland"
                className="w-[260px] sm:w-[420px] md:w-[520px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>

            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">ASSOCIATION</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Signum Network Association (SNA)
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Our mission is to foster growth, collaboration and integrity
                across the Signum economy.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#donation"
                  className="btn-white inline-flex items-center gap-2"
                >
                  Donate
                </a>
                <a
                  href={Mail.build("SNA — General inquiry")}
                  className="btn btn-white inline-flex items-center gap-2"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ========================= CONTENT ========================= */}
      <main>
        <section id="purpose" className="bg-white">
          <Container className="py-14 space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-signum-midnight">
                The Purpose of the SNA
              </h2>
              <p className="mt-3 text-neutral-700">
                The SNA promotes the development and awareness of the
                open-source Signum blockchain — exceptionally energy-efficient
                through its unique{" "}
                <Link to="/poc-plus" className="underline decoration-dotted">
                  PoC+
                </Link>{" "}
                consensus — and helps turn it into a sustainable building block
                for the digital economy.
              </p>
              <p className="mt-3 text-neutral-700">
                We represent members’ interests, support builders and research,
                grow the association network, educate and connect people, and
                collaborate internationally — always with transparency and
                integrity.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
              {Pillars.map((p) => (
                <article key={p.title} className="card p-5 h-full">
                  <div className="rounded-xl bg-signum-acqua/70 p-2 text-signum-midnight/90 w-fit">
                    {p.icon}
                  </div>
                  <h3 className="mt-3 font-semibold text-signum-midnight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-neutral-700">{p.body}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="card p-6">
                <h3 className="font-semibold text-signum-midnight">
                  Our story
                </h3>
                <p className="mt-2 text-[15px] text-neutral-700">
                  Founded 2021, in the Kanton Zuerich of Switzerland, as a
                  not-for-profit association (according to Art. 60 ff. des
                  Schweizerischen Zivilgesetzbuches), the SNA builds on
                  Switzerland’s tradition of neutrality, innovation and strong
                  civic participation.
                </p>
              </article>
              <article className="card p-6">
                <h3 className="font-semibold text-signum-midnight">
                  Focus areas
                </h3>
                <ul className="mt-2 text-[15px] text-neutral-700 list-disc pl-5">
                  <li>Developer funding &amp; ecosystem tooling</li>
                  <li>Community education &amp; events</li>
                  <li>Responsible adoption &amp; partnerships</li>
                </ul>
              </article>
              <article className="card p-6">
                <h3 className="font-semibold text-signum-midnight">
                  Get involved
                </h3>
                <p className="mt-2 text-[15px] text-neutral-700">
                  Want to contribute or partner with us? We’d love to hear from
                  you.
                </p>
                <a
                  href={Mail.build("SNA — Get involved")}
                  className="btn btn-ghost mt-3 w-fit"
                >
                  Reach out
                </a>
              </article>
            </div>
          </Container>
        </section>

        <section id="donation" className="scroll-mt-28 bg-neutral-50">
          <Container className="py-14">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-signum-midnight">
                Donate to the SNA
              </h2>
              <p className="mt-2 text-neutral-700">
                Your contribution directly supports development, education and
                adoption around the Signum blockchain. Thank you for helping us
                build a truly sustainable crypto ecosystem.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="card p-6">
                <h3 className="font-semibold text-signum-midnight">
                  Bank transfer — CHF
                </h3>
                <p className="mt-2 text-[15px] text-neutral-700">
                  Signum-Network Association, PostFinance Bern
                </p>
                <div className="mt-3 grid gap-1 text-sm font-mono text-neutral-700">
                  <div>
                    <span className="text-neutral-500">BIC:&nbsp;</span>
                    POFICHBEXXX
                  </div>
                  <div className="break-all">
                    <span className="text-neutral-500">IBAN:&nbsp;</span>
                    CH2709000000157262559
                  </div>
                </div>
              </article>

              <article className="card p-6">
                <h3 className="font-semibold text-signum-midnight">
                  Bank transfer — EUR
                </h3>
                <p className="mt-2 text-[15px] text-neutral-700">
                  Signum-Network Association, PostFinance Bern
                </p>
                <div className="mt-3 grid gap-1 text-sm font-mono text-neutral-700">
                  <div>
                    <span className="text-neutral-500">BIC:&nbsp;</span>
                    POFICHBEXXX
                  </div>
                  <div className="break-all">
                    <span className="text-neutral-500">IBAN:&nbsp;</span>
                    CH4209000000157262580
                  </div>
                </div>
              </article>

              <article className="card p-6">
                <h3 className="font-semibold text-signum-midnight">PayPal</h3>
                <p className="mt-2 text-[15px] text-neutral-700">
                  Prefer PayPal? Just donate in EUR or USD.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    className="btn btn-ghost"
                    href="https://www.paypal.com/donate?hosted_button_id=8KQWSDB78XB72"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PayPal EUR
                  </a>
                  <a
                    className="btn btn-ghost"
                    href="https://www.paypal.com/donate?hosted_button_id=9Z7DUJJ7ZXH94"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PayPal USD
                  </a>
                </div>
              </article>

              <article className="card p-6">
                <h3 className="font-semibold text-signum-midnight">
                  Donation in SIGNA
                </h3>
                <p className="mt-2 text-[15px] text-neutral-700">
                  Donate directly on-chain in SIGNA. Adress
                  S-5MS6-5FBY-74H4-9N4HS.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    className="btn btn-ghost"
                    href="https://explorer.signum.network/?action=account&account=8952122635653861124"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SNA address
                  </a>
                </div>
              </article>
            </div>
          </Container>
        </section>
        <SignumVideoTicker
          title="Signum Videos"
          subtitle="Short videos to get you from zero to Signum Pro."
          items={videos}
          speed={{ base: 40, md: 30, lg: 60, "2xl": 80 }}
          direction="left"
          pauseOnHover
        />
      </main>
    </>
  );
}
