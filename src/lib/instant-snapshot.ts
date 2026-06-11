/**
 * Lightweight fetch-based competitor analysis for the free instant snapshot.
 * Does NOT use Playwright — uses standard fetch() to keep it fast and safe
 * for public-facing endpoints.
 */

const FETCH_TIMEOUT = 10_000;
const USER_AGENT =
  "Mozilla/5.0 (compatible; KompWatchBot/1.0; +https://kompwatch.com/bot)";

async function fetchPage(url: string): Promise<{ html: string; status: number } | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(FETCH_TIMEOUT),
      redirect: "follow",
    });
    if (res.status >= 400) return null;
    const html = await res.text();
    return { html, status: res.status };
  } catch {
    return null;
  }
}

export function extractMeta(html: string): { title: string | null; description: string | null } {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
  return {
    title: titleMatch?.[1]?.trim() ?? null,
    description: descMatch?.[1]?.trim() ?? null,
  };
}

export function extractTechStack(html: string): string[] {
  const tech: string[] = [];
  const checks: [RegExp, string][] = [
    [/react/i, "React"],
    [/vue/i, "Vue"],
    [/angular/i, "Angular"],
    [/next/i, "Next.js"],
    [/nuxt/i, "Nuxt"],
    [/svelte/i, "Svelte"],
    [/jquery/i, "jQuery"],
    [/stripe\.com|stripe\.js/i, "Stripe"],
    [/segment\.com|analytics\.js/i, "Segment"],
    [/intercom/i, "Intercom"],
    [/hubspot/i, "HubSpot"],
    [/zendesk/i, "Zendesk"],
    [/drift/i, "Drift"],
    [/hotjar/i, "Hotjar"],
    [/google-analytics|gtag|googletagmanager/i, "Google Analytics"],
    [/cloudflare/i, "Cloudflare"],
    [/wp-content|wordpress/i, "WordPress"],
    [/shopify/i, "Shopify"],
    [/webflow/i, "Webflow"],
  ];

  // Only check script tags and meta tags to reduce false positives
  const scriptSection =
    html.match(/<script[^>]*src=["'][^"']+["'][^>]*>/gi)?.join(" ") ?? "";
  const metaSection =
    html.match(/<meta[^>]+content=["'][^"']+["'][^>]*>/gi)?.join(" ") ?? "";
  const combined = scriptSection + " " + metaSection;

  for (const [pattern, name] of checks) {
    if (pattern.test(combined)) tech.push(name);
  }
  return [...new Set(tech)];
}

function countHeadings(html: string): number {
  return (html.match(/<h[1-3][^>]*>/gi) || []).length;
}

