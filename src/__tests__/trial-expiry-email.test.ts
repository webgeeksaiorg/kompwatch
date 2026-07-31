import { describe, it, expect } from "vitest";
import {
  daysUntilTrialEnd,
  renderTrialExpirySubject,
  renderTrialExpiryHtml,
  renderTrialExpiryText,
  type TrialExpiryEmailContext,
  type TrialExpiryEmailRecipient,
} from "@/lib/trial-expiry-email";

// Fixed reference time so day-diff math is deterministic.
// 2026-07-20T00:00:00Z
const NOW_MS = Date.UTC(2026, 6, 20, 0, 0, 0);
const DAY_SEC = 24 * 60 * 60;

function makeCtx(overrides: Partial<TrialExpiryEmailContext> = {}): TrialExpiryEmailContext {
  return {
    plan: "PRO",
    // Default: 3 days out (Stripe's standard trial_will_end lead time)
    trialEndUnixSec: Math.floor(NOW_MS / 1000) + 3 * DAY_SEC,
    nowMs: NOW_MS,
    ...overrides,
  };
}

function makeRecipient(
  overrides: Partial<TrialExpiryEmailRecipient> = {},
): TrialExpiryEmailRecipient {
  return {
    email: "trial@example.com",
    name: "Trial User",
    ...overrides,
  };
}

describe("daysUntilTrialEnd", () => {
  it("returns 3 for a trial ending 3 days from now", () => {
    expect(daysUntilTrialEnd(makeCtx())).toBe(3);
  });

  it("rounds up partial days (23h left → 1 day)", () => {
    const ctx = makeCtx({
      trialEndUnixSec: Math.floor(NOW_MS / 1000) + 23 * 60 * 60,
    });
    expect(daysUntilTrialEnd(ctx)).toBe(1);
  });

  it("returns 0 when trial has already ended", () => {
    const ctx = makeCtx({
      trialEndUnixSec: Math.floor(NOW_MS / 1000) - 60,
    });
    expect(daysUntilTrialEnd(ctx)).toBe(0);
  });

  it("returns 1 for anything under a full day but still in the future", () => {
    const ctx = makeCtx({
      trialEndUnixSec: Math.floor(NOW_MS / 1000) + 60 * 60, // 1 hour
    });
    expect(daysUntilTrialEnd(ctx)).toBe(1);
  });
});

describe("renderTrialExpirySubject", () => {
  it("uses 'tomorrow' when 1 day or less remains", () => {
    const ctx = makeCtx({
      trialEndUnixSec: Math.floor(NOW_MS / 1000) + 12 * 60 * 60,
    });
    expect(renderTrialExpirySubject(ctx)).toBe(
      "Your KompWatch trial ends tomorrow",
    );
  });

  it("includes the day count for multi-day windows", () => {
    expect(renderTrialExpirySubject(makeCtx())).toBe(
      "Your KompWatch trial ends in 3 days",
    );
  });
});

describe("renderTrialExpiryHtml", () => {
  it("greets the recipient by name when provided", () => {
    const html = renderTrialExpiryHtml(makeRecipient(), makeCtx());
    expect(html).toContain("Hi Trial User");
  });

  it("falls back to a generic greeting when name is null", () => {
    const html = renderTrialExpiryHtml(makeRecipient({ name: null }), makeCtx());
    expect(html).toContain("Hi there");
  });

  it("includes the plan price for PRO trials", () => {
    const html = renderTrialExpiryHtml(makeRecipient(), makeCtx({ plan: "PRO" }));
    expect(html).toContain("$49/month");
    expect(html).toContain("10 competitors");
  });

  it("includes the plan price and higher competitor limit for TEAM trials", () => {
    const html = renderTrialExpiryHtml(
      makeRecipient(),
      makeCtx({ plan: "TEAM" }),
    );
    expect(html).toContain("$149/month");
    expect(html).toContain("50 competitors");
  });

  it("uses UTM-tagged upgrade/dashboard links so the ticket-f25d nudge is attributable", () => {
    const html = renderTrialExpiryHtml(makeRecipient(), makeCtx());
    expect(html).toContain("utm_source=email");
    expect(html).toContain("utm_medium=trial-expiry");
    expect(html).toContain("utm_campaign=trial-nudge-f25d");
  });

  it("escapes HTML in the recipient name to prevent injection", () => {
    const html = renderTrialExpiryHtml(
      makeRecipient({ name: '<script>alert("xss")</script>' }),
      makeCtx(),
    );
    expect(html).not.toContain("<script>alert");
    expect(html).toContain("&lt;script&gt;");
  });

  it("shifts the countdown copy to 'tomorrow' when < 1 day remains", () => {
    const ctx = makeCtx({
      trialEndUnixSec: Math.floor(NOW_MS / 1000) + 12 * 60 * 60,
    });
    const html = renderTrialExpiryHtml(makeRecipient(), ctx);
    expect(html).toContain("trial ends tomorrow");
    expect(html).not.toContain("in 3 days");
  });
});

describe("renderTrialExpiryText", () => {
  it("mirrors the HTML with the plan label, price, and CTAs", () => {
    const text = renderTrialExpiryText(makeRecipient(), makeCtx({ plan: "PRO" }));
    expect(text).toContain("Pro");
    expect(text).toContain("$49/month");
    expect(text).toContain("/dashboard");
    expect(text).toContain("/settings/billing");
  });

  it("uses the higher competitor limit for TEAM plan", () => {
    const text = renderTrialExpiryText(
      makeRecipient(),
      makeCtx({ plan: "TEAM" }),
    );
    expect(text).toContain("50 competitors");
    expect(text).toContain("$149/month");
  });

  it("includes the 'ends tomorrow' urgency phrase when < 1 day remains", () => {
    const ctx = makeCtx({
      trialEndUnixSec: Math.floor(NOW_MS / 1000) + 12 * 60 * 60,
    });
    const text = renderTrialExpiryText(makeRecipient(), ctx);
    expect(text).toContain("TOMORROW");
  });
});
