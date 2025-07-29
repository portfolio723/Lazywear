import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCollectionsSection } from "@/components/sections/featured-collections-section";
import { CategoryShowcaseSection } from "@/components/sections/category-showcase-section";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { allProducts, shirts, pants, shoes, caps } from "@/lib/data";
import { Button } from "@/components/ui/button";

const iconsReinvented = [
  {
    title: "Lounge Sets",
    image: "https://placehold.co/600x600",
    hint: "matching loungewear",
  },
  {
    title: "Hoodies",
    image: "https://placehold.co/600x600",
    hint: "cozy hoodie",
  },
  {
    title: "Joggers",
    image: "https://placehold.co/600x600",
    hint: "comfortable joggers",
  },
  {
    title: "Sleepwear",
    image: "https://placehold.co/600x600",
    hint: "silk pajamas",
  },
];

const stepIntoTheSpotlight = [
  {
    title: "Plush Robes",
    image: "https://placehold.co/600x600",
    hint: "fluffy robe",
  },
  {
    title: "Knit Sweaters",
    image: "https://placehold.co/600x600",
    hint: "chunky knit sweater",
  },
  {
    title: "Lazywear x Home",
    image: "https://placehold.co/600x600",
    hint: "person relaxing home",
  },
  {
    title: "Weekend Collection",
    image: "https://placehold.co/600x600",
    hint: "person reading book",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeaturedCollectionsSection />
        <CategoryShowcaseSection title="Icons, Reinvented" subtitle="New styles, classic feel." items={iconsReinvented} />
        <section className="py-[60px]">
            <div className="container mx-auto px-6">
                <div className="relative group overflow-hidden rounded-lg">
                <img src="https://placehold.co/1200x400" alt="The Ultimate Comfort Zone" className="w-full h-full object-cover" data-ai-hint="woman relaxing on sofa"/>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
                    <h3 className="text-3xl font-bold font-headline">The Ultimate Comfort Zone</h3>
                    <p className="text-lg">The Softest Loungewear Ever</p>
                    <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors rounded-md">Shop Now</Button>
                </div>
                </div>
            </div>
        </section>
        <CategoryShowcaseSection title="Step Into The Spotlight" subtitle="The new must-haves" items={stepIntoTheSpotlight} />
        <ProductCarousel title="Trending Now" products={allProducts} />
      </main>
      <Footer />
    </div>
  );
}
