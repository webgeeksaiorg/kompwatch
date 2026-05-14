import Anthropic from "@anthropic-ai/sdk";

let _client: Anthropic | null = null;

function getClient(): Anthropic {
  if (!_client) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error("ANTHROPIC_API_KEY is not set");
    }
    _client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _client;
}

export type ContentZoneType =
  | "POSITIONING"
  | "MONETIZATION"
  | "PRODUCT"
  | "MARKETING"
  | "TALENT"
  | "LEGAL"
  | "OPERATIONS"
  | "UNKNOWN";

export interface DetectedChange {
  changeType: "PRICING" | "FEATURE" | "BLOG" | "JOB" | "TECH" | "GENERAL";
  contentZone: ContentZoneType;
  summary: string;
  details: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  confidence: number; // 0–100, AI's confidence this is a real, meaningful change
  pageUrl?: string;
}

/**
 * Compare two snapshots using Claude API and detect meaningful changes.
 * Returns an array of detected changes with AI-generated summaries.
 */
export async function detectChanges(
  competitorName: string,
  previous: {
    pricingHtml?: string | null;
    featuresHtml?: string | null;
    blogTitles?: string[];
    jobTitles?: string[];
    techStack?: string[];
  },
  current: {
    pricingHtml?: string | null;
    featuresHtml?: string | null;
    blogTitles?: string[];
    jobTitles?: string[];
    techStack?: string[];
  }
): Promise<DetectedChange[]> {
  const client = getClient();

  // Build a concise diff summary for the AI to analyze
  const diffParts: string[] = [];

  if (previous.pricingHtml && current.pricingHtml) {
    diffParts.push(
      `PRICING PAGE (previous, truncated):\n${truncateHtml(previous.pricingHtml, 1500)}`,
      `PRICING PAGE (current, truncated):\n${truncateHtml(current.pricingHtml, 1500)}`
    );
  } else if (!previous.pricingHtml && current.pricingHtml) {
    diffParts.push(
      `PRICING PAGE: newly found\n${truncateHtml(current.pricingHtml, 1500)}`
    );
  }

  if (previous.featuresHtml && current.featuresHtml) {
    diffParts.push(
      `FEATURES/MAIN PAGE (previous, truncated):\n${truncateHtml(previous.featuresHtml, 1500)}`,
      `FEATURES/MAIN PAGE (current, truncated):\n${truncateHtml(current.featuresHtml, 1500)}`
    );
  }

  const prevBlogs = previous.blogTitles || [];
  const currBlogs = current.blogTitles || [];
  const newBlogs = currBlogs.filter((t) => !prevBlogs.includes(t));
  const removedBlogs = prevBlogs.filter((t) => !currBlogs.includes(t));
  if (newBlogs.length || removedBlogs.length) {
    diffParts.push(
      `BLOG CHANGES:\nNew posts: ${newBlogs.join(", ") || "none"}\nRemoved: ${removedBlogs.join(", ") || "none"}`
    );
  }

  const prevJobs = previous.jobTitles || [];
  const currJobs = current.jobTitles || [];
  const newJobs = currJobs.filter((t) => !prevJobs.includes(t));
  const removedJobs = prevJobs.filter((t) => !currJobs.includes(t));
  if (newJobs.length || removedJobs.length) {
    diffParts.push(
      `JOB CHANGES:\nNew listings: ${newJobs.join(", ") || "none"}\nRemoved: ${removedJobs.join(", ") || "none"}`
    );
  }

  const prevTech = previous.techStack || [];
  const currTech = current.techStack || [];
  const newTech = currTech.filter((t) => !prevTech.includes(t));
  const removedTech = prevTech.filter((t) => !currTech.includes(t));
  if (newTech.length || removedTech.length) {
    diffParts.push(
      `TECH STACK CHANGES:\nAdded: ${newTech.join(", ") || "none"}\nRemoved: ${removedTech.join(", ") || "none"}`
    );
  }

  // If nothing to compare, return empty
  if (diffParts.length === 0) {
    return [];
  }

  const prompt = `You are a competitive intelligence analyst writing for a SaaS founder, PM, or marketer. You're analyzing changes to competitor "${competitorName}" website. Compare the previous and current snapshots below and identify meaningful changes.

${diffParts.join("\n\n---\n\n")}

Return a JSON array of changes. Each change should have:
- changeType: one of PRICING, FEATURE, BLOG, JOB, TECH, GENERAL
- contentZone: the strategic business area this change relates to. One of:
  - POSITIONING (messaging, value props, taglines, homepage copy)
  - MONETIZATION (pricing, plans, packaging, discounts)
  - PRODUCT (features, capabilities, integrations, API, changelog)
  - MARKETING (blog content, case studies, resources, social proof)
  - TALENT (hiring, team changes, org signals)
  - LEGAL (terms, privacy, compliance, security)
  - OPERATIONS (tech stack, status page, infrastructure)
  - UNKNOWN (cannot classify)
  Note: contentZone is independent of changeType. A blog post announcing a new feature is changeType=BLOG but contentZone=PRODUCT. A pricing page rewording its value prop is changeType=PRICING but contentZone=POSITIONING.
- summary: one-sentence human-readable summary of WHAT changed (e.g., "Increased Pro plan from $49 to $59/mo")
- details: 1-2 sentences describing the change factually, followed on a new line by "What this means for you: " and 1-2 sentences translating the change into a strategic implication for the reader's own positioning, pricing, sales, or roadmap. Be specific and actionable — not generic advice. If a change has no obvious strategic implication, say so honestly ("What this means for you: Likely no immediate action needed — log for context.").
- severity: LOW (blog post, minor copy), MEDIUM (new feature, job listing), HIGH (pricing change, major feature), CRITICAL (pivot, acquisition signal)
- confidence: integer 0–100 indicating how confident you are that this is a real, meaningful change (not noise). Guidelines:
  - 90–100: Clear, unambiguous change with concrete evidence (price changed from X to Y, new feature announced)
  - 70–89: Likely real change but some ambiguity (wording shift that may indicate a positioning change)
  - 50–69: Possible change but could be cosmetic or a false positive (HTML restructure, minor copy edit)
  - 0–49: Probably noise (formatting, whitespace, template variation, A/B test artifact)

Only report REAL changes, not formatting differences. If no meaningful changes, return an empty array.

Respond with ONLY the JSON array, no markdown or explanation.`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  try {
    const parsed = JSON.parse(text) as DetectedChange[];
    if (!Array.isArray(parsed)) return [];
    // Normalise confidence and contentZone: AI returns 0–100 int, clamp to valid range
    return parsed.map((c) => ({
      ...c,
      confidence: clampConfidence(c.confidence),
      contentZone: normalizeContentZone(c.contentZone),
    }));
  } catch {
    return [];
  }
}

const VALID_CONTENT_ZONES: Set<string> = new Set([
  "POSITIONING", "MONETIZATION", "PRODUCT", "MARKETING",
  "TALENT", "LEGAL", "OPERATIONS", "UNKNOWN",
]);

/** Normalize an AI-returned contentZone to a valid ContentZone value */
function normalizeContentZone(raw: unknown): ContentZoneType {
  if (typeof raw === "string" && VALID_CONTENT_ZONES.has(raw)) {
    return raw as ContentZoneType;
  }
  return "UNKNOWN";
}

/** Clamp an AI-returned confidence value (0–100) to a valid 0–100 integer */
function clampConfidence(raw: unknown): number {
  if (typeof raw !== "number" || Number.isNaN(raw)) return 50; // default to medium if missing
  return Math.max(0, Math.min(100, Math.round(raw)));
}

/** Strip HTML tags and truncate to limit token usage */
function truncateHtml(html: string, maxChars: number): string {
  // Strip script/style tags and their content
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (stripped.length <= maxChars) return stripped;
  return stripped.slice(0, maxChars) + "…";
}
