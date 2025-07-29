import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CategoryItem {
  title: string;
  image: string;
  hint: string;
}
interface CategoryShowcaseSectionProps {
  title: string;
  subtitle: string;
  items: CategoryItem[];
}

export function CategoryShowcaseSection({
  title,
  subtitle,
  items,
}: CategoryShowcaseSectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-headline text-black">
                {title}
            </h2>
            <p className="text-gray-500">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.title} className="relative group overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={item.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
