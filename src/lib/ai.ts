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

export interface DetectedChange {
  changeType: "PRICING" | "FEATURE" | "BLOG" | "JOB" | "TECH" | "GENERAL";
  summary: string;
  details: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
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

  const prompt = `You are analyzing changes to competitor "${competitorName}" website. Compare the previous and current snapshots below and identify meaningful changes.

${diffParts.join("\n\n---\n\n")}

Return a JSON array of changes. Each change should have:
- changeType: one of PRICING, FEATURE, BLOG, JOB, TECH, GENERAL
- summary: one-sentence human-readable summary (e.g., "Increased Pro plan from $49 to $59/mo")
- details: 2-3 sentence explanation of the change and its significance
- severity: LOW (blog post, minor copy), MEDIUM (new feature, job listing), HIGH (pricing change, major feature), CRITICAL (pivot, acquisition signal)

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
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
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
