import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  const user = await requireAuth();

  const competitorCount = await db.competitor.count({
    where: { userId: user.id },
  });

  const recentChanges = await db.change.findMany({
    where: { competitor: { userId: user.id } },
    include: { competitor: true },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back{user.name ? `, ${user.name}` : ""}. You&apos;re on the{" "}
          <span className="font-medium text-gray-700">{user.plan}</span> plan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Competitors tracked</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">{competitorCount}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Changes detected</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">{recentChanges.length}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm text-gray-500">Plan</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">{user.plan}</p>
          {user.plan === "FREE" && (
            <a
              href="/pricing"
              className="mt-2 inline-block text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              Upgrade &rarr;
            </a>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent changes</h2>
        {recentChanges.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
            <p className="text-sm text-gray-500">
              No changes detected yet.{" "}
              <a href="/competitors" className="text-brand-600 hover:underline">
                Add a competitor
              </a>{" "}
              to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {recentChanges.map((change) => (
              <div
                key={change.id}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-gray-900">
                      {change.competitor.name}
                    </span>
                    <span className="ml-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      {change.changeType}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {change.createdAt.toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{change.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
