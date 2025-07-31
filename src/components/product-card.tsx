
"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { type Product } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/use-wishlist";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();
  const isFavorited = wishlist.some((item) => item.id === product.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorited) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from favorites",
        variant: "default",
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to favorites",
        variant: "default",
      });
    }
  };

  return (
    <Card className="group overflow-hidden rounded-lg shadow-none hover:shadow-lg transition-shadow duration-300 border-none bg-transparent">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4]">
          <Link href={`/products/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${product.category} product`}
            />
          </Link>
          {product.price < 2000 && (
            <Badge variant="destructive" className="absolute top-2 left-2">SALE</Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
            onClick={handleFavoriteClick}
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("h-5 w-5 text-black", isFavorited && "fill-current text-red-500")} />
          </Button>
        </div>
        <div className="pt-4 bg-transparent text-left">
          <h3 className="font-semibold text-sm leading-tight truncate">
            <Link href={`/products/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="font-bold text-base mt-1">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
