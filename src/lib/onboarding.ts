import type { User } from "@prisma/client";

/**
 * Onboarding drip campaign — 3 emails over 5 days:
 *   Step 1: Welcome (T+0)       — sent immediately on signup
 *   Step 2: Value    (T+2 days) — highlight key features, encourage adding competitors
 *   Step 3: Trial    (T+5 days) — nudge to upgrade if still on Free plan
 */

export const ONBOARDING_STEPS = [
  { step: 1, delayDays: 0, key: "welcome" as const },
  { step: 2, delayDays: 2, key: "value" as const },
  { step: 3, delayDays: 5, key: "trial" as const },
] as const;

export type OnboardingStepKey = (typeof ONBOARDING_STEPS)[number]["key"];

/** Determine which step a user should receive next, or null if done */
export function getNextOnboardingStep(
  user: Pick<User, "createdAt" | "onboardingStep" | "plan">
): (typeof ONBOARDING_STEPS)[number] | null {
  // Already completed all steps
  if (user.onboardingStep >= 3) return null;

  // Skip trial reminder for paid users
  if (user.onboardingStep === 2 && user.plan !== "FREE") return null;

  const nextStep = ONBOARDING_STEPS.find((s) => s.step === user.onboardingStep + 1);
  if (!nextStep) return null;

  // Check if enough time has passed since signup
  const daysSinceSignup =
    (Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24);

  if (daysSinceSignup < nextStep.delayDays) return null;

  return nextStep;
}

// ── Email content ────────────────────────────────────────────────

interface OnboardingEmail {
  subject: string;
  html: string;
  text: string;
}

const BASE_URL = process.env.NEXTAUTH_URL || "https://kompwatch.com";

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#fff;border-radius:8px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      ${content}
      <hr style="border:none;border-top:1px solid #eee;margin:28px 0 16px;"/>
      <p style="margin:0;color:#999;font-size:12px;">
        CompeteWatch &mdash; AI-powered competitor monitoring.
        <a href="${BASE_URL}/settings" style="color:#666;">Manage preferences</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

function ctaButton(text: string, href: string): string {
  return `<a href="${href}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;margin:8px 0;">${text}</a>`;
}

