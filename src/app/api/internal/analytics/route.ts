import { NextRequest, NextResponse } from "next/server";
import {
  isPlausibleConfigured,
  getAllStats,
  getAggregateMetrics,
  getTopPages,
  getTopSources,
  getTopEvents,
} from "@/lib/plausible-api";

/**
 * GET /api/internal/analytics
 *
 * Internal endpoint for querying Plausible analytics.
 * Protected by CRON_SECRET — intended for agent/automation use.
 *
 * Query params:
 *   period  — "7d", "30d", "6mo", "12mo" (default: "30d")
 *   metric  — "all" | "aggregate" | "pages" | "sources" | "events" (default: "all")
 *   limit   — max results for breakdowns (default: 10)
 */
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isPlausibleConfigured()) {
    return NextResponse.json(
      {
        error: "Plausible not configured",
        detail:
          "Set PLAUSIBLE_API_KEY and NEXT_PUBLIC_PLAUSIBLE_DOMAIN environment variables",
      },
      { status: 503 },
    );
  }

  const { searchParams } = req.nextUrl;
  const period = searchParams.get("period") || "30d";
  const metric = searchParams.get("metric") || "all";
  const parsedLimit = parseInt(searchParams.get("limit") || "10", 10);
  const limit = Math.min(Math.max(Number.isNaN(parsedLimit) ? 10 : parsedLimit, 1), 100);

  try {
    if (metric === "all") {
      const stats = await getAllStats(period);
      return NextResponse.json(stats);
    }

    switch (metric) {
      case "aggregate": {
        const data = await getAggregateMetrics(period);
        return NextResponse.json({ period, metrics: data });
      }
      case "pages": {
        const data = await getTopPages(period, limit);
        return NextResponse.json({ period, topPages: data });
      }
      case "sources": {
        const data = await getTopSources(period, limit);
        return NextResponse.json({ period, topSources: data });
      }
      case "events": {
        const data = await getTopEvents(period, limit);
        return NextResponse.json({ period, topEvents: data });
      }
      default:
        return NextResponse.json(
          { error: `Unknown metric: ${metric}. Use: all, aggregate, pages, sources, events` },
          { status: 400 },
        );
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
