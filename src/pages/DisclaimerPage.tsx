import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import Platine from "../assets/img/mining/Platine.svg";

type Section = {
  id: string;
  title: string;
  body: JSX.Element;
};

const sections: Section[] = [
  {
    id: "information",
    title: "1. Information published on signum.network",
    body: (
      <>
        <p className="mb-4">
          The website{" "}
          <span className="whitespace-nowrap">https://signum.network</span>{" "}
          (hereinafter, referred to as the “Website”) provides information and
          material of a general nature. You are not authorized and nor should
          you rely on the Website for legal advice, business advice, or advice
          of any kind. You act at your own risk in reliance on the contents of
          the Website. Should you make a decision to act or not act you should
          contact a licensed attorney in the relevant jurisdiction in which you
          want or need help. In no way are the owners of, or contributors to,
          the Website responsible for the actions, decisions, or other behavior
          taken or not taken by you in reliance upon the Website.
        </p>
      </>
    ),
  },
  {
    id: "risks",
    title: "2. Risks related to the use of Signum",
    body: (
      <>
        <p className="mb-4">
          The Website will not be responsible for any losses, damages or claims
          arising from events falling within the scope of the following five
          categories:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Mistakes made by the user of any Signum-related software or service,
            e.g., forgotten passwords, and payments sent to wrong Signum
            addresses.
          </li>
          <li>
            Software problems of the Website and/or any Signum-related software
            or service, e.g., corrupted wallet file, incorrectly constructed
            transactions, unsafe cryptographic libraries, malware affecting the
            Website and/or any Signum-related software or service.
          </li>
          <li>
            Technical failures in the hardware of the user of any Signum-related
            software or service, e.g., data loss due to a faulty or damaged
            storage device.
          </li>
          <li>
            Security problems experienced by the user of any Signum-related
            software or service, e.g., unauthorized access to users’ wallets
            and/or accounts.
          </li>
          <li>
            Actions or inactions of third parties and/or events experienced by
            third parties, e.g., bankruptcy of service providers, information
            security attacks on service providers, and fraud conducted by third
            parties.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "investment",
    title: "3. Investment risks",
    body: (
      <p>
        The investment in Signum or a Smart Contract on the Signum-Blockchain
        can lead to loss of money over short or even long periods. The investors
        in Signum should expect prices to have large range fluctuations. The
        information published on the Website cannot guarantee that the investors
        in Signum would not lose money.
      </p>
    ),
  },
  {
    id: "tax",
    title: "4. Compliance with tax obligations",
    body: (
      <p>
        The users of the Website are solely responsible to determinate what, if
        any, taxes apply to their Signum transactions. The owners of, or
        contributors to, the Website are NOT responsible for determining the
        taxes that apply to Signum transactions or holdings.
      </p>
    ),
  },
  {
    id: "custody",
    title: "5. The Website does not store, send, or receive Signa",
    body: (
      <p>
        The Website does not store, send or receive Signa. This is because
        Signum exist only by virtue of the ownership record maintained in the
        Signum network. Any transfer of title in Signa occurs within a
        decentralized Signum network, and not on the Website.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "6. No warranties",
    body: (
      <p>
        The Website is provided on an “as is” basis without any warranties of
        any kind regarding the Website and/or any content, data, materials
        and/or services provided on the Website.
      </p>
    ),
  },
  {
    id: "liability",
    title: "7. Limitation of liability",
    body: (
      <p>
        Unless otherwise required by law, in no event shall the owners of, or
        contributors to, the Website be liable for any damages of any kind,
        including, but not limited to, loss of use, loss of profits, or loss of
        data arising out of or in any way connected with the use of the Website.
      </p>
    ),
  },
  {
    id: "arbitration",
    title: "8. Arbitration",
    body: (
      <p>
        The user of the Website agrees to arbitrate any dispute arising from or
        in connection with the Website or this disclaimer, except for disputes
        related to copyrights, logos, trademarks, trade names, trade secrets or
        patents.
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  const updated = "2025-10-05";

  return (
    <>
      <SeoHelmet
        title="Legal Disclaimer • Signum Network"
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
            <div className="text-white">
              <p className="text-white">LEGAL DISCLAIMER</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Legal Disclaimer
              </h1>
              <p className="text-white">Last updated: {updated}</p>
            </div>
          </div>
        </Container>
      </header>
      {/* Content */}
      <main className="relative z-10">
        <Container className="py-12 text-signum-midnight">
          {/* Quick Nav (Apple-like subtle index) */}
          <nav
            aria-label="On this page"
            className="mb-8 rounded-xl border border-neutral-200/70 bg-white/70 p-4"
          >
            <div className="mb-2 text-xs font-medium uppercase tracking-wide">
              On this page
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className=" underline-offset-4 hover:text-neutral-900 hover:underline"
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
                <div className="text-[15px] ">{s.body}</div>
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
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm  shadow-sm transition hover:border-neutral-300 hover:text-neutral-900"
            >
              ↑ Back to top
            </a>
          </div>
        </Container>
      </main>
    </>
  );
}
