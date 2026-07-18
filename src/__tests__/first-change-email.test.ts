import { describe, it, expect } from "vitest";
import type { ChangeType, Severity } from "@prisma/client";
import {
  renderFirstChangeSubject,
  renderFirstChangeHtml,
  renderFirstChangeText,
  type FirstChangeEmailChange,
  type FirstChangeEmailCompetitor,
  type FirstChangeEmailRecipient,
} from "@/lib/first-change-email";

function makeChange(
  overrides: Partial<FirstChangeEmailChange> = {},
): FirstChangeEmailChange {
  return {
    changeType: "FEATURE" as ChangeType,
    severity: "MEDIUM" as Severity,
    summary: "New enterprise SSO login page added",
    details:
      "Added SAML-based SSO login at /enterprise/sso.\n\nWhat this means for you: Competitor is moving upmarket with enterprise features.",
    ...overrides,
  };
}

function makeCompetitor(
  overrides: Partial<FirstChangeEmailCompetitor> = {},
): FirstChangeEmailCompetitor {
  return {
    name: "Crayon",
    url: "https://crayon.co",
    ...overrides,
  };
}

function makeRecipient(
  overrides: Partial<FirstChangeEmailRecipient> = {},
): FirstChangeEmailRecipient {
  return {
    email: "alice@example.com",
    name: "Alice",
    ...overrides,
  };
}

describe("renderFirstChangeSubject", () => {
  it("includes competitor name", () => {
    const subject = renderFirstChangeSubject(makeCompetitor());
    expect(subject).toContain("Crayon");
  });

  it("mentions monitoring is live", () => {
    const subject = renderFirstChangeSubject(makeCompetitor());
    expect(subject).toContain("monitoring is live");
  });

  it("mentions first changes detected", () => {
    const subject = renderFirstChangeSubject(makeCompetitor());
    expect(subject.toLowerCase()).toContain("first changes detected");
  });
});

describe("renderFirstChangeHtml", () => {
  it("escapes HTML in user-controlled fields (XSS safety)", () => {
    const html = renderFirstChangeHtml(
      makeRecipient({ name: null }),
      makeCompetitor({
        name: "<script>alert(1)</script>",
        url: "https://evil.example.com/\"><img>",
      }),
      [makeChange({ summary: "<b>injected</b>" })],
    );
    expect(html).not.toContain("<script>alert(1)</script>");
    expect(html).not.toContain("<b>injected</b>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&lt;b&gt;injected&lt;/b&gt;");
  });

  it("uses recipient name when available, falls back gracefully", () => {
    const withName = renderFirstChangeHtml(
      makeRecipient({ name: "Alice" }),
      makeCompetitor(),
      [makeChange()],
    );
    const withoutName = renderFirstChangeHtml(
      makeRecipient({ name: null }),
      makeCompetitor(),
      [makeChange()],
    );
    expect(withName).toContain("Hi Alice");
    expect(withoutName).toContain("Hi there");
  });

  it("includes dashboard link", () => {
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor(),
      [makeChange()],
    );
    expect(html).toContain("/dashboard");
  });

  it("renders change summary and type badge", () => {
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor(),
      [makeChange({ changeType: "PRICING" as ChangeType, summary: "Price went up 20%" })],
    );
    expect(html).toContain("Price went up 20%");
    expect(html).toContain("Pricing");
  });

  it("includes competitor name in the heading", () => {
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor({ name: "Klue" }),
      [makeChange()],
    );
    expect(html).toContain("Klue");
    expect(html).toContain("just changed");
  });

  it("limits displayed changes to 5 and shows overflow note", () => {
    const changes = Array.from({ length: 7 }, (_, i) =>
      makeChange({ summary: `Change ${i + 1}` }),
    );
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor(),
      changes,
    );
    expect(html).toContain("Change 1");
    expect(html).toContain("Change 5");
    expect(html).not.toContain("Change 6");
    expect(html).toContain("+ 2 more");
  });

  it("shows singular 'change' for exactly 1 change", () => {
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor(),
      [makeChange()],
    );
    expect(html).toContain("1 change detected");
    expect(html).not.toContain("1 changes");
  });

  it("mentions this is a one-time notification", () => {
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor(),
      [makeChange()],
    );
    expect(html.toLowerCase()).toContain("one-time");
  });

  it("splits details into factual and implication sections", () => {
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor(),
      [
        makeChange({
          details:
            "Added SSO support.\n\nWhat this means for you: Moving upmarket.",
        }),
      ],
    );
    expect(html).toContain("Added SSO support.");
    expect(html).toContain("Why this matters:");
    expect(html).toContain("Moving upmarket.");
  });
});

