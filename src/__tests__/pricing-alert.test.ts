import { describe, it, expect } from "vitest";
import type { ChangeType, Plan, Severity } from "@prisma/client";
import {
  INSTANT_PRICING_MIN_CONFIDENCE,
  INSTANT_PRICING_MIN_SEVERITY,
  renderInstantPricingAlertHtml,
  renderInstantPricingAlertSubject,
  renderInstantPricingAlertText,
  shouldSendInstantPricingAlert,
  type InstantPricingAlertChange,
  type InstantPricingAlertGate,
} from "@/lib/pricing-alert";

function makeChange(
  overrides: Partial<InstantPricingAlertChange> = {},
): InstantPricingAlertChange {
  return {
    changeType: "PRICING" as ChangeType,
    severity: "HIGH" as Severity,
    summary: "Pro plan price increased from $49 to $59/mo",
    details:
      "Crayon raised Pro plan from $49 to $59 effective next billing cycle.\n\nImplication: lock in current price before renewal.",
    pageUrl: "https://competitor.example.com/pricing",
    confidence: 85,
    ...overrides,
  };
}

function makeGate(
  overrides: Partial<InstantPricingAlertGate> = {},
): InstantPricingAlertGate {
  return {
    plan: "PRO" as Plan,
    instantPricingAlertsEnabled: true,
    ...overrides,
  };
}

describe("shouldSendInstantPricingAlert — plan gating", () => {
  it("allows PRO users", () => {
    expect(
      shouldSendInstantPricingAlert(makeChange(), makeGate({ plan: "PRO" })),
    ).toBe(true);
  });

  it("allows TEAM users", () => {
    expect(
      shouldSendInstantPricingAlert(makeChange(), makeGate({ plan: "TEAM" })),
    ).toBe(true);
  });

  it("blocks FREE users (instant alerts are a paid benefit)", () => {
    expect(
      shouldSendInstantPricingAlert(makeChange(), makeGate({ plan: "FREE" })),
    ).toBe(false);
  });
});

describe("shouldSendInstantPricingAlert — user opt-out", () => {
  it("respects user-disabled instant pricing alerts", () => {
    expect(
      shouldSendInstantPricingAlert(
        makeChange(),
        makeGate({ instantPricingAlertsEnabled: false }),
      ),
    ).toBe(false);
  });
});

describe("shouldSendInstantPricingAlert — change-type filter", () => {
  it("only fires for PRICING changes", () => {
    const types: ChangeType[] = [
      "CONTENT",
      "VISUAL",
      "FEATURE",
      "PRICING",
    ] as ChangeType[];
    const results = types.map((changeType) =>
      shouldSendInstantPricingAlert(makeChange({ changeType }), makeGate()),
    );
    expect(results).toEqual([false, false, false, true]);
  });
});

describe("shouldSendInstantPricingAlert — severity threshold", () => {
  it("uses MEDIUM as the documented minimum", () => {
    expect(INSTANT_PRICING_MIN_SEVERITY).toBe("MEDIUM");
  });

  it("blocks LOW severity (digest-only noise)", () => {
    expect(
      shouldSendInstantPricingAlert(
        makeChange({ severity: "LOW" as Severity }),
        makeGate(),
      ),
    ).toBe(false);
  });

  it("allows MEDIUM, HIGH, CRITICAL", () => {
    for (const severity of ["MEDIUM", "HIGH", "CRITICAL"] as Severity[]) {
      expect(
        shouldSendInstantPricingAlert(
          makeChange({ severity }),
          makeGate(),
        ),
      ).toBe(true);
    }
  });
});

describe("shouldSendInstantPricingAlert — confidence floor", () => {
  it("uses 70% to match the Slack instant-alert path", () => {
    expect(INSTANT_PRICING_MIN_CONFIDENCE).toBe(70);
  });

  it("blocks low-confidence (<70) AI classifications", () => {
    expect(
      shouldSendInstantPricingAlert(
        makeChange({ confidence: 69 }),
        makeGate(),
      ),
    ).toBe(false);
  });

  it("allows confidence at or above 70", () => {
    expect(
      shouldSendInstantPricingAlert(
        makeChange({ confidence: 70 }),
        makeGate(),
      ),
    ).toBe(true);
    expect(
      shouldSendInstantPricingAlert(
        makeChange({ confidence: 100 }),
        makeGate(),
      ),
    ).toBe(true);
  });
});

