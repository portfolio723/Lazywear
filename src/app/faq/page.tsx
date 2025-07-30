
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FaqSection } from "@/components/sections/faq-section";

const generalFaqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and other digital payment methods available at checkout."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unworn and unwashed items. Please visit our Returns page for more details and to initiate a return."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can use this number on our Track Order page."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within India. We are working on expanding our shipping options to more countries in the future."
  },
  {
    question: "How do I use a discount code?",
    answer: "You can enter your discount code at checkout in the designated promo code box. The discount will be applied to your order total."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "We process orders quickly, but we'll do our best to accommodate any changes. Please contact our support team as soon as possible after placing your order."
  }
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h1>
            <p className="text-muted-foreground mt-2">Find answers to common questions below.</p>
          </div>
          <FaqSection title="" faqs={generalFaqs} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
