import { describe, it, expect } from "vitest";
import {
  deduplicateMentions,
  mentionSeverity,
  mentionConfidence,
  mentionSummary,
  mentionDetails,
  type CommunityMention,
} from "@/lib/community";
import { computeSignalScore } from "@/lib/signal-score";

// ── Helpers ────────────────────────────────────────────────────

function makeMention(overrides: Partial<CommunityMention> = {}): CommunityMention {
  return {
    source: "hackernews",
    title: "Ask HN: Best competitor monitoring tools?",
    url: "https://news.ycombinator.com/item?id=12345",
    author: "testuser",
    score: 42,
    commentCount: 15,
    publishedAt: new Date("2026-05-19T12:00:00Z"),
    snippet: null,
    ...overrides,
  };
}

// ── mentionSeverity ────────────────────────────────────────────

describe("mentionSeverity", () => {
  it("returns HIGH for HN post with 100+ points", () => {
    expect(mentionSeverity(makeMention({ source: "hackernews", score: 150 }))).toBe("HIGH");
  });

  it("returns HIGH for HN post with 50+ comments", () => {
    expect(mentionSeverity(makeMention({ source: "hackernews", score: 10, commentCount: 60 }))).toBe("HIGH");
  });

  it("returns MEDIUM for HN post with moderate engagement", () => {
    expect(mentionSeverity(makeMention({ source: "hackernews", score: 25, commentCount: 5 }))).toBe("MEDIUM");
  });

  it("returns LOW for HN post with minimal engagement", () => {
    expect(mentionSeverity(makeMention({ source: "hackernews", score: 3, commentCount: 1 }))).toBe("LOW");
  });

  it("returns HIGH for Reddit post with 200+ score", () => {
    expect(mentionSeverity(makeMention({ source: "reddit", score: 250 }))).toBe("HIGH");
  });

  it("returns MEDIUM for Reddit post with moderate engagement", () => {
    expect(mentionSeverity(makeMention({ source: "reddit", score: 40, commentCount: 5 }))).toBe("MEDIUM");
  });

  it("returns LOW for Reddit post with minimal engagement", () => {
    expect(mentionSeverity(makeMention({ source: "reddit", score: 5, commentCount: 2 }))).toBe("LOW");
  });

  it("returns MEDIUM for any G2 review", () => {
    expect(mentionSeverity(makeMention({ source: "g2" }))).toBe("MEDIUM");
  });
});

// ── mentionConfidence ──────────────────────────────────────────

describe("mentionConfidence", () => {
  it("returns base confidence 60 for zero-engagement mention", () => {
    expect(mentionConfidence(makeMention({ score: 0, commentCount: 0 }))).toBe(60);
  });

  it("increases confidence with higher engagement", () => {
    const low = mentionConfidence(makeMention({ score: 5, commentCount: 2 }));
    const high = mentionConfidence(makeMention({ score: 60, commentCount: 25 }));
    expect(high).toBeGreaterThan(low);
  });

  it("caps confidence at 90", () => {
    expect(mentionConfidence(makeMention({ score: 1000, commentCount: 500 }))).toBe(90);
  });
});

// ── mentionSummary ─────────────────────────────────────────────

describe("mentionSummary", () => {
  it("includes source name and title", () => {
    const summary = mentionSummary(makeMention({ source: "hackernews" }));
    expect(summary).toContain("Hacker News");
    expect(summary).toContain("Ask HN: Best competitor monitoring tools?");
  });

  it("includes engagement metrics when available", () => {
    const summary = mentionSummary(makeMention({ score: 42, commentCount: 15 }));
    expect(summary).toContain("42 points");
    expect(summary).toContain("15 comments");
  });

  it("handles Reddit source label", () => {
    const summary = mentionSummary(makeMention({ source: "reddit" }));
    expect(summary).toContain("Reddit");
  });

  it("handles G2 source label", () => {
    const summary = mentionSummary(makeMention({ source: "g2" }));
    expect(summary).toContain("G2");
  });
});

// ── mentionDetails ─────────────────────────────────────────────

describe("mentionDetails", () => {
  it("includes competitor name and strategic advice", () => {
    const details = mentionDetails(makeMention(), "Acme Corp");
    expect(details).toContain("Acme Corp");
    expect(details).toContain("What this means for you:");
  });

  it("recommends active response for high-engagement mentions", () => {
    const details = mentionDetails(
      makeMention({ score: 100, commentCount: 30 }),
      "Acme Corp",
    );
    expect(details).toContain("High engagement");
  });

  it("suggests logging for moderate-engagement mentions", () => {
    const details = mentionDetails(
      makeMention({ score: 5, commentCount: 2 }),
      "Acme Corp",
    );
    expect(details).toContain("log for context");
  });

  it("includes snippet when available", () => {
    const details = mentionDetails(
      makeMention({ snippet: "We switched from Klue to..." }),
      "Acme Corp",
    );
    expect(details).toContain("We switched from Klue to...");
  });
});

// ── deduplicateMentions ────────────────────────────────────────

describe("deduplicateMentions", () => {
  it("removes duplicate URLs, keeping highest-scoring", () => {
    const mentions = [
      makeMention({ url: "https://example.com/1", score: 10 }),
      makeMention({ url: "https://example.com/1", score: 50 }),
      makeMention({ url: "https://example.com/2", score: 20 }),
    ];
    const result = deduplicateMentions(mentions);
    expect(result).toHaveLength(2);
    expect(result.find((m) => m.url === "https://example.com/1")?.score).toBe(50);
  });

  it("returns empty array for empty input", () => {
    expect(deduplicateMentions([])).toEqual([]);
  });

  it("preserves unique mentions", () => {
    const mentions = [
      makeMention({ url: "https://a.com" }),
      makeMention({ url: "https://b.com" }),
    ];
    expect(deduplicateMentions(mentions)).toHaveLength(2);
  });
});

// ── Signal score integration ───────────────────────────────────

describe("COMMUNITY signal scoring", () => {
  it("COMMUNITY changeType produces a valid signal score", () => {
    const score = computeSignalScore({
      confidence: 75,
      severity: "MEDIUM",
      changeType: "COMMUNITY",
      contentZone: "MARKETING",
      batchSize: 3,
    });
    expect(score).toBeGreaterThan(0);
    expect(score).toBeLessThanOrEqual(1);
  });

  it("high-engagement HN post passes PERSIST threshold", () => {
    const mention = makeMention({ score: 100, commentCount: 50 });
    const confidence = mentionConfidence(mention);
    const severity = mentionSeverity(mention);
    const score = computeSignalScore({
      confidence,
      severity,
      changeType: "COMMUNITY",
      contentZone: "MARKETING",
      batchSize: 2,
    });
    expect(score).toBeGreaterThanOrEqual(0.3); // PERSIST threshold
  });

  it("COMMUNITY reliability sits between GENERAL and FEATURE", () => {
    const base = {
      confidence: 70,
      severity: "MEDIUM" as const,
      contentZone: "MARKETING" as const,
      batchSize: 2,
    };

    const community = computeSignalScore({ ...base, changeType: "COMMUNITY" });
    const general = computeSignalScore({ ...base, changeType: "GENERAL" });
    const feature = computeSignalScore({ ...base, changeType: "FEATURE" });

    expect(community).toBeGreaterThan(general);
    expect(community).toBeLessThan(feature);
  });
});
