// Donation products for The Chronophage's Lament
export const DONATION_PRODUCTS = {
  SMALL: {
    name: "Small Donation",
    description: "A small contribution to support Amanda's writing",
    amount: 500, // $5.00 in cents
  },
  MEDIUM: {
    name: "Medium Donation",
    description: "Help keep the kitties fed",
    amount: 1000, // $10.00 in cents
  },
  LARGE: {
    name: "Large Donation",
    description: "Support the tools to publish Amanda's work",
    amount: 2500, // $25.00 in cents
  },
  EXTRA_LARGE: {
    name: "Extra Large Donation",
    description: "A generous contribution to Amanda's creative journey",
    amount: 5000, // $50.00 in cents
  },
  PREMIUM: {
    name: "Premium Donation",
    description: "An exceptional contribution to support Amanda's writing",
    amount: 10000, // $100.00 in cents
  },
} as const;

export type DonationProduct = keyof typeof DONATION_PRODUCTS;
