import { describe, it, expect } from "vitest";
import { readdirSync } from "node:fs";
import path from "node:path";
import {
  getAllFaqSlugs,
  getFaqEntry,
  getRelatedFaqSlugs,
} from "@/lib/faq";

const FAQ_DIR = path.join(process.cwd(), "docs", "faq");

describe("FAQ library", () => {
  const slugs = getAllFaqSlugs();
  const onDisk = readdirSync(FAQ_DIR).filter((f) => f.endsWith(".md"));

  it("getAllFaqSlugs returns one slug per markdown file", () => {
    expect(slugs.length).toBe(onDisk.length);
  });

  it("each slug has no .md suffix and matches a real file", () => {
    for (const slug of slugs) {
      expect(slug.endsWith(".md")).toBe(false);
      expect(onDisk).toContain(`${slug}.md`);
    }
  });

  it("getFaqEntry returns title, body, excerpt for a known slug", () => {
    const entry = getFaqEntry("getting-started");
    expect(entry).not.toBeNull();
    expect(entry?.title.length).toBeGreaterThan(0);
    expect(entry?.title.startsWith("#")).toBe(false);
    expect(entry?.body.length).toBeGreaterThan(0);
    expect(entry?.excerpt.length).toBeGreaterThan(0);
  });

  it("getFaqEntry returns null for unknown slug", () => {
    expect(getFaqEntry("does-not-exist-xyz")).toBeNull();
  });

  it("every slug returns a non-null entry with non-empty title", () => {
    for (const slug of slugs) {
      const entry = getFaqEntry(slug);
      expect(entry).not.toBeNull();
      expect(entry?.title.length).toBeGreaterThan(0);
    }
  });

  it("getRelatedFaqSlugs excludes the input slug and returns up to limit", () => {
    const related = getRelatedFaqSlugs("getting-started", 4);
    expect(related).not.toContain("getting-started");
    expect(related.length).toBeLessThanOrEqual(4);
  });
});
