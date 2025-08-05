
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SaleSection } from "@/components/sections/sale-section";
import { FeaturedCollectionsSection } from "@/components/sections/featured-collections-section";
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
    image: "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/5b1a9ccf-1ec8-4e62-958f-5f301b9e851f/what-are-the-best-nike-basketball-shoes.jpg",
    hint: "comfortable shoes",
  },
  {
    title: "Pants",
    image: "https://freakins.com/cdn/shop/files/Freakins15NOV0080.jpg?v=1750057158",
    hint: "comfortable pants",
  },
  {
    title: "Caps",
    image: "https://www.shutterstock.com/image-photo/confident-young-african-american-female-600nw-2258698735.jpg",
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
        <ValuePropsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

    
