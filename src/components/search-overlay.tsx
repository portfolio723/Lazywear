
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Mic } from "lucide-react";
import { allProducts } from "@/lib/data";
import { type Product } from "@/types";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query.length >= 2) {
      const filteredResults = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults.slice(0, 6));
    } else {
      setResults([]);
    }
  }, [query]);
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        onClose();
       }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm animate-in fade-in-0">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-16 border-b">
           <div className="relative w-full flex items-center">
            <Search className="absolute left-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products, e.g., 'black shoes'"
              aria-label="Search products"
              className="w-full pl-10 pr-10 h-12 bg-transparent border-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <Mic className="absolute right-3 h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary" />
           </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="ml-4">
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        {query.length > 0 && (
          <div className="mt-4">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {results.map((product) => (
                   <Link key={product.id} href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100" onClick={onClose}>
                      <Image src={product.image} alt={product.name} width={60} height={60} className="rounded-md object-cover" />
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString("en-IN")}</p>
                      </div>
                   </Link>
                ))}
              </div>
            ) : (
               <div className="text-center py-10">
                <p>No products found for &quot;{query}&quot;.</p>
                <p className="text-sm text-muted-foreground">Try adjusting filters or check spelling.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
