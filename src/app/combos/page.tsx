
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
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold font-headline mb-2">Effortless Outfits, Simplified</h1>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Take the guesswork out of getting dressed with Lazywear Combos. We’ve curated our most-loved pieces into perfect pairings that give you a complete, comfortable outfit in one click. Our combos are designed to offer maximum comfort, effortless style, and unbeatable value. It’s the smartest way to build your lazy wear wardrobe.
                </p>
            </div>
             <div className="mb-12 text-left max-w-4xl mx-auto space-y-4 text-muted-foreground">
                <p>
                Each combo is a thoughtfully assembled look for a specific mood or occasion. <a href="/products/the-weekend-warrior-set" className="text-primary hover:underline">The Weekend Warrior Set</a>, for example, pairs our classic Zenith Tee with the cozy Haven Joggers for the ultimate relaxation uniform. For a look that’s ready for a smart-casual setting, <a href="/products/the-commuter-comfort-kit" className="text-primary hover:underline">The Commuter Comfort Kit</a> combines polished pieces that don’t sacrifice comfort. And when summer arrives, the <a href="/products/summer-vibe-set" className="text-primary hover-underline">Summer Vibe Set</a> has you covered.
                </p>
                <p>
                By choosing a combo, you not only get a perfectly styled outfit but also enjoy significant savings compared to buying each item separately. It’s the easiest way to experience the best of Lazywear.
                </p>
            </div>
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

    