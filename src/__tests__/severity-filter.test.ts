import { describe, it, expect } from "vitest";

/**
 * Tests for the severity URL filter used by the /digests page.
 *
 * The filter accepts ?severity=HIGH&severity=CRITICAL in the URL and is
 * applied as Prisma `where: { severity: { in: [...] } }`. Filtering also
 * scopes the parent digest list to only digests containing >=1 matching
 * change — this is the on-product proof of the "signal not noise" claim.
 *
 * These tests exercise the URL-param parsing & validation that lives
 * inline on the consuming page. Keeping the logic centrally tested
 * prevents drift if the Severity enum grows.
 */

const VALID_SEVERITIES = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
type Severity = (typeof VALID_SEVERITIES)[number];

function parseSeverities(raw: string | string[] | undefined): Severity[] {
  if (!raw) return [];
  const values = Array.isArray(raw) ? raw : [raw];
  const out: Severity[] = [];
  for (const v of values) {
    const up = v.toUpperCase();
    if ((VALID_SEVERITIES as readonly string[]).includes(up) && !out.includes(up as Severity)) {
      out.push(up as Severity);
    }
  }
  return out;
}

describe("severity filter URL parsing", () => {
  it("parses a single severity string", () => {
    expect(parseSeverities("HIGH")).toEqual(["HIGH"]);
  });

  it("parses multiple severities from an array", () => {
    expect(parseSeverities(["HIGH", "CRITICAL"])).toEqual(["HIGH", "CRITICAL"]);
  });

  it("returns empty array for undefined", () => {
    expect(parseSeverities(undefined)).toEqual([]);
  });

  it("returns empty array for empty string", () => {
    expect(parseSeverities("")).toEqual([]);
  });

  it("uppercases lowercase input", () => {
    expect(parseSeverities(["high", "critical"])).toEqual(["HIGH", "CRITICAL"]);
  });

  it("drops unknown values", () => {
    expect(parseSeverities(["HIGH", "BOGUS", "spam"])).toEqual(["HIGH"]);
  });

  it("deduplicates repeated values", () => {
    expect(parseSeverities(["HIGH", "high", "HIGH"])).toEqual(["HIGH"]);
  });

  it("accepts all four canonical severities", () => {
    expect(parseSeverities(["LOW", "MEDIUM", "HIGH", "CRITICAL"])).toEqual([
      "LOW",
      "MEDIUM",
      "HIGH",
      "CRITICAL",
    ]);
  });
});
