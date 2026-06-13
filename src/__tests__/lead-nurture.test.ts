import { describe, it, expect } from "vitest";
import {
  getNextLeadNurtureStep,
  buildSnapshotRecapEmail,
  buildValueTipsEmail,
  buildFinalConversionEmail,
  MAX_LEAD_NURTURE_STEP,
} from "@/lib/lead-nurture";

function daysAgo(days: number): Date {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

const testLead = {
  id: "test-lead-id",
  email: "lead@example.com",
  competitorUrl: "https://competitor.com",
};

const testLeadNoUrl = {
  id: "test-lead-no-url-id",
  email: "lead@example.com",
  competitorUrl: null,
};

describe("getNextLeadNurtureStep", () => {
  it("returns null for a brand new lead (less than 1 day old)", () => {
    const step = getNextLeadNurtureStep({
      createdAt: new Date(),
      nurtureStep: 0,
      unsubscribed: false,
    });
    expect(step).toBeNull();
  });

  it("returns snapshot-recap (step 1) for lead 1+ days old at step 0", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(1.5),
      nurtureStep: 0,
      unsubscribed: false,
    });
    expect(step).not.toBeNull();
    expect(step!.step).toBe(1);
    expect(step!.key).toBe("snapshot-recap");
  });

  it("returns null for lead at step 1 but only 2 days old (step 2 needs 3 days)", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(2),
      nurtureStep: 1,
      unsubscribed: false,
    });
    expect(step).toBeNull();
  });

  it("returns value-tips (step 2) for lead 3+ days old at step 1", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(4),
      nurtureStep: 1,
      unsubscribed: false,
    });
    expect(step).not.toBeNull();
    expect(step!.step).toBe(2);
    expect(step!.key).toBe("value-tips");
  });

  it("returns null for lead at step 2 but only 5 days old (step 3 needs 7 days)", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(5),
      nurtureStep: 2,
      unsubscribed: false,
    });
    expect(step).toBeNull();
  });

  it("returns final-conversion (step 3) for lead 7+ days old at step 2", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(8),
      nurtureStep: 2,
      unsubscribed: false,
    });
    expect(step).not.toBeNull();
    expect(step!.step).toBe(3);
    expect(step!.key).toBe("final-conversion");
  });

  it("returns null for completed leads (step 3)", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(30),
      nurtureStep: 3,
      unsubscribed: false,
    });
    expect(step).toBeNull();
  });

  it("returns null when nurtureStep equals MAX_LEAD_NURTURE_STEP", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(30),
      nurtureStep: MAX_LEAD_NURTURE_STEP,
      unsubscribed: false,
    });
    expect(step).toBeNull();
  });

  it("returns null for unsubscribed leads regardless of timing", () => {
    const step = getNextLeadNurtureStep({
      createdAt: daysAgo(2),
      nurtureStep: 0,
      unsubscribed: true,
    });
    expect(step).toBeNull();
  });
});

describe("buildSnapshotRecapEmail", () => {
  it("includes competitor hostname in subject", () => {
    const email = buildSnapshotRecapEmail(testLead);
    expect(email.subject).toContain("competitor.com");
  });

  it("uses generic competitor reference when no URL", () => {
    const email = buildSnapshotRecapEmail(testLeadNoUrl);
    expect(email.html).toContain("your competitor");
  });

  it("includes signup CTA with competitor_url param", () => {
    const email = buildSnapshotRecapEmail(testLead);
    expect(email.html).toContain("competitor_url=");
    expect(email.html).toContain("utm_source=nurture");
    expect(email.html).toContain("utm_content=snapshot-recap");
  });

  it("includes signup CTA without competitor_url when none set", () => {
    const email = buildSnapshotRecapEmail(testLeadNoUrl);
    expect(email.html).not.toContain("competitor_url=");
    expect(email.html).toContain("utm_source=nurture");
  });

  it("mentions free plan in both HTML and text", () => {
    const email = buildSnapshotRecapEmail(testLead);
    expect(email.html).toContain("2 competitors");
    expect(email.html).toContain("weekly digests");
    expect(email.text).toContain("No credit card required");
  });

  it("includes unsubscribe link and physical address (CAN-SPAM)", () => {
    const email = buildSnapshotRecapEmail(testLead);
    expect(email.html).toContain("Unsubscribe");
    expect(email.html).toContain("/api/unsubscribe");
    expect(email.html).toContain("San Francisco");
    expect(email.text).toContain("Unsubscribe");
  });
});

describe("buildValueTipsEmail", () => {
  it("highlights 4 types of competitor changes", () => {
    const email = buildValueTipsEmail(testLead);
    expect(email.subject).toContain("4 competitor moves");
    expect(email.html).toContain("Pricing changes");
    expect(email.html).toContain("Feature launches");
    expect(email.html).toContain("Hiring signals");
    expect(email.html).toContain("Content strategy shifts");
  });

  it("includes signup CTA with UTM params", () => {
    const email = buildValueTipsEmail(testLead);
    expect(email.html).toContain("utm_content=value-tips");
    expect(email.text).toContain("utm_content=value-tips");
  });

  it("mentions free tier in CTA", () => {
    const email = buildValueTipsEmail(testLead);
    expect(email.html).toContain("2 competitors");
    expect(email.text).toContain("Free forever");
  });
});

describe("buildFinalConversionEmail", () => {
  it("creates urgency with time-based framing", () => {
    const email = buildFinalConversionEmail(testLead);
    expect(email.subject).toContain("One week later");
    expect(email.html).toContain("7 days");
  });

  it("includes cost comparison data", () => {
    const email = buildFinalConversionEmail(testLead);
    expect(email.html).toContain("$75/hr");
    expect(email.html).toContain("$0/mo");
    expect(email.text).toContain("$11,700");
  });

  it("lists free plan benefits", () => {
    const email = buildFinalConversionEmail(testLead);
    expect(email.html).toContain("2");
    expect(email.html).toContain("Weekly");
    expect(email.html).toContain("60 seconds");
  });

  it("mentions this is the last email", () => {
    const email = buildFinalConversionEmail(testLead);
    expect(email.text).toContain("last email in this sequence");
    expect(email.html).toContain("last email in this sequence");
  });

  it("includes signup CTA with final-conversion UTM", () => {
    const email = buildFinalConversionEmail(testLead);
    expect(email.html).toContain("utm_content=final-conversion");
  });

  it("reassures no commitment", () => {
    const email = buildFinalConversionEmail(testLead);
    expect(email.text).toContain("No credit card");
    expect(email.text).toContain("Cancel anytime");
  });
});
