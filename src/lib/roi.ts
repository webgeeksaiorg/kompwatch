import crypto from "crypto";
import { db } from "./db";
import type { ChangeType, ContentZone, Severity } from "@prisma/client";
import { splitChangeDetails } from "./change-context";

// ── Types ────────────────────────────────────────────────────

export interface RoiReport {
  period: { start: Date; end: Date; label: string };
  competitors: { total: number; active: number };
  changes: {
    total: number;
    bySeverity: Record<Severity, number>;
    byType: Record<ChangeType, number>;
    byCompetitor: { name: string; url: string; count: number }[];
    highImpact: number; // HIGH + CRITICAL
  };
  digests: { sent: number };
  estimatedValue: {
    hoursReplaced: number;
    dollarValue: number;
    description: string;
  };
}

// Conservative estimate: each detected change replaces ~15 min of manual
// monitoring work (finding it, reading it, writing up a summary). Use $75/hr
// as a competitive intelligence analyst's blended rate.
const MINUTES_PER_CHANGE = 15;
const ANALYST_HOURLY_RATE = 75;

// ── Period Helpers ──────────────────────────────────────────

export type ReportPeriod = "7d" | "30d" | "90d" | "last-month" | "this-month";

export function resolvePeriod(period: ReportPeriod): { start: Date; end: Date; label: string } {
  const now = new Date();

  switch (period) {
    case "7d": {
      const start = new Date(now);
      start.setDate(start.getDate() - 7);
      return { start, end: now, label: `Last 7 days` };
    }
    case "30d": {
      const start = new Date(now);
      start.setDate(start.getDate() - 30);
      return { start, end: now, label: `Last 30 days` };
    }
    case "90d": {
      const start = new Date(now);
      start.setDate(start.getDate() - 90);
      return { start, end: now, label: `Last 90 days` };
    }
    case "last-month": {
      const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
      const monthName = start.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      return { start, end, label: monthName };
    }
    case "this-month": {
      const start = new Date(now.getFullYear(), now.getMonth(), 1);
      return { start, end: now, label: `${start.toLocaleDateString("en-US", { month: "long", year: "numeric" })} (to date)` };
    }
  }
}

// ── Data Aggregation ─────────────────────────────────────────

export async function generateRoiReport(
  userId: string,
  period: ReportPeriod = "30d",
): Promise<RoiReport> {
  const { start, end, label } = resolvePeriod(period);

  const [competitors, changes, digestCount] = await Promise.all([
    db.competitor.findMany({
      where: { userId },
      select: { id: true, name: true, url: true, isActive: true },
    }),
    db.change.findMany({
      where: {
        competitor: { userId },
        createdAt: { gte: start, lte: end },
      },
      select: {
        severity: true,
        changeType: true,
        competitor: { select: { name: true, url: true } },
      },
    }),
    db.digest.count({
      where: { userId, sentAt: { gte: start, lte: end } },
    }),
  ]);

  // Severity breakdown
  const bySeverity: Record<Severity, number> = {
    LOW: 0,
    MEDIUM: 0,
    HIGH: 0,
    CRITICAL: 0,
  };
  for (const c of changes) bySeverity[c.severity]++;

  // Type breakdown
  const byType: Record<ChangeType, number> = {
    PRICING: 0,
    FEATURE: 0,
    BLOG: 0,
    JOB: 0,
    TECH: 0,
    GENERAL: 0,
    COMMUNITY: 0,
  };
  for (const c of changes) byType[c.changeType]++;

  // Per-competitor counts
  const competitorMap = new Map<string, { name: string; url: string; count: number }>();
  for (const c of changes) {
    const key = c.competitor.url;
    const existing = competitorMap.get(key);
    if (existing) {
      existing.count++;
    } else {
      competitorMap.set(key, { name: c.competitor.name, url: c.competitor.url, count: 1 });
    }
  }
  const byCompetitor = Array.from(competitorMap.values()).sort(
    (a, b) => b.count - a.count
  );

  const totalChanges = changes.length;
  const highImpact = bySeverity.HIGH + bySeverity.CRITICAL;
  const hoursReplaced = Math.round((totalChanges * MINUTES_PER_CHANGE) / 60 * 10) / 10;
  const dollarValue = Math.round(hoursReplaced * ANALYST_HOURLY_RATE);

  return {
    period: {
      start,
      end,
      label,
    },
    competitors: {
      total: competitors.length,
      active: competitors.filter((c) => c.isActive).length,
    },
    changes: {
      total: totalChanges,
      bySeverity,
      byType,
      byCompetitor,
      highImpact,
    },
    digests: { sent: digestCount },
    estimatedValue: {
      hoursReplaced,
      dollarValue,
      description: `${totalChanges} changes × ~${MINUTES_PER_CHANGE} min of manual monitoring each at $${ANALYST_HOURLY_RATE}/hr analyst rate`,
    },
  };
}

