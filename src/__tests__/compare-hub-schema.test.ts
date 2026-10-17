import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/**
 * Regression guard for /compare hub JSON-LD.
 *
 * The hub page emits four schema.org rich-result payloads:
 *   1. SoftwareApplication — the KompWatch product (pre-existing helper)
 *   2. BreadcrumbList      — Home > Compare (pre-existing helper)
 *   3. ItemList            — the 21 KompWatch-vs-competitor comparison cards
 *                            (CompareHubItemListSchema, driven by competitors[])
 *   4. FAQPage             — the hub-level vendor-agnostic FAQ
 *                            (CompareHubFAQSchema, driven by compareFaqs[])
 *
 * Google requires the schema text to match what the user sees on the page.
 * If someone renames a component, drops a mount, or forgets to render one
 * of the visible sections that backs a JSON-LD payload, Google flags the
 * page as "invalid rich result" and SERP CTR falls off. tsc is silent on
 * this contract because it's runtime/content, not types — so we parse the
 * file as text and assert the structural invariants (same pattern as
 * switch-hub-schema.test.ts, ticket 6b63).
 */

const repoRoot = process.cwd();
const pageTsxPath = path.join(
  repoRoot,
  "src",
  "app",
  "compare",
  "page.tsx",
);

function readPage(): string {
  return fs.readFileSync(pageTsxPath, "utf-8");
}

describe("/compare hub JSON-LD schemas", () => {
  const src = readPage();

  it("declares the two new schema helpers", () => {
    // If either helper is renamed, this test fails loudly instead of the page
    // silently losing a rich result.
    expect(src).toMatch(/function CompareHubItemListSchema\(/);
    expect(src).toMatch(/function CompareHubFAQSchema\(/);
  });

  it("mounts all four schema payloads inside ComparePage", () => {
    // Unmounted schema = zero rich results. Guard against a merge that
    // deletes one of the mount lines.
    expect(src).toMatch(/<SoftwareApplicationSchema \/>/);
    expect(src).toMatch(/<BreadcrumbSchema items=\{\[\{ name: "Compare", path: "\/compare" \}\]\} \/>/);
    expect(src).toMatch(/<CompareHubItemListSchema \/>/);
    expect(src).toMatch(/<CompareHubFAQSchema \/>/);
  });

  it("emits the expected schema.org @type strings", () => {
    expect(src).toContain('"@type": "ItemList"');
    expect(src).toContain('"@type": "ListItem"');
    expect(src).toContain('"@type": "FAQPage"');
    expect(src).toContain('"@type": "Question"');
    expect(src).toContain('"@type": "Answer"');
  });

  it("ItemList sources from the competitors[] array (schema/DOM parity)", () => {
    // Both the visible grid and the ItemList itemListElement map over
    // `competitors`. If someone hard-codes one and updates the other, drift
    // silently disables the rich result.
    expect(src).toMatch(/itemListElement: competitors\.map/);
    expect(src).toMatch(/\{competitors\.map\(\(c\)/);
  });

  it("FAQPage has at least 4 questions (Google rich-result threshold)", () => {
    // Google generally requires 2+ FAQs for the rich result to render; 4+
    // is the practical floor for it to actually surface in SERP.
    const faqsMatch = src.match(/const compareFaqs:[^[]+\[([\s\S]*?)\n\];/);
    expect(faqsMatch, "compareFaqs array must exist").not.toBeNull();
    const faqsBlock = faqsMatch![1];
    const questionCount = (faqsBlock.match(/^\s*question:/gm) ?? []).length;
    expect(questionCount).toBeGreaterThanOrEqual(4);
  });

  it("renders the visible FAQ section (Google requires schema/DOM parity)", () => {
    // If the JSON-LD ships without a visible FAQ section, Google marks the
    // rich result as spam and can penalize the page.
    expect(src).toMatch(/KompWatch alternatives — FAQ/);
    expect(src).toMatch(/compareFaqs\.map/);
  });

  it("competitors[] slugs match the /vs-{slug} route the visible grid links to", () => {
    // The ItemList URLs default to `${siteUrl}/vs-${c.slug}` and the visible
    // grid defaults to `/vs-${c.slug}`. Entries that opt in via `href` (used
    // when the short /vs-{slug} page doesn't exist yet — see ravenseer,
    // kompetar, spyglass, competely) route to the long-form
    // /compare/kompwatch-vs-{slug} page instead. Both call sites must share
    // the same `c.href ?? …` fallback expression so schema/DOM stay in
    // lockstep; if one is hard-coded, drift silently 404s the rich result.
    expect(src).toMatch(/href=\{c\.href \?\? `\/vs-\$\{c\.slug\}`\}/);
    expect(src).toMatch(/url: `\$\{siteUrl\}\$\{c\.href \?\? `\/vs-\$\{c\.slug\}`\}`/);
  });

  it("every href override points at a real /compare/kompwatch-vs-{slug} page", () => {
    // Guard against the exact bug this test replaces (`/vs-{slug}` with no
    // page on disk → hub 404 + broken ItemList URL). Any competitor that
    // opts into `href` must reference a compare page that exists on disk.
    const compareDir = path.join(repoRoot, "src", "app", "compare");
    const compareRoutes = fs
      .readdirSync(compareDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name.startsWith("kompwatch-vs-"))
      .map((d) => `/compare/${d.name}`);

    // Extract every explicit `href: "..."` inside the competitors[] block.
    const compBlockMatch = src.match(/const competitors = \[([\s\S]*?)\n\];/);
    expect(compBlockMatch, "competitors[] array must exist").not.toBeNull();
    const hrefMatches = [
      ...compBlockMatch![1].matchAll(/href:\s*"([^"]+)"/g),
    ].map((m) => m[1]);

    for (const href of hrefMatches) {
      expect(
        compareRoutes,
        `competitors[].href "${href}" must map to an existing /compare/kompwatch-vs-* directory`,
      ).toContain(href);
    }
  });
});
