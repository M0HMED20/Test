import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Isabella Moreau",
    role: "Fashion Editor · Paris",
    initials: "IM",
    text: "Amber Nocturne is the only perfume that has ever stopped strangers on the street to ask what I'm wearing. It lasts from morning meetings to midnight.",
  },
  {
    name: "Daniel Okafor",
    role: "Collector · London",
    initials: "DO",
    text: "I have owned over two hundred fragrances. Hagora's compositions are the only ones I reach for again within the same week. True artistry.",
  },
  {
    name: "Sofia Ricci",
    role: "Architect · Milan",
    initials: "SR",
    text: "Rose de Vignes is spring in a bottle — delicate, modern and impossibly elegant. Even the packaging feels like a gift to yourself.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Voices
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="mt-5 font-display text-4xl font-medium md:text-5xl">
            Loved by <em className="text-gradient">nose and heart</em>
          </h2>
          <p className="mt-6 text-ink-soft">
            Words from those who wear Hagora every day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative rounded-3xl border border-ink/10 bg-white p-8 shadow-md shadow-ink/5"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/15" />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-lg italic leading-relaxed text-ink">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-ink/10 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft font-display text-lg font-semibold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
