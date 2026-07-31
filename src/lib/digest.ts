import { Change, Competitor, User } from "@prisma/client";
import { splitChangeDetails } from "@/lib/change-context";
import { signalLabel } from "@/lib/signal-score";

/** Group changes by competitor for digest rendering */
export interface DigestCompetitorGroup {
  competitor: Pick<Competitor, "name" | "url">;
  changes: Pick<Change, "changeType" | "contentZone" | "summary" | "details" | "severity" | "signalScore" | "createdAt">[];
}

/** Build grouped change data for a digest */
export function groupChangesByCompetitor(
  changes: (Change & { competitor: Competitor })[]
): DigestCompetitorGroup[] {
  const map = new Map<string, DigestCompetitorGroup>();

  for (const change of changes) {
    let group = map.get(change.competitorId);
    if (!group) {
      group = {
        competitor: { name: change.competitor.name, url: change.competitor.url },
        changes: [],
      };
      map.set(change.competitorId, group);
    }
    group.changes.push({
      changeType: change.changeType,
      contentZone: change.contentZone,
      summary: change.summary,
      details: change.details,
      severity: change.severity,
      signalScore: change.signalScore,
      createdAt: change.createdAt,
    });
  }

  return Array.from(map.values());
}

const SEVERITY_EMOJI: Record<string, string> = {
  CRITICAL: "🔴",
  HIGH: "🟠",
  MEDIUM: "🟡",
  LOW: "🟢",
};

const CHANGE_TYPE_LABEL: Record<string, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Blog",
  JOB: "Jobs",
  TECH: "Tech Stack",
  GENERAL: "General",
  COMMUNITY: "Community",
};

const ZONE_LABEL: Record<string, string> = {
  POSITIONING: "Positioning",
  MONETIZATION: "Monetization",
  PRODUCT: "Product",
  MARKETING: "Marketing",
  TALENT: "Talent",
  LEGAL: "Legal",
  OPERATIONS: "Ops",
};

/**
 * Ticket f73e: severity-based upgrade nudge for FREE users.
 *
 * FREE plan gets a weekly digest, so HIGH/MEDIUM changes may sit undetected for
 * days. Surface an inline "Caught 18h late on Free" badge on qualifying rows to
 * convert peak-engagement moments into upgrade intent. Silent for PRO/TEAM and
 * for the welcome digest (plan unknown), matching the existing footer-CTA gate.
 */
const NUDGE_SEVERITIES = new Set<string>(["MEDIUM", "HIGH", "CRITICAL"]);

function shouldShowLateNudge(plan: User["plan"] | undefined, severity: string): boolean {
  return plan === "FREE" && NUDGE_SEVERITIES.has(severity);
}

function severityNudgeUrl(): string {
  return `${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/pricing?utm_source=digest&utm_medium=email&utm_campaign=free_severity_nudge`;
}

function renderSeverityNudgeHtml(): string {
  const url = severityNudgeUrl();
  return `<div class="late-nudge" style="margin-top:6px;font-size:12px;line-height:1.4;">
                  <span style="background:#fef2f2;color:#991b1b;border:1px solid #fecaca;border-radius:4px;padding:2px 6px;font-weight:600;">⏱ Caught 18h late on Free</span>
                  <a href="${url}" style="color:#2563eb;text-decoration:none;margin-left:6px;">Upgrade for hourly checks →</a>
                </div>`;
}

function renderSeverityNudgeText(): string {
  return `\n    ⏱ Caught 18h late on Free — upgrade for hourly checks: ${severityNudgeUrl()}`;
}

