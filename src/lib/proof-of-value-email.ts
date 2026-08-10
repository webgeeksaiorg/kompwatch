import type { User } from "@prisma/client";

/**
 * Proof-of-value onboarding email (ticket 57fe).
 *
 * One-time email sent ~24h after signup that shows the user what a real
 * KompWatch change-alert looks like — using a clearly-labeled example
 * competitor ("Acme Rival") and three mock changes (pricing hike, feature
 * launch, hiring surge).
 *
 * Why: 0 new paid subscribers in 30 days. Free-trial users may never see
 * a real change alert before churning (their own competitors haven't moved
 * yet, or they never added one). This email delivers the "aha" moment
 * upfront so they understand the value before deciding to upgrade.
 *
 * Fires independently of the numbered ONBOARDING_STEPS sequence — gated
 * by the `proofOfValueSentAt` timestamp on User.
 *
 * Delivery window:
 *   - Earliest: 24h after signup (`PROOF_OF_VALUE_MIN_HOURS`)
 *   - Latest:   14 days after signup (`PROOF_OF_VALUE_MAX_DAYS`)
 *
 * The max-window prevents a rollout-day blast to every historical user
 * whose `proofOfValueSentAt` is NULL. Only genuinely-recent signups
 * qualify.
 */

export const PROOF_OF_VALUE_MIN_HOURS = 24;
export const PROOF_OF_VALUE_MAX_DAYS = 14;

/**
 * Should this user receive the proof-of-value email now?
 *
 * Rules:
 *   1. Must not have received it already (`proofOfValueSentAt IS NULL`).
 *   2. Signup must be at least `PROOF_OF_VALUE_MIN_HOURS` ago.
 *   3. Signup must be at most `PROOF_OF_VALUE_MAX_DAYS` ago (backfill guard).
 */
export function shouldSendProofOfValue(
  user: Pick<User, "createdAt" | "proofOfValueSentAt">,
  now: Date = new Date(),
): boolean {
  if (user.proofOfValueSentAt) return false;

  const ageMs = now.getTime() - new Date(user.createdAt).getTime();
  const ageHours = ageMs / (1000 * 60 * 60);
  const ageDays = ageHours / 24;

  if (ageHours < PROOF_OF_VALUE_MIN_HOURS) return false;
  if (ageDays > PROOF_OF_VALUE_MAX_DAYS) return false;

  return true;
}

// ── Email content ────────────────────────────────────────────────

export interface ProofOfValueEmail {
  subject: string;
  html: string;
  text: string;
}

const BASE_URL = process.env.NEXTAUTH_URL || "https://kompwatch.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Mock changes used inside the example alert. Kept as data (not hardcoded
 * in the template string) so tests can verify each item is rendered.
 */
export interface MockChange {
  typeLabel: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  emoji: string;
  summary: string;
  factual: string;
  implication: string;
}

export const PROOF_OF_VALUE_MOCK_CHANGES: MockChange[] = [
  {
    typeLabel: "Pricing",
    severity: "HIGH",
    emoji: "\u{1F7E0}", // 🟠
    summary: "Pro plan raised from $49/mo to $59/mo",
    factual:
      "Pricing page updated 3 hours ago. Starter plan unchanged at $19/mo; Enterprise now quoted as 'contact sales' (was $299/mo).",
    implication:
      "20% price hike + removed Enterprise anchor suggests they're pushing mid-market deals upmarket. Your sales team should know before their next competitive call.",
  },
  {
    typeLabel: "Feature",
    severity: "MEDIUM",
    emoji: "\u{1F7E1}", // 🟡
    summary: "New AI-powered reporting module launched",
    factual:
      "New /features/ai-reports page appeared with 4 demo screenshots. Changelog mentions 'natural-language competitor queries' — likely a Claude/GPT integration.",
    implication:
      "They're moving into your AI story. Update your battlecards before this shows up in their next outbound campaign.",
  },
  {
    typeLabel: "Jobs",
    severity: "MEDIUM",
    emoji: "\u{1F7E1}", // 🟡
    summary: "8 new engineering roles posted this week (was 2)",
    factual:
      "4x ML Engineer, 2x Platform Engineer, 1x DevRel, 1x Head of Growth. Roles concentrated in San Francisco and remote-US.",
    implication:
      "Hiring surge — especially the Head of Growth + DevRel combo — signals a funding round or upcoming GTM push. Track their announcements this quarter.",
  },
];

/**
 * Build the proof-of-value email for a user. The output mirrors the visual
 * treatment of a real digest so recipients get a preview of the product.
 */
