import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { shirts } from "@/lib/data";

const shirtFaqs = [
  {
    question: "What materials are your shirts made from?",
    answer:
      "Our shirts are crafted from premium, breathable fabrics like Pima cotton, bamboo blends, and modal. We prioritize softness and durability for all-day comfort.",
  },
  {
    question: "How do I find the right size?",
    answer:
      "Please refer to our sizing chart on each product page. We recommend measuring a shirt you already own and comparing it to our measurements for the best fit.",
  },
  {
    question: "What is the best way to care for my Lazywear shirts?",
    answer:
      "To keep your shirts looking their best, we recommend machine washing in cold water with like colors and tumbling dry on low. Avoid using bleach or fabric softeners.",
  },
  {
    question: "Do your shirts shrink after washing?",
    answer:
      "Our shirts are pre-shrunk to minimize any potential shrinkage. You may experience minimal shrinkage, but following the care instructions will help maintain the original fit.",
  },
];

export default function ShirtsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Shirts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {shirts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <FaqSection title="Frequently Asked Questions" faqs={shirtFaqs} />
      </main>
      <Footer />
    </div>
  );
}
