import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..", "..");
const PRICING_PAGE = "src/app/pricing/page.tsx";

/**
 * Ticket 010d — XS UX: Competitor comparison table on /pricing
 * KompWatch plan comparison table — Free vs Pro vs Team vs Enterprise.
 *
 * These tests pin the structural contract of the plan-comparison table
 * so accidental edits don't silently drop feature rows or tier columns.
 */
describe("Plan comparison table (ticket 010d)", () => {
  const src = readFileSync(join(ROOT, PRICING_PAGE), "utf-8");

  it("exposes a stable anchor for deep-links", () => {
    expect(src).toContain('id="plan-comparison"');
  });

  it("declares the tierComparisonRows data table", () => {
    expect(src).toContain("const tierComparisonRows");
  });

  it("includes all four plan tiers in the column headers", () => {
    const tableBlock = src.split('id="plan-comparison"')[1] ?? "";
    // Column headers have plan names on their own lines inside <th> elements
    expect(tableBlock).toContain("$0/mo");
    expect(tableBlock).toMatch(/th[\s\S]*?Free/);
    expect(tableBlock).toMatch(/th[\s\S]*?Pro/);
    expect(tableBlock).toMatch(/th[\s\S]*?Team/);
    expect(tableBlock).toMatch(/th[\s\S]*?Enterprise/);
  });

  it("groups features into categories", () => {
    expect(src).toMatch(/category:\s*"Monitoring"/);
    expect(src).toMatch(/category:\s*"Alerts & digests"/);
    expect(src).toMatch(/category:\s*"Intelligence"/);
    expect(src).toMatch(/category:\s*"Support & security"/);
  });

  it("includes core monitoring features", () => {
    expect(src).toMatch(/feature:\s*"Competitors tracked"/);
    expect(src).toMatch(/feature:\s*"Snapshot frequency"/);
    expect(src).toMatch(/feature:\s*"Pricing page tracking"/);
    expect(src).toMatch(/feature:\s*"Job listing tracking"/);
    expect(src).toMatch(/feature:\s*"Tech stack detection"/);
  });

  it("includes alert and digest features", () => {
    expect(src).toMatch(/feature:\s*"Email digests"/);
    expect(src).toMatch(/feature:\s*"AI change summaries"/);
    expect(src).toMatch(/feature:\s*"Slack \/ webhook alerts"/);
  });

  it("includes intelligence features", () => {
    expect(src).toMatch(/feature:\s*"Battlecard export"/);
    expect(src).toMatch(/feature:\s*"API access"/);
  });

  it("includes support and security features", () => {
    expect(src).toMatch(/feature:\s*"Priority support"/);
    expect(src).toMatch(/feature:\s*"SSO & SAML"/);
    expect(src).toMatch(/feature:\s*"SLA & uptime guarantee"/);
    expect(src).toMatch(/feature:\s*"Dedicated account manager"/);
  });

  it("renders the tierComparisonRows into a <table>", () => {
    const tableBlock = src.split('id="plan-comparison"')[1] ?? "";
    expect(tableBlock).toContain("tierComparisonRows.map");
    expect(tableBlock).toContain("<table");
  });

  it("includes a Plausible-tracked CTA on the comparison table", () => {
    expect(src).toContain("plan-comparison-cta-click");
  });

  it("differentiates tier limits for key plan differentiators", () => {
    // Free = 2 competitors, Pro = 10, Team = 50
    expect(src).toMatch(/free:\s*"2"/);
    expect(src).toMatch(/pro:\s*"10"/);
    expect(src).toMatch(/team:\s*"50"/);
    // Snapshot frequency varies by tier
    expect(src).toMatch(/free:\s*"Daily"/);
    expect(src).toMatch(/pro:\s*"Every 6h"/);
    expect(src).toMatch(/team:\s*"Hourly"/);
  });
});
