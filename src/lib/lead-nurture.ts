import type { EmailLead } from "@prisma/client";

/**
 * 3-email nurture sequence for free-snapshot leads:
 *
 *   Step 1: Snapshot recap     (T+1 day)   — recap what we found, CTA to sign up
 *   Step 2: Value & tips       (T+3 days)  — what ongoing monitoring catches
 *   Step 3: Final conversion   (T+7 days)  — ROI framing + last push
 *
 * Only applies to EmailLead records with source = "free-snapshot".
 */

export const LEAD_NURTURE_STEPS = [
  { step: 1, delayDays: 1, key: "snapshot-recap" as const },
  { step: 2, delayDays: 3, key: "value-tips" as const },
  { step: 3, delayDays: 7, key: "final-conversion" as const },
] as const;

export type LeadNurtureStepKey = (typeof LEAD_NURTURE_STEPS)[number]["key"];

export const MAX_LEAD_NURTURE_STEP = 3;

/** Determine which step a lead should receive next, or null if done / not yet due */
export function getNextLeadNurtureStep(
  lead: Pick<EmailLead, "createdAt" | "nurtureStep">
): (typeof LEAD_NURTURE_STEPS)[number] | null {
  if (lead.nurtureStep >= MAX_LEAD_NURTURE_STEP) return null;

  const nextStep = LEAD_NURTURE_STEPS.find(
    (s) => s.step === lead.nurtureStep + 1
  );
  if (!nextStep) return null;

  const daysSinceCapture =
    (Date.now() - new Date(lead.createdAt).getTime()) / (1000 * 60 * 60 * 24);

  if (daysSinceCapture < nextStep.delayDays) return null;

  return nextStep;
}

// ── Email content ────────────────────────────────────────────────

