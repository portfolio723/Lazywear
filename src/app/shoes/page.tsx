import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { shoes } from "@/lib/data";

const shoeFaqs = [
    {
        question: "What kind of shoes do you sell?",
        answer: "We specialize in ultra-comfortable footwear perfect for lounging and everyday wear, including plush slippers, soft slides, and relaxed-fit sneakers."
    },
    {
        question: "Are your shoes true to size?",
        answer: "Yes, our shoes generally run true to size. We recommend checking the size guide on each product page. If you are between sizes, we suggest sizing up for extra comfort."
    },
    {
        question: "Can I wear your slippers outside?",
        answer: "Our slippers are designed with durable, anti-slip soles, making them suitable for quick trips outside, like grabbing the mail or walking on a patio."
    },
    {
        question: "How should I clean my Lazywear shoes?",
        answer: "Cleaning instructions vary by material. Most of our fabric shoes and slippers can be spot-cleaned with a mild detergent and water. Please see the product details for specific care recommendations."
    }
];

export default function ShoesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Shoes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {shoes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <FaqSection title="Frequently Asked Questions" faqs={shoeFaqs} />
      </main>
      <Footer />
    </div>
  );
}
