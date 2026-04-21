import { describe, it, expect } from "vitest";
import {
  getNextOnboardingStep,
  buildWelcomeEmail,
  buildValueEmail,
  buildTrialReminderEmail,
} from "@/lib/onboarding";

function daysAgo(days: number): Date {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

const testUser = { name: "Alice", email: "alice@example.com" };

describe("getNextOnboardingStep", () => {
  it("returns welcome (step 1) for a brand new user", () => {
    const step = getNextOnboardingStep({
      createdAt: new Date(),
      onboardingStep: 0,
      plan: "FREE",
    });
    expect(step).not.toBeNull();
    expect(step!.step).toBe(1);
    expect(step!.key).toBe("welcome");
  });

  it("returns value (step 2) for user 2+ days old at step 1", () => {
    const step = getNextOnboardingStep({
      createdAt: daysAgo(3),
      onboardingStep: 1,
      plan: "FREE",
    });
    expect(step).not.toBeNull();
    expect(step!.step).toBe(2);
    expect(step!.key).toBe("value");
  });

  it("returns null for user at step 1 but only 1 day old (not due yet)", () => {
    const step = getNextOnboardingStep({
      createdAt: daysAgo(1),
      onboardingStep: 1,
      plan: "FREE",
    });
    expect(step).toBeNull();
  });

  it("returns trial reminder (step 3) for free user 5+ days old at step 2", () => {
    const step = getNextOnboardingStep({
      createdAt: daysAgo(6),
      onboardingStep: 2,
      plan: "FREE",
    });
    expect(step).not.toBeNull();
    expect(step!.step).toBe(3);
    expect(step!.key).toBe("trial");
  });

  it("skips trial reminder for PRO users", () => {
    const step = getNextOnboardingStep({
      createdAt: daysAgo(10),
      onboardingStep: 2,
      plan: "PRO",
    });
    expect(step).toBeNull();
  });

  it("skips trial reminder for TEAM users", () => {
    const step = getNextOnboardingStep({
      createdAt: daysAgo(10),
      onboardingStep: 2,
      plan: "TEAM",
    });
    expect(step).toBeNull();
  });

  it("returns null for completed users (step 3)", () => {
    const step = getNextOnboardingStep({
      createdAt: daysAgo(30),
      onboardingStep: 3,
      plan: "FREE",
    });
    expect(step).toBeNull();
  });

  it("returns null for step 2 user not yet 5 days old", () => {
    const step = getNextOnboardingStep({
      createdAt: daysAgo(4),
      onboardingStep: 2,
      plan: "FREE",
    });
    expect(step).toBeNull();
  });
});

describe("buildWelcomeEmail", () => {
  it("includes personalized greeting", () => {
    const email = buildWelcomeEmail(testUser);
    expect(email.subject).toContain("Welcome");
    expect(email.html).toContain("Alice");
    expect(email.text).toContain("Alice");
  });

  it("uses generic greeting when no name", () => {
    const email = buildWelcomeEmail({ name: null, email: "anon@test.com" });
    expect(email.html).toContain("Welcome");
    expect(email.text).toContain("Welcome");
  });

  it("includes CTA link to competitors page", () => {
    const email = buildWelcomeEmail(testUser);
    expect(email.html).toContain("/competitors");
    expect(email.text).toContain("/competitors");
  });
});

describe("buildValueEmail", () => {
  it("highlights key features", () => {
    const email = buildValueEmail(testUser);
    expect(email.subject).toContain("3 ways");
    expect(email.html).toContain("pricing pages");
    expect(email.html).toContain("blog");
    expect(email.html).toContain("job listings");
  });

  it("includes CTA link", () => {
    const email = buildValueEmail(testUser);
    expect(email.html).toContain("/competitors");
  });

  it("includes G2 review CTA", () => {
    const email = buildValueEmail(testUser);
    expect(email.html).toContain("g2.com/products/kompwatch/reviews");
    expect(email.html).toContain("Leave a G2 Review");
    expect(email.text).toContain("g2.com/products/kompwatch/reviews");
  });
});

describe("buildTrialReminderEmail", () => {
  it("mentions Pro plan and pricing", () => {
    const email = buildTrialReminderEmail(testUser);
    expect(email.subject).toContain("Pro");
    expect(email.html).toContain("$49/mo");
    expect(email.html).toContain("10 competitors");
  });

  it("includes upgrade CTA", () => {
    const email = buildTrialReminderEmail(testUser);
    expect(email.html).toContain("/settings");
    expect(email.text).toContain("/settings");
  });

  it("has no-pressure messaging", () => {
    const email = buildTrialReminderEmail(testUser);
    expect(email.text).toContain("free plan is yours forever");
  });
});
