import { describe, it, expect } from "vitest";
import { computeSignalScore } from "@/lib/signal-score";

/**
 * Tests for content zone classification and filtering.
 * Validates that zone-based signal scoring correctly differentiates
 * between high-actionability and low-actionability zones, and that
 * the zone validation logic works correctly.
 */

const VALID_ZONES = [
  "POSITIONING",
  "MONETIZATION",
  "PRODUCT",
  "MARKETING",
  "TALENT",
  "LEGAL",
  "OPERATIONS",
] as const;

describe("content zone classification", () => {
  it("MONETIZATION zone scores higher than MARKETING for same inputs", () => {
    const base = {
      confidence: 70,
      severity: "MEDIUM" as const,
      changeType: "PRICING" as const,
      batchSize: 2,
    };

    const monetization = computeSignalScore({ ...base, contentZone: "MONETIZATION" });
    const marketing = computeSignalScore({ ...base, contentZone: "MARKETING" });

    expect(monetization).toBeGreaterThan(marketing);
  });

  it("PRODUCT zone scores higher than UNKNOWN", () => {
    const base = {
      confidence: 70,
      severity: "MEDIUM" as const,
      changeType: "FEATURE" as const,
      batchSize: 2,
    };

    const product = computeSignalScore({ ...base, contentZone: "PRODUCT" });
    const unknown = computeSignalScore({ ...base, contentZone: "UNKNOWN" });

    expect(product).toBeGreaterThan(unknown);
  });

  it("all valid zones produce scores in [0, 1]", () => {
    for (const zone of VALID_ZONES) {
      const score = computeSignalScore({
        confidence: 60,
        severity: "MEDIUM",
        changeType: "FEATURE",
        contentZone: zone,
        batchSize: 1,
      });
      expect(score).toBeGreaterThanOrEqual(0);
      expect(score).toBeLessThanOrEqual(1);
    }
  });

  it("zone importance ordering: MONETIZATION > PRODUCT > POSITIONING > TALENT > LEGAL > OPERATIONS > MARKETING > UNKNOWN", () => {
    const base = {
      confidence: 70,
      severity: "MEDIUM" as const,
      changeType: "FEATURE" as const,
      batchSize: 2,
    };

    const scores = {
      MONETIZATION: computeSignalScore({ ...base, contentZone: "MONETIZATION" }),
      PRODUCT: computeSignalScore({ ...base, contentZone: "PRODUCT" }),
      POSITIONING: computeSignalScore({ ...base, contentZone: "POSITIONING" }),
      TALENT: computeSignalScore({ ...base, contentZone: "TALENT" }),
      LEGAL: computeSignalScore({ ...base, contentZone: "LEGAL" }),
      OPERATIONS: computeSignalScore({ ...base, contentZone: "OPERATIONS" }),
      MARKETING: computeSignalScore({ ...base, contentZone: "MARKETING" }),
      UNKNOWN: computeSignalScore({ ...base, contentZone: "UNKNOWN" }),
    };

    expect(scores.MONETIZATION).toBeGreaterThan(scores.PRODUCT);
    expect(scores.PRODUCT).toBeGreaterThan(scores.POSITIONING);
    expect(scores.POSITIONING).toBeGreaterThan(scores.TALENT);
    expect(scores.TALENT).toBeGreaterThan(scores.LEGAL);
    expect(scores.LEGAL).toBeGreaterThan(scores.OPERATIONS);
    expect(scores.OPERATIONS).toBeGreaterThan(scores.MARKETING);
    expect(scores.MARKETING).toBeGreaterThan(scores.UNKNOWN);
  });
});

describe("zone filter URL parsing", () => {
  const VALID_ZONE_SET: Set<string> = new Set(VALID_ZONES);

  function parseZoneParams(
    raw: string | string[] | undefined,
  ): string[] {
    const arr = Array.isArray(raw) ? raw : raw ? [raw] : [];
    return arr.filter((z) => VALID_ZONE_SET.has(z));
  }

  it("parses single zone string", () => {
    expect(parseZoneParams("PRODUCT")).toEqual(["PRODUCT"]);
  });

  it("parses multiple zones from array", () => {
    expect(parseZoneParams(["PRODUCT", "MONETIZATION"])).toEqual([
      "PRODUCT",
      "MONETIZATION",
    ]);
  });

  it("returns empty array for undefined", () => {
    expect(parseZoneParams(undefined)).toEqual([]);
  });

  it("filters out invalid zone values", () => {
    expect(parseZoneParams(["PRODUCT", "INVALID", "MONETIZATION"])).toEqual([
      "PRODUCT",
      "MONETIZATION",
    ]);
  });

  it("filters out UNKNOWN (not user-selectable)", () => {
    expect(parseZoneParams(["UNKNOWN"])).toEqual([]);
  });
});
