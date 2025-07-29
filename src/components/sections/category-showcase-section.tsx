import { type Product } from "@/types";
import { ProductCard } from "@/components/product-card";

interface CategoryShowcaseSectionProps {
  title: string;
  products: Product[];
}

export function CategoryShowcaseSection({
  title,
  products,
}: CategoryShowcaseSectionProps) {
  return (
    <section className="container mx-auto px-6">
      <h2 className="text-3xl font-bold font-headline text-center mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
