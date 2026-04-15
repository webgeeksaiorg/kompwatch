import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { PLANS } from "@/lib/stripe";
import { AddCompetitorForm } from "./add-form";
import { BulkImportForm } from "./bulk-import-form";
import { CompetitorRow } from "./competitor-row";

export default async function CompetitorsPage() {
  const user = await requireAuth();

  const competitors = await db.competitor.findMany({
    where: { userId: user.id },
    include: {
      _count: { select: { snapshots: true, changes: true } },
      changes: {
        orderBy: { createdAt: "desc" },
        take: 1,
        select: { createdAt: true, summary: true, changeType: true, severity: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const limit = PLANS[user.plan].competitors;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Competitors</h1>
          <p className="mt-1 text-sm text-gray-500">
            Tracking {competitors.length} of {limit} competitors ({user.plan} plan)
          </p>
        </div>
      </div>

      <AddCompetitorForm atLimit={competitors.length >= limit} plan={user.plan} />
      <BulkImportForm
        atLimit={competitors.length >= limit}
        remaining={limit - competitors.length}
        plan={user.plan}
      />

      {competitors.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-gray-300 bg-white p-12 text-center">
          <svg className="mx-auto h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <p className="mt-3 text-sm font-medium text-gray-900">No competitors yet</p>
          <p className="mt-1 text-sm text-gray-500">Add a competitor URL above to start monitoring.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {competitors.map((c) => (
            <CompetitorRow key={c.id} competitor={c} />
          ))}
        </div>
      )}
    </div>
  );
}
