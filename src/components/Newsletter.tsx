import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center shadow-2xl shadow-ink/20 md:px-16"
        >
          <img
            src="https://images.pexels.com/photos/38904117/pexels-photo-38904117.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-soft">
              The Inner Circle
            </span>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-4xl font-medium text-cream md:text-5xl">
              Receive <em className="text-gradient">10% off</em> your first order
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream/70">
              Private previews of numbered batches, atelier stories, and
              invitations to our seasonal blending ceremonies.
            </p>
            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-full border border-gold/50 bg-gold/10 px-6 py-4 text-gold-soft"
              >
                <Check className="h-5 w-5" /> Welcome to the house — check your
                inbox.
              </motion.div>
            ) : (
              <form
                onSubmit={submit}
                className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/50" />
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-cream/20 bg-cream/10 py-4 pl-11 pr-4 text-sm text-cream placeholder:text-cream/40 outline-none backdrop-blur transition-colors focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-opacity hover:opacity-90"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="mt-5 text-xs text-cream/40">
              No spam, ever. Unsubscribe with a single click.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
