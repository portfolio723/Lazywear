
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { pants } from "@/lib/data"; // Using pants data as placeholder

const shortsFaqs = [
    {
        question: "What styles of shorts do you offer?",
        answer: "We offer a variety of comfortable styles, including lounge shorts, athletic shorts, and casual wear shorts, all designed for ultimate relaxation and a stylish look."
    },
    {
        question: "Are your shorts suitable for activities other than lounging?",
        answer: "Absolutely! While designed for comfort, our shorts are stylish enough for casual outings, sports, or even a relaxed work-from-home setting."
    },
    {
        question: "How do I find the right fit?",
        answer: "We provide a detailed size chart for each product. We recommend measuring your waist and hips for the most accurate fit."
    },
    {
        question: "Do the waistbands have drawstrings?",
        answer: "Most of our shorts feature an elastic waistband with an adjustable drawstring for a customizable and secure fit. Please check the product description for specific details."
    }
];

export default function ShortsPage() {
  const shorts = pants.filter(p => p.name.toLowerCase().includes('short'));
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Shorts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {shorts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <FaqSection title="Frequently Asked Questions" faqs={shortsFaqs} />
      </main>
      <Footer />
    </div>
  );
}
