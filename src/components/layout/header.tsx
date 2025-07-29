import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Heart, User, ShoppingCart } from "lucide-react";

export function Header() {
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
        <Link href="/sale" className="text-sm font-semibold tracking-wider uppercase hover:text-primary/70 transition-colors">Sale</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
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
      </div>
    </header>
  );
}
