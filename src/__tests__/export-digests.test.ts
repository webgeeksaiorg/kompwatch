import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const { mockDb, mockGetCurrentUser } = vi.hoisted(() => ({
  mockDb: {
    digest: { findUnique: vi.fn() },
  },
  mockGetCurrentUser: vi.fn(),
}));

vi.mock("@/lib/db", () => ({ db: mockDb }));
vi.mock("@/lib/auth", () => ({ getCurrentUser: mockGetCurrentUser }));

import { GET } from "@/app/api/export/digests/route";

function makeReq(search = ""): NextRequest {
  return new NextRequest(`http://localhost/api/export/digests${search}`);
}

const sampleDigest = {
  id: "digest_1",
  userId: "user_123",
  subject: "3 competitor changes detected",
  period: "DAILY",
  createdAt: new Date("2026-04-20T08:00:00.000Z"),
  sentAt: new Date("2026-04-20T08:01:00.000Z"),
  htmlBody: "<p>test</p>",
  textBody: "test",
  changes: [
    {
      createdAt: new Date("2026-04-20T06:00:00.000Z"),
      changeType: "PRICING",
      severity: "HIGH",
      summary: "Price increased from $49 to $59",
      pageUrl: "https://acme.example/pricing",
      competitor: { name: "Acme, Inc.", url: "https://acme.example" },
    },
    {
      createdAt: new Date("2026-04-19T12:00:00.000Z"),
      changeType: "FEATURE",
      severity: "MEDIUM",
      summary: "New API endpoint launched",
      pageUrl: null,
      competitor: { name: "Beta Co", url: "https://beta.example" },
    },
  ],
};

beforeEach(() => {
  vi.clearAllMocks();
  mockGetCurrentUser.mockResolvedValue({ id: "user_123" });
  mockDb.digest.findUnique.mockResolvedValue(sampleDigest);
});

describe("GET /api/export/digests", () => {
  it("returns 401 when not authenticated", async () => {
    mockGetCurrentUser.mockResolvedValue(null);
    const res = await GET(makeReq("?digestId=digest_1"));
    expect(res.status).toBe(401);
  });

  it("returns 400 when digestId is missing", async () => {
    const res = await GET(makeReq());
    expect(res.status).toBe(400);
  });

  it("returns 404 when digest not found", async () => {
    mockDb.digest.findUnique.mockResolvedValue(null);
    const res = await GET(makeReq("?digestId=nonexistent"));
    expect(res.status).toBe(404);
  });

  it("returns 404 when digest belongs to another user", async () => {
    mockDb.digest.findUnique.mockResolvedValue({ ...sampleDigest, userId: "other_user" });
    const res = await GET(makeReq("?digestId=digest_1"));
    expect(res.status).toBe(404);
  });

  it("returns CSV by default", async () => {
    const res = await GET(makeReq("?digestId=digest_1"));
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toMatch(/text\/csv/);
    expect(res.headers.get("Content-Disposition")).toMatch(/kompwatch-digest-2026-04-20\.csv/);

    const body = await res.text();
    const lines = body.split("\n");
    expect(lines[0]).toBe("Date,Competitor,URL,Type,Severity,Summary,Page URL");
    expect(lines.length).toBe(3); // header + 2 changes
    expect(body).toContain('"Acme, Inc."');
    expect(body).toContain("PRICING");
  });

  it("returns PDF when format=pdf", async () => {
    const res = await GET(makeReq("?digestId=digest_1&format=pdf"));
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("application/pdf");
    expect(res.headers.get("Content-Disposition")).toMatch(/kompwatch-digest-2026-04-20\.pdf/);

    const bytes = await res.arrayBuffer();
    // PDF files start with %PDF
    const header = new TextDecoder().decode(bytes.slice(0, 4));
    expect(header).toBe("%PDF");
  });
});
