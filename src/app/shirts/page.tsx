
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
          <div className="text-center mb-12">
              <h1 className="text-3xl font-bold font-headline mb-2">Shirts Collection</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Welcome to the core of comfort. The Lazywear shirts collection is where effortless style begins. We believe a great shirt is the foundation of any comfortable outfit, which is why we’ve obsessed over every detail, from fabric to fit. Our shirts are designed for those who value softness, breathability, and a relaxed look that’s still put-together.
              </p>
          </div>
          <div className="mb-12 text-left max-w-4xl mx-auto space-y-4 text-muted-foreground">
             <p>
              In our collection, you’ll find premium fabrics like ultra-soft Pima cotton and eco-friendly bamboo blends. These materials aren’t just comfortable; they’re also durable and easy to care for, ensuring your favorite tee stays your favorite for a long time. Whether you prefer a classic <a href="/products/zenith-crew-neck-tee" className="text-primary hover:underline">Crew-Neck</a>, a modern <a href="/products/aura-v-neck" className="text-primary hover:underline">V-Neck</a>, or a versatile <a href="/products/oasis-henley-shirt" className="text-primary hover:underline">Henley</a>, each style is thoughtfully designed with a relaxed silhouette that drapes perfectly. These aren’t just t-shirts; they’re your go-to for work-from-home days, weekend lounging, and everything in between.
              </p>
              <p>
              Styling our shirts is easy. Pair them with our Haven Lounge Joggers for the ultimate lazy day outfit, or tuck them into a pair of chinos for a smart-casual look. They are perfect for layering under a jacket or wearing on their own. Explore the collection and discover the most comfortable shirts you’ll ever own.
              </p>
          </div>

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

    