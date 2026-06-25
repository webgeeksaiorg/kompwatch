/**
 * Enterprise-CI cost-comparison math for the /pricing calculator.
 *
 * Companion to `roi-calculator.ts` (which frames KompWatch vs an analyst FTE).
 * This module frames KompWatch vs the two market-leading CI vendors (Klue and
 * Crayon) and answers the top G2 complaint for both: "expensive".
 *
 * Canonical source figures (kept in sync with the /compare/* pages so we don't
 * publish conflicting numbers on the same site):
 *   - Klue:   $20K–$40K/yr range, median ~$30K. Source: /compare/kompwatch-vs-klue
 *             (vendr + paranoa public data, 2025–2026). Annual contracts required.
 *   - Crayon: $28,750/yr median, range $5K–$80K+. Source:
 *             /compare/kompwatch-vs-crayon (vendr.com data, 2025).
 *
 * Both vendors charge per seat above an initial bundle. We model that as a
 * fixed base + per-seat add-on so the calculator responds to team-size input
 * without overstating the multiplier for tiny teams.
 *
 * KompWatch pricing mirrors `lib/roi-calculator.ts` PLAN_TIERS, but here we
 * also expose annual billing (20% discount) because that's the apples-to-apples
 * comparison against the enterprise tools' mandatory annual contracts.
 */

// 20% annual discount on KompWatch — matches lib/pricing.ts ANNUAL_DISCOUNT.
export const KOMPWATCH_ANNUAL_DISCOUNT = 0.2;

// Recommended plan boundaries — match recommendPlan() in roi-calculator.ts.
export const PLAN_BOUNDARIES = {
  FREE_MAX_COMPETITORS: 2,
  PRO_MAX_COMPETITORS: 10,
  TEAM_MAX_COMPETITORS: 50,
} as const;

export const KOMPWATCH_PLANS = {
  FREE: { key: "FREE", name: "Free", monthlyPrice: 0 },
  PRO: { key: "PRO", name: "Pro", monthlyPrice: 49 },
  TEAM: { key: "TEAM", name: "Team", monthlyPrice: 149 },
  ENTERPRISE: { key: "ENTERPRISE", name: "Enterprise", monthlyPrice: 799 },
} as const;

export type KompwatchPlanKey = keyof typeof KOMPWATCH_PLANS;

/**
 * Vendor pricing model. baseAnnual covers the bundled seats included in the
 * starting contract; perSeatAnnual is the per-seat add-on above the bundle.
 * These are deliberately conservative midpoints from publicly-reported figures
 * — see /compare/kompwatch-vs-klue and /compare/kompwatch-vs-crayon.
 */
export interface VendorPricing {
  name: string;
  /** Annual cost for the entry contract (typically includes 3 seats). */
  baseAnnual: number;
  /** Seats included in baseAnnual before per-seat charges kick in. */
  seatsIncluded: number;
  /** Per-seat annual surcharge above the bundle. */
  perSeatAnnual: number;
  /** Display range, used for the source citation footer. */
  rangeLabel: string;
}

export const KLUE: VendorPricing = {
  name: "Klue",
  baseAnnual: 30_000,
  seatsIncluded: 3,
  perSeatAnnual: 2_000,
  rangeLabel: "$20K–$40K/yr",
};

export const CRAYON: VendorPricing = {
  name: "Crayon",
  baseAnnual: 28_750,
  seatsIncluded: 3,
  perSeatAnnual: 2_000,
  rangeLabel: "$5K–$80K+/yr (median $28,750)",
};

export interface CostCalculatorInput {
  /** Number of competitors the team wants to monitor. */
  competitors: number;
  /** Number of seats / team members who need access. */
  teamSize: number;
  /** Annual billing applies the 20% KompWatch annual discount. */
  annualBilling: boolean;
}

export interface VendorQuote {
  vendor: string;
  annualCost: number;
  rangeLabel: string;
}

