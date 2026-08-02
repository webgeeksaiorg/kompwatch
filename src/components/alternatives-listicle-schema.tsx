const siteUrl = "https://kompwatch.com";

type AlternativeItem = {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  internalLink?: string;
  externalDomain?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Emits two JSON-LD blocks for /vs/*-alternative listicle pages:
 *   1. ItemList — enables ranked-list rich results for the alternatives table.
 *   2. FAQPage  — enables FAQ rich results for the comparison Q&A section.
 *
 * Complements the existing BreadcrumbSchema + SoftwareApplicationSchema
 * blocks already rendered on those pages.
 */
export function AlternativesListicleSchema({
  pageUrl,
  listName,
  alternatives,
  faqs,
}: {
  pageUrl: string;
  listName: string;
  alternatives: AlternativeItem[];
  faqs: FaqItem[];
}) {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    url: pageUrl,
    numberOfItems: alternatives.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: alternatives.map((alt) => {
      const targetUrl = alt.internalLink
        ? `${siteUrl}${alt.internalLink}`
        : alt.externalDomain
          ? `https://${alt.externalDomain}`
          : pageUrl;
      return {
        "@type": "ListItem",
        position: alt.rank,
        url: targetUrl,
        name: alt.name,
        description: alt.tagline,
      };
    }),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
