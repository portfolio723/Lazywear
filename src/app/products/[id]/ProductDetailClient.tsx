
"use client";

import { useState, useEffect } from 'react';
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
import { Heart, Minus, Plus, ShieldCheck, Star, Users, Truck, CircleDollarSign } from 'lucide-react';
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

const RazorpayIcon = () => <svg width="80" height="20" viewBox="0 0 100 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M96.44 10.36v12.2h-3.32V16.8h-4.52v5.76h-3.32v-12.2h7.84v3.56h-4.52v3.24h4.52v-3.56h3.32zM79.32 10.36v12.2h-3.32v-5.4l-4.28 5.4h-3.6l-4.32-5.4v5.4h-3.32v-12.2h4.56l5.64 6.96 5.64-6.96h3zM53.12 10.36l-4.4 12.2h-3.48l-4.4-12.2h3.6l2.8 8.68 2.8-8.68h3.08zM31.4 10.36h4.56l5.64 6.96 5.64-6.96h3v12.2h-3.32v-5.4l-4.28 5.4h-3.6l-4.32-5.4v5.4h-3.32v-12.2zM21.2 10.36v12.2h-3.32V16.8h-4.52v5.76h-3.32v-12.2h7.84v3.56h-4.52v3.24h4.52v-3.56h3.32z" fill="#3B82F6"></path></svg>;
const UpiIcon = () => <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.83 4.14h4.34v8.08l-4.14 1.34V4.14zm17.9 0v9.5c0 1.25-.33 2.25-1 3s-1.58.92-2.75.92c-.93 0-1.7-.2-2.34-.6s-1.04-.98-1.2-1.74l1.32-.52c.16.52.43.9.83 1.15.4.24.87.36 1.4.36.5 0 .9-.1 1.2-.3s.45-.48.45-.84v-1.12h-.08c-.3.4-.7.7-1.18.9s-1 .3-1.55.3c-1.1 0-2-.4-2.7-1.2s-1.05-1.85-1.05-3.15c0-1.3.35-2.38 1.05-3.25s1.6-1.3 2.7-1.3c.55 0 1.07.1 1.55.3s.88.5 1.18.9h.08V4.14h2.18zm-2.18 5.56c0-.5-.1-.95-.3-1.35s-.5-.73-.9-.97c-.4-.25-.85-.37-1.35-.37s-.9.12-1.3.37c-.4.24-.7.57-.9.97s-.3 1-.3 1.55c0 .55.1 1.03.3 1.45s.5.76.9.98c.4.22.85.33 1.3.33s.9-.11 1.3-.33c.4-.22.7-.53.9-.98s.3-.9.3-1.45zM36.14 4.14h2.2v10.42h-2.2V4.14zm-19.85.58l.1 1.44c-.36-.4-.8-.7-1.34-.9S14.07 5 13.5 5c-.75 0-1.38.3-1.88.9s-.75 1.42-.75 2.48v5.18h-2.2V6.6c0-1.12.3-2.02.9-2.7s1.38-1.02 2.32-1.02c.57 0 1.1.13 1.58.4l.42.22V4.72h2.07z" fill="#F97316"></path></svg>;
const PaytmIcon = () => <svg width="50" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.86 13.91V8.53h-3.41v1.94h-1.9v3.44h1.9v2.17l3.41-2.17zM16.6 8.53H13.2v5.38h-1.9v1.94h5.3v-1.94h-1.9V8.53zm9.88 0h3.41v1.94h-3.41V8.53zm-14.22 0h3.41v1.94h-3.41V8.53zm18.9 0h3.4v1.94h-3.4V8.53zM16.6 5.1h-3.41v1.94H16.6V5.1zm9.88 0h3.41v1.94h-3.41V5.1zM7.85 5.1H11v1.94H7.85V5.1zM35.69 5.1h-3.41v1.94h3.41V5.1zM0 .8h3.5v18H0V.8zm46.5 2.13h3.5v13.53h-3.5V2.93z" fill="#0EA5E9"></path></svg>;

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [peopleBought, setPeopleBought] = useState(0);

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();

  const isFavorited = wishlist.some((item) => item.id === product.id);

  useEffect(() => {
    setPeopleBought(Math.floor(Math.random() * 30) + 10);
  }, [product.id]);

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
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm text-muted-foreground">(27 reviews)</span>
              </div>
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
              
              {peopleBought > 0 && (
                <div className="mt-4 flex items-center gap-2 text-sm text-red-500 animate-pulse">
                    <Users className="w-4 h-4"/>
                    <span>{peopleBought} people bought this recently!</span>
                </div>
              )}

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

               <div className="border rounded-lg p-4 space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                        <Truck className="w-5 h-5 text-primary"/>
                        <span>Free shipping on orders above ₹999</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <CircleDollarSign className="w-5 h-5 text-primary"/>
                        <span>30-Day Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <ShieldCheck className="w-5 h-5 text-primary"/>
                        <span>100% Secure Payments</span>
                    </div>
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
                  Free shipping on orders over ₹999. Easy 30-day returns. We are committed to making sure you are happy with your purchase.
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
