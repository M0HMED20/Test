import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { categories, perfumes, type Filter } from "../data/perfumes";
import { cn } from "../utils/cn";

export default function Collection({
  onAddToBag,
}: {
  onAddToBag: (name: string) => void;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const visible =
    filter === "All" ? perfumes : perfumes.filter((p) => p.category === filter);

  const toggleWish = (id: number) =>
    setWishlist((w) =>
      w.includes(id) ? w.filter((x) => x !== id) : [...w, id]
    );

  return (
    <section id="collection" className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                The Collection
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl font-medium md:text-5xl">
              Signature <em className="text-gradient">eaux de parfum</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all",
                  filter === c
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/20 text-ink-soft hover:border-gold hover:text-gold"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45 }}
                className="group rounded-3xl bg-white p-4 shadow-md shadow-ink/5 transition-shadow hover:shadow-xl hover:shadow-ink/10"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur">
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <button
                    aria-label="Add to wishlist"
                    onClick={() => toggleWish(p.id)}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink backdrop-blur transition-colors hover:text-gold"
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4 transition-all",
                        wishlist.includes(p.id) && "fill-gold text-gold"
                      )}
                    />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                      {p.tagline}
                    </p>
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-medium text-ink-soft">
                        {p.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {p.notes.join(" · ")}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                    <p className="font-display text-xl font-semibold">
                      ${p.price}
                    </p>
                    <button
                      onClick={() => onAddToBag(p.name)}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-colors hover:bg-gold"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" /> Add to bag
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
