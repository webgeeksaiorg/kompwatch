import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";

/* ---------- mocks ---------- */

const { mockDb } = vi.hoisted(() => ({
  mockDb: {
    emailLead: { create: vi.fn() },
  },
}));

vi.mock("@/lib/db", () => ({ db: mockDb }));

vi.mock("@prisma/client", async () => {
  class PrismaClientKnownRequestError extends Error {
    code: string;
    constructor(message: string, opts: { code: string }) {
      super(message);
      this.code = opts.code;
    }
  }
  return {
    Prisma: { PrismaClientKnownRequestError },
  };
});

vi.mock("@/lib/plausible", () => ({
  trackEvent: vi.fn(),
}));

// Mock global fetch for the lightweight scraper
const mockFetch = vi.fn();

import { POST } from "@/app/api/free-snapshot/route";
import { analyzeCompetitor, type SnapshotResult } from "@/lib/instant-snapshot";

function makeReq(body: unknown): NextRequest {
  return new NextRequest("http://localhost/api/free-snapshot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const SAMPLE_HTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Acme Corp — The Best Widget Platform</title>
  <meta name="description" content="Acme Corp builds widgets for enterprise teams.">
  <script src="https://cdn.stripe.com/v3"></script>
  <script src="https://www.googletagmanager.com/gtag/js"></script>
</head>
<body>
  <h1>Welcome to Acme Corp</h1>
  <h2>Features</h2>
  <h3>Pricing</h3>
</body>
</html>
`;

const PRICING_HTML = `
<html>
<head><title>Pricing - Acme Corp</title></head>
<body>
  <h1>Pricing</h1>
  <div>Starter: $29/mo</div>
  <div>Pro: $99/mo</div>
  <div>Enterprise: Contact us</div>
  <p>Start your free trial today</p>
  <a href="/demo">Request a demo</a>
</body>
</html>
`;

const BLOG_HTML = `
<html>
<head><title>Blog - Acme Corp</title></head>
<body>
  <article><h2 class="post-title">How We Scaled to 10k Customers</h2></article>
  <article><h2 class="post-title">Introducing Our New API</h2></article>
</body>
</html>
`;

const CAREERS_HTML = `
<html>
<head><title>Careers - Acme Corp</title></head>
<body>
  <div class="job-listing">
    <h3 class="job-title">Senior Software Engineer</h3>
    <h3 class="job-title">Product Designer</h3>
    <h3 class="job-title">ML Engineer</h3>
  </div>
</body>
</html>
`;

/* ---------- helpers ---------- */

function mockFetchResponses(responses: Record<string, string>) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === "string" ? input : input.toString();

    // Check if it's the plausible tracking call — let it through silently
    if (url.includes("analytics") || url.includes("plausible")) {
      return new Response("ok", { status: 202 });
    }

    // Try path-suffix matches first (e.g., /pricing), then exact matches
    const pathMatches = Object.entries(responses).filter(
      ([pattern]) => pattern.startsWith("/") && url.endsWith(pattern)
    );
    if (pathMatches.length > 0) {
      return new Response(pathMatches[0][1], {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    }

    // Then try full URL matches
    for (const [pattern, html] of Object.entries(responses)) {
      if (!pattern.startsWith("/") && url === pattern) {
        return new Response(html, {
          status: 200,
          headers: { "Content-Type": "text/html" },
        });
      }
    }
    return new Response("Not Found", { status: 404 });
  }) as typeof fetch;
  return originalFetch;
}

/* ---------- tests ---------- */

beforeEach(() => {
  vi.clearAllMocks();
  mockDb.emailLead.create.mockResolvedValue({ id: "lead_1" });
});

describe("POST /api/free-snapshot", () => {
  let originalFetch: typeof fetch;

  beforeEach(() => {
    originalFetch = mockFetchResponses({
      "https://acme.com": SAMPLE_HTML,
      "/pricing": PRICING_HTML,
      "/blog": BLOG_HTML,
      "/careers": CAREERS_HTML,
    });
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("returns a snapshot with competitive signals", async () => {
    const res = await POST(
      makeReq({ url: "https://acme.com", email: "user@example.com" })
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);
    expect(json.snapshot).toBeDefined();

    const snap: SnapshotResult = json.snapshot;
    expect(snap.url).toBe("https://acme.com");
    expect(snap.homepage.reachable).toBe(true);
    expect(snap.homepage.title).toBe("Acme Corp — The Best Widget Platform");
    expect(snap.signalCount).toBeGreaterThan(0);
    expect(snap.analysisTimeMs).toBeGreaterThanOrEqual(0);
  });

  it("captures lead with free-snapshot source", async () => {
    await POST(makeReq({ url: "https://acme.com", email: "lead@co.com" }));
    expect(mockDb.emailLead.create).toHaveBeenCalledWith({
      data: { email: "lead@co.com", source: "free-snapshot" },
    });
  });

  it("still works when lead is a duplicate (P2002)", async () => {
    const { Prisma } = await import("@prisma/client");
    mockDb.emailLead.create.mockRejectedValueOnce(
      new Prisma.PrismaClientKnownRequestError("dup", {
        code: "P2002",
        clientVersion: "test",
      })
    );
    const res = await POST(
      makeReq({ url: "https://acme.com", email: "dup@co.com" })
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);
    expect(json.snapshot).toBeDefined();
  });

  it("rejects invalid URL", async () => {
    const res = await POST(
      makeReq({ url: "not-a-url", email: "user@example.com" })
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toMatch(/valid URL/i);
  });

  it("rejects invalid email", async () => {
    const res = await POST(
      makeReq({ url: "https://acme.com", email: "bad-email" })
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toMatch(/valid email/i);
  });

  it("normalizes email to lowercase", async () => {
    await POST(
      makeReq({ url: "https://acme.com", email: "  USER@EXAMPLE.COM  " })
    );
    expect(mockDb.emailLead.create).toHaveBeenCalledWith({
      data: { email: "user@example.com", source: "free-snapshot" },
    });
  });

  it("returns 500 on unexpected DB error", async () => {
    mockDb.emailLead.create.mockRejectedValueOnce(new Error("db down"));
    const res = await POST(
      makeReq({ url: "https://acme.com", email: "user@example.com" })
    );
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json.error).toMatch(/analysis failed/i);
  });
});

describe("analyzeCompetitor", () => {
  let originalFetch: typeof fetch;

  beforeEach(() => {
    originalFetch = mockFetchResponses({
      "https://acme.com": SAMPLE_HTML,
      "/pricing": PRICING_HTML,
      "/blog": BLOG_HTML,
      "/careers": CAREERS_HTML,
    });
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("extracts homepage title and description", async () => {
    const result = await analyzeCompetitor("https://acme.com");
    expect(result.homepage.title).toBe("Acme Corp — The Best Widget Platform");
    expect(result.homepage.description).toBe(
      "Acme Corp builds widgets for enterprise teams."
    );
  });

  it("detects tech stack from script tags", async () => {
    const result = await analyzeCompetitor("https://acme.com");
    expect(result.homepage.techStack).toContain("Stripe");
    expect(result.homepage.techStack).toContain("Google Analytics");
  });

  it("detects pricing signals", async () => {
    const result = await analyzeCompetitor("https://acme.com");
    expect(result.pricing.found).toBe(true);
    expect(result.pricing.signals.length).toBeGreaterThan(0);
    // Should detect prices
    const priceSignal = result.pricing.signals.find((s) =>
      s.includes("Pricing detected")
    );
    expect(priceSignal).toBeDefined();
    // Should detect enterprise/sales
    const enterpriseSignal = result.pricing.signals.find((s) =>
      s.includes("Enterprise")
    );
    expect(enterpriseSignal).toBeDefined();
  });

  it("handles unreachable sites gracefully", async () => {
    globalThis.fetch = vi.fn(async () => {
      return new Response("Not Found", { status: 404 });
    }) as typeof fetch;

    const result = await analyzeCompetitor("https://unreachable.test");
    expect(result.homepage.reachable).toBe(false);
    expect(result.homepage.title).toBeNull();
    expect(result.pricing.found).toBe(false);
    expect(result.signalCount).toBe(0);
  });

  it("adds https if protocol is missing", async () => {
    const result = await analyzeCompetitor("acme.com");
    expect(result.url).toBe("https://acme.com");
  });

  it("returns analysisTimeMs", async () => {
    const result = await analyzeCompetitor("https://acme.com");
    expect(result.analysisTimeMs).toBeGreaterThanOrEqual(0);
  });
});

describe("SnapshotResults CTA content", () => {
  it("snapshot-lead-form contains 'track YOUR site' CTA markup", async () => {
    const fs = await import("fs");
    const path = await import("path");
    const src = fs.readFileSync(
      path.resolve(__dirname, "../components/marketing/snapshot-lead-form.tsx"),
      "utf-8"
    );
    expect(src).toContain("Also track YOUR site vs.");
    expect(src).toContain("free-snapshot-track-your-site");
    expect(src).toContain("utm_content=track-your-site");
    expect(src).toContain("Start tracking both sites free");
  });
});
