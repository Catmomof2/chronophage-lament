import express from "express";
import Stripe from "stripe";
import { DONATION_PRODUCTS } from "../../shared/products";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

// Create checkout session for donations
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount, customerEmail, customerName } = req.body;

    if (!amount || amount < 50) {
      return res.status(400).json({ 
        error: "Amount must be at least $0.50 USD" 
      });
    }

    const origin = req.headers.origin || `http://localhost:${process.env.PORT || 3000}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to Amanda Hines",
              description: "Support Amanda's writing and help keep her kitties fed",
              images: [`${origin}/images/cover.jpg`],
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/donate?success=true&amount=${amount}`,
      cancel_url: `${origin}/donate?canceled=true`,
      customer_email: customerEmail || undefined,
      metadata: {
        customer_name: customerName || "Anonymous",
        customer_email: customerEmail || "anonymous",
        donation_amount: amount.toString(),
      },
      allow_promotion_codes: true,
    });

    res.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook endpoint for Stripe events
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    if (!sig) {
      return res.status(400).send("Missing stripe-signature header");
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle test events
    if (event.id.startsWith("evt_test_")) {
      console.log("[Webhook] Test event detected, returning verification response");
      return res.json({ verified: true });
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("Donation completed:", {
          amount: session.amount_total,
          customer: session.customer_email,
          metadata: session.metadata,
        });
        // Here you could save donation records to a database if needed
        break;
      }
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("Payment succeeded:", paymentIntent.id);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  }
);

export default router;
