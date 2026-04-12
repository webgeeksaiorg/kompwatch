import { describe, it, expect } from "vitest";
import {
  groupChangesByCompetitor,
  renderDigestHtml,
  renderDigestText,
  digestSubject,
  DigestCompetitorGroup,
} from "@/lib/digest";
import type { Change, Competitor } from "@prisma/client";

// Minimal test fixtures
const makeChange = (overrides: Partial<Change & { competitor: Competitor }> = {}) =>
  ({
    id: "ch_1",
    competitorId: "comp_1",
    createdAt: new Date("2026-04-12T10:00:00Z"),
    changeType: "PRICING",
    summary: "Pro plan increased from $49 to $59",
    details: "The Pro tier monthly price was raised by $10.",
    severity: "HIGH",
    pageUrl: null,
    digestId: null,
    competitor: {
      id: "comp_1",
      userId: "user_1",
      name: "Acme Corp",
      url: "https://acme.com",
      createdAt: new Date(),
      isActive: true,
      trackPricing: true,
      trackBlog: true,
      trackFeatures: true,
      trackJobs: true,
      trackTech: false,
    },
    ...overrides,
  }) as Change & { competitor: Competitor };

const testUser = { name: "Alice", email: "alice@example.com" };

describe("groupChangesByCompetitor", () => {
  it("groups changes by competitor", () => {
    const changes = [
      makeChange({ id: "ch_1", competitorId: "comp_1" }),
      makeChange({
        id: "ch_2",
        competitorId: "comp_2",
        changeType: "BLOG",
        summary: "New blog post",
        severity: "LOW",
        competitor: {
          ...makeChange().competitor,
          id: "comp_2",
          name: "Beta Inc",
          url: "https://beta.io",
        },
      }),
      makeChange({ id: "ch_3", competitorId: "comp_1", summary: "New feature announced" }),
    ];

    const groups = groupChangesByCompetitor(changes);
    expect(groups).toHaveLength(2);
    expect(groups[0].competitor.name).toBe("Acme Corp");
    expect(groups[0].changes).toHaveLength(2);
    expect(groups[1].competitor.name).toBe("Beta Inc");
    expect(groups[1].changes).toHaveLength(1);
  });

  it("returns empty array for no changes", () => {
    expect(groupChangesByCompetitor([])).toEqual([]);
  });
});

describe("digestSubject", () => {
  it("includes change count", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme", url: "https://acme.com" },
        changes: [
          { changeType: "BLOG", summary: "New post", details: null, severity: "LOW", createdAt: new Date() },
        ],
      },
    ];
    const subject = digestSubject(groups, "DAILY");
    expect(subject).toContain("1 competitor change");
    expect(subject).toContain("Daily");
  });

  it("adds alert emoji for HIGH severity", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme", url: "https://acme.com" },
        changes: [
          { changeType: "PRICING", summary: "Price hike", details: null, severity: "HIGH", createdAt: new Date() },
        ],
      },
    ];
    const subject = digestSubject(groups, "WEEKLY");
    expect(subject).toMatch(/^🔴/);
    expect(subject).toContain("Weekly");
  });

  it("pluralizes correctly for multiple changes", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "A", url: "https://a.com" },
        changes: [
          { changeType: "BLOG", summary: "p1", details: null, severity: "LOW", createdAt: new Date() },
          { changeType: "BLOG", summary: "p2", details: null, severity: "LOW", createdAt: new Date() },
        ],
      },
    ];
    expect(digestSubject(groups, "DAILY")).toContain("2 competitor changes");
  });
});

describe("renderDigestHtml", () => {
  it("renders valid HTML with competitor sections", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme Corp", url: "https://acme.com" },
        changes: [
          { changeType: "PRICING", summary: "Price increased", details: "Pro plan $49 → $59", severity: "HIGH", createdAt: new Date() },
        ],
      },
    ];
    const html = renderDigestHtml(testUser, groups, "DAILY");
    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain("Hi Alice");
    expect(html).toContain("Acme Corp");
    expect(html).toContain("Price increased");
    expect(html).toContain("1 change");
    expect(html).toContain("Daily Digest");
  });

  it("escapes HTML in user-provided content", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: '<script>alert("xss")</script>', url: "https://evil.com" },
        changes: [
          { changeType: "GENERAL", summary: '<img onerror="hack">', details: null, severity: "LOW", createdAt: new Date() },
        ],
      },
    ];
    const html = renderDigestHtml(testUser, groups, "WEEKLY");
    expect(html).not.toContain("<script>");
    expect(html).not.toContain('onerror="hack"');
    expect(html).toContain("&lt;script&gt;");
  });

  it("uses generic greeting when no name", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Test", url: "https://test.com" },
        changes: [
          { changeType: "BLOG", summary: "New post", details: null, severity: "LOW", createdAt: new Date() },
        ],
      },
    ];
    const html = renderDigestHtml({ name: null, email: "anon@example.com" }, groups, "DAILY");
    expect(html).toContain("Hi there");
  });
});

describe("renderDigestText", () => {
  it("renders plain text with competitor sections", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme Corp", url: "https://acme.com" },
        changes: [
          { changeType: "PRICING", summary: "Price increased", details: "Details here", severity: "HIGH", createdAt: new Date() },
        ],
      },
    ];
    const text = renderDigestText(testUser, groups, "WEEKLY");
    expect(text).toContain("Hi Alice");
    expect(text).toContain("Acme Corp");
    expect(text).toContain("Price increased");
    expect(text).toContain("Weekly Digest");
    expect(text).toContain("Details here");
  });
});
