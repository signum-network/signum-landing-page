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
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import SignumVideoTicker from "../components/VideoTicker";
import XTWalletVideo from "../assets/img/video/XTWallet.png";
import AccountHnadlinngVideo from "../assets/img/video/AccountSetup.webp";
import MiningVideo from "../assets/img/video/Mining.png";
import GPUPlotsVideo from "../assets/img/video/GPUPlots.webp";
import CommitmentVideo from "../assets/img/video/Commitment.png";

import Platine from "../assets/img/mining/Platine.svg";
import World from "../assets/img/wallet/SignumWorld.png";

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
export default function WalletsPage() {
  return (
    <>
      <SeoHelmet
        title="Signum Network – Powering a calmer kind of crypto"
        description="Sustainable payments, tokens, messages & smart contracts — secured by disk space since 2014."
        image="https://www.signum.network/og/Signum_blue.png"
        url="https://www.signum.network/"
      />
      {/* HERO */}
      <header className="relative isolate overflow-hidden border-b border-neutral-200/60 bg-signum-blue">
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
          src={Platine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-0 
                        hidden lg:block
                        right-[-5%] top-[-20%] h-[140%]           
                        w-auto opacity-60 
                        -scale-x-100
                        [mask-image:linear-gradient(to_left,black,transparent_90%)]
                        [-webkit-mask-image:linear-gradient(to_left,black,transparent_90%)]"
        />

        <Container className="relative z-10 py-12 min-h-110.25 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <figure className="order-1 md:order-2 justify-self-center md:justify-self-end">
              <img
                src={World}
                alt="Signum HDD mining illustration"
                className="w-[100px] sm:w-[160px] md:w-[260px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>

            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">
                Join the movement!
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Choose your Wallet
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                Manage Signa, tokens, messages & smart contracts. Pick the
                wallet that fits your device and workflow.
              </p>
            </div>
          </div>
        </Container>
      </header>

      <main className="relative z-10">
        <Container className="py-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {/* XT Wallet */}
            <article className="relative card p-6 overflow-hidden">
              <img
                src="/img/wallets/XT.png"
                alt="XT Logo"
                className="absolute top-4 right-4 h-16 w-16 opacity-80"
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
                <li>Import via passphrase </li>
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
            <article className="relative card p-6 overflow-hidden">
              <img
                src="/img/wallets/PhoenixLogo.svg"
                alt="Phoenix Logo"
                className="absolute top-4 right-4 h-12 w-12 opacity-80"
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
                <li>Send Signa with (encrypted) messages</li>
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
                  aria-label="Download for Liunx"
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
            <article className="relative card p-6 overflow-hidden">
              <img
                src="/img/wallets/BTDEXLogo.svg"
                alt="Phoenix Logo"
                className="absolute top-4 right-4 h-12 w-12 opacity-80"
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
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
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
                  href="https://github.com/btdex/btdex/releases/download/v0.6.8/btdex-v0.6.8-macosx_x64.zip"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Liunx"
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
            <article className="relative card p-6 overflow-hidden">
              <img
                src="/img/wallets/ExchnangeTrailer.svg"
                alt="Learn Signum"
                className="absolute top-4 right-4 h-34 w-34 opacity-80 md:h-44 md:w-44"
              />
              <h3 className="text-lg font-semibold text-signum-midnight">
                Getting Started
              </h3>
              <br></br>
              <p className="mt-2 text-signum-midnight">
                <strong>New to Signum? </strong>
              </p>
              <p>Learn about:</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-signum-midnight">
                <li>Accounts, Passphrases </li>
                <li>Signa, Smart Tokens</li>
                <li>Signum Basiscs</li>
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

            <article className="relative card p-6 overflow-hidden">
              <img
                src="/img/wallets/Signum_Logo_darkblue.svg"
                alt="Signum Logo"
                className="absolute top-4 right-4 h-12 w-12 opacity-80"
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
                <li>Minimum : 1 vCPU, 2 GB RAM, 30 GB HDD </li>
                <li>Recommendation : 2 vCPU, 4 GB RAM, 40 GB HDD </li>
                <li>Supported DBs : SQLite, MariaDB, PostgresSQL </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href="https://github.com/signum-network/signum-node/releases/download/v3.9.5/signum-node-v3.9.5-win_x64.zip"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Windows"
                  title="Download for Windows"
                >
                  <FontAwesomeIcon icon={faWindows} className="text-lg" />
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/signum-network/signum-node/releases/download/v3.9.5/signum-node-v3.9.5.zip"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download for Liunx"
                  title="Download for Linux"
                >
                  <FontAwesomeIcon icon={faLinux} className="text-lg" />
                </a>
                <a
                  className="btn btn-primary"
                  href="hhttps://github.com/signum-network/signum-node/releases/download/v3.9.5/signum-node-v3.9.5.zip"
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
