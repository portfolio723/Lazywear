import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white mt-16">
      <Image
        src="https://placehold.co/1920x1080"
        alt="Hero banner"
        fill
        priority
        className="object-cover"
        data-ai-hint="minimalist fashion"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-6">
        <div className="bg-accent text-white px-4 py-1.5 mb-4 inline-block">
          <p className="text-sm font-semibold tracking-widest">
            LIMITED TIME OFFER
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
          Lazywear Winter Collection
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Effortless style meets ultimate comfort. Sale ends in 2 days.
        </p>
        <Button size="lg" className="rounded-md px-8 py-6 text-lg">
          Shop Now
        </Button>
      </div>
    </section>
  );
}
