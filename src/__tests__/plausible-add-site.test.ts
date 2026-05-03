import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Script is plain CommonJS so it can run via `node scripts/plausible-add-site.js`
// without a TS toolchain. We only test the exported `addSite` helper here.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { addSite } = require("../../scripts/plausible-add-site.js") as {
  addSite: (args: {
    host: string;
    token: string;
    domain: string;
    timezone: string;
  }) => Promise<{
    ok: boolean;
    status: number;
    body: unknown;
    alreadyExisted?: boolean;
  }>;
};

describe("plausible-add-site addSite()", () => {
  let fetchSpy: ReturnType<typeof vi.fn>;
  const originalFetch = global.fetch;

  beforeEach(() => {
    fetchSpy = vi.fn();
    global.fetch = fetchSpy as unknown as typeof fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.clearAllMocks();
  });

  it("POSTs to /api/v1/sites with bearer auth and JSON body", async () => {
    fetchSpy.mockResolvedValue(
      new Response(JSON.stringify({ domain: "kompwatch.com" }), {
        status: 200,
      })
    );

    const result = await addSite({
      host: "https://analytics.webgeeksai.in",
      token: "tok_abc",
      domain: "kompwatch.com",
      timezone: "Etc/UTC",
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [url, init] = fetchSpy.mock.calls[0];
    expect(url).toBe("https://analytics.webgeeksai.in/api/v1/sites");
    expect(init.method).toBe("POST");
    expect(init.headers.Authorization).toBe("Bearer tok_abc");
    expect(init.headers["Content-Type"]).toBe("application/json");
    expect(JSON.parse(init.body)).toEqual({
      domain: "kompwatch.com",
      timezone: "Etc/UTC",
    });

    expect(result.ok).toBe(true);
    expect(result.alreadyExisted).toBe(false);
  });

  it("treats a 400 'domain already exists' response as success (idempotent)", async () => {
    fetchSpy.mockResolvedValue(
      new Response(
        JSON.stringify({ error: "Domain has already been taken" }),
        { status: 400 }
      )
    );

    const result = await addSite({
      host: "https://analytics.webgeeksai.in",
      token: "tok",
      domain: "kompwatch.com",
      timezone: "Etc/UTC",
    });

    expect(result.ok).toBe(true);
    expect(result.alreadyExisted).toBe(true);
  });

  it("returns ok=false for 401 unauthorized", async () => {
    fetchSpy.mockResolvedValue(
      new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 })
    );

    const result = await addSite({
      host: "https://analytics.webgeeksai.in",
      token: "bad",
      domain: "kompwatch.com",
      timezone: "Etc/UTC",
    });

    expect(result.ok).toBe(false);
    expect(result.status).toBe(401);
  });

  it("returns ok=false for unrelated 400 errors", async () => {
    fetchSpy.mockResolvedValue(
      new Response(JSON.stringify({ error: "Invalid timezone" }), {
        status: 400,
      })
    );

    const result = await addSite({
      host: "https://analytics.webgeeksai.in",
      token: "tok",
      domain: "kompwatch.com",
      timezone: "Mars/UTC",
    });

    expect(result.ok).toBe(false);
    expect(result.alreadyExisted).toBeUndefined();
  });

  it("handles non-JSON error bodies without throwing", async () => {
    fetchSpy.mockResolvedValue(new Response("upstream timeout", { status: 502 }));

    const result = await addSite({
      host: "https://analytics.webgeeksai.in",
      token: "tok",
      domain: "kompwatch.com",
      timezone: "Etc/UTC",
    });

    expect(result.ok).toBe(false);
    expect(result.status).toBe(502);
    expect(result.body).toBe("upstream timeout");
  });
});
