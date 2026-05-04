const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KompWatch",
  url: "https://kompwatch.com",
  logo: "https://kompwatch.com/icon.png",
  description:
    "AI-powered competitor monitoring for SaaS teams. Track competitor websites, detect changes, and get AI-generated digests delivered to your inbox.",
  foundingDate: "2026",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@kompwatch.com",
    contactType: "customer support",
  },
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
