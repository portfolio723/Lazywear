import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border-none">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Link href="#">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${product.category} product`}
            />
          </Link>
          <div className="absolute top-2 right-2">
            <Button
              size="icon"
              variant="ghost"
              className="bg-white/80 hover:bg-white rounded-full w-8 h-8"
            >
              <Heart className="w-4 h-4 text-gray-600" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button className="w-full rounded-md bg-primary text-primary-foreground text-xs" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Quick Add
            </Button>
          </div>
        </div>
        <div className="p-4 bg-card">
          <h3 className="font-semibold text-base leading-tight truncate">
            <Link href="#" className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="font-bold text-lg mt-1">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
