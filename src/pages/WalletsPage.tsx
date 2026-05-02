import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChrome,
  faFirefoxBrowser,
  faBrave,
  faOpera,
  faGithub,
  faWindows,
  faLinux,
  faApple,
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faArrowUpRightFromSquare,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

import SignumVideoTicker from "../components/VideoTicker";
import XTWalletVideo from "../assets/img/video/XTWallet.png";
import AccountHandlingVideo from "../assets/img/video/AccountSetup.webp";
import MiningVideo from "../assets/img/video/Mining.png";
import GPUPlotsVideo from "../assets/img/video/GPUPlots.webp";
import CommitmentVideo from "../assets/img/video/Commitment.png";

import Platine from "../assets/img/mining/Platine.svg";
import World from "../assets/img/wallet/SignumWorld.png";
import SignumMobileWalletScreen from "../assets/img/wallet/SignumMobileWalletScreen.png";

const videos = [
  {
    title: "How to use XT-Wallet",
    href: "https://youtu.be/EWVOStOR0Vs",
    thumbnail: XTWalletVideo,
  },
  {
    title: "How to create and set up an account on Signum",
    href: "https://youtu.be/seUnm0GEwXY",
    thumbnail: AccountHandlingVideo,
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

const mobileWalletLinks = {
  landing: "https://launch.signum.network/",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.signum.mobile.wallet",
  appStore:
    "https://apps.apple.com/us/app/signum-mobile-wallet-v2/id6761561116",
};

export default function WalletsPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Wallets – Mobile, Browser & Desktop Wallets"
        description="Choose your Signum wallet. Start with the official Signum Mobile Wallet for iOS and Android, or use XT Wallet, Phoenix Wallet and BTDEX."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/wallets"
      />

      {/* HERO */}
      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-blue">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10%] top-0 z-0 hidden h-[120%] w-auto select-none opacity-70 xl:block [mask-image:linear-gradient(to_right,black,transparent_80%)] [-webkit-mask-image:linear-gradient(to_right,black,transparent_80%)]"
        />

        <img
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-5%] top-[-20%] z-0 hidden h-[140%] w-auto -scale-x-100 select-none opacity-60 lg:block [mask-image:linear-gradient(to_left,black,transparent_90%)] [-webkit-mask-image:linear-gradient(to_left,black,transparent_90%)]"
        />

        <Container className="relative z-10 min-h-[420px] py-12 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <figure className="order-1 justify-self-center md:order-2 md:justify-self-end">
              <img
                src={World}
                alt="Signum wallet network illustration"
                className="h-auto w-[100px] drop-shadow-xl sm:w-[160px] md:w-[260px]"
                loading="eager"
              />
            </figure>

            <div className="order-2 text-center md:order-1 md:text-left">
              <p className="text-sm tracking-widest text-white">
                Join the movement!
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Choose your Signum Wallet
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-[20px] text-white md:mx-0">
                Start with the official Signum Mobile Wallet — or choose the
                wallet that fits your device, workflow and level of experience.
              </p>
            </div>
          </div>
        </Container>
      </header>

      <main className="relative z-10">
        <Container className="py-14">
          {/* Flagship Mobile Wallet */}
          <section className="mb-8">
            <article className="relative card overflow-hidden p-6 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-signum-acqua/30" />

              <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-signum-acqua px-4 py-2 text-sm font-semibold text-signum-darkblue">
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                    Official Mobile Wallet · Recommended
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-signum-midnight md:text-5xl">
                    Signum Mobile Wallet
                  </h2>

                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-signum-midnight md:text-xl">
                    The flagship wallet for every Signum user. Manage your
                    Signa, tokens and accounts directly from your phone —
                    simple, modern and ready for everyday use.
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-signum-midnight sm:grid-cols-2">
                    <li>• Available for iOS and Android</li>
                    <li>• Built for new and existing users</li>
                    <li>• Easy access to your Signum account</li>
                    <li>• Designed as the main wallet experience</li>
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      className="btn btn-primary"
                      href={mobileWalletLinks.googlePlay}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Download Signum Mobile Wallet on Google Play"
                      title="Download on Google Play"
                    >
                      <FontAwesomeIcon
                        icon={faGooglePlay}
                        className="text-lg"
                      />
                      Google Play
                    </a>

                    <a
                      className="btn btn-ghost"
                      href={mobileWalletLinks.appStore}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Download Signum Mobile Wallet on the App Store"
                      title="Download on the App Store"
                    >
                      <FontAwesomeIcon
                        icon={faAppStoreIos}
                        className="text-lg"
                      />
                      App Store
                    </a>

                    <a
                      className="btn btn-ghost"
                      href={mobileWalletLinks.landing}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Signum Mobile Wallet landing page"
                      title="Open Wallet Landing Page"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-lg"
                      />
                      Wallet Landing Page
                    </a>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-center">
                  <div className="relative lg:-translate-x-6 xl:-translate-x-10">
                    <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-[2rem] bg-signum-blue/10 blur-2xl" />

                    <div className="relative rotate-0 transition-transform duration-300 lg:rotate-[4deg]">
                      <div className="rounded-[2.25rem] border border-neutral-200 bg-white p-2.5 shadow-xl">
                        <img
                          src={SignumMobileWalletScreen}
                          alt="Signum Mobile Wallet app screenshot"
                          className="h-auto w-[190px] rounded-[1.75rem] sm:w-[220px] md:w-[250px]"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Wallet Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {/* XT Wallet */}
            <article className="relative card overflow-hidden p-6">
              <img
                src="/img/wallets/XT.png"
                alt="XT Wallet Logo"
                className="absolute right-4 top-4 h-16 w-16 opacity-80"
              />

              <div className="mb-2 text-sm font-semibold text-neutral-900">
                Browser Extension
              </div>

              <h2 className="text-xl font-semibold text-signum-midnight">
                Signum XT Wallet
              </h2>

              <p className="mt-2 text-signum-midnight">
                Easy-to-use web extension to manage accounts, send/receive
                Signa, tokens & messages, and interact with DApps.
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-signum-midnight">
                <li>Import via passphrase</li>
                <li>Choose your node</li>
                <li>Multiple accounts & DApp support</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href="https://chrome.google.com/webstore/detail/signum-xt-wallet/kdgponmicjmjiejhifbjgembdcaclcib?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Chrome"
                  title="Download for Chrome"
                >
                  <FontAwesomeIcon icon={faChrome} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://addons.mozilla.org/en-US/firefox/addon/signum-xt-wallet/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Firefox"
                  title="Download for Firefox"
                >
                  <FontAwesomeIcon
                    icon={faFirefoxBrowser}
                    className="text-lg"
                  />
                </a>

                <a
                  className="btn btn-primary"
                  href="https://chrome.google.com/webstore/detail/signum-xt-wallet/kdgponmicjmjiejhifbjgembdcaclcib?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Brave"
                  title="Download for Brave"
                >
                  <FontAwesomeIcon icon={faBrave} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://chrome.google.com/webstore/detail/signum-xt-wallet/kdgponmicjmjiejhifbjgembdcaclcib?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Opera"
                  title="Download for Opera"
                >
                  <FontAwesomeIcon icon={faOpera} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://github.com/signum-network/signum-xt-wallet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  GitHub
                </a>
              </div>
            </article>

            {/* Phoenix */}
            <article className="relative card overflow-hidden p-6">
              <img
                src="/img/wallets/PhoenixLogo.svg"
                alt="Phoenix Wallet Logo"
                className="absolute right-4 top-4 h-12 w-12 opacity-80"
              />

              <div className="mb-2 text-sm font-semibold text-neutral-900">
                Cross-platform & Desktop/Web
              </div>

              <h2 className="text-xl font-semibold text-signum-midnight">
                Phoenix Wallet
              </h2>

              <p className="mt-2 text-signum-midnight">
                Modern, cross-platform wallet by the community for desktop/web
                with an easy UI.
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-signum-midnight">
                <li>Multiple accounts & QR support</li>
                <li>Send Signa with encrypted messages</li>
                <li>Manage your mining setup</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href="https://github.com/signum-network/phoenix/releases/download/desktop-1.5.0-beta.3/win-phoenix-signum-wallet-setup.1.5.0-beta.3.exe"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Windows"
                  title="Download for Windows"
                >
                  <FontAwesomeIcon icon={faWindows} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://github.com/signum-network/phoenix/releases/download/desktop-1.5.0-beta.3/linux-phoenix-signum-wallet.1.5.0-beta.3.deb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Linux"
                  title="Download for Linux"
                >
                  <FontAwesomeIcon icon={faLinux} className="text-lg" />
                </a>

                <a
                  className="btn btn-primary"
                  href="https://github.com/signum-network/phoenix/releases/download/desktop-1.5.0-beta.3/mac-phoenix-signum-wallet.1.5.0-beta.3.dmg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Mac OS"
                  title="Download for Mac OS"
                >
                  <FontAwesomeIcon icon={faApple} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://github.com/signum-network/phoenix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  GitHub
                </a>
              </div>
            </article>

            {/* BTDEX */}
            <article className="relative card overflow-hidden p-6">
              <img
                src="/img/wallets/BTDEXLogo.svg"
                alt="BTDEX Logo"
                className="absolute right-4 top-4 h-12 w-12 opacity-80"
              />

              <div className="mb-2 text-sm font-semibold text-neutral-900">
                All-in-one
              </div>

              <h2 className="text-xl font-semibold text-signum-midnight">
                BTDEX
              </h2>

              <p className="mt-2 text-signum-midnight">
                All-in-one app with essential wallet functions, decentralized
                exchange, plotting & mining tools.
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-signum-midnight">
                <li>Plotting and Mining</li>
                <li>Manage your commitment</li>
                <li>Trade on-chain</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href="https://github.com/btdex/btdex/releases/download/v0.6.8/btdex-v0.6.8-win.exe"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Windows"
                  title="Download for Windows"
                >
                  <FontAwesomeIcon icon={faWindows} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://github.com/btdex/btdex/releases/download/v0.6.8/btdex_0.6.8-1_amd64.deb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Linux"
                  title="Download for Linux"
                >
                  <FontAwesomeIcon icon={faLinux} className="text-lg" />
                </a>

                <a
                  className="btn btn-primary"
                  href="https://github.com/btdex/btdex/releases/download/v0.6.8/btdex-v0.6.8-macosx_x64.zip"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Mac OS"
                  title="Download for Mac OS"
                >
                  <FontAwesomeIcon icon={faApple} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://github.com/btdex/btdex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  GitHub
                </a>
              </div>
            </article>
          </div>

          {/* Learn more */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="relative card overflow-hidden p-6">
              <img
                src="/img/wallets/ExchnangeTrailer.svg"
                alt="Learn Signum"
                className="absolute right-4 top-4 h-32 w-32 opacity-80 md:h-40 md:w-40"
              />

              <h3 className="text-lg font-semibold text-signum-midnight">
                Getting Started
              </h3>

              <p className="mt-6 text-signum-midnight">
                <strong>New to Signum?</strong>
              </p>

              <p className="text-signum-midnight">Learn about:</p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-signum-midnight">
                <li>Accounts and passphrases</li>
                <li>Signa and Smart Tokens</li>
                <li>Signum basics</li>
                <li>Mining Signa</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href="https://docs.signum.network/signum/signum-basics"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faBook} className="text-lg" />
                  Guide Basic
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://docs.signum.network/signum/account"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faBook} className="text-lg" />
                  Guide Account
                </a>

                <a
                  className="btn btn-primary"
                  href="https://docs.signum.network/signum/smart-tokens"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faBook} className="text-lg" />
                  Guide Token
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://docs.signum.network/signum/starting-mining-signa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faBook} className="text-lg" />
                  Guide Mining
                </a>
              </div>
            </article>

            <article className="relative card overflow-hidden p-6">
              <img
                src="/img/wallets/Signum_Logo_darkblue.svg"
                alt="Signum Logo"
                className="absolute right-4 top-4 h-12 w-12 opacity-80"
              />

              <h3 className="text-lg font-semibold text-signum-midnight">
                Run a Node
              </h3>

              <p className="mt-2 text-signum-midnight">
                Ready to contribute? Install Signum Node and help secure the
                network. It loads and synchronizes the entire blockchain and
                includes the Classic Wallet. The hardware requirements are not
                demanding for the node:
              </p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-signum-midnight">
                <li>Minimum: 1 vCPU, 2 GB RAM, 30 GB HDD</li>
                <li>Recommendation: 2 vCPU, 4 GB RAM, 40 GB HDD</li>
                <li>Supported DBs: SQLite, MariaDB, PostgreSQL</li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href="https://github.com/signum-network/signum-node/releases/download/v3.9.6/signum-node-v3.9.6-win_x64.zip"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Windows"
                  title="Download for Windows"
                >
                  <FontAwesomeIcon icon={faWindows} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://github.com/signum-network/signum-node/releases/download/v3.9.6/signum-node-v3.9.6.zip"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Linux"
                  title="Download for Linux"
                >
                  <FontAwesomeIcon icon={faLinux} className="text-lg" />
                </a>

                <a
                  className="btn btn-primary"
                  href="https://github.com/signum-network/signum-node/releases/download/v3.9.6/signum-node-v3.9.6.zip"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Mac OS"
                  title="Download for Mac OS"
                >
                  <FontAwesomeIcon icon={faApple} className="text-lg" />
                </a>

                <a
                  className="btn btn-ghost"
                  href="https://github.com/signum-network/signum-node"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  GitHub
                </a>

                <a
                  className="btn btn-primary"
                  href="https://docs.signum.network/signum/starting-a-signum-node"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faBook} className="text-lg" />
                  Installation Guide
                </a>
              </div>
            </article>
          </div>
        </Container>

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
