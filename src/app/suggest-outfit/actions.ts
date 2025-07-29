"use server";

import { z } from "zod";
import {
  suggestOutfits,
  type SuggestOutfitsInput,
  type SuggestOutfitsOutput,
} from "@/ai/flows/suggest-outfits";
import { allProducts } from "@/lib/data";

const formSchema = z.object({
  stylePreferences: z.string().min(10, "Please describe your style preference in a bit more detail."),
  selectedItems: z.array(z.string()).min(1, "Please select at least one item."),
});

type SuggestionState = {
  form: {
    stylePreferences: string;
    selectedItems: string[];
  };
  error?: string;
  suggestions?: SuggestOutfitsOutput;
};

export async function getOutfitSuggestions(
  prevState: SuggestionState,
  formData: FormData
): Promise<SuggestionState> {
  const validatedFields = formSchema.safeParse({
    stylePreferences: formData.get("stylePreferences"),
    selectedItems: formData.getAll("selectedItems"),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.issues.map((issue) => issue.message).join(" ");
    return {
      ...prevState,
      error: errorMessages,
    };
  }
  
  const { stylePreferences, selectedItems: selectedItemIds } = validatedFields.data;

  const selectedItemsInput: SuggestOutfitsInput["selectedItems"] = selectedItemIds
    .map((itemId) => {
      const product = allProducts.find((p) => p.id === itemId);
      if (!product) return null;
      return {
        category: product.category,
        itemId: product.id,
      };
    })
    .filter(Boolean) as SuggestOutfitsInput["selectedItems"];

  try {
    const suggestions = await suggestOutfits({
      stylePreferences,
      selectedItems: selectedItemsInput,
    });

    return {
      form: { stylePreferences, selectedItems: selectedItemIds },
      suggestions,
    };
  } catch (e) {
    const error = e instanceof Error ? e.message : "An unexpected error occurred.";
    return {
      ...prevState,
      error: `AI suggestion failed: ${error}`,
    };
  }
}
