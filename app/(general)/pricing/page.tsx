import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pricing Page description for SEO",
  keywords: ["Pricing", "Learn more", "Details"],
};

export default function PricingPage() {
  return <span className="text-7xl">Pricing Page</span>;
}
