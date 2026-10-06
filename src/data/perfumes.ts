export type Category = "Floral" | "Woody" | "Oriental" | "Fresh";

export const categories = ["All", "Floral", "Woody", "Oriental", "Fresh"] as const;
export type Filter = (typeof categories)[number];

export interface Perfume {
  id: number;
  name: string;
  tagline: string;
  category: Category;
  notes: string[];
  price: number;
  rating: number;
  image: string;
  badge?: string;
}

const img = (id: number, w = 800, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${h}&w=${w}`;

export const perfumes: Perfume[] = [
  {
    id: 1,
    name: "Amber Nocturne",
    tagline: "Eau de Parfum · 50ml",
    category: "Oriental",
    notes: ["Oud", "Amber", "Vanilla"],
    price: 185,
    rating: 4.9,
    image: img(31022283),
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Rose de Vignes",
    tagline: "Eau de Parfum · 50ml",
    category: "Floral",
    notes: ["Damask Rose", "Peony", "Lychee"],
    price: 165,
    rating: 4.8,
    image: img(16085365),
    badge: "New",
  },
  {
    id: 3,
    name: "Crimson Oud",
    tagline: "Extrait de Parfum · 30ml",
    category: "Oriental",
    notes: ["Blackberry", "Oud", "Leather"],
    price: 210,
    rating: 4.9,
    image: img(32630384),
  },
  {
    id: 4,
    name: "Blanc Éclat",
    tagline: "Eau de Parfum · 50ml",
    category: "Fresh",
    notes: ["Bergamot", "Jasmine", "White Musk"],
    price: 145,
    rating: 4.7,
    image: img(27357173),
  },
  {
    id: 5,
    name: "Velvet Fig",
    tagline: "Eau de Parfum · 50ml",
    category: "Woody",
    notes: ["Fig Leaf", "Cedar", "Iris"],
    price: 155,
    rating: 4.8,
    image: img(4938265),
  },
  {
    id: 6,
    name: "Néroli Soleil",
    tagline: "Eau de Toilette · 100ml",
    category: "Fresh",
    notes: ["Neroli", "Orange Blossom", "Vetiver"],
    price: 135,
    rating: 4.6,
    image: img(13875786),
    badge: "Limited",
  },
];
