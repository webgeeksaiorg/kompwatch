import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { scrapeCompetitor, closeBrowser } from "@/lib/scraper";
import { detectChanges } from "@/lib/ai";
import {
  sendInstantAlertWebhook,
  severityMeetsThreshold,
  changeToInstantAlert,
} from "@/lib/webhooks";
import { planAllowsInstantAlerts } from "@/lib/stripe";

/**
 * POST /api/cron/snapshot
 *
 * Cron endpoint that scrapes all active competitors and detects changes.
 * Protected by CRON_SECRET — only callable by the scheduler.
 *
 * Flow:
 * 1. Fetch all active competitors
 * 2. For each competitor, scrape pricing/features/blog/jobs pages
 * 3. Save snapshot to DB
 * 4. Compare with previous snapshot using AI
 * 5. Save detected changes
 */
export async function POST(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const competitors = await db.competitor.findMany({
    where: { isActive: true },
    include: {
      snapshots: {
        orderBy: { createdAt: "desc" },
        take: 1,
      },
      user: {
        select: {
          id: true,
          plan: true,
          webhookEnabled: true,
          webhookUrl: true,
          instantAlertsEnabled: true,
          instantAlertMinSeverity: true,
        },
      },
    },
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
      try {
        // Rate limit: 2s delay between competitors
        if (results.length > 0) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }

        // Scrape the competitor
        const scraped = await scrapeCompetitor(competitor.url, {
          trackPricing: competitor.trackPricing,
          trackBlog: competitor.trackBlog,
          trackFeatures: competitor.trackFeatures,
          trackJobs: competitor.trackJobs,
          trackTech: competitor.trackTech,
        });

        // Save snapshot
        const snapshot = await db.snapshot.create({
          data: {
            competitorId: competitor.id,
            pricingHtml: scraped.pricingHtml,
            featuresHtml: scraped.featuresHtml,
            blogTitles: scraped.blogTitles,
            jobTitles: scraped.jobTitles,
            techStack: scraped.techStack,
            httpStatus: scraped.httpStatus,
            fetchTimeMs: scraped.fetchTimeMs,
          },
        });

        // Compare with previous snapshot if one exists
        let changesDetected = 0;
        const prevSnapshot = competitor.snapshots[0];

        if (prevSnapshot) {
          const changes = await detectChanges(
            competitor.name,
            {
              pricingHtml: prevSnapshot.pricingHtml,
              featuresHtml: prevSnapshot.featuresHtml,
              blogTitles: prevSnapshot.blogTitles,
              jobTitles: prevSnapshot.jobTitles,
              techStack: prevSnapshot.techStack,
            },
            scraped
          );

          // Save changes to DB
          if (changes.length > 0) {
            await db.change.createMany({
              data: changes.map((c) => ({
                competitorId: competitor.id,
                changeType: c.changeType,
                summary: c.summary,
                details: c.details,
                severity: c.severity,
                pageUrl: c.pageUrl || null,
              })),
            });
            changesDetected = changes.length;

            // Real-time Slack/Teams alerts (Team tier only). Pro+Team still
            // get the digest webhook later — this is the instant push for
            // alerts that cross the user's severity threshold.
            const owner = competitor.user;
            if (
              owner.instantAlertsEnabled &&
              owner.webhookEnabled &&
              owner.webhookUrl &&
              planAllowsInstantAlerts(owner.plan)
            ) {
              const alertable = changes.filter((c) =>
                severityMeetsThreshold(c.severity, owner.instantAlertMinSeverity)
              );
              for (const c of alertable) {
                await sendInstantAlertWebhook(
                  owner.webhookUrl,
                  changeToInstantAlert(
                    {
                      changeType: c.changeType,
                      severity: c.severity,
                      summary: c.summary,
                      details: c.details,
                      pageUrl: c.pageUrl || null,
                    },
                    { name: competitor.name, url: competitor.url }
                  )
                );
              }
            }
          }
        }

        results.push({
          competitorId: competitor.id,
          name: competitor.name,
          success: true,
          changesDetected,
        });
      } catch (err) {
        results.push({
          competitorId: competitor.id,
          name: competitor.name,
          success: false,
          changesDetected: 0,
          error: err instanceof Error ? err.message : "Unknown error",
        });
      }
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
