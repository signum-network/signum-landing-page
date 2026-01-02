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
    id: "controller",
    title: "1. Name and address of the controller responsible for processing",
    body: (
      <div className="space-y-3">
        <p>
          The responsible party within the meaning of Art. 4 No. 7 GDPR and
          other relevant data protection regulations is:
        </p>
        <address className="not-italic leading-relaxed">
          <strong>SIGNUM-NETWORK ASSOCIATION</strong>
          <br />
          c/ o Frey Services
          <br />
          Eggstrasse 14 f<br />
          8134 Adliswil
          <br />
          <a
            href="mailto:sna@signum.network"
            className="text-sky-600 hover:underline"
          >
            sna@signum.network
          </a>
        </address>
      </div>
    ),
  },
  {
    id: "rights",
    title: "2. Your rights",
    body: (
      <div className="space-y-4">
        <p>
          As an affected party, you generally have the following rights under
          the GDPR:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Right to Information (Art. 15 GDPR):</strong> You can
            request information about the data we process about you. In
            particular, you can inquire about the purposes of the processing,
            the categories of data, the recipients or categories of recipients
            to whom your data has been or will be disclosed, the planned storage
            duration, the existence of the right to correction, deletion,
            restriction of processing, or objection, the right to lodge a
            complaint, the origin of your data, if not collected by us, as well
            as the existence of automated decision-making, including profiling,
            and meaningful information about its details.
          </li>
          <li>
            <strong>Right to Correction (Art. 16 GDPR):</strong> You can
            immediately request the correction of inaccurate or incomplete data
            stored by us.
          </li>
          <li>
            <strong>Right to Deletion (Art. 17 GDPR):</strong> You have the
            right to request the deletion of your data stored with us, provided
            that the processing is not necessary for exercising the right to
            freedom of expression and information, fulfilling a legal
            obligation, reasons of public interest, or for the establishment,
            exercise, or defense of legal claims.
          </li>
          <li>
            <strong>Right to Restriction of Processing (Art. 18 GDPR):</strong>{" "}
            You have the right to request the restriction of processing of your
            data to the extent that you contest the accuracy of the data or the
            processing is unlawful.
          </li>
          <li>
            <strong>Right to Data Portability (Art. 20 GDPR):</strong> You have
            the right to receive the data you provided us in a structured,
            commonly used, and machine-readable format or to request the
            transmission to another controller.
          </li>
          <li>
            <strong>Individual Right of Objection (Art. 21(1) GDPR):</strong>{" "}
            You have the right to object at any time, for reasons arising from
            your particular situation, to the processing of personal data
            concerning you based on Art. 6(1)(e) GDPR (processing in the public
            interest) or Art. 6(1)(f) GDPR (processing based on a balance of
            interests). This also applies to profiling based on these provisions
            within the meaning of Art. 4(4) GDPR. If you object to processing,
            we will no longer process your personal data unless our legitimate
            interests justify further processing. In each individual case, we
            explicitly point out this right to object in the context of these
            data protection notices in connection with the relevant data
            processing.
          </li>
          <li>
            <strong>
              Right to Object to Processing for Advertising (Art. 21(2) GDPR):
            </strong>{" "}
            If, in individual cases, we process your personal data for direct
            marketing - if this is the case, you will find corresponding
            information below - you have the right, by Art. 21(2) GDPR, to
            object at any time to the processing of personal data concerning you
            for such advertising, including profiling to the extent that it is
            related to such direct marketing. If you object to processing for
            direct marketing purposes, we will no longer process your personal
            data for these purposes.
          </li>
          <li>
            <strong>Right of Withdrawal:</strong> If you have given us consent
            to process personal data, you can revoke this consent at any time.
            Please note that the revocation only takes effect in the future.
            Processing carried out before the revocation is not affected by
            this. To exercise your rights, please get in touch with the
            responsible party using the contact details listed under item 1.
          </li>
          <li>
            <strong>Right to Complaint (Art. 77 GDPR):</strong> You have the
            right to complain to a data protection supervisory authority about
            processing your personal data in our company, particularly with the
            data protection supervisory authority responsible for us.
          </li>
        </ul>
        <p>
          <strong>
            Der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte
          </strong>
          <br />
          Feldeggweg 1<br />
          CH – 3003 Bern
          <br />
          Phone: +41 (0)58 462 43 95
          <br />
          Fax: +41 (0)58 465 99 96
          <br />
          Email:{" "}
          <a
            href="mailto:info@admin.ch"
            className="text-sky-600 hover:underline"
          >
            info@admin.ch
          </a>
          <br />
          <a
            href="https://www.edoeb.admin.ch/edoeb/de/home.html"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:underline"
          >
            https://www.edoeb.admin.ch/edoeb/de/home.html
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "security",
    title: "3. Data security",
    body: (
      <p>
        We employ suitable technical and organizational security measures to
        protect your data against accidental or intentional manipulation,
        partial or complete loss, destruction, or unauthorized access by third
        parties (e.g., TLS encryption for our website), taking into account the
        state of the art, implementation costs, and the nature, scope, context,
        and purpose of processing, as well as the existing risks of a data
        breach (including their likelihood and potential impact) for the data
        subject. Our security measures are continually improved in line with
        technological advancements.
      </p>
    ),
  },
  {
    id: "processing",
    title: "4. Processing of personal data",
    body: (
      <div className="space-y-6">
        <p>We process your personal data as follows:</p>
        <h3 className="text-lg font-semibold mt-6">4.1 Visit our website</h3>
        <p>
          <strong>Description of Data Processing</strong>
          <br></br>During each visit to our websites, a so-called server log
          record (server log files) gets temporarily stored on our web server in
          an anonymized form. <br></br>This record includes:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Page from which the page was requested (referrer URL)</li>
          <li>Name and URL of the requested page</li>
          <li>Date and time of the request</li>
          <li>Description of the used web browser (type, language, version)</li>
          <li>
            IP address of the requesting computer, shortened to the extent that
            personal reference is no longer possible
          </li>
          <li>Transferred data volume</li>
          <li>Operating system</li>
          <li>
            Notification of whether the request was successful (access status /
            HTTP status code)
          </li>
          <li>GMT zone difference</li>
          <li>
            Websites and resources (images, files, other page content) accessed
            on our website
          </li>
          <li>The hostname of the accessing computer</li>
        </ul>
        <p>
          <strong>Purpose:</strong>
          <br></br>Data processing serves to deliver and ensure the website's
          functionality. Additionally, the processing is done for statistical
          purposes and to improve our website's quality, especially the
          connection's stability and security. Furthermore, the processing of
          this data allows for the tracking of misuse.
        </p>
        <p>
          <strong>Legal Basis:</strong>
          <br></br>Art. 6(1)(f) GDPR (legitimate interest).
        </p>
        <p>
          <strong>
            Recipients of Personal Data / Categories of Recipients
          </strong>
          <br></br>There is no disclosure to third parties. In strict compliance
          with relevant data protection regulations, our carefully selected
          service providers involved in hosting and maintaining our systems may
          be data recipients. This is done based on data processing agreements
          through which the service providers are contractually bound, and we
          remain responsible for data processing.
        </p>
        <p>
          <strong>Duration of Processing</strong>
          <br></br>Your data will only be processed for as long as necessary to
          achieve the aforementioned purpose. In the case of storing data in log
          files, this is no later than seven days after collection. In
          individual cases, there may be a legitimate interest in storage beyond
          this period to defend against potentially asserted legal claims.
        </p>
        <p>
          <strong>
            Indication of whether Provision is Statutory or Contractual
            Requirement / Necessary for Contract Conclusion / Consequences of
            Non-Provision:
          </strong>
          <br></br>The provision of data is neither statutorily nor
          contractually required or necessary for entering into a contract .It
          is not possible to visit the website if the data is not provided.
        </p>
        <p>
          <strong>Individual Right of Objection</strong>
          <br></br>According to Art. 21(1) GDPR, you have the right, for reasons
          arising from your particular situation, to object at any time to
          processing personal data concerning you based on Art. 6(1) lit. f)
          GDPR (processing based on a balance of interests). If you object to
          processing, we will no longer process your personal data, unless our
          legitimate interests justify further processing.
        </p>

        <h3 className="text-lg font-semibold mt-6">4.2 E-mail contact</h3>
        <p>
          <strong>Description of Data Processing</strong>
          <br></br>Contacting us is possible through the provided email address.
          In this case, the personal data transmitted with the email will be
          stored.
        </p>
        <p>
          <strong>Purpose</strong>
          <br></br>The processing of personal data from your email inquiry is
          solely to handle the contact. This also constitutes the necessary
          legitimate interest in processing the data.
        </p>
        <p>
          <strong>Legal Basis:</strong>
          <br></br>Art. 6(1) lit. (f) GDPR is the legal basis for processing
          data via email. If the email contact aims to conclude a contract, the
          additional legal basis for processing is Art. 6(1) lit. (b) GDPR.
        </p>
        <p>
          <strong>
            Recipients of Personal Data / Categories of Recipients
          </strong>
          <br></br>There is no disclosure to third parties. In strict compliance
          with relevant data protection regulations, our carefully selected
          service providers involved in hosting and maintaining our systems may
          be data recipients. This is done based on data processing agreements
          through which the service providers are contractually bound, and we
          remain responsible for data processing.
        </p>
        <p>
          <strong>Duration of Processing</strong>
          <br></br>Your data will only be processed for as long as necessary to
          achieve the aforementioned purpose. In the case of storing data in log
          files, this is no later than seven days after collection. In
          individual cases, there may be a legitimate interest in storage beyond
          this period to defend against potentially asserted legal claims.
        </p>
        <p>
          <strong>
            Indication of whether Provision is Statutory or Contractual
            Requirement / Necessary for Contract Conclusion / Consequences of
            Non-Provision
          </strong>
          <br></br>The provision of data is neither statutorily nor
          contractually required or necessary for entering into a contract .It
          is not possible to visit the website if the data is not provided.
        </p>
        <p>
          <strong>Individual Right of Objection</strong>
          <br></br>According to Art. 21(1) GDPR, you have the right, for reasons
          arising from your particular situation, to object at any time to
          processing personal data concerning you based on Art. 6(1) lit. f)
          GDPR (processing based on a balance of interests). If you object to
          processing, we will no longer process your personal data, unless our
          legitimate interests justify further processing.
        </p>

        <h3 className="text-lg font-semibold mt-6">
          4.3 Use of cookies and similar technologies
        </h3>
        <p>
          <strong>Cookies and Related Data Processing</strong>
          <br></br>On our websites, we use cookies. Cookies are small text files
          assigned and stored on your hard drive by your browser using a
          characteristic string of characters, providing specific information to
          the entity setting the cookie. Cookies cannot execute programs or
          transmit viruses to your computer; therefore, they cannot cause any
          damage. They serve to make the Internet offering more user-friendly
          and practical, making it more pleasant for you.Cookies may contain
          data that allows recognition of the device being used.
        </p>
        <p>
          However, sometimes cookies only collect information about specific
          settings that are not personally identifiable.Any cookies that are not
          strictly technically necessary are only allowed with your consent.
          This particularly applies to advertising, targeting, or sharing
          cookies. Furthermore, your personal data collected through cookies
          will only be processed if you consent.
        </p>
        <p>
          We use cookies to make our website more user-friendly. Non-essential
          cookies are used only with your consent. You can withdraw consent
          anytime. Refusal may limit website functionality.
        </p>
        <p>
          You can configure your browser settings to prevent cookies from being
          set. You can then decide on a case-by-case basis whether to accept
          cookies or accept them in general. However, please note that in this
          case, you may only be able to use some functions of this website
          partially.
        </p>
        <p>
          <strong>Right of Withdrawal </strong>
          <br></br>You can withdraw your consent at any time. Details on how to
          exercise your withdrawal (specifically related to the presentation of
          the respective data processing) can be found below. Please note that
          the withdrawal only applies to the future. Processing that occurred
          before the withdrawal is not affected by it.Suppose we collect data to
          obtain your consent for using cookies using a so-called Consent
          Management Platform (CMP). In that case, this serves to log your
          consent and, if necessary, to provide evidence of the authorization
          for use. The legal basis for processing this data is Art. 6(1) lit.
          (f) GDPR. Our legitimate interest is to be able to prove the consent
          you have given.
        </p>
        <p>
          <strong>Individual Right of Objection</strong>
          <br></br>According to Art. 21(1) GDPR, you have the right, for reasons
          arising from your particular situation, to object at any time to
          processing personal data concerning you based on Art. 6(1) lit. f)
          GDPR (processing based on a balance of interests). If you object to
          processing, we will no longer process your personal data, unless our
          legitimate interests justify further processing.
        </p>

        <h3 className="text-lg font-semibold mt-6">4.3.1 CloudFlare</h3>
        <p>
          Within the scope of our website, we use the CloudFlare service
          provided by Cloudflare, Inc., 101 Townsend St, 94107 San Francisco,
          USA. Cloudflare is a Content Delivery Network (CDN) that distributes
          the website across multiple servers and provides security functions.
          Additionally, Cloudflare acts as a reverse proxy for our website.
        </p>
        <p>
          The legal basis for processing personal data is our legitimate
          interest, according to Art. 6(1) lit. (f) GDPR. Our legitimate
          interest lies in achieving the mentioned purpose. We have entered into
          a data processing agreement with CloudFlare in accordance with Art. 28
          GDPR.
        </p>
        <p>
          Please note that data may be transferred to the United States and
          processed by U.S. authorities. The United States is considered a third
          country, meaning a state outside the European Economic Area (EEA)
          where the GDPR is not directly applicable. The EU Commission has
          adopted an adequacy decision according to Art. 45(1) GDPR for the USA,
          effective as of July 10, 2023. This decision establishes that the USA
          ensures adequate protection – comparable to that of the European Union
          – for personal data transmitted from the EU to U.S. companies within
          the new framework, provided that the respective service provider is
          certified under the EU-U.S. Data Privacy Framework.
        </p>
        <p>
          CloudFlare commits to complying with European data protection law and
          is certified under the EU-U.S. Data Privacy Framework:<br></br>
          <a
            href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2zt0000000GnZKAA0"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:underline"
          >
            https://www.dataprivacyframework.gov/s/participant-search/participant-detail?id=a2zt0000000GnZKAA0
          </a>
        </p>
        <p>
          You can find further information on the handling of the transmitted
          data in the provider's privacy policy at
          <br />
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:underline"
          >
            https://www.cloudflare.com/privacypolicy/
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "automated",
    title: "5. Automated decision making / profiling",
    body: (
      <p>
        We do not carry out automated decision-making (including profiling)
        within the meaning of Art. 22 GDPR.
      </p>
    ),
  },
  {
    id: "links",
    title: "6. Links to other websites",
    body: (
      <p>
        Our website contains links to other websites that are not owned or
        controlled by us. Please be aware that we are not responsible for the
        privacy practices of such other websites or third parties. We encourage
        you to be aware when you leave our website and to read the privacy
        statements of each and every website that may collect personal
        information.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const updated = "January 7, 2024";

  return (
    <>
      <SeoHelmet
        title="Privacy Policy • Signum Network"
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
              <p className="text-white">PRIVACY POLICY</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-white">Last updated: {updated}</p>
            </div>
          </div>
        </Container>
      </header>
      <main className="relative z-10">
        <Container className="py-12">
          <div className="prose prose-neutral max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 mb-10">
                <h2 className="mb-3 text-xl font-semibold text-neutral-900">
                  {s.title}
                </h2>
                <div className="text-[15px] text-neutral-700">{s.body}</div>
              </section>
            ))}
          </div>

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
