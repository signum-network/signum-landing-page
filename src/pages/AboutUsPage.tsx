import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import { Link } from "react-router-dom";
import Platine from "../assets/img/mining/Platine.svg";
type Section = {
  id: string;
  title: string;
  body: JSX.Element;
};

const sections: Section[] = [
  {
    id: "information",
    title: "Information according to §5 of the Telemedia Act",
    body: (
      <>
        <p>SIGNUM-NETWORK ASSOCIATION (SNA) </p>
        <p>
          The Signum-Network Association - hereinafter referred to as the
          "Association" or "SNA" - is a non-profit association in accordance
          with the provisions of the Swiss Civil Code.{" "}
        </p>
        <p>
          <br></br>
          SIGNUM-NETWORK ASSOCIATION <br></br>
          c/o Frey Services<br></br>
          Eggstrasse 14f<br></br>
          8134 Adliswil<br></br>
          Switzerland<br></br>
          <br></br>
          E-Mail: SNA <br></br>
          Twitter (X) : signum_official <br></br>
          Website : https://sna.signum.network/ <br></br>
        </p>
      </>
    ),
  },
  {
    id: "Dispute",
    title: "Online dispute resolution platform and consumer dispute resolution",
    body: (
      <>
        <p>
          The European Commission provides a platform for online dispute
          resolution, which you can find at https://ec.europa.eu/consumers/odr .
          SNA does not participate in dispute resolution proceedings before a
          consumer arbitration board and we are not obliged to do so.
        </p>
      </>
    ),
  },
  {
    id: "Data",
    title: "Data protection",
    body: (
      <p>
        You can find our privacy policy{" "}
        <Link to="/privacypolicy">
          <strong>here</strong>
        </Link>{" "}
        .
      </p>
    ),
  },
  {
    id: "Media",
    title: "Social media profiles",
    body: (
      <p>
        This legal notice also applies to the following social media profile: X:
        https://twitter.com/signum_official
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <SeoHelmet
        title="About us • Signum Network"
        description="Accept SIGNA on web, POS or with simple links. Low fees, real on-chain finality, and sustainable PoC+."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/payments"
      />
      {/* Hero */}
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
                           left-[10%] top-0 h-[120%] 
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
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left: copy */}
            <div className="text-white">
              <p className="text-white">ABOUT US</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                About us
              </h1>
            </div>
          </div>
        </Container>
      </header>

      <main className="relative z-10">
        <Container className="py-12">
          {/* Quick Nav (Apple-like subtle index) */}
          <nav
            aria-label="On this page"
            className="mb-8 rounded-xl border border-neutral-200/70 bg-signum-acqua/70 p-4"
          >
            <div className="mb-2 text-xs font-medium uppercase tracking-wid text-shadow-signum-midnight">
              On this page
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-signum-midnight underline-offset-4 hover:text-neutral-900 hover:underline"
                  >
                    {s.title.split(". ")[0]}. {s.title.split(". ")[1]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="prose prose-neutral max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="mt-5 mb-3 text-xl font-semibold text-signum-midnight">
                  {s.title}
                </h2>
                <div className="text-[15px] text-signum-midnight">{s.body}</div>
              </section>
            ))}
          </div>

          {/* Back to top */}
          <div className="mt-10">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm transition hover:border-neutral-300 hover:text-neutral-900"
            >
              ↑ Back to top
            </a>
          </div>
        </Container>
      </main>
    </>
  );
}
