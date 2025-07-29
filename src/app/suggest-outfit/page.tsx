"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles, AlertCircle } from "lucide-react";
import { allProducts, productsByCategory } from "@/lib/data";
import { getOutfitSuggestions } from "./actions";
import { type Product } from "@/types";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="mr-2 h-4 w-4" />
      )}
      Get Suggestions
    </Button>
  );
}

export default function SuggestOutfitPage() {
  const initialState = {
    form: { stylePreferences: "", selectedItems: [] },
    error: undefined,
    suggestions: undefined,
  };
  const [state, formAction] = useActionState(getOutfitSuggestions, initialState);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24">
        <Card className="max-w-4xl mx-auto border-none shadow-none bg-transparent">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl">AI Personal Stylist</CardTitle>
            <CardDescription className="text-lg">
              Select items from your wardrobe and let our AI create the perfect outfit for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="stylePreferences" className="text-lg font-semibold block mb-2">Your Style Preferences</Label>
                  <Textarea
                    id="stylePreferences"
                    name="stylePreferences"
                    placeholder="e.g., 'I'm looking for a casual weekend look', 'Something for a formal event', 'I prefer minimalist and monochrome styles.'"
                    rows={4}
                    className="bg-card"
                    defaultValue={state.form.stylePreferences}
                    required
                  />
                </div>
                <div>
                  <SubmitButton />
                </div>
                {state.error && (
                   <Alert variant="destructive">
                     <AlertCircle className="h-4 w-4" />
                     <AlertTitle>Error</AlertTitle>
                     <AlertDescription>{state.error}</AlertDescription>
                   </Alert>
                )}
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Select Your Items</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto pr-4">
                  {Object.entries(productsByCategory).map(([category, products]) => (
                    <div key={category}>
                      <h4 className="font-semibold capitalize mb-2">{category}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {products.map((product) => (
                           <div key={product.id} className="flex items-center space-x-2">
                             <Checkbox 
                               id={product.id} 
                               name="selectedItems" 
                               value={product.id} 
                               defaultChecked={state.form.selectedItems.includes(product.id)}
                              />
                             <Label htmlFor={product.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 cursor-pointer">
                               <Image src={product.image} alt={product.name} width={40} height={40} className="rounded-md" data-ai-hint={`${product.category} product`} />
                               <span>{product.name}</span>
                             </Label>
                           </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>

            {state.suggestions && (
              <div className="mt-12">
                <h2 className="text-3xl font-headline font-bold text-center mb-8">Your Outfit Suggestions</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {state.suggestions.outfitSuggestions.map((outfit, index) => {
                    const outfitItems: (Product | undefined)[] = [
                      allProducts.find(p => p.id === outfit.shirtId),
                      allProducts.find(p => p.id === outfit.pantsId),
                      allProducts.find(p => p.id === outfit.shoesId),
                      allProducts.find(p => p.id === outfit.capId)
                    ].filter(Boolean);

                    return (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader>
                          <CardTitle>Outfit Suggestion {index + 1}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            {outfitItems.map(item => item && (
                              <div key={item.id} className="flex flex-col items-center text-center">
                                <Image src={item.image} alt={item.name} width={150} height={150} className="rounded-lg object-cover" data-ai-hint={`${item.category} product`} />
                                <p className="text-xs mt-2 font-semibold">{item.name}</p>
                              </div>
                            ))}
                          </div>
                          <CardDescription className="text-base border-t pt-4">{outfit.reasoning}</CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
