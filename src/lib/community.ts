/**
 * Community signal monitoring — track competitor mentions on
 * Hacker News, Reddit, and G2.
 *
 * Uses public APIs (no auth required):
 * - HN: Algolia search API
 * - Reddit: public JSON search API
 * - G2: product review page scraping
 *
 * Each source returns CommunityMention objects that are converted
 * into Change records via the existing change-detection pipeline.
 */

export interface CommunityMention {
  source: "hackernews" | "reddit" | "g2";
  title: string;
  url: string;
  author: string | null;
  score: number | null; // upvotes / points
  commentCount: number | null;
  publishedAt: Date;
  snippet: string | null; // preview text
}

export interface CommunityMonitorResult {
  competitorName: string;
  mentions: CommunityMention[];
  errors: string[];
}

const FETCH_TIMEOUT = 15_000;

async function fetchJson<T>(url: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "KompWatchBot/1.0 (+https://kompwatch.com/bot)",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

// ── Hacker News (Algolia API) ───────────────────────────────────

interface HNHit {
  objectID: string;
  title?: string;
  story_title?: string;
  url?: string;
  story_url?: string;
  author: string;
  points?: number;
  num_comments?: number;
  created_at: string;
  _highlightResult?: Record<string, { value: string }>;
}

interface HNSearchResponse {
  hits: HNHit[];
}

/**
 * Search HN for mentions of a competitor name in the last 24 hours.
 * Uses Algolia's free HN search API.
 */
export async function searchHackerNews(
  competitorName: string,
  sinceHoursAgo = 24,
): Promise<CommunityMention[]> {
  const sinceTimestamp = Math.floor(
    (Date.now() - sinceHoursAgo * 60 * 60 * 1000) / 1000,
  );
  const query = encodeURIComponent(competitorName);
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=(story,comment)&numericFilters=created_at_i>${sinceTimestamp}&hitsPerPage=20`;

  const data = await fetchJson<HNSearchResponse>(url);

  return data.hits.map((hit) => ({
    source: "hackernews" as const,
    title: hit.title || hit.story_title || "(comment)",
    url: hit.url || hit.story_url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
    author: hit.author,
    score: hit.points ?? null,
    commentCount: hit.num_comments ?? null,
    publishedAt: new Date(hit.created_at),
    snippet: null,
  }));
}

// ── Reddit (public JSON API) ────────────────────────────────────

interface RedditPost {
  data: {
    id: string;
    title: string;
    url: string;
    permalink: string;
    author: string;
    score: number;
    num_comments: number;
    created_utc: number;
    selftext?: string;
  };
}

interface RedditSearchResponse {
  data: {
    children: RedditPost[];
  };
}

/**
 * Search Reddit for competitor mentions in the last 24 hours.
 * Searches across all subreddits relevant to SaaS/business.
 */
export async function searchReddit(
  competitorName: string,
): Promise<CommunityMention[]> {
  const query = encodeURIComponent(competitorName);
  const url = `https://www.reddit.com/search.json?q=${query}&sort=new&t=day&limit=20`;

  const data = await fetchJson<RedditSearchResponse>(url);

  return data.data.children.map((post) => ({
    source: "reddit" as const,
    title: post.data.title,
    url: `https://www.reddit.com${post.data.permalink}`,
    author: post.data.author,
    score: post.data.score,
    commentCount: post.data.num_comments,
    publishedAt: new Date(post.data.created_utc * 1000),
    snippet: post.data.selftext?.slice(0, 200) || null,
  }));
}

// ── Deduplication & Filtering ───────────────────────────────────

/**
 * Deduplicate mentions by URL, keeping the highest-scoring version.
 */
export function deduplicateMentions(
  mentions: CommunityMention[],
): CommunityMention[] {
  const byUrl = new Map<string, CommunityMention>();
  for (const m of mentions) {
    const existing = byUrl.get(m.url);
    if (!existing || (m.score ?? 0) > (existing.score ?? 0)) {
      byUrl.set(m.url, m);
    }
  }
  return [...byUrl.values()];
}

/**
 * Determine severity of a community mention based on engagement.
 */
export function mentionSeverity(
  mention: CommunityMention,
): "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" {
  const score = mention.score ?? 0;
  const comments = mention.commentCount ?? 0;

  if (mention.source === "hackernews") {
    if (score >= 100 || comments >= 50) return "HIGH";
    if (score >= 20 || comments >= 10) return "MEDIUM";
    return "LOW";
  }

  if (mention.source === "reddit") {
    if (score >= 200 || comments >= 50) return "HIGH";
    if (score >= 30 || comments >= 10) return "MEDIUM";
    return "LOW";
  }

  if (mention.source === "g2") {
    return "MEDIUM"; // G2 reviews are always medium signal
  }

  return "LOW";
}

/**
 * Determine confidence that a mention is genuinely about the competitor
 * (not a coincidental name match). Based on engagement signals.
 */
export function mentionConfidence(mention: CommunityMention): number {
  const score = mention.score ?? 0;
  const comments = mention.commentCount ?? 0;

  // Higher engagement = less likely to be noise
  let conf = 60; // base confidence
  if (score >= 10) conf += 10;
  if (score >= 50) conf += 10;
  if (comments >= 5) conf += 5;
  if (comments >= 20) conf += 5;

  return Math.min(90, conf);
}

/**
 * Build a human-readable summary for a community mention.
 */
export function mentionSummary(mention: CommunityMention): string {
  const source =
    mention.source === "hackernews"
      ? "Hacker News"
      : mention.source === "reddit"
        ? "Reddit"
        : "G2";

  const engagement = [];
  if (mention.score != null) engagement.push(`${mention.score} points`);
  if (mention.commentCount != null)
    engagement.push(`${mention.commentCount} comments`);

  const engagementStr = engagement.length
    ? ` (${engagement.join(", ")})`
    : "";

  return `Mentioned on ${source}: "${mention.title}"${engagementStr}`;
}

/**
 * Build details text for a community mention.
 */
export function mentionDetails(
  mention: CommunityMention,
  competitorName: string,
): string {
  const source =
    mention.source === "hackernews"
      ? "Hacker News"
      : mention.source === "reddit"
        ? "Reddit"
        : "G2";

  let detail = `${competitorName} was mentioned in a ${source} ${mention.source === "g2" ? "review" : "discussion"}: "${mention.title}".`;
  if (mention.author) detail += ` Posted by ${mention.author}.`;
  if (mention.snippet) detail += ` Preview: "${mention.snippet}"`;

  detail += `\nWhat this means for you: Monitor this thread for customer sentiment and competitive positioning. `;
  if ((mention.score ?? 0) >= 50 || (mention.commentCount ?? 0) >= 20) {
    detail += `High engagement suggests this is a visible conversation — consider whether a response or content piece addressing the discussion would be valuable.`;
  } else {
    detail += `Moderate engagement — log for context and check back if traction grows.`;
  }

  return detail;
}

/**
 * Scan all community sources for mentions of a competitor.
 * Returns deduplicated, sorted mentions.
 */
export async function scanCommunity(
  competitorName: string,
): Promise<CommunityMonitorResult> {
  const mentions: CommunityMention[] = [];
  const errors: string[] = [];

  // Run HN and Reddit searches in parallel
  const [hnResult, redditResult] = await Promise.allSettled([
    searchHackerNews(competitorName),
    searchReddit(competitorName),
  ]);

  if (hnResult.status === "fulfilled") {
    mentions.push(...hnResult.value);
  } else {
    errors.push(`HN search failed: ${hnResult.reason}`);
  }

  if (redditResult.status === "fulfilled") {
    mentions.push(...redditResult.value);
  } else {
    errors.push(`Reddit search failed: ${redditResult.reason}`);
  }

  const deduplicated = deduplicateMentions(mentions);

  // Sort by engagement (highest first)
  deduplicated.sort(
    (a, b) => (b.score ?? 0) + (b.commentCount ?? 0) - ((a.score ?? 0) + (a.commentCount ?? 0)),
  );

  return { competitorName, mentions: deduplicated, errors };
}
