import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const {
  mockIsConfigured,
  mockGetAllStats,
  mockGetAggregateMetrics,
  mockGetTopPages,
  mockGetTopSources,
  mockGetTopEvents,
} = vi.hoisted(() => ({
  mockIsConfigured: vi.fn(),
  mockGetAllStats: vi.fn(),
  mockGetAggregateMetrics: vi.fn(),
  mockGetTopPages: vi.fn(),
  mockGetTopSources: vi.fn(),
  mockGetTopEvents: vi.fn(),
}));

vi.mock("@/lib/plausible-api", () => ({
  isPlausibleConfigured: mockIsConfigured,
  getAllStats: mockGetAllStats,
  getAggregateMetrics: mockGetAggregateMetrics,
  getTopPages: mockGetTopPages,
  getTopSources: mockGetTopSources,
  getTopEvents: mockGetTopEvents,
}));

import { GET } from "@/app/api/internal/analytics/route";
import { NextRequest } from "next/server";

function makeRequest(params: Record<string, string> = {}, token?: string) {
  const url = new URL("http://localhost:3000/api/internal/analytics");
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }
  const headers: Record<string, string> = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return new NextRequest(url, { headers });
}

describe("GET /api/internal/analytics", () => {
  const originalCronSecret = process.env.CRON_SECRET;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.CRON_SECRET = "test-secret";
    mockIsConfigured.mockReturnValue(true);
  });

  afterEach(() => {
    process.env.CRON_SECRET = originalCronSecret;
  });

  it("returns 401 without auth header", async () => {
    const res = await GET(makeRequest());
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toBe("Unauthorized");
  });

  it("returns 401 with wrong token", async () => {
    const res = await GET(makeRequest({}, "wrong-secret"));
    expect(res.status).toBe(401);
  });

  it("returns 503 when Plausible is not configured", async () => {
    mockIsConfigured.mockReturnValue(false);
    const res = await GET(makeRequest({}, "test-secret"));
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.error).toBe("Plausible not configured");
  });

  it("returns all stats by default", async () => {
    const mockStats = {
      siteId: "kompwatch.com",
      period: "30d",
      timestamp: "2026-06-11T00:00:00Z",
      metrics: { visitors: 100, pageviews: 300, bounceRate: 40, visitDuration: 60 },
      topPages: [{ page: "/", visitors: 50, pageviews: 100 }],
      topSources: [{ source: "Google", visitors: 30 }],
      topEvents: [{ name: "signup", visitors: 5 }],
    };
    mockGetAllStats.mockResolvedValue(mockStats);

    const res = await GET(makeRequest({}, "test-secret"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.siteId).toBe("kompwatch.com");
    expect(mockGetAllStats).toHaveBeenCalledWith("30d");
  });

  it("passes period param to getAllStats", async () => {
    mockGetAllStats.mockResolvedValue({});
    const res = await GET(makeRequest({ period: "7d" }, "test-secret"));
    expect(res.status).toBe(200);
    expect(mockGetAllStats).toHaveBeenCalledWith("7d");
  });

  it("returns only aggregate metrics when metric=aggregate", async () => {
    const mockMetrics = { visitors: 100, pageviews: 300, bounceRate: 40, visitDuration: 60 };
    mockGetAggregateMetrics.mockResolvedValue(mockMetrics);

    const res = await GET(makeRequest({ metric: "aggregate" }, "test-secret"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.metrics).toEqual(mockMetrics);
    expect(body.period).toBe("30d");
  });

  it("returns only pages when metric=pages", async () => {
    const mockPages = [{ page: "/pricing", visitors: 50, pageviews: 100 }];
    mockGetTopPages.mockResolvedValue(mockPages);

    const res = await GET(makeRequest({ metric: "pages", limit: "5" }, "test-secret"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.topPages).toEqual(mockPages);
    expect(mockGetTopPages).toHaveBeenCalledWith("30d", 5);
  });

  it("returns only sources when metric=sources", async () => {
    mockGetTopSources.mockResolvedValue([]);
    const res = await GET(makeRequest({ metric: "sources" }, "test-secret"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty("topSources");
  });

  it("returns only events when metric=events", async () => {
    mockGetTopEvents.mockResolvedValue([]);
    const res = await GET(makeRequest({ metric: "events" }, "test-secret"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty("topEvents");
  });

  it("returns 400 for unknown metric", async () => {
    const res = await GET(makeRequest({ metric: "invalid" }, "test-secret"));
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toContain("Unknown metric");
  });

  it("returns 502 when Plausible API throws", async () => {
    mockGetAllStats.mockRejectedValue(new Error("Plausible API 500: Internal Server Error"));

    const res = await GET(makeRequest({}, "test-secret"));
    expect(res.status).toBe(502);
    const body = await res.json();
    expect(body.error).toContain("Plausible API 500");
  });

  it("clamps limit between 1 and 100", async () => {
    mockGetTopPages.mockResolvedValue([]);

    // limit too high → clamped to 100
    await GET(makeRequest({ metric: "pages", limit: "999" }, "test-secret"));
    expect(mockGetTopPages).toHaveBeenCalledWith("30d", 100);

    // limit too low → clamped to 1
    mockGetTopPages.mockClear();
    await GET(makeRequest({ metric: "pages", limit: "0" }, "test-secret"));
    expect(mockGetTopPages).toHaveBeenCalledWith("30d", 1);
  });
});
