import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Collection from "./components/Collection";
import Notes from "./components/Notes";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const addToBag = (name: string) => {
    setCartCount((c) => c + 1);
    setToast(`${name} added to your bag`);
    window.setTimeout(() => setToast(null), 2600);
  };

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Collection onAddToBag={addToBag} />
        <Notes />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />

      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm text-cream shadow-2xl shadow-ink/30"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-white">
              <Check className="h-3.5 w-3.5" />
            </span>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
