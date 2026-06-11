import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Helper: re-import plausible-api.ts after env vars change (module reads them at import time)
async function loadModule() {
  vi.resetModules();
  return import("@/lib/plausible-api");
}

describe("plausible-api", () => {
  let fetchSpy: ReturnType<typeof vi.fn>;
  const originalFetch = global.fetch;
  const originalDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const originalHost = process.env.PLAUSIBLE_HOST;
  const originalKey = process.env.PLAUSIBLE_API_KEY;

  beforeEach(() => {
    fetchSpy = vi.fn();
    global.fetch = fetchSpy as unknown as typeof fetch;
    process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN = "kompwatch.com";
    process.env.PLAUSIBLE_HOST = "https://analytics.example.com";
    process.env.PLAUSIBLE_API_KEY = "test-api-key";
  });

  afterEach(() => {
    global.fetch = originalFetch;
    process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN = originalDomain;
    process.env.PLAUSIBLE_HOST = originalHost;
    process.env.PLAUSIBLE_API_KEY = originalKey;
    vi.restoreAllMocks();
  });

  describe("isPlausibleConfigured", () => {
    it("returns true when both API key and domain are set", async () => {
      const mod = await loadModule();
      expect(mod.isPlausibleConfigured()).toBe(true);
    });

    it("returns false when API key is missing", async () => {
      delete process.env.PLAUSIBLE_API_KEY;
      const mod = await loadModule();
      expect(mod.isPlausibleConfigured()).toBe(false);
    });

    it("returns false when domain is missing", async () => {
      delete process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
      const mod = await loadModule();
      expect(mod.isPlausibleConfigured()).toBe(false);
    });
  });

  describe("getAggregateMetrics", () => {
    it("fetches aggregate metrics from Plausible API", async () => {
      fetchSpy.mockResolvedValue(
        new Response(
          JSON.stringify({
            results: {
              visitors: { value: 1234 },
              pageviews: { value: 5678 },
              bounce_rate: { value: 42 },
              visit_duration: { value: 120 },
            },
          }),
        ),
      );

      const mod = await loadModule();
      const metrics = await mod.getAggregateMetrics("30d");

      expect(metrics).toEqual({
        visitors: 1234,
        pageviews: 5678,
        bounceRate: 42,
        visitDuration: 120,
      });

      expect(fetchSpy).toHaveBeenCalledOnce();
      const url = new URL(fetchSpy.mock.calls[0][0]);
      expect(url.pathname).toBe("/api/v1/stats/aggregate");
      expect(url.searchParams.get("site_id")).toBe("kompwatch.com");
      expect(url.searchParams.get("metrics")).toBe(
        "visitors,pageviews,bounce_rate,visit_duration",
      );
    });

    it("sends Authorization header with API key", async () => {
      fetchSpy.mockResolvedValue(
        new Response(
          JSON.stringify({ results: {} }),
        ),
      );

      const mod = await loadModule();
      await mod.getAggregateMetrics("7d");

      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers.Authorization).toBe("Bearer test-api-key");
    });

    it("throws when API key is not configured", async () => {
      delete process.env.PLAUSIBLE_API_KEY;
      const mod = await loadModule();
      await expect(mod.getAggregateMetrics("30d")).rejects.toThrow(
        "PLAUSIBLE_API_KEY is not configured",
      );
    });

    it("throws when Plausible API returns error", async () => {
      fetchSpy.mockResolvedValue(
        new Response("Internal Server Error", { status: 500 }),
      );

      const mod = await loadModule();
      await expect(mod.getAggregateMetrics("30d")).rejects.toThrow(
        "Plausible API 500",
      );
    });

    it("defaults missing metric values to 0", async () => {
      fetchSpy.mockResolvedValue(
        new Response(JSON.stringify({ results: {} })),
      );

      const mod = await loadModule();
      const metrics = await mod.getAggregateMetrics("30d");

      expect(metrics).toEqual({
        visitors: 0,
        pageviews: 0,
        bounceRate: 0,
        visitDuration: 0,
      });
    });
  });

  describe("getTopPages", () => {
    it("fetches top pages breakdown", async () => {
      fetchSpy.mockResolvedValue(
        new Response(
          JSON.stringify({
            results: [
              { page: "/pricing", visitors: 100, pageviews: 200 },
              { page: "/", visitors: 80, pageviews: 150 },
            ],
          }),
        ),
      );

      const mod = await loadModule();
      const pages = await mod.getTopPages("30d", 5);

      expect(pages).toEqual([
        { page: "/pricing", visitors: 100, pageviews: 200 },
        { page: "/", visitors: 80, pageviews: 150 },
      ]);

      const url = new URL(fetchSpy.mock.calls[0][0]);
      expect(url.searchParams.get("property")).toBe("event:page");
      expect(url.searchParams.get("limit")).toBe("5");
    });
  });

  describe("getTopSources", () => {
    it("fetches top sources breakdown", async () => {
      fetchSpy.mockResolvedValue(
        new Response(
          JSON.stringify({
            results: [
              { source: "Google", visitors: 500 },
              { source: "Twitter", visitors: 100 },
            ],
          }),
        ),
      );

      const mod = await loadModule();
      const sources = await mod.getTopSources("7d");

      expect(sources).toEqual([
        { source: "Google", visitors: 500 },
        { source: "Twitter", visitors: 100 },
      ]);

      const url = new URL(fetchSpy.mock.calls[0][0]);
      expect(url.searchParams.get("property")).toBe("visit:source");
    });
  });

  describe("getTopEvents", () => {
    it("fetches top custom events breakdown", async () => {
      fetchSpy.mockResolvedValue(
        new Response(
          JSON.stringify({
            results: [
              { name: "signup", visitors: 50 },
              { name: "upgrade-completed", visitors: 10 },
            ],
          }),
        ),
      );

      const mod = await loadModule();
      const events = await mod.getTopEvents("30d");

      expect(events).toEqual([
        { name: "signup", visitors: 50 },
        { name: "upgrade-completed", visitors: 10 },
      ]);

      const url = new URL(fetchSpy.mock.calls[0][0]);
      expect(url.searchParams.get("property")).toBe("event:name");
    });
  });

  describe("getAllStats", () => {
    it("fetches all stats in parallel", async () => {
      // Mock all four parallel fetches
      fetchSpy
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              results: {
                visitors: { value: 1000 },
                pageviews: { value: 3000 },
                bounce_rate: { value: 35 },
                visit_duration: { value: 90 },
              },
            }),
          ),
        )
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              results: [{ page: "/", visitors: 500, pageviews: 1000 }],
            }),
          ),
        )
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              results: [{ source: "Google", visitors: 300 }],
            }),
          ),
        )
        .mockResolvedValueOnce(
          new Response(
            JSON.stringify({
              results: [{ name: "signup", visitors: 20 }],
            }),
          ),
        );

      const mod = await loadModule();
      const stats = await mod.getAllStats("30d");

      expect(stats.siteId).toBe("kompwatch.com");
      expect(stats.period).toBe("30d");
      expect(stats.metrics.visitors).toBe(1000);
      expect(stats.topPages).toHaveLength(1);
      expect(stats.topSources).toHaveLength(1);
      expect(stats.topEvents).toHaveLength(1);
      expect(stats.timestamp).toBeTruthy();

      // All four calls should happen
      expect(fetchSpy).toHaveBeenCalledTimes(4);
    });
  });

  describe("date range parsing", () => {
    it("converts day-based periods to date ranges", async () => {
      fetchSpy.mockResolvedValue(
        new Response(JSON.stringify({ results: {} })),
      );

      const mod = await loadModule();
      await mod.getAggregateMetrics("7d");

      const url = new URL(fetchSpy.mock.calls[0][0]);
      expect(url.searchParams.get("period")).toBe("custom");
      const dateParam = url.searchParams.get("date") || "";
      // Should be two dates separated by comma
      expect(dateParam).toMatch(/^\d{4}-\d{2}-\d{2},\d{4}-\d{2}-\d{2}$/);
    });

    it("passes native periods through unchanged", async () => {
      fetchSpy.mockResolvedValue(
        new Response(JSON.stringify({ results: {} })),
      );

      const mod = await loadModule();
      await mod.getAggregateMetrics("6mo");

      const url = new URL(fetchSpy.mock.calls[0][0]);
      // Non-day periods are passed as-is
      expect(url.searchParams.get("period")).toBe("6mo");
    });
  });
});
