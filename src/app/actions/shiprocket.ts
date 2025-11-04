
'use server';

import { z } from 'zod';

// This is a placeholder for the actual Shiprocket tracking data structure.
// You can update this to match the real API response from Shiprocket.
const TrackingDataSchema = z.object({
  status: z.string(),
  activity: z.array(z.object({
    date: z.string(),
    status: z.string(),
    location: z.string(),
  })),
  estimatedDelivery: z.string(),
});

export type TrackingData = z.infer<typeof TrackingDataSchema>;

const trackOrderSchema = z.object({
  orderId: z.string().min(1, { message: "Order ID cannot be empty." }),
});

type TrackOrderResponse = {
  success: boolean;
  data?: TrackingData | null;
  error?: string;
}

/**
 * Tracks an order using a simulated Shiprocket API call.
 * TODO: Replace the mock data logic with a real API call to Shiprocket.
 * 1. Add your Shiprocket API Key and other credentials to your .env.local file.
 * 2. Use `fetch` to call the Shiprocket tracking API endpoint.
 * 3. Handle the response and map it to the `TrackingData` schema.
 * 4. Implement proper error handling for API failures.
 */
export async function trackOrder(input: { orderId: string }): Promise<TrackOrderResponse> {
  const validation = trackOrderSchema.safeParse(input);
  if (!validation.success) {
    return { success: false, error: validation.error.errors.map(e => e.message).join(', ') };
  }

  const { orderId } = validation.data;

  // --- START OF PLACEHOLDER LOGIC ---
  // This is mock data. Replace this with your actual Shiprocket API call.
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

  if (orderId.toLowerCase() === 'error') {
     return { success: false, error: "This is a simulated error. The order could not be tracked." };
  }
  
  if (orderId.toLowerCase() !== '#lw12345') {
    return { success: false, error: `Order ID "${orderId}" not found. Try "#LW12345".` };
  }

  const mockData: TrackingData = {
    status: "In Transit",
    activity: [
      { date: "August 2, 2024", status: "In Transit", location: "Delhi Hub, India" },
      { date: "July 31, 2024", status: "Shipped", location: "Mumbai Warehouse, India" },
      { date: "July 30, 2024", status: "Order Confirmed", location: "Lazywear HQ" },
    ],
    estimatedDelivery: "August 5, 2024",
  };
  // --- END OF PLACEHOLDER LOGIC ---

  try {
    const validatedData = TrackingDataSchema.parse(mockData);
    return { success: true, data: validatedData };
  } catch (e) {
    console.error("Validation error for tracking data:", e);
    return { success: false, error: "Could not retrieve valid tracking information." };
  }
}
