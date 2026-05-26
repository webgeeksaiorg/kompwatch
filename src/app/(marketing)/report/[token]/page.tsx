import { notFound } from "next/navigation";
import { verifyShareToken, generateStakeholderReport } from "@/lib/roi";
import { db } from "@/lib/db";
import { StakeholderReportContent } from "@/components/dashboard/stakeholder-report-content";

export default async function SharedReportPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const verified = verifyShareToken(decodeURIComponent(token));
  if (!verified) notFound();

  const user = await db.user.findUnique({
    where: { id: verified.userId },
    select: { id: true, name: true },
  });
  if (!user) notFound();

  const report = await generateStakeholderReport(user.id, verified.period);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
      <div className="mb-6 flex items-center justify-between">
        <a href="/" className="text-sm font-bold text-gray-900">
          KompWatch
        </a>
        <a
          href="/pricing"
          className="text-xs font-medium text-brand-600 hover:text-brand-700"
        >
          Start monitoring &rarr;
        </a>
      </div>
      <StakeholderReportContent report={report} orgName={user.name ?? undefined} />
    </div>
  );
}
