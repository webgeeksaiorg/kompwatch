import { db } from "@/lib/db";
import { scrapeCompetitor } from "@/lib/scraper";
import { detectChanges } from "@/lib/ai";
import {
  sendInstantAlertWebhook,
  severityMeetsThreshold,
  changeToInstantAlert,
} from "@/lib/webhooks";
import { planAllowsInstantAlerts } from "@/lib/stripe";

export interface CaptureSnapshotResult {
  competitorId: string;
  snapshotId?: string;
  changesDetected: number;
  success: boolean;
  error?: string;
}

/**
 * Capture a single snapshot for a competitor: scrape, save, diff against
 * the previous snapshot, and fire any instant alert webhooks.
 *
 * Shared by the bulk cron route and the instant-on-add flow so the two
 * paths can't drift in their change-detection behavior.
 */
export async function captureSnapshot(
  competitorId: string,
): Promise<CaptureSnapshotResult> {
  const competitor = await db.competitor.findUnique({
    where: { id: competitorId },
    include: {
      snapshots: { orderBy: { createdAt: "desc" }, take: 1 },
      user: {
        select: {
          plan: true,
          webhookEnabled: true,
          webhookUrl: true,
          instantAlertsEnabled: true,
          instantAlertMinSeverity: true,
        },
      },
    },
  });

  if (!competitor) {
    return {
      competitorId,
      changesDetected: 0,
      success: false,
      error: "Competitor not found",
    };
  }

  try {
    const scraped = await scrapeCompetitor(competitor.url, {
      trackPricing: competitor.trackPricing,
      trackBlog: competitor.trackBlog,
      trackFeatures: competitor.trackFeatures,
      trackJobs: competitor.trackJobs,
      trackTech: competitor.trackTech,
    });

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
        scraped,
      );

      if (changes.length > 0) {
        // Filter out low-confidence noise (below 40%) before persisting
        const MIN_CONFIDENCE = 40;
        const meaningful = changes.filter((c) => c.confidence >= MIN_CONFIDENCE);

        if (meaningful.length > 0) {
          await db.change.createMany({
            data: meaningful.map((c) => ({
              competitorId: competitor.id,
              changeType: c.changeType,
              summary: c.summary,
              details: c.details,
              severity: c.severity,
              confidenceScore: c.confidence / 100, // store as 0.0–1.0
              pageUrl: c.pageUrl || null,
            })),
          });
        }
        changesDetected = meaningful.length;

        const owner = competitor.user;
        if (
          owner.instantAlertsEnabled &&
          owner.webhookEnabled &&
          owner.webhookUrl &&
          planAllowsInstantAlerts(owner.plan)
        ) {
          const ALERT_MIN_CONFIDENCE = 70;
          const alertable = meaningful.filter(
            (c) =>
              severityMeetsThreshold(c.severity, owner.instantAlertMinSeverity) &&
              c.confidence >= ALERT_MIN_CONFIDENCE,
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
                { name: competitor.name, url: competitor.url },
              ),
            );
          }
        }
      }
    }

    return {
      competitorId: competitor.id,
      snapshotId: snapshot.id,
      changesDetected,
      success: true,
    };
  } catch (err) {
    return {
      competitorId: competitor.id,
      changesDetected: 0,
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Fire-and-forget snapshot capture. Returns immediately so the API route
 * isn't blocked by Playwright (~30s) and a Claude API round-trip.
 *
 * Used after a user adds a competitor: cron runs at most every 6h on Pro
 * (24h on Free), so without this they'd see "0 snapshots" until the next
 * cycle and likely bounce before realizing the product works.
 */
export function captureSnapshotInBackground(competitorId: string): void {
  Promise.resolve()
    .then(() => captureSnapshot(competitorId))
    .then((result) => {
      if (!result.success) {
        console.error(
          `[snapshot] background capture failed for ${competitorId}: ${result.error}`,
        );
      }
    })
    .catch((err) => {
      console.error(
        `[snapshot] background capture threw for ${competitorId}:`,
        err,
      );
    });
}
