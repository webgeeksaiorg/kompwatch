/**
 * Parse a Change.details string into its factual portion and the AI-generated
 * "Why this matters" implication. The AI prompt asks Claude to append a line
 * starting with "What this means for you:" — when present, surface it as a
 * distinct callout in dashboard and email.
 */

const IMPLICATION_PREFIX_REGEX = /(?:^|\n)\s*(?:what this means (?:for you|for your team)|why this matters)\s*:\s*/i;

export interface SplitChangeDetails {
  /** Factual portion (the diff/what-changed text). */
  factual: string;
  /** AI strategic-implication portion, or null when not present. */
  implication: string | null;
}

/**
 * Split a Change.details blob into the factual diff portion and the
 * "Why this matters" implication. If no implication marker is present,
 * `implication` is null and `factual` is the original details (trimmed).
 */
export function splitChangeDetails(details: string | null | undefined): SplitChangeDetails {
  if (!details) return { factual: "", implication: null };
  const match = IMPLICATION_PREFIX_REGEX.exec(details);
  if (!match) return { factual: details.trim(), implication: null };
  const factual = details.slice(0, match.index).trim();
  const implication = details.slice(match.index + match[0].length).trim();
  return {
    factual,
    implication: implication || null,
  };
}
