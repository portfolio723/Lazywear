import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { pants } from "@/lib/data";

const pantFaqs = [
    {
        question: "What styles of pants do you offer?",
        answer: "We offer a variety of comfortable styles, including joggers, lounge pants, and wide-leg pants, all designed for ultimate relaxation and a stylish look."
    },
    {
        question: "Are your pants suitable for activities other than lounging?",
        answer: "Absolutely! While designed for comfort, our pants are stylish enough for casual outings, running errands, or even a relaxed work-from-home setting."
    },
    {
        question: "How do I choose the correct inseam length?",
        answer: "We provide inseam measurements on each product's size chart. We recommend measuring your inseam from crotch to ankle for the most accurate fit."
    },
    {
        question: "Do the waistbands have drawstrings?",
        answer: "Most of our pants feature an elastic waistband with an adjustable drawstring for a customizable and secure fit. Please check the product description for specific details."
    }
];

export default function PantsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Pants</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {pants.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <FaqSection title="Frequently Asked Questions" faqs={pantFaqs} />
      </main>
      <Footer />
    </div>
  );
}