// ── Stakeholder Report ──────────────────────────────────────

export interface StakeholderHighlight {
  competitorName: string;
  changeType: ChangeType;
  contentZone: ContentZone;
  severity: Severity;
  summary: string;
  implication: string | null;
  detectedAt: Date;
}

export interface StakeholderReport extends RoiReport {
  byZone: Record<ContentZone, number>;
  highlights: StakeholderHighlight[];
  trend: {
    previousPeriodChanges: number;
    changePercent: number | null; // null when no prior data
  };
}

const CONTENT_ZONES: ContentZone[] = [
  "POSITIONING",
  "MONETIZATION",
  "PRODUCT",
  "MARKETING",
  "TALENT",
  "LEGAL",
  "OPERATIONS",
  "UNKNOWN",
];

export async function generateStakeholderReport(
  userId: string,
  period: ReportPeriod = "30d",
): Promise<StakeholderReport> {
  const base = await generateRoiReport(userId, period);
  const { start, end } = base.period;

  // Duration of the selected period in ms
  const periodMs = end.getTime() - start.getTime();
  const prevStart = new Date(start.getTime() - periodMs);

  const [zoneChanges, topChanges, previousCount] = await Promise.all([
    // Content zone breakdown
    db.change.findMany({
      where: {
        competitor: { userId },
        createdAt: { gte: start, lte: end },
      },
      select: { contentZone: true },
    }),
    // Top high-impact changes with details
    db.change.findMany({
      where: {
        competitor: { userId },
        createdAt: { gte: start, lte: end },
        severity: { in: ["HIGH", "CRITICAL"] },
      },
      select: {
        changeType: true,
        contentZone: true,
        severity: true,
        summary: true,
        details: true,
        createdAt: true,
        competitor: { select: { name: true } },
      },
      orderBy: [{ severity: "desc" }, { signalScore: "desc" }],
      take: 5,
    }),
    // Previous period count for trend
    db.change.count({
      where: {
        competitor: { userId },
        createdAt: { gte: prevStart, lt: start },
      },
    }),
  ]);

  // Zone breakdown
  const byZone = Object.fromEntries(
    CONTENT_ZONES.map((z) => [z, 0]),
  ) as Record<ContentZone, number>;
  for (const c of zoneChanges) byZone[c.contentZone]++;

  // Highlights
  const highlights: StakeholderHighlight[] = topChanges.map((c) => {
    const { implication } = splitChangeDetails(c.details);
    return {
      competitorName: c.competitor.name,
      changeType: c.changeType,
      contentZone: c.contentZone,
      severity: c.severity,
      summary: c.summary,
      implication,
      detectedAt: c.createdAt,
    };
  });

  // Trend
  const changePercent =
    previousCount > 0
      ? Math.round(((base.changes.total - previousCount) / previousCount) * 100)
      : null;

  return {
    ...base,
    byZone,
    highlights,
    trend: {
      previousPeriodChanges: previousCount,
      changePercent,
    },
  };
}

// ── Share Token ──────────────────────────────────────────────

const SHARE_MAX_AGE = 30 * 24 * 60 * 60 * 1000; // 30 days

function getSecret(): string {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is not set");
  return secret;
}

/** Create a signed share token encoding userId + expiry + period */
export function createShareToken(userId: string, period: ReportPeriod = "30d"): string {
  const payload = JSON.stringify({
    userId,
    exp: Date.now() + SHARE_MAX_AGE,
    kind: "roi-share",
    period,
  });
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(getSecret(), "roi-salt", 32);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = Buffer.concat([cipher.update(payload, "utf8"), cipher.final()]);
  return iv.toString("hex") + "." + encrypted.toString("hex");
}

/** Verify a share token and return userId + period if valid */
export function verifyShareToken(
  token: string,
): { userId: string; period: ReportPeriod } | null {
  try {
    const [ivHex, encHex] = token.split(".");
    if (!ivHex || !encHex) return null;
    const iv = Buffer.from(ivHex, "hex");
    const encrypted = Buffer.from(encHex, "hex");
    const key = crypto.scryptSync(getSecret(), "roi-salt", 32);
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    const payload = JSON.parse(decrypted.toString("utf8"));
    if (payload.kind !== "roi-share") return null;
    if (payload.exp < Date.now()) return null;
    const period: ReportPeriod = payload.period ?? "30d";
    return { userId: payload.userId, period };
  } catch {
    return null;
  }
}
