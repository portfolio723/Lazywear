import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCollectionsSection } from "@/components/sections/featured-collections-section";
import { CategoryShowcaseSection } from "@/components/sections/category-showcase-section";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { allProducts, shirts, pants, shoes, caps } from "@/lib/data";

const iconsReinvented = [
  {
    title: "Puma",
    image: "https://placehold.co/600x600",
    hint: "blue shoes",
  },
  {
    title: "Nitro",
    image: "https://placehold.co/600x600",
    hint: "white shoe",
  },
  {
    title: "Man City",
    image: "https://placehold.co/600x600",
    hint: "black jersey",
  },
  {
    title: "Puma x Ferrari",
    image: "https://placehold.co/600x600",
    hint: "red jacket",
  },
];

const stepIntoTheSpotlight = [
  {
    title: "Puma Suede",
    image: "https://placehold.co/600x600",
    hint: "dark green sneakers",
  },
  {
    title: "Future",
    image: "https://placehold.co/600x600",
    hint: "sports shoes",
  },
  {
    title: "Puma x Palomo",
    image: "https://placehold.co/600x600",
    hint: "fashion model",
  },
  {
    title: "Puma x F1",
    image: "https://placehold.co/600x600",
    hint: "racing apparel",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeaturedCollectionsSection />
        <CategoryShowcaseSection title="Icons, Reinvented" subtitle="New styles, classic feel." items={iconsReinvented} />
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="relative group overflow-hidden rounded-lg">
                <img src="https://placehold.co/1200x400" alt="The Devil is in the Details" className="w-full h-full object-cover" data-ai-hint="football players celebration"/>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
                    <h3 className="text-3xl font-bold font-headline">The Devil is in the Details</h3>
                    <p className="text-lg">23/24 AC Milan Third Jersey</p>
                    <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded-md">Shop Now</button>
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
