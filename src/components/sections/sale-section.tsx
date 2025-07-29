"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function SaleSection() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-31') - +new Date();
    let timeLeft = {};

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
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-center">
        <span className="text-5xl font-bold">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </span>
        <span className="block text-sm uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <section className="bg-sale-background text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center text-center">
            <Image
              src="https://placehold.co/500x700"
              alt="End of Season Sale"
              width={500}
              height={700}
              className="rounded-lg"
              data-ai-hint="sale ticket"
            />
            <div className="mt-4 bg-black/50 p-4 rounded-lg">
                <p className="text-xl font-bold tracking-widest">SWIPE IT. BAG IT. FLEX IT.</p>
                <p className="font-semibold">ENDS 31ST JULY</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold font-headline">
              FLAT 40% + EXTRA 10% OFF
            </h2>
            <p className="mt-2 text-lg">Discount auto-applied at checkout</p>
            <p className="mt-8 mb-4 text-lg">Ends in</p>
            <div className="flex justify-center md:justify-start gap-4 md:gap-8">
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button variant="outline" className="bg-white border-white text-black hover:bg-gray-200 hover:border-gray-200 transition-colors rounded-md">For Him</Button>
              <Button variant="outline" className="bg-white border-white text-black hover:bg-gray-200 hover:border-gray-200 transition-colors rounded-md">For Her</Button>
              <Button variant="outline" className="bg-white border-white text-black hover:bg-gray-200 hover:border-gray-200 transition-colors rounded-md">For Kids</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
