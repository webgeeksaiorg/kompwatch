import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { renderBattlecardHtml } from "@/lib/battlecard";

/**
 * GET /api/export/battlecard?competitorId=xxx
 *
 * Generates and downloads a one-page HTML sales battlecard for a competitor.
 * Auth: signed-in users only. Scoped to the user's own competitors.
 */
export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const competitorId = req.nextUrl.searchParams.get("competitorId");
  if (!competitorId) {
    return NextResponse.json(
      { error: "competitorId query parameter is required." },
      { status: 400 }
    );
  }

  const competitor = await db.competitor.findUnique({
    where: { id: competitorId },
    select: {
      id: true,
      userId: true,
      name: true,
      url: true,
      trackPricing: true,
      trackFeatures: true,
      trackBlog: true,
      trackJobs: true,
      trackTech: true,
      createdAt: true,
    },
  });

  if (!competitor || competitor.userId !== user.id) {
    return NextResponse.json({ error: "Competitor not found." }, { status: 404 });
  }

  const changes = await db.change.findMany({
    where: { competitorId },
    orderBy: { createdAt: "desc" },
    take: 200,
    select: {
      changeType: true,
      severity: true,
      summary: true,
      details: true,
      pageUrl: true,
      createdAt: true,
    },
  });

  const html = renderBattlecardHtml({
    competitor,
    changes,
    generatedAt: new Date(),
  });

  const safeName = competitor.name.replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase();
  const datestamp = new Date().toISOString().slice(0, 10);

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="battlecard-${safeName}-${datestamp}.html"`,
    },
  });
}
