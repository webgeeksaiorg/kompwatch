import { describe, it, expect } from "vitest";
import {
  calculateCostComparison,
  formatCurrencyShort,
  recommendKompwatchPlan,
  vendorAnnualCost,
  KLUE,
  CRAYON,
  KOMPWATCH_PLANS,
  KOMPWATCH_ANNUAL_DISCOUNT,
} from "@/lib/cost-calculator";

describe("recommendKompwatchPlan", () => {
  it("recommends Free for 1–2 competitors with a single seat", () => {
    expect(recommendKompwatchPlan(1, 1).key).toBe("FREE");
    expect(recommendKompwatchPlan(2, 1).key).toBe("FREE");
  });

  it("upgrades a 2-competitor team-of-2 to Pro (Free is single-seat)", () => {
    expect(recommendKompwatchPlan(2, 2).key).toBe("PRO");
  });

  it("recommends Pro for ≤10 competitors and ≤3 seats", () => {
    expect(recommendKompwatchPlan(3, 1).key).toBe("PRO");
    expect(recommendKompwatchPlan(10, 3).key).toBe("PRO");
  });

  it("recommends Team when competitors exceed Pro cap", () => {
    expect(recommendKompwatchPlan(11, 1).key).toBe("TEAM");
    expect(recommendKompwatchPlan(50, 5).key).toBe("TEAM");
  });

  it("recommends Team when seats exceed Pro's 3-seat cap", () => {
    expect(recommendKompwatchPlan(5, 4).key).toBe("TEAM");
  });

  it("recommends Enterprise above 50 competitors", () => {
    expect(recommendKompwatchPlan(51, 1).key).toBe("ENTERPRISE");
    expect(recommendKompwatchPlan(500, 20).key).toBe("ENTERPRISE");
  });
});

describe("vendorAnnualCost", () => {
  it("returns the base price when seats are within the bundle", () => {
    expect(vendorAnnualCost(KLUE, 1)).toBe(KLUE.baseAnnual);
    expect(vendorAnnualCost(KLUE, 3)).toBe(KLUE.baseAnnual);
    expect(vendorAnnualCost(CRAYON, 2)).toBe(CRAYON.baseAnnual);
  });

  it("adds per-seat charges for seats above the bundle", () => {
    expect(vendorAnnualCost(KLUE, 5)).toBe(
      KLUE.baseAnnual + 2 * KLUE.perSeatAnnual
    );
    expect(vendorAnnualCost(CRAYON, 10)).toBe(
      CRAYON.baseAnnual + 7 * CRAYON.perSeatAnnual
    );
  });

  it("clamps non-positive seat counts to 1", () => {
    expect(vendorAnnualCost(KLUE, 0)).toBe(KLUE.baseAnnual);
    expect(vendorAnnualCost(KLUE, -5)).toBe(KLUE.baseAnnual);
  });
});

