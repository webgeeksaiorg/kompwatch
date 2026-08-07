import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");

const COMPONENT_PATH = "src/components/marketing/homepage-digest-preview.tsx";
const HOME_PATH = "src/app/page.tsx";

describe("Homepage digest preview (ticket 37e1)", () => {
  it("component exists as a client component", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src.startsWith('"use client"')).toBe(true);
    expect(src).toContain("export function HomepageDigestPreview");
  });

  it("renders the three ticket-mandated entry types (pricing, feature launch, hiring signal)", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("Pricing");
    expect(src).toContain("Feature launch");
    expect(src).toContain("Hiring signal");
  });

  it("includes a 'What this means for you' implication for each entry", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("What this means for you");
    // At least three entries with the field populated
    const matches = src.match(/implication:/g) ?? [];
    expect(matches.length).toBeGreaterThanOrEqual(3);
  });

  it("shows the email chrome (from address + subject)", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("digest@kompwatch.com");
    expect(src).toContain("Weekly digest");
  });

  it("labels the preview as a sample and links to the full sample digest page", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("Sample digest");
    expect(src).toContain("/sample-digest");
  });

  it("fires a Plausible impression event for measurement", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("window.plausible");
    expect(src).toContain('"homepage-digest-preview-impression"');
  });

  it("is imported and rendered on the homepage", () => {
    const src = readFileSync(join(ROOT, HOME_PATH), "utf-8");
    expect(src).toContain(
      'from "@/components/marketing/homepage-digest-preview"'
    );
    expect(src).toContain("<HomepageDigestPreview");
  });
});
