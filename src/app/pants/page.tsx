
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
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold font-headline mb-2">Pants for Every Lazy Moment</h1>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Discover your new favorite pair of pants in the Lazywear collection. We’ve redefined comfort with styles that are perfect for everything from a movie marathon on the couch to a quick run to the corner store. Our pants are designed to give you the freedom to move, relax, and live without restriction. We believe that you shouldn’t have to choose between comfort and style, which is why our pants deliver both.
                </p>
            </div>
            <div className="mb-12 text-left max-w-4xl mx-auto space-y-4 text-muted-foreground">
                <p>
                Our collection features a range of styles to suit any mood. The <a href="/products/haven-lounge-joggers" className="text-primary hover:underline">Haven Lounge Joggers</a>, with their tapered fit and fleece-back knit, are a modern essential for any comfort-seeker. For those who love a more free-flowing silhouette, the <a href="/products/drift-wide-leg-pants" className="text-primary hover:underline">Drift Wide-Leg Pants</a> offer unparalleled freedom and an elegant drape. And for a touch of utility, the <a href="/products/nomad-cargo-pant" className="text-primary hover:underline">Nomad Cargo Pants</a> blend functional design with a relaxed feel.
                </p>
                <p>
                Each pair is crafted from premium materials, from soft cotton blends to durable stretch twills, ensuring they feel as good as they look. Details like adjustable drawstrings, deep pockets, and tailored cuts elevate these pants beyond typical loungewear. Pair them with one of our comfortable tees for a complete Lazywear look.
                </p>
            </div>
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

    