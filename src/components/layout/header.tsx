import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Heart, User, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 bg-black text-white shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold font-headline">
          LAZYWEAR
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm font-semibold tracking-wider uppercase hover:text-gray-300 transition-colors">Shirts</Link>
        <Link href="#" className="text-sm font-semibold tracking-wider uppercase hover:text-gray-300 transition-colors">Pants</Link>
        <Link href="#" className="text-sm font-semibold tracking-wider uppercase hover:text-gray-300 transition-colors">Shoes</Link>
        <Link href="#" className="text-sm font-semibold tracking-wider uppercase hover:text-gray-300 transition-colors">Caps</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hover:bg-gray-800">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-800">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Wishlist</span>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-800">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-800">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </Button>
      </div>
    </header>
  );
}
