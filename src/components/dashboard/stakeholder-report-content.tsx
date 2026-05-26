import type { StakeholderReport } from "@/lib/roi";
import { RoiReportContent } from "./roi-report-content";

const ZONE_LABELS: Record<string, { text: string; className: string }> = {
  POSITIONING: { text: "Positioning", className: "bg-purple-50 text-purple-700" },
  MONETIZATION: { text: "Monetization", className: "bg-emerald-50 text-emerald-700" },
  PRODUCT: { text: "Product", className: "bg-sky-50 text-sky-700" },
  MARKETING: { text: "Marketing", className: "bg-pink-50 text-pink-700" },
  TALENT: { text: "Talent", className: "bg-amber-50 text-amber-700" },
  LEGAL: { text: "Legal", className: "bg-slate-100 text-slate-600" },
  OPERATIONS: { text: "Ops", className: "bg-teal-50 text-teal-700" },
  UNKNOWN: { text: "Other", className: "bg-gray-50 text-gray-500" },
};

const SEVERITY_DOT: Record<string, string> = {
  CRITICAL: "bg-red-500",
  HIGH: "bg-orange-400",
  MEDIUM: "bg-blue-400",
  LOW: "bg-gray-300",
};

function formatDate(d: Date): string {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function StakeholderReportContent({
  report,
  orgName,
}: {
  report: StakeholderReport;
  orgName?: string;
}) {
  const maxByZone = Math.max(
    ...Object.values(report.byZone),
    1,
  );

  // Filter out UNKNOWN with 0 count for cleaner display
  const zoneEntries = Object.entries(report.byZone)
    .filter(([zone, count]) => zone !== "UNKNOWN" || count > 0)
    .sort(([, a], [, b]) => b - a);

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

      {/* Executive summary */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-sm font-semibold text-gray-900">Executive summary</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          KompWatch detected{" "}
          <span className="font-semibold">{report.changes.total} competitor changes</span>{" "}
          across{" "}
          <span className="font-semibold">{report.competitors.active} tracked competitors</span>{" "}
          during {report.period.label}.{" "}
          {report.changes.highImpact > 0 && (
            <>
              Of these,{" "}
              <span className="font-semibold text-orange-700">
                {report.changes.highImpact} were high-impact
              </span>{" "}
              alerts requiring attention.{" "}
            </>
          )}
          {report.trend.changePercent !== null ? (
            report.trend.changePercent > 0 ? (
              <>
                Competitor activity is{" "}
                <span className="font-semibold">up {report.trend.changePercent}%</span>{" "}
                compared to the prior period.
              </>
            ) : report.trend.changePercent < 0 ? (
              <>
                Competitor activity is{" "}
                <span className="font-semibold">down {Math.abs(report.trend.changePercent)}%</span>{" "}
                compared to the prior period.
              </>
            ) : (
              <>Competitor activity is flat compared to the prior period.</>
            )
          ) : (
            <>This is the first reporting period with data.</>
          )}
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
          {report.trend.changePercent !== null && (
            <p className={`mt-1 text-xs font-medium ${report.trend.changePercent >= 0 ? "text-orange-600" : "text-green-600"}`}>
              {report.trend.changePercent >= 0 ? "+" : ""}
              {report.trend.changePercent}% vs prior period
            </p>
          )}
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

      {/* Strategic highlights */}
      {report.highlights.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-gray-900">
            Strategic highlights
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Top high-impact changes detected this period
          </p>
          <div className="mt-4 divide-y divide-gray-100">
            {report.highlights.map((h, i) => (
              <div key={i} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start gap-2">
                  <span
                    className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${SEVERITY_DOT[h.severity]}`}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        {h.competitorName}
                      </span>
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${ZONE_LABELS[h.contentZone]?.className ?? "bg-gray-50 text-gray-500"}`}
                      >
                        {ZONE_LABELS[h.contentZone]?.text ?? h.contentZone}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {formatDate(h.detectedAt)}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-700">{h.summary}</p>
                    {h.implication && (
                      <p className="mt-1 text-xs italic text-gray-500">
                        {h.implication}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content zone breakdown */}
      <div className="rounded-lg border border-gray-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-gray-900">
          Changes by strategic area
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          Where competitors are investing their effort
        </p>
        <div className="mt-4 space-y-2.5">
          {zoneEntries.map(([zone, count]) => (
            <div key={zone} className="flex items-center gap-3">
              <span
                className={`inline-flex w-24 justify-center rounded-full px-2 py-0.5 text-[10px] font-medium ${ZONE_LABELS[zone]?.className ?? "bg-gray-50 text-gray-500"}`}
              >
                {ZONE_LABELS[zone]?.text ?? zone}
              </span>
              <div className="flex-1">
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-brand-400"
                    style={{
                      width: `${Math.round((count / maxByZone) * 100)}%`,
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

      {/* Severity breakdown — reuse from base component pattern */}
      <RoiReportContent report={report} orgName={orgName} hideHeader hideValue hideMetrics />
    </div>
  );
}
