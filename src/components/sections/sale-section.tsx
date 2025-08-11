
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SaleSection() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-31') - +new Date();
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
        <span className="text-3xl md:text-4xl font-bold">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </span>
        <span className="block text-xs uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <section 
        className="text-white relative bg-cover bg-center"
    >
      <div className="relative group overflow-hidden rounded-lg">
        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*w_VJnXAnk82yWmwEbDQDlQ.png" alt="Sale background" className="w-full h-[500px] md:h-auto object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center md:items-end md:text-right justify-center text-center p-4 md:p-12 text-white">
            <h2 className="text-xl md:text-3xl font-bold font-headline">
              FLAT 40% + EXTRA 10% OFF
            </h2>
            <p className="mt-2 text-base md:text-lg">Discount auto-applied at checkout</p>
            {timerComponents.length > 0 && (
                <div className="flex justify-center md:justify-end gap-4 md:gap-8 mt-6">
                    {timerComponents}
                </div>
            )}
            <div className="mt-6 flex justify-center md:justify-end gap-2 md:gap-4 flex-wrap">
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors rounded-md">
                <Link href="/sale">Shop Sale</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
