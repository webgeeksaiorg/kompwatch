"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ReportPeriod } from "@/lib/roi";
import { PeriodSelector, ExportRoiPdfButton } from "./report-controls";

export function RoiReportShell({
  period,
  children,
}: {
  period: ReportPeriod;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePeriodChange(newPeriod: ReportPeriod) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("period", newPeriod);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <PeriodSelector value={period} onChange={handlePeriodChange} />
      <ExportRoiPdfButton period={period} />
      {children}
    </div>
  );
}
