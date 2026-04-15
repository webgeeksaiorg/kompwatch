import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock Prisma before importing the module under test
const mockCompetitorCreate = vi.fn();
const mockSnapshotCreate = vi.fn();
const mockChangeCreateMany = vi.fn();

vi.mock("@/lib/db", () => ({
  db: {
    competitor: { create: (...args: unknown[]) => mockCompetitorCreate(...args) },
    snapshot: { create: (...args: unknown[]) => mockSnapshotCreate(...args) },
    change: { createMany: (...args: unknown[]) => mockChangeCreateMany(...args) },
  },
}));

import { seedDemoCompetitor } from "@/lib/demo-seed";

describe("seedDemoCompetitor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCompetitorCreate.mockResolvedValue({ id: "comp_demo_123" });
    mockSnapshotCreate.mockResolvedValue({ id: "snap_demo_123" });
    mockChangeCreateMany.mockResolvedValue({ count: 3 });
  });

  it("creates a demo competitor for the given user", async () => {
    await seedDemoCompetitor("user_123");

    expect(mockCompetitorCreate).toHaveBeenCalledOnce();
    const createArgs = mockCompetitorCreate.mock.calls[0][0];
    expect(createArgs.data.userId).toBe("user_123");
    expect(createArgs.data.name).toBe("Acme Analytics");
    expect(createArgs.data.url).toBeTruthy();
  });

  it("creates a baseline snapshot", async () => {
    await seedDemoCompetitor("user_123");

    expect(mockSnapshotCreate).toHaveBeenCalledOnce();
    const snapArgs = mockSnapshotCreate.mock.calls[0][0];
    expect(snapArgs.data.competitorId).toBe("comp_demo_123");
    expect(snapArgs.data.httpStatus).toBe(200);
  });

  it("creates 3 sample changes with different types", async () => {
    await seedDemoCompetitor("user_123");

    expect(mockChangeCreateMany).toHaveBeenCalledOnce();
    const changes = mockChangeCreateMany.mock.calls[0][0].data;
    expect(changes).toHaveLength(3);

    const types = changes.map((c: { changeType: string }) => c.changeType);
    expect(types).toContain("PRICING");
    expect(types).toContain("FEATURE");
    expect(types).toContain("BLOG");
  });

  it("creates changes with timestamps in the past", async () => {
    await seedDemoCompetitor("user_123");

    const changes = mockChangeCreateMany.mock.calls[0][0].data;
    const now = Date.now();
    for (const change of changes) {
      expect(change.createdAt.getTime()).toBeLessThan(now);
    }
  });

  it("sets severity levels appropriately", async () => {
    await seedDemoCompetitor("user_123");

    const changes = mockChangeCreateMany.mock.calls[0][0].data;
    const pricingChange = changes.find(
      (c: { changeType: string }) => c.changeType === "PRICING"
    );
    expect(pricingChange.severity).toBe("HIGH");

    const blogChange = changes.find(
      (c: { changeType: string }) => c.changeType === "BLOG"
    );
    expect(blogChange.severity).toBe("LOW");
  });
});
