type CardProps = { title: string; desc: string; href: string; kicker?: string };
export default function ProductCard({ title, desc, href, kicker }: CardProps) {
  return (
    <a href={href} className="card p-6 group">
      {kicker && <div className="kicker">{kicker}</div>}
      <h3 className="mt-1 text-2xl font-semibold tracking-tight text-signum-midnight">
        {title}
      </h3>
      <p className="mt-2 text-neutral-700 text-sm">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm text-signum-blue">
        <span className="group-hover:translate-x-0.5 transition">Open</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
