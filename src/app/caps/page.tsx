import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { caps } from "@/lib/data";

const capFaqs = [
    {
        question: "What type of caps do you have?",
        answer: "We focus on relaxed and comfortable styles like 'dad caps' and soft beanies, perfect for a casual, laid-back look."
    },
    {
        question: "Are your caps adjustable?",
        answer: "Yes, our dad caps feature an adjustable strap with a metal buckle at the back to ensure a perfect fit for most head sizes. Our beanies are made with a stretchy knit to fit comfortably."
    },
    {
        question: "What materials are the caps made of?",
        answer: "Our caps are made from soft, breathable 100% cotton, making them comfortable to wear all day long."
    },
    {
        question: "How do I wash my cap?",
        answer: "We recommend spot-cleaning your cap with a damp cloth and mild soap. To preserve the shape, avoid machine washing. Let it air dry."
    }
];


export default function CapsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Caps</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {caps.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <FaqSection title="Frequently Asked Questions" faqs={capFaqs} />
      </main>
      <Footer />
    </div>
  );
}
