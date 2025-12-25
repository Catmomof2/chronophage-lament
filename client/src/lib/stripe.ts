import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export interface CreateCheckoutSessionParams {
  amount: number;
  customerEmail?: string;
  customerName?: string;
}

export async function createCheckoutSession(params: CreateCheckoutSessionParams) {
  try {
    const response = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to create checkout session");
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}

export { stripePromise };
