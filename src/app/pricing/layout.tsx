import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "KompWatch pricing plans — Free, Pro ($49/mo), and Team ($149/mo). Track competitor changes with AI-powered digests.",
  alternates: { canonical: "/pricing" },
};

// /pricing is a client component, so structured data lives in the layout
// (server component). SoftwareApplicationSchema exposes the pre-baked
// Free/Pro/Team Offer array for Pricing rich results in Google SERPs.
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Pricing", path: "/pricing" }]} />
      <SoftwareApplicationSchema />
      {children}
    </>
  );
}
