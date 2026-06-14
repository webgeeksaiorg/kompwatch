import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");

const COMPONENT_PATH = "src/components/marketing/digest-preview.tsx";
const PRICING_PATH = "src/app/pricing/page.tsx";

describe("Digest email preview on /pricing (ticket 8ee2)", () => {
  it("the component exists and is a client component", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src.startsWith('"use client"')).toBe(true);
    expect(src).toContain("export function DigestPreview");
  });

  it("shows sample competitor name and change types", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("Acme Analytics");
    expect(src).toContain("Pricing");
    expect(src).toContain("Feature");
    expect(src).toContain("Blog");
  });

  it("includes severity emojis for each change", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("severityEmoji");
    expect(src).toContain("HIGH");
    expect(src).toContain("MEDIUM");
    expect(src).toContain("LOW");
  });

  it("displays signal strength badges", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("SignalBadge");
    expect(src).toContain("Strong");
    expect(src).toContain("Weak");
    expect(src).toContain("signal");
  });

  it("shows content zone tags (Monetization, Product, Marketing)", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("Monetization");
    expect(src).toContain("Product");
    expect(src).toContain("Marketing");
    expect(src).toContain("contentZone");
  });

  it('shows "What this means for you" implication text', () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("What this means for you");
    expect(src).toContain("implication");
  });

  it("fires a digest-preview-impression Plausible event", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('"digest-preview-impression"');
    expect(src).toContain("window.plausible");
  });

  it("labels the preview as sample data", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("Sample digest");
    expect(src).toContain("live competitor data");
  });

  it("renders an email chrome header with subject line", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("digest@kompwatch.com");
    expect(src).toContain("Weekly Digest");
    expect(src).toContain("3 competitor changes detected");
  });

  it("is imported and rendered on the pricing page", () => {
    const src = readFileSync(join(ROOT, PRICING_PATH), "utf-8");
    expect(src).toContain('from "@/components/marketing/digest-preview"');
    expect(src).toContain("<DigestPreview");
  });
});
