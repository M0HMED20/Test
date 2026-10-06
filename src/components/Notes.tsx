import { motion } from "framer-motion";

const layers = [
  {
    num: "01",
    title: "Top Notes",
    time: "First 15 minutes",
    desc: "The first impression — bright, sparkling and effervescent, greeting the world before you speak.",
    notes: ["Bergamot", "Pink Pepper", "Dew Accord", "Grapefruit"],
  },
  {
    num: "02",
    title: "Heart Notes",
    time: "Hours 1 – 4",
    desc: "The character of the fragrance — florals unfolding slowly at the warmth of your skin.",
    notes: ["Jasmine", "Rose de Mai", "Iris", "Cardamom"],
  },
  {
    num: "03",
    title: "Base Notes",
    time: "Hours 4 – 12+",
    desc: "The memory — warm, deep and intimate, the trace you leave behind in every room.",
    notes: ["Oud", "Amber", "Vanilla", "Sandalwood"],
  },
];

export default function Notes() {
  return (
    <section id="notes" className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-soft">
              Olfactory Pyramid
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mt-5 font-display text-4xl font-medium md:text-5xl">
            The architecture of a <em className="text-gradient">Hagora scent</em>
          </h2>
          <p className="mt-6 text-cream/70">
            Every composition is built in three movements — each layer released
            in its own time, like chapters of a story.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-2"
          >
            <img
              src="https://images.pexels.com/photos/39516594/pexels-photo-39516594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1200"
              alt="Rose and jasmine harvest used in Hagora fragrances"
              className="h-[460px] w-full rounded-3xl object-cover shadow-2xl shadow-black/40"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-ink/70 p-5 backdrop-blur-md">
              <p className="font-display text-xl italic text-gold-soft">
                "A scent should never shout. It should be discovered."
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream/60">
                — The Hagora Atelier, Grasse
              </p>
            </div>
          </motion.div>

          <div className="space-y-8 lg:col-span-3">
            {layers.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex gap-6 rounded-3xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm transition-colors hover:border-gold/40"
              >
                <span className="font-display text-4xl font-semibold text-gold/50">
                  {l.num}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold">
                      {l.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-cream/50">
                      {l.time}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {l.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {l.notes.map((n) => (
                      <span
                        key={n}
                        className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold-soft"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
