import Link from "next/link";
import { Button } from "@/components/ui/button";

const deals = [
  { text: "SNEAKERS UNDER ₹3999", href: "#" },
  { text: "BUY 2 & GET EXTRA 15% ON NEW STYLES", href: "#" },
  { text: "SPORTS SHOES UNDER ₹3499", href: "#" },
  { text: "FIRST TIME ON DISCOUNT", href: "#" },
  { text: "ALL DAY COMFORT SHOES", href: "#" },
];

export function HeroSection() {
  return (
    <section className="bg-background text-foreground py-[60px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-headline">
            END OF SEASON DEALS
          </h2>
        </div>
        <div className="flex justify-center gap-5 flex-wrap">
          {deals.map((deal, index) => (
            <Link key={index} href={deal.href}>
              <div className="w-40 h-40 rounded-full bg-[#F5EADF] border-2 border-[#E5CDB3] flex items-center justify-center text-center p-4 cursor-pointer hover:bg-[#EADBC8] hover:border-[#D6B89C] transition-colors">
                <span className="text-sm font-semibold text-[#B71C1C] uppercase">
                  {deal.text}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}