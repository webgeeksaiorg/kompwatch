const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KompWatch",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered competitor monitoring for SaaS teams. Track competitor websites, detect changes, and get AI-generated digests delivered to your inbox.",
  url: "https://kompwatch.com",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free",
      description:
        "Track 2 competitors with weekly AI digests. No credit card required.",
    },
    {
      "@type": "Offer",
      price: "49",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "49",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      name: "Pro",
      description:
        "10 competitors, 6-hour snapshots, and daily AI digests.",
    },
    {
      "@type": "Offer",
      price: "149",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "149",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      name: "Team",
      description:
        "50 competitors, hourly snapshots, and real-time alerts.",
    },
  ],
};

export function SoftwareApplicationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
    />
  );
}
