import Container from "./Container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faTelegram,
  faXTwitter,
  faReddit,
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

type LinkItem = {
  label: string;
  href?: string;
  to?: string;
  ext?: boolean;
  Icon?: IconDefinition;
};

const sections: { title: string; links: LinkItem[] }[] = [
  {
    title: "Resources",
    links: [
      { label: "Wallets & Node", to: "/wallet" },
      { label: "Mining", to: "/mining" },
      { label: "Exchanges", to: "/exchanges" },
      { label: "SignumSwap", href: "https://www.signumswap.com/" },
      { label: "NFT-Portal", href: "https://www.signumart.io/" },
    ],
  },
  {
    title: "Development",
    links: [
      { label: "Documentation", href: "https://docs.signum.network/signum" },
      { label: "API - Mainnet", href: "https://europe.signum.network/api-doc" },
      {
        label: "API - Testnet",
        href: "https://europe3.testnet.signum.network/api-doc",
      },
      {
        label: "Signum",
        href: "https://github.com/signum-network",
        Icon: faGithub,
      },
      {
        label: "SignumJS",
        href: "https://github.com/signum-network/signumjs",
        Icon: faGithub,
      },
      {
        label: "Signum SmartJ",
        href: "https://github.com/signum-network/SmartJ",
        Icon: faGithub,
      },
      { label: "BTDEX", href: "https://github.com/btdex", Icon: faGithub },
    ],
  },
  {
    title: "Signum-Network",
    links: [
      {
        label: "Chain-Statistics",
        href: "https://stats.signum.network/miner/",
      },
      { label: "Ecosystem", href: "https://docs.signum.network/ecosystem" },
      { label: "Wiki", href: "https://wiki.signum.network/" },
      { label: "Medium", href: "https://medium.com/signum-network" },
    ],
  },
  {
    title: "Explorer",
    links: [
      { label: "Mainnet", href: "#", ext: false },
      { label: "Explorer I (EU)", href: "https://explorer.signum.network" },
      { label: "Explorer II (US)", href: "https://explorer.notallmine.net/" },
      { label: "Explorer III (EU)", href: "https://explore.signumcoin.ro/" },
      { label: "Testnet", href: "#", ext: false },
      { label: "t-chain.explorer", href: "https://t-chain.signum.network" },
    ],
  },
  {
    title: "Association",
    links: [
      { label: "SNA", to: "/sna" },
      { label: "Donate to SNA", to: "/sna#donation" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "About us", to: "/aboutus" },
      { label: "Privacy Policy", to: "/privacypolicy" },
      { label: "Legal Disclaimer", to: "/disclaimer" },
    ],
  },
];

const social = [
  { name: "Telegram", href: "https://t.me/SignumNetwork", Icon: faTelegram },
  { name: "X", href: "https://x.com/signum_official", Icon: faXTwitter },
  { name: "Reddit", href: "https://reddit.com/r/Signum", Icon: faReddit },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SignumNetwork",
    Icon: faYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/signum-network",
    Icon: faLinkedin,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* hairline gradient (Apple-ish) */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <Container className="py-14">
        {/* brand + short claim */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/img/logo/Signum_Logomark_black.svg"
              alt="Signum Logo"
              className="h-5 w-5"
            />
            <span className="font-semibold tracking-wide text-neutral-900">
              SIGNUM
            </span>
            <span className="sr-only">Signum Network</span>
          </div>
          <p className="text-sm text-signum-midnight">
            Sustainable payments, tokens & smart contracts.
          </p>
        </div>

        {/* link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {sections.map((s) => (
            <nav key={s.title} aria-label={s.title}>
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">
                <span className="relative inline-block">
                  {s.title}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-7 rounded bg-gradient-to-r from-sky-500 to-blue-600/80" />
                </span>
              </h3>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link
                        to={l.to}
                        className="flex items-center gap-2 text-[15px] text-neutral-700 transition-colors hover:text-neutral-900"
                      >
                        {l.Icon && (
                          <FontAwesomeIcon
                            icon={l.Icon}
                            className="text-neutral-500 text-[16px]"
                          />
                        )}
                        {l.label}
                      </Link>
                    ) : l.href === "#" || !l.href ? (
                      <span className="flex items-center gap-2 text-[15px] text-neutral-500 cursor-default select-none">
                        {l.Icon && (
                          <FontAwesomeIcon
                            icon={l.Icon}
                            className="text-neutral-400 text-[16px]"
                          />
                        )}
                        <strong>{l.label}</strong>
                      </span>
                    ) : (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[15px] text-neutral-700 transition-colors hover:text-neutral-900"
                      >
                        {l.Icon && (
                          <FontAwesomeIcon
                            icon={l.Icon}
                            className="text-neutral-500 text-[16px]"
                          />
                        )}
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* social row under “Signum-Network” only */}
              {s.title === "Signum-Network" && (
                <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-3 justify-start justify-items-start">
                  {social.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="group rounded-full p-2 ring-1 ring-neutral-200 transition hover:ring-neutral-300"
                    >
                      <FontAwesomeIcon
                        icon={s.Icon}
                        className="text-xl text-neutral-600 transition group-hover:text-neutral-900"
                      />
                    </a>
                  ))}
                </div>
              )}
            </nav>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col justify-center gap-4 border-t border-neutral-200/70 pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center">
          <span>© {year} SIGNUM</span>
        </div>
      </Container>
    </footer>
  );
}
