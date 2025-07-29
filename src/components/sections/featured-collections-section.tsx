import Image from "next/image";
import { Button } from "@/components/ui/button";

const collections = [
  {
    title: "Mostro",
    image: "https://placehold.co/800x600",
    hint: "fashion model",
  },
  {
    title: "PUMA & F1®",
    image: "https://placehold.co/800x600",
    hint: "race car",
  },
  {
    title: "Trending Now",
    image: "https://placehold.co/800x600",
    hint: "street style",
  },
  {
    title: "Devil Details",
    image: "https://placehold.co/800x600",
    hint: "close up apparel",
  },
];

export function FeaturedCollectionsSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <div key={collection.title} className="relative group overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={collection.hint}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white">
                <h3 className="text-3xl font-bold font-headline">
                  {collection.title}
                </h3>
                <Button variant="outline" className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors rounded-md">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
