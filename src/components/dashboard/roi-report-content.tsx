import type { RoiReport } from "@/lib/roi";

const SEVERITY_COLORS: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-600",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  CRITICAL: "bg-red-100 text-red-700",
};

const SEVERITY_BAR_COLORS: Record<string, string> = {
  LOW: "bg-gray-300",
  MEDIUM: "bg-blue-400",
  HIGH: "bg-orange-400",
  CRITICAL: "bg-red-500",
};

const TYPE_LABELS: Record<string, string> = {
  PRICING: "Pricing",
  FEATURE: "Feature",
  BLOG: "Blog",
  JOB: "Jobs",
  TECH: "Tech",
  GENERAL: "General",
  COMMUNITY: "Community",
};

export function RoiReportContent({
  report,
  orgName,
}: {
  report: RoiReport;
  orgName?: string;
}) {
  const maxByCompetitor = Math.max(
    ...report.changes.byCompetitor.map((c) => c.count),
    1
  );
  const maxByType = Math.max(
    ...Object.values(report.changes.byType),
    1
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Competitive Intelligence ROI Report
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {orgName ? `${orgName} · ` : ""}
          {report.period.label}
        </p>
      </div>

      {/* Value highlight */}
      <div className="rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6">
        <p className="text-sm font-medium text-brand-700">Estimated value delivered</p>
        <p className="mt-1 text-4xl font-bold text-brand-900">
          ${report.estimatedValue.dollarValue.toLocaleString()}
        </p>
        <p className="mt-2 text-sm text-brand-600">
          {report.estimatedValue.hoursReplaced} hours of manual monitoring replaced
        </p>
        <p className="mt-1 text-xs text-gray-500">
          {report.estimatedValue.description}
        </p>
      </div>

      {/* Key metrics grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500">Changes detected</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {report.changes.total}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500">High-impact alerts</p>
          <p className="mt-1 text-2xl font-bold text-orange-600">
            {report.changes.highImpact}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500">Competitors tracked</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {report.competitors.active}
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-xs font-medium text-gray-500">Digests delivered</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {report.digests.sent}
          </p>
        </div>
      </div>

      {/* Severity breakdown */}
      <div className="rounded-lg border border-gray-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-gray-900">Changes by severity</h2>
        <div className="mt-4 space-y-3">
          {(["CRITICAL", "HIGH", "MEDIUM", "LOW"] as const).map((sev) => {
            const count = report.changes.bySeverity[sev];
            const pct = report.changes.total
              ? Math.round((count / report.changes.total) * 100)
              : 0;
            return (
              <div key={sev} className="flex items-center gap-3">
                <span
                  className={`inline-flex w-16 justify-center rounded-full px-2 py-0.5 text-[10px] font-medium ${SEVERITY_COLORS[sev]}`}
                >
                  {sev}
                </span>
                <div className="flex-1">
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div
                      className={`h-2 rounded-full ${SEVERITY_BAR_COLORS[sev]}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <span className="w-10 text-right text-xs text-gray-600">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two-column: by type + by competitor */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* By change type */}
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-gray-900">Changes by type</h2>
          <div className="mt-4 space-y-2.5">
            {Object.entries(report.changes.byType)
              .sort(([, a], [, b]) => b - a)
              .map(([type, count]) => (
                <div key={type} className="flex items-center gap-3">
                  <span className="w-16 text-xs text-gray-600">
                    {TYPE_LABELS[type] ?? type}
                  </span>
                  <div className="flex-1">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-brand-400"
                        style={{
                          width: `${Math.round((count / maxByType) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-xs text-gray-600">
                    {count}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* By competitor */}
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-gray-900">
            Changes by competitor
          </h2>
          {report.changes.byCompetitor.length === 0 ? (
            <p className="mt-4 text-xs text-gray-400">No changes this period.</p>
          ) : (
            <div className="mt-4 space-y-2.5">
              {report.changes.byCompetitor.slice(0, 8).map((comp) => (
                <div key={comp.url} className="flex items-center gap-3">
                  <span className="w-24 truncate text-xs font-medium text-gray-700">
                    {comp.name}
                  </span>
                  <div className="flex-1">
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-brand-500"
                        style={{
                          width: `${Math.round((comp.count / maxByCompetitor) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-xs text-gray-600">
                    {comp.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 pt-4 text-center">
        <p className="text-xs text-gray-400">
          Generated by KompWatch &middot; AI-powered competitor monitoring
        </p>
      </div>
    </div>
  );
}
