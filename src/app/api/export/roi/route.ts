import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import {
  generateRoiReport,
  type ReportPeriod,
  type RoiReport,
} from "@/lib/roi";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const VALID_PERIODS: ReportPeriod[] = ["7d", "30d", "90d", "last-month", "this-month"];

export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const period = req.nextUrl.searchParams.get("period") ?? "30d";
  const validPeriod: ReportPeriod = VALID_PERIODS.includes(period as ReportPeriod)
    ? (period as ReportPeriod)
    : "30d";

  const report = await generateRoiReport(user.id, validPeriod);
  const pdfBytes = await generateRoiPdf(report, user.name ?? undefined);
  const datestamp = new Date().toISOString().slice(0, 10);

  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="kompwatch-roi-report-${datestamp}.pdf"`,
    },
  });
}

// ── PDF Generation ──────────────────────────────────────────

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 50;
const LINE_HEIGHT = 14;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

async function generateRoiPdf(
  report: RoiReport,
  orgName?: string,
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  let page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  function checkPageBreak(needed: number) {
    if (y - needed < MARGIN) {
      page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      y = PAGE_HEIGHT - MARGIN;
    }
  }

  // ── Title ──
  page.drawText("Competitive Intelligence ROI Report", {
    x: MARGIN,
    y,
    size: 16,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 22;

  // Subtitle (org + period)
  const subtitle = `${orgName ? `${orgName} · ` : ""}${report.period.label}`;
  page.drawText(subtitle, {
    x: MARGIN,
    y,
    size: 10,
    font,
    color: rgb(0.4, 0.4, 0.4),
  });
  y -= 30;

  // ── Value highlight box ──
  page.drawRectangle({
    x: MARGIN,
    y: y - 60,
    width: CONTENT_WIDTH,
    height: 60,
    color: rgb(0.95, 0.97, 1),
    borderColor: rgb(0.8, 0.85, 0.95),
    borderWidth: 1,
  });

  page.drawText("Estimated value delivered", {
    x: MARGIN + 16,
    y: y - 18,
    size: 9,
    font,
    color: rgb(0.3, 0.3, 0.6),
  });
  page.drawText(`$${report.estimatedValue.dollarValue.toLocaleString()}`, {
    x: MARGIN + 16,
    y: y - 38,
    size: 22,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.4),
  });
  page.drawText(
    `${report.estimatedValue.hoursReplaced} hours of manual monitoring replaced`,
    {
      x: MARGIN + 16,
      y: y - 52,
      size: 8,
      font,
      color: rgb(0.4, 0.4, 0.6),
    },
  );
  y -= 80;

  // ── Key metrics row ──
  const metrics = [
    { label: "Changes detected", value: String(report.changes.total) },
    { label: "High-impact alerts", value: String(report.changes.highImpact) },
    { label: "Competitors tracked", value: String(report.competitors.active) },
    { label: "Digests delivered", value: String(report.digests.sent) },
  ];
  const colWidth = CONTENT_WIDTH / 4;
  for (let i = 0; i < metrics.length; i++) {
    const x = MARGIN + i * colWidth;
    page.drawText(metrics[i].label, {
      x,
      y,
      size: 8,
      font,
      color: rgb(0.4, 0.4, 0.4),
    });
    page.drawText(metrics[i].value, {
      x,
      y: y - 16,
      size: 18,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
  }
  y -= 46;

  // ── Separator ──
  page.drawLine({
    start: { x: MARGIN, y },
    end: { x: MARGIN + CONTENT_WIDTH, y },
    thickness: 0.5,
    color: rgb(0.85, 0.85, 0.85),
  });
  y -= 24;

  // ── Changes by severity ──
  checkPageBreak(100);
  page.drawText("Changes by Severity", {
    x: MARGIN,
    y,
    size: 11,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 20;

  const severities = ["CRITICAL", "HIGH", "MEDIUM", "LOW"] as const;
  const sevColors = {
    CRITICAL: rgb(0.8, 0.1, 0.1),
    HIGH: rgb(0.85, 0.45, 0),
    MEDIUM: rgb(0.2, 0.4, 0.8),
    LOW: rgb(0.5, 0.5, 0.5),
  };

  for (const sev of severities) {
    const count = report.changes.bySeverity[sev];
    const pct = report.changes.total
      ? (count / report.changes.total) * 100
      : 0;
    const barWidth = Math.max((pct / 100) * (CONTENT_WIDTH - 120), 0);

    page.drawText(sev, {
      x: MARGIN,
      y,
      size: 8,
      font: fontBold,
      color: sevColors[sev],
    });

    // Bar background
    page.drawRectangle({
      x: MARGIN + 60,
      y: y - 2,
      width: CONTENT_WIDTH - 120,
      height: 8,
      color: rgb(0.93, 0.93, 0.93),
    });
    // Bar fill
    if (barWidth > 0) {
      page.drawRectangle({
        x: MARGIN + 60,
        y: y - 2,
        width: barWidth,
        height: 8,
        color: sevColors[sev],
      });
    }

    page.drawText(String(count), {
      x: MARGIN + CONTENT_WIDTH - 50,
      y,
      size: 8,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });
    y -= 18;
  }
  y -= 12;

  // ── Changes by type ──
  checkPageBreak(120);
  page.drawText("Changes by Type", {
    x: MARGIN,
    y,
    size: 11,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 20;

  const typeLabels: Record<string, string> = {
    PRICING: "Pricing",
    FEATURE: "Feature",
    BLOG: "Blog",
    JOB: "Jobs",
    TECH: "Tech",
    GENERAL: "General",
    COMMUNITY: "Community",
  };

  const sortedTypes = Object.entries(report.changes.byType).sort(
    ([, a], [, b]) => b - a,
  );
  const maxType = Math.max(...sortedTypes.map(([, v]) => v), 1);

  for (const [type, count] of sortedTypes) {
    const barWidth = (count / maxType) * (CONTENT_WIDTH - 120);
    page.drawText(typeLabels[type] ?? type, {
      x: MARGIN,
      y,
      size: 8,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });
    page.drawRectangle({
      x: MARGIN + 60,
      y: y - 2,
      width: CONTENT_WIDTH - 120,
      height: 8,
      color: rgb(0.93, 0.93, 0.93),
    });
    if (barWidth > 0) {
      page.drawRectangle({
        x: MARGIN + 60,
        y: y - 2,
        width: barWidth,
        height: 8,
        color: rgb(0.35, 0.55, 0.85),
      });
    }
    page.drawText(String(count), {
      x: MARGIN + CONTENT_WIDTH - 50,
      y,
      size: 8,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });
    y -= 18;
  }
  y -= 12;

  // ── Top competitors ──
  if (report.changes.byCompetitor.length > 0) {
    checkPageBreak(80);
    page.drawText("Top Competitors by Activity", {
      x: MARGIN,
      y,
      size: 11,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    y -= 20;

    const maxComp = report.changes.byCompetitor[0]?.count ?? 1;
    for (const comp of report.changes.byCompetitor.slice(0, 8)) {
      checkPageBreak(18);
      const barWidth = (comp.count / maxComp) * (CONTENT_WIDTH - 140);

      // Truncate name to fit
      let name = comp.name;
      while (
        name.length > 3 &&
        font.widthOfTextAtSize(name, 8) > 50
      ) {
        name = name.slice(0, -1);
      }
      if (name !== comp.name) name += "…";

      page.drawText(name, {
        x: MARGIN,
        y,
        size: 8,
        font: fontBold,
        color: rgb(0.2, 0.2, 0.2),
      });
      page.drawRectangle({
        x: MARGIN + 80,
        y: y - 2,
        width: CONTENT_WIDTH - 140,
        height: 8,
        color: rgb(0.93, 0.93, 0.93),
      });
      if (barWidth > 0) {
        page.drawRectangle({
          x: MARGIN + 80,
          y: y - 2,
          width: barWidth,
          height: 8,
          color: rgb(0.25, 0.5, 0.75),
        });
      }
      page.drawText(String(comp.count), {
        x: MARGIN + CONTENT_WIDTH - 50,
        y,
        size: 8,
        font,
        color: rgb(0.3, 0.3, 0.3),
      });
      y -= 18;
    }
    y -= 12;
  }

  // ── Methodology ──
  checkPageBreak(60);
  page.drawLine({
    start: { x: MARGIN, y },
    end: { x: MARGIN + CONTENT_WIDTH, y },
    thickness: 0.5,
    color: rgb(0.85, 0.85, 0.85),
  });
  y -= 18;

  page.drawText("Methodology", {
    x: MARGIN,
    y,
    size: 9,
    font: fontBold,
    color: rgb(0.4, 0.4, 0.4),
  });
  y -= 14;
  page.drawText(report.estimatedValue.description, {
    x: MARGIN,
    y,
    size: 7,
    font,
    color: rgb(0.5, 0.5, 0.5),
  });
  y -= 20;

  // ── Footer ──
  page.drawText(
    `Generated by KompWatch · AI-powered competitor monitoring · ${new Date().toISOString().slice(0, 10)}`,
    {
      x: MARGIN,
      y: MARGIN - 10,
      size: 7,
      font,
      color: rgb(0.6, 0.6, 0.6),
    },
  );

  return doc.save();
}
