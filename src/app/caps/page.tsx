
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
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold font-headline mb-2">Top it Off in Style</h1>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Complete your lazy look with a cap from the Lazywear collection. A good cap is more than just an accessory; it’s the final touch that ties your whole outfit together. Whether you’re shielding your eyes from the sun, hiding a bad hair day, or just adding a bit of personality to your look, our caps are designed for comfort and effortless style.
                </p>
            </div>
            <div className="mb-12 text-left max-w-4xl mx-auto space-y-4 text-muted-foreground">
                <p>
                    Our collection focuses on timeless, relaxed styles. The <a href="/products/unwind-dad-cap" className="text-primary hover:underline">Unwind Dad Cap</a> is a fan favorite, made from soft, washed cotton that feels perfectly broken-in from day one. Its unstructured design and adjustable strap make it a comfortable fit for anyone. For cooler days, the <a href="/products/hibernate-knit-beanie" className="text-primary hover:underline">Hibernate Knit Beanie</a> offers warmth without the itch, thanks to its soft acrylic knit.
                </p>
                <p>
                    We keep our branding minimal, so our caps can be easily paired with anything in your wardrobe. They’re the perfect finishing touch for a casual, laid-back aesthetic. Find your new favorite cap and top off your comfort.
                </p>
            </div>
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

    