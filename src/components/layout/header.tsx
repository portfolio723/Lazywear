
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 bg-white text-black shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold font-headline">
          Lazywear
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/shirts" className="text-sm font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors">Shirts</Link>
        <Link href="/pants" className="text-sm font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors">Pants</Link>
        <Link href="/shoes" className="text-sm font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors">Shoes</Link>
        <Link href="/caps" className="text-sm font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors">Caps</Link>
        <Link href="/sale" className="text-sm font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors text-[#B71C1C]">Sale</Link>
      </nav>
      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="hidden md:inline-flex">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Wishlist</span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white">
              <div className="flex justify-between items-center p-4 border-b">
                 <Link href="/" className="text-2xl font-bold font-headline" onClick={() => setMenuOpen(false)}>
                    Lazywear
                </Link>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col items-start gap-6 p-4">
                <Link href="/shirts" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Shirts</Link>
                <Link href="/pants" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Pants</Link>
                <Link href="/shoes" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Shoes</Link>
                <Link href="/caps" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Caps</Link>
                <Link href="/sale" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors text-[#B71C1C]" onClick={() => setMenuOpen(false)}>Sale</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