export interface CostCalculatorResult {
  recommendedPlan: {
    key: KompwatchPlanKey;
    name: string;
    monthlyPrice: number;
  };
  /** KompWatch monthly price after the annual discount (if applicable). */
  kompwatchMonthlyEffective: number;
  /** KompWatch annual cost (billed monthly × 12, or with the 20% annual discount). */
  kompwatchAnnualCost: number;
  /** Klue cost for this configuration. */
  klue: VendorQuote;
  /** Crayon cost for this configuration. */
  crayon: VendorQuote;
  /** Median of {Klue, Crayon} — used as the headline "vs enterprise" number. */
  enterpriseMedianAnnual: number;
  /** Annual savings vs the enterprise median (clamped at 0 for Free plan parity). */
  annualSavings: number;
  /** How many times more expensive the enterprise median is than KompWatch. */
  multiplier: number; // e.g. 50 means "50× cheaper"
  /** "97%" style cheaper-by ratio for headline copy. */
  cheaperByPercent: number; // 0–100
}

export function recommendKompwatchPlan(
  competitors: number,
  teamSize: number
): { key: KompwatchPlanKey; name: string; monthlyPrice: number } {
  const c = Math.max(1, Math.floor(competitors));
  const s = Math.max(1, Math.floor(teamSize));

  // Free tier is single-seat by design — any team larger pushes to Pro.
  if (c <= PLAN_BOUNDARIES.FREE_MAX_COMPETITORS && s === 1) {
    return KOMPWATCH_PLANS.FREE;
  }
  if (c <= PLAN_BOUNDARIES.PRO_MAX_COMPETITORS && s <= 3) {
    return KOMPWATCH_PLANS.PRO;
  }
  if (c <= PLAN_BOUNDARIES.TEAM_MAX_COMPETITORS) {
    return KOMPWATCH_PLANS.TEAM;
  }
  return KOMPWATCH_PLANS.ENTERPRISE;
}

export function vendorAnnualCost(
  vendor: VendorPricing,
  teamSize: number
): number {
  const seats = Math.max(1, Math.floor(teamSize));
  const extraSeats = Math.max(0, seats - vendor.seatsIncluded);
  return vendor.baseAnnual + extraSeats * vendor.perSeatAnnual;
}

export function calculateCostComparison(
  input: CostCalculatorInput
): CostCalculatorResult {
  const competitors = Math.max(1, Math.floor(input.competitors));
  const teamSize = Math.max(1, Math.floor(input.teamSize));

  const recommendedPlan = recommendKompwatchPlan(competitors, teamSize);

  const monthlyList = recommendedPlan.monthlyPrice;
  const kompwatchMonthlyEffective =
    input.annualBilling && monthlyList > 0
      ? Math.round(monthlyList * (1 - KOMPWATCH_ANNUAL_DISCOUNT))
      : monthlyList;
  const kompwatchAnnualCost = kompwatchMonthlyEffective * 12;

  const klueAnnual = vendorAnnualCost(KLUE, teamSize);
  const crayonAnnual = vendorAnnualCost(CRAYON, teamSize);
  const enterpriseMedianAnnual = Math.round((klueAnnual + crayonAnnual) / 2);

  const annualSavings = Math.max(0, enterpriseMedianAnnual - kompwatchAnnualCost);
  // For the Free plan (kompwatch = $0), multiplier is Infinity — clamp display
  // at the consumer end. Math itself stays unbounded so tests can assert.
  const multiplier =
    kompwatchAnnualCost === 0
      ? Infinity
      : enterpriseMedianAnnual / kompwatchAnnualCost;
  const cheaperByPercent =
    enterpriseMedianAnnual === 0
      ? 0
      : Math.round((1 - kompwatchAnnualCost / enterpriseMedianAnnual) * 100);

  return {
    recommendedPlan,
    kompwatchMonthlyEffective,
    kompwatchAnnualCost,
    klue: {
      vendor: KLUE.name,
      annualCost: klueAnnual,
      rangeLabel: KLUE.rangeLabel,
    },
    crayon: {
      vendor: CRAYON.name,
      annualCost: crayonAnnual,
      rangeLabel: CRAYON.rangeLabel,
    },
    enterpriseMedianAnnual,
    annualSavings,
    multiplier,
    cheaperByPercent,
  };
}

export function formatCurrencyShort(amount: number): string {
  if (!isFinite(amount)) return "—";
  const rounded = Math.round(amount);
  return `$${rounded.toLocaleString("en-US")}`;
}
