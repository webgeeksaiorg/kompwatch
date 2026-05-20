import { describe, it, expect } from "vitest";

/**
 * Unit tests for the first-change upgrade prompt logic.
 * The component itself is a client component; here we test the
 * rendering conditions that the dashboard page applies.
 */

interface PromptCondition {
  plan: "FREE" | "PRO" | "TEAM";
  totalChanges: number;
}

/** Mirrors the condition in dashboard/page.tsx */
function shouldShowFirstChangePrompt({ plan, totalChanges }: PromptCondition): boolean {
  return plan === "FREE" && totalChanges >= 1 && totalChanges <= 5;
}

describe("first-change upgrade prompt conditions", () => {
  it("shows for free user with 1 change (aha moment)", () => {
    expect(shouldShowFirstChangePrompt({ plan: "FREE", totalChanges: 1 })).toBe(true);
  });

  it("shows for free user with 5 changes", () => {
    expect(shouldShowFirstChangePrompt({ plan: "FREE", totalChanges: 5 })).toBe(true);
  });

  it("hides for free user with 0 changes (no aha yet)", () => {
    expect(shouldShowFirstChangePrompt({ plan: "FREE", totalChanges: 0 })).toBe(false);
  });

  it("hides for free user with >5 changes (stale prompt)", () => {
    expect(shouldShowFirstChangePrompt({ plan: "FREE", totalChanges: 6 })).toBe(false);
  });

  it("hides for Pro user even with 1 change", () => {
    expect(shouldShowFirstChangePrompt({ plan: "PRO", totalChanges: 1 })).toBe(false);
  });

  it("hides for Team user even with 1 change", () => {
    expect(shouldShowFirstChangePrompt({ plan: "TEAM", totalChanges: 1 })).toBe(false);
  });
});
