
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
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold font-headline mb-2">Step into Comfort</h1>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Your journey to ultimate comfort starts from the ground up. The Lazywear shoe collection is designed to give your feet the break they deserve. We’ve created footwear that feels like a dream, whether you’re unwinding at home or stepping out for a casual day. Our focus is on soft materials, cushioned support, and effortless style, so your feet can be as lazy as the rest of you.
                </p>
            </div>
            <div className="mb-12 text-left max-w-4xl mx-auto space-y-4 text-muted-foreground">
                <p>
                    For indoor bliss, nothing beats our <a href="/products/retreat-plush-slippers" className="text-primary hover:underline">Retreat Plush Slippers</a>. With a faux-shearling lining and memory foam insole, they’re like a warm hug for your feet. The durable sole means you can even wear them for a quick trip outside. If you prefer an open-toe style, the <a href="/products/siesta-soft-slides" className="text-primary hover:underline">Siesta Soft Slides</a> are your perfect match. Their molded footbed provides gentle support, making them ideal for poolside lounging or just shuffling around the house.
                </p>
                <p>
                    Every pair in our collection is lightweight and easy to wear. We believe that comfortable footwear is a non-negotiable part of a relaxed lifestyle. Say goodbye to stiff, uncomfortable shoes and hello to a world of softness.
                </p>
            </div>
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

    