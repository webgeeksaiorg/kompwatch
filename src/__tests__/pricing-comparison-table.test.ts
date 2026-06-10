import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");
const PRICING_PAGE = "src/app/pricing/page.tsx";

/**
 * Ticket f1a0 — XS SEO: Add competitor pricing comparison table to /pricing
 * — Crayon vs Klue vs KompWatch
 *
 * These tests pin the structural contract of the pricing-comparison table
 * so accidental copy edits / data refactors don't silently drop the SEO-
 * critical rows.
 */
describe("Pricing comparison table (ticket f1a0)", () => {
  const src = readFileSync(join(ROOT, PRICING_PAGE), "utf-8");

  it("exposes a stable anchor for inbound deep-links", () => {
    expect(src).toContain('id="pricing-comparison-table"');
  });

  it("declares the pricingComparisonRows data table", () => {
    expect(src).toContain("const pricingComparisonRows");
    expect(src).toMatch(/label:\s*"Entry plan"/);
    expect(src).toMatch(/label:\s*"Mid-tier plan"/);
    expect(src).toMatch(/label:\s*"Team \/ Enterprise"/);
    expect(src).toMatch(/label:\s*"Contract length"/);
    expect(src).toMatch(/label:\s*"Free trial"/);
    expect(src).toMatch(/label:\s*"Self-serve checkout"/);
    expect(src).toMatch(/label:\s*"Setup \/ onboarding fee"/);
    expect(src).toMatch(/label:\s*"Annual cost \(10 competitors\)"/);
  });

  it("compares all three vendors (KompWatch, Klue, Crayon) in column headers", () => {
    // The table-header block must mention each vendor by name. We anchor on
    // the surrounding markup so we don't false-match the existing feature
    // comparison table that ships with the page.
    const tableBlock = src.split('id="pricing-comparison-table"')[1] ?? "";
    expect(tableBlock).toContain(">KompWatch");
    expect(tableBlock).toContain(">Klue");
    expect(tableBlock).toContain(">Crayon");
  });

  it("renders the new pricingComparisonRows into a <table>", () => {
    const tableBlock = src.split('id="pricing-comparison-table"')[1] ?? "";
    expect(tableBlock).toContain("pricingComparisonRows.map");
    expect(tableBlock).toContain("<table");
  });

  it("includes a Plausible-tracked CTA on the comparison table", () => {
    expect(src).toContain("pricing-comparison-cta-click");
  });

  it("flags annual-contract lock-in for the enterprise competitors", () => {
    expect(src).toContain("12-month minimum");
    expect(src).toContain("Annual contract");
  });

  it("calls out that Klue and Crayon require a sales call", () => {
    expect(src).toMatch(/No \(sales call\)/);
  });
});
