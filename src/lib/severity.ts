import type { Severity } from "@prisma/client";

export const SEVERITY_ORDER: readonly Severity[] = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;

export const SEVERITY_RANK: Record<Severity, number> = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
  CRITICAL: 3,
};

/** True when `actual` is at or above the `threshold` severity. */
export function severityMeetsThreshold(actual: Severity, threshold: Severity): boolean {
  return SEVERITY_RANK[actual] >= SEVERITY_RANK[threshold];
}

/** Returns the list of severities at or above `min`, in ascending order. */
export function severitiesAtOrAbove(min: Severity): Severity[] {
  const minRank = SEVERITY_RANK[min];
  return SEVERITY_ORDER.filter((s) => SEVERITY_RANK[s] >= minRank);
}
