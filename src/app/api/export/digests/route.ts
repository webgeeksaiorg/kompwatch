import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

function escapeCsvField(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const digestId = searchParams.get("digestId");
  const format = (searchParams.get("format") || "csv").toLowerCase();

  if (!digestId) {
    return NextResponse.json({ error: "digestId is required" }, { status: 400 });
  }

  const digest = await db.digest.findUnique({
    where: { id: digestId },
    include: {
      changes: {
        orderBy: { createdAt: "desc" },
        include: { competitor: { select: { name: true, url: true } } },
      },
    },
  });

  if (!digest || digest.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const datestamp = digest.createdAt.toISOString().slice(0, 10);
  const filename = `kompwatch-digest-${datestamp}`;

  if (format === "pdf") {
    const pdfBytes = await generatePdf(digest);
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}.pdf"`,
      },
    });
  }

  // CSV format
  const headers = ["Date", "Competitor", "URL", "Type", "Severity", "Summary", "Page URL"];
  const rows = digest.changes.map((c) => [
    c.createdAt.toISOString(),
    escapeCsvField(c.competitor.name),
    escapeCsvField(c.competitor.url),
    c.changeType,
    c.severity,
    escapeCsvField(c.summary),
    c.pageUrl ? escapeCsvField(c.pageUrl) : "",
  ]);

  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}.csv"`,
    },
  });
}

type DigestWithChanges = {
  subject: string;
  period: string;
  createdAt: Date;
  sentAt: Date | null;
  changes: {
    createdAt: Date;
    changeType: string;
    severity: string;
    summary: string;
    pageUrl: string | null;
    competitor: { name: string; url: string };
  }[];
};

async function generatePdf(digest: DigestWithChanges): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  const PAGE_WIDTH = 612; // US Letter
  const PAGE_HEIGHT = 792;
  const MARGIN = 50;
  const LINE_HEIGHT = 14;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

  let page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  function addPage() {
    page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    y = PAGE_HEIGHT - MARGIN;
  }

  function checkPageBreak(needed: number) {
    if (y - needed < MARGIN) addPage();
  }

  // Title
  page.drawText("KompWatch — Competitive Intelligence Report", {
    x: MARGIN,
    y,
    size: 14,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 24;

  // Metadata
  page.drawText(`Subject: ${digest.subject}`, { x: MARGIN, y, size: 10, font });
  y -= LINE_HEIGHT;
  page.drawText(`Period: ${digest.period}`, { x: MARGIN, y, size: 10, font });
  y -= LINE_HEIGHT;
  page.drawText(`Generated: ${digest.createdAt.toISOString().slice(0, 10)}`, { x: MARGIN, y, size: 10, font });
  y -= LINE_HEIGHT;
  page.drawText(`Changes: ${digest.changes.length}`, { x: MARGIN, y, size: 10, font });
  y -= 24;

  // Separator line
  page.drawLine({
    start: { x: MARGIN, y },
    end: { x: MARGIN + CONTENT_WIDTH, y },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });
  y -= 20;

  // Changes
  for (const change of digest.changes) {
    checkPageBreak(60);

    // Severity + Type badge
    const badge = `[${change.severity}] [${change.changeType}]`;
    page.drawText(badge, { x: MARGIN, y, size: 8, font: fontBold, color: severityColor(change.severity) });
    y -= LINE_HEIGHT;

    // Competitor name
    page.drawText(change.competitor.name, { x: MARGIN, y, size: 10, font: fontBold });
    y -= LINE_HEIGHT;

    // Summary — wrap long text
    const lines = wrapText(change.summary, font, 9, CONTENT_WIDTH);
    for (const line of lines) {
      checkPageBreak(LINE_HEIGHT);
      page.drawText(line, { x: MARGIN, y, size: 9, font });
      y -= LINE_HEIGHT;
    }

    // Date
    page.drawText(change.createdAt.toISOString().slice(0, 16).replace("T", " "), {
      x: MARGIN,
      y,
      size: 8,
      font,
      color: rgb(0.5, 0.5, 0.5),
    });
    y -= 20;
  }

  return doc.save();
}

function severityColor(severity: string) {
  switch (severity) {
    case "CRITICAL": return rgb(0.8, 0.1, 0.1);
    case "HIGH": return rgb(0.85, 0.45, 0);
    case "MEDIUM": return rgb(0.2, 0.4, 0.8);
    default: return rgb(0.4, 0.4, 0.4);
  }
}

function wrapText(
  text: string,
  font: { widthOfTextAtSize: (text: string, size: number) => number },
  size: number,
  maxWidth: number
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(test, size) > maxWidth) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}
