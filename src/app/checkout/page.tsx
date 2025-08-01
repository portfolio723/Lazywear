
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/hooks/use-cart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CheckoutProgress = () => (
  <div className="flex items-center justify-center mb-8">
    <div className="flex items-center text-primary">
      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">1</div>
      <p className="ml-2 font-semibold">Shipping</p>
    </div>
    <div className="flex-1 h-px bg-gray-300 mx-4"></div>
    <div className="flex items-center text-muted-foreground">
      <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">2</div>
      <p className="ml-2">Payment</p>
    </div>
    <div className="flex-1 h-px bg-gray-300 mx-4"></div>
    <div className="flex items-center text-muted-foreground">
      <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">3</div>
      <p className="ml-2">Review</p>
    </div>
  </div>
);

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const [shippingMethod, setShippingMethod] = useState("standard");

  const shippingCost = shippingMethod === "express" ? 150 : 40;
  const finalTotal = total + shippingCost;

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold font-headline text-center mb-8">Checkout</h1>
            <CheckoutProgress />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side: Shipping and Payment */}
              <div>
                {/* Shipping Details */}
                <h2 className="text-xl font-bold font-headline mb-4">Shipping Details</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="For delivery updates" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Comfort Lane" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Relax City" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="Delhi" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="pincode">Pin Code</Label>
                      <Input id="pincode" placeholder="110001" />
                    </div>
                  </div>
                </form>

                <Separator className="my-8" />

                {/* Shipping Method */}
                <h2 className="text-xl font-bold font-headline mb-4">Shipping Method</h2>
                <RadioGroup defaultValue="standard" onValueChange={setShippingMethod} className="space-y-2">
                  <Label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer">
                    <div>
                      <p className="font-semibold">Standard Shipping</p>
                      <p className="text-sm text-muted-foreground">Est. delivery: 5-7 days</p>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold mr-4">₹40</span>
                        <RadioGroupItem value="standard" id="standard" />
                    </div>
                  </Label>
                  <Label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer">
                    <div>
                      <p className="font-semibold">Express Shipping</p>
                      <p className="text-sm text-muted-foreground">Est. delivery: 2-3 days</p>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold mr-4">₹150</span>
                        <RadioGroupItem value="express" id="express" />
                    </div>
                  </Label>
                </RadioGroup>
                
                <Separator className="my-8" />

                {/* Payment Information */}
                <h2 className="text-xl font-bold font-headline mb-4">Payment Method</h2>
                <p className="text-muted-foreground text-sm mb-4">Your payment is secure. All prices inclusive of GST. No hidden charges.</p>
                 <Accordion type="single" collapsible className="w-full" defaultValue="upi">
                    <AccordionItem value="upi">
                        <AccordionTrigger>UPI</AccordionTrigger>
                        <AccordionContent>
                           Enter your UPI ID to receive a payment request.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="card">
                        <AccordionTrigger>Credit/Debit Card</AccordionTrigger>
                        <AccordionContent>
                          Enter your card details. We accept Visa, MasterCard, and more.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cod">
                        <AccordionTrigger>Cash on Delivery</AccordionTrigger>
                        <AccordionContent>
                         Pay with cash when your order arrives at your doorstep.
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
              </div>

              {/* Right Side: Order Summary */}
              <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-24">
                <h2 className="text-xl font-bold font-headline mb-4">Order Summary</h2>
                <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                  {cart.map(item => (
                    <div key={`${item.id}-${item.size}`} className="flex items-start gap-4">
                      <Image src={item.image} alt={item.name} width={64} height={80} className="rounded-md object-cover" />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">{item.name}</p>
                        {item.size && <p className="text-muted-foreground text-xs">Size: {item.size}</p>}
                        <p className="text-muted-foreground text-xs">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-sm">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                   <div className="flex justify-between text-sm">
                       <Input placeholder="Promo Code" className="max-w-44 h-9"/>
                       <Button variant="outline" className="h-9">Apply</Button>
                   </div>
                   <Separator className="my-2" />
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>₹{total.toLocaleString("en-IN")}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>₹{shippingCost.toLocaleString("en-IN")}</p>
                  </div>
                   <div className="flex justify-between text-muted-foreground">
                    <p>Discount</p>
                    <p>-₹0</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>₹{finalTotal.toLocaleString("en-IN")}</p>
                </div>
                <Button size="lg" className="w-full mt-6">Place Order (Pay ₹{finalTotal.toLocaleString("en-IN")})</Button>
                <div className="text-center text-xs text-muted-foreground mt-4">
                    <p>Need help? <Link href="/contact" className="underline">Contact us</Link> or <Link href="#" className="underline">chat on WhatsApp</Link>.</p>
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
