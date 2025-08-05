
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { combos } from "@/lib/data";

const combosFaqs = [
    {
        question: "What are Lazywear combos?",
        answer: "Our combos are specially curated sets of our most popular products, like a shirt and pants, offered at a discounted price. It's the easiest way to get a complete, comfortable outfit."
    },
    {
        question: "Can I customize the items in a combo?",
        answer: "Currently, our combos are pre-selected to ensure perfect pairing. However, you can choose your size for each item in the combo."
    },
    {
        question: "How much do I save with a combo?",
        answer: "Combos offer significant savings compared to buying each item individually. The exact discount varies per combo and is displayed on the product page."
    },
    {
        question: "What is the return policy for combos?",
        answer: "Our standard 30-day return policy applies to combos. However, all items in the combo must be returned together in their original condition to be eligible for a refund."
    }
];

export default function CombosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Combos</h1>
           {combos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {combos.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
            ) : (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-2">No combos available right now.</h2>
                <p className="text-muted-foreground">Check back soon for our curated collections!</p>
            </div>
          )}
        </div>
        <FaqSection title="Frequently Asked Questions" faqs={combosFaqs} />
      </main>
      <Footer />
    </div>
  );
}
