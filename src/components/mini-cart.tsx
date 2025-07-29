
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart.tsx";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

export function MiniCart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</h3>
      </div>
      {cart.length > 0 ? (
        <>
          <ScrollArea className="flex-grow">
            <div className="p-4 space-y-4">
              {cart.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <Image src={item.image} alt={item.name} width={64} height={80} className="rounded-md object-cover" />
                  <div className="flex-grow">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-muted-foreground text-sm">Qty: {item.quantity}</p>
                    <p className="font-semibold text-sm">₹{item.price.toLocaleString("en-IN")}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFromCart(item.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <div className="flex justify-between font-semibold mb-4">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <div className="space-y-2">
              <Button className="w-full" asChild>
                  <Link href="/cart">View Cart</Link>
              </Button>
              <Button variant="outline" className="w-full">Checkout</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
            <p className="text-muted-foreground">Your cart is empty.</p>
            <Button asChild className="mt-4">
                <Link href="/">Start Shopping</Link>
            </Button>
        </div>
      )}
    </div>
  );
}
