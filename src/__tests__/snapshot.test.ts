import { describe, it, expect, vi, beforeEach } from "vitest";

const {
  mockFindUnique,
  mockSnapshotCreate,
  mockChangeCreateMany,
  mockScrapeCompetitor,
  mockDetectChanges,
  mockSendInstantAlertWebhook,
} = vi.hoisted(() => ({
  mockFindUnique: vi.fn(),
  mockSnapshotCreate: vi.fn(),
  mockChangeCreateMany: vi.fn(),
  mockScrapeCompetitor: vi.fn(),
  mockDetectChanges: vi.fn(),
  mockSendInstantAlertWebhook: vi.fn(),
}));

vi.mock("@/lib/db", () => ({
  db: {
    competitor: { findUnique: mockFindUnique },
    snapshot: { create: mockSnapshotCreate },
    change: { createMany: mockChangeCreateMany },
  },
}));

vi.mock("@/lib/scraper", () => ({
  scrapeCompetitor: mockScrapeCompetitor,
  closeBrowser: vi.fn(),
}));

vi.mock("@/lib/ai", () => ({
  detectChanges: mockDetectChanges,
}));

vi.mock("@/lib/webhooks", async () => {
  const actual =
    await vi.importActual<typeof import("@/lib/webhooks")>("@/lib/webhooks");
  return {
    ...actual,
    sendInstantAlertWebhook: mockSendInstantAlertWebhook,
  };
});

import { captureSnapshot, captureSnapshotInBackground } from "@/lib/snapshot";

const baseCompetitor = {
  id: "c1",
  name: "Acme",
  url: "https://acme.com",
  trackPricing: true,
  trackBlog: true,
  trackFeatures: true,
  trackJobs: true,
  trackTech: false,
  user: {
    plan: "PRO",
    webhookEnabled: false,
    webhookUrl: null,
    instantAlertsEnabled: false,
    instantAlertMinSeverity: "HIGH",
  },
};

const baseScrape = {
  pricingHtml: "<p>$49/mo</p>",
  featuresHtml: "<p>features</p>",
  blogTitles: ["Hello"],
  jobTitles: [],
  techStack: ["React"],
  httpStatus: 200,
  fetchTimeMs: 1234,
};

beforeEach(() => {
  mockFindUnique.mockReset();
  mockSnapshotCreate.mockReset();
  mockChangeCreateMany.mockReset();
  mockScrapeCompetitor.mockReset();
  mockDetectChanges.mockReset();
  mockSendInstantAlertWebhook.mockReset();
});

