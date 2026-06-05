import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ExportDigestButton } from "@/components/dashboard/export-digest-button";
import { SeverityFilter } from "@/components/dashboard/severity-filter";

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

const SEVERITY_COLORS: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-600",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  CRITICAL: "bg-red-100 text-red-700",
};

const VALID_SEVERITIES = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
type Severity = (typeof VALID_SEVERITIES)[number];

function parseSeverities(raw: string | string[] | undefined): Severity[] {
  if (!raw) return [];
  const values = Array.isArray(raw) ? raw : [raw];
  const out: Severity[] = [];
  for (const v of values) {
    const up = v.toUpperCase();
    if ((VALID_SEVERITIES as readonly string[]).includes(up) && !out.includes(up as Severity)) {
      out.push(up as Severity);
    }
  }
  return out;
}

export default async function DigestsPage({
  searchParams,
}: {
  searchParams: Promise<{ severity?: string | string[] }>;
}) {
  const user = await requireAuth();
  const params = await searchParams;
  const activeSeverities = parseSeverities(params.severity);
  const hasFilter = activeSeverities.length > 0;

  // When filtering, only return digests that contain at least one matching change,
  // and only preview matching changes. Counts reflect the filtered set so the
  // 'signal not noise' claim stays honest.
  const severityWhere = hasFilter ? { severity: { in: activeSeverities } } : undefined;

  const digests = await db.digest.findMany({
    where: {
      userId: user.id,
      ...(hasFilter ? { changes: { some: { severity: { in: activeSeverities } } } } : {}),
    },
    include: {
      _count: { select: { changes: { where: severityWhere } } },
      changes: {
        where: severityWhere,
        take: 5,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          summary: true,
          severity: true,
          changeType: true,
          competitor: { select: { name: true } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: 30,
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Digests</h1>
        <p className="mt-1 text-sm text-gray-500">
          Your competitor change digests. Each digest summarizes changes detected since the previous one.
        </p>
      </div>

      <div className="mb-4">
        <SeverityFilter activeSeverities={activeSeverities} />
      </div>

      {digests.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-12 text-center">
          <svg className="mx-auto h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
          </svg>
          <p className="mt-3 text-sm font-medium text-gray-900">
            {hasFilter ? "No digests match this filter" : "No digests yet"}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {hasFilter ? (
              <>Try clearing the severity filter to see all digests.</>
            ) : (
              <>
                Digests are generated automatically based on your plan. Check your{" "}
                <a href="/settings" className="text-brand-600 hover:underline">notification settings</a>.
              </>
            )}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {digests.map((digest) => (
            <div key={digest.id} className="rounded-lg border border-gray-200 bg-white px-5 py-4">
              <div className="flex items-start justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold text-gray-900">{digest.subject}</h3>
                    <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
                      {digest.period}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <ExportDigestButton digestId={digest.id} format="csv" />
                    <ExportDigestButton digestId={digest.id} format="pdf" />
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                    <span>
                      {digest._count.changes} {hasFilter ? "matching " : ""}change
                      {digest._count.changes === 1 ? "" : "s"}
                    </span>
                    <span>&middot;</span>
                    <span>
                      {digest.sentAt
                        ? `Sent ${timeAgo(digest.sentAt)}`
                        : "Not sent"}
                    </span>
                    <span>&middot;</span>
                    <span>{digest.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Preview of included changes */}
              {digest.changes.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {digest.changes.map((change) => (
                    <div key={change.id} className="flex items-center gap-2 text-xs">
                      <span
                        className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                          SEVERITY_COLORS[change.severity] || SEVERITY_COLORS.LOW
                        }`}
                      >
                        {change.severity}
                      </span>
                      <span className="font-medium text-gray-600">{change.competitor.name}</span>
                      <span className="truncate text-gray-500">{change.summary}</span>
                    </div>
                  ))}
                  {digest._count.changes > 5 && (
                    <p className="text-xs text-gray-400">
                      +{digest._count.changes - 5} more change{digest._count.changes - 5 === 1 ? "" : "s"}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
