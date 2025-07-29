import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">
              Lazywear
            </h3>
            <p className="text-sm text-gray-400">
              A sleek, minimalist shopping experience for premium apparel and accessories.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Shirts</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pants</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Shoes</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Caps</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lazywear Lookbook. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
