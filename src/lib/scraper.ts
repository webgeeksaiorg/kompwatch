import { chromium, type Browser, type Page } from "playwright";

export interface ScrapedPage {
  html: string | null;
  httpStatus: number | null;
  fetchTimeMs: number;
}

export interface CompetitorSnapshot {
  pricingHtml: string | null;
  featuresHtml: string | null;
  blogTitles: string[];
  jobTitles: string[];
  techStack: string[];
  httpStatus: number | null;
  fetchTimeMs: number;
}

const SCRAPE_TIMEOUT = 30_000;
const PAGE_WAIT = 2_000; // Wait for JS rendering

let _browser: Browser | null = null;

async function getBrowser(): Promise<Browser> {
  if (!_browser || !_browser.isConnected()) {
    _browser = await chromium.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
  return _browser;
}

export async function closeBrowser(): Promise<void> {
  if (_browser && _browser.isConnected()) {
    await _browser.close();
    _browser = null;
  }
}

async function scrapePage(page: Page, url: string): Promise<ScrapedPage> {
  const start = Date.now();
  try {
    const response = await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: SCRAPE_TIMEOUT,
    });
    await page.waitForTimeout(PAGE_WAIT);

    const html = await page.content();
    return {
      html,
      httpStatus: response?.status() ?? null,
      fetchTimeMs: Date.now() - start,
    };
  } catch {
    return { html: null, httpStatus: null, fetchTimeMs: Date.now() - start };
  }
}

function extractTextContent(html: string, selector: string): string | null {
  // Basic extraction — page.evaluate is more reliable but this works for stored HTML
  return html;
}

async function extractFromPage(page: Page, selector: string): Promise<string | null> {
  try {
    const el = await page.$(selector);
    if (!el) return null;
    return await el.innerHTML();
  } catch {
    return null;
  }
}

async function extractListItems(page: Page, selector: string): Promise<string[]> {
  try {
    return await page.$$eval(selector, (els) =>
      els.map((el) => (el.textContent || "").trim()).filter(Boolean)
    );
  } catch {
    return [];
  }
}

/** Common pricing page URL patterns */
function guessPricingUrl(baseUrl: string): string[] {
  const base = baseUrl.replace(/\/$/, "");
  return [`${base}/pricing`, `${base}/plans`, `${base}/#pricing`];
}

/** Common blog page URL patterns */
function guessBlogUrl(baseUrl: string): string[] {
  const base = baseUrl.replace(/\/$/, "");
  return [`${base}/blog`, `${base}/articles`, `${base}/news`];
}

/** Common careers/jobs page URL patterns */
function guessJobsUrl(baseUrl: string): string[] {
  const base = baseUrl.replace(/\/$/, "");
  return [`${base}/careers`, `${base}/jobs`, `${base}/about#careers`];
}

async function scrapeFirstAvailable(
  page: Page,
  urls: string[]
): Promise<{ html: string | null; url: string | null }> {
  for (const url of urls) {
    try {
      const response = await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 15_000,
      });
      if (response && response.status() < 400) {
        await page.waitForTimeout(PAGE_WAIT);
        const html = await page.content();
        return { html, url };
      }
    } catch {
      // Try next URL
    }
  }
  return { html: null, url: null };
}

/**
 * Scrape a competitor's website for pricing, features, blog posts, and job listings.
 * Respects rate limiting by using delays between page loads.
 */
export async function scrapeCompetitor(
  competitorUrl: string,
  options: {
    trackPricing?: boolean;
    trackBlog?: boolean;
    trackFeatures?: boolean;
    trackJobs?: boolean;
    trackTech?: boolean;
  } = {}
): Promise<CompetitorSnapshot> {
  const {
    trackPricing = true,
    trackBlog = true,
    trackFeatures = true,
    trackJobs = true,
  } = options;

  const browser = await getBrowser();
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (compatible; KompWatchBot/1.0; +https://kompwatch.com/bot)",
  });

  const page = await context.newPage();
  const start = Date.now();
  let httpStatus: number | null = null;

  let pricingHtml: string | null = null;
  let featuresHtml: string | null = null;
  const blogTitles: string[] = [];
  const jobTitles: string[] = [];
  const techStack: string[] = [];

  try {
    // 1. Scrape main page for features and tech detection
    if (trackFeatures) {
      const mainResult = await scrapePage(page, competitorUrl);
      httpStatus = mainResult.httpStatus;
      featuresHtml = mainResult.html;

      // Detect technologies from meta tags and scripts
      techStack.push(
        ...(await page.$$eval(
          'meta[name="generator"], script[src]',
          (els) =>
            els
              .map((el) => {
                if (el.tagName === "META")
                  return (el as HTMLMetaElement).content;
                const src = (el as HTMLScriptElement).src;
                if (src.includes("react")) return "React";
                if (src.includes("vue")) return "Vue";
                if (src.includes("angular")) return "Angular";
                if (src.includes("jquery")) return "jQuery";
                if (src.includes("stripe")) return "Stripe";
                if (src.includes("segment")) return "Segment";
                if (src.includes("intercom")) return "Intercom";
                if (src.includes("hubspot")) return "HubSpot";
                return null;
              })
              .filter(Boolean) as string[]
        ))
      );
    }

    // 2. Scrape pricing page
    if (trackPricing) {
      const pricingResult = await scrapeFirstAvailable(
        page,
        guessPricingUrl(competitorUrl)
      );
      pricingHtml = pricingResult.html;
    }

    // 3. Scrape blog titles
    if (trackBlog) {
      const blogResult = await scrapeFirstAvailable(
        page,
        guessBlogUrl(competitorUrl)
      );
      if (blogResult.html) {
        // Extract blog post titles from common patterns
        const titles = await extractListItems(
          page,
          "article h2, article h3, .post-title, .blog-title, h2 a, h3 a"
        );
        blogTitles.push(...titles.slice(0, 20));
      }
    }

    // 4. Scrape job listings
    if (trackJobs) {
      const jobsResult = await scrapeFirstAvailable(
        page,
        guessJobsUrl(competitorUrl)
      );
      if (jobsResult.html) {
        const titles = await extractListItems(
          page,
          ".job-title, .position-title, h3, h2, [class*='job'] h3, [class*='position'] h3"
        );
        jobTitles.push(...titles.slice(0, 50));
      }
    }
  } finally {
    await context.close();
  }

  return {
    pricingHtml,
    featuresHtml,
    blogTitles,
    jobTitles,
    techStack: [...new Set(techStack)],
    httpStatus,
    fetchTimeMs: Date.now() - start,
  };
}
