import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { FeaturedCollectionsSection } from "@/components/sections/featured-collections-section";
import { CategoryShowcaseSection } from "@/components/sections/category-showcase-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { shirts, pants, shoes, caps } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropsSection />
        <FeaturedCollectionsSection />
        <div className="py-16 space-y-16 lg:space-y-24">
          <CategoryShowcaseSection
            title="Essential Shirts"
            products={shirts}
          />
          <CategoryShowcaseSection title="Perfect Pants" products={pants} />
          <CategoryShowcaseSection
            title="Foundation Footwear"
            products={shoes}
          />
          <CategoryShowcaseSection title="Caps Corner" products={caps} />
        </div>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
