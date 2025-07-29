import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/product-card";
import { pants } from "@/lib/data";

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
      </main>
      <Footer />
    </div>
  );
}
