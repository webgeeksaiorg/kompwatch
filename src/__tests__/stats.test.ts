import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockDb } = vi.hoisted(() => ({
  mockDb: {
    user: { count: vi.fn() },
    competitor: { count: vi.fn() },
    change: { count: vi.fn() },
  },
}));

vi.mock("@/lib/db", () => ({
  db: mockDb,
}));

import { GET } from "@/app/api/stats/route";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("GET /api/stats", () => {
  it("returns aggregate counts", async () => {
    mockDb.user.count.mockResolvedValue(42);
    mockDb.competitor.count.mockResolvedValue(180);
    mockDb.change.count.mockResolvedValue(1250);

    const res = await GET();
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data).toEqual({ users: 42, competitors: 180, changes: 1250 });
  });

  it("filters competitors to active only", async () => {
    mockDb.user.count.mockResolvedValue(1);
    mockDb.competitor.count.mockResolvedValue(5);
    mockDb.change.count.mockResolvedValue(10);

    await GET();

    expect(mockDb.competitor.count).toHaveBeenCalledWith({
      where: { isActive: true },
    });
  });

  it("returns zero counts for empty database", async () => {
    mockDb.user.count.mockResolvedValue(0);
    mockDb.competitor.count.mockResolvedValue(0);
    mockDb.change.count.mockResolvedValue(0);

    const res = await GET();
    const data = await res.json();

    expect(data).toEqual({ users: 0, competitors: 0, changes: 0 });
  });

  it("sets cache headers", async () => {
    mockDb.user.count.mockResolvedValue(1);
    mockDb.competitor.count.mockResolvedValue(1);
    mockDb.change.count.mockResolvedValue(1);

    const res = await GET();

    expect(res.headers.get("Cache-Control")).toBe(
      "public, s-maxage=300, stale-while-revalidate=600"
    );
  });
});
