import type { ChangeType, Plan, Severity } from "@prisma/client";
import { FROM_EMAIL, getResend } from "@/lib/resend";
import { planAllowsInstantPricingAlerts } from "@/lib/stripe";
import { severityMeetsThreshold } from "@/lib/severity";
import { splitChangeDetails } from "@/lib/change-context";

/**
 * Minimum severity for an instant pricing alert. MEDIUM+ matches the ticket
 * spec; LOW pricing tweaks (e.g. a $1 currency-conversion delta) still wait
 * for the digest.
 */
export const INSTANT_PRICING_MIN_SEVERITY: Severity = "MEDIUM";

/**
 * Confidence floor. We reuse the same 70% threshold the Slack instant-alert
 * path uses so an over-eager AI classification doesn't blast paying users'
 * inboxes with false positives.
 */
export const INSTANT_PRICING_MIN_CONFIDENCE = 70;

export interface InstantPricingAlertChange {
  changeType: ChangeType;
  severity: Severity;
  summary: string;
  details: string | null;
  pageUrl: string | null;
  confidence: number; // 0–100 scale, matches detectChanges() output
}

export interface InstantPricingAlertGate {
  plan: Plan;
  instantPricingAlertsEnabled: boolean;
}

/**
 * Pure-logic check: should this specific change trigger an instant pricing
 * email for this user? Exported separately so unit tests don't need to
 * stub Resend.
 *
 * Rules:
 *   1. Plan must allow instant pricing alerts (Pro+).
 *   2. User must not have opted out (`instantPricingAlertsEnabled`).
 *   3. Change must be a PRICING change.
 *   4. Severity must be MEDIUM or higher.
 *   5. AI confidence must be >= INSTANT_PRICING_MIN_CONFIDENCE.
 */
export function shouldSendInstantPricingAlert(
  change: InstantPricingAlertChange,
  gate: InstantPricingAlertGate,
): boolean {
  if (!planAllowsInstantPricingAlerts(gate.plan)) return false;
  if (!gate.instantPricingAlertsEnabled) return false;
  if (change.changeType !== "PRICING") return false;
  if (!severityMeetsThreshold(change.severity, INSTANT_PRICING_MIN_SEVERITY)) {
    return false;
  }
  if (change.confidence < INSTANT_PRICING_MIN_CONFIDENCE) return false;
  return true;
}

export interface InstantPricingAlertCompetitor {
  name: string;
  url: string;
}

export interface InstantPricingAlertRecipient {
  email: string;
  name: string | null;
}

const SEVERITY_EMOJI: Record<Severity, string> = {
  CRITICAL: "🔴",
  HIGH: "🟠",
  MEDIUM: "🟡",
  LOW: "🟢",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderInstantPricingAlertSubject(
  competitor: InstantPricingAlertCompetitor,
  change: Pick<InstantPricingAlertChange, "severity" | "summary">,
): string {
  const prefix = SEVERITY_EMOJI[change.severity] || "";
  const head = prefix ? `${prefix} ` : "";
  // Keep subject focused — competitor + 60-char summary is enough.
  const trimmedSummary =
    change.summary.length > 80
      ? `${change.summary.slice(0, 77)}...`
      : change.summary;
  return `${head}${competitor.name} pricing change: ${trimmedSummary}`;
}

export function renderInstantPricingAlertHtml(
  recipient: InstantPricingAlertRecipient,
  competitor: InstantPricingAlertCompetitor,
  change: Pick<
    InstantPricingAlertChange,
    "severity" | "summary" | "details" | "pageUrl"
  >,
): string {
  const greeting = recipient.name ? `Hi ${recipient.name}` : "Hi there";
  const { factual, implication } = change.details
    ? splitChangeDetails(change.details)
    : { factual: "", implication: "" };
  const pageLink = change.pageUrl
    ? `<p style="margin:0 0 16px;font-size:13px;color:#666;">Page: <a href="${escapeHtml(change.pageUrl)}" style="color:#4338ca;">${escapeHtml(change.pageUrl)}</a></p>`
    : "";
  const settingsUrl = `${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/settings`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:#fff;border-radius:8px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <div style="display:inline-block;background:#fef3c7;color:#92400e;border-radius:4px;padding:2px 10px;font-size:12px;font-weight:600;margin-bottom:12px;">
        ${SEVERITY_EMOJI[change.severity] || ""} INSTANT PRICING ALERT
      </div>
      <h1 style="margin:0 0 4px;font-size:20px;color:#111;">
        ${escapeHtml(competitor.name)} just changed their pricing
      </h1>
      <p style="margin:0 0 16px;color:#666;font-size:14px;">
        ${greeting} — we detected a pricing change a moment ago and pushed it straight to your inbox.
      </p>
      ${pageLink}
      <div style="background:#f9fafb;border-radius:6px;padding:16px;margin-bottom:16px;">
        <p style="margin:0 0 8px;font-weight:600;color:#111;">${escapeHtml(change.summary)}</p>
        ${factual ? `<p style="margin:0 0 8px;color:#444;font-size:14px;">${escapeHtml(factual)}</p>` : ""}
        ${implication ? `<p style="margin:0;color:#1a1a1a;font-size:14px;"><strong>What this means for you:</strong> ${escapeHtml(implication)}</p>` : ""}
      </div>
      <p style="margin:0 0 24px;">
        <a href="${escapeHtml(competitor.url)}" style="display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:14px;font-weight:500;">
          View ${escapeHtml(competitor.name)} →
        </a>
      </p>
      <hr style="border:none;border-top:1px solid #eee;margin:0 0 12px;"/>
      <p style="margin:0;color:#999;font-size:12px;">
        You're receiving this because instant pricing alerts are enabled (${escapeHtml(recipient.email)}).
        <a href="${settingsUrl}" style="color:#666;">Disable instant pricing alerts</a>.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export function renderInstantPricingAlertText(
  recipient: InstantPricingAlertRecipient,
  competitor: InstantPricingAlertCompetitor,
  change: Pick<
    InstantPricingAlertChange,
    "severity" | "summary" | "details" | "pageUrl"
  >,
): string {
  const greeting = recipient.name ? `Hi ${recipient.name}` : "Hi there";
  const settingsUrl = `${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/settings`;
  const lines = [
    `INSTANT PRICING ALERT — ${competitor.name}`,
    "",
    `${greeting}, we detected a pricing change a moment ago.`,
    "",
    `Competitor: ${competitor.name} (${competitor.url})`,
  ];
  if (change.pageUrl) lines.push(`Page: ${change.pageUrl}`);
  lines.push("", `Summary: ${change.summary}`);
  if (change.details) lines.push("", change.details);
  lines.push(
    "",
    "---",
    `Manage instant pricing alerts: ${settingsUrl}`,
  );
  return lines.join("\n");
}

/**
 * Send an instant pricing-change email. Caller is responsible for the
 * gating decision (call `shouldSendInstantPricingAlert` first). Throws
 * if the Resend API is unconfigured — callers should catch and log so a
 * single bad delivery doesn't break the snapshot pipeline.
 */
export async function sendInstantPricingAlert(
  recipient: InstantPricingAlertRecipient,
  competitor: InstantPricingAlertCompetitor,
  change: InstantPricingAlertChange,
): Promise<void> {
  const resend = getResend();
  const subject = renderInstantPricingAlertSubject(competitor, change);
  const html = renderInstantPricingAlertHtml(recipient, competitor, change);
  const text = renderInstantPricingAlertText(recipient, competitor, change);

  await resend.emails.send({
    from: FROM_EMAIL,
    to: recipient.email,
    subject,
    html,
    text,
  });
}
