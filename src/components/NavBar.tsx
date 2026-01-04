import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import Container from "./Container";
import { ConnectionManager } from "@lib/components/ConnectionManager";
import { AccountCard } from "@lib/components/AccountCard";

/** External links used in LINKS dropdown */
const linksMenu = [
  { label: "Chain-Statistics", href: "https://stats.signum.network/miner/" },
  { label: "Explorer", href: "https://explorer.signum.network" },
  { label: "DeFi", href: "https://www.signumswap.com" },
  { label: "NFTs", href: "https://www.signumart.io" },
  { label: "nostr", href: "https://www.nostrum.network/" },
  { label: "Name System", href: "https://www.signum.domains/" },
  { label: "Signa Rank Club", href: "https://www.signarank.club/" },
  { label: "Mining Game", href: "https://tmg.notallmine.net/" },
];

/** Internal links used in DISCOVER dropdown (first is /payments as requested) */
const discoverMenu = [
  { label: "Smart Payments", to: "/payments" },
  { label: "Smart Tokens", to: "/tokens" },
  { label: "Smart Contracts", to: "/smartcontracts" },
  { label: "Smart Messages", to: "/messages" },
  { label: "Smart Aliases", to: "/aliases" },
];

/** Renders the mobile sheet in a portal so it always overlays page content */
function MobileMenuSheet({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-[100000]"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Sheet */}
      <div
        className="absolute inset-x-0 top-0 mx-3 my-3 rounded-2xl bg-white shadow-soft ring-1 ring-black/5
                   max-h-[calc(100vh-1.5rem)] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default function NavBar() {
  // mobile sheet
  const [open, setOpen] = useState(false);

  // desktop dropdowns
  const [linksOpen, setLinksOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  // mobile collapsibles
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);

  const firstFocusable = useRef<HTMLButtonElement | null>(null);

  const linksBtnRef = useRef<HTMLButtonElement | null>(null);
  const linksMenuRef = useRef<HTMLDivElement | null>(null);

  const discBtnRef = useRef<HTMLButtonElement | null>(null);
  const discMenuRef = useRef<HTMLDivElement | null>(null);

  // Body scroll lock for mobile sheet
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // ESC closes things
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setLinksOpen(false);
        setDiscoverOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus first element when mobile opens
  useEffect(() => {
    if (open && firstFocusable.current) firstFocusable.current.focus();
  }, [open]);

  // Click outside (desktop LINKS)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!linksOpen) return;
      const t = e.target as Node;
      if (
        linksMenuRef.current &&
        !linksMenuRef.current.contains(t) &&
        linksBtnRef.current &&
        !linksBtnRef.current.contains(t)
      ) {
        setLinksOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [linksOpen]);

  // Click outside (desktop DISCOVER)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!discoverOpen) return;
      const t = e.target as Node;
      if (
        discMenuRef.current &&
        !discMenuRef.current.contains(t) &&
        discBtnRef.current &&
        !discBtnRef.current.contains(t)
      ) {
        setDiscoverOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [discoverOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200/70">
        <Container className="h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/img/logo/Signum_Logomark_black.svg"
              alt="Signum Logo"
              className="h-10 w-10"
            />
            <span className="font-bold tracking-tight text-signum-midnight text-4xl">
              Signum
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-signum-midnight">
            {/* DISCOVER dropdown (internal) */}
            <div className="relative">
              <button
                ref={discBtnRef}
                type="button"
                aria-haspopup="menu"
                aria-expanded={discoverOpen}
                onClick={() => {
                  setDiscoverOpen((v) => !v);
                  setLinksOpen(false);
                }}
                className={`navlink-underline inline-flex items-center gap-1 ${
                  discoverOpen ? "navlink-underline-active" : ""
                }`}
              >
                DISCOVER
                <svg
                  className={`h-4 w-4 transition-transform ${
                    discoverOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.975a.75.75 0 111.08 1.04l-4.24 4.54a.75.75 0 01-1.08 0l-4.24-4.54a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {discoverOpen && (
                <div
                  ref={discMenuRef}
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-neutral-200/70 p-2"
                >
                  <ul className="space-y-1">
                    {discoverMenu.map((d) => (
                      <li key={d.label}>
                        <NavLink
                          to={d.to}
                          className="block rounded-xl px-3 py-2 text-[15px] text-neutral-800 hover:bg-signum-acqua"
                          onClick={() => setDiscoverOpen(false)}
                        >
                          {d.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <NavLink
              to="/poc-plus"
              className={({ isActive }) =>
                isActive
                  ? "navlink-underline navlink-underline-active"
                  : "navlink-underline"
              }
            >
              POC+
            </NavLink>

            <NavLink
              to="/mining"
              className={({ isActive }) =>
                isActive
                  ? "navlink-underline navlink-underline-active"
                  : "navlink-underline"
              }
            >
              MINING
            </NavLink>

            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                isActive
                  ? "navlink-underline navlink-underline-active"
                  : "navlink-underline"
              }
            >
              WALLETS
            </NavLink>

            {/* LINKS dropdown (external) */}
            <div className="relative">
              <button
                ref={linksBtnRef}
                type="button"
                aria-haspopup="menu"
                aria-expanded={linksOpen}
                onClick={() => {
                  setLinksOpen((v) => !v);
                  setDiscoverOpen(false);
                }}
                className={`navlink-underline inline-flex items-center gap-1 ${
                  linksOpen ? "navlink-underline-active" : ""
                }`}
              >
                LINKS
                <svg
                  className={`h-4 w-4 transition-transform ${
                    linksOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.975a.75.75 0 111.08 1.04l-4.24 4.54a.75.75 0 01-1.08 0l-4.24-4.54a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {linksOpen && (
                <div
                  ref={linksMenuRef}
                  role="menu"
                  className="absolute right-0 top-full mt-2 w-60 rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-neutral-200/70 p-2"
                >
                  <ul className="space-y-1">
                    {linksMenu.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-xl px-3 py-2 text-[15px] text-neutral-800 hover:bg-signum-acqua"
                          onClick={() => setLinksOpen(false)}
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ConnectionManager />
            <AccountCard />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 border border-neutral-300"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </Container>
      </header>

      {/* Mobile overlay + sheet (portal) */}
      <MobileMenuSheet open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/img/logo/Signum_Logomark_black.svg"
              alt="Signum Logo"
              className="h-5 w-5"
            />
            <span className="font-bold tracking-tight text-signum-midnight">
              SIGNUM
            </span>
          </Link>
          <button
            ref={firstFocusable}
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 border border-neutral-300"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="px-4 pb-4 pt-1">
          <ul className="flex flex-col">
            {/* DISCOVER (collapsible) */}
            <li className="mt-1">
              <button
                type="button"
                className="w-full text-left rounded-xl px-3 py-2 text-base text-neutral-800 hover:bg-signum-acqua inline-flex items-center justify-between"
                aria-expanded={mobileDiscoverOpen}
                onClick={() => setMobileDiscoverOpen((v) => !v)}
              >
                <span>DISCOVER</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    mobileDiscoverOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.975a.75.75 0 111.08 1.04l-4.24 4.54a.75.75 0 01-1.08 0l-4.24-4.54a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              {mobileDiscoverOpen && (
                <ul className="mt-1 ml-2 space-y-1">
                  {discoverMenu.map((d) => (
                    <li key={d.label}>
                      <NavLink
                        to={d.to}
                        className="block rounded-xl px-3 py-2 text-base text-neutral-800 hover:bg-signum-acqua"
                        onClick={() => setOpen(false)}
                      >
                        {d.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Main internal links */}
            <li>
              <NavLink
                to="/poc-plus"
                className="block rounded-xl px-3 py-2 text-base text-neutral-800 hover:bg-signum-acqua"
                onClick={() => setOpen(false)}
              >
                PoC+
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mining"
                className="block rounded-xl px-3 py-2 text-base text-neutral-800 hover:bg-signum-acqua"
                onClick={() => setOpen(false)}
              >
                Mining
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wallet"
                className="block rounded-xl px-3 py-2 text-base text-neutral-800 hover:bg-signum-acqua"
                onClick={() => setOpen(false)}
              >
                Wallets
              </NavLink>
            </li>

            {/* LINKS (collapsible) */}
            <li className="mt-1">
              <button
                type="button"
                className="w-full text-left rounded-xl px-3 py-2 text-base text-neutral-800 hover:bg-signum-acqua inline-flex items-center justify-between"
                aria-expanded={mobileLinksOpen}
                onClick={() => setMobileLinksOpen((v) => !v)}
              >
                <span>LINKS</span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    mobileLinksOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.207l3.71-3.975a.75.75 0 111.08 1.04l-4.24 4.54a.75.75 0 01-1.08 0l-4.24-4.54a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              {mobileLinksOpen && (
                <ul className="mt-1 ml-2 space-y-1">
                  {linksMenu.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-xl px-3 py-2 text-base text-neutral-800 hover:bg-signum-acqua"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </MobileMenuSheet>
    </>
  );
}
