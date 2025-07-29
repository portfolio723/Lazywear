
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: Faq[];
}

export function FaqSection({ title, faqs }: FaqSectionProps) {
  return (
    <section className="py-8 md:py-[60px] bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold font-headline text-center mb-8">
          {title}
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
