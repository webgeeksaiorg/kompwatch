export type Variant = "A" | "B";

export const PRICING_ANCHOR_EXPERIMENT = "pricing-anchor-monthly-2026-05";
export const HERO_CTA_DEMO_EXPERIMENT = "hero-cta-demo-2026-05";
export const FOUNDING_100_EXPERIMENT = "founding-100-annual-2026-05";
export const HEADSUP_SWITCHER_EXPERIMENT = "headsup-switcher-banner-2026-05";

const STORAGE_PREFIX = "kw-ab-";

interface VariantStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function pickVariant(rng: () => number = Math.random): Variant {
  return rng() < 0.5 ? "A" : "B";
}

export function getOrAssignVariant(
  experiment: string,
  storage: VariantStorage | null,
  rng: () => number = Math.random,
): Variant {
  if (!storage) return pickVariant(rng);
  const key = STORAGE_PREFIX + experiment;
  try {
    const stored = storage.getItem(key);
    if (stored === "A" || stored === "B") return stored;
  } catch {
    return pickVariant(rng);
  }
  const v = pickVariant(rng);
  try {
    storage.setItem(key, v);
  } catch {
    // sessionStorage may be blocked (Safari ITP, private mode, quota) — variant
    // simply won't be sticky for that user; that's acceptable.
  }
  return v;
}

/**
 * Browser-only convenience wrapper. Returns null on the server so callers
 * can keep SSR output stable and assign post-hydration.
 */
export function assignVariantInBrowser(
  experiment: string,
  rng: () => number = Math.random,
): Variant | null {
  if (typeof window === "undefined") return null;
  try {
    return getOrAssignVariant(experiment, window.sessionStorage, rng);
  } catch {
    return pickVariant(rng);
  }
}
