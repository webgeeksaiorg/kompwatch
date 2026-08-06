import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/**
 * Regression guard for /switch hub JSON-LD (ticket 6b63).
 *
 * The hub page emits three schema.org rich-result payloads:
 *   1. ItemList  — the four vendor migration cards (ItemListSchema)
 *   2. HowTo     — the "What switching actually looks like" 4-step section
 *                  (SwitchHubHowToSchema, driven by hubHowToSteps)
 *   3. FAQPage   — the hub-level vendor-agnostic FAQ (SwitchHubFAQSchema,
 *                  driven by hubFaqs)
 *
 * Google requires the schema text to match what the user sees on the page.
 * If someone renames a component, drops a mount, or forgets to render one
 * of the visible sections that backs a JSON-LD payload, Google flags the
 * page as "invalid rich result" and SERP CTR falls off. We can't detect
 * that with tsc — it's a runtime/content contract — so we parse the file
 * as text and assert the structural invariants.
 */

const repoRoot = process.cwd();
const pageTsxPath = path.join(
  repoRoot,
  "src",
  "app",
  "switch",
  "page.tsx",
);

function readPage(): string {
  return fs.readFileSync(pageTsxPath, "utf-8");
}

describe("/switch hub JSON-LD schemas", () => {
  const src = readPage();

  it("declares all four expected schema helpers", () => {
    // If any helper is renamed, this test fails loudly instead of the page
    // silently losing a rich result.
    expect(src).toMatch(/function ItemListSchema\(/);
    expect(src).toMatch(/function SwitchHubHowToSchema\(/);
    expect(src).toMatch(/function SwitchHubFAQSchema\(/);
  });

  it("mounts every schema helper inside SwitchHubPage", () => {
    // Unmounted schema = zero rich results. Guard against a merge that
    // deletes one of the mount lines.
    expect(src).toMatch(/<ItemListSchema \/>/);
    expect(src).toMatch(/<SwitchHubHowToSchema \/>/);
    expect(src).toMatch(/<SwitchHubFAQSchema \/>/);
  });

  it("emits the expected schema.org @type strings", () => {
    expect(src).toContain('"@type": "ItemList"');
    expect(src).toContain('"@type": "HowTo"');
    expect(src).toContain('"@type": "HowToStep"');
    expect(src).toContain('"@type": "FAQPage"');
    expect(src).toContain('"@type": "Question"');
    expect(src).toContain('"@type": "Answer"');
  });

  it("HowTo step count matches the 4-step migration narrative on-page", () => {
    // The hub is committed to a 4-step story ("Export → Start → Run parallel
    // → Cancel"). If someone edits hubHowToSteps to a different length, the
    // visible <ol> and the schema drift. Force them to update both together.
    const stepsMatch = src.match(/const hubHowToSteps:[^[]+\[([\s\S]*?)\n\];/);
    expect(stepsMatch, "hubHowToSteps array must exist").not.toBeNull();
    const stepsBlock = stepsMatch![1];
    const stepCount = (stepsBlock.match(/^\s*\{\s*$/gm) ?? []).length;
    expect(stepCount).toBe(4);
  });

  it("FAQPage has at least 4 questions (Google rich-result threshold)", () => {
    // Google generally requires 2+ FAQs for the rich result to render; 4+
    // is the practical floor for it to actually surface in SERP.
    const faqsMatch = src.match(/const hubFaqs:[^[]+\[([\s\S]*?)\n\];/);
    expect(faqsMatch, "hubFaqs array must exist").not.toBeNull();
    const faqsBlock = faqsMatch![1];
    const questionCount = (faqsBlock.match(/^\s*question:/gm) ?? []).length;
    expect(questionCount).toBeGreaterThanOrEqual(4);
  });

  it("renders the visible FAQ section (Google requires schema/DOM parity)", () => {
    // If the JSON-LD ships without a visible FAQ section, Google marks the
    // rich result as spam and can penalize the page.
    expect(src).toMatch(/Switching to KompWatch — FAQ/);
    expect(src).toMatch(/hubFaqs\.map/);
  });

  it("renders the visible HowTo section (Google requires schema/DOM parity)", () => {
    expect(src).toMatch(/What switching actually looks like/);
    expect(src).toMatch(/hubHowToSteps\.map/);
    // step-{N} anchors used by HowToStep.url must exist in the DOM.
    expect(src).toMatch(/id=\{`step-\$\{i \+ 1\}`\}/);
  });
});
