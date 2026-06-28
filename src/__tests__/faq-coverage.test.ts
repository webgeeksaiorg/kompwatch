import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/**
 * Regression guard: every FAQ markdown file under docs/faq/ must be reachable
 * from /faq.
 *
 * Background — what this prevents:
 *   src/app/faq/page.tsx renders FAQs grouped by CATEGORY_MAP[slug]. Any slug
 *   missing from CATEGORY_MAP falls through to category "General". If
 *   "General" isn't also listed in CATEGORY_ORDER, the FAQ silently disappears
 *   from the /faq index even though /faq/<slug> still resolves. This used to
 *   bite us repeatedly (13 orphaned FAQs at one point) because the failure
 *   mode is invisible — no build error, no 404, just SEO/UX rot.
 *
 * Two invariants enforced here:
 *   1. Every docs/faq/*.md slug is either in CATEGORY_MAP or "General" is in
 *      CATEGORY_ORDER (so it surfaces in the fallback bucket).
 *   2. No duplicate keys in CATEGORY_MAP (the last write silently wins and
 *      moves a FAQ into the wrong section).
 *
 * We parse page.tsx as text rather than importing it because page.tsx is a
 * server component that reads the filesystem at module-init time.
 */

const repoRoot = process.cwd();
const faqDir = path.join(repoRoot, "docs", "faq");
const pageTsxPath = path.join(repoRoot, "src", "app", "faq", "page.tsx");

function readFaqSlugs(): string[] {
  return fs
    .readdirSync(faqDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

function readCategoryMapBlock(): string {
  const src = fs.readFileSync(pageTsxPath, "utf-8");
  const start = src.indexOf("const CATEGORY_MAP");
  const end = src.indexOf("\n};", start);
  if (start === -1 || end === -1) {
    throw new Error(
      "Could not locate CATEGORY_MAP block in src/app/faq/page.tsx",
    );
  }
  return src.slice(start, end);
}

function readCategoryOrderBlock(): string {
  const src = fs.readFileSync(pageTsxPath, "utf-8");
  const start = src.indexOf("const CATEGORY_ORDER");
  const end = src.indexOf("\n];", start);
  if (start === -1 || end === -1) {
    throw new Error(
      "Could not locate CATEGORY_ORDER block in src/app/faq/page.tsx",
    );
  }
  return src.slice(start, end);
}

function extractMapKeys(block: string): string[] {
  // Match both quoted keys ("foo-bar":) and bare-identifier keys (pricing:).
  const re = /^\s+(?:"([a-z0-9-]+)"|([a-z][a-z0-9]*)):/gm;
  const keys: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(block)) !== null) {
    keys.push(m[1] ?? m[2]);
  }
  return keys;
}

describe("FAQ coverage", () => {
  const slugs = readFaqSlugs();
  const mapBlock = readCategoryMapBlock();
  const orderBlock = readCategoryOrderBlock();
  const mapKeys = extractMapKeys(mapBlock);
  const mapKeySet = new Set(mapKeys);
  const hasGeneralFallback = orderBlock.includes('"General"');

  it("loads a non-trivial set of FAQ files", () => {
    expect(slugs.length).toBeGreaterThan(50);
  });

  it("has no duplicate keys in CATEGORY_MAP", () => {
    const counts = new Map<string, number>();
    for (const k of mapKeys) counts.set(k, (counts.get(k) ?? 0) + 1);
    const dupes = [...counts.entries()]
      .filter(([, n]) => n > 1)
      .map(([k]) => k);
    expect(dupes).toEqual([]);
  });

  it("either maps every FAQ slug OR includes a General fallback in CATEGORY_ORDER", () => {
    const orphans = slugs.filter((s) => !mapKeySet.has(s));
    if (orphans.length > 0) {
      expect(
        hasGeneralFallback,
        `FAQ orphans without a General fallback bucket — these slugs would silently disappear from /faq:\n  ${orphans.join("\n  ")}\nEither add them to CATEGORY_MAP in src/app/faq/page.tsx, or add "General" to CATEGORY_ORDER.`,
      ).toBe(true);
    }
  });

  it("does not reference deleted FAQ slugs (dead CATEGORY_MAP entries)", () => {
    const slugSet = new Set(slugs);
    const dead = mapKeys.filter((k) => !slugSet.has(k));
    expect(dead).toEqual([]);
  });
});
