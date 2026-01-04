import Container from "../components/Container";
import SeoHelmet from "../components/SEOHelmet";
import { Link } from "react-router-dom";

import pocPlusOpener from "../assets/img/main/PoCPlusOpener.svg";
import C64Logo from "../assets/img/pocplus/C64.svg";
import CommitmentLogo from "../assets/img/pocplus/Commitment.svg";
import FactorLogo from "../assets/img/pocplus/Factor.svg";
import SpaceLogo from "../assets/img/pocplus/HDDSpace.svg";
import Platine from "../assets/img/mining/Platine.svg";

import Factor1 from "../assets/img/pocplus/Factor1.svg";
import Factor8 from "../assets/img/pocplus/Factor8.svg";
import Factor0125 from "../assets/img/pocplus/Factor0125.svg";

import { SignumMiningLanding } from "../components/Calculator/Mining";
import { AddCommitmentButton } from "@lib/components/AddCommitmentButton";
import { RemoveCommitmentButton } from "@lib/components/RemoveCommitmentButton";

export default function PocPlusPage() {
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
                        right-[-15%] top-[-40%] h-[170%]           
                        w-auto opacity-60 
                        -scale-x-100
                        [mask-image:linear-gradient(to_left,black)]
                        [-webkit-mask-image:linear-gradient(to_left,black)]"
        />
        <Container className="relative z-10 py-12  min-h-110.25 sm:py-16">
          <div className="grid items-center gap-8 xl:grid-cols-2">
            <figure className="order-1 xl:order-2 justify-self-center xl:justify-self-end">
              <img
                src={pocPlusOpener}
                alt="Signum PoCPlus"
                className="w-[260px] sm:w-[420px] md:w-[520px] h-auto drop-shadow-xl"
                loading="eager"
              />
            </figure>

            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-sm tracking-widest text-white">
                CONSENSUS PoC+
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighttext-white text-white">
                Proof of Commitment
              </h1>
              <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-[20px] text-white">
                The smart solution for a sustainable blockchain. Bringing
                innovative technology to the forefront. All you need is some
                storage space.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href="#calculator" className="btn-white">
                  Estimate income
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="bg-white">
          <Container className="py-16">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-5">
              <div className="md:col-span-3">
                <article className="relative card p-6 overflow-hidden">
                  <h3 className="text-[24px] font-semibold text-signum-midnight mb-4">
                    What is PoC+?
                  </h3>
                  <p>
                    Signum introduced the world to the Proof of Commitment
                    (PoC+) decentralized consensus as the evolution of the Proof
                    of Capacity (PoC) consensus.
                    <br />
                    <br />
                    Different than the well-known Proof of Work (PoW) consensus
                    used by Bitcoin and many other coins, which require special
                    power-hungry equipment, PoC+ simply uses available disk
                    space.
                    <br />
                    <br />
                    This innovative consensus offers a new way for miners to
                    increase their effective storage capacity — committing a
                    Signa balance (stake) in their account. This will help
                    secure the network and improve their chances of earning
                    mining rewards. PoC+ is a greener option since effective
                    capacity can be increased without purchasing more equipment.
                    <br />
                    <br />
                    The mining process in the PoC+ consensus is so effective and
                    has such low hardware requirements that any consumer-grade
                    PC can be used to mine. The user will not even notice that
                    the mining process is happening, aside from the occasional
                    blinking LEDs from the hard disk drive (HDD)!
                  </p>
                </article>
              </div>

              <aside className="md:col-span-2">
                <div className="relative card p-6 overflow-hidden">
                  <h3 className="text-[24px] font-semibold text-signum-midnight mb-4">
                    Sustainable first
                  </h3>
                  <p>
                    <strong>Bitcoin’s Proof-of-Work</strong> uses expensive,
                    specialized hardware that burns a lot of electricity —
                    around of
                    <a
                      href="https://ccaf.io/cbnsi/cbeci"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong> 226&nbsp;TWh per year </strong>
                    </a>
                    — and creates significant e-waste.
                    <br />
                    <br />
                    <strong>Signum works differently.</strong> It runs on easily
                    reusable, consumer-grade hard drives and uses
                    <strong> less than 0.001%</strong> of that energy, helping
                    to avoid e-waste.
                    <br />
                    <br />
                  </p>
                  <p>
                    <strong>How it works in simple terms:</strong>
                  </p>
                  <p>
                    Miners do one heavier setup step called “plotting,” where
                    they prepare some space on their disks. After that, mining
                    mostly means{" "}
                    <strong>reading a tiny slice of that space</strong> —about{" "}
                    <strong>1/4096 (≈0.025%)</strong> —every few minutes to help
                    secure the network. The drives are idle most of the time.
                    This approach is called{" "}
                    <strong> Proof of Commitment+ (PoC+)</strong>.
                  </p>
                </div>
              </aside>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <img
                  src={C64Logo}
                  alt="No Limits"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="self-center">
                <article className="relative card p-6 overflow-hidden">
                  <h3 className="text-2xl font-semibold text-signum-midnight mb-4">
                    Runs on what you already have
                  </h3>
                  <p>
                    All you need is free disk space. Your PC, tiny computers
                    like a Raspberry Pd, or that spare phone is enough. PoC+
                    turns simple storage into secure network power. Signum opens
                    up the possibility for everyone to participate in the mining
                    process without any major obstacles.
                  </p>
                </article>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative bg-gradient-to-b bg-signum-blue to-signum-midnight/50">
          <Container className="py-16 text-center">
            <h2 className="text-white text-2xl font-semibold">
              The 3 pillars of PoC+
            </h2>
            <p className="text-white/90 mt-2">
              PoC+ combines the best of two algorithms. PoC and PoS.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <article className="card p-6">
                <img
                  src={SpaceLogo}
                  alt="PoC+ Capacity"
                  className="h-24 w-24 mx-auto mb-4"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold text-signum-midnight">
                  PoC+ Capacity
                </h4>
                <p className="mt-2 text-left">
                  Essentially, capacity consists of storing hard to compute
                  hashes in plot files and then reading a small fraction of
                  these files (around 0.025%) every time a new block is forged.
                  This makes the mining process super energy efficient.
                </p>
              </article>

              <article className="card p-6">
                <img
                  src={CommitmentLogo}
                  alt="PoC+ Commitment"
                  className="h-24 w-24 mx-auto mb-4"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold text-signum-midnight">
                  PoC+ Commitment
                </h4>
                <p className="mt-2 text-left">
                  In addition to the provided capacity, a miner can lock a given
                  amount of Signa in his account. The chain compares his
                  committed balance with the average used by other miners over
                  the last 1,440 blocks.
                </p>
              </article>

              <article className="card p-6">
                <img
                  src={FactorLogo}
                  alt="PoC+ Factor"
                  className="h-24 w-24 mx-auto mb-4"
                  loading="lazy"
                />
                <h4 className="text-lg font-semibold text-signum-midnight">
                  PoC+ Factor
                </h4>
                <p className="mt-2 text-left">
                  Add a Signa commitment and your effective capacity grows with
                  you — match the network average for a clean 1×, or go 100× the
                  average to unlock up to 8×. Just getting started? Begin at a
                  factor of 0.125× and dial it up whenever you’re ready.
                </p>
              </article>
            </div>

            <h3 className="mt-16 text-white text-2xl font-semibold">
              Why commit Signa?
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6">
              <div className="card p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex items-center justify-center p-6">
                    <img
                      src={Factor0125}
                      alt="Factor 0.125x"
                      className="max-h-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-2 py-6">
                    <h4 className="text-lg font-semibold text-signum-midnight px-6">
                      Factor 0.125x
                    </h4>
                    <p className="px-6 mt-2 text-left">
                      If a miner has no Signa staked on his account for
                      commitment, only 1/8 of his actual capacity will be
                      effective — reducing the chances of mining blocks and
                      therefore reducing mining income.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex items-center justify-center p-6">
                    <img
                      src={Factor1}
                      alt="Factor 1x"
                      className="max-h-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-2 py-6">
                    <h4 className="text-lg font-semibold text-signum-midnight px-6">
                      Factor 1x
                    </h4>
                    <p className=" px-6 mt-2 text-left">
                      If the miner has exactly the average commitment per TiB of
                      capacity, the multiplying factor is 1 and their income
                      will already be much higher than those without any stake.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex items-center justify-center p-6">
                    <img
                      src={Factor8}
                      alt="Factor 8x"
                      className="max-h-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-2 py-6">
                    <h4 className="text-lg font-semibold text-signum-midnight px-6">
                      Factor 8x
                    </h4>
                    <p className="px-6 mt-2 text-left">
                      If the miner stakes 100× more than the average commitment
                      per TiB, then his effective capacity is multiplied by a
                      factor of 8. This means his chance to mine blocks is 8
                      times higher and therefore his mining income is increased.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="calculator">
          <div className="mt-4 gap-6">
            <SignumMiningLanding />
          </div>
        </section>
        <CTACommitment />
        <section className="bg-white">
          <Container className="py-12 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/wallet" className="btn btn-primary">
                Download Wallets
              </Link>
              <a
                className="btn btn-ghost"
                href="https://explorer.signum.network"
                target="_blank"
                rel="noreferrer"
              >
                Open Explorer
              </a>
            </div>
          </Container>
        </section>
      </main>
    </>
  );

  function CTACommitment() {
    return (
      <div className="bg-gradient-to-b from-signum-acqua/40 to-white text-signum-midnight">
        <section className="py-16">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-3xl font-semibold text-center mb-8">
              Manage your Commitment
            </h1>

            <div className="grid gap-6 md:grid-cols-2 items-start ">
              <div>
                <AddCommitmentButton />
              </div>
              <div>
                <RemoveCommitmentButton />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
