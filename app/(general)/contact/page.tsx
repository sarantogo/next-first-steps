import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page description for SEO",
  keywords: ["Contact", "Contact us", "Email", "Call us"],
};

export default function ContactInfo() {
  return <span className="text-7xl">Contact Page</span>;
}
