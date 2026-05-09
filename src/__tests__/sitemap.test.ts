import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import sitemap from "@/app/sitemap";

const siteUrl = "https://kompwatch.com";
const appDir = path.join(process.cwd(), "src", "app");

// Public top-level segments we deliberately keep out of the sitemap.
const EXCLUDE_SEGMENTS = new Set([
  "api",
  "checkout",
  "opengraph-image",
]);

function listPublicRouteSlugs(): string[] {
  return readdirSync(appDir)
    .filter((entry) => {
      const full = path.join(appDir, entry);
      if (!statSync(full).isDirectory()) return false;
      // Skip route groups like (app) and excluded segments.
      if (entry.startsWith("(") || entry.startsWith("_")) return false;
      if (EXCLUDE_SEGMENTS.has(entry)) return false;
      // Only segments that actually expose a page.tsx are public routes.
      return existsSync(path.join(full, "page.tsx"));
    })
    .map((slug) => `/${slug}`);
}

// Nested static public routes (one level deep) we expect in the sitemap, e.g. /switch/klue.
// Dynamic segments like [slug] and [token] are excluded because they are listed via
// generated entries (e.g. FAQ slugs) or are not indexable.
function listNestedPublicRouteSlugs(): string[] {
  const out: string[] = [];
  for (const parent of readdirSync(appDir)) {
    const parentPath = path.join(appDir, parent);
    if (!statSync(parentPath).isDirectory()) continue;
    if (parent.startsWith("(") || parent.startsWith("_")) continue;
    if (EXCLUDE_SEGMENTS.has(parent)) continue;
    for (const child of readdirSync(parentPath)) {
      const childPath = path.join(parentPath, child);
      if (!statSync(childPath).isDirectory()) continue;
      if (child.startsWith("[") || child.startsWith("(") || child.startsWith("_")) continue;
      if (!existsSync(path.join(childPath, "page.tsx"))) continue;
      out.push(`/${parent}/${child}`);
    }
  }
  return out;
}

describe("sitemap — keeps every shipped public page discoverable", () => {
  const entries = sitemap();
  const urls = new Set(entries.map((e) => e.url));

  it("includes the homepage", () => {
    expect(urls.has(siteUrl)).toBe(true);
  });

  it("includes every public top-level page directory", () => {
    const missing = listPublicRouteSlugs().filter(
      (slug) => !urls.has(`${siteUrl}${slug}`)
    );
    expect(missing).toEqual([]);
  });

  it("includes every nested static public page (e.g. /switch/klue, /switch/kompyte)", () => {
    const missing = listNestedPublicRouteSlugs().filter(
      (slug) => !urls.has(`${siteUrl}${slug}`)
    );
    expect(missing).toEqual([]);
  });

  it("declares canonical URLs on every comparison and switching page", async () => {
    const comparisonRoutes = [
      ...listPublicRouteSlugs().filter(
        (slug) => slug.startsWith("/vs-") || slug.startsWith("/switching-from-")
      ),
      ...listNestedPublicRouteSlugs().filter((slug) => slug.startsWith("/switch/")),
    ];
    expect(comparisonRoutes.length).toBeGreaterThan(0);
    const missingCanonical: string[] = [];
    for (const slug of comparisonRoutes) {
      const pagePath = path.join(appDir, ...slug.split("/").filter(Boolean), "page.tsx");
      const src = readFileSync(pagePath, "utf8");
      // Look for an `alternates: { canonical: ... }` block referencing this slug.
      const hasCanonical = /alternates\s*:\s*\{[^}]*canonical/.test(src);
      const referencesSlug = src.includes(slug);
      if (!hasCanonical || !referencesSlug) missingCanonical.push(slug);
    }
    expect(missingCanonical).toEqual([]);
  });

  it("uses canonical https://kompwatch.com URLs", () => {
    for (const entry of entries) {
      expect(entry.url.startsWith(siteUrl)).toBe(true);
    }
  });

  it("does not duplicate any URL", () => {
    expect(urls.size).toBe(entries.length);
  });
});
