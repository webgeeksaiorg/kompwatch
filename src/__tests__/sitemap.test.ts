import { describe, it, expect } from "vitest";
import { readdirSync, statSync, existsSync } from "node:fs";
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

  it("uses canonical https://kompwatch.com URLs", () => {
    for (const entry of entries) {
      expect(entry.url.startsWith(siteUrl)).toBe(true);
    }
  });

  it("does not duplicate any URL", () => {
    expect(urls.size).toBe(entries.length);
  });
});
