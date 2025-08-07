
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SaleSection() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-31') - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft] && timeLeft[interval as keyof typeof timeLeft] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-center">
        <span className="text-4xl md:text-5xl font-bold">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </span>
        <span className="block text-xs md:text-sm uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <section 
        className="text-white py-12 md:py-28 bg-cover bg-center relative"
        style={{backgroundImage: "url('https://miro.medium.com/v2/resize:fit:640/format:webp/1*w_VJnXAnk82yWmwEbDQDlQ.png')"}}
    >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div></div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-headline">
              FLAT 40% + EXTRA 10% OFF
            </h2>
            <p className="mt-2 text-lg md:text-xl">Discount auto-applied at checkout</p>
            {timerComponents.length > 0 && (
                <div className="flex justify-center md:justify-start gap-4 md:gap-8 mt-6 md:mt-8">
                    {timerComponents}
                </div>
            )}
            <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap">
              <Button asChild variant="outline" className="bg-white border-white text-black hover:bg-gray-200 hover:border-gray-200 transition-colors rounded-md">
                <Link href="/shoes">Shoes</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white border-white text-black hover:bg-gray-200 hover:border-gray-200 transition-colors rounded-md">
                <Link href="/caps">Caps</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white border-white text-black hover:bg-gray-200 hover:border-gray-200 transition-colors rounded-md">
                <Link href="/pants">Pants</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
