import type { ChangeType, Severity } from "@prisma/client";
import { FROM_EMAIL, getResend } from "@/lib/resend";
import { splitChangeDetails } from "@/lib/change-context";

export interface FirstChangeEmailChange {
  changeType: ChangeType;
  severity: Severity;
  summary: string;
  details: string | null;
}

export interface FirstChangeEmailCompetitor {
  name: string;
  url: string;
}

export interface FirstChangeEmailRecipient {
  email: string;
  name: string | null;
}

const SEVERITY_EMOJI: Record<Severity, string> = {
  CRITICAL: "\u{1F534}",
  HIGH: "\u{1F7E0}",
  MEDIUM: "\u{1F7E1}",
  LOW: "\u{1F7E2}",
};

const CHANGE_TYPE_LABEL: Record<ChangeType, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Blog",
  JOB: "Jobs",
  TECH: "Tech Stack",
  GENERAL: "General",
  COMMUNITY: "Community",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderFirstChangeSubject(
  competitor: FirstChangeEmailCompetitor,
): string {
  return `First changes detected on ${competitor.name} — your monitoring is live`;
}

export function renderFirstChangeHtml(
  recipient: FirstChangeEmailRecipient,
  competitor: FirstChangeEmailCompetitor,
  changes: FirstChangeEmailChange[],
): string {
  const greeting = recipient.name ? `Hi ${recipient.name}` : "Hi there";
  const dashboardUrl = `${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/dashboard`;

  const changeRows = changes
    .slice(0, 5)
    .map((c) => {
      const emoji = SEVERITY_EMOJI[c.severity] || "";
      const typeLabel = CHANGE_TYPE_LABEL[c.changeType] || c.changeType;
      const { factual, implication } = c.details
        ? splitChangeDetails(c.details)
        : { factual: "", implication: null };

      return `
        <div style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
          <div style="margin-bottom:4px;">
            <span style="font-size:12px;">${emoji}</span>
            <span style="display:inline-block;background:#e0e7ff;color:#3730a3;border-radius:3px;padding:1px 6px;font-size:11px;font-weight:600;margin-left:4px;">${escapeHtml(typeLabel)}</span>
          </div>
          <p style="margin:0 0 4px;font-weight:600;color:#111;font-size:14px;">${escapeHtml(c.summary)}</p>
          ${factual ? `<p style="margin:0;color:#444;font-size:13px;">${escapeHtml(factual)}</p>` : ""}
          ${implication ? `<p style="margin:4px 0 0;color:#1a1a1a;font-size:13px;"><strong>Why this matters:</strong> ${escapeHtml(implication)}</p>` : ""}
        </div>`;
    })
    .join("");

  const moreNote =
    changes.length > 5
      ? `<p style="margin:8px 0 0;color:#666;font-size:13px;">+ ${changes.length - 5} more change${changes.length - 5 === 1 ? "" : "s"} — view all in your dashboard.</p>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:#fff;border-radius:8px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <div style="display:inline-block;background:#d1fae5;color:#065f46;border-radius:4px;padding:2px 10px;font-size:12px;font-weight:600;margin-bottom:12px;">
        \u2705 FIRST CHANGES DETECTED
      </div>
      <h1 style="margin:0 0 4px;font-size:20px;color:#111;">
        ${escapeHtml(competitor.name)} just changed
      </h1>
      <p style="margin:0 0 16px;color:#666;font-size:14px;">
        ${greeting} \u2014 great news! We detected the first changes on <strong>${escapeHtml(competitor.name)}</strong>. Your competitor monitoring is working.
      </p>
      <div style="background:#f9fafb;border-radius:6px;padding:16px;margin-bottom:16px;">
        <p style="margin:0 0 8px;font-weight:600;color:#111;font-size:13px;">${changes.length} change${changes.length === 1 ? "" : "s"} detected:</p>
        ${changeRows}
        ${moreNote}
      </div>
      <p style="margin:0 0 16px;color:#666;font-size:14px;">
        We'll keep watching <strong>${escapeHtml(competitor.name)}</strong> and include future changes in your regular digest emails.
      </p>
      <p style="margin:0 0 24px;">
        <a href="${dashboardUrl}" style="display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:14px;font-weight:500;">
          View your dashboard \u2192
        </a>
      </p>
      <hr style="border:none;border-top:1px solid #eee;margin:0 0 12px;"/>
      <p style="margin:0;color:#999;font-size:12px;">
        This is a one-time notification for ${escapeHtml(recipient.email)}. Future changes will appear in your scheduled digests.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export function renderFirstChangeText(
  recipient: FirstChangeEmailRecipient,
  competitor: FirstChangeEmailCompetitor,
  changes: FirstChangeEmailChange[],
): string {
  const greeting = recipient.name ? `Hi ${recipient.name}` : "Hi there";
  const dashboardUrl = `${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/dashboard`;

  const lines = [
    `FIRST CHANGES DETECTED \u2014 ${competitor.name}`,
    "",
    `${greeting}, great news! We detected the first changes on ${competitor.name}. Your competitor monitoring is working.`,
    "",
    `${changes.length} change${changes.length === 1 ? "" : "s"} detected:`,
    "",
  ];

  for (const c of changes.slice(0, 5)) {
    const typeLabel = CHANGE_TYPE_LABEL[c.changeType] || c.changeType;
    lines.push(`[${typeLabel}] ${c.summary}`);
    if (c.details) lines.push(`  ${c.details}`);
    lines.push("");
  }

  if (changes.length > 5) {
    lines.push(`+ ${changes.length - 5} more — view all in your dashboard.`, "");
  }

  lines.push(
    `We'll keep watching ${competitor.name} and include future changes in your regular digest emails.`,
    "",
    `View your dashboard: ${dashboardUrl}`,
    "",
    "---",
    "This is a one-time notification. Future changes will appear in your scheduled digests.",
  );

  return lines.join("\n");
}

/**
 * Send the "first competitor change detected" trigger email. This is a
 * one-time email per competitor, sent when meaningful changes are first
 * detected. Available to all plans (Free, Pro, Team).
 *
 * Caller must verify this is genuinely the first change batch for the
 * competitor. Throws on Resend failures — callers should catch so a
 * bad delivery doesn't break the snapshot pipeline.
 */
export async function sendFirstChangeEmail(
  recipient: FirstChangeEmailRecipient,
  competitor: FirstChangeEmailCompetitor,
  changes: FirstChangeEmailChange[],
): Promise<void> {
  const resend = getResend();
  const subject = renderFirstChangeSubject(competitor);
  const html = renderFirstChangeHtml(recipient, competitor, changes);
  const text = renderFirstChangeText(recipient, competitor, changes);

  await resend.emails.send({
    from: FROM_EMAIL,
    to: recipient.email,
    subject,
    html,
    text,
  });
}
