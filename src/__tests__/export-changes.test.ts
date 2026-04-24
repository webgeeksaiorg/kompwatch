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
    severity: "HIGH",
    summary: 'Price jumped from $99 to $129 — includes "Pro" tier rename, affecting billing',
    pageUrl: "https://acme.example/pricing",
    competitor: { name: "Acme, Inc.", url: "https://acme.example" },
  },
  {
    createdAt: new Date("2026-04-18T08:30:00.000Z"),
    changeType: "BLOG",
    severity: "LOW",
    summary: "New blog post about roadmap",
    pageUrl: null,
    competitor: { name: "Beta Co", url: "https://beta.example" },
  },
];

beforeEach(() => {
  vi.clearAllMocks();
  mockGetCurrentUser.mockResolvedValue({ id: "user_123" });
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
      "Date,Competitor,URL,Type,Severity,Summary,Page URL"
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