/** Render digest as HTML email */
export function renderDigestHtml(
  user: Pick<User, "name" | "email"> & { plan?: User["plan"] },
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY"
): string {
  const totalChanges = groups.reduce((sum, g) => sum + g.changes.length, 0);
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  const periodLabel = period === "DAILY" ? "daily" : "weekly";

  const competitorSections = groups
    .map((group) => {
      const changeRows = group.changes
        .map(
          (c) => {
            const signal = signalLabel(c.signalScore);
            const signalBadge = signal
              ? ` <span style="background:${signal.text === "Noise" ? "#f3f4f6" : signal.text === "Weak" ? "#fffbeb" : "#fefce8"};color:${signal.text === "Noise" ? "#6b7280" : signal.text === "Weak" ? "#b45309" : "#ca8a04"};border-radius:4px;padding:2px 6px;font-size:10px;">${signal.text} signal</span>`
              : "";
            return `<tr>
              <td class="change-severity" style="padding:8px 12px;border-bottom:1px solid #eee;width:28px;vertical-align:top;">${SEVERITY_EMOJI[c.severity] || "⚪"}</td>
              <td class="change-badges" style="padding:8px 12px;border-bottom:1px solid #eee;white-space:nowrap;vertical-align:top;">
                <span style="background:#f0f0f0;border-radius:4px;padding:2px 8px;font-size:12px;display:inline-block;margin-bottom:2px;">${CHANGE_TYPE_LABEL[c.changeType] || c.changeType}</span>${ZONE_LABEL[c.contentZone] ? ` <span style="background:#ede9fe;color:#6d28d9;border-radius:4px;padding:2px 8px;font-size:11px;display:inline-block;margin-bottom:2px;">${ZONE_LABEL[c.contentZone]}</span>` : ""}${signalBadge}
              </td>
              <td class="change-content" style="padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;">
                <strong>${escapeHtml(c.summary)}</strong>
                ${c.details ? `<br/><span style="color:#666;font-size:13px;">${renderDetailsHtml(c.details)}</span>` : ""}
                ${shouldShowLateNudge(user.plan, c.severity) ? renderSeverityNudgeHtml() : ""}
              </td>
            </tr>`;
          }
        )
        .join("");

      return `
        <div style="margin-bottom:24px;">
          <h3 class="competitor-name" style="margin:0 0 8px;color:#1a1a1a;">
            ${escapeHtml(group.competitor.name)}
            <span class="competitor-url" style="font-weight:normal;color:#666;font-size:13px;"> — ${escapeHtml(group.competitor.url)}</span>
          </h3>
          <table class="changes-table" style="width:100%;border-collapse:collapse;font-size:14px;">
            ${changeRows}
          </table>
        </div>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <!--<![endif]-->
  <style>
    @media only screen and (max-width: 480px) {
      .email-container { padding: 12px !important; }
      .email-card { padding: 16px !important; }
      .email-title { font-size: 18px !important; }
      .competitor-name { font-size: 15px !important; }
      .competitor-url { display: block !important; font-size: 12px !important; margin-top: 2px; }
      .changes-table { font-size: 14px !important; }
      .change-severity { padding: 6px 4px 6px 0 !important; width: 24px !important; }
      .change-badges { display: none !important; width: 0 !important; padding: 0 !important; overflow: hidden !important; }
      .change-content { padding: 6px 0 6px 4px !important; }
      .stats-banner { padding: 10px 12px !important; font-size: 13px !important; }
      .email-footer { font-size: 11px !important; }
      .footer-link { display: inline-block !important; padding: 8px 0 !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div class="email-container" style="max-width:600px;margin:0 auto;padding:24px;">
    <div class="email-card" style="background:#fff;border-radius:8px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <h1 class="email-title" style="margin:0 0 4px;font-size:20px;color:#111;">KompWatch ${period === "DAILY" ? "Daily" : "Weekly"} Digest</h1>
      <p style="margin:0 0 20px;color:#666;font-size:14px;">${greeting}, here's your ${periodLabel} competitor update.</p>

      <div class="stats-banner" style="background:#f0f7ff;border-radius:6px;padding:12px 16px;margin-bottom:20px;font-size:14px;">
        <strong>${totalChanges} change${totalChanges === 1 ? "" : "s"}</strong> detected across
        <strong>${groups.length} competitor${groups.length === 1 ? "" : "s"}</strong>
      </div>

      ${competitorSections}

      ${renderFreeTierUpgradeCtaHtml(user.plan)}

      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
      <p class="email-footer" style="margin:0;color:#999;font-size:12px;">
        You're receiving this because you have a KompWatch account (${escapeHtml(user.email)}).
        <a class="footer-link" href="${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/settings" style="color:#666;">Manage preferences</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

/** Render plain-text version of the digest */
export function renderDigestText(
  user: Pick<User, "name" | "email"> & { plan?: User["plan"] },
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY"
): string {
  const totalChanges = groups.reduce((sum, g) => sum + g.changes.length, 0);
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";
  const periodLabel = period === "DAILY" ? "daily" : "weekly";

  const sections = groups
    .map((group) => {
      const lines = group.changes
        .map(
          (c) => {
            const signal = signalLabel(c.signalScore);
            const signalTag = signal ? ` [${signal.text}]` : "";
            return `  ${SEVERITY_EMOJI[c.severity] || "-"} [${CHANGE_TYPE_LABEL[c.changeType] || c.changeType}]${ZONE_LABEL[c.contentZone] ? ` [${ZONE_LABEL[c.contentZone]}]` : ""}${signalTag} ${c.summary}${c.details ? `\n    ${c.details}` : ""}${shouldShowLateNudge(user.plan, c.severity) ? renderSeverityNudgeText() : ""}`;
          }
        )
        .join("\n");
      return `${group.competitor.name} (${group.competitor.url})\n${lines}`;
    })
    .join("\n\n");

  return `KompWatch ${period === "DAILY" ? "Daily" : "Weekly"} Digest

${greeting}, here's your ${periodLabel} competitor update.

${totalChanges} change(s) across ${groups.length} competitor(s)

${sections}
${renderFreeTierUpgradeCtaText(user.plan)}
---
Manage preferences: ${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/settings
`;
}

/** Generate email subject line */
export function digestSubject(
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY"
): string {
  const totalChanges = groups.reduce((sum, g) => sum + g.changes.length, 0);
  const hasHigh = groups.some((g) =>
    g.changes.some((c) => c.severity === "HIGH" || c.severity === "CRITICAL")
  );
  const prefix = hasHigh ? "🔴 " : "";
  const periodLabel = period === "DAILY" ? "Daily" : "Weekly";
  return `${prefix}${periodLabel} Digest: ${totalChanges} competitor change${totalChanges === 1 ? "" : "s"} detected`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Free-tier upgrade CTA — rendered inline between competitor sections and the
 * standard footer for FREE-plan users only. Silent for PRO/TEAM (or when the
 * plan is unknown, e.g. welcome digest, to keep sample emails clean).
 *
 * Ticket dd83: digest email is the highest-engagement touchpoint for free users;
 * capture upgrade intent at that peak moment with a UTM-tagged pricing link.
 */
function renderFreeTierUpgradeCtaHtml(plan?: User["plan"]): string {
  if (plan !== "FREE") return "";
  const upgradeUrl = `${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/pricing?utm_source=digest&utm_medium=email&utm_campaign=free_footer_cta`;
  return `<div class="upgrade-cta" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px 18px;margin-top:8px;margin-bottom:8px;">
        <p style="margin:0 0 6px;font-size:15px;color:#1e3a8a;font-weight:600;">Get daily digests + track up to 10 competitors</p>
        <p style="margin:0 0 12px;color:#334155;font-size:13px;line-height:1.5;">You're on the free plan (weekly digest, 2 competitors). Upgrade to Pro for daily change alerts, Slack notifications, and 10 tracked competitors — <strong>$49/mo</strong>.</p>
        <a href="${upgradeUrl}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:14px;font-weight:600;">Upgrade to Pro →</a>
      </div>`;
}

function renderFreeTierUpgradeCtaText(plan?: User["plan"]): string {
  if (plan !== "FREE") return "";
  const upgradeUrl = `${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/pricing?utm_source=digest&utm_medium=email&utm_campaign=free_footer_cta`;
  return `\n---\nGet daily digests + track up to 10 competitors\nYou're on the free plan (weekly digest, 2 competitors). Upgrade to Pro for daily change alerts, Slack notifications, and 10 tracked competitors — $49/mo.\nUpgrade: ${upgradeUrl}\n`;
}

function renderDetailsHtml(details: string): string {
  const { factual, implication } = splitChangeDetails(details);
  if (!implication) return escapeHtml(details);
  const factualHtml = factual ? escapeHtml(factual) : "";
  const implicationHtml = `<br/><strong style="color:#1a1a1a;">What this means for you:</strong> ${escapeHtml(implication)}`;
  return `${factualHtml}${implicationHtml}`;
}

// ── Welcome digest (sent immediately on signup with demo data) ──

const BASE_URL = process.env.NEXTAUTH_URL || "https://kompwatch.com";

/** Demo change data used to populate the welcome digest */
const DEMO_CHANGES: DigestCompetitorGroup[] = [
  {
    competitor: { name: "Acme Analytics", url: "https://www.example-competitor.com" },
    changes: [
      {
        changeType: "PRICING",
        contentZone: "MONETIZATION",
        summary: "Increased Pro plan price from $49/mo to $59/mo",
        details:
          "The Pro tier pricing page now shows $59/mo (previously $49/mo). The Team plan remains at $149/mo. This is a 20% price increase on their most popular tier.",
        severity: "HIGH",
        signalScore: 0.85,
        createdAt: new Date(),
      },
      {
        changeType: "FEATURE",
        contentZone: "PRODUCT",
        summary: "Launched new AI-powered reporting feature",
        details:
          'New "AI Insights" section added to the features page. Appears to use automated analysis to generate weekly summaries. Positioned as a premium feature for Team plans.',
        severity: "MEDIUM",
        signalScore: 0.65,
        createdAt: new Date(),
      },
      {
        changeType: "BLOG",
        contentZone: "MARKETING",
        summary: "Published blog post: \"Why We're Betting Big on AI\"",
        details:
          "New blog post discussing their AI strategy and roadmap. Mentions upcoming features including predictive analytics and natural language queries.",
        severity: "LOW",
        signalScore: 0.4,
        createdAt: new Date(),
      },
    ],
  },
];

/**
 * Build a welcome digest email using demo competitor data.
 * Sent immediately on signup so users see what a real digest looks like.
 */
export function buildWelcomeDigest(user: Pick<User, "name" | "email">): {
  subject: string;
  html: string;
  text: string;
} {
  const greeting = user.name ? `Hi ${user.name}` : "Hi there";

  const digestHtmlBody = renderDigestHtml(user, DEMO_CHANGES, "WEEKLY");

  // Wrap the rendered digest with a sample-data banner
  const html = digestHtmlBody.replace(
    `<p style="margin:0 0 20px;color:#666;font-size:14px;">${greeting}, here's your weekly competitor update.</p>`,
    `<p style="margin:0 0 12px;color:#666;font-size:14px;">${greeting}, here's a preview of your weekly competitor digest.</p>
      <div style="background:#fffbeb;border:1px solid #fbbf24;border-radius:6px;padding:10px 14px;margin-bottom:20px;font-size:13px;color:#92400e;">
        <strong>Sample digest</strong> — This uses demo data from "Acme Analytics" so you can see exactly what your digests will look like. Add a real competitor to start receiving actual updates.
      </div>`
  );

  const textBody = renderDigestText(user, DEMO_CHANGES, "WEEKLY");
  const text = textBody.replace(
    `${greeting}, here's your weekly competitor update.`,
    `${greeting}, here's a preview of your weekly competitor digest.\n\n[SAMPLE DIGEST] This uses demo data from "Acme Analytics" so you can see exactly what your digests will look like. Add a real competitor to start receiving actual updates.`
  );

  return {
    subject: "Your first KompWatch digest — here's what competitor monitoring looks like",
    html,
    text,
  };
}
