
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SaleSection } from "@/components/sections/sale-section";
import { CategoryShowcaseSection } from "@/components/sections/category-showcase-section";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { allProducts, shirts, pants, shoes, caps } from "@/lib/data";
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
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/formal_wear_for_men.png?v=1681479862",
    hint: "trending clothes",
  },
  {
    title: "Best Buys",
    image: "https://cdn17.nnnow.com/web-images/large/styles/WIX8LA3BFTY/1731493281791/1.jpg",
    hint: "best selling items",
  },
  {
    title: "Lazywear x Home",
    image: "https://assets.ajio.com/medias/sys_master/root/20240817/wGly/66bffb1a6f60443f3110f1a5/-473Wx593H-700296168-beige-MODEL3.jpg",
    hint: "person relaxing home",
  },
  {
    title: "Weekend Collection",
    image: "https://i5.walmartimages.com/asr/ec11bbd0-4193-4630-8311-f2726edf2be1.c4c3876897f22e10ad642f1b47f3619d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    hint: "person reading book",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <div className="container mx-auto px-6 pb-8 md:pb-[60px]">
          <SaleSection />
        </div>
        <div className="py-8 md:py-[60px]">
            <CategoryShowcaseSection title="Lazy Categories" subtitle="New styles, classic feel." items={iconsReinvented} />
        </div>
        <div className="py-8 md:py-[60px]">
            <div className="container mx-auto px-6">
                <div className="relative group overflow-hidden rounded-lg">
                <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*2_16WIYr-3I0rKoBshS9HA.png" alt="The Ultimate Comfort Zone" className="w-full h-[500px] md:h-auto object-cover" data-ai-hint="shopping woman"/>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-center md:items-end md:text-right justify-center text-center p-4 md:p-12 text-white">
                    <h3 className="text-xl md:text-3xl font-bold font-headline">The Ultimate Comfort Zone</h3>
                    <p className="mt-2 text-base md:text-lg">The Softest Loungewear Ever</p>
                    <Button variant="outline" className="mt-8 bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors rounded-md">Shop Now</Button>
                </div>
                </div>
            </div>
        </div>
        <div className="pt-8 md:pt-[60px]">
            <CategoryShowcaseSection title="Step Into The Spotlight" subtitle="The new must-haves" items={stepIntoTheSpotlight} />
        </div>
        <div className="py-8 md:py-[60px]">
            <ProductCarousel title="Trending Now" subtitle="Discover what's popular" products={allProducts} />
        </div>
        <ValuePropsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
