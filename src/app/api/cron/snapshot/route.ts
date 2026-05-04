import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { closeBrowser } from "@/lib/scraper";
import { captureSnapshot } from "@/lib/snapshot";

/**
 * POST /api/cron/snapshot
 *
 * Cron endpoint that scrapes all active competitors and detects changes.
 * Protected by CRON_SECRET — only callable by the scheduler.
 *
 * Per-competitor work is delegated to `captureSnapshot()` so this route
 * and the instant-on-add flow stay in lockstep.
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const competitors = await db.competitor.findMany({
    where: { isActive: true },
    select: { id: true, name: true },
  });

  if (competitors.length === 0) {
    return NextResponse.json({ message: "No active competitors to scrape", results: [] });
  }

  const results: Array<{
    competitorId: string;
    name: string;
    success: boolean;
    changesDetected: number;
    error?: string;
  }> = [];

  try {
    for (const competitor of competitors) {
      // Rate limit: 2s delay between competitors so we don't hammer
      // shared infra (single Chromium browser, Anthropic API).
      if (results.length > 0) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      const result = await captureSnapshot(competitor.id);
      results.push({
        competitorId: competitor.id,
        name: competitor.name,
        success: result.success,
        changesDetected: result.changesDetected,
        error: result.error,
      });
    }
  } finally {
    await closeBrowser();
  }

  const totalChanges = results.reduce((sum, r) => sum + r.changesDetected, 0);
  const failures = results.filter((r) => !r.success).length;

  return NextResponse.json({
    message: `Scraped ${results.length} competitors. ${totalChanges} changes detected. ${failures} failures.`,
    results,
  });
}
