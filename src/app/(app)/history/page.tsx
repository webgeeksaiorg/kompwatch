import { Suspense } from "react";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { splitChangeDetails } from "@/lib/change-context";
import { signalLabel } from "@/lib/signal-score";
import { severitiesAtOrAbove } from "@/lib/severity";
import { PeriodSelector } from "@/components/dashboard/period-selector";
import { CompetitorFilter } from "@/components/dashboard/competitor-filter";
import { ZoneFilter } from "@/components/dashboard/zone-filter";
import { ChangeTypeFilter } from "@/components/dashboard/change-type-filter";
import { ExportChangesButton } from "@/components/dashboard/export-changes-button";
import { groupByWeek } from "@/lib/group-by-week";
import type { ContentZone, ChangeType, Severity } from "@prisma/client";

const SEVERITY_COLORS: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-600",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  CRITICAL: "bg-red-100 text-red-700",
};

const CHANGE_TYPE_LABELS: Record<string, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Blog",
  JOB: "Jobs",
  TECH: "Tech",
  GENERAL: "General",
  COMMUNITY: "Community",
};

const ZONE_LABELS: Record<string, { text: string; className: string }> = {
  POSITIONING: { text: "Positioning", className: "bg-purple-50 text-purple-700" },
  MONETIZATION: { text: "Monetization", className: "bg-emerald-50 text-emerald-700" },
  PRODUCT: { text: "Product", className: "bg-sky-50 text-sky-700" },
  MARKETING: { text: "Marketing", className: "bg-pink-50 text-pink-700" },
  TALENT: { text: "Talent", className: "bg-amber-50 text-amber-700" },
  LEGAL: { text: "Legal", className: "bg-slate-100 text-slate-600" },
  OPERATIONS: { text: "Ops", className: "bg-teal-50 text-teal-700" },
};

const VALID_PERIODS = new Set(["7d", "30d", "90d"]);

const VALID_ZONES = new Set<string>([
  "POSITIONING", "MONETIZATION", "PRODUCT", "MARKETING",
  "TALENT", "LEGAL", "OPERATIONS",
]);

const VALID_CHANGE_TYPES = new Set<string>([
  "PRICING", "FEATURE", "BLOG", "JOB", "TECH", "GENERAL", "COMMUNITY",
]);

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

