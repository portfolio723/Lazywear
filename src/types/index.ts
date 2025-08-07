
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "shirts" | "pants" | "shoes" | "caps" | "shorts" | "combos";
  description: string;
  details: string[];
};

export type CartItem = Product & {
  quantity: number;
  size?: string;
};

    