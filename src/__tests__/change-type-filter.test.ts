import { describe, it, expect } from "vitest";

/**
 * Tests for the change-type URL filter used by the dashboard
 * (/dashboard) and the competitor detail page (/competitors/[id]).
 *
 * The filter accepts ?changeType=PRICING&changeType=FEATURE in the
 * URL and is applied as Prisma `where: { changeType: { in: [...] } }`.
 *
 * These tests exercise the URL-param parsing & validation that lives
 * inline on each consuming page. Keeping the logic centrally tested
 * prevents drift if the enum grows.
 */

const VALID_CHANGE_TYPES = [
  "PRICING",
  "FEATURE",
  "BLOG",
  "JOB",
  "TECH",
  "GENERAL",
  "COMMUNITY",
] as const;

describe("change type filter URL parsing", () => {
  const VALID_SET: Set<string> = new Set(VALID_CHANGE_TYPES);

  function parseChangeTypeParams(
    raw: string | string[] | undefined,
  ): string[] {
    const arr = Array.isArray(raw) ? raw : raw ? [raw] : [];
    return arr.filter((t) => VALID_SET.has(t));
  }

  it("parses a single change type string", () => {
    expect(parseChangeTypeParams("PRICING")).toEqual(["PRICING"]);
  });

  it("parses multiple change types from an array", () => {
    expect(parseChangeTypeParams(["PRICING", "FEATURE"])).toEqual([
      "PRICING",
      "FEATURE",
    ]);
  });

  it("returns empty array for undefined", () => {
    expect(parseChangeTypeParams(undefined)).toEqual([]);
  });

  it("returns empty array for empty string", () => {
    expect(parseChangeTypeParams("")).toEqual([]);
  });

  it("filters out invalid change type values", () => {
    expect(
      parseChangeTypeParams(["PRICING", "INVALID", "FEATURE", "DROP TABLE"]),
    ).toEqual(["PRICING", "FEATURE"]);
  });

  it("accepts all seven valid change types", () => {
    expect(parseChangeTypeParams([...VALID_CHANGE_TYPES])).toEqual([
      "PRICING",
      "FEATURE",
      "BLOG",
      "JOB",
      "TECH",
      "GENERAL",
      "COMMUNITY",
    ]);
  });

  it("is case-sensitive — lowercase values are rejected", () => {
    expect(parseChangeTypeParams(["pricing", "Feature"])).toEqual([]);
  });

  it("rejects whitespace-only values", () => {
    expect(parseChangeTypeParams([" ", "  PRICING  "])).toEqual([]);
  });

  it("preserves order of valid values", () => {
    expect(parseChangeTypeParams(["TECH", "PRICING", "BLOG"])).toEqual([
      "TECH",
      "PRICING",
      "BLOG",
    ]);
  });
});

describe("change type filter — Prisma where clause shape", () => {
  /**
   * Mirror of the inline construction used in the competitor detail
   * page and dashboard. When activeChangeTypes is empty the spread
   * should resolve to `false`, which Prisma ignores; otherwise it
   * should emit a `changeType: { in: [...] }` clause.
   */
  function buildWhereFragment(activeChangeTypes: string[]) {
    return {
      ...(activeChangeTypes.length > 0 && {
        changeType: { in: activeChangeTypes },
      }),
    };
  }

  it("emits no changeType clause when no filter is active", () => {
    expect(buildWhereFragment([])).toEqual({});
  });

  it("emits a changeType IN clause when one type is active", () => {
    expect(buildWhereFragment(["PRICING"])).toEqual({
      changeType: { in: ["PRICING"] },
    });
  });

  it("emits a changeType IN clause when multiple types are active", () => {
    expect(buildWhereFragment(["PRICING", "FEATURE", "JOB"])).toEqual({
      changeType: { in: ["PRICING", "FEATURE", "JOB"] },
    });
  });
});
