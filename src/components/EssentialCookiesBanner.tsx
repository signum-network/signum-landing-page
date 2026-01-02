// src/components/EssentialCookiesBanner.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "signum_cookie_info_dismissed_at_v1"; // bump version if policy changes
const SHOW_DELAY_MS = 2000;
const REAPPEAR_DAYS = 180;
const REAPPEAR_MS = REAPPEAR_DAYS * 24 * 60 * 60 * 1000;

export default function EssentialCookiesBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let shouldShow = true;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const last = Number(raw);
        if (!Number.isNaN(last)) {
          shouldShow = Date.now() - last > REAPPEAR_MS;
        }
      }
    } catch {
      // If storage is blocked, show once per session
      shouldShow = true;
    }

    if (!shouldShow) return;

    const t = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-signum-midnight">
                Essential cookies only
              </p>
              <p className="mt-1 text-sm text-neutral-700">
                We only use strictly necessary cookies to keep this site secure
                and working. Learn more in our{" "}
                <Link
                  to="/privacypolicy"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                to="/privacypolicy"
                className="btn btn-ghost whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <button
                type="button"
                onClick={dismiss}
                className="btn btn-primary whitespace-nowrap"
                aria-label="Dismiss cookie notice"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