export function buildProofOfValueEmail(
  user: Pick<User, "name" | "email">,
): ProofOfValueEmail {
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  const competitorsUrl = `${BASE_URL}/competitors`;
  const dashboardUrl = `${BASE_URL}/dashboard`;
  const upgradeUrl = `${BASE_URL}/pricing?utm_source=email&utm_medium=proof-of-value&utm_campaign=onboarding-57fe`;

  const changeRows = PROOF_OF_VALUE_MOCK_CHANGES.map(
    (c) => `
        <div style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
          <div style="margin-bottom:4px;">
            <span style="font-size:12px;">${c.emoji}</span>
            <span style="display:inline-block;background:#e0e7ff;color:#3730a3;border-radius:3px;padding:1px 6px;font-size:11px;font-weight:600;margin-left:4px;">${escapeHtml(c.typeLabel)}</span>
          </div>
          <p style="margin:0 0 4px;font-weight:600;color:#111;font-size:14px;">${escapeHtml(c.summary)}</p>
          <p style="margin:0;color:#444;font-size:13px;">${escapeHtml(c.factual)}</p>
          <p style="margin:4px 0 0;color:#1a1a1a;font-size:13px;"><strong>Why this matters:</strong> ${escapeHtml(c.implication)}</p>
        </div>`,
  ).join("");

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:#fff;border-radius:8px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

      <div style="display:inline-block;background:#fef3c7;color:#92400e;border-radius:4px;padding:2px 10px;font-size:11px;font-weight:700;letter-spacing:0.5px;margin-bottom:12px;text-transform:uppercase;">
        Example alert &mdash; this is what KompWatch sends
      </div>

      <h1 style="margin:0 0 8px;font-size:22px;color:#111;">
        ${greeting}, here's what a real alert looks like
      </h1>
      <p style="margin:0 0 20px;color:#555;font-size:14px;line-height:1.6;">
        You signed up for KompWatch yesterday. Once your first snapshot completes,
        alerts like the one below will land in your inbox whenever a competitor
        changes their pricing, launches a feature, or ramps up hiring.
      </p>

      <p style="margin:0 0 8px;color:#666;font-size:12px;font-weight:600;letter-spacing:0.3px;text-transform:uppercase;">
        Sample alert &mdash; Acme Rival (example competitor)
      </p>

      <div style="background:#f9fafb;border-radius:6px;padding:16px;margin-bottom:20px;border:1px solid #e5e7eb;">
        <p style="margin:0 0 8px;font-weight:600;color:#111;font-size:13px;">3 changes detected in the last 24 hours:</p>
        ${changeRows}
      </div>

      <div style="margin:20px 0;padding:16px;background:#f0f7ff;border-radius:6px;">
        <h3 style="margin:0 0 6px;font-size:15px;color:#1e40af;">Ready to see this for your competitors?</h3>
        <p style="margin:0 0 12px;color:#444;font-size:13px;line-height:1.5;">
          Add one competitor URL and we'll start monitoring within minutes.
          Your first real alert usually arrives within 24&ndash;48 hours &mdash;
          most competitors change something every week.
        </p>
        <a href="${competitorsUrl}" style="display:inline-block;background:#2563eb;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;">
          Add Your First Competitor &rarr;
        </a>
      </div>

      <p style="margin:20px 0 0;color:#666;font-size:13px;line-height:1.6;">
        Already added a competitor? Check your <a href="${dashboardUrl}" style="color:#2563eb;">dashboard</a>
        &mdash; the first snapshot is captured within the first hour, and alerts
        start firing on the next change we detect.
      </p>

      <hr style="border:none;border-top:1px solid #eee;margin:24px 0 16px;"/>
      <p style="margin:0 0 8px;color:#666;font-size:12px;line-height:1.5;">
        <strong>Not tracking pricing yet?</strong> Pricing changes are our #1 signal &mdash;
        Pro users get instant email alerts the moment a competitor updates their pricing page.
        <a href="${upgradeUrl}" style="color:#2563eb;">See Pro plans &rarr;</a>
      </p>
      <p style="margin:0;color:#999;font-size:11px;">
        KompWatch &mdash; AI-powered competitor monitoring.
        <a href="${BASE_URL}/settings" style="color:#666;">Manage preferences</a>
      </p>
    </div>
  </div>
</body>
</html>`;

  const textLines: string[] = [
    "[EXAMPLE ALERT — THIS IS WHAT KOMPWATCH SENDS]",
    "",
    `${greeting}, here's what a real alert looks like.`,
    "",
    "You signed up for KompWatch yesterday. Once your first snapshot completes, alerts like the one below will land in your inbox whenever a competitor changes their pricing, launches a feature, or ramps up hiring.",
    "",
    "SAMPLE ALERT — Acme Rival (example competitor)",
    "3 changes detected in the last 24 hours:",
    "",
  ];

  for (const c of PROOF_OF_VALUE_MOCK_CHANGES) {
    textLines.push(`[${c.typeLabel}] ${c.summary}`);
    textLines.push(`  ${c.factual}`);
    textLines.push(`  Why this matters: ${c.implication}`);
    textLines.push("");
  }

  textLines.push(
    "READY TO SEE THIS FOR YOUR COMPETITORS?",
    "Add one competitor URL and we'll start monitoring within minutes. Your first real alert usually arrives within 24-48 hours.",
    "",
    `Add your first competitor: ${competitorsUrl}`,
    "",
    `Already added one? Check your dashboard: ${dashboardUrl}`,
    "",
    "---",
    "Not tracking pricing yet? Pricing changes are our #1 signal — Pro users get instant email alerts the moment a competitor updates pricing.",
    `See Pro plans: ${upgradeUrl}`,
    "",
    "KompWatch — AI-powered competitor monitoring.",
    `Manage preferences: ${BASE_URL}/settings`,
  );

  return {
    subject: "See what a KompWatch alert looks like (example inside)",
    html,
    text: textLines.join("\n"),
  };
}
