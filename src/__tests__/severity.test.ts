import { describe, it, expect } from "vitest";
import {
  SEVERITY_ORDER,
  SEVERITY_RANK,
  severitiesAtOrAbove,
  severityMeetsThreshold,
} from "@/lib/severity";

describe("SEVERITY_ORDER", () => {
  it("orders severities from least to most severe", () => {
    expect(SEVERITY_ORDER).toEqual(["LOW", "MEDIUM", "HIGH", "CRITICAL"]);
  });

  it("rank values are monotonically increasing", () => {
    expect(SEVERITY_RANK.LOW).toBeLessThan(SEVERITY_RANK.MEDIUM);
    expect(SEVERITY_RANK.MEDIUM).toBeLessThan(SEVERITY_RANK.HIGH);
    expect(SEVERITY_RANK.HIGH).toBeLessThan(SEVERITY_RANK.CRITICAL);
  });
});

describe("severitiesAtOrAbove", () => {
  it("returns all severities when threshold is LOW", () => {
    expect(severitiesAtOrAbove("LOW")).toEqual(["LOW", "MEDIUM", "HIGH", "CRITICAL"]);
  });

  it("excludes LOW when threshold is MEDIUM", () => {
    expect(severitiesAtOrAbove("MEDIUM")).toEqual(["MEDIUM", "HIGH", "CRITICAL"]);
  });

  it("returns HIGH and CRITICAL when threshold is HIGH", () => {
    expect(severitiesAtOrAbove("HIGH")).toEqual(["HIGH", "CRITICAL"]);
  });

  it("returns only CRITICAL when threshold is CRITICAL", () => {
    expect(severitiesAtOrAbove("CRITICAL")).toEqual(["CRITICAL"]);
  });

  it("returns a fresh array each call (callers may mutate)", () => {
    const a = severitiesAtOrAbove("MEDIUM");
    const b = severitiesAtOrAbove("MEDIUM");
    expect(a).not.toBe(b);
    expect(a).toEqual(b);
  });
});

describe("severityMeetsThreshold", () => {
  it("equal severities pass the threshold", () => {
    expect(severityMeetsThreshold("HIGH", "HIGH")).toBe(true);
    expect(severityMeetsThreshold("LOW", "LOW")).toBe(true);
  });

  it("higher severity passes a lower threshold", () => {
    expect(severityMeetsThreshold("CRITICAL", "HIGH")).toBe(true);
    expect(severityMeetsThreshold("HIGH", "MEDIUM")).toBe(true);
    expect(severityMeetsThreshold("MEDIUM", "LOW")).toBe(true);
  });

  it("lower severity fails a higher threshold", () => {
    expect(severityMeetsThreshold("MEDIUM", "HIGH")).toBe(false);
    expect(severityMeetsThreshold("LOW", "MEDIUM")).toBe(false);
    expect(severityMeetsThreshold("HIGH", "CRITICAL")).toBe(false);
  });
});
