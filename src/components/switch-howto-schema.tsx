const siteUrl = "https://kompwatch.com";

type HowToStep = {
  name: string;
  text: string;
};

/**
 * Emits HowTo JSON-LD for /switch/[competitor] pages.
 *
 * Renders the on-page "Switch in 3 steps, under 5 minutes" section as a
 * schema.org/HowTo so Google may surface it as a How-to rich result.
 *
 * IMPORTANT: `steps` must mirror the visible on-page copy — Google requires
 * the HowTo schema text to match what the user sees. Pass step names/text
 * from each /switch/* page rather than hard-coding here (step 3 varies per
 * competitor: Klue mentions Slack, others do not).
 */
export function SwitchHowToSchema({
  competitor,
  pageSlug,
  steps,
}: {
  competitor: string;
  pageSlug: string;
  steps: HowToStep[];
}) {
  const pageUrl = `${siteUrl}/switch/${pageSlug}`;
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to switch from ${competitor} to KompWatch`,
    description: `Switch from ${competitor} to KompWatch in under 5 minutes with these 3 steps.`,
    totalTime: "PT5M",
    url: pageUrl,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${pageUrl}#step-${i + 1}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
    />
  );
}
