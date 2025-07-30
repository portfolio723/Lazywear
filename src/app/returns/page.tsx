
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ReturnsPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      toast({
        title: "Return Request Submitted",
        description: "We've received your request and will email you with the next steps.",
      });
      (e.target as HTMLFormElement).reset();
    };

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">Returns & Exchanges</h1>
                <p className="text-muted-foreground mt-2">Not quite right? We can help with that.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold font-headline mb-4">Our Return Policy</h2>
                    <div className="prose max-w-none text-muted-foreground space-y-4">
                        <p>We want you to love your Lazywear products. If you're not completely satisfied, you can return most items within 30 days of delivery for a full refund or exchange.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Items must be unworn, unwashed, and in their original condition with all tags attached.</li>
                            <li>Final sale items are not eligible for returns or exchanges.</li>
                            <li>Original shipping charges are non-refundable.</li>
                            <li>We will process your return within 5-7 business days of receiving it.</li>
                        </ul>
                        <p>For more details, please review our full <a href="#" className="text-primary hover:underline">Terms of Service</a>.</p>
                    </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold font-headline mb-6">Start a Return</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="orderId">Order ID</Label>
                            <Input id="orderId" type="text" placeholder="e.g., #12345" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="The email used for the order" required />
                        </div>
                        <div>
                            <Label htmlFor="reason">Reason for Return</Label>
                            <Textarea id="reason" placeholder="Please let us know why you're returning the item" required rows={4} />
                        </div>
                        <Button type="submit" size="lg" className="w-full">Submit Request</Button>
                    </form>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
