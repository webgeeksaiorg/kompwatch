import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
});

export const PLANS = {
  FREE: { name: "Free", price: 0, competitors: 2, digest: "weekly" },
  PRO: {
    name: "Pro",
    price: 49,
    competitors: 10,
    digest: "daily",
    priceId: process.env.STRIPE_PRICE_PRO,
  },
  TEAM: {
    name: "Team",
    price: 149,
    competitors: 50,
    digest: "daily",
    priceId: process.env.STRIPE_PRICE_TEAM,
  },
} as const;
