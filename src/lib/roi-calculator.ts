/**
 * Pure ROI math for the marketing pricing-page calculator.
 *
 * Separate from `roi.ts` (which generates per-user reports from the database).
 * This module is small, deterministic, and easy to unit-test so the pricing
 * widget can render confident "you save $X/mo" numbers.
 */

// 4.33 weeks per month (52 / 12) — standard SaaS conversion factor.
export const WEEKS_PER_MONTH = 52 / 12;

// Industry-standard claim for automated CI tools: ~80% of manual monitoring
// time is replaced. Conservative vs vendor claims (Crayon cites 95%+).
export const KOMPWATCH_AUTOMATION_RATIO = 0.8;

export type RecommendedPlan = {
  key: "FREE" | "PRO" | "TEAM" | "ENTERPRISE";
  name: string;
  monthlyPrice: number;
  competitorsIncluded: number | null; // null = unlimited
};

export const PLAN_TIERS: RecommendedPlan[] = [
  { key: "FREE", name: "Free", monthlyPrice: 0, competitorsIncluded: 2 },
  { key: "PRO", name: "Pro", monthlyPrice: 49, competitorsIncluded: 10 },
  { key: "TEAM", name: "Team", monthlyPrice: 149, competitorsIncluded: 50 },
  { key: "ENTERPRISE", name: "Enterprise", monthlyPrice: 799, competitorsIncluded: null },
];

export interface CalculatorInput {
  competitors: number;
  hoursPerWeek: number;
  hourlyRate: number;
}

export interface CalculatorResult {
  manualHoursPerMonth: number;
  manualCostPerMonth: number;
  hoursSavedPerMonth: number;
  dollarsSavedPerMonth: number;
  dollarsSavedPerYear: number;
  recommendedPlan: RecommendedPlan;
  netMonthlySavings: number;
  roiMultiple: number; // dollarsSaved / planCost; Infinity for free plan
  paybackDays: number; // how many days until plan pays for itself; 0 for free
}

export function recommendPlan(competitors: number): RecommendedPlan {
  for (const tier of PLAN_TIERS) {
    if (tier.competitorsIncluded === null) return tier;
    if (competitors <= tier.competitorsIncluded) return tier;
  }
  return PLAN_TIERS[PLAN_TIERS.length - 1];
}

export function calculateRoi(input: CalculatorInput): CalculatorResult {
  const competitors = Math.max(1, Math.floor(input.competitors));
  const hoursPerWeek = Math.max(0, input.hoursPerWeek);
  const hourlyRate = Math.max(0, input.hourlyRate);

  const manualHoursPerMonth = hoursPerWeek * WEEKS_PER_MONTH;
  const manualCostPerMonth = manualHoursPerMonth * hourlyRate;
  const hoursSavedPerMonth = manualHoursPerMonth * KOMPWATCH_AUTOMATION_RATIO;
  const dollarsSavedPerMonth = hoursSavedPerMonth * hourlyRate;
  const dollarsSavedPerYear = dollarsSavedPerMonth * 12;

  const recommendedPlan = recommendPlan(competitors);
  const planCost = recommendedPlan.monthlyPrice;
  const netMonthlySavings = dollarsSavedPerMonth - planCost;
  const roiMultiple = planCost === 0 ? Infinity : dollarsSavedPerMonth / planCost;
  const paybackDays =
    planCost === 0 || dollarsSavedPerMonth === 0
      ? 0
      : (planCost / dollarsSavedPerMonth) * 30;

  return {
    manualHoursPerMonth,
    manualCostPerMonth,
    hoursSavedPerMonth,
    dollarsSavedPerMonth,
    dollarsSavedPerYear,
    recommendedPlan,
    netMonthlySavings,
    roiMultiple,
    paybackDays,
  };
}

export function formatCurrency(amount: number): string {
  const rounded = Math.round(amount);
  return `$${rounded.toLocaleString("en-US")}`;
}
