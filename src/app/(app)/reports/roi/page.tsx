import { requireAuth } from "@/lib/auth";
import { generateRoiReport } from "@/lib/roi";
import { RoiReportContent } from "@/components/dashboard/roi-report-content";
import { ShareReportButton } from "./share-button";

export default async function RoiReportPage() {
  const user = await requireAuth();
  const report = await generateRoiReport(user.id);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ROI Report</h1>
          <p className="mt-1 text-sm text-gray-500">
            Share this report with stakeholders to show the value of competitive
            intelligence.
          </p>
        </div>
        <ShareReportButton />
      </div>

      <RoiReportContent report={report} orgName={user.name ?? undefined} />
    </div>
  );
}
