import { describe, it, expect } from "vitest";
import {
  ANNUAL_DISCOUNT,
  getDisplayPrice,
  getPerCompetitorPrice,
} from "@/lib/pricing";

describe("pricing helpers", () => {
  it("ANNUAL_DISCOUNT is 20%", () => {
    expect(ANNUAL_DISCOUNT).toBe(0.2);
  });

  describe("getDisplayPrice", () => {
    it("returns 0 for free plan regardless of toggle", () => {
      expect(getDisplayPrice(0, false)).toBe(0);
      expect(getDisplayPrice(0, true)).toBe(0);
    });

    it("returns full monthly price when annual=false", () => {
      expect(getDisplayPrice(49, false)).toBe(49);
      expect(getDisplayPrice(149, false)).toBe(149);
    });

    it("applies 20% discount when annual=true", () => {
      expect(getDisplayPrice(49, true)).toBe(39); // 49*0.8 = 39.2 → 39
      expect(getDisplayPrice(149, true)).toBe(119); // 149*0.8 = 119.2 → 119
      expect(getDisplayPrice(799, true)).toBe(639); // 799*0.8 = 639.2 → 639
    });
  });

  describe("getPerCompetitorPrice — cost anchor", () => {
    it("returns null for Free tier (monthlyPrice=0)", () => {
      expect(getPerCompetitorPrice(0, 2, false)).toBeNull();
      expect(getPerCompetitorPrice(0, 2, true)).toBeNull();
    });

    it("returns null for Enterprise (unlimited competitors)", () => {
      expect(getPerCompetitorPrice(799, null, false)).toBeNull();
      expect(getPerCompetitorPrice(799, null, true)).toBeNull();
    });

    it("Pro monthly = $4.90/competitor (49/10)", () => {
      expect(getPerCompetitorPrice(49, 10, false)).toBe("4.90");
    });

    it("Pro annual = $3.92/competitor (49*0.8/10)", () => {
      expect(getPerCompetitorPrice(49, 10, true)).toBe("3.92");
    });

    it("Team monthly = $2.98/competitor (149/50)", () => {
      expect(getPerCompetitorPrice(149, 50, false)).toBe("2.98");
    });

    it("Team annual = $2.38/competitor (149*0.8/50)", () => {
      expect(getPerCompetitorPrice(149, 50, true)).toBe("2.38");
    });

    it("anchor is materially cheaper than enterprise tools (~$100/competitor)", () => {
      // Sanity guard: per-competitor on Pro/Team should remain <$10
      // so the anchor stays defensible vs Crayon/Klue.
      const proMo = parseFloat(getPerCompetitorPrice(49, 10, false)!);
      const teamMo = parseFloat(getPerCompetitorPrice(149, 50, false)!);
      expect(proMo).toBeLessThan(10);
      expect(teamMo).toBeLessThan(10);
    });
  });
});