export function buildWelcomeEmail(
  user: Pick<User, "name" | "email">
): OnboardingEmail {
  const greeting = user.name ? `Hi ${user.name}` : "Welcome";
  return {
    subject: "Welcome to CompeteWatch — let's set up your first monitor",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, welcome to CompeteWatch!</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        You're all set. CompeteWatch monitors your competitors' websites and sends you
        AI-powered summaries when things change &mdash; pricing updates, new features,
        blog posts, job listings, and more.
      </p>
      <h3 style="margin:20px 0 8px;font-size:16px;color:#111;">Get started in 60 seconds:</h3>
      <ol style="color:#444;font-size:14px;line-height:1.8;padding-left:20px;">
        <li>Add a competitor URL (e.g. your closest rival's website)</li>
        <li>Pick what to track &mdash; pricing, features, blog, jobs</li>
        <li>Sit back. We'll email you when something changes.</li>
      </ol>
      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("Add Your First Competitor", `${BASE_URL}/competitors`)}
      </div>
      <p style="color:#666;font-size:13px;">
        Free plan includes 2 competitors with weekly digests.
        <a href="${BASE_URL}/settings" style="color:#2563eb;">Upgrade anytime</a> for more.
      </p>
    `),
    text: `${greeting}, welcome to CompeteWatch!

You're all set. CompeteWatch monitors your competitors' websites and sends you AI-powered summaries when things change.

Get started in 60 seconds:
1. Add a competitor URL (e.g. your closest rival's website)
2. Pick what to track — pricing, features, blog, jobs
3. Sit back. We'll email you when something changes.

Add your first competitor: ${BASE_URL}/competitors

Free plan includes 2 competitors with weekly digests. Upgrade anytime at ${BASE_URL}/settings.
`,
  };
}

export function buildValueEmail(
  user: Pick<User, "name" | "email">
): OnboardingEmail {
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  return {
    subject: "3 ways CompeteWatch saves you hours every week",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, here's what you might be missing</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        CompeteWatch customers tell us they save 3&ndash;5 hours per week by automating
        competitor research. Here's how to get the most out of it:
      </p>

      <div style="margin:20px 0;padding:16px;background:#f0f7ff;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#1e40af;">1. Track pricing pages</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          Be the first to know when a competitor raises or lowers prices.
          Pricing changes are flagged as high-severity so they always stand out.
        </p>
      </div>

      <div style="margin:20px 0;padding:16px;background:#f0fdf4;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#166534;">2. Watch their blog</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          New blog posts often signal upcoming launches. Get a heads-up
          before their announcement hits your customers' inboxes.
        </p>
      </div>

      <div style="margin:20px 0;padding:16px;background:#fef3f2;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#991b1b;">3. Monitor job listings</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          Hiring patterns reveal strategy. A burst of ML engineer postings?
          They're likely building AI features.
        </p>
      </div>

      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("Add a Competitor Now", `${BASE_URL}/competitors`)}
      </div>
    `),
    text: `${greeting}, here's what you might be missing

CompeteWatch customers tell us they save 3-5 hours per week by automating competitor research. Here's how to get the most out of it:

1. Track pricing pages — Be the first to know when a competitor changes prices. Pricing changes are flagged as high-severity.

2. Watch their blog — New blog posts often signal upcoming launches. Get a heads-up before the announcement.

3. Monitor job listings — Hiring patterns reveal strategy. A burst of ML engineer postings? They're building AI features.

Add a competitor now: ${BASE_URL}/competitors
`,
  };
}

export function buildTrialReminderEmail(
  user: Pick<User, "name" | "email">
): OnboardingEmail {
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  return {
    subject: "Your free plan is active — here's what Pro unlocks",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, ready for more?</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        You've been using CompeteWatch for a few days now. Your free plan covers
        2 competitors with weekly digests &mdash; great for getting started.
      </p>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        When you're ready to level up, <strong>Pro ($49/mo)</strong> gives you:
      </p>
      <ul style="color:#444;font-size:14px;line-height:1.8;padding-left:20px;">
        <li><strong>10 competitors</strong> &mdash; cover your full competitive landscape</li>
        <li><strong>Daily digests</strong> &mdash; never miss a change for more than 24 hours</li>
        <li><strong>6-hour snapshots</strong> &mdash; catch changes 4x faster</li>
        <li><strong>Tech stack tracking</strong> &mdash; see what tools they're adopting</li>
      </ul>
      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("Upgrade to Pro", `${BASE_URL}/settings`)}
      </div>
      <p style="color:#666;font-size:13px;">
        No pressure &mdash; the free plan is yours forever.
        Upgrade only when it makes sense for your team.
      </p>
    `),
    text: `${greeting}, ready for more?

You've been using CompeteWatch for a few days now. Your free plan covers 2 competitors with weekly digests.

When you're ready to level up, Pro ($49/mo) gives you:
- 10 competitors — cover your full competitive landscape
- Daily digests — never miss a change for more than 24 hours
- 6-hour snapshots — catch changes 4x faster
- Tech stack tracking — see what tools they're adopting

Upgrade to Pro: ${BASE_URL}/settings

No pressure — the free plan is yours forever. Upgrade only when it makes sense for your team.
`,
  };
}

/** Get the email builder for a given step key */
export function getOnboardingEmailBuilder(
  key: OnboardingStepKey
): (user: Pick<User, "name" | "email">) => OnboardingEmail {
  switch (key) {
    case "welcome":
      return buildWelcomeEmail;
    case "value":
      return buildValueEmail;
    case "trial":
      return buildTrialReminderEmail;
  }
}
