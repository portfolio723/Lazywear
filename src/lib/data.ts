import { type Product } from "@/types";

export const shirts: Product[] = Array.from({ length: 8 }, (_, i) => ({
  id: `shirt-${i + 1}`,
  name: `Essential Crewneck Tee ${i + 1}`,
  price: 1499 + i * 100,
  image: `https://placehold.co/500x500`,
  category: "shirts",
}));

export const pants: Product[] = Array.from({ length: 8 }, (_, i) => ({
  id: `pants-${i + 1}`,
  name: `Relaxed Fit Chino ${i + 1}`,
  price: 2999 + i * 150,
  image: `https://placehold.co/500x500`,
  category: "pants",
}));

export const shoes: Product[] = Array.from({ length: 4 }, (_, i) => ({
  id: `shoes-${i + 1}`,
  name: `Minimalist Leather Sneaker ${i + 1}`,
  price: 4999 + i * 200,
  image: `https://placehold.co/500x500`,
  category: "shoes",
}));

export const caps: Product[] = Array.from({ length: 4 }, (_, i) => ({
  id: `cap-${i + 1}`,
  name: `Classic Baseball Cap ${i + 1}`,
  price: 999 + i * 50,
  image: `https://placehold.co/500x500`,
  category: "caps",
}));

export const allProducts: Product[] = [...shirts, ...pants, ...shoes, ...caps];

export const productsByCategory = {
  shirts,
  pants,
  shoes,
  caps,
};
