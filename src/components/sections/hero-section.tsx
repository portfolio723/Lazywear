import { Button } from "@/components/ui/button";

function CountdownTimer() {
  return (
    <div className="flex items-center gap-2 text-white">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">02</span>
        <span className="text-xs">DAYS</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">09</span>
        <span className="text-xs">HOURS</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">06</span>
        <span className="text-xs">MINS</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">57</span>
        <span className="text-xs">SECS</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="bg-[#A82B1E] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-6">
            <h2 className="text-lg font-semibold">END OF SEASON DEALS</h2>
            <div className="flex justify-center gap-4 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-16 h-16 bg-[#F5EADF] rounded-full flex items-center justify-center">
                        <span className="text-xs text-black font-semibold text-center">FLAT 50% OFF</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
             <div className="bg-white text-black p-8 rounded-lg text-center shadow-lg">
                <h3 className="text-4xl font-bold">END OF</h3>
                <h2 className="text-6xl font-bold">SEASON SALE</h2>
                <div className="my-4 h-1 bg-black w-24 mx-auto"></div>
                <p className="text-sm">SMASH IT. OWN IT. FLEX IT.</p>
                <p className="text-xs">VALID TILL 21ST JULY</p>
             </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <h2 className="text-3xl font-semibold">FLAT 40% + EXTRA 10% OFF</h2>
            <CountdownTimer />
            <div className="flex gap-2">
                <Button variant="outline" className="bg-white text-black hover:bg-gray-200">Shop Men</Button>
                <Button variant="outline" className="bg-white text-black hover:bg-gray-200">Shop Women</Button>
                <Button variant="outline" className="bg-white text-black hover:bg-gray-200">Shop Kids</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