describe("captureSnapshot", () => {
  it("returns failure when competitor doesn't exist", async () => {
    mockFindUnique.mockResolvedValue(null);

    const result = await captureSnapshot("missing");

    expect(result.success).toBe(false);
    expect(result.error).toBe("Competitor not found");
    expect(mockScrapeCompetitor).not.toHaveBeenCalled();
  });

  it("creates a snapshot but skips diff when no previous snapshot exists", async () => {
    mockFindUnique.mockResolvedValue({ ...baseCompetitor, snapshots: [] });
    mockScrapeCompetitor.mockResolvedValue(baseScrape);
    mockSnapshotCreate.mockResolvedValue({ id: "snap1" });

    const result = await captureSnapshot("c1");

    expect(result.success).toBe(true);
    expect(result.snapshotId).toBe("snap1");
    expect(result.changesDetected).toBe(0);
    expect(mockScrapeCompetitor).toHaveBeenCalledWith("https://acme.com", {
      trackPricing: true,
      trackBlog: true,
      trackFeatures: true,
      trackJobs: true,
      trackTech: false,
    });
    expect(mockDetectChanges).not.toHaveBeenCalled();
    expect(mockChangeCreateMany).not.toHaveBeenCalled();
  });

  it("detects changes when a previous snapshot exists", async () => {
    const prev = {
      pricingHtml: "<p>$39/mo</p>",
      featuresHtml: "<p>features</p>",
      blogTitles: [],
      jobTitles: [],
      techStack: ["React"],
    };
    mockFindUnique.mockResolvedValue({
      ...baseCompetitor,
      snapshots: [prev],
    });
    mockScrapeCompetitor.mockResolvedValue(baseScrape);
    mockSnapshotCreate.mockResolvedValue({ id: "snap2" });
    mockDetectChanges.mockResolvedValue([
      {
        changeType: "PRICING",
        summary: "Bumped Pro from $39 to $49",
        details: "diff",
        severity: "HIGH",
        pageUrl: null,
      },
    ]);
    mockChangeCreateMany.mockResolvedValue({ count: 1 });

    const result = await captureSnapshot("c1");

    expect(result.success).toBe(true);
    expect(result.changesDetected).toBe(1);
    expect(mockDetectChanges).toHaveBeenCalledOnce();
    expect(mockChangeCreateMany).toHaveBeenCalledOnce();
    const call = mockChangeCreateMany.mock.calls[0][0];
    expect(call.data[0].changeType).toBe("PRICING");
    expect(call.data[0].competitorId).toBe("c1");
  });

  it("does not push instant alerts when webhook is disabled", async () => {
    mockFindUnique.mockResolvedValue({
      ...baseCompetitor,
      snapshots: [
        {
          pricingHtml: null,
          featuresHtml: null,
          blogTitles: [],
          jobTitles: [],
          techStack: [],
        },
      ],
    });
    mockScrapeCompetitor.mockResolvedValue(baseScrape);
    mockSnapshotCreate.mockResolvedValue({ id: "snap" });
    mockDetectChanges.mockResolvedValue([
      {
        changeType: "PRICING",
        summary: "x",
        details: "y",
        severity: "HIGH",
        pageUrl: null,
      },
    ]);

    await captureSnapshot("c1");

    expect(mockSendInstantAlertWebhook).not.toHaveBeenCalled();
  });

  it("pushes instant alerts on TEAM plan when severity meets threshold", async () => {
    mockFindUnique.mockResolvedValue({
      ...baseCompetitor,
      user: {
        plan: "TEAM",
        webhookEnabled: true,
        webhookUrl: "https://hooks.slack.com/services/x/y/z",
        instantAlertsEnabled: true,
        instantAlertMinSeverity: "MEDIUM",
      },
      snapshots: [
        {
          pricingHtml: null,
          featuresHtml: null,
          blogTitles: [],
          jobTitles: [],
          techStack: [],
        },
      ],
    });
    mockScrapeCompetitor.mockResolvedValue(baseScrape);
    mockSnapshotCreate.mockResolvedValue({ id: "snap" });
    mockDetectChanges.mockResolvedValue([
      {
        changeType: "PRICING",
        summary: "Bumped",
        details: "d",
        severity: "HIGH",
        pageUrl: null,
      },
      {
        changeType: "BLOG",
        summary: "low-noise",
        details: "d",
        severity: "LOW",
        pageUrl: null,
      },
    ]);

    await captureSnapshot("c1");

    // HIGH meets MEDIUM threshold; LOW does not.
    expect(mockSendInstantAlertWebhook).toHaveBeenCalledTimes(1);
  });

  it("skips instant alerts on PRO plan even with instantAlertsEnabled", async () => {
    mockFindUnique.mockResolvedValue({
      ...baseCompetitor,
      user: {
        plan: "PRO",
        webhookEnabled: true,
        webhookUrl: "https://hooks.slack.com/services/x/y/z",
        instantAlertsEnabled: true,
        instantAlertMinSeverity: "LOW",
      },
      snapshots: [
        {
          pricingHtml: null,
          featuresHtml: null,
          blogTitles: [],
          jobTitles: [],
          techStack: [],
        },
      ],
    });
    mockScrapeCompetitor.mockResolvedValue(baseScrape);
    mockSnapshotCreate.mockResolvedValue({ id: "snap" });
    mockDetectChanges.mockResolvedValue([
      {
        changeType: "PRICING",
        summary: "x",
        details: "d",
        severity: "HIGH",
        pageUrl: null,
      },
    ]);

    await captureSnapshot("c1");

    expect(mockSendInstantAlertWebhook).not.toHaveBeenCalled();
  });

  it("returns success=false when scrape throws", async () => {
    mockFindUnique.mockResolvedValue({ ...baseCompetitor, snapshots: [] });
    mockScrapeCompetitor.mockRejectedValue(new Error("boom"));

    const result = await captureSnapshot("c1");

    expect(result.success).toBe(false);
    expect(result.error).toBe("boom");
    expect(mockSnapshotCreate).not.toHaveBeenCalled();
  });
});

describe("captureSnapshotInBackground", () => {
  it("returns void synchronously and doesn't throw on errors", async () => {
    mockFindUnique.mockResolvedValue(null);
    const errSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const result = captureSnapshotInBackground("missing");
    expect(result).toBeUndefined();

    // Let the queued promise settle
    await new Promise((r) => setImmediate(r));

    expect(errSpy).toHaveBeenCalled();
    errSpy.mockRestore();
  });

  it("doesn't reject when underlying capture throws synchronously", async () => {
    mockFindUnique.mockImplementation(() => {
      throw new Error("sync boom");
    });
    const errSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => captureSnapshotInBackground("c1")).not.toThrow();
    await new Promise((r) => setImmediate(r));

    expect(errSpy).toHaveBeenCalled();
    errSpy.mockRestore();
  });
});
