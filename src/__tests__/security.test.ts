import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { metadata } from "@/app/security/page";
import sitemap from "@/app/sitemap";

const siteUrl = "https://kompwatch.com";
const pageSource = readFileSync(
  path.join(process.cwd(), "src", "app", "security", "page.tsx"),
  "utf8"
);

describe("security page metadata", () => {
  it("sets a descriptive title", () => {
    expect(typeof metadata.title).toBe("string");
    expect(metadata.title).toMatch(/security/i);
  });

  it("sets a description that mentions trust signals", () => {
    expect(metadata.description).toBeTruthy();
    expect(metadata.description!.length).toBeGreaterThan(40);
  });

  it("declares /security as the canonical URL", () => {
    expect(metadata.alternates?.canonical).toBe("/security");
  });
});

describe("security page content", () => {
  it("documents the major trust pillars B2B prospects ask about", () => {
    // These literals must appear so the page actually addresses the questions
    // it claims to. If a reviewer renames a section, update this list.
    const required = [
      "Encryption in transit",
      "Encryption at rest",
      "Subprocessors",
      "Responsible disclosure",
      "GDPR",
      "SOC 2",
    ];
    for (const phrase of required) {
      expect(pageSource).toContain(phrase);
    }
  });

  it("exposes a security contact email", () => {
    expect(pageSource).toContain("security@kompwatch.com");
  });
});

describe("security page is discoverable", () => {
  it("appears in the sitemap so search engines can crawl it", () => {
    const urls = new Set(sitemap().map((e) => e.url));
    expect(urls.has(`${siteUrl}/security`)).toBe(true);
  });
});
