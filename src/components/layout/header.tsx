
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 bg-white text-black shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold font-headline">
            Lazywear
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label="Search products">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/favorites">
              <div className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#EF4444] text-white text-xs">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="p-2">
                <h3 className="font-semibold">Welcome, Guest!</h3>
                <div className="mt-4 space-y-2">
                  <Button variant="default" className="w-full">Log In</Button>
                  <Button variant="outline" className="w-full">Sign Up</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

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
              <SheetContent side="right" className="w-full bg-white p-0">
                <SheetHeader className="flex flex-row justify-between items-center p-4 border-b">
                   <Link href="/" className="text-2xl font-bold font-headline" onClick={() => setMenuOpen(false)}>
                      Lazywear
                  </Link>
                </SheetHeader>
                <nav className="flex flex-col items-start gap-6 p-4">
                  <Link href="/shirts" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Shirts</Link>
                  <Link href="/pants" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Pants</Link>
                  <Link href="/shoes" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Shoes</Link>
                  <Link href="/caps" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors" onClick={() => setMenuOpen(false)}>Caps</Link>
                  <Link href="/sale" className="text-lg font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors text-red-600" onClick={() => setMenuOpen(false)}>Sale</Link>
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
