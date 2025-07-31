
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
    title: "Shirts",
    image: "https://image.hm.com/assets/hm/01/8f/018f03c889a87ec106527cc5bc77ff5154e14aa0.jpg",
    hint: "comfortable shirt",
  },
  {
    title: "Shoes",
    image: "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/5b1a9ccf-1ec8-4e62-958f-5f301b9e851f/what-are-the-best-nike-basketball-shoes.jpg",
    hint: "comfortable shoes",
  },
  {
    title: "Pants",
    image: "https://images.meesho.com/images/products/492478595/7ssc2_512.jpg",
    hint: "comfortable pants",
  },
  {
    title: "Caps",
    image: "https://s.alicdn.com/@sc04/kf/H86c0111a274742d0bd21fca840a5d573I/Luxury-Unisex-Custom-Pyjamas-for-Couple-Men-Women-s-Sleepwear-Sets-Bamboo-Clothes-Viscose-Cotton-Pajamas-Women-Lounge-Wear-Set.jpg",
    hint: "stylish caps",
  },
];

const stepIntoTheSpotlight = [
  {
    title: "Trending Wears",
    image: "https://eberjey.com/cdn/shop/products/Low_Res-R2024LN-WHITE-F_1_1.jpg?v=1697652736&width=1100",
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
        <SaleSection />
        <FeaturedCollectionsSection />
        <CategoryShowcaseSection title="Lazy Categories" subtitle="New styles, classic feel." items={iconsReinvented} />
        <section className="py-8 md:py-[60px]">
            <div className="container mx-auto px-6">
                <div className="relative group overflow-hidden rounded-lg">
                <img src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?semt=ais_hybrid&w=740" alt="The Ultimate Comfort Zone" className="w-full h-auto md:h-full object-cover" data-ai-hint="shopping woman"/>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12 text-white">
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
