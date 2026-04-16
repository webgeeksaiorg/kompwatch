import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "KompWatch pricing plans — Free, Pro ($49/mo), and Team ($149/mo). Track competitor changes with AI-powered digests.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
