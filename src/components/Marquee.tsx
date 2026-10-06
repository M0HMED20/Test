const items = [
  "Handcrafted in Grasse",
  "100% Natural Essences",
  "Cruelty-Free & Vegan",
  "Small Numbered Batches",
  "Oak-Aged Concentrates",
  "Complimentary Shipping Over $120",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-ink py-5">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.28em] text-gold-soft">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
