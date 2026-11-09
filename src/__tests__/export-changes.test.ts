import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const { mockDb, mockGetCurrentUser } = vi.hoisted(() => ({
  mockDb: {
    change: { findMany: vi.fn() },
  },
  mockGetCurrentUser: vi.fn(),
}));

vi.mock("@/lib/db", () => ({ db: mockDb }));
vi.mock("@/lib/auth", () => ({ getCurrentUser: mockGetCurrentUser }));

import { GET } from "@/app/api/export/changes/route";

function makeReq(search = ""): NextRequest {
  return new NextRequest(`http://localhost/api/export/changes${search}`);
}

const sampleChanges = [
  {
    createdAt: new Date("2026-04-20T10:00:00.000Z"),
    changeType: "PRICING",
    contentZone: "MONETIZATION",
    severity: "HIGH",
    confidenceScore: 0.95,
    signalScore: 0.88,
    summary: 'Price jumped from $99 to $129 — includes "Pro" tier rename, affecting billing',
    pageUrl: "https://acme.example/pricing",
    competitor: { name: "Acme, Inc.", url: "https://acme.example" },
  },
  {
    createdAt: new Date("2026-04-18T08:30:00.000Z"),
    changeType: "BLOG",
    contentZone: "MARKETING",
    severity: "LOW",
    confidenceScore: 0.8,
    signalScore: 0.52,
    summary: "New blog post about roadmap",
    pageUrl: null,
    competitor: { name: "Beta Co", url: "https://beta.example" },
  },
];

beforeEach(() => {
  vi.clearAllMocks();
  mockGetCurrentUser.mockResolvedValue({ id: "user_123", dashboardMinSeverity: "LOW" });
  mockDb.change.findMany.mockResolvedValue(sampleChanges);
});

