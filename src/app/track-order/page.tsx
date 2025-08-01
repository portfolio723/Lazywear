
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Truck, Package } from "lucide-react";

export default function TrackOrderPage() {
  const { toast } = useToast();
  const [orderId, setOrderId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orderId) {
        toast({ title: "Please enter an Order ID", variant: "destructive"});
        return;
    }
    toast({
      title: "Searching for your order...",
    });
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">Track Your Order</h1>
                <p className="text-muted-foreground mt-2">Enter your order ID to see its status.</p>
            </div>

            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="flex gap-2 items-start">
                    <div className="w-full">
                        <Label htmlFor="orderId" className="sr-only">Order ID</Label>
                        <Input 
                            id="orderId" 
                            type="text" 
                            placeholder="Enter your Order ID (e.g., #12345)" 
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="h-10">Track</Button>
                </form>
            </div>
            
            {isSubmitted && (
                <div className="max-w-2xl mx-auto mt-12">
                    <h2 className="text-xl font-bold text-center mb-6">Order Status for #{orderId}</h2>
                    <div className="relative">
                        <Separator orientation="vertical" className="absolute left-1/2 top-0 h-full -translate-x-1/2" />
                        <div className="flex justify-between items-center mb-16">
                            <div className="flex flex-col items-center text-center z-10">
                                <div className="bg-green-500 text-white rounded-full p-2 ring-4 ring-background"><CheckCircle /></div>
                                <h3 className="font-semibold mt-2">Order Confirmed</h3>
                                <p className="text-sm text-muted-foreground">July 29, 2024</p>
                            </div>
                            <div className="flex flex-col items-center text-center z-10">
                                <div className="bg-primary text-white rounded-full p-2 ring-4 ring-background"><Package /></div>
                                <h3 className="font-semibold mt-2">Shipped</h3>
                                <p className="text-sm text-muted-foreground">July 30, 2024</p>
                            </div>
                            <div className="flex flex-col items-center text-center z-10">
                                <div className="bg-gray-300 text-gray-600 rounded-full p-2 ring-4 ring-background"><Truck /></div>
                                <h3 className="font-semibold text-gray-500 mt-2">Out for Delivery</h3>
                                <p className="text-sm text-muted-foreground">Pending</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-muted-foreground mt-8">
                        <p>Estimated Delivery: August 2, 2024</p>
                        <p>Questions? <a href="/contact" className="text-primary hover:underline">Contact us</a>.</p>
                    </div>
                </div>
            )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
