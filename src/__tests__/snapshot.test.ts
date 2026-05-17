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
        contentZone: "MONETIZATION",
        summary: "Bumped Pro from $39 to $49",
        details: "diff",
        severity: "HIGH",
        confidence: 95,
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
    expect(call.data[0].contentZone).toBe("MONETIZATION");
    expect(call.data[0].competitorId).toBe("c1");
    expect(call.data[0].confidenceScore).toBe(0.95);
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
        contentZone: "MONETIZATION",
        summary: "x",
        details: "y",
        severity: "HIGH",
        confidence: 90,
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
        contentZone: "MONETIZATION",
        summary: "Bumped",
        details: "d",
        severity: "HIGH",
        confidence: 85,
        pageUrl: null,
      },
      {
        changeType: "BLOG",
        contentZone: "MARKETING",
        summary: "low-noise",
        details: "d",
        severity: "LOW",
        confidence: 80,
        pageUrl: null,
      },
    ]);

    await captureSnapshot("c1");

    // HIGH meets MEDIUM threshold with confidence >= 70; LOW severity does not meet threshold.
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
        contentZone: "MONETIZATION",
        summary: "x",
        details: "d",
        severity: "HIGH",
        confidence: 90,
        pageUrl: null,
      },
    ]);

    await captureSnapshot("c1");

    expect(mockSendInstantAlertWebhook).not.toHaveBeenCalled();
  });

  it("filters out weak-signal changes via composite signal score", async () => {
    const prev = {
      pricingHtml: "<p>$39/mo</p>",
      featuresHtml: null,
      blogTitles: [],
      jobTitles: [],
      techStack: [],
    };
    mockFindUnique.mockResolvedValue({
      ...baseCompetitor,
      snapshots: [prev],
    });
    mockScrapeCompetitor.mockResolvedValue(baseScrape);
    mockSnapshotCreate.mockResolvedValue({ id: "snap" });
    mockDetectChanges.mockResolvedValue([
      {
        changeType: "PRICING",
        contentZone: "MONETIZATION",
        summary: "Real pricing change",
        details: "d",
        severity: "HIGH",
        confidence: 92,
        pageUrl: null,
      },
      {
        changeType: "GENERAL",
        contentZone: "UNKNOWN",
        summary: "Formatting noise",
        details: "d",
        severity: "LOW",
        confidence: 5, // Very low confidence + weak type/zone = below signal threshold
        pageUrl: null,
      },
    ]);
    mockChangeCreateMany.mockResolvedValue({ count: 1 });

    const result = await captureSnapshot("c1");

    expect(result.changesDetected).toBe(1);
    const call = mockChangeCreateMany.mock.calls[0][0];
    expect(call.data).toHaveLength(1);
    expect(call.data[0].summary).toBe("Real pricing change");
    expect(call.data[0].confidenceScore).toBe(0.92);
    expect(call.data[0].signalScore).toBeGreaterThan(0);
  });

  it("does not persist anything when all changes have weak signal scores", async () => {
    const prev = {
      pricingHtml: "<p>$39/mo</p>",
      featuresHtml: null,
      blogTitles: [],
      jobTitles: [],
      techStack: [],
    };
    mockFindUnique.mockResolvedValue({
      ...baseCompetitor,
      snapshots: [prev],
    });
    mockScrapeCompetitor.mockResolvedValue(baseScrape);
    mockSnapshotCreate.mockResolvedValue({ id: "snap" });
    mockDetectChanges.mockResolvedValue([
      {
        changeType: "GENERAL",
        contentZone: "UNKNOWN",
        summary: "Noise 1",
        details: "d",
        severity: "LOW",
        confidence: 5, // Extremely low confidence, weak type/zone → below signal threshold
        pageUrl: null,
      },
      {
        changeType: "GENERAL",
        contentZone: "UNKNOWN",
        summary: "Noise 2",
        details: "d",
        severity: "LOW",
        confidence: 10,
        pageUrl: null,
      },
    ]);

    const result = await captureSnapshot("c1");

    expect(result.changesDetected).toBe(0);
    expect(mockChangeCreateMany).not.toHaveBeenCalled();
  });

  it("skips instant alerts for changes with weak signal score even if severity is high", async () => {
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
        changeType: "GENERAL",
        contentZone: "UNKNOWN",
        summary: "Maybe changed",
        details: "d",
        severity: "HIGH",
        confidence: 30, // Low confidence + weak type/zone = persisted but below alert threshold
        pageUrl: null,
      },
    ]);
    mockChangeCreateMany.mockResolvedValue({ count: 1 });

    await captureSnapshot("c1");

    // Change is persisted (signal score above PERSIST) but no alert (below INSTANT_ALERT)
    expect(mockChangeCreateMany).toHaveBeenCalledOnce();
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
