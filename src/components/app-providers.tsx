
"use client";

import { WishlistProvider } from "@/hooks/use-wishlist.tsx";
import { CartProvider } from "@/hooks/use-cart.tsx";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <WishlistProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </WishlistProvider>
  );
}
