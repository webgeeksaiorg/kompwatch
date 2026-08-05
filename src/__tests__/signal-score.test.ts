import { describe, it, expect } from "vitest";
import {
  computeSignalScore,
  signalLabel,
  confidenceLabel,
  SIGNAL_THRESHOLDS,
} from "@/lib/signal-score";

describe("computeSignalScore", () => {
  it("returns high score for high-confidence critical pricing change", () => {
    const score = computeSignalScore({
      confidence: 95,
      severity: "CRITICAL",
      changeType: "PRICING",
      contentZone: "MONETIZATION",
      batchSize: 3,
    });
    expect(score).toBeGreaterThan(0.85);
    expect(score).toBeLessThanOrEqual(1.0);
  });

  it("returns low score for low-confidence general change with unknown zone", () => {
    const score = computeSignalScore({
      confidence: 30,
      severity: "LOW",
      changeType: "GENERAL",
      contentZone: "UNKNOWN",
      batchSize: 1,
    });
    expect(score).toBeLessThan(0.4);
  });

  it("corroboration bonus increases score for larger batches", () => {
    const base = {
      confidence: 60,
      severity: "MEDIUM" as const,
      changeType: "FEATURE" as const,
      contentZone: "PRODUCT" as const,
    };

    const single = computeSignalScore({ ...base, batchSize: 1 });
    const triple = computeSignalScore({ ...base, batchSize: 3 });

    expect(triple).toBeGreaterThan(single);
  });

  it("corroboration has diminishing returns beyond batch size 4", () => {
    const base = {
      confidence: 60,
      severity: "MEDIUM" as const,
      changeType: "FEATURE" as const,
      contentZone: "PRODUCT" as const,
    };

    const four = computeSignalScore({ ...base, batchSize: 4 });
    const ten = computeSignalScore({ ...base, batchSize: 10 });

    // Should be equal since corroboration caps at batchSize-1=3 delta
    expect(four).toEqual(ten);
  });

  it("score is always between 0 and 1", () => {
    // Edge case: extreme inputs
    const low = computeSignalScore({
      confidence: 0,
      severity: "LOW",
      changeType: "GENERAL",
      contentZone: "UNKNOWN",
      batchSize: 1,
    });
    expect(low).toBeGreaterThanOrEqual(0);
    expect(low).toBeLessThanOrEqual(1);

    const high = computeSignalScore({
      confidence: 100,
      severity: "CRITICAL",
      changeType: "PRICING",
      contentZone: "MONETIZATION",
      batchSize: 10,
    });
    expect(high).toBeGreaterThanOrEqual(0);
    expect(high).toBeLessThanOrEqual(1);
  });

  it("severity weight: HIGH scores higher than LOW for same inputs", () => {
    const base = {
      confidence: 70,
      changeType: "FEATURE" as const,
      contentZone: "PRODUCT" as const,
      batchSize: 2,
    };

    const high = computeSignalScore({ ...base, severity: "HIGH" });
    const low = computeSignalScore({ ...base, severity: "LOW" });

    expect(high).toBeGreaterThan(low);
  });

  it("change type reliability: PRICING scores higher than GENERAL", () => {
    const base = {
      confidence: 70,
      severity: "MEDIUM" as const,
      contentZone: "PRODUCT" as const,
      batchSize: 2,
    };

    const pricing = computeSignalScore({ ...base, changeType: "PRICING" });
    const general = computeSignalScore({ ...base, changeType: "GENERAL" });

    expect(pricing).toBeGreaterThan(general);
  });
});

describe("signalLabel", () => {
  it("returns null for strong signals (>=0.8)", () => {
    expect(signalLabel(0.85)).toBeNull();
    expect(signalLabel(1.0)).toBeNull();
  });

  it("returns Moderate for scores 0.6–0.79", () => {
    const label = signalLabel(0.65);
    expect(label?.text).toBe("Moderate");
  });

  it("returns Weak for scores 0.4–0.59", () => {
    const label = signalLabel(0.45);
    expect(label?.text).toBe("Weak");
  });

  it("returns Noise for scores below 0.4", () => {
    const label = signalLabel(0.2);
    expect(label?.text).toBe("Noise");
  });
});

describe("SIGNAL_THRESHOLDS", () => {
  it("PERSIST threshold is lower than INSTANT_ALERT", () => {
    expect(SIGNAL_THRESHOLDS.PERSIST).toBeLessThan(SIGNAL_THRESHOLDS.INSTANT_ALERT);
  });

  it("a noisy change is filtered by PERSIST threshold", () => {
    const score = computeSignalScore({
      confidence: 20,
      severity: "LOW",
      changeType: "GENERAL",
      contentZone: "UNKNOWN",
      batchSize: 1,
    });
    expect(score).toBeLessThan(SIGNAL_THRESHOLDS.PERSIST);
  });

  it("a strong change passes INSTANT_ALERT threshold", () => {
    const score = computeSignalScore({
      confidence: 90,
      severity: "HIGH",
      changeType: "PRICING",
      contentZone: "MONETIZATION",
      batchSize: 2,
    });
    expect(score).toBeGreaterThanOrEqual(SIGNAL_THRESHOLDS.INSTANT_ALERT);
  });
});

describe("confidenceLabel (ticket 36f)", () => {
  it("returns null for near-certain confidence (>=0.95)", () => {
    expect(confidenceLabel(0.95)).toBeNull();
    expect(confidenceLabel(0.98)).toBeNull();
    expect(confidenceLabel(1.0)).toBeNull();
  });

  it("returns 'high' tone for scores 0.80–0.94", () => {
    const label = confidenceLabel(0.82);
    expect(label).not.toBeNull();
    expect(label?.tone).toBe("high");
    expect(label?.percent).toBe(82);
    expect(label?.text).toBe("AI 82%");
    expect(label?.className).toContain("emerald");
  });

  it("returns 'medium' tone for scores 0.60–0.79", () => {
    const label = confidenceLabel(0.7);
    expect(label?.tone).toBe("medium");
    expect(label?.percent).toBe(70);
    expect(label?.text).toBe("AI 70%");
    expect(label?.className).toContain("amber");
  });

  it("returns 'low' tone for scores below 0.60", () => {
    const label = confidenceLabel(0.4);
    expect(label?.tone).toBe("low");
    expect(label?.percent).toBe(40);
    expect(label?.text).toBe("AI 40%");
    expect(label?.className).toContain("gray");
  });

  it("clamps out-of-range scores and renders as percent", () => {
    // 1.2 is clamped upward but silent (>=0.95)
    expect(confidenceLabel(1.2)).toBeNull();
    // Negative confidence: shouldn't crash — treat as low
    const neg = confidenceLabel(-0.1);
    expect(neg?.tone).toBe("low");
    expect(neg?.percent).toBe(0);
  });

  it("returns null for non-numeric/NaN inputs", () => {
    expect(confidenceLabel(Number.NaN)).toBeNull();
    // @ts-expect-error runtime safety: undefined shouldn't crash
    expect(confidenceLabel(undefined)).toBeNull();
  });

  it("boundary transitions: exactly 0.6, 0.8, 0.95", () => {
    expect(confidenceLabel(0.6)?.tone).toBe("medium");
    expect(confidenceLabel(0.8)?.tone).toBe("high");
    expect(confidenceLabel(0.95)).toBeNull();
    expect(confidenceLabel(0.5999)?.tone).toBe("low");
    expect(confidenceLabel(0.7999)?.tone).toBe("medium");
    expect(confidenceLabel(0.9499)?.tone).toBe("high");
  });
});