describe("renderFirstChangeText", () => {
  it("produces a plain-text fallback with no HTML tags", () => {
    const text = renderFirstChangeText(
      makeRecipient(),
      makeCompetitor(),
      [makeChange()],
    );
    expect(text).not.toMatch(/<[a-zA-Z]/);
    expect(text).toContain("Crayon");
    expect(text).toContain("New enterprise SSO login page added");
  });

  it("includes dashboard link", () => {
    const text = renderFirstChangeText(
      makeRecipient(),
      makeCompetitor(),
      [makeChange()],
    );
    expect(text).toContain("/dashboard");
  });

  it("mentions one-time notification", () => {
    const text = renderFirstChangeText(
      makeRecipient(),
      makeCompetitor(),
      [makeChange()],
    );
    expect(text.toLowerCase()).toContain("one-time");
  });

  it("limits displayed changes to 5 with overflow note", () => {
    const changes = Array.from({ length: 8 }, (_, i) =>
      makeChange({ summary: `Change ${i + 1}` }),
    );
    const text = renderFirstChangeText(
      makeRecipient(),
      makeCompetitor(),
      changes,
    );
    expect(text).toContain("Change 5");
    expect(text).not.toContain("Change 6");
    expect(text).toContain("+ 3 more");
  });
});

// ── ticket 7af4: FREE-user upgrade CTA ─────────────────────────────────────

describe("FREE-plan upgrade CTA (ticket 7af4)", () => {
  it("HTML includes upgrade CTA block for FREE users", () => {
    const html = renderFirstChangeHtml(
      makeRecipient({ plan: "FREE" }),
      makeCompetitor(),
      [makeChange()],
    );
    expect(html).toContain("Upgrade to Pro");
    expect(html).toContain("utm_campaign=free-upgrade-7af4");
    expect(html).toContain("weekly digest");
  });

  it("HTML does NOT include upgrade CTA block for PRO users", () => {
    const html = renderFirstChangeHtml(
      makeRecipient({ plan: "PRO" }),
      makeCompetitor(),
      [makeChange()],
    );
    expect(html).not.toContain("utm_campaign=free-upgrade-7af4");
  });

  it("HTML does NOT include upgrade CTA when plan is omitted", () => {
    const html = renderFirstChangeHtml(
      makeRecipient(),
      makeCompetitor(),
      [makeChange()],
    );
    expect(html).not.toContain("utm_campaign=free-upgrade-7af4");
  });

  it("plain text includes upgrade CTA for FREE users", () => {
    const text = renderFirstChangeText(
      makeRecipient({ plan: "FREE" }),
      makeCompetitor(),
      [makeChange()],
    );
    expect(text).toContain("UPGRADE TO PRO");
    expect(text).toContain("utm_campaign=free-upgrade-7af4");
    expect(text).toContain("$49/mo");
  });

  it("plain text does NOT include upgrade CTA for PRO users", () => {
    const text = renderFirstChangeText(
      makeRecipient({ plan: "PRO" }),
      makeCompetitor(),
      [makeChange()],
    );
    expect(text).not.toContain("UPGRADE TO PRO");
  });

  it("upgrade CTA appears before the dashboard button in HTML", () => {
    const html = renderFirstChangeHtml(
      makeRecipient({ plan: "FREE" }),
      makeCompetitor(),
      [makeChange()],
    );
    const upgradeIdx = html.indexOf("utm_campaign=free-upgrade-7af4");
    const dashboardIdx = html.indexOf("/dashboard");
    expect(upgradeIdx).toBeGreaterThan(-1);
    expect(dashboardIdx).toBeGreaterThan(-1);
    // Upgrade CTA link appears before the dashboard link
    expect(upgradeIdx).toBeLessThan(dashboardIdx);
  });
});
