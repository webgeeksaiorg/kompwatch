const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KompWatch",
  url: "https://kompwatch.com",
  description:
    "AI-powered competitor monitoring for SaaS teams. Track competitor websites, detect changes, and get AI-generated digests delivered to your inbox.",
  publisher: {
    "@type": "Organization",
    name: "KompWatch",
    url: "https://kompwatch.com",
  },
};

export function WebSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
    />
  );
}
