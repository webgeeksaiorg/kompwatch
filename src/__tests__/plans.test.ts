import { describe, it, expect } from "vitest";
import { PLANS, planAllowsWebhooks, planAllowsInstantAlerts } from "@/lib/stripe";

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
