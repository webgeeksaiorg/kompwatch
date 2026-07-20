import { FROM_EMAIL, getResend } from "@/lib/resend";

/**
 * Trial expiry nudge email (ticket f25d).
 *
 * Sent in response to Stripe's `customer.subscription.trial_will_end` webhook,
 * which fires ~3 days before a trialing subscription auto-converts to paid.
 * This is a single-touch transactional urgency email — distinct from the
 * multi-email trial drip in ticket 3b1e (In Review, needing CEO approval).
 *
 * Goal: recover 8–15% same-day conversion on trials that would otherwise
 * silently lapse. See ticket f25d rationale in the Notion board.
 */

export interface TrialExpiryEmailRecipient {
  email: string;
  name: string | null;
}

export interface TrialExpiryEmailContext {
  /** Plan the user will convert to when the trial ends (PRO or TEAM). */
  plan: "PRO" | "TEAM";
  /** Trial end (unix seconds, matching Stripe `trial_end`). */
  trialEndUnixSec: number;
  /** Optional "now" for deterministic tests. Defaults to Date.now(). */
  nowMs?: number;
}

const PLAN_LABEL: Record<"PRO" | "TEAM", string> = {
  PRO: "Pro",
  TEAM: "Team",
};

const PLAN_PRICE_USD: Record<"PRO" | "TEAM", number> = {
  PRO: 49,
  TEAM: 149,
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Days remaining in trial, rounded up so "23 hours left" reads as "1 day".
 * Clamped to a floor of 0 (never negative — an already-expired trial should
 * still render sensibly, though the webhook shouldn't fire in that case).
 */
export function daysUntilTrialEnd(ctx: TrialExpiryEmailContext): number {
  const now = ctx.nowMs ?? Date.now();
  const endMs = ctx.trialEndUnixSec * 1000;
  const diffMs = endMs - now;
  if (diffMs <= 0) return 0;
  return Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function renderTrialExpirySubject(ctx: TrialExpiryEmailContext): string {
  const days = daysUntilTrialEnd(ctx);
  if (days <= 1) {
    return `Your KompWatch trial ends tomorrow`;
  }
  return `Your KompWatch trial ends in ${days} days`;
}

export function renderTrialExpiryHtml(
  recipient: TrialExpiryEmailRecipient,
  ctx: TrialExpiryEmailContext,
): string {
  const days = daysUntilTrialEnd(ctx);
  const greeting = recipient.name ? `Hi ${escapeHtml(recipient.name)}` : "Hi there";
  const planLabel = PLAN_LABEL[ctx.plan];
  const planPrice = PLAN_PRICE_USD[ctx.plan];
  const baseUrl = process.env.NEXTAUTH_URL || "https://kompwatch.com";
  const billingUrl = `${baseUrl}/settings/billing?utm_source=email&utm_medium=trial-expiry&utm_campaign=trial-nudge-f25d`;
  const dashboardUrl = `${baseUrl}/dashboard?utm_source=email&utm_medium=trial-expiry&utm_campaign=trial-nudge-f25d`;

  const countdownLabel =
    days <= 1 ? "trial ends tomorrow" : `${days} days left in trial`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:#fff;border-radius:8px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <div style="display:inline-block;background:#fef3c7;color:#92400e;border-radius:4px;padding:2px 10px;font-size:12px;font-weight:600;margin-bottom:12px;">
        &#x23F3; ${escapeHtml(countdownLabel.toUpperCase())}
      </div>
      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">
        ${greeting} &mdash; your trial ends ${days <= 1 ? "tomorrow" : `in ${days} days`}
      </h1>
      <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.5;">
        Your KompWatch ${escapeHtml(planLabel)} trial will convert to a paid subscription
        at <strong>$${planPrice}/month</strong> when the trial ends. No action needed if you're
        happy &mdash; monitoring keeps running without interruption.
      </p>
      <div style="background:#f9fafb;border-radius:6px;padding:16px;margin-bottom:16px;">
        <p style="margin:0 0 8px;font-weight:600;color:#111;font-size:14px;">What you'll keep on ${escapeHtml(planLabel)}:</p>
        <ul style="margin:0;padding:0 0 0 20px;color:#444;font-size:14px;line-height:1.7;">
          <li>${ctx.plan === "TEAM" ? "50" : "10"} competitors tracked daily</li>
          <li>Daily digest emails (Free plan is weekly only)</li>
          <li>Slack + webhook alerts on high-severity changes</li>
          <li>Full change history + AI-summarized diffs</li>
        </ul>
      </div>
      <p style="margin:0 0 20px;color:#555;font-size:14px;line-height:1.5;">
        Klue and Crayon charge <strong>$20K+/yr</strong> for the same monitoring stack.
        KompWatch ${escapeHtml(planLabel)} is <strong>$${planPrice}/mo</strong>, month-to-month, cancel anytime.
      </p>
      <p style="margin:0 0 24px;">
        <a href="${dashboardUrl}" style="display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;padding:11px 20px;border-radius:6px;font-size:14px;font-weight:600;margin-right:8px;">
          Open dashboard &rarr;
        </a>
        <a href="${billingUrl}" style="display:inline-block;color:#4f46e5;text-decoration:none;padding:11px 12px;border-radius:6px;font-size:13px;">
          Manage billing
        </a>
      </p>
      <hr style="border:none;border-top:1px solid #eee;margin:0 0 12px;"/>
      <p style="margin:0;color:#999;font-size:12px;">
        Don't want to continue? You can cancel from <a href="${billingUrl}" style="color:#666;">Settings &rarr; Billing</a>
        anytime before the trial ends and you won't be charged.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export function renderTrialExpiryText(
  recipient: TrialExpiryEmailRecipient,
  ctx: TrialExpiryEmailContext,
): string {
  const days = daysUntilTrialEnd(ctx);
  const greeting = recipient.name ? `Hi ${recipient.name}` : "Hi there";
  const planLabel = PLAN_LABEL[ctx.plan];
  const planPrice = PLAN_PRICE_USD[ctx.plan];
  const baseUrl = process.env.NEXTAUTH_URL || "https://kompwatch.com";
  const billingUrl = `${baseUrl}/settings/billing?utm_source=email&utm_medium=trial-expiry&utm_campaign=trial-nudge-f25d`;
  const dashboardUrl = `${baseUrl}/dashboard?utm_source=email&utm_medium=trial-expiry&utm_campaign=trial-nudge-f25d`;

  const timing = days <= 1 ? "tomorrow" : `in ${days} days`;
  const competitorLimit = ctx.plan === "TEAM" ? "50" : "10";

  return [
    `YOUR KOMPWATCH TRIAL ENDS ${timing.toUpperCase()}`,
    "",
    `${greeting},`,
    "",
    `Your KompWatch ${planLabel} trial will convert to a paid subscription at $${planPrice}/month when the trial ends ${timing}. No action needed if you're happy — monitoring keeps running without interruption.`,
    "",
    `What you'll keep on ${planLabel}:`,
    `  - ${competitorLimit} competitors tracked daily`,
    "  - Daily digest emails (Free plan is weekly only)",
    "  - Slack + webhook alerts on high-severity changes",
    "  - Full change history + AI-summarized diffs",
    "",
    `Klue and Crayon charge $20K+/yr for the same monitoring stack. KompWatch ${planLabel} is $${planPrice}/mo, month-to-month, cancel anytime.`,
    "",
    `Open dashboard: ${dashboardUrl}`,
    `Manage billing:  ${billingUrl}`,
    "",
    "---",
    `Don't want to continue? Cancel from Settings → Billing anytime before the trial ends and you won't be charged.`,
    "",
  ].join("\n");
}

/**
 * Send the trial-expiry nudge email. Callers should handle failures
 * (log + swallow) so a single Resend hiccup doesn't fail the webhook
 * and cause Stripe to retry indefinitely.
 */
export async function sendTrialExpiryEmail(
  recipient: TrialExpiryEmailRecipient,
  ctx: TrialExpiryEmailContext,
): Promise<void> {
  const resend = getResend();
  await resend.emails.send({
    from: FROM_EMAIL,
    to: recipient.email,
    subject: renderTrialExpirySubject(ctx),
    html: renderTrialExpiryHtml(recipient, ctx),
    text: renderTrialExpiryText(recipient, ctx),
  });
}
