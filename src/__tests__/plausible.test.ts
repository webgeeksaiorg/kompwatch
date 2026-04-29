import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const { mockHeaders } = vi.hoisted(() => ({
  mockHeaders: vi.fn(),
}));

vi.mock("next/headers", () => ({
  headers: mockHeaders,
}));

function makeHeaders(entries: Record<string, string>) {
  return {
    get: (key: string) => entries[key.toLowerCase()] ?? null,
  };
}

// Helper: re-import plausible.ts after env vars have been set, since the
// module reads them at import time.
async function loadTrackEvent() {
  vi.resetModules();
  const mod = await import("@/lib/plausible");
  return mod.trackEvent;
}

describe("trackEvent (server-side Plausible)", () => {
  let fetchSpy: ReturnType<typeof vi.fn>;
  const originalFetch = global.fetch;
  const originalDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const originalHost = process.env.PLAUSIBLE_HOST;

  beforeEach(() => {
    fetchSpy = vi.fn().mockResolvedValue(new Response("ok"));
    global.fetch = fetchSpy as unknown as typeof fetch;
    process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN = "kompwatch.com";
    delete process.env.PLAUSIBLE_HOST;
    mockHeaders.mockResolvedValue(
      makeHeaders({
        "user-agent": "Test/1.0",
        "x-forwarded-for": "203.0.113.42, 10.0.0.1",
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
    if (originalDomain === undefined) {
      delete process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    } else {
      process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN = originalDomain;
    }
    if (originalHost === undefined) {
      delete process.env.PLAUSIBLE_HOST;
    } else {
      process.env.PLAUSIBLE_HOST = originalHost;
    }
    vi.clearAllMocks();
  });

  it("posts the event payload to Plausible /api/event with domain + name + url", async () => {
    const trackEvent = await loadTrackEvent();
    await trackEvent("magic-link-requested", "/login");

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [endpoint, init] = fetchSpy.mock.calls[0];
    expect(endpoint).toBe("https://analytics.webgeeksai.in/api/event");
    expect(init.method).toBe("POST");

    const body = JSON.parse(init.body as string);
    expect(body.name).toBe("magic-link-requested");
    expect(body.domain).toBe("kompwatch.com");
    expect(body.url).toBe("https://kompwatch.com/login");
    expect(body.props).toBeUndefined();
  });

  it("forwards User-Agent and the first X-Forwarded-For IP", async () => {
    const trackEvent = await loadTrackEvent();
    await trackEvent("signup", "/dashboard");

    const [, init] = fetchSpy.mock.calls[0];
    expect(init.headers["User-Agent"]).toBe("Test/1.0");
    expect(init.headers["X-Forwarded-For"]).toBe("203.0.113.42");
  });

  it("falls back to 127.0.0.1 when no X-Forwarded-For header", async () => {
    mockHeaders.mockResolvedValue(makeHeaders({ "user-agent": "Test/1.0" }));
    const trackEvent = await loadTrackEvent();
    await trackEvent("signup", "/dashboard");
    const [, init] = fetchSpy.mock.calls[0];
    expect(init.headers["X-Forwarded-For"]).toBe("127.0.0.1");
  });

  it("includes props when non-empty", async () => {
    const trackEvent = await loadTrackEvent();
    await trackEvent("email-capture", "/sample-digest", {
      source: "sample-digest",
    });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.props).toEqual({ source: "sample-digest" });
  });

  it("omits props when empty object passed", async () => {
    const trackEvent = await loadTrackEvent();
    await trackEvent("ev", "/x", {});
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.props).toBeUndefined();
  });

  it("respects custom PLAUSIBLE_HOST override", async () => {
    process.env.PLAUSIBLE_HOST = "https://plausible.example.com";
    const trackEvent = await loadTrackEvent();
    await trackEvent("ev", "/x");
    expect(fetchSpy.mock.calls[0][0]).toBe(
      "https://plausible.example.com/api/event"
    );
  });

  it("skips entirely when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is unset", async () => {
    delete process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    const trackEvent = await loadTrackEvent();
    await trackEvent("ev", "/x");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("swallows fetch errors so analytics never breaks the request", async () => {
    fetchSpy.mockRejectedValueOnce(new Error("plausible down"));
    const trackEvent = await loadTrackEvent();
    await expect(trackEvent("ev", "/x")).resolves.toBeUndefined();
  });
});
