import { describe, it, expect } from "vitest";
import {
  groupChangesByCompetitor,
  renderDigestHtml,
  renderDigestText,
  digestSubject,
  buildWelcomeDigest,
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
    contentZone: "MONETIZATION",
    summary: "Pro plan increased from $49 to $59",
    details: "The Pro tier monthly price was raised by $10.",
    severity: "HIGH",
    confidenceScore: 0.9,
    signalScore: 0.85,
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
          { changeType: "BLOG", contentZone: "MARKETING", summary: "New post", details: null, severity: "LOW", signalScore: 0.5, createdAt: new Date() },
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
          { changeType: "PRICING", contentZone: "MONETIZATION", summary: "Price hike", details: null, severity: "HIGH", signalScore: 0.9, createdAt: new Date() },
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
          { changeType: "BLOG", contentZone: "MARKETING", summary: "p1", details: null, severity: "LOW", signalScore: 0.5, createdAt: new Date() },
          { changeType: "BLOG", contentZone: "MARKETING", summary: "p2", details: null, severity: "LOW", signalScore: 0.5, createdAt: new Date() },
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
          { changeType: "PRICING", contentZone: "MONETIZATION", summary: "Price increased", details: "Pro plan $49 → $59", severity: "HIGH", signalScore: 0.9, createdAt: new Date() },
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
          { changeType: "GENERAL", contentZone: "UNKNOWN", summary: '<img onerror="hack">', details: null, severity: "LOW", signalScore: 0.3, createdAt: new Date() },
        ],
      },
    ];
    const html = renderDigestHtml(testUser, groups, "WEEKLY");
    expect(html).not.toContain("<script>");
    expect(html).not.toContain('onerror="hack"');
    expect(html).toContain("&lt;script&gt;");
  });

  it("highlights the 'What this means for you' implication line", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme Corp", url: "https://acme.com" },
        changes: [
          {
            changeType: "PRICING",
            contentZone: "MONETIZATION",
            summary: "Pro plan raised $49 → $59",
            details:
              "Acme increased the Pro tier from $49/mo to $59/mo (20% hike).\nWhat this means for you: A price-sensitive prospect who balked at $49 may now see KompWatch as the obvious value pick.",
            severity: "HIGH",
            signalScore: 0.9,
            createdAt: new Date(),
          },
        ],
      },
    ];
    const html = renderDigestHtml(testUser, groups, "DAILY");
    // The implication prefix should be bolded and on its own line
    expect(html).toMatch(/<br\/><strong[^>]*>What this means for you:<\/strong>/);
    // Original details text still present (escaped)
    expect(html).toContain("price-sensitive prospect");
  });

  it("escapes details content even when implication prefix is present", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme", url: "https://acme.com" },
        changes: [
          {
            changeType: "FEATURE",
            contentZone: "PRODUCT",
            summary: "Shipped <feature>",
            details:
              'Acme shipped <script>alert("x")</script>.\nWhat this means for you: <img onerror="bad">',
            severity: "MEDIUM",
            signalScore: 0.7,
            createdAt: new Date(),
          },
        ],
      },
    ];
    const html = renderDigestHtml(testUser, groups, "DAILY");
    expect(html).not.toContain("<script>alert");
    expect(html).not.toContain('onerror="bad"');
    expect(html).toContain("&lt;script&gt;");
  });

  it("shows signal score badge for weak-signal changes in HTML", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme Corp", url: "https://acme.com" },
        changes: [
          { changeType: "GENERAL", contentZone: "UNKNOWN", summary: "Minor copy tweak", details: null, severity: "LOW", signalScore: 0.35, createdAt: new Date() },
          { changeType: "PRICING", contentZone: "MONETIZATION", summary: "Major price hike", details: null, severity: "HIGH", signalScore: 0.9, createdAt: new Date() },
        ],
      },
    ];
    const html = renderDigestHtml(testUser, groups, "DAILY");
    // Weak signal should show "Noise signal" badge
    expect(html).toContain("Noise signal");
    // Strong signal should NOT show any badge
    expect(html).not.toContain("Strong signal");
  });

  it("shows signal score label in plain text for non-strong signals", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme Corp", url: "https://acme.com" },
        changes: [
          { changeType: "GENERAL", contentZone: "UNKNOWN", summary: "Weak change", details: null, severity: "LOW", signalScore: 0.45, createdAt: new Date() },
        ],
      },
    ];
    const text = renderDigestText(testUser, groups, "DAILY");
    expect(text).toContain("[Weak]");
  });

  it("includes mobile-responsive meta tags and media queries", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Acme Corp", url: "https://acme.com" },
        changes: [
          { changeType: "PRICING", contentZone: "MONETIZATION", summary: "Price hike", details: null, severity: "HIGH", signalScore: 0.9, createdAt: new Date() },
        ],
      },
    ];
    const html = renderDigestHtml(testUser, groups, "DAILY");
    expect(html).toContain('name="viewport"');
    expect(html).toContain("width=device-width");
    expect(html).toContain("@media only screen and (max-width: 480px)");
    expect(html).toContain("-webkit-text-size-adjust:100%");
    expect(html).toContain("x-apple-disable-message-reformatting");
  });

  it("uses generic greeting when no name", () => {
    const groups: DigestCompetitorGroup[] = [
      {
        competitor: { name: "Test", url: "https://test.com" },
        changes: [
          { changeType: "BLOG", contentZone: "MARKETING", summary: "New post", details: null, severity: "LOW", signalScore: 0.5, createdAt: new Date() },
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
          { changeType: "PRICING", contentZone: "MONETIZATION", summary: "Price increased", details: "Details here", severity: "HIGH", signalScore: 0.9, createdAt: new Date() },
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

describe("buildWelcomeDigest", () => {
  it("returns subject, html, and text", () => {
    const result = buildWelcomeDigest(testUser);
    expect(result.subject).toBeTruthy();
    expect(result.html).toContain("<!DOCTYPE html>");
    expect(result.text).toBeTruthy();
  });

  it("includes sample digest banner in HTML", () => {
    const result = buildWelcomeDigest(testUser);
    expect(result.html).toContain("Sample digest");
    expect(result.html).toContain("Acme Analytics");
    expect(result.html).toContain("demo data");
  });

  it("includes sample notice in plain text", () => {
    const result = buildWelcomeDigest(testUser);
    expect(result.text).toContain("[SAMPLE DIGEST]");
    expect(result.text).toContain("Acme Analytics");
  });

  it("includes all three demo change types", () => {
    const result = buildWelcomeDigest(testUser);
    expect(result.html).toContain("Increased Pro plan price");
    expect(result.html).toContain("AI-powered reporting");
    expect(result.html).toContain("Betting Big on AI");
  });

  it("uses personalized greeting when name is set", () => {
    const result = buildWelcomeDigest({ name: "Bob", email: "bob@test.com" });
    expect(result.html).toContain("Hi Bob");
    expect(result.text).toContain("Hi Bob");
  });

  it("uses generic greeting when name is null", () => {
    const result = buildWelcomeDigest({ name: null, email: "anon@test.com" });
    expect(result.html).toContain("Hi there");
    expect(result.text).toContain("Hi there");
  });

  it("has a descriptive subject line", () => {
    const result = buildWelcomeDigest(testUser);
    expect(result.subject).toContain("first KompWatch digest");
  });
});

describe("free-tier upgrade CTA in digest (ticket dd83)", () => {
  const sampleGroups: DigestCompetitorGroup[] = [
    {
      competitor: { name: "Acme Corp", url: "https://acme.com" },
      changes: [
        {
          changeType: "PRICING",
          contentZone: "MONETIZATION",
          summary: "Price increased",
          details: null,
          severity: "HIGH",
          signalScore: 0.9,
          createdAt: new Date(),
        },
      ],
    },
  ];

  it("renders upgrade CTA in HTML for FREE plan users", () => {
    const html = renderDigestHtml(
      { name: "Alice", email: "alice@example.com", plan: "FREE" },
      sampleGroups,
      "WEEKLY",
    );
    expect(html).toContain("Upgrade to Pro");
    expect(html).toContain("utm_source=digest");
    expect(html).toContain("utm_campaign=free_footer_cta");
    expect(html).toContain("/pricing?");
  });

  it("renders upgrade CTA in plain text for FREE plan users", () => {
    const text = renderDigestText(
      { name: "Alice", email: "alice@example.com", plan: "FREE" },
      sampleGroups,
      "WEEKLY",
    );
    expect(text).toContain("Upgrade to Pro");
    expect(text).toContain("utm_source=digest");
    expect(text).toContain("$49/mo");
  });

  it("does NOT render upgrade CTA for PRO users", () => {
    const html = renderDigestHtml(
      { name: "Alice", email: "alice@example.com", plan: "PRO" },
      sampleGroups,
      "DAILY",
    );
    const text = renderDigestText(
      { name: "Alice", email: "alice@example.com", plan: "PRO" },
      sampleGroups,
      "DAILY",
    );
    expect(html).not.toContain("Upgrade to Pro");
    expect(html).not.toContain("utm_campaign=free_footer_cta");
    expect(text).not.toContain("Upgrade to Pro");
  });

  it("does NOT render upgrade CTA for TEAM users", () => {
    const html = renderDigestHtml(
      { name: "Alice", email: "alice@example.com", plan: "TEAM" },
      sampleGroups,
      "DAILY",
    );
    expect(html).not.toContain("Upgrade to Pro");
    expect(html).not.toContain("utm_campaign=free_footer_cta");
  });

  it("does NOT render upgrade CTA when plan is undefined (welcome digest)", () => {
    const html = renderDigestHtml(
      { name: "Alice", email: "alice@example.com" },
      sampleGroups,
      "WEEKLY",
    );
    expect(html).not.toContain("Upgrade to Pro");
  });

  it("welcome digest does not include upgrade CTA (plan is unknown)", () => {
    const result = buildWelcomeDigest({ name: "Bob", email: "bob@test.com" });
    expect(result.html).not.toContain("Upgrade to Pro");
    expect(result.text).not.toContain("Upgrade to Pro");
  });
});