describe("calculateCostComparison", () => {
  it("computes Pro plan cost with annual discount (mid-market default)", () => {
    const r = calculateCostComparison({
      competitors: 8,
      teamSize: 3,
      annualBilling: true,
    });
    expect(r.recommendedPlan.key).toBe("PRO");
    // $49 × (1 - 0.2) = $39.20 → rounded to $39
    expect(r.kompwatchMonthlyEffective).toBe(
      Math.round(KOMPWATCH_PLANS.PRO.monthlyPrice * (1 - KOMPWATCH_ANNUAL_DISCOUNT))
    );
    expect(r.kompwatchAnnualCost).toBe(r.kompwatchMonthlyEffective * 12);
  });

  it("does not apply discount when annual billing is off", () => {
    const r = calculateCostComparison({
      competitors: 8,
      teamSize: 3,
      annualBilling: false,
    });
    expect(r.kompwatchMonthlyEffective).toBe(KOMPWATCH_PLANS.PRO.monthlyPrice);
  });

  it("computes enterprise median from Klue and Crayon", () => {
    const r = calculateCostComparison({
      competitors: 8,
      teamSize: 3,
      annualBilling: true,
    });
    const expectedMedian = Math.round(
      (vendorAnnualCost(KLUE, 3) + vendorAnnualCost(CRAYON, 3)) / 2
    );
    expect(r.enterpriseMedianAnnual).toBe(expectedMedian);
  });

  it("scales enterprise cost with team size (per-seat fees)", () => {
    const small = calculateCostComparison({
      competitors: 8,
      teamSize: 3,
      annualBilling: true,
    });
    const large = calculateCostComparison({
      competitors: 8,
      teamSize: 10,
      annualBilling: true,
    });
    expect(large.enterpriseMedianAnnual).toBeGreaterThan(
      small.enterpriseMedianAnnual
    );
    expect(large.klue.annualCost).toBeGreaterThan(small.klue.annualCost);
    expect(large.crayon.annualCost).toBeGreaterThan(small.crayon.annualCost);
  });

  it("produces a multiplier ≥ 40× for the mid-market default config", () => {
    // Goal: real, defensible "25–68× cheaper" headline from the ticket notes.
    const r = calculateCostComparison({
      competitors: 8,
      teamSize: 3,
      annualBilling: true,
    });
    expect(r.multiplier).toBeGreaterThanOrEqual(40);
    expect(r.cheaperByPercent).toBeGreaterThanOrEqual(90);
  });

  it("returns Infinity multiplier for the Free plan", () => {
    const r = calculateCostComparison({
      competitors: 1,
      teamSize: 1,
      annualBilling: false,
    });
    expect(r.recommendedPlan.key).toBe("FREE");
    expect(r.multiplier).toBe(Infinity);
    expect(r.cheaperByPercent).toBe(100);
  });

  it("computes positive annual savings vs enterprise median (Pro config)", () => {
    const r = calculateCostComparison({
      competitors: 8,
      teamSize: 3,
      annualBilling: true,
    });
    expect(r.annualSavings).toBeGreaterThan(0);
    expect(r.annualSavings).toBe(
      r.enterpriseMedianAnnual - r.kompwatchAnnualCost
    );
  });

  it("clamps competitors and team size to at least 1", () => {
    const r = calculateCostComparison({
      competitors: 0,
      teamSize: -3,
      annualBilling: true,
    });
    expect(r.recommendedPlan.key).toBe("FREE");
    expect(r.klue.annualCost).toBe(KLUE.baseAnnual);
  });

  it("recommends Team plan for 25 competitors regardless of seat count", () => {
    const r = calculateCostComparison({
      competitors: 25,
      teamSize: 2,
      annualBilling: true,
    });
    expect(r.recommendedPlan.key).toBe("TEAM");
    expect(r.recommendedPlan.monthlyPrice).toBe(KOMPWATCH_PLANS.TEAM.monthlyPrice);
  });

  it("keeps enterprise figures in sync with /compare pages (Klue $30K base, Crayon $28,750 base)", () => {
    // Regression guard: if anyone tweaks KLUE/CRAYON baseAnnual without
    // updating /compare/kompwatch-vs-klue and /compare/kompwatch-vs-crayon
    // pages, this test fails so we notice the inconsistency.
    expect(KLUE.baseAnnual).toBe(30_000);
    expect(CRAYON.baseAnnual).toBe(28_750);
  });
});

describe("formatCurrencyShort", () => {
  it("formats whole-dollar amounts with thousands separators", () => {
    expect(formatCurrencyShort(0)).toBe("$0");
    expect(formatCurrencyShort(588)).toBe("$588");
    expect(formatCurrencyShort(28_750)).toBe("$28,750");
    expect(formatCurrencyShort(1_000_000)).toBe("$1,000,000");
  });

  it("returns an em-dash placeholder for non-finite amounts", () => {
    expect(formatCurrencyShort(Infinity)).toBe("—");
    expect(formatCurrencyShort(-Infinity)).toBe("—");
    expect(formatCurrencyShort(NaN)).toBe("—");
  });
});
