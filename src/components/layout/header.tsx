
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Search, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MiniCart } from "@/components/mini-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";
import { SearchOverlay } from "@/components/search-overlay";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const navLinks = [
    { href: "/shirts", label: "Shirts" },
    { href: "/pants", label: "Pants" },
    { href: "/shoes", label: "Shoes" },
    { href: "/caps", label: "Caps" },
    { href: "/shorts", label: "Shorts" },
    { href: "/combos", label: "Combos" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 bg-white text-black shadow-md">
        <div className="flex items-center flex-1">
          <Link href="/" className="flex items-center">
            <Image src="https://miro.medium.com/v2/resize:fit:246/format:webp/1*pHF5KzQmHRkpZQ7-ntgZ8w.png" alt="Lazywear India - online store for comfortable and affordable casual wear" width={100} height={40} className="object-contain" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-6 flex-1">
          {navLinks.map(link => (
             <Link key={link.href} href={link.href} className="text-sm font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:gap-4 flex-1">
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label="Search products">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/favorites">
              <div className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-xs">
                      {cart.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  )}
                  <span className="sr-only">Cart</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <MiniCart />
            </PopoverContent>
          </Popover>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-white p-0" showClose={false}>
                <SheetHeader className="flex flex-row justify-between items-center p-4 border-b">
                   <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
                      <Image src="https://miro.medium.com/v2/resize:fit:246/format:webp/1*pHF5KzQmHRkpZQ7-ntgZ8w.png" alt="Lazywear India - Comfortable Clothing Store Logo" width={100} height={40} className="object-contain" />
                  </Link>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col items-start gap-6 p-4">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

    