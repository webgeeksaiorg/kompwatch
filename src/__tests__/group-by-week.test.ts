import { describe, it, expect } from "vitest";
import { groupByWeek } from "@/lib/group-by-week";

function makeItem(dateStr: string, id: string = dateStr) {
  return { id, createdAt: new Date(dateStr) };
}

describe("groupByWeek", () => {
  it("returns empty array for empty input", () => {
    expect(groupByWeek([])).toEqual([]);
  });

  it("groups items from the same week together", () => {
    // 2026-06-08 is a Monday, 2026-06-12 is a Friday — same week
    const items = [
      makeItem("2026-06-08T10:00:00Z", "a"),
      makeItem("2026-06-10T10:00:00Z", "b"),
      makeItem("2026-06-12T10:00:00Z", "c"),
    ];
    const result = groupByWeek(items);
    expect(result).toHaveLength(1);
    expect(result[0].items).toHaveLength(3);
  });

  it("separates items from different weeks", () => {
    // 2026-06-05 is a Friday (week of Jun 1), 2026-06-09 is a Tuesday (week of Jun 8)
    const items = [
      makeItem("2026-06-05T10:00:00Z", "a"),
      makeItem("2026-06-09T10:00:00Z", "b"),
    ];
    const result = groupByWeek(items);
    expect(result).toHaveLength(2);
  });

  it("returns weeks in descending order (newest first)", () => {
    const items = [
      makeItem("2026-05-25T10:00:00Z", "old"),
      makeItem("2026-06-09T10:00:00Z", "new"),
    ];
    const result = groupByWeek(items);
    expect(result).toHaveLength(2);
    expect(result[0].items[0].id).toBe("new");
    expect(result[1].items[0].id).toBe("old");
  });

  it("handles Sunday correctly (belongs to the previous Monday's week)", () => {
    // 2026-06-14 is a Sunday — should be grouped with Mon Jun 8
    const items = [
      makeItem("2026-06-08T10:00:00Z", "mon"),
      makeItem("2026-06-14T10:00:00Z", "sun"),
    ];
    const result = groupByWeek(items);
    expect(result).toHaveLength(1);
    expect(result[0].items).toHaveLength(2);
  });

  it("produces correct weekStart and weekEnd dates", () => {
    // 2026-06-10 is a Wednesday — week is Mon Jun 8 to Sun Jun 14
    const items = [makeItem("2026-06-10T10:00:00Z")];
    const result = groupByWeek(items);
    expect(result).toHaveLength(1);
    expect(result[0].weekStart.toISOString().slice(0, 10)).toBe("2026-06-08");
    expect(result[0].weekEnd.toISOString().slice(0, 10)).toBe("2026-06-14");
  });

  it("generates a human-readable label", () => {
    const items = [makeItem("2026-06-10T10:00:00Z")];
    const result = groupByWeek(items);
    // Label format: "Jun 8 – Jun 14"
    expect(result[0].label).toContain("Jun");
    expect(result[0].label).toContain("–");
  });
});
