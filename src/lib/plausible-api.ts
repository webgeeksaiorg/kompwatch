/**
 * Plausible Stats API client — read-only analytics queries.
 *
 * Wraps the Plausible v1 Stats API to fetch aggregate metrics,
 * top pages, top sources, and custom-event breakdowns.
 *
 * Requires PLAUSIBLE_API_KEY env var.
 */

const PLAUSIBLE_HOST =
  process.env.PLAUSIBLE_HOST || "https://analytics.webgeeksai.in";
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_API_KEY = process.env.PLAUSIBLE_API_KEY;

// ── Types ──────────────────────────────────────────────────────

export interface PlausibleAggregateMetrics {
  visitors: number;
  pageviews: number;
  bounceRate: number;
  visitDuration: number;
}

export interface PlausiblePageBreakdown {
  page: string;
  visitors: number;
  pageviews: number;
}

export interface PlausibleSourceBreakdown {
  source: string;
  visitors: number;
}

export interface PlausibleEventBreakdown {
  name: string;
  visitors: number;
}

export interface PlausibleStats {
  siteId: string;
  period: string;
  timestamp: string;
  metrics: PlausibleAggregateMetrics;
  topPages: PlausiblePageBreakdown[];
  topSources: PlausibleSourceBreakdown[];
  topEvents: PlausibleEventBreakdown[];
}

// ── Helpers ────────────────────────────────────────────────────

function dateRange(period: string): string {
  const match = period.match(/^(\d+)d$/);
  if (match) {
    const days = parseInt(match[1], 10);
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);
    const fmt = (d: Date) => d.toISOString().slice(0, 10);
    return `${fmt(start)},${fmt(end)}`;
  }
  // Pass through Plausible native periods (month, 6mo, 12mo)
  return period;
}

async function plausibleGet<T>(
  endpoint: string,
  params: Record<string, string>,
): Promise<T> {
  if (!PLAUSIBLE_API_KEY) {
    throw new Error("PLAUSIBLE_API_KEY is not configured");
  }
  if (!PLAUSIBLE_DOMAIN) {
    throw new Error("NEXT_PUBLIC_PLAUSIBLE_DOMAIN is not configured");
  }

  const url = new URL(
    `/api/v1/stats/${endpoint}`,
    PLAUSIBLE_HOST,
  );
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${PLAUSIBLE_API_KEY}` },
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `Plausible API ${res.status}: ${body.slice(0, 300)}`,
    );
  }

  return res.json() as Promise<T>;
}

// ── Public API ─────────────────────────────────────────────────

/**
 * Returns true when both the API key and domain are configured,
 * meaning analytics queries will work.
 */
export function isPlausibleConfigured(): boolean {
  return Boolean(PLAUSIBLE_API_KEY && PLAUSIBLE_DOMAIN);
}

/**
 * Fetch aggregate metrics for a given period.
 */
export async function getAggregateMetrics(
  period = "30d",
): Promise<PlausibleAggregateMetrics> {
  const range = dateRange(period);
  const isCustom = range.includes(",");

  interface AggResponse {
    results: Record<string, { value: number }>;
  }

  const data = await plausibleGet<AggResponse>("aggregate", {
    site_id: PLAUSIBLE_DOMAIN!,
    period: isCustom ? "custom" : range,
    ...(isCustom ? { date: range } : {}),
    metrics: "visitors,pageviews,bounce_rate,visit_duration",
  });

  const r = data.results;
  return {
    visitors: r.visitors?.value ?? 0,
    pageviews: r.pageviews?.value ?? 0,
    bounceRate: r.bounce_rate?.value ?? 0,
    visitDuration: r.visit_duration?.value ?? 0,
  };
}

/**
 * Fetch top pages by visitor count.
 */
export async function getTopPages(
  period = "30d",
  limit = 10,
): Promise<PlausiblePageBreakdown[]> {
  const range = dateRange(period);
  const isCustom = range.includes(",");

  interface BreakdownResponse {
    results: Array<{ page: string; visitors: number; pageviews: number }>;
  }

  const data = await plausibleGet<BreakdownResponse>("breakdown", {
    site_id: PLAUSIBLE_DOMAIN!,
    period: isCustom ? "custom" : range,
    ...(isCustom ? { date: range } : {}),
    property: "event:page",
    metrics: "visitors,pageviews",
    limit: String(limit),
  });

  return data.results.map((r) => ({
    page: r.page,
    visitors: r.visitors,
    pageviews: r.pageviews,
  }));
}

/**
 * Fetch top traffic sources by visitor count.
 */
export async function getTopSources(
  period = "30d",
  limit = 10,
): Promise<PlausibleSourceBreakdown[]> {
  const range = dateRange(period);
  const isCustom = range.includes(",");

  interface BreakdownResponse {
    results: Array<{ source: string; visitors: number }>;
  }

  const data = await plausibleGet<BreakdownResponse>("breakdown", {
    site_id: PLAUSIBLE_DOMAIN!,
    period: isCustom ? "custom" : range,
    ...(isCustom ? { date: range } : {}),
    property: "visit:source",
    metrics: "visitors",
    limit: String(limit),
  });

  return data.results.map((r) => ({
    source: r.source,
    visitors: r.visitors,
  }));
}

/**
 * Fetch top custom events by visitor count (e.g. signup, upgrade-completed).
 */
export async function getTopEvents(
  period = "30d",
  limit = 20,
): Promise<PlausibleEventBreakdown[]> {
  const range = dateRange(period);
  const isCustom = range.includes(",");

  interface BreakdownResponse {
    results: Array<{ name: string; visitors: number }>;
  }

  const data = await plausibleGet<BreakdownResponse>("breakdown", {
    site_id: PLAUSIBLE_DOMAIN!,
    period: isCustom ? "custom" : range,
    ...(isCustom ? { date: range } : {}),
    property: "event:name",
    metrics: "visitors",
    limit: String(limit),
  });

  return data.results.map((r) => ({
    name: r.name,
    visitors: r.visitors,
  }));
}

/**
 * Fetch all stats in a single call — convenience wrapper used
 * by the /api/internal/analytics endpoint.
 */
export async function getAllStats(period = "30d"): Promise<PlausibleStats> {
  const [metrics, topPages, topSources, topEvents] = await Promise.all([
    getAggregateMetrics(period),
    getTopPages(period),
    getTopSources(period),
    getTopEvents(period),
  ]);

  return {
    siteId: PLAUSIBLE_DOMAIN!,
    period,
    timestamp: new Date().toISOString(),
    metrics,
    topPages,
    topSources,
    topEvents,
  };
}
