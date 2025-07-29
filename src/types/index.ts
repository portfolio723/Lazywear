
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "shirts" | "pants" | "shoes" | "caps";
};

export type CartItem = Product & {
  quantity: number;
};
