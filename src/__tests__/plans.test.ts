import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  PLANS,
  planAllowsWebhooks,
  planAllowsInstantAlerts,
  getPriceId,
  planFromStripePriceId,
  validateSubscriptionAmount,
} from "@/lib/stripe";

describe("PLANS — tier limits", () => {
  it("FREE tier allows 2 competitors", () => {
    expect(PLANS.FREE.competitors).toBe(2);
  });

  it("PRO tier allows 10 competitors", () => {
    expect(PLANS.PRO.competitors).toBe(10);
  });

  it("TEAM tier allows 50 competitors", () => {
    expect(PLANS.TEAM.competitors).toBe(50);
  });

  it("plan limits are strictly ascending", () => {
    expect(PLANS.FREE.competitors).toBeLessThan(PLANS.PRO.competitors);
    expect(PLANS.PRO.competitors).toBeLessThan(PLANS.TEAM.competitors);
  });

  it("FREE tier is free", () => {
    expect(PLANS.FREE.price).toBe(0);
  });

  it("PRO costs $49/mo", () => {
    expect(PLANS.PRO.price).toBe(49);
  });

  it("TEAM costs $149/mo", () => {
    expect(PLANS.TEAM.price).toBe(149);
  });
});

describe("plan feature gating", () => {
  it("FREE cannot use webhooks", () => {
    expect(planAllowsWebhooks("FREE")).toBe(false);
  });

  it("PRO can use webhooks", () => {
    expect(planAllowsWebhooks("PRO")).toBe(true);
  });

  it("TEAM can use webhooks", () => {
    expect(planAllowsWebhooks("TEAM")).toBe(true);
  });

  it("FREE cannot use instant alerts", () => {
    expect(planAllowsInstantAlerts("FREE")).toBe(false);
  });

  it("PRO cannot use instant alerts (Team-only)", () => {
    expect(planAllowsInstantAlerts("PRO")).toBe(false);
  });

  it("TEAM can use instant alerts", () => {
    expect(planAllowsInstantAlerts("TEAM")).toBe(true);
  });
});

describe("billing period → priceId resolution", () => {
  const original = {
    pro: process.env.STRIPE_PRICE_PRO,
    proAnnual: process.env.STRIPE_PRICE_PRO_ANNUAL,
    team: process.env.STRIPE_PRICE_TEAM,
    teamAnnual: process.env.STRIPE_PRICE_TEAM_ANNUAL,
  };

  beforeEach(() => {
    process.env.STRIPE_PRICE_PRO = "price_pro_monthly";
    process.env.STRIPE_PRICE_PRO_ANNUAL = "price_pro_annual";
    process.env.STRIPE_PRICE_TEAM = "price_team_monthly";
    process.env.STRIPE_PRICE_TEAM_ANNUAL = "price_team_annual";
  });

  afterEach(() => {
    process.env.STRIPE_PRICE_PRO = original.pro;
    process.env.STRIPE_PRICE_PRO_ANNUAL = original.proAnnual;
    process.env.STRIPE_PRICE_TEAM = original.team;
    process.env.STRIPE_PRICE_TEAM_ANNUAL = original.teamAnnual;
  });

  it("monthly billing returns the monthly price ID", () => {
    expect(getPriceId("PRO", "monthly")).toBe("price_pro_monthly");
    expect(getPriceId("TEAM", "monthly")).toBe("price_team_monthly");
  });

  it("annual billing returns the annual price ID when configured", () => {
    expect(getPriceId("PRO", "annual")).toBe("price_pro_annual");
    expect(getPriceId("TEAM", "annual")).toBe("price_team_annual");
  });

  it("annual falls back to monthly when annual price not configured", () => {
    delete process.env.STRIPE_PRICE_PRO_ANNUAL;
    delete process.env.STRIPE_PRICE_TEAM_ANNUAL;
    expect(getPriceId("PRO", "annual")).toBe("price_pro_monthly");
    expect(getPriceId("TEAM", "annual")).toBe("price_team_monthly");
  });

  it("planFromStripePriceId recognizes monthly Pro", () => {
    expect(planFromStripePriceId("price_pro_monthly")).toBe("PRO");
  });

  it("planFromStripePriceId recognizes annual Pro", () => {
    expect(planFromStripePriceId("price_pro_annual")).toBe("PRO");
  });

  it("planFromStripePriceId recognizes monthly Team", () => {
    expect(planFromStripePriceId("price_team_monthly")).toBe("TEAM");
  });

  it("planFromStripePriceId recognizes annual Team", () => {
    expect(planFromStripePriceId("price_team_annual")).toBe("TEAM");
  });

  it("planFromStripePriceId returns null for unknown price", () => {
    expect(planFromStripePriceId("price_unknown")).toBeNull();
  });
});

describe("validateSubscriptionAmount", () => {
  it("returns null for correct PRO monthly amount ($49)", () => {
    expect(validateSubscriptionAmount("PRO", 4900, "month")).toBeNull();
  });

  it("returns null for correct TEAM monthly amount ($149)", () => {
    expect(validateSubscriptionAmount("TEAM", 14900, "month")).toBeNull();
  });

  it("returns warning for wrong PRO monthly amount ($9.99)", () => {
    const warning = validateSubscriptionAmount("PRO", 999, "month");
    expect(warning).toContain("ARPU_MISMATCH");
    expect(warning).toContain("$9.99/mo");
    expect(warning).toContain("$49.00/mo");
  });

  it("returns warning for wrong TEAM monthly amount", () => {
    const warning = validateSubscriptionAmount("TEAM", 4900, "month");
    expect(warning).toContain("ARPU_MISMATCH");
    expect(warning).toContain("$49.00/mo");
    expect(warning).toContain("$149.00/mo");
  });

  it("returns null for correct PRO annual amount (20% discount)", () => {
    // $49 * 12 * 0.8 = $470.40
    expect(validateSubscriptionAmount("PRO", 47040, "year")).toBeNull();
  });

  it("returns null for correct TEAM annual amount (20% discount)", () => {
    // $149 * 12 * 0.8 = $1430.40
    expect(validateSubscriptionAmount("TEAM", 143040, "year")).toBeNull();
  });

  it("returns warning for wrong annual amount", () => {
    const warning = validateSubscriptionAmount("PRO", 9999, "year");
    expect(warning).toContain("ARPU_MISMATCH");
    expect(warning).toContain("annual");
  });

  it("priceCents matches price * 100 for all plans", () => {
    expect(PLANS.FREE.priceCents).toBe(PLANS.FREE.price * 100);
    expect(PLANS.PRO.priceCents).toBe(PLANS.PRO.price * 100);
    expect(PLANS.TEAM.priceCents).toBe(PLANS.TEAM.price * 100);
  });
});
