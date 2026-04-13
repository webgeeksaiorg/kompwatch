import { notFound } from "next/navigation";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";

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
};

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

export default async function CompetitorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await requireAuth();

  const competitor = await db.competitor.findUnique({
    where: { id },
    include: {
      _count: { select: { snapshots: true, changes: true } },
      changes: {
        orderBy: { createdAt: "desc" },
        take: 50,
        select: {
          id: true,
          changeType: true,
          severity: true,
          summary: true,
          details: true,
          pageUrl: true,
          createdAt: true,
        },
      },
    },
  });

  if (!competitor || competitor.userId !== user.id) {
    notFound();
  }

  const trackingFlags = [
    { key: "trackPricing" as const, label: "Pricing" },
    { key: "trackFeatures" as const, label: "Features" },
    { key: "trackBlog" as const, label: "Blog" },
    { key: "trackJobs" as const, label: "Jobs" },
    { key: "trackTech" as const, label: "Tech" },
  ];

  return (
    <div>
      {/* Back link */}
      <a
        href="/competitors"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to competitors
      </a>

      {/* Header */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-white px-6 py-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-gray-900">{competitor.name}</h1>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                  competitor.isActive
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    competitor.isActive ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
                {competitor.isActive ? "Active" : "Paused"}
              </span>
            </div>
            <a
              href={competitor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-sm text-brand-600 hover:underline"
            >
              {competitor.url} &rarr;
            </a>
          </div>

          <div className="flex gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">{competitor._count.snapshots}</p>
              <p className="text-xs text-gray-500">Snapshots</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{competitor._count.changes}</p>
              <p className="text-xs text-gray-500">Changes</p>
            </div>
          </div>
        </div>

        {/* Tracking flags + metadata */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {trackingFlags.map(({ key, label }) => (
              <span
                key={key}
                className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  competitor[key]
                    ? "bg-brand-50 text-brand-700"
                    : "bg-gray-50 text-gray-400 line-through"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            Tracking since {competitor.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Change history */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Change history
          {competitor.changes.length > 0 && (
            <span className="ml-2 text-sm font-normal text-gray-400">
              ({competitor._count.changes} total)
            </span>
          )}
        </h2>

        {competitor.changes.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
            <p className="text-sm text-gray-500">
              No changes detected yet. We&apos;ll start tracking once the next snapshot runs.
            </p>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200" />

            <div className="space-y-4">
              {competitor.changes.map((change) => (
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

                  <div className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
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
                      </div>
                      <span className="text-xs text-gray-400">{timeAgo(change.createdAt)}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-900">{change.summary}</p>
                    {change.details && (
                      <p className="mt-1 text-xs text-gray-500 line-clamp-3">{change.details}</p>
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
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
