
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { allProducts } from '@/lib/data';
import { type Product } from '@/types';
import { useCart } from '@/hooks/use-cart';
import { useWishlist } from '@/hooks/use-wishlist';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Heart, Minus, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ProductCarousel } from '@/components/sections/product-carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productImages = [
    { src: 'https://placehold.co/600x800', alt: 'Model wearing product front' },
    { src: 'https://placehold.co/600x800', alt: 'Model wearing product side' },
    { src: 'https://placehold.co/600x800', alt: 'Model wearing product back' },
    { src: 'https://placehold.co/600x800', alt: 'Product closeup' },
    { src: 'https://placehold.co/600x800', alt: 'Model in a relaxed pose' },
    { src: 'https://placehold.co/600x800', alt: 'Fabric texture detail' },
];

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();

  const isFavorited = wishlist.some((item) => item.id === product.id);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFromWishlist(product.id);
      toast({ title: "Removed from favorites" });
    } else {
      addToWishlist(product);
      toast({ title: "Added to favorites" });
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }
    addToCart(product, quantity, selectedSize);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} (Size: ${selectedSize})`,
    });
  };

  const recommendedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 8);
  const recentlyViewedProducts = allProducts.filter(p => p.id !== product.id).slice(5, 13);

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                  <Image
                    src={product.image}
                    alt={`${product.name} - comfortable ${product.category} for lazy wear`}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    data-ai-hint={`${product.category} lifestyle`}
                    priority
                  />
              </div>
              {productImages.slice(0,4).map((image, index) => (
                <div key={index} className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={`${product.name} alternate view ${index + 1} - high quality lazy wear`}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    data-ai-hint={`${product.category} lifestyle`}
                  />
                </div>
              ))}
            </div>

            {/* Product Details */}
            <div className="sticky top-24 h-fit">
              <h1 className="text-3xl font-bold font-headline">{product.name}</h1>
              <p className="text-2xl font-bold mt-2">₹{product.price.toLocaleString('en-IN')}</p>
              <p className="text-muted-foreground mt-1">incl. of all taxes</p>
              
              <Separator className="my-6" />

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Size</h3>
                    <Button variant="link" className="text-primary p-0 h-auto">Size Guide</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {SIZES.map(size => (
                        <Button 
                          key={size} 
                          variant={selectedSize === size ? "default" : "outline"} 
                          className={cn("w-16 h-12", {
                            "bg-primary text-primary-foreground": selectedSize === size,
                          })}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </Button>
                    ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q-1))}>
                        <Minus className="h-4 w-4"/>
                    </Button>
                    <span className="w-10 text-center font-bold">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q+1)}>
                        <Plus className="h-4 w-4"/>
                    </Button>
                </div>
                <Button size="lg" className="flex-grow" onClick={handleAddToCart}>Add to Cart</Button>
                <Button variant="outline" size="icon" className="w-14 h-14" onClick={handleFavoriteClick}>
                    <Heart className={cn("h-6 w-6", isFavorited && "fill-current text-red-500")} />
                </Button>
              </div>

              {/* Product Info Accordion */}
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Description</AccordionTrigger>
                  <AccordionContent>
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                  Free shipping on orders over ₹2000. Easy 30-day returns. We are committed to making sure you are happy with your purchase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5">
                      {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <ProductCarousel title="You Might Also Like" products={recommendedProducts} />

        {/* Recently Viewed */}
        <ProductCarousel title="Recently Viewed" products={recentlyViewedProducts} />

      </main>
      <Footer />
    </div>
  );
}
