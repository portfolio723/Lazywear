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
  products: Product[];
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  return (
    <section className="py-8 md:py-[60px] bg-background">
      <div className="container mx-auto px-6">
         <h2 className="text-2xl md:text-3xl font-bold font-headline text-black text-center mb-8">
          {title}
        </h2>
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
