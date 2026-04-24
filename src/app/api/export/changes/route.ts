import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

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
  const competitorId = searchParams.get("competitorId");
  const format = (searchParams.get("format") || "csv").toLowerCase();

  const where: Record<string, unknown> = {
    competitor: { userId: user.id },
  };
  if (competitorId) {
    where.competitorId = competitorId;
  }

  const changes = await db.change.findMany({
    where,
    include: { competitor: { select: { name: true, url: true } } },
    orderBy: { createdAt: "desc" },
    take: 5000,
  });

  const datestamp = new Date().toISOString().slice(0, 10);

  if (format === "json") {
    const payload = {
      exportedAt: new Date().toISOString(),
      count: changes.length,
      changes: changes.map((c) => ({
        date: c.createdAt.toISOString(),
        competitor: c.competitor.name,
        competitorUrl: c.competitor.url,
        changeType: c.changeType,
        severity: c.severity,
        summary: c.summary,
        pageUrl: c.pageUrl ?? null,
      })),
    };

    return new NextResponse(JSON.stringify(payload, null, 2), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": `attachment; filename="kompwatch-changes-${datestamp}.json"`,
      },
    });
  }

  const headers = ["Date", "Competitor", "URL", "Type", "Severity", "Summary", "Page URL"];
  const rows = changes.map((c) => [
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
      "Content-Disposition": `attachment; filename="kompwatch-changes-${datestamp}.csv"`,
    },
  });
}
