
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SaleSection } from "@/components/sections/sale-section";
import { CategoryShowcaseSection } from "@/components/sections/category-showcase-section";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { allProducts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

const iconsReinvented = [
  {
    title: "Shirts",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*PScdSEJqvu1bpqXqJuMhfg.png",
    hint: "comfortable shirt",
  },
  {
    title: "Shoes",
    image: "https://miro.medium.com/v2/resize:fit:382/format:webp/1*uSIj4cooWQFZZV4x-UBXsg.jpeg",
    hint: "comfortable shoes",
  },
  {
    title: "Pants",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*jZ5uqcKsS_byCQnChpWWHw.png",
    hint: "comfortable pants",
  },
  {
    title: "Caps",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*wEpmpNsFkAwwTvbwhAGH3A.png",
    hint: "stylish caps",
  },
];

const stepIntoTheSpotlight = [
  {
    title: "Trending Wears",
    image: "/15.png",
    hint: "trending clothes",
  },
  {
    title: "Best Buys",
    image: "/12.png",
    hint: "best selling items",
  },
  {
    title: "Lazywear x Home",
    image: "/13.png",
    hint: "person relaxing home",
  },
  {
    title: "Weekend Collection",
    image: "/11 2.png",
    hint: "person reading book",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <div className="pb-8 md:pb-[60px]">
          <SaleSection />
        </div>
        <div className="py-8 md:py-[60px]">
            <CategoryShowcaseSection title="Lazy Categories: Your Casual Wear Online" subtitle="New styles, classic feel in our comfortable clothing store." items={iconsReinvented} />
        </div>
        <div className="pt-8 md:pt-[60px]">
            <div className="container mx-auto px-6">
                <div className="relative group overflow-hidden rounded-lg">
                <Image src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*2_16WIYr-3I0rKoBshS9HA.png" alt="Woman shopping for comfortable and affordable loungewear from Lazywear India's online store" width={640} height={360} className="w-full h-auto md:h-[500px] object-cover" data-ai-hint="shopping woman"/>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-center md:items-end md:text-right justify-center text-center p-4 md:p-12 text-white">
                    <h3 className="text-xl md:text-3xl font-bold font-headline">The Ultimate Comfort Zone</h3>
                    <p className="mt-2 text-base md:text-lg">The Softest Loungewear for Work From Home</p>
                    <Button variant="outline" className="mt-8 bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors rounded-md">Shop Now</Button>
                </div>
                </div>
            </div>
        </div>
        <div className="pt-8 md:pt-[60px]">
            <CategoryShowcaseSection title="Step Into The Spotlight" subtitle="The new must-haves" items={stepIntoTheSpotlight} />
        </div>
        <div className="py-8 md:py-[60px]">
            <ProductCarousel title="Trending Now: Affordable Loungewear" subtitle="Discover what's popular for home delivery" products={allProducts} />
        </div>
        <ValuePropsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