interface LeadNurtureEmail {
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
        <a href="${BASE_URL}/free-snapshot" style="color:#666;">Run another free snapshot</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

function ctaButton(text: string, href: string): string {
  return `<a href="${href}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;margin:8px 0;">${text}</a>`;
}

/** Email 1 (T+1 day): Snapshot recap — remind them what we found */
export function buildSnapshotRecapEmail(
  lead: Pick<EmailLead, "email" | "competitorUrl">
): LeadNurtureEmail {
  const competitorDisplay = lead.competitorUrl
    ? new URL(lead.competitorUrl).hostname.replace(/^www\./, "")
    : "your competitor";

  const signupUrl = lead.competitorUrl
    ? `${BASE_URL}/login?competitor_url=${encodeURIComponent(lead.competitorUrl)}&utm_source=nurture&utm_content=snapshot-recap`
    : `${BASE_URL}/login?utm_source=nurture&utm_content=snapshot-recap`;

  return {
    subject: `Your snapshot of ${competitorDisplay} — what happens next?`,
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">Your free snapshot was just the beginning</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        Yesterday you ran a free snapshot of <strong>${competitorDisplay}</strong>.
        You saw their pricing signals, tech stack, content, and hiring activity
        &mdash; all in seconds.
      </p>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        But here&rsquo;s the thing: that was a <strong>single point in time</strong>.
        Competitors change their websites constantly &mdash; pricing updates, new features,
        blog posts, job listings. A snapshot today is outdated tomorrow.
      </p>

      <div style="margin:20px 0;padding:16px;background:#f0f7ff;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#1e40af;">What if you never had to check manually again?</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          KompWatch monitors ${competitorDisplay} automatically and emails you
          an AI-powered digest when something changes. Free plan includes
          <strong>2 competitors</strong> with <strong>weekly digests</strong>.
        </p>
      </div>

      <div style="text-align:center;margin:24px 0;">
        ${ctaButton(`Start monitoring ${competitorDisplay}`, signupUrl)}
      </div>
      <p style="color:#666;font-size:13px;text-align:center;">
        No credit card required. Set up in 60 seconds.
      </p>
    `),
    text: `Your free snapshot was just the beginning

Yesterday you ran a free snapshot of ${competitorDisplay}. You saw their pricing signals, tech stack, content, and hiring activity.

But that was a single point in time. Competitors change their websites constantly.

What if you never had to check manually again?

KompWatch monitors ${competitorDisplay} automatically and emails you an AI-powered digest when something changes. Free plan includes 2 competitors with weekly digests.

Start monitoring: ${signupUrl}

No credit card required. Set up in 60 seconds.
`,
  };
}

/** Email 2 (T+3 days): Value & tips — what ongoing monitoring catches */
export function buildValueTipsEmail(
  lead: Pick<EmailLead, "email" | "competitorUrl">
): LeadNurtureEmail {
  const signupUrl = lead.competitorUrl
    ? `${BASE_URL}/login?competitor_url=${encodeURIComponent(lead.competitorUrl)}&utm_source=nurture&utm_content=value-tips`
    : `${BASE_URL}/login?utm_source=nurture&utm_content=value-tips`;

  return {
    subject: "4 competitor moves you're probably missing right now",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">What changed since your snapshot?</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        On average, a SaaS competitor makes <strong>2&ndash;4 meaningful website changes
        per week</strong>. Here&rsquo;s what KompWatch users catch automatically:
      </p>

      <div style="margin:20px 0;padding:16px;background:#fef3f2;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#991b1b;">Pricing changes</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          A competitor raised their Pro tier from $79 to $99/mo. KompWatch detected
          the change within 6 hours &mdash; before the changelog was published.
        </p>
      </div>

      <div style="margin:16px 0;padding:16px;background:#f0f7ff;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#1e40af;">Feature launches</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          New feature page went live overnight. KompWatch flagged the new route
          in the morning digest, giving the sales team time to update battlecards.
        </p>
      </div>

      <div style="margin:16px 0;padding:16px;background:#faf5ff;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#6b21a8;">Hiring signals</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          Three enterprise sales rep job listings signal an upmarket push.
          KompWatch surfaced this from their careers page before LinkedIn.
        </p>
      </div>

      <div style="margin:16px 0;padding:16px;background:#f0fdf4;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#166534;">Content strategy shifts</h3>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.5;">
          Blog post about sunsetting their free tier detected same day. Sales
          had a 48-hour head start on competitive positioning.
        </p>
      </div>

      <p style="color:#444;font-size:15px;line-height:1.6;">
        These aren&rsquo;t hypotheticals &mdash; they&rsquo;re the kinds of changes
        that happen every week. The question is: are you catching them?
      </p>

      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("Start catching changes free", signupUrl)}
      </div>
      <p style="color:#666;font-size:13px;text-align:center;">
        2 competitors, weekly digests. Free forever.
      </p>
    `),
    text: `What changed since your snapshot?

On average, a SaaS competitor makes 2-4 meaningful website changes per week. Here's what KompWatch users catch automatically:

1. Pricing changes — A competitor raised their Pro tier from $79 to $99/mo. KompWatch detected the change within 6 hours.

2. Feature launches — New feature page went live overnight. KompWatch flagged it in the morning digest.

3. Hiring signals — Three enterprise sales rep listings signal an upmarket push. Caught from careers page before LinkedIn.

4. Content strategy shifts — Blog post about sunsetting their free tier detected same day. 48-hour head start.

These happen every week. Are you catching them?

Start catching changes free: ${signupUrl}

2 competitors, weekly digests. Free forever.
`,
  };
}

