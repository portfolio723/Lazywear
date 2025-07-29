import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-headline text-base font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Company</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Corporate News</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Press Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-headline text-base font-semibold mb-4">Stay up to date</h3>
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
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <Youtube className="text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Lazywear. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
             <span>INDIA</span>
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
