
"use client";

import { WishlistProvider } from "@/hooks/use-wishlist";
import { CartProvider } from "@/hooks/use-cart";
import { FirebaseClientProvider, UserProvider } from "@/firebase";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <UserProvider>
        <WishlistProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </WishlistProvider>
      </UserProvider>
    </FirebaseClientProvider>
  );
}
