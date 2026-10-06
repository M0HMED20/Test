import { motion } from "framer-motion";
import { FlaskConical, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainably sourced",
    text: "Botanicals from regenerative farms across Provence, Morocco and Madagascar.",
  },
  {
    icon: FlaskConical,
    title: "Master perfumers",
    text: "Blended by third-generation noses, with over a thousand trials per formula.",
  },
  {
    icon: Sparkles,
    title: "Small numbered batches",
    text: "Never more than 500 flacons per release — each one signed and dated.",
  },
];

export default function About() {
  return (
    <section id="atelier" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.pexels.com/photos/7814956/pexels-photo-7814956.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Perfume bottle and incense in the Hagora atelier"
            className="h-[520px] w-full rounded-3xl object-cover shadow-xl shadow-ink/15"
          />
          <img
            src="https://images.pexels.com/photos/8724474/pexels-photo-8724474.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Perfume bottle surrounded by flower petals"
            className="absolute -bottom-10 -right-6 hidden h-48 w-64 rounded-2xl border-8 border-cream object-cover shadow-lg md:block"
          />
          <div className="absolute -left-6 top-10 rounded-2xl bg-ink px-6 py-5 text-cream shadow-xl">
            <p className="font-display text-4xl font-semibold text-gold-soft">
              38<span className="text-2xl">+</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em]">
              Years of craft
            </p>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              The Atelier
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-4xl font-medium leading-tight md:text-5xl"
          >
            Perfume is poetry, <em className="text-gradient">bottled by hand.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6 leading-relaxed text-ink-soft"
          >
            Founded in 1987 in a sunlit atelier above the lavender fields of
            Grasse, Hagora began with a single conviction: a fragrance should
            unfold like a story — with a bright opening, a beating heart, and a
            memory that lingers long after you have left the room.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 leading-relaxed text-ink-soft"
          >
            Today our essences travel from the rose harvests of May to the amber
            forests of the Baltic — composed in oak-aged concentrates and poured
            in numbered batches of five hundred.
          </motion.p>

          <div className="mt-10 space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold-soft/15 text-gold">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-4 border-t border-ink/10 pt-8"
          >
            <div className="h-px flex-1 bg-ink/10" />
            <div className="text-center">
              <p className="font-display text-2xl italic text-ink">Élise Hagora</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                Founder &amp; Master Perfumer
              </p>
            </div>
            <div className="h-px flex-1 bg-ink/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
