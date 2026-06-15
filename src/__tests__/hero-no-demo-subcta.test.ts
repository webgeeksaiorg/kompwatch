import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");

const COMPONENT_PATH = "src/app/hero-no-demo-subcta.tsx";
const AB_PATH = "src/lib/ab.ts";
const PAGE_PATH = "src/app/page.tsx";

describe("Hero 'No demo required — live in 2 min' sub-CTA experiment (ticket b16e)", () => {
  it("the component exists and is a client component", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src.startsWith('"use client"')).toBe(true);
    expect(src).toContain("export function HeroNoDemoSubCTA");
  });

  it("uses a dedicated experiment constant from ab.ts (not the subheadline slot)", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("HERO_NO_DEMO_SUBCTA_EXPERIMENT");
    expect(src).toContain("assignVariantInBrowser");
  });

  it("the experiment constant is defined in ab.ts with a stable slug", () => {
    const src = readFileSync(join(ROOT, AB_PATH), "utf-8");
    expect(src).toContain("HERO_NO_DEMO_SUBCTA_EXPERIMENT");
    expect(src).toContain("hero-no-demo-subcta-2026-06");
  });

  it("does not collide with the existing HERO_NO_DEMO_EXPERIMENT (subheadline slot)", () => {
    const componentSrc = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    // Subheadline experiment is a separate concern; this component must not
    // read it or it will contaminate that test's variant assignments.
    expect(componentSrc).not.toMatch(/HERO_NO_DEMO_EXPERIMENT\b/);
  });

  it("fires a 'Hero Sub-CTA Impression' Plausible event with variant + experiment props", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('"Hero Sub-CTA Impression"');
    expect(src).toContain("variant: assigned");
    expect(src).toContain("experiment: HERO_NO_DEMO_SUBCTA_EXPERIMENT");
  });

  it("variant A is the control (renders nothing); variant B renders the copy", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    // Guard clause that hides the control variant and SSR output.
    expect(src).toContain('variant !== "B"');
    expect(src).toContain("return null");
    // Treatment copy is exactly the headline from the experiment brief.
    expect(src).toContain("No demo required — live in 2");
    expect(src).toContain("minutes");
  });

  it("is imported and rendered on the homepage beneath the hero CTA row", () => {
    const src = readFileSync(join(ROOT, PAGE_PATH), "utf-8");
    expect(src).toContain('from "./hero-no-demo-subcta"');
    expect(src).toContain("<HeroNoDemoSubCTA />");
    // Sanity check: sub-CTA renders after the primary HeroCTA in source order
    // (i.e. visually below the button row).
    const ctaIdx = src.indexOf("<HeroCTA />");
    const subCtaIdx = src.indexOf("<HeroNoDemoSubCTA />");
    expect(ctaIdx).toBeGreaterThan(-1);
    expect(subCtaIdx).toBeGreaterThan(ctaIdx);
  });
});
