import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type VideoItem = { title: string; href: string; thumbnail: string };
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
type SpeedProp = number | Partial<Record<Breakpoint, number>>;

type Props = {
  title?: string;
  subtitle?: string;
  items: VideoItem[];
  speed?: SpeedProp;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
};

const BP = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 } as const;

function resolveResponsiveSpeed(
  width: number,
  speed: SpeedProp | undefined,
  fallback = 90
) {
  if (typeof speed === "number" || speed == null)
    return typeof speed === "number" ? speed : fallback;
  if (width >= BP["2xl"] && speed["2xl"] != null) return speed["2xl"]!;
  if (width >= BP.xl && speed.xl != null) return speed.xl!;
  if (width >= BP.lg && speed.lg != null) return speed.lg!;
  if (width >= BP.md && speed.md != null) return speed.md!;
  if (width >= BP.sm && speed.sm != null) return speed.sm!;
  return speed.base ?? fallback;
}

export default function SignumVideoTicker({
  title = "Learn Signum",
  subtitle,
  items,
  speed = 90,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const setRef = useRef<HTMLDivElement | null>(null);

  const [setWidth, setSetWidth] = useState(0);
  const [, setViewportWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const [effectiveSpeed, setEffectiveSpeed] = useState(
    resolveResponsiveSpeed(
      typeof window !== "undefined" ? window.innerWidth : 0,
      speed,
      90
    )
  );

  const [copiesNeeded, setCopiesNeeded] = useState(2);

  useEffect(() => {
    const measure = () => {
      const vw = viewportRef.current?.clientWidth ?? 0;
      const sw = setRef.current?.scrollWidth ?? 0;
      setViewportWidth(vw);
      setSetWidth(sw);
      if (vw && sw) {
        const minTrack = vw * 2; // Reserve
        const need = Math.max(2, Math.ceil(minTrack / sw));
        setCopiesNeeded(need);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    viewportRef.current && ro.observe(viewportRef.current);
    setRef.current && ro.observe(setRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [items.length]);

  useEffect(() => {
    const update = () =>
      setEffectiveSpeed(resolveResponsiveSpeed(window.innerWidth, speed, 90));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [speed]);

  const distance = setWidth || 1;
  const durationSec = distance / Math.max(1, effectiveSpeed);
  type MarqueeStyle = CSSProperties & { ["--d"]?: string };
  const vars: MarqueeStyle = {
    "--d": `${distance}px`,
    animationDuration: `${durationSec}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: paused ? "paused" : "running",
  };
  const animName = direction === "right" ? "marquee-right" : "marquee-left";

  return (
    <section
      className={`w-full bg-signum-midnight text-white ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <div className="text-center md:text-left">
          <div className="text-xs font-medium tracking-widest text-white/70">
            LEARN
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-white/80 max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0); } to { transform: translateX(calc(-1 * var(--d))); } }
        @keyframes marquee-right { from { transform: translateX(calc(-1 * var(--d))); } to { transform: translateX(0); } }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none !important; transform: none !important; } }
      `}</style>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-signum-midnight to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-signum-midnight to-transparent" />

        <div ref={viewportRef} className="overflow-hidden">
          <div
            className="marquee flex items-stretch gap-10 px-6 py-6 will-change-transform"
            style={{ ...vars, animationName: setWidth ? animName : undefined }}
          >
            {/* Set A (for measuring) */}
            <div ref={setRef} className="flex items-stretch gap-10">
              {items.map((it, idx) => (
                <Card it={it} key={`set-a-${idx}`} />
              ))}
            </div>
            {/* more Sets */}
            {Array.from({ length: Math.max(1, copiesNeeded - 1) }).map(
              (_, i) => (
                <div
                  className="flex items-stretch gap-10"
                  aria-hidden
                  key={`set-copy-${i}`}
                >
                  {items.map((it, idx) => (
                    <Card it={it} key={`set-b-${i}-${idx}`} />
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  it,
}: {
  it: { title: string; href: string; thumbnail: string };
}) {
  return (
    <a
      href={it.href}
      target="_blank"
      rel="noreferrer"
      className="group block w-[260px] sm:w-[300px] rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur
                 hover:ring-white/20 transition-shadow shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={it.thumbnail}
          alt={it.title}
          className="h-44 sm:h-48 w-full object-contain bg-white"
          loading="lazy"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 text-signum-midnight text-xs font-semibold px-3 py-1 shadow">
          ▶︎ Watch
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm sm:text-base font-semibold leading-snug line-clamp-2">
          {it.title}
        </h3>
      </div>
    </a>
  );
}
