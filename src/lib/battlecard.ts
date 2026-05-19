import type { ChangeType, Severity } from "@prisma/client";

/**
 * Battlecard generator — builds a one-page HTML sales battlecard
 * from a competitor's tracked changes and metadata.
 */

export interface BattlecardChange {
  changeType: ChangeType;
  severity: Severity;
  summary: string;
  details: string | null;
  pageUrl: string | null;
  createdAt: Date;
}

export interface BattlecardInput {
  competitor: {
    name: string;
    url: string;
    trackPricing: boolean;
    trackFeatures: boolean;
    trackBlog: boolean;
    trackJobs: boolean;
    trackTech: boolean;
    createdAt: Date;
  };
  changes: BattlecardChange[];
  generatedAt: Date;
}

const SEVERITY_RANK: Record<Severity, number> = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

const CHANGE_TYPE_LABELS: Record<ChangeType, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Blog",
  JOB: "Jobs",
  TECH: "Tech",
  GENERAL: "General",
  COMMUNITY: "Community",
};

const SEVERITY_COLORS: Record<Severity, string> = {
  CRITICAL: "#dc2626",
  HIGH: "#ea580c",
  MEDIUM: "#2563eb",
  LOW: "#6b7280",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Group changes by type and sort by severity within each group */
function groupByType(changes: BattlecardChange[]): Map<ChangeType, BattlecardChange[]> {
  const groups = new Map<ChangeType, BattlecardChange[]>();
  for (const c of changes) {
    const list = groups.get(c.changeType) || [];
    list.push(c);
    groups.set(c.changeType, list);
  }
  // Sort within each group: highest severity first, then most recent
  for (const [, list] of groups) {
    list.sort(
      (a, b) =>
        SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity] ||
        b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  return groups;
}

/** Build the battlecard HTML document */
export function renderBattlecardHtml(input: BattlecardInput): string {
  const { competitor, changes, generatedAt } = input;

  // Separate high-impact changes for the "Key Intel" section
  const highImpact = changes
    .filter((c) => c.severity === "CRITICAL" || c.severity === "HIGH")
    .sort(
      (a, b) =>
        SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity] ||
        b.createdAt.getTime() - a.createdAt.getTime()
    )
    .slice(0, 5);

  const grouped = groupByType(changes);

  // Count by type for the overview
  const typeCounts = Array.from(grouped.entries())
    .map(([type, list]) => ({ type, count: list.length }))
    .sort((a, b) => b.count - a.count);

  const trackingAreas = [
    competitor.trackPricing && "Pricing",
    competitor.trackFeatures && "Features",
    competitor.trackBlog && "Blog",
    competitor.trackJobs && "Jobs",
    competitor.trackTech && "Tech",
  ].filter(Boolean);

  // Recent 90-day window
  const ninetyDaysAgo = new Date(generatedAt.getTime() - 90 * 24 * 60 * 60 * 1000);
  const recentChanges = changes.filter((c) => c.createdAt >= ninetyDaysAgo);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Battlecard: ${escapeHtml(competitor.name)} — KompWatch</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1a1a1a; line-height: 1.5; max-width: 900px; margin: 0 auto; padding: 32px 24px; }
  .header { border-bottom: 3px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px; }
  .header h1 { font-size: 24px; font-weight: 700; color: #111; }
  .header .subtitle { font-size: 13px; color: #6b7280; margin-top: 4px; }
  .header .meta { display: flex; gap: 24px; margin-top: 12px; font-size: 12px; color: #6b7280; }
  .section { margin-bottom: 28px; }
  .section-title { font-size: 16px; font-weight: 600; color: #111; margin-bottom: 12px; padding-bottom: 6px; border-bottom: 1px solid #e5e7eb; }
  .overview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; }
  .stat-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; text-align: center; }
  .stat-card .value { font-size: 28px; font-weight: 700; color: #111; }
  .stat-card .label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; }
  .intel-item { padding: 10px 12px; border-left: 3px solid; margin-bottom: 8px; background: #fafafa; border-radius: 0 6px 6px 0; }
  .intel-item .badge { display: inline-block; font-size: 10px; font-weight: 600; padding: 2px 6px; border-radius: 4px; color: #fff; margin-right: 6px; }
  .intel-item .type { display: inline-block; font-size: 10px; font-weight: 500; color: #6b7280; margin-right: 6px; }
  .intel-item .date { font-size: 11px; color: #9ca3af; float: right; }
  .intel-item .summary { font-size: 13px; margin-top: 4px; }
  .intel-item .details { font-size: 12px; color: #4b5563; margin-top: 4px; }
  .change-table { width: 100%; border-collapse: collapse; font-size: 12px; }
  .change-table th { text-align: left; padding: 8px 10px; background: #f3f4f6; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; }
  .change-table td { padding: 8px 10px; border-bottom: 1px solid #f3f4f6; vertical-align: top; }
  .change-table tr:hover { background: #fafafa; }
  .sev { display: inline-block; font-size: 10px; font-weight: 600; padding: 1px 5px; border-radius: 3px; color: #fff; }
  .sev-critical { background: #dc2626; } .sev-high { background: #ea580c; }
  .sev-medium { background: #2563eb; } .sev-low { background: #6b7280; }
  .tag { display: inline-block; font-size: 10px; padding: 2px 6px; border-radius: 4px; background: #e5e7eb; color: #374151; margin-right: 4px; }
  .footer { margin-top: 32px; padding-top: 12px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; }
  @media print { body { padding: 16px; } }
</style>
</head>
<body>

<div class="header">
  <h1>Competitive Battlecard: ${escapeHtml(competitor.name)}</h1>
  <div class="subtitle">${escapeHtml(competitor.url)}</div>
  <div class="meta">
    <span>Generated ${formatDate(generatedAt)}</span>
    <span>Tracking since ${formatDate(competitor.createdAt)}</span>
    <span>Monitoring: ${trackingAreas.join(", ")}</span>
  </div>
</div>

<!-- Overview -->
<div class="section">
  <div class="section-title">Overview</div>
  <div class="overview-grid">
    <div class="stat-card">
      <div class="value">${changes.length}</div>
      <div class="label">Total Changes</div>
    </div>
    <div class="stat-card">
      <div class="value">${recentChanges.length}</div>
      <div class="label">Last 90 Days</div>
    </div>
    <div class="stat-card">
      <div class="value">${changes.filter((c) => c.severity === "HIGH" || c.severity === "CRITICAL").length}</div>
      <div class="label">High-Impact</div>
    </div>
    ${typeCounts
      .slice(0, 3)
      .map(
        ({ type, count }) =>
          `<div class="stat-card"><div class="value">${count}</div><div class="label">${CHANGE_TYPE_LABELS[type]}</div></div>`
      )
      .join("\n    ")}
  </div>
</div>

<!-- Key Intel -->
${
  highImpact.length > 0
    ? `<div class="section">
  <div class="section-title">Key Intel (High &amp; Critical)</div>
  ${highImpact
    .map(
      (c) => `<div class="intel-item" style="border-left-color: ${SEVERITY_COLORS[c.severity]}">
    <span class="badge" style="background: ${SEVERITY_COLORS[c.severity]}">${c.severity}</span>
    <span class="type">${CHANGE_TYPE_LABELS[c.changeType]}</span>
    <span class="date">${formatDate(c.createdAt)}</span>
    <div class="summary">${escapeHtml(c.summary)}</div>
    ${c.details ? `<div class="details">${escapeHtml(c.details.slice(0, 300))}</div>` : ""}
  </div>`
    )
    .join("\n  ")}
</div>`
    : ""
}

<!-- Full Change Log -->
<div class="section">
  <div class="section-title">Change Log (Last 50)</div>
  ${
    changes.length === 0
      ? '<p style="font-size: 13px; color: #6b7280;">No changes detected yet.</p>'
      : `<table class="change-table">
    <thead>
      <tr>
        <th style="width: 80px">Date</th>
        <th style="width: 70px">Severity</th>
        <th style="width: 70px">Type</th>
        <th>Summary</th>
      </tr>
    </thead>
    <tbody>
      ${changes
        .slice(0, 50)
        .map(
          (c) =>
            `<tr>
        <td>${formatDate(c.createdAt)}</td>
        <td><span class="sev sev-${c.severity.toLowerCase()}">${c.severity}</span></td>
        <td>${CHANGE_TYPE_LABELS[c.changeType]}</td>
        <td>${escapeHtml(c.summary)}</td>
      </tr>`
        )
        .join("\n      ")}
    </tbody>
  </table>`
  }
</div>

<div class="footer">
  Generated by KompWatch &middot; ${formatDate(generatedAt)} &middot; kompwatch.com
</div>

</body>
</html>`;
}
