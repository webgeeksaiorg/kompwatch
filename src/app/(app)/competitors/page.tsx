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
        <div className="mt-6 rounded-xl border border-dashed border-brand-200 bg-brand-50/30 p-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
            <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <p className="mt-4 text-sm font-semibold text-gray-900">No competitors yet</p>
          <p className="mt-1 text-sm text-gray-500 max-w-sm mx-auto">
            Use the form above to add a competitor URL. We&apos;ll start tracking their pricing, features, blog posts, and job listings automatically.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
              Auto-monitored
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              AI-powered digests
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Delivered to inbox
            </span>
          </div>
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
