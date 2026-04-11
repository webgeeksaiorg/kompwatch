import { describe, it, expect } from "vitest";
import { PLANS } from "@/lib/stripe";

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
