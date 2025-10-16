
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-background text-foreground py-8 md:py-[60px]">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Lazywear India: Your Online Store for Comfortable Clothing</h1>
        <p className="mt-2 text-muted-foreground">Buy comfortable loungewear online in India, delivered right to your door.</p>
        <Image 
          src="https://miro.medium.com/v2/resize:fit:590/format:webp/1*pDWC9ikqqFBkxvMV8RlfDA.png" 
          alt="Models wearing comfortable and affordable lazy wear from Lazywear India - an online comfortable clothing store" 
          width={590}
          height={332}
          className="w-auto h-auto mt-4"
          priority
        />
      </div>
    </section>
  );
}