describe("GET /api/export/changes", () => {
  it("returns 401 when not authenticated", async () => {
    mockGetCurrentUser.mockResolvedValue(null);
    const res = await GET(makeReq());
    expect(res.status).toBe(401);
  });

  it("defaults to CSV format", async () => {
    const res = await GET(makeReq());
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toMatch(/text\/csv/);
    expect(res.headers.get("Content-Disposition")).toMatch(/\.csv"$/);

    const body = await res.text();
    expect(body.split("\n")[0]).toBe(
      "Date,Competitor,URL,Type,Zone,Severity,Confidence,Signal Score,Summary,Page URL"
    );
    // Name with comma + summary with quotes/comma should be quoted & escaped
    expect(body).toContain('"Acme, Inc."');
    expect(body).toContain('""Pro""');
  });

  it("returns JSON when format=json", async () => {
    const res = await GET(makeReq("?format=json"));
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toMatch(/application\/json/);
    expect(res.headers.get("Content-Disposition")).toMatch(/\.json"$/);

    const payload = JSON.parse(await res.text());
    expect(payload.count).toBe(2);
    expect(payload.exportedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(payload.changes).toHaveLength(2);
    expect(payload.changes[0]).toMatchObject({
      competitor: "Acme, Inc.",
      competitorUrl: "https://acme.example",
      changeType: "PRICING",
      severity: "HIGH",
      pageUrl: "https://acme.example/pricing",
    });
    expect(payload.changes[0].date).toBe("2026-04-20T10:00:00.000Z");
    expect(payload.changes[0].signalScore).toBe(0.88);
    expect(payload.changes[1].signalScore).toBe(0.52);
    // null pageUrl should be preserved as null, not omitted
    expect(payload.changes[1].pageUrl).toBeNull();
  });

  it("case-insensitive format param", async () => {
    const res = await GET(makeReq("?format=JSON"));
    expect(res.headers.get("Content-Type")).toMatch(/application\/json/);
  });

  it("filters by competitorId when provided", async () => {
    await GET(makeReq("?competitorId=comp_42"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.competitorId).toBe("comp_42");
    expect(args.where.competitor).toEqual({ userId: "user_123" });
  });

  it("scopes to the current user's competitors even without filter", async () => {
    await GET(makeReq());
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.competitor).toEqual({ userId: "user_123" });
    expect(args.where.competitorId).toBeUndefined();
  });
});

describe("GET /api/export/changes — history-page filters", () => {
  it("applies period=30d as a createdAt gte filter", async () => {
    const now = Date.now();
    await GET(makeReq("?period=30d"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.createdAt).toBeDefined();
    const since = (args.where.createdAt as { gte: Date }).gte.getTime();
    const expected = now - 30 * 24 * 60 * 60 * 1000;
    // allow a small clock-skew window
    expect(Math.abs(since - expected)).toBeLessThan(5_000);
  });

  it("period=all omits the createdAt filter", async () => {
    await GET(makeReq("?period=all"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.createdAt).toBeUndefined();
  });

  it("ignores invalid period values (falls back to all)", async () => {
    await GET(makeReq("?period=bogus"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.createdAt).toBeUndefined();
  });

  it("applies multi-value zone filter", async () => {
    await GET(makeReq("?zone=MONETIZATION&zone=PRODUCT"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.contentZone).toEqual({ in: ["MONETIZATION", "PRODUCT"] });
  });

  it("drops invalid zone values", async () => {
    await GET(makeReq("?zone=MONETIZATION&zone=BOGUS"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.contentZone).toEqual({ in: ["MONETIZATION"] });
  });

  it("applies multi-value changeType filter", async () => {
    await GET(makeReq("?changeType=PRICING&changeType=FEATURE"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.changeType).toEqual({ in: ["PRICING", "FEATURE"] });
  });

  it("drops invalid changeType values", async () => {
    await GET(makeReq("?changeType=PRICING&changeType=HACK"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.changeType).toEqual({ in: ["PRICING"] });
  });

  it("applies multi-value competitor filter", async () => {
    await GET(makeReq("?competitor=c1&competitor=c2"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.competitorId).toEqual({ in: ["c1", "c2"] });
  });

  it("legacy competitorId takes precedence over multi competitor param", async () => {
    await GET(makeReq("?competitorId=legacy&competitor=c1"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.competitorId).toBe("legacy");
  });

  it("applies explicit minSeverity filter", async () => {
    await GET(makeReq("?minSeverity=HIGH"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.severity).toEqual({ in: ["HIGH", "CRITICAL"] });
  });

  it("ignores invalid minSeverity values", async () => {
    await GET(makeReq("?minSeverity=BOGUS"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.severity).toBeUndefined();
  });

  it("falls back to user.dashboardMinSeverity when filters are present but minSeverity is not", async () => {
    mockGetCurrentUser.mockResolvedValue({ id: "user_123", dashboardMinSeverity: "MEDIUM" });
    await GET(makeReq("?period=7d"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.severity).toEqual({ in: ["MEDIUM", "HIGH", "CRITICAL"] });
  });

  it("does not apply dashboardMinSeverity when no history-style filters are present (legacy behavior)", async () => {
    mockGetCurrentUser.mockResolvedValue({ id: "user_123", dashboardMinSeverity: "HIGH" });
    await GET(makeReq());
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.severity).toBeUndefined();
  });

  it("does not apply dashboardMinSeverity for legacy competitorId-only requests", async () => {
    mockGetCurrentUser.mockResolvedValue({ id: "user_123", dashboardMinSeverity: "HIGH" });
    await GET(makeReq("?competitorId=comp_42"));
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.severity).toBeUndefined();
  });

  it("composes all history-page filters together", async () => {
    const res = await GET(
      makeReq(
        "?period=7d&zone=MONETIZATION&zone=PRODUCT&changeType=PRICING&competitor=c1&minSeverity=MEDIUM"
      )
    );
    expect(res.status).toBe(200);
    const args = mockDb.change.findMany.mock.calls[0][0];
    expect(args.where.competitor).toEqual({ userId: "user_123" });
    expect(args.where.competitorId).toEqual({ in: ["c1"] });
    expect(args.where.contentZone).toEqual({ in: ["MONETIZATION", "PRODUCT"] });
    expect(args.where.changeType).toEqual({ in: ["PRICING"] });
    expect(args.where.severity).toEqual({ in: ["MEDIUM", "HIGH", "CRITICAL"] });
    expect(args.where.createdAt).toBeDefined();
  });
});
