import { Severity } from "@prisma/client";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { PLANS } from "@/lib/stripe";
import { OnboardingChecklist } from "./onboarding-checklist";
import { ExportChangesButton } from "@/components/dashboard/export-changes-button";

const SEVERITY_ORDER: Severity[] = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

function severitiesAtOrAbove(min: Severity): Severity[] {
  const minIndex = SEVERITY_ORDER.indexOf(min);
  return SEVERITY_ORDER.slice(minIndex === -1 ? 0 : minIndex);
}

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

export default async function DashboardPage() {
  const user = await requireAuth();

  const allowedSeverities = severitiesAtOrAbove(user.dashboardMinSeverity);

  const [competitors, recentChanges, totalChanges] = await Promise.all([
    db.competitor.findMany({
      where: { userId: user.id },
      include: {
        _count: { select: { changes: true } },
        changes: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: { createdAt: true, changeType: true, severity: true },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.change.findMany({
      where: {
        competitor: { userId: user.id },
        severity: { in: allowedSeverities },
      },
      include: { competitor: { select: { name: true, url: true } } },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    db.change.count({
      where: { competitor: { userId: user.id } },
    }),
  ]);

  const limit = PLANS[user.plan].competitors;
  const activeCount = competitors.filter((c) => c.isActive).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back{user.name ? `, ${user.name}` : ""}. Here&apos;s what&apos;s happening with your competitors.
        </p>
      </div>

      {/* Onboarding checklist */}
      <OnboardingChecklist
        hasCompetitor={competitors.length > 0}
        hasCustomSeverity={user.digestMinSeverity !== "LOW"}
        hasWebhook={!!user.webhookUrl}
      />

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Competitors</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {competitors.length}
            <span className="text-sm font-normal text-gray-400">/{limit}</span>
          </p>
          <p className="mt-1 text-xs text-gray-400">{activeCount} active</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Total changes</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">{totalChanges}</p>
          <p className="mt-1 text-xs text-gray-400">all time</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Plan</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">{user.plan}</p>
          {user.plan === "FREE" && (
            <a
              href="/pricing"
              className="mt-1 inline-block text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              Upgrade &rarr;
            </a>
          )}
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Digest frequency</p>
          <p className="mt-1 text-2xl font-bold text-gray-900 capitalize">
            {PLANS[user.plan].digest}
          </p>
        </div>
      </div>

      {/* Competitors list */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Your competitors</h2>
          <a
            href="/competitors"
            className="text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            Manage &rarr;
          </a>
        </div>

        {competitors.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
            <p className="text-sm text-gray-500">
              No competitors tracked yet.{" "}
              <a href="/competitors" className="text-brand-600 hover:underline">
                Add your first competitor
              </a>{" "}
              to get started.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">Competitor</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-gray-500">Status</th>
                  <th className="px-4 py-2.5 text-right text-xs font-medium text-gray-500">Changes</th>
                  <th className="px-4 py-2.5 text-right text-xs font-medium text-gray-500">Last activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {competitors.map((c) => {
                  const lastChange = c.changes[0];
                  return (
                    <tr key={c.id} className="hover:bg-gray-50/50">
                      <td className="px-4 py-3">
                        <a href={`/competitors/${c.id}`} className="font-medium text-gray-900 hover:text-brand-600">{c.name}</a>
                        <div className="text-xs text-gray-400">
                          {c.url.replace(/^https?:\/\//, "")}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                            c.isActive
                              ? "bg-green-50 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              c.isActive ? "bg-green-500" : "bg-gray-400"
                            }`}
                          />
                          {c.isActive ? "Active" : "Paused"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">{c._count.changes}</td>
                      <td className="px-4 py-3 text-right">
                        {lastChange ? (
                          <span className="text-xs text-gray-500">
                            {timeAgo(lastChange.createdAt)}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-300">No data yet</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Changes timeline */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent changes</h2>
          {recentChanges.length > 0 && (
            <div className="flex items-center gap-2">
              <ExportChangesButton format="csv" />
              <ExportChangesButton format="json" />
            </div>
          )}
        </div>
        {recentChanges.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
            <p className="text-sm text-gray-500">
              No changes detected yet. We&apos;ll start monitoring once your competitors are set up.
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200" />

            <div className="space-y-4">
              {recentChanges.map((change) => (
                <div key={change.id} className="relative flex gap-4 pl-9">
                  {/* Timeline dot */}
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
                      </div>
                      <span className="text-xs text-gray-400">{timeAgo(change.createdAt)}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{change.summary}</p>
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
