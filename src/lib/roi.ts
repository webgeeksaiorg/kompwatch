import crypto from "crypto";
import { db } from "./db";
import type { ChangeType, Severity } from "@prisma/client";

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

// ── Data Aggregation ─────────────────────────────────────────

export async function generateRoiReport(userId: string): Promise<RoiReport> {
  const now = new Date();
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [competitors, changes, digestCount] = await Promise.all([
    db.competitor.findMany({
      where: { userId },
      select: { id: true, name: true, url: true, isActive: true },
    }),
    db.change.findMany({
      where: {
        competitor: { userId },
        createdAt: { gte: thirtyDaysAgo },
      },
      select: {
        severity: true,
        changeType: true,
        competitor: { select: { name: true, url: true } },
      },
    }),
    db.digest.count({
      where: { userId, sentAt: { gte: thirtyDaysAgo } },
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
      start: thirtyDaysAgo,
      end: now,
      label: `${thirtyDaysAgo.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`,
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

// ── Share Token ──────────────────────────────────────────────

const SHARE_MAX_AGE = 30 * 24 * 60 * 60 * 1000; // 30 days

function getSecret(): string {
  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is not set");
  return secret;
}

/** Create a signed share token encoding userId + expiry */
export function createShareToken(userId: string): string {
  const payload = JSON.stringify({
    userId,
    exp: Date.now() + SHARE_MAX_AGE,
    kind: "roi-share",
  });
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(getSecret(), "roi-salt", 32);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = Buffer.concat([cipher.update(payload, "utf8"), cipher.final()]);
  return iv.toString("hex") + "." + encrypted.toString("hex");
}

/** Verify a share token and return the userId if valid */
export function verifyShareToken(token: string): string | null {
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
    return payload.userId;
  } catch {
    return null;
  }
}
