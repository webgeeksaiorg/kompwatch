import { describe, it, expect, vi, beforeEach } from "vitest";

/* ---------- mocks ---------- */

const { mockDb } = vi.hoisted(() => ({
  mockDb: {
    emailLead: {
      count: vi.fn(),
      groupBy: vi.fn(),
    },
  },
}));

vi.mock("@/lib/db", () => ({ db: mockDb }));

import { GET } from "@/app/api/social-proof/route";

describe("GET /api/social-proof", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns floor values when DB has zero leads", async () => {
    mockDb.emailLead.count.mockResolvedValue(0);
    mockDb.emailLead.groupBy.mockResolvedValue([]);

    const res = await GET();
    const body = await res.json();

    expect(body.snapshots).toBe(1200);
    expect(body.teams).toBe(340);
  });

  it("adds DB counts on top of floors", async () => {
    mockDb.emailLead.count.mockResolvedValue(50);
    mockDb.emailLead.groupBy.mockResolvedValue(
      Array.from({ length: 25 }, (_, i) => ({ email: `user${i}@test.com` })),
    );

    const res = await GET();
    const body = await res.json();

    expect(body.snapshots).toBe(1250); // 1200 + 50
    expect(body.teams).toBe(365); // 340 + 25
  });

  it("returns floors on DB error", async () => {
    mockDb.emailLead.count.mockRejectedValue(new Error("DB down"));

    const res = await GET();
    const body = await res.json();

    expect(body.snapshots).toBe(1200);
    expect(body.teams).toBe(340);
  });

  it("sets cache-control header for 5-minute caching", async () => {
    mockDb.emailLead.count.mockResolvedValue(0);
    mockDb.emailLead.groupBy.mockResolvedValue([]);

    const res = await GET();

    expect(res.headers.get("Cache-Control")).toBe(
      "public, s-maxage=300, stale-while-revalidate=600",
    );
  });

  it("queries only free-snapshot source", async () => {
    mockDb.emailLead.count.mockResolvedValue(0);
    mockDb.emailLead.groupBy.mockResolvedValue([]);

    await GET();

    expect(mockDb.emailLead.count).toHaveBeenCalledWith({
      where: { source: "free-snapshot" },
    });
    expect(mockDb.emailLead.groupBy).toHaveBeenCalledWith({
      by: ["email"],
      where: { source: "free-snapshot" },
    });
  });
});
