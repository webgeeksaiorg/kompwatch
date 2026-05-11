import { describe, it, expect } from "vitest";
import {
  calculateRoi,
  formatCurrency,
  recommendPlan,
  KOMPWATCH_AUTOMATION_RATIO,
  WEEKS_PER_MONTH,
  PLAN_TIERS,
} from "@/lib/roi-calculator";

describe("recommendPlan", () => {
  it("recommends Free for ≤2 competitors", () => {
    expect(recommendPlan(1).key).toBe("FREE");
    expect(recommendPlan(2).key).toBe("FREE");
  });

  it("recommends Pro for 3–10 competitors", () => {
    expect(recommendPlan(3).key).toBe("PRO");
    expect(recommendPlan(10).key).toBe("PRO");
  });

  it("recommends Team for 11–50 competitors", () => {
    expect(recommendPlan(11).key).toBe("TEAM");
    expect(recommendPlan(50).key).toBe("TEAM");
  });

  it("recommends Enterprise above 50 competitors", () => {
    expect(recommendPlan(51).key).toBe("ENTERPRISE");
    expect(recommendPlan(500).key).toBe("ENTERPRISE");
  });
});

describe("calculateRoi", () => {
  it("computes manual hours and cost from hours/week × weeks/month", () => {
    const r = calculateRoi({ competitors: 5, hoursPerWeek: 3, hourlyRate: 75 });
    expect(r.manualHoursPerMonth).toBeCloseTo(3 * WEEKS_PER_MONTH, 5);
    expect(r.manualCostPerMonth).toBeCloseTo(3 * WEEKS_PER_MONTH * 75, 5);
  });

  it("applies KOMPWATCH_AUTOMATION_RATIO to compute hours saved", () => {
    const r = calculateRoi({ competitors: 5, hoursPerWeek: 10, hourlyRate: 50 });
    expect(r.hoursSavedPerMonth).toBeCloseTo(
      10 * WEEKS_PER_MONTH * KOMPWATCH_AUTOMATION_RATIO,
      5
    );
    expect(r.dollarsSavedPerMonth).toBeCloseTo(
      10 * WEEKS_PER_MONTH * KOMPWATCH_AUTOMATION_RATIO * 50,
      5
    );
  });

  it("annualizes monthly savings", () => {
    const r = calculateRoi({ competitors: 5, hoursPerWeek: 4, hourlyRate: 60 });
    expect(r.dollarsSavedPerYear).toBeCloseTo(r.dollarsSavedPerMonth * 12, 5);
  });

  it("recommends Pro plan for 5 competitors and computes net savings", () => {
    const r = calculateRoi({ competitors: 5, hoursPerWeek: 3, hourlyRate: 75 });
    expect(r.recommendedPlan.key).toBe("PRO");
    expect(r.recommendedPlan.monthlyPrice).toBe(49);
    expect(r.netMonthlySavings).toBeCloseTo(r.dollarsSavedPerMonth - 49, 5);
  });

  it("returns Infinity ROI multiple when plan is free", () => {
    const r = calculateRoi({ competitors: 2, hoursPerWeek: 5, hourlyRate: 50 });
    expect(r.recommendedPlan.key).toBe("FREE");
    expect(r.roiMultiple).toBe(Infinity);
    expect(r.paybackDays).toBe(0);
  });

  it("computes positive ROI multiple for paid plans with monitoring time", () => {
    const r = calculateRoi({ competitors: 8, hoursPerWeek: 4, hourlyRate: 75 });
    expect(r.recommendedPlan.key).toBe("PRO");
    expect(r.roiMultiple).toBeGreaterThan(1);
    expect(r.paybackDays).toBeGreaterThan(0);
    expect(r.paybackDays).toBeLessThan(30);
  });

  it("clamps competitors to at least 1", () => {
    const r = calculateRoi({ competitors: 0, hoursPerWeek: 3, hourlyRate: 75 });
    expect(r.recommendedPlan.key).toBe("FREE");
  });

  it("returns zero savings for zero hours per week", () => {
    const r = calculateRoi({ competitors: 5, hoursPerWeek: 0, hourlyRate: 75 });
    expect(r.dollarsSavedPerMonth).toBe(0);
    expect(r.paybackDays).toBe(0);
  });

  it("treats negative inputs as their absolute zero floor", () => {
    const r = calculateRoi({ competitors: -3, hoursPerWeek: -2, hourlyRate: -50 });
    expect(r.manualHoursPerMonth).toBe(0);
    expect(r.dollarsSavedPerMonth).toBe(0);
    expect(r.recommendedPlan.key).toBe("FREE");
  });

  it("recommends Team plan for mid-size CI program (25 competitors)", () => {
    const r = calculateRoi({ competitors: 25, hoursPerWeek: 10, hourlyRate: 100 });
    expect(r.recommendedPlan.key).toBe("TEAM");
    expect(r.recommendedPlan.monthlyPrice).toBe(149);
  });
});

describe("formatCurrency", () => {
  it("rounds and adds thousands separators", () => {
    expect(formatCurrency(0)).toBe("$0");
    expect(formatCurrency(49.4)).toBe("$49");
    expect(formatCurrency(1234.56)).toBe("$1,235");
    expect(formatCurrency(1_000_000)).toBe("$1,000,000");
  });
});

describe("PLAN_TIERS", () => {
  it("orders tiers by ascending price and competitor capacity", () => {
    const prices = PLAN_TIERS.map((p) => p.monthlyPrice);
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });
});
