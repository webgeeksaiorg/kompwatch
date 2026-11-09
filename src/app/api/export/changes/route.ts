import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { severitiesAtOrAbove } from "@/lib/severity";
import type { ChangeType, ContentZone, Severity } from "@prisma/client";

function escapeCsvField(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const VALID_PERIODS = new Set(["7d", "30d", "90d", "all"]);
const VALID_ZONES = new Set<string>([
  "POSITIONING", "MONETIZATION", "PRODUCT", "MARKETING",
  "TALENT", "LEGAL", "OPERATIONS", "UNKNOWN",
]);
const VALID_CHANGE_TYPES = new Set<string>([
  "PRICING", "FEATURE", "BLOG", "JOB", "TECH", "GENERAL", "COMMUNITY",
]);
const VALID_SEVERITIES = new Set<string>(["LOW", "MEDIUM", "HIGH", "CRITICAL"]);

function resolvePeriodDays(period: string): number | null {
  switch (period) {
    case "7d": return 7;
    case "30d": return 30;
    case "90d": return 90;
    case "all": return null;
    default: return null;
  }
}

export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const format = (searchParams.get("format") || "csv").toLowerCase();

  // Legacy single-value competitorId (used by /competitors/[id] page)
  const legacyCompetitorId = searchParams.get("competitorId");
  // New multi-value competitor filter (used by /history page)
  const competitorIds = searchParams.getAll("competitor").filter(Boolean);

  // Zone + change type filters (multi-value)
  const zones = searchParams
    .getAll("zone")
    .filter((z) => VALID_ZONES.has(z)) as ContentZone[];
  const changeTypes = searchParams
    .getAll("changeType")
    .filter((t) => VALID_CHANGE_TYPES.has(t)) as ChangeType[];

  // Period filter (defaults to all when omitted — preserves legacy behavior)
  const rawPeriod = searchParams.get("period");
  const period = rawPeriod && VALID_PERIODS.has(rawPeriod) ? rawPeriod : "all";
  const days = resolvePeriodDays(period);

  // Severity floor filter. When omitted, fall back to the user's dashboard
  // minimum so exports match what they see on the history page. Callers can
  // pass minSeverity=LOW to disable the floor explicitly.
  const rawMinSeverity = searchParams.get("minSeverity");
  const minSeverity: Severity | null =
    rawMinSeverity && VALID_SEVERITIES.has(rawMinSeverity)
      ? (rawMinSeverity as Severity)
      : null;
  // Only apply the user's dashboard minimum when caller did not pass minSeverity
  // AND filters indicate a dashboard-style request (period/zone/changeType).
  // This keeps legacy competitorId-only calls unfiltered by severity.
  const dashboardFiltered =
    minSeverity !== null ||
    rawPeriod !== null ||
    zones.length > 0 ||
    changeTypes.length > 0 ||
    competitorIds.length > 0;
  const effectiveMinSeverity: Severity | null =
    minSeverity ?? (dashboardFiltered ? user.dashboardMinSeverity : null);
  const allowedSeverities = effectiveMinSeverity
    ? severitiesAtOrAbove(effectiveMinSeverity)
    : null;

  const where: Record<string, unknown> = {
    competitor: { userId: user.id },
  };
  if (legacyCompetitorId) {
    where.competitorId = legacyCompetitorId;
  } else if (competitorIds.length > 0) {
    where.competitorId = { in: competitorIds };
  }
  if (zones.length > 0) {
    where.contentZone = { in: zones };
  }
  if (changeTypes.length > 0) {
    where.changeType = { in: changeTypes };
  }
  if (allowedSeverities) {
    where.severity = { in: allowedSeverities };
  }
  if (days !== null) {
    const since = new Date();
    since.setDate(since.getDate() - days);
    where.createdAt = { gte: since };
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
        contentZone: c.contentZone,
        severity: c.severity,
        confidence: c.confidenceScore,
        signalScore: c.signalScore,
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

  const headers = ["Date", "Competitor", "URL", "Type", "Zone", "Severity", "Confidence", "Signal Score", "Summary", "Page URL"];
  const rows = changes.map((c) => [
    c.createdAt.toISOString(),
    escapeCsvField(c.competitor.name),
    escapeCsvField(c.competitor.url),
    c.changeType,
    c.contentZone,
    c.severity,
    String(c.confidenceScore),
    String(c.signalScore),
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
