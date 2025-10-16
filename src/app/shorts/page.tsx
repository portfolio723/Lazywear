
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { shorts } from "@/lib/data";

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
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold font-headline mb-2">Shorts for Sun and Serenity</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
                When the temperature rises, comfort is key. The Lazywear shorts collection is here to help you stay cool and relaxed, no matter how hot it gets. We’ve designed our shorts to be lightweight, breathable, and incredibly comfortable, making them the perfect choice for summer days, workouts, or just lounging around the house. Say goodbye to restrictive shorts and hello to total freedom.
            </p>
          </div>
          <div className="mb-12 text-left max-w-4xl mx-auto space-y-4 text-muted-foreground">
            <p>
            Our collection offers a style for every occasion. For a classic summer look, the <a href="/products/breeze-linen-shorts" className="text-primary hover:underline">Breeze Linen Shorts</a> are an essential. Their linen-blend fabric is light and airy, keeping you cool all day long. If you’re looking for something for your workout, the <a href="/products/green-retro" className="text-primary hover:underline">Green Retro</a> shorts offer moisture-wicking fabric and a supportive liner. And for pure, unadulterated comfort, the <a href="/products/retreat-knit-shorts" className="text-primary hover:underline">Retreat Knit Shorts</a> with their brushed fleece interior are second to none.
            </p>
            <p>
            Features like adjustable drawstrings, deep pockets, and 4-way stretch fabric make our shorts as functional as they are comfortable. Pair them with a simple tee or a tank top for an easy, go-to summer outfit.
            </p>
          </div>
          {shorts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {shorts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-2">No shorts available right now.</h2>
                <p className="text-muted-foreground">Check back soon for our curated collections!</p>
            </div>
          )}
        </div>
        <FaqSection title="Frequently Asked Questions" faqs={shortsFaqs} />
      </main>
      <Footer />
    </div>
  );
}

    