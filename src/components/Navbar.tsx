import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "../utils/cn";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Atelier", href: "#atelier" },
  { label: "Notes", href: "#notes" },
  { label: "Voices", href: "#testimonials" },
];

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/90 shadow-lg shadow-ink/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 bg-ink text-gold-soft">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 2 22 12 12 22 2 12z" />
            </svg>
          </span>
          <span className="font-display text-2xl font-semibold tracking-[0.18em]">
            HAGORA
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Shopping bag"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-gold hover:text-gold"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#collection"
            className="hidden rounded-full bg-ink px-6 py-2.5 text-sm font-medium uppercase tracking-[0.15em] text-cream transition-colors hover:bg-gold md:block"
          >
            Shop Now
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/10 bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.18em] text-ink-soft hover:bg-cream-deep hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#collection"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-6 py-3 text-center text-sm font-medium uppercase tracking-[0.15em] text-cream"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