export function extractBlogTitles(html: string): string[] {
  const titles: string[] = [];
  const patterns = [
    /<article[^>]*>[\s\S]*?<h[23][^>]*>([^<]+)<\/h[23]>/gi,
    /<h[23][^>]*class=["'][^"']*(?:post|blog|article|entry)[^"']*["'][^>]*>([^<]+)<\/h[23]>/gi,
    /<a[^>]*class=["'][^"']*(?:post|blog|article|entry)[^"']*["'][^>]*>([^<]+)<\/a>/gi,
  ];
  for (const pat of patterns) {
    let m;
    while ((m = pat.exec(html)) !== null) {
      const text = m[1].trim();
      if (text.length > 5 && text.length < 200) titles.push(text);
    }
  }
  return [...new Set(titles)].slice(0, 10);
}

export function extractJobTitles(html: string): string[] {
  const titles: string[] = [];
  const patterns = [
    /<[^>]*class=["'][^"']*(?:job|position|role|opening|career)[^"']*["'][^>]*>[\s\S]*?<h[23][^>]*>([^<]+)<\/h[23]>/gi,
    /<h[23][^>]*>([^<]*(?:engineer|developer|designer|manager|analyst|scientist|director|lead|head of)[^<]*)<\/h[23]>/gi,
  ];
  for (const pat of patterns) {
    let m;
    while ((m = pat.exec(html)) !== null) {
      const text = m[1].trim();
      if (text.length > 3 && text.length < 120) titles.push(text);
    }
  }
  return [...new Set(titles)].slice(0, 15);
}

export function detectPricingSignals(html: string): string[] {
  const signals: string[] = [];
  const priceMatches = html.match(/\$\d[\d,]*(?:\.\d{2})?(?:\s*\/\s*mo(?:nth)?)?/gi);
  if (priceMatches && priceMatches.length > 0) {
    const unique = [...new Set(priceMatches.map((p) => p.trim()))].slice(0, 5);
    signals.push(`Pricing detected: ${unique.join(", ")}`);
  }
  if (/free\s*(?:plan|tier|trial)/i.test(html)) {
    signals.push("Free tier or trial offered");
  }
  if (/enterprise/i.test(html)) {
    signals.push("Enterprise tier mentioned");
  }
  if (/contact\s*(?:us|sales)|request\s*(?:a\s*)?demo/i.test(html)) {
    signals.push("Sales-led motion detected (contact/demo CTA)");
  }
  return signals;
}

export interface SnapshotResult {
  url: string;
  homepage: {
    title: string | null;
    description: string | null;
    techStack: string[];
    headingCount: number;
    reachable: boolean;
  };
  pricing: {
    found: boolean;
    signals: string[];
    pageUrl: string | null;
  };
  blog: {
    found: boolean;
    titles: string[];
    pageUrl: string | null;
  };
  careers: {
    found: boolean;
    titles: string[];
    pageUrl: string | null;
  };
  signalCount: number;
  analysisTimeMs: number;
}

const PRICING_PATHS = ["/pricing", "/plans", "/#pricing"];
const BLOG_PATHS = ["/blog", "/articles", "/news", "/resources"];
const CAREERS_PATHS = ["/careers", "/jobs", "/about/careers"];

async function findFirstPage(
  baseUrl: string,
  paths: string[]
): Promise<{ html: string; url: string } | null> {
  for (const path of paths) {
    const url = baseUrl.replace(/\/$/, "") + path;
    const result = await fetchPage(url);
    if (result) return { html: result.html, url };
  }
  return null;
}

export async function analyzeCompetitor(url: string): Promise<SnapshotResult> {
  const start = Date.now();

  // Normalize URL
  let baseUrl = url;
  if (!/^https?:\/\//i.test(baseUrl)) baseUrl = `https://${baseUrl}`;
  baseUrl = baseUrl.replace(/\/$/, "");

  // Fetch homepage
  const homepageResult = await fetchPage(baseUrl);

  const homepage = {
    title: null as string | null,
    description: null as string | null,
    techStack: [] as string[],
    headingCount: 0,
    reachable: false,
  };

  if (homepageResult) {
    homepage.reachable = true;
    const meta = extractMeta(homepageResult.html);
    homepage.title = meta.title;
    homepage.description = meta.description;
    homepage.techStack = extractTechStack(homepageResult.html);
    homepage.headingCount = countHeadings(homepageResult.html);
  }

  // Fetch pricing, blog, careers in parallel
  const [pricingResult, blogResult, careersResult] = await Promise.all([
    findFirstPage(baseUrl, PRICING_PATHS),
    findFirstPage(baseUrl, BLOG_PATHS),
    findFirstPage(baseUrl, CAREERS_PATHS),
  ]);

  const pricing = {
    found: !!pricingResult,
    signals: pricingResult ? detectPricingSignals(pricingResult.html) : [],
    pageUrl: pricingResult?.url ?? null,
  };

  const blog = {
    found: !!blogResult,
    titles: blogResult ? extractBlogTitles(blogResult.html) : [],
    pageUrl: blogResult?.url ?? null,
  };

  const careers = {
    found: !!careersResult,
    titles: careersResult ? extractJobTitles(careersResult.html) : [],
    pageUrl: careersResult?.url ?? null,
  };

  // Count total signals discovered
  let signalCount = 0;
  if (homepage.reachable) signalCount++;
  if (homepage.techStack.length > 0) signalCount += homepage.techStack.length;
  if (pricing.found) signalCount++;
  signalCount += pricing.signals.length;
  if (blog.found) signalCount++;
  signalCount += blog.titles.length;
  if (careers.found) signalCount++;
  signalCount += careers.titles.length;

  return {
    url: baseUrl,
    homepage,
    pricing,
    blog,
    careers,
    signalCount,
    analysisTimeMs: Date.now() - start,
  };
}
