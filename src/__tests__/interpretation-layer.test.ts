import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");

const COMPONENT_PATH = "src/components/marketing/interpretation-layer.tsx";
const HOME_PATH = "src/app/page.tsx";

describe("Landing page interpretation-layer reframe (ticket 47dd)", () => {
  it("component exists as a client component", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src.startsWith('"use client"')).toBe(true);
    expect(src).toContain("export function InterpretationLayer");
  });

  it("names Crayon and Klue as the enterprise CI comparison anchors", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("Crayon");
    expect(src).toContain("Klue");
  });

  it("quantifies the hidden analyst interpretation labor cost", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    // Hidden-labor cost range from ticket 47dd notes
    expect(src).toContain("$26,000");
    expect(src).toContain("$83,000");
    // Weekly hours cited
    expect(src).toContain("10–20 hrs/week");
  });

  it("frames KompWatch as the interpretation layer, not just monitoring", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("interpretation");
    // Core positioning line from the ticket thesis
    expect(src).toMatch(
      /Monitoring platforms deliver data\.\s*KompWatch delivers\s*interpretation\./,
    );
  });

  it("cites KompWatch Pro price anchor so the contrast is quantitative", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("$588/yr");
  });

  it("targets the ICP called out in the ticket (founders, PMMs, small teams)", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("founders");
    expect(src).toContain("PMMs");
    expect(src).toContain("small teams");
  });

  it("fires a Plausible impression event for measurement", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("window.plausible");
    expect(src).toContain('"interpretation-layer-impression"');
  });

  it("attributes the cost-model source (userintuition.ai) for CEO defensibility", () => {
    const src = readFileSync(join(ROOT, COMPONENT_PATH), "utf-8");
    expect(src).toContain("userintuition.ai");
  });

  it("is imported and rendered on the homepage", () => {
    const src = readFileSync(join(ROOT, HOME_PATH), "utf-8");
    expect(src).toContain(
      'from "@/components/marketing/interpretation-layer"',
    );
    expect(src).toContain("<InterpretationLayer");
  });
});
