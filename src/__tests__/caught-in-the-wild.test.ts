import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");

const COMPONENT_PATH = "src/components/marketing/caught-in-the-wild.tsx";
const AB_PATH = "src/lib/ab.ts";
const PRICING_PATH = "src/app/pricing/page.tsx";

describe("Caught in the wild social proof (experiment c356)", () => {
  it("the component exists and is a client component", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src.startsWith('"use client"')).toBe(true);
    expect(src).toContain("export function CaughtInTheWild");
  });

  it("uses the CAUGHT_IN_WILD_EXPERIMENT constant from ab.ts", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("CAUGHT_IN_WILD_EXPERIMENT");
    expect(src).toContain("assignVariantInBrowser");
  });

  it("the experiment constant is defined in ab.ts", () => {
    const src = readFileSync(join(ROOT, AB_PATH), "utf-8");
    expect(src).toContain('CAUGHT_IN_WILD_EXPERIMENT');
    expect(src).toContain("caught-in-wild-pricing-2026-06");
  });

  it("fires a caught-in-wild-impression Plausible event with variant and experiment props", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('"caught-in-wild-impression"');
    expect(src).toContain("variant: v");
    expect(src).toContain("experiment: CAUGHT_IN_WILD_EXPERIMENT");
  });

  it("fires a caught-in-wild-cta-click Plausible event on the CTA", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('"caught-in-wild-cta-click"');
  });

  it("variant B is control (hidden) — returns null for B", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('variant === "B"');
    expect(src).toContain("return null");
  });

  it("shows four different change types as social proof", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("Pricing change");
    expect(src).toContain("Feature launch");
    expect(src).toContain("Job posting");
    expect(src).toContain("Blog post");
  });

  it("each catch includes competitor name, headline, and detail", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    // Should have multiple competitors
    expect(src).toContain("Acme Analytics");
    expect(src).toContain("Rival CRM");
    expect(src).toContain("CompeteStack");
    expect(src).toContain("InsightHub");
  });

  it("is imported and rendered on the pricing page", () => {
    const src = readFileSync(join(ROOT, PRICING_PATH), "utf-8");
    expect(src).toContain(
      'from "@/components/marketing/caught-in-the-wild"'
    );
    expect(src).toContain("<CaughtInTheWild");
  });

  it("links CTA to /login for signup conversion", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('href="/login"');
  });
});
