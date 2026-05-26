import { requireAuth } from "@/lib/auth";
import { generateStakeholderReport, type ReportPeriod } from "@/lib/roi";
import { StakeholderReportContent } from "@/components/dashboard/stakeholder-report-content";
import { ShareReportButton } from "./share-button";
import { RoiReportShell } from "./report-shell";

const VALID_PERIODS: ReportPeriod[] = ["7d", "30d", "90d", "last-month", "this-month"];

export default async function RoiReportPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string }>;
}) {
  const user = await requireAuth();
  const params = await searchParams;
  const period: ReportPeriod = VALID_PERIODS.includes(params.period as ReportPeriod)
    ? (params.period as ReportPeriod)
    : "30d";

  const report = await generateStakeholderReport(user.id, period);

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Stakeholder ROI Report
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Share this report with stakeholders to demonstrate the value of
              competitive intelligence monitoring.
            </p>
          </div>
        </div>
        <RoiReportShell period={period}>
          <ShareReportButton period={period} />
        </RoiReportShell>
      </div>

      <StakeholderReportContent report={report} orgName={user.name ?? undefined} />
    </div>
  );
}
