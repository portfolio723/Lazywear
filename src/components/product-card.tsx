import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-none hover:shadow-lg transition-shadow duration-300 border-none bg-transparent">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4]">
          <Link href="#">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${product.category} product`}
            />
          </Link>
          <Badge variant="destructive" className="absolute top-2 left-2">SALE</Badge>
        </div>
        <div className="pt-4 bg-transparent text-left">
          <h3 className="font-semibold text-sm leading-tight truncate">
            <Link href="#" className="hover:underline">
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
