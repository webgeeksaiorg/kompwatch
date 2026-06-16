import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");

const COMPONENT_PATH = "src/components/compare-email-capture.tsx";
const AB_PATH = "src/lib/ab.ts";
const LEADS_PATH = "src/app/api/leads/route.ts";
const COMPARE_DIR = "src/app/compare";

const COMPARE_PAGES = readdirSync(join(ROOT, COMPARE_DIR)).filter((d) =>
  d.startsWith("kompwatch-vs-"),
);

describe("Compare page email capture experiment (ticket de1f)", () => {
  it("the component exists and is a client component", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src.startsWith('"use client"')).toBe(true);
    expect(src).toContain("export function CompareEmailCapture");
  });

  it("uses the dedicated experiment constant from ab.ts", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("COMPARE_EMAIL_CAPTURE_EXPERIMENT");
    expect(src).toContain("assignVariantInBrowser");
  });

  it("the experiment constant is defined in ab.ts with a stable slug", () => {
    const src = readFileSync(join(ROOT, AB_PATH), "utf-8");
    expect(src).toContain("COMPARE_EMAIL_CAPTURE_EXPERIMENT");
    expect(src).toContain("compare-email-capture-2026-06");
  });

  it("fires a 'Compare Email Capture Impression' Plausible event with variant + experiment + competitor props", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('"Compare Email Capture Impression"');
    expect(src).toContain("variant: assigned");
    expect(src).toContain("experiment: COMPARE_EMAIL_CAPTURE_EXPERIMENT");
    expect(src).toContain("competitor");
  });

  it("variant A is the control (renders nothing); variant B renders the email capture", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain('variant !== "B"');
    expect(src).toContain("return null");
    expect(src).toContain("EmailCaptureForm");
    expect(src).toContain("Get the full");
    expect(src).toContain("comparison report");
  });

  it("accepts competitor and source props", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("competitor: string");
    expect(src).toContain("source: string");
  });

  describe("is integrated on all compare pages", () => {
    it.each(COMPARE_PAGES)("%s imports and renders CompareEmailCapture", (dir) => {
      const pagePath = join(ROOT, COMPARE_DIR, dir, "page.tsx");
      const src = readFileSync(pagePath, "utf-8");
      expect(src).toContain('from "@/components/compare-email-capture"');
      expect(src).toContain("<CompareEmailCapture");
    });
  });

  describe("leads API accepts compare sources", () => {
    const leadsSource = readFileSync(join(ROOT, LEADS_PATH), "utf-8");

    it.each(COMPARE_PAGES)("allows source for %s", (dir) => {
      const slug = dir.replace("kompwatch-vs-", "");
      const source = `compare-${slug}`;
      expect(leadsSource).toContain(`"${source}"`);
    });
  });
});
