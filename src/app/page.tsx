
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SaleSection } from "@/components/sections/sale-section";
import { FeaturedCollectionsSection } from "@/components/sections/featured-collections-section";
import { CategoryShowcaseSection } from "@/components/sections/category-showcase-section";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { allProducts, shirts, pants, shoes, caps } from "@/lib/data";
import { Button } from "@/components/ui/button";

const iconsReinvented = [
  {
    title: "Lounge Sets",
    image: "https://images.unsplash.com/photo-1724456285504-a023ac479ff8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlnaHQlMjB3ZWFyfGVufDB8fDB8fHww",
    hint: "matching loungewear",
  },
  {
    title: "Hoodies",
    image: "https://images.unsplash.com/photo-1618333262686-d0bdf1e9089f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D",
    hint: "cozy hoodie",
  },
  {
    title: "Joggers",
    image: "https://images.meesho.com/images/products/492478595/7ssc2_512.jpg",
    hint: "comfortable joggers",
  },
  {
    title: "Sleepwear",
    image: "https://s.alicdn.com/@sc04/kf/H86c0111a274742d0bd21fca840a5d573I/Luxury-Unisex-Custom-Pyjamas-for-Couple-Men-Women-s-Sleepwear-Sets-Bamboo-Clothes-Viscose-Cotton-Pajamas-Women-Lounge-Wear-Set.jpg",
    hint: "silk pajamas",
  },
];

const stepIntoTheSpotlight = [
  {
    title: "Plush Robes",
    image: "https://eberjey.com/cdn/shop/products/Low_Res-R2024LN-WHITE-F_1_1.jpg?v=1697652736&width=1100",
    hint: "fluffy robe",
  },
  {
    title: "Knit Sweaters",
    image: "https://cdn17.nnnow.com/web-images/large/styles/WIX8LA3BFTY/1731493281791/1.jpg",
    hint: "chunky knit sweater",
  },
  {
    title: "Lazywear x Home",
    image: "https://placehold.co/600x600",
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
        <SaleSection />
        <FeaturedCollectionsSection />
        <CategoryShowcaseSection title="Icons, Reinvented" subtitle="New styles, classic feel." items={iconsReinvented} />
        <section className="py-8 md:py-[60px]">
            <div className="container mx-auto px-6">
                <div className="relative group overflow-hidden rounded-lg">
                <img src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?semt=ais_hybrid&w=740" alt="The Ultimate Comfort Zone" className="w-full h-auto md:h-full object-cover" data-ai-hint="shopping woman"/>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-6 md:p-8 text-white">
                    <h3 className="text-xl md:text-3xl font-bold font-headline">The Ultimate Comfort Zone</h3>
                    <p className="text-base md:text-lg">The Softest Loungewear Ever</p>
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
