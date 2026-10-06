const socials = [
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.9H5.3L17.8 20z" />
      </svg>
    ),
  },
];

const columns = [
  {
    title: "Shop",
    links: ["All Fragrances", "Bestsellers", "New Arrivals", "Gift Sets", "Discovery Set"],
  },
  {
    title: "House",
    links: ["Our Story", "The Atelier", "Sustainability", "Journal", "Stockists"],
  },
  {
    title: "Care",
    links: ["Shipping & Returns", "FAQ", "Contact", "Track Order", "Privacy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold-soft">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2 22 12 12 22 2 12z" />
                </svg>
              </span>
              <span className="font-display text-2xl font-semibold tracking-[0.18em]">
                HAGORA
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              An independent maison de parfum composing small-batch fragrances
              in Grasse, France, since 1987.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-cream/60 transition-colors hover:text-gold-soft"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row">
          <p>© 2026 Maison Hagora. All rights reserved.</p>
          <p>Crafted with patience in Grasse, France ✦</p>
        </div>
      </div>
    </footer>
  );
}
