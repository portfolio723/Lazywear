"use client"

import * as React from "react"
import { type Product } from "@/types";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductCarousel({ title, subtitle, products }: ProductCarouselProps) {
  return (
    <section className="py-8 md:py-[60px] bg-background">
      <div className="container mx-auto px-6">
         <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-black">
            {title}
          </h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black bg-white hidden md:flex"/>
          <CarouselNext className="text-black bg-white hidden md:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
