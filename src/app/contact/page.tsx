
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">Contact Us</h1>
            <p className="text-muted-foreground mt-2">We're here to help. Reach out to us anytime.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold font-headline mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" required rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-bold font-headline">Our Information</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-muted-foreground">Prefer to email? Send us a message and we'll get back to you.</p>
                            <a href="mailto:support@lazywear.com" className="text-primary font-medium hover:underline">support@lazywear.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Phone</h3>
                            <p className="text-muted-foreground">Give us a call. Our team is available from 9am to 5pm, Mon-Fri.</p>
                            <a href="tel:+911234567890" className="text-primary font-medium hover:underline">+91 123-456-7890</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Address</h3>
                            <p className="text-muted-foreground">Come say hello at our headquarters.</p>
                            <p className="font-medium">123 Comfort Lane, Relax City, 110001, India</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
