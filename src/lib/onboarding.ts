import type { User } from "@prisma/client";

/**
 * Onboarding drip + free-to-paid nurture campaign — 6 emails over 14 days:
 *
 * Onboarding (all users):
 *   Step 1: Welcome      (T+0)        — sent immediately on signup
 *   Step 2: Value        (T+2 days)   — highlight key features, encourage adding competitors
 *   Step 3: Trial        (T+5 days)   — nudge to upgrade if still on Free plan
 *
 * Nurture (free users only):
 *   Step 4: Social proof (T+7 days)   — teams like yours are catching pricing changes
 *   Step 5: Cost savings (T+10 days)  — the hidden cost of manual monitoring
 *   Step 6: Final nudge  (T+14 days)  — last conversion push with ROI framing
 */

export const ONBOARDING_STEPS = [
  { step: 1, delayDays: 0, key: "welcome" as const },
  { step: 2, delayDays: 2, key: "value" as const },
  { step: 3, delayDays: 5, key: "trial" as const },
  { step: 4, delayDays: 7, key: "social-proof" as const },
  { step: 5, delayDays: 10, key: "cost-savings" as const },
  { step: 6, delayDays: 14, key: "final-nudge" as const },
] as const;

export type OnboardingStepKey = (typeof ONBOARDING_STEPS)[number]["key"];

/** Maximum step number — sequence is complete at or above this */
export const MAX_ONBOARDING_STEP = 6;

/** Steps 4+ are nurture-only and only sent to FREE users */
const NURTURE_START_STEP = 4;

/** Determine which step a user should receive next, or null if done */
export function getNextOnboardingStep(
  user: Pick<User, "createdAt" | "onboardingStep" | "plan">
): (typeof ONBOARDING_STEPS)[number] | null {
  // Already completed all steps
  if (user.onboardingStep >= MAX_ONBOARDING_STEP) return null;

  // Skip trial reminder and nurture for paid users
  if (user.onboardingStep >= 2 && user.plan !== "FREE") return null;

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
        KompWatch &mdash; AI-powered competitor monitoring.
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
    subject: "Welcome to KompWatch — let's set up your first monitor",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, welcome to KompWatch!</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        You're all set. KompWatch monitors your competitors' websites and sends you
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
    text: `${greeting}, welcome to KompWatch!

You're all set. KompWatch monitors your competitors' websites and sends you AI-powered summaries when things change.

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
    subject: "3 ways KompWatch saves you hours every week",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, here's what you might be missing</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        KompWatch customers tell us they save 3&ndash;5 hours per week by automating
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

      <div style="margin:24px 0 0;padding:16px;background:#faf5ff;border-radius:6px;text-align:center;">
        <p style="margin:0 0 8px;color:#6b21a8;font-size:14px;font-weight:600;">Enjoying KompWatch? We'd love your feedback!</p>
        <p style="margin:0;color:#444;font-size:13px;line-height:1.5;">
          A quick G2 review helps other teams discover us &mdash; and helps us improve.
        </p>
        <div style="margin:12px 0 0;">
          <a href="https://www.g2.com/products/kompwatch/reviews" style="display:inline-block;background:#6b21a8;color:#fff;padding:8px 18px;border-radius:6px;text-decoration:none;font-weight:600;font-size:13px;">Leave a G2 Review</a>
        </div>
      </div>
    `),
    text: `${greeting}, here's what you might be missing

KompWatch customers tell us they save 3-5 hours per week by automating competitor research. Here's how to get the most out of it:

1. Track pricing pages — Be the first to know when a competitor changes prices. Pricing changes are flagged as high-severity.

2. Watch their blog — New blog posts often signal upcoming launches. Get a heads-up before the announcement.

3. Monitor job listings — Hiring patterns reveal strategy. A burst of ML engineer postings? They're building AI features.

Add a competitor now: ${BASE_URL}/competitors

Enjoying KompWatch? Leave a quick G2 review to help other teams discover us: https://www.g2.com/products/kompwatch/reviews
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
        You've been using KompWatch for a few days now. Your free plan covers
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

You've been using KompWatch for a few days now. Your free plan covers 2 competitors with weekly digests.

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

// ── Nurture emails (Free users, day 7/10/14) ──────────────────

export function buildSocialProofEmail(
  user: Pick<User, "name" | "email">
): OnboardingEmail {
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  return {
    subject: "How SaaS teams use KompWatch to stay ahead",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, you're in good company</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        Product marketing teams, founders, and CI analysts use KompWatch to
        automate the competitor research they used to do by hand.
      </p>

      <div style="margin:20px 0;padding:16px;background:#f0f7ff;border-radius:6px;border-left:4px solid #2563eb;">
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          <strong style="color:#111;">&ldquo;We caught a competitor&rsquo;s pricing increase
          the day it happened. Our sales team had updated battlecards before their
          SDRs even knew about the change.&rdquo;</strong>
        </p>
        <p style="margin:8px 0 0;color:#666;font-size:13px;">
          &mdash; Product Marketing Manager, B2B SaaS (10 competitors tracked)
        </p>
      </div>

      <h3 style="margin:20px 0 8px;font-size:16px;color:#111;">What teams catch with KompWatch:</h3>
      <ul style="color:#444;font-size:14px;line-height:1.8;padding-left:20px;">
        <li>Pricing page changes &mdash; before customers ask about them</li>
        <li>New feature launches &mdash; from changelog and feature page diffs</li>
        <li>Hiring surges &mdash; 12 new ML engineers = AI pivot incoming</li>
        <li>Blog strategy shifts &mdash; new positioning or vertical targeting</li>
      </ul>

      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("See Your Dashboard", `${BASE_URL}/dashboard`)}
      </div>

      <p style="color:#666;font-size:13px;">
        You&rsquo;re on the free plan (2 competitors, weekly digest).
        <a href="${BASE_URL}/pricing" style="color:#2563eb;">Upgrade to Pro</a> to
        track up to 10 competitors with daily digests.
      </p>
    `),
    text: `${greeting}, you're in good company

Product marketing teams, founders, and CI analysts use KompWatch to automate competitor research they used to do by hand.

"We caught a competitor's pricing increase the day it happened. Our sales team had updated battlecards before their SDRs even knew about the change."
— Product Marketing Manager, B2B SaaS (10 competitors tracked)

What teams catch with KompWatch:
- Pricing page changes — before customers ask about them
- New feature launches — from changelog and feature page diffs
- Hiring surges — 12 new ML engineers = AI pivot incoming
- Blog strategy shifts — new positioning or vertical targeting

See your dashboard: ${BASE_URL}/dashboard

You're on the free plan (2 competitors, weekly digest). Upgrade to Pro to track up to 10 competitors with daily digests: ${BASE_URL}/pricing
`,
  };
}

