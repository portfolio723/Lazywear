
"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Truck, Package, Loader2 } from "lucide-react";
import { trackOrder, type TrackingData } from "@/app/actions/shiprocket";

export default function TrackOrderPage() {
  const { toast } = useToast();
  const [orderId, setOrderId] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setTrackingData(null);
    if (!orderId) {
        toast({ title: "Please enter an Order ID", variant: "destructive"});
        return;
    }
    setIsLoading(true);
    
    const result = await trackOrder({ orderId });
    
    setIsLoading(false);
    if (result.success && result.data) {
      setTrackingData(result.data);
    } else {
      setError(result.error);
      toast({ title: "Error", description: result.error, variant: "destructive" });
    }
  };

  const getStatusIcon = (status: string) => {
    const isCompleted = trackingData?.activity.some(act => act.status.toLowerCase() === status.toLowerCase());
    const isCurrent = trackingData?.status.toLowerCase() === status.toLowerCase();

    if (isCompleted || isCurrent) {
        return <div className="bg-primary text-white rounded-full p-2 ring-4 ring-background"><CheckCircle /></div>;
    }
    return <div className="bg-gray-300 text-gray-600 rounded-full p-2 ring-4 ring-background"><Package /></div>;
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
                            placeholder="Enter your Order ID (e.g., #LW12345)" 
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                    <Button type="submit" className="h-10" disabled={isLoading}>
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Track"}
                    </Button>
                </form>
            </div>
            
            {error && (
                 <div className="max-w-2xl mx-auto mt-12 text-center text-red-500">
                    <p>{error}</p>
                 </div>
            )}

            {trackingData && (
                <div className="max-w-2xl mx-auto mt-12">
                    <h2 className="text-xl font-bold text-center mb-2">Order Status for #{orderId}</h2>
                    <p className="text-center text-muted-foreground mb-6">Current Status: <span className="font-semibold text-primary">{trackingData.status}</span></p>

                    <div className="space-y-6">
                        {trackingData.activity.map((activity, index) => (
                           <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="bg-primary rounded-full p-2">
                                        <CheckCircle className="text-white h-4 w-4"/>
                                    </div>
                                    {index < trackingData.activity.length - 1 && <div className="w-px h-full bg-border mt-2"></div>}
                                </div>
                                <div>
                                    <p className="font-semibold">{activity.status}</p>
                                    <p className="text-sm text-muted-foreground">{activity.location}</p>
                                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                                </div>
                           </div>
                        ))}
                    </div>

                    <div className="text-center text-muted-foreground mt-8">
                        <p>Estimated Delivery: {trackingData.estimatedDelivery}</p>
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