/** Email 3 (T+7 days): Final conversion — ROI framing + last push */
export function buildFinalConversionEmail(
  lead: Pick<EmailLead, "email" | "competitorUrl">
): LeadNurtureEmail {
  const signupUrl = lead.competitorUrl
    ? `${BASE_URL}/login?competitor_url=${encodeURIComponent(lead.competitorUrl)}&utm_source=nurture&utm_content=final-conversion`
    : `${BASE_URL}/login?utm_source=nurture&utm_content=final-conversion`;

  return {
    subject: "One week later — how many competitor changes did you miss?",
    html: emailWrapper(`
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">It&rsquo;s been a week since your snapshot</h1>
      <p style="color:#444;font-size:15px;line-height:1.6;">
        In the past 7 days, the average SaaS competitor has updated their website
        <strong>3&ndash;5 times</strong>. Pricing tweaks, new features, blog posts,
        job listings &mdash; all signals your team could have acted on.
      </p>

      <div style="margin:20px 0;padding:16px;background:#fef3f2;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#991b1b;">The cost of not knowing</h3>
        <table style="width:100%;font-size:14px;color:#444;" cellpadding="4">
          <tr><td>Hours spent checking manually</td><td style="text-align:right;font-weight:600;">3&ndash;5 hrs/week</td></tr>
          <tr><td>Annual cost (@$75/hr)</td><td style="text-align:right;font-weight:600;">$11,700&ndash;$19,500</td></tr>
          <tr><td>Changes you never see</td><td style="text-align:right;font-weight:600;color:#991b1b;">Unknown</td></tr>
        </table>
      </div>

      <div style="margin:20px 0;padding:16px;background:#f0fdf4;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#166534;">KompWatch (free plan)</h3>
        <table style="width:100%;font-size:14px;color:#444;" cellpadding="4">
          <tr><td>Cost</td><td style="text-align:right;font-weight:600;">$0/mo</td></tr>
          <tr><td>Competitors tracked</td><td style="text-align:right;font-weight:600;">2</td></tr>
          <tr><td>AI-powered digests</td><td style="text-align:right;font-weight:600;">Weekly</td></tr>
          <tr><td>Setup time</td><td style="text-align:right;font-weight:600;">60 seconds</td></tr>
        </table>
      </div>

      <p style="color:#444;font-size:15px;line-height:1.6;">
        Your free snapshot showed you what KompWatch can do. Now imagine getting
        that intelligence <strong>automatically, every week</strong>, with
        AI-generated summaries highlighting what matters.
      </p>

      <div style="text-align:center;margin:24px 0;">
        ${ctaButton("Start monitoring free — 60 seconds", signupUrl)}
      </div>
      <p style="color:#666;font-size:13px;text-align:center;">
        No credit card. No sales call. Cancel anytime.
      </p>
      <p style="color:#999;font-size:12px;margin-top:16px;text-align:center;">
        This is the last email in this sequence. We won&rsquo;t email you again
        unless you sign up for KompWatch.
      </p>
    `),
    text: `It's been a week since your snapshot

In the past 7 days, the average SaaS competitor has updated their website 3-5 times. Pricing tweaks, new features, blog posts, job listings — all signals your team could have acted on.

The cost of not knowing:
- Hours spent checking manually: 3-5 hrs/week
- Annual cost (@$75/hr): $11,700-$19,500
- Changes you never see: Unknown

KompWatch (free plan):
- Cost: $0/mo
- Competitors tracked: 2
- AI-powered digests: Weekly
- Setup time: 60 seconds

Your free snapshot showed you what KompWatch can do. Now imagine getting that intelligence automatically, every week.

Start monitoring free: ${signupUrl}

No credit card. No sales call. Cancel anytime.

This is the last email in this sequence. We won't email you again unless you sign up for KompWatch.
`,
  };
}

/** Get the email builder for a given step key */
export function getLeadNurtureEmailBuilder(
  key: LeadNurtureStepKey
): (lead: Pick<EmailLead, "email" | "competitorUrl">) => LeadNurtureEmail {
  switch (key) {
    case "snapshot-recap":
      return buildSnapshotRecapEmail;
    case "value-tips":
      return buildValueTipsEmail;
    case "final-conversion":
      return buildFinalConversionEmail;
  }
}
