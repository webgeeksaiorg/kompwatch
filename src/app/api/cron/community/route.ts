import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  scanCommunity,
  mentionSeverity,
  mentionConfidence,
  mentionSummary,
  mentionDetails,
} from "@/lib/community";
import { computeSignalScore, SIGNAL_THRESHOLDS } from "@/lib/signal-score";

/**
 * POST /api/cron/community
 *
 * Cron endpoint that scans HN and Reddit for competitor mentions.
 * Protected by CRON_SECRET — only callable by the scheduler.
 *
 * Runs once per day (community signals don't need per-hour polling).
 * Creates Change records with changeType=COMMUNITY so mentions
 * appear in digests and the dashboard alongside website changes.
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get all active competitors with community tracking enabled
  const competitors = await db.competitor.findMany({
    where: { isActive: true, trackCommunity: true },
    select: { id: true, name: true },
  });

  if (competitors.length === 0) {
    return NextResponse.json({
      message: "No competitors with community tracking enabled",
      results: [],
    });
  }

  const results: Array<{
    competitorId: string;
    name: string;
    mentionsFound: number;
    changesCreated: number;
    errors: string[];
  }> = [];

  for (const competitor of competitors) {
    // Rate limit: 2s delay between competitors
    if (results.length > 0) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    try {
      const scan = await scanCommunity(competitor.name);

      // Deduplicate against existing community changes for this competitor
      // (avoid re-creating changes for the same URL)
      const existingUrls = new Set(
        (
          await db.change.findMany({
            where: {
              competitorId: competitor.id,
              changeType: "COMMUNITY",
              createdAt: { gte: new Date(Date.now() - 48 * 60 * 60 * 1000) },
            },
            select: { pageUrl: true },
          })
        )
          .map((c) => c.pageUrl)
          .filter(Boolean),
      );

      const newMentions = scan.mentions.filter(
        (m) => !existingUrls.has(m.url),
      );

      // Score and persist new mentions
      let changesCreated = 0;
      for (const mention of newMentions) {
        const severity = mentionSeverity(mention);
        const confidence = mentionConfidence(mention);
        const signalScore = computeSignalScore({
          confidence,
          severity,
          changeType: "COMMUNITY",
          contentZone: "MARKETING", // Community mentions are marketing-zone signals
          batchSize: newMentions.length,
        });

        if (signalScore < SIGNAL_THRESHOLDS.PERSIST) continue;

        await db.change.create({
          data: {
            competitorId: competitor.id,
            changeType: "COMMUNITY",
            contentZone: "MARKETING",
            summary: mentionSummary(mention),
            details: mentionDetails(mention, competitor.name),
            severity,
            confidenceScore: confidence / 100,
            signalScore,
            pageUrl: mention.url,
          },
        });
        changesCreated++;
      }

      results.push({
        competitorId: competitor.id,
        name: competitor.name,
        mentionsFound: scan.mentions.length,
        changesCreated,
        errors: scan.errors,
      });
    } catch (err) {
      results.push({
        competitorId: competitor.id,
        name: competitor.name,
        mentionsFound: 0,
        changesCreated: 0,
        errors: [err instanceof Error ? err.message : "Unknown error"],
      });
    }
  }

  const totalMentions = results.reduce((s, r) => s + r.mentionsFound, 0);
  const totalChanges = results.reduce((s, r) => s + r.changesCreated, 0);

  return NextResponse.json({
    message: `Scanned ${results.length} competitors. ${totalMentions} mentions found, ${totalChanges} new changes created.`,
    results,
  });
}
