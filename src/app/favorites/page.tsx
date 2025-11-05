
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { useWishlist } from "@/hooks/use-wishlist";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FavoritesPage() {
  const { wishlist } = useWishlist();
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Middleware should handle this, but as a fallback:
    if (isLoaded && !user) {
      router.push('/sign-in');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-[#111] items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Your Favorites</h1>
          {wishlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty.</h2>
              <p className="text-muted-foreground mb-4">Explore products to add favorites!</p>
              <Button asChild>
                <Link href="/">Shop Now</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
