
"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart.tsx";
import { X } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#111]">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold font-headline mb-8">Your Cart</h1>
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Image src={item.image} alt={item.name} width={80} height={100} className="rounded-md object-cover" />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-muted-foreground">₹{item.price.toLocaleString("en-IN")}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-16 text-center"
                          aria-label={`Quantity for ${item.name}`}
                        />
                        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                          <X className="h-5 w-5" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="p-6 border rounded-lg bg-gray-50">
                  <h2 className="text-xl font-bold font-headline mb-4">Order Summary</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{total.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>
                  <div className="border-t my-4"></div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                  <Button size="lg" className="w-full mt-6">Proceed to Checkout</Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty.</h2>
              <Button asChild className="mt-4">
                <Link href="/">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
