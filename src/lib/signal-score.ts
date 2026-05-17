import type { ChangeType, ContentZone, Severity } from "@prisma/client";
import { SEVERITY_RANK } from "./severity";

/**
 * Alert Signal Scoring — composite score combining multiple factors
 * to reduce noise and surface the most actionable competitor changes.
 *
 * Score range: 0.0–1.0 (higher = stronger signal, more actionable)
 *
 * Factors:
 * 1. AI confidence (raw model output)
 * 2. Severity weight (critical changes score higher)
 * 3. Change type reliability (some types are inherently more reliable)
 * 4. Zone importance (pricing/product zones are more actionable)
 * 5. Corroboration bonus (multiple changes in one snapshot suggest a real update)
 */

/** Weights for each scoring factor (must sum to 1.0) */
const WEIGHTS = {
  confidence: 0.35,
  severity: 0.25,
  changeTypeReliability: 0.15,
  zoneImportance: 0.15,
  corroboration: 0.10,
} as const;

/** How reliable each change type tends to be (0–1) */
const CHANGE_TYPE_RELIABILITY: Record<ChangeType, number> = {
  PRICING: 0.95, // Price changes are almost always real
  FEATURE: 0.80, // Feature announcements are usually clear
  JOB: 0.90, // Job postings are factual
  BLOG: 0.85, // Blog posts are easy to verify
  TECH: 0.70, // Tech stack detection can be noisy
  GENERAL: 0.50, // General content changes are often cosmetic
};

/** How actionable each content zone tends to be (0–1) */
const ZONE_IMPORTANCE: Record<ContentZone, number> = {
  MONETIZATION: 1.0, // Pricing changes demand immediate attention
  PRODUCT: 0.85, // Feature moves affect roadmap
  POSITIONING: 0.75, // Messaging shifts signal strategy changes
  TALENT: 0.65, // Hiring signals future direction
  MARKETING: 0.50, // Blog/content is informational
  LEGAL: 0.60, // Compliance changes can be important
  OPERATIONS: 0.55, // Infrastructure changes are usually internal
  UNKNOWN: 0.40, // Unclassified = lower signal
};

/** Severity maps to a normalized 0–1 value for scoring */
const SEVERITY_SCORE: Record<Severity, number> = {
  LOW: 0.25,
  MEDIUM: 0.50,
  HIGH: 0.80,
  CRITICAL: 1.0,
};

export interface SignalScoreInput {
  /** AI confidence 0–100 (as returned by detectChanges) */
  confidence: number;
  severity: Severity;
  changeType: ChangeType;
  contentZone: ContentZone;
  /** Number of total changes detected in the same snapshot batch */
  batchSize: number;
}

/**
 * Compute a composite signal score (0.0–1.0) for a detected change.
 * Higher scores indicate stronger, more actionable signals.
 */
export function computeSignalScore(input: SignalScoreInput): number {
  const confidenceNorm = Math.max(0, Math.min(1, input.confidence / 100));
  const severityNorm = SEVERITY_SCORE[input.severity];
  const typeReliability = CHANGE_TYPE_RELIABILITY[input.changeType];
  const zoneImportance = ZONE_IMPORTANCE[input.contentZone];

  // Corroboration: multiple changes in a batch suggests a real update,
  // but with diminishing returns. Single change = 0.3, 2 = 0.6, 3+ = 0.8+
  const corroboration = Math.min(1.0, 0.3 + 0.25 * Math.min(input.batchSize - 1, 3));

  const score =
    WEIGHTS.confidence * confidenceNorm +
    WEIGHTS.severity * severityNorm +
    WEIGHTS.changeTypeReliability * typeReliability +
    WEIGHTS.zoneImportance * zoneImportance +
    WEIGHTS.corroboration * corroboration;

  // Clamp to 0–1 (should already be in range given valid inputs)
  return Math.max(0, Math.min(1, Math.round(score * 1000) / 1000));
}

/**
 * Minimum signal score thresholds for different actions.
 * These replace the previous raw confidence thresholds.
 */
export const SIGNAL_THRESHOLDS = {
  /** Minimum score to persist a change (replaces MIN_CONFIDENCE=40) */
  PERSIST: 0.30,
  /** Minimum score to trigger an instant alert (replaces ALERT_MIN_CONFIDENCE=70) */
  INSTANT_ALERT: 0.60,
} as const;

/**
 * Get a human-readable label for a signal score.
 */
export function signalLabel(score: number): { text: string; className: string } | null {
  if (score >= 0.8) return null; // Strong signal — no flag needed
  if (score >= 0.6) return { text: "Moderate", className: "text-yellow-600 bg-yellow-50 border-yellow-200" };
  if (score >= 0.4) return { text: "Weak", className: "text-amber-700 bg-amber-50 border-amber-200" };
  return { text: "Noise", className: "text-gray-500 bg-gray-50 border-gray-200" };
}
