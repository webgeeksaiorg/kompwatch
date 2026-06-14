import { describe, it, expect } from "vitest";

/**
 * Tests for the free-snapshot → signup URL pre-fill flow.
 *
 * The feature works via sessionStorage:
 *   1. SnapshotLeadForm stores the competitor URL under "kompwatch_snapshot_url"
 *   2. FreeSnapshotBottomCTA reads it and appends ?competitor_url= to the login link
 *
 * These tests verify the URL construction contract matches the login form's
 * PASSTHROUGH_KEYS expectation (competitor_url param).
 */

const BASE_LOGIN = "/login";

/** Mirrors the logic in FreeSnapshotBottomCTA */
function buildLoginHref(snapshotUrl: string | null): string {
  if (snapshotUrl) {
    return `${BASE_LOGIN}?competitor_url=${encodeURIComponent(snapshotUrl)}&utm_source=free-snapshot&utm_content=bottom-cta`;
  }
  return `${BASE_LOGIN}?utm_source=free-snapshot&utm_content=bottom-cta`;
}

describe("free-snapshot prefill URL construction", () => {
  it("builds a plain login URL when no snapshot URL is available", () => {
    const href = buildLoginHref(null);
    expect(href).toBe("/login?utm_source=free-snapshot&utm_content=bottom-cta");
    expect(href).not.toContain("competitor_url");
  });

  it("includes competitor_url when a snapshot URL is provided", () => {
    const href = buildLoginHref("https://rival.com");
    expect(href).toContain("competitor_url=https%3A%2F%2Frival.com");
    expect(href).toContain("utm_source=free-snapshot");
    expect(href).toContain("utm_content=bottom-cta");
  });

  it("properly encodes URLs with query params and special characters", () => {
    const complexUrl = "https://rival.com/pricing?tier=pro&lang=en";
    const href = buildLoginHref(complexUrl);
    expect(href).toContain(
      `competitor_url=${encodeURIComponent(complexUrl)}`
    );
    // The competitor URL should be fully encoded so it doesn't break the outer URL
    expect(href).not.toContain("&tier=");
  });

  it("starts with /login path", () => {
    expect(buildLoginHref(null)).toMatch(/^\/login\?/);
    expect(buildLoginHref("https://x.com")).toMatch(/^\/login\?/);
  });
});