describe("renderInstantPricingAlertSubject", () => {
  it("includes competitor name and summary", () => {
    const subject = renderInstantPricingAlertSubject(
      { name: "Crayon", url: "https://crayon.co" },
      { severity: "HIGH" as Severity, summary: "Pro plan up 20%" },
    );
    expect(subject).toContain("Crayon");
    expect(subject).toContain("Pro plan up 20%");
  });

  it("truncates long summaries", () => {
    const longSummary = "a".repeat(200);
    const subject = renderInstantPricingAlertSubject(
      { name: "Crayon", url: "https://crayon.co" },
      { severity: "HIGH" as Severity, summary: longSummary },
    );
    expect(subject.length).toBeLessThan(160);
    expect(subject).toContain("...");
  });

  it("prefixes a severity emoji", () => {
    const subject = renderInstantPricingAlertSubject(
      { name: "Crayon", url: "https://crayon.co" },
      { severity: "CRITICAL" as Severity, summary: "Pivot" },
    );
    // CRITICAL emoji is 🔴; just assert there's a non-ascii char at start
    expect(subject.codePointAt(0)).toBeGreaterThan(127);
  });
});

describe("renderInstantPricingAlertHtml", () => {
  it("escapes HTML in user-controlled fields (XSS safety)", () => {
    const html = renderInstantPricingAlertHtml(
      { email: "alice@example.com", name: null },
      {
        name: "<script>alert(1)</script>",
        url: "https://evil.example.com/\"><img>",
      },
      {
        severity: "HIGH" as Severity,
        summary: "<b>injected</b>",
        details: null,
        pageUrl: null,
      },
    );
    expect(html).not.toContain("<script>alert(1)</script>");
    expect(html).not.toContain("<b>injected</b>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&lt;b&gt;injected&lt;/b&gt;");
  });

  it("includes a settings link so recipients can unsubscribe", () => {
    const html = renderInstantPricingAlertHtml(
      { email: "alice@example.com", name: "Alice" },
      { name: "Crayon", url: "https://crayon.co" },
      {
        severity: "HIGH" as Severity,
        summary: "Pro plan price up",
        details: null,
        pageUrl: null,
      },
    );
    expect(html).toContain("/settings");
    expect(html.toLowerCase()).toContain("disable");
  });

  it("uses recipient name when available, falls back gracefully", () => {
    const withName = renderInstantPricingAlertHtml(
      { email: "alice@example.com", name: "Alice" },
      { name: "Crayon", url: "https://crayon.co" },
      {
        severity: "HIGH" as Severity,
        summary: "Pricing change",
        details: null,
        pageUrl: null,
      },
    );
    const withoutName = renderInstantPricingAlertHtml(
      { email: "alice@example.com", name: null },
      { name: "Crayon", url: "https://crayon.co" },
      {
        severity: "HIGH" as Severity,
        summary: "Pricing change",
        details: null,
        pageUrl: null,
      },
    );
    expect(withName).toContain("Hi Alice");
    expect(withoutName).toContain("Hi there");
  });
});

describe("renderInstantPricingAlertText", () => {
  it("produces a plain-text fallback with no HTML tags", () => {
    const text = renderInstantPricingAlertText(
      { email: "alice@example.com", name: "Alice" },
      { name: "Crayon", url: "https://crayon.co" },
      {
        severity: "HIGH" as Severity,
        summary: "Pro plan price increased",
        details: "Was $49, now $59.",
        pageUrl: "https://crayon.co/pricing",
      },
    );
    expect(text).not.toMatch(/<[a-zA-Z]/);
    expect(text).toContain("Crayon");
    expect(text).toContain("Pro plan price increased");
    expect(text).toContain("https://crayon.co/pricing");
  });
});