export function buildCostSavingsEmail(
  user: Pick<User, "name" | "email">
): OnboardingEmail {
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  return {
    subject: "The hidden cost of manual competitor monitoring",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, let&rsquo;s talk about time</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        The average PMM spends <strong>3&ndash;5 hours per week</strong> manually
        checking competitor websites. That&rsquo;s 160&ndash;260 hours per year &mdash;
        or <strong>$12K&ndash;$20K</strong> in loaded labor cost.
      </p>

      <div style="margin:20px 0;padding:16px;background:#fef3f2;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#991b1b;">Manual monitoring costs</h3>
        <table style="width:100%;font-size:14px;color:#444;" cellpadding="4">
          <tr><td>Hours per week</td><td style="text-align:right;font-weight:600;">3&ndash;5 hrs</td></tr>
          <tr><td>Annual time cost (@$75/hr)</td><td style="text-align:right;font-weight:600;">$11,700&ndash;$19,500</td></tr>
          <tr><td>Missed changes you never see</td><td style="text-align:right;font-weight:600;color:#991b1b;">Unknown</td></tr>
        </table>
      </div>

      <div style="margin:20px 0;padding:16px;background:#f0fdf4;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#166534;">KompWatch Pro</h3>
        <table style="width:100%;font-size:14px;color:#444;" cellpadding="4">
          <tr><td>Monthly cost</td><td style="text-align:right;font-weight:600;">$49/mo ($588/yr)</td></tr>
          <tr><td>Time saved</td><td style="text-align:right;font-weight:600;">~80% of manual work</td></tr>
          <tr><td>Changes you miss</td><td style="text-align:right;font-weight:600;color:#166534;">Zero &mdash; every page, every scan</td></tr>
        </table>
      </div>

      <p style="color:#444;font-size:15px;line-height:1.6;">
        That&rsquo;s a <strong>20&ndash;33x return</strong> on a Pro subscription.
        And unlike enterprise CI tools ($20K&ndash;$40K/yr), there&rsquo;s no annual
        lock-in or sales call required.
      </p>

      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("See the ROI Calculator", `${BASE_URL}/pricing#roi-calculator`)}
      </div>
    `),
    text: `${greeting}, let's talk about time

The average PMM spends 3-5 hours per week manually checking competitor websites. That's 160-260 hours per year — or $12K-$20K in loaded labor cost.

Manual monitoring costs:
- Hours per week: 3-5 hrs
- Annual time cost (@$75/hr): $11,700-$19,500
- Missed changes you never see: Unknown

KompWatch Pro:
- Monthly cost: $49/mo ($588/yr)
- Time saved: ~80% of manual work
- Changes you miss: Zero — every page, every scan

That's a 20-33x return on a Pro subscription. And unlike enterprise CI tools ($20K-$40K/yr), there's no annual lock-in or sales call required.

See the ROI calculator: ${BASE_URL}/pricing#roi-calculator
`,
  };
}

export function buildFinalNudgeEmail(
  user: Pick<User, "name" | "email">
): OnboardingEmail {
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  return {
    subject: "Your competitors changed this week. Did you notice?",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">${greeting}, quick check-in</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        You&rsquo;ve been on KompWatch for two weeks now. In that time, the
        average tracked competitor makes <strong>2&ndash;4 meaningful changes</strong>
        to their website &mdash; pricing tweaks, new features, blog posts, job listings.
      </p>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        On the free plan, you&rsquo;re tracking 2 competitors with weekly digests. That
        means you might be seeing changes <strong>up to 7 days late</strong>.
      </p>

      <div style="margin:20px 0;padding:16px;background:#f0f7ff;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#1e40af;">What Pro gives you</h3>
        <ul style="color:#444;font-size:14px;line-height:1.8;padding-left:20px;margin:0;">
          <li><strong>10 competitors</strong> &mdash; cover your full landscape</li>
          <li><strong>Daily digests</strong> &mdash; changes in your inbox every morning</li>
          <li><strong>6-hour snapshots</strong> &mdash; catch changes the same day</li>
          <li><strong>Instant pricing alerts</strong> &mdash; the moment a price changes</li>
          <li><strong>Slack notifications</strong> &mdash; alerts where your team already works</li>
        </ul>
      </div>

      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("Upgrade to Pro — $49/mo", `${BASE_URL}/pricing`)}
      </div>

      <p style="color:#666;font-size:13px;">
        No annual contract. Cancel anytime. Your free plan stays active if you
        decide Pro isn&rsquo;t for you.
      </p>
      <p style="color:#999;font-size:12px;margin-top:16px;">
        This is the last email in our getting-started sequence. You&rsquo;ll continue
        receiving your regular competitor digests as scheduled.
      </p>
    `),
    text: `${greeting}, quick check-in

You've been on KompWatch for two weeks now. In that time, the average tracked competitor makes 2-4 meaningful changes to their website — pricing tweaks, new features, blog posts, job listings.

On the free plan, you're tracking 2 competitors with weekly digests. That means you might be seeing changes up to 7 days late.

What Pro gives you:
- 10 competitors — cover your full landscape
- Daily digests — changes in your inbox every morning
- 6-hour snapshots — catch changes the same day
- Instant pricing alerts — the moment a price changes
- Slack notifications — alerts where your team already works

Upgrade to Pro — $49/mo: ${BASE_URL}/pricing

No annual contract. Cancel anytime. Your free plan stays active if you decide Pro isn't for you.

This is the last email in our getting-started sequence. You'll continue receiving your regular competitor digests as scheduled.
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
    case "social-proof":
      return buildSocialProofEmail;
    case "cost-savings":
      return buildCostSavingsEmail;
    case "final-nudge":
      return buildFinalNudgeEmail;
  }
}
