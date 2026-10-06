import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "38+", label: "Years of craft" },
  { value: "120+", label: "Rare essences" },
  { value: "52", label: "Countries worldwide" },
];

const heroImage =
  "https://images.pexels.com/photos/13882813/pexels-photo-13882813.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800";
const cardImage =
  "https://images.pexels.com/photos/31022283/pexels-photo-31022283.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-gold-soft/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-rose/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-14 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-gold"
          >
            <span className="h-px w-10 bg-gold" /> Maison de Parfum · Est. 1987
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-medium leading-[1.05] md:text-7xl"
          >
            Wear the essence of <em className="text-gradient">timeless elegance</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            Each Hagora flacon is composed by hand in our Grasse atelier — rare
            botanicals, aged in oak, bottled in small numbered batches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-cream transition-colors hover:bg-gold"
            >
              Discover the collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#atelier"
              className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] transition-colors hover:border-gold hover:text-gold"
            >
              Our story
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center gap-10 border-t border-ink/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-ink">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="animate-floaty relative">
            <div className="absolute -inset-4 rounded-t-[999px] rounded-b-3xl border border-gold/40" />
            <img
              src={heroImage}
              alt="Hagora signature perfume bottle with gold cap"
              className="relative h-[560px] w-full rounded-t-[999px] rounded-b-3xl object-cover shadow-2xl shadow-ink/20"
            />
            <div className="absolute inset-0 rounded-t-[999px] rounded-b-3xl bg-gradient-to-t from-ink/30 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="absolute -left-8 bottom-16 hidden w-64 rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-xl shadow-ink/10 backdrop-blur-md sm:flex"
          >
            <img
              src={cardImage}
              alt="Amber Nocturne"
              className="h-16 w-16 rounded-xl object-cover"
            />
            <div className="ml-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Bestseller · N°01
              </p>
              <p className="font-display text-lg font-semibold">Amber Nocturne</p>
              <div className="mt-1 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
                <span className="ml-1 text-xs text-ink-soft">$185</span>
              </div>
            </div>
          </motion.div>

          <div className="absolute -right-6 top-10 flex h-28 w-28 items-center justify-center rounded-full bg-cream shadow-lg shadow-ink/10">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                />
              </defs>
              <text className="fill-gold" fontSize="8" letterSpacing="2.5">
                <textPath href="#circlePath">
                  HAGORA · MAISON DE PARFUM · GRASSE ·
                </textPath>
              </text>
            </svg>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-gold-soft">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2 22 12 12 22 2 12z" />
              </svg>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