function resolvePeriodDays(period: string): number {
  switch (period) {
    case "7d": return 7;
    case "30d": return 30;
    case "90d": return 90;
    default: return 90;
  }
}

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const user = await requireAuth();
  const params = await searchParams;

  // Parse period
  const rawPeriod = typeof params.period === "string" ? params.period : "90d";
  const period = VALID_PERIODS.has(rawPeriod) ? rawPeriod : "90d";
  const days = resolvePeriodDays(period);

  // Parse zone filter
  const rawZones = params.zone;
  const zoneParam = Array.isArray(rawZones) ? rawZones : rawZones ? [rawZones] : [];
  const activeZones = zoneParam.filter((z) => VALID_ZONES.has(z));

  // Parse change type filter
  const rawChangeTypes = params.changeType;
  const changeTypeParam = Array.isArray(rawChangeTypes) ? rawChangeTypes : rawChangeTypes ? [rawChangeTypes] : [];
  const activeChangeTypes = changeTypeParam.filter((t) => VALID_CHANGE_TYPES.has(t));

  // Parse competitor filter
  const rawCompetitors = params.competitor;
  const competitorParam = Array.isArray(rawCompetitors) ? rawCompetitors : rawCompetitors ? [rawCompetitors] : [];

  const allowedSeverities = severitiesAtOrAbove(user.dashboardMinSeverity);

  // Time range
  const since = new Date();
  since.setDate(since.getDate() - days);

  // Previous period for trend comparison
  const prevStart = new Date(since);
  prevStart.setDate(prevStart.getDate() - days);

  const [competitors, changes, previousCount] = await Promise.all([
    db.competitor.findMany({
      where: { userId: user.id },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
    db.change.findMany({
      where: {
        competitor: { userId: user.id },
        createdAt: { gte: since },
        severity: { in: allowedSeverities },
        ...(activeZones.length > 0 && {
          contentZone: { in: activeZones as ContentZone[] },
        }),
        ...(activeChangeTypes.length > 0 && {
          changeType: { in: activeChangeTypes as ChangeType[] },
        }),
        ...(competitorParam.length > 0 && {
          competitorId: { in: competitorParam },
        }),
      },
      include: { competitor: { select: { name: true, url: true } } },
      orderBy: { createdAt: "desc" },
    }),
    db.change.count({
      where: {
        competitor: { userId: user.id },
        createdAt: { gte: prevStart, lt: since },
      },
    }),
  ]);

  // Filter active competitor IDs (only show valid ones)
  const validCompetitorIds = new Set(competitors.map((c) => c.id));
  const activeCompetitorIds = competitorParam.filter((id) => validCompetitorIds.has(id));

  // Summary stats
  const severityCounts: Record<string, number> = { LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0 };
  for (const c of changes) severityCounts[c.severity]++;

  const highImpact = severityCounts.HIGH + severityCounts.CRITICAL;
  const trendPercent =
    previousCount > 0
      ? Math.round(((changes.length - previousCount) / previousCount) * 100)
      : null;

  // Group by week
  const weekGroups = groupByWeek(changes);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Change History</h1>
          <p className="mt-1 text-sm text-gray-500">
            All competitor changes over the last {days} days, grouped by week.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {changes.length > 0 && (
            <>
              <ExportChangesButton format="csv" />
              <ExportChangesButton format="json" />
            </>
          )}
          <Suspense>
            <PeriodSelector activePeriod={period} />
          </Suspense>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-6">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs text-gray-500">Total changes</p>
          <p className="mt-1 text-xl font-bold text-gray-900">{changes.length}</p>
          {trendPercent !== null && (
            <p className={`mt-1 text-xs font-medium ${trendPercent >= 0 ? "text-orange-600" : "text-green-600"}`}>
              {trendPercent >= 0 ? "+" : ""}{trendPercent}% vs prev period
            </p>
          )}
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs text-gray-500">High impact</p>
          <p className="mt-1 text-xl font-bold text-gray-900">{highImpact}</p>
          <p className="mt-1 text-xs text-gray-400">high + critical</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs text-gray-500">Weeks covered</p>
          <p className="mt-1 text-xl font-bold text-gray-900">{weekGroups.length}</p>
          <p className="mt-1 text-xs text-gray-400">with activity</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs text-gray-500">Avg per week</p>
          <p className="mt-1 text-xl font-bold text-gray-900">
            {weekGroups.length > 0 ? Math.round(changes.length / Math.ceil(days / 7)) : 0}
          </p>
          <p className="mt-1 text-xs text-gray-400">changes / week</p>
        </div>
      </div>

      {/* Severity breakdown bar */}
      {changes.length > 0 && (
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
          <p className="mb-2 text-xs font-medium text-gray-500">Severity breakdown</p>
          <div className="flex h-2 overflow-hidden rounded-full bg-gray-100">
            {(["CRITICAL", "HIGH", "MEDIUM", "LOW"] as const).map((sev) => {
              const count = severityCounts[sev];
              if (count === 0) return null;
              const pct = (count / changes.length) * 100;
              const colors: Record<string, string> = {
                CRITICAL: "bg-red-500",
                HIGH: "bg-orange-400",
                MEDIUM: "bg-blue-400",
                LOW: "bg-gray-300",
              };
              return (
                <div
                  key={sev}
                  className={`${colors[sev]} transition-all`}
                  style={{ width: `${pct}%` }}
                  title={`${sev}: ${count} (${Math.round(pct)}%)`}
                />
              );
            })}
          </div>
          <div className="mt-2 flex flex-wrap gap-3 text-[11px]">
            {(["CRITICAL", "HIGH", "MEDIUM", "LOW"] as const).map((sev) => (
              <span key={sev} className="flex items-center gap-1 text-gray-500">
                <span className={`inline-block h-2 w-2 rounded-full ${
                  sev === "CRITICAL" ? "bg-red-500" : sev === "HIGH" ? "bg-orange-400" : sev === "MEDIUM" ? "bg-blue-400" : "bg-gray-300"
                }`} />
                {sev}: {severityCounts[sev]}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 space-y-2">
        <Suspense>
          <CompetitorFilter competitors={competitors} activeIds={activeCompetitorIds} />
        </Suspense>
        <Suspense>
          <ZoneFilter activeZones={activeZones} />
        </Suspense>
        <Suspense>
          <ChangeTypeFilter activeTypes={activeChangeTypes} />
        </Suspense>
      </div>

      {/* Grouped-by-week timeline */}
      {changes.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
          <p className="text-sm text-gray-500">
            No changes detected in this period.
            {activeZones.length > 0 || activeChangeTypes.length > 0 || activeCompetitorIds.length > 0
              ? " Try adjusting your filters."
              : ""}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {weekGroups.map((week) => {
            // Per-week severity counts
            const weekSeverity: Record<string, number> = { LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0 };
            for (const c of week.items) weekSeverity[(c as { severity: string }).severity]++;
            const weekHigh = weekSeverity.HIGH + weekSeverity.CRITICAL;

            return (
              <div key={week.label}>
                {/* Week header */}
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-sm font-semibold text-gray-900">{week.label}</h3>
                  <span className="text-xs text-gray-400">
                    {week.items.length} change{week.items.length !== 1 ? "s" : ""}
                  </span>
                  {weekHigh > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-orange-700">
                      {weekHigh} high-impact
                    </span>
                  )}
                </div>

                {/* Timeline for this week */}
                <div className="relative">
                  <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200" />

                  <div className="space-y-3">
                    {(week.items as Array<{
                      id: string;
                      severity: Severity;
                      changeType: ChangeType;
                      contentZone: ContentZone;
                      signalScore: number;
                      summary: string;
                      details: string | null;
                      pageUrl: string | null;
                      createdAt: Date;
                      competitor: { name: string; url: string };
                    }>).map((change) => {
                      const { implication } = splitChangeDetails(change.details);
                      const signal = signalLabel(change.signalScore);
                      return (
                        <div key={change.id} className="relative flex gap-4 pl-9">
                          <div
                            className={`absolute left-[11px] top-2 h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                              change.severity === "CRITICAL"
                                ? "bg-red-500"
                                : change.severity === "HIGH"
                                  ? "bg-orange-500"
                                  : change.severity === "MEDIUM"
                                    ? "bg-blue-500"
                                    : "bg-gray-400"
                            }`}
                          />

                          <div className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3">
                            <div className="flex flex-wrap items-center justify-between gap-1">
                              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                <span className="text-sm font-medium text-gray-900">
                                  {change.competitor.name}
                                </span>
                                <span
                                  className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                    SEVERITY_COLORS[change.severity] || SEVERITY_COLORS.LOW
                                  }`}
                                >
                                  {CHANGE_TYPE_LABELS[change.changeType] || change.changeType}
                                </span>
                                <span
                                  className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                                    SEVERITY_COLORS[change.severity] || SEVERITY_COLORS.LOW
                                  }`}
                                >
                                  {change.severity}
                                </span>
                                {signal && (
                                  <span
                                    className={`inline-flex rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${signal.className}`}
                                    title={`Signal score: ${Math.round(change.signalScore * 100)}%`}
                                  >
                                    {signal.text}
                                  </span>
                                )}
                                {ZONE_LABELS[change.contentZone] && (
                                  <span
                                    className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${ZONE_LABELS[change.contentZone].className}`}
                                  >
                                    {ZONE_LABELS[change.contentZone].text}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-gray-400">{timeAgo(change.createdAt)}</span>
                            </div>
                            <p className="mt-1 text-sm text-gray-600">{change.summary}</p>
                            {implication && (
                              <div className="mt-2 rounded-md border-l-2 border-brand-300 bg-brand-50/60 px-2.5 py-1.5">
                                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                                  Why this matters
                                </p>
                                <p className="mt-0.5 text-xs text-gray-700">{implication}</p>
                              </div>
                            )}
                            {change.pageUrl && (
                              <a
                                href={change.pageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-block text-xs text-brand-600 hover:underline"
                              >
                                View page &rarr;
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
