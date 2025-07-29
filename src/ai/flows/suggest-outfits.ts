// src/ai/flows/suggest-outfits.ts
'use server';
/**
 * @fileOverview Outfit suggestion AI agent.
 *
 * - suggestOutfits - A function that handles the outfit suggestion process.
 * - SuggestOutfitsInput - The input type for the suggestOutfits function.
 * - SuggestOutfitsOutput - The return type for the suggestOutfits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOutfitsInputSchema = z.object({
  selectedItems: z.array(
    z.object({
      category: z.enum(['shirts', 'pants', 'shoes', 'caps']),
      itemId: z.string(),
    })
  ).describe('The items selected by the user to base the outfit on.'),
  stylePreferences: z.string().describe('The style preferences of the user.'),
});

export type SuggestOutfitsInput = z.infer<typeof SuggestOutfitsInputSchema>;

const SuggestOutfitsOutputSchema = z.object({
  outfitSuggestions: z.array(
    z.object({
      shirtId: z.string().optional(),
      pantsId: z.string().optional(),
      shoesId: z.string().optional(),
      capId: z.string().optional(),
      reasoning: z.string(),
    })
  ).describe('The suggested outfits.'),
});

export type SuggestOutfitsOutput = z.infer<typeof SuggestOutfitsOutputSchema>;

export async function suggestOutfits(input: SuggestOutfitsInput): Promise<SuggestOutfitsOutput> {
  return suggestOutfitsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOutfitsPrompt',
  input: {schema: SuggestOutfitsInputSchema},
  output: {schema: SuggestOutfitsOutputSchema},
  prompt: `You are a personal stylist for Lazywear, creating outfits for customers based on their selected items and style preferences.

  Suggest a few different outfits based on the following information. For each outfit, provide a shirtId, pantsId, shoesId, and capId from the Lazywear product catalog.

  Selected Items:
  {{#each selectedItems}}
  - Category: {{this.category}}, Item ID: {{this.itemId}}
  {{/each}}

  Style Preferences: {{stylePreferences}}

  Explain your reasoning for each suggested outfit.
  `, config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const suggestOutfitsFlow = ai.defineFlow(
  {
    name: 'suggestOutfitsFlow',
    inputSchema: SuggestOutfitsInputSchema,
    outputSchema: SuggestOutfitsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
