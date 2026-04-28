import { Change, Competitor, User } from "@prisma/client";

/** Group changes by competitor for digest rendering */
export interface DigestCompetitorGroup {
  competitor: Pick<Competitor, "name" | "url">;
  changes: Pick<Change, "changeType" | "summary" | "details" | "severity" | "createdAt">[];
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
      summary: change.summary,
      details: change.details,
      severity: change.severity,
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
};

/** Render digest as HTML email */
export function renderDigestHtml(
  user: Pick<User, "name" | "email">,
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
          (c) =>
            `<tr>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">${SEVERITY_EMOJI[c.severity] || "⚪"}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">
                <span style="background:#f0f0f0;border-radius:4px;padding:2px 8px;font-size:12px;">${CHANGE_TYPE_LABEL[c.changeType] || c.changeType}</span>
              </td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">
                <strong>${escapeHtml(c.summary)}</strong>
                ${c.details ? `<br/><span style="color:#666;font-size:13px;">${renderDetailsHtml(c.details)}</span>` : ""}
              </td>
            </tr>`
        )
        .join("");

      return `
        <div style="margin-bottom:24px;">
          <h3 style="margin:0 0 8px;color:#1a1a1a;">
            ${escapeHtml(group.competitor.name)}
            <span style="font-weight:normal;color:#666;font-size:13px;"> — ${escapeHtml(group.competitor.url)}</span>
          </h3>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${changeRows}
          </table>
        </div>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;">
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:#fff;border-radius:8px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <h1 style="margin:0 0 4px;font-size:20px;color:#111;">KompWatch ${period === "DAILY" ? "Daily" : "Weekly"} Digest</h1>
      <p style="margin:0 0 20px;color:#666;font-size:14px;">${greeting}, here's your ${periodLabel} competitor update.</p>

      <div style="background:#f0f7ff;border-radius:6px;padding:12px 16px;margin-bottom:20px;font-size:14px;">
        <strong>${totalChanges} change${totalChanges === 1 ? "" : "s"}</strong> detected across
        <strong>${groups.length} competitor${groups.length === 1 ? "" : "s"}</strong>
      </div>

      ${competitorSections}

      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
      <p style="margin:0;color:#999;font-size:12px;">
        You're receiving this because you have a KompWatch account (${escapeHtml(user.email)}).
        <a href="${process.env.NEXTAUTH_URL || "https://kompwatch.com"}/settings" style="color:#666;">Manage preferences</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

/** Render plain-text version of the digest */
export function renderDigestText(
  user: Pick<User, "name" | "email">,
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
          (c) =>
            `  ${SEVERITY_EMOJI[c.severity] || "-"} [${CHANGE_TYPE_LABEL[c.changeType] || c.changeType}] ${c.summary}${c.details ? `\n    ${c.details}` : ""}`
        )
        .join("\n");
      return `${group.competitor.name} (${group.competitor.url})\n${lines}`;
    })
    .join("\n\n");

  return `KompWatch ${period === "DAILY" ? "Daily" : "Weekly"} Digest

${greeting}, here's your ${periodLabel} competitor update.

${totalChanges} change(s) across ${groups.length} competitor(s)

${sections}

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

const IMPLICATION_PREFIX = /(^|\n)\s*(What this means for you:\s*)/i;

function renderDetailsHtml(details: string): string {
  const escaped = escapeHtml(details);
  return escaped.replace(
    IMPLICATION_PREFIX,
    (_match, lead) =>
      `${lead}<br/><strong style="color:#1a1a1a;">What this means for you:</strong> `
  );
}
