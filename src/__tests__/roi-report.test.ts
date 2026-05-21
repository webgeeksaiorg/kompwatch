import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { resolvePeriod, type ReportPeriod } from "@/lib/roi";

describe("resolvePeriod", () => {
  beforeEach(() => {
    // Pin to 2026-05-21 12:00:00 UTC
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-05-21T12:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("7d returns a 7-day window", () => {
    const { start, end } = resolvePeriod("7d");
    const diffMs = end.getTime() - start.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    expect(diffDays).toBeCloseTo(7, 0);
    expect(end.getTime()).toBeCloseTo(Date.now(), -3);
  });

  it("30d returns a 30-day window", () => {
    const { start, end, label } = resolvePeriod("30d");
    const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    expect(diffDays).toBeCloseTo(30, 0);
    expect(label).toBe("Last 30 days");
  });

  it("90d returns a 90-day window", () => {
    const { start, end, label } = resolvePeriod("90d");
    const diffDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    expect(diffDays).toBeCloseTo(90, 0);
    expect(label).toBe("Last 90 days");
  });

  it("last-month returns full previous calendar month", () => {
    const { start, end, label } = resolvePeriod("last-month");
    // May 21 → last month is April 2026
    expect(start.getFullYear()).toBe(2026);
    expect(start.getMonth()).toBe(3); // April (0-indexed)
    expect(start.getDate()).toBe(1);
    expect(end.getMonth()).toBe(3); // April 30
    expect(end.getDate()).toBe(30);
    expect(label).toBe("April 2026");
  });

  it("this-month returns start of current month to now", () => {
    const { start, end, label } = resolvePeriod("this-month");
    expect(start.getMonth()).toBe(4); // May (0-indexed)
    expect(start.getDate()).toBe(1);
    expect(end.getTime()).toBeCloseTo(Date.now(), -3);
    expect(label).toContain("May 2026");
    expect(label).toContain("to date");
  });

  it("all periods have non-empty labels", () => {
    const periods: ReportPeriod[] = ["7d", "30d", "90d", "last-month", "this-month"];
    for (const p of periods) {
      const { label } = resolvePeriod(p);
      expect(label.length).toBeGreaterThan(0);
    }
  });

  it("start is always before end for all periods", () => {
    const periods: ReportPeriod[] = ["7d", "30d", "90d", "last-month", "this-month"];
    for (const p of periods) {
      const { start, end } = resolvePeriod(p);
      expect(start.getTime()).toBeLessThan(end.getTime());
    }
  });
});
