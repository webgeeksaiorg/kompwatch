import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/**
 * Regression guard for BreadcrumbList JSON-LD on top-level marketing pages.
 *
 * These pages get significant organic traffic and BreadcrumbList schema
 * enables enhanced SERP display (hierarchy shown instead of raw URL). If
 * anyone removes the BreadcrumbSchema mount during a refactor, we lose the
 * rich result silently — tsc won't catch it. This test catches it.
 *
 * Related ships:
 *   - 583210a — FAQPage + HowTo on /switch hub
 *   - 35af2a3 — FAQPage + ItemList + BreadcrumbList on /compare hub
 *   - d45c5ac — BreadcrumbList on /pricing, /faq, /security, /demo, /blog
 *   - 3374fa3 — BreadcrumbList on /llm-visibility, /changelog, /free-snapshot
 *   - 176319a — BreadcrumbList on /privacy, /terms, /sample-digest, /pulse
 *   - (this ticket) — extend regression guard to 3 ICP landing pages
 *     (/for-product-teams, /for-marketing-agencies, /for-semrush-users)
 *     which already mounted BreadcrumbSchema but were not covered by this
 *     test. High-organic-value pages that must not silently lose the schema.
 */

const repoRoot = process.cwd();

const pagesWithBreadcrumb: { path: string; label: string; url: string }[] = [
  { path: "src/app/pricing/page.tsx", label: "Pricing", url: "/pricing" },
  { path: "src/app/faq/page.tsx", label: "FAQ", url: "/faq" },
  { path: "src/app/security/page.tsx", label: "Security", url: "/security" },
  { path: "src/app/demo/page.tsx", label: "Demo", url: "/demo" },
  { path: "src/app/blog/page.tsx", label: "Blog", url: "/blog" },
  {
    path: "src/app/llm-visibility/page.tsx",
    label: "LLM Visibility",
    url: "/llm-visibility",
  },
  {
    path: "src/app/changelog/page.tsx",
    label: "Changelog",
    url: "/changelog",
  },
  {
    path: "src/app/free-snapshot/page.tsx",
    label: "Free Snapshot",
    url: "/free-snapshot",
  },
  {
    path: "src/app/privacy/page.tsx",
    label: "Privacy",
    url: "/privacy",
  },
  {
    path: "src/app/terms/page.tsx",
    label: "Terms",
    url: "/terms",
  },
  {
    path: "src/app/sample-digest/page.tsx",
    label: "Sample Digest",
    url: "/sample-digest",
  },
  {
    path: "src/app/pulse/page.tsx",
    label: "SaaS Pulse",
    url: "/pulse",
  },
  {
    path: "src/app/for-product-teams/page.tsx",
    label: "KompWatch for Product Teams",
    url: "/for-product-teams",
  },
  {
    path: "src/app/for-marketing-agencies/page.tsx",
    label: "KompWatch for Marketing Agencies",
    url: "/for-marketing-agencies",
  },
  {
    path: "src/app/for-semrush-users/page.tsx",
    label: "KompWatch for Semrush/Kompyte Users",
    url: "/for-semrush-users",
  },
];

describe("Top-level marketing pages — BreadcrumbList JSON-LD", () => {
  for (const page of pagesWithBreadcrumb) {
    it(`${page.url} imports BreadcrumbSchema and mounts it with the right label`, () => {
      const src = fs.readFileSync(
        path.join(repoRoot, page.path),
        "utf-8",
      );

      // Import present — reuse of the shared component, not a copy-paste of
      // the JSON-LD blob.
      expect(src).toMatch(
        /import\s*\{\s*BreadcrumbSchema\s*\}\s*from\s*["']@\/components\/breadcrumb-schema["']/,
      );

      // Mount uses the label + path we expect. Escaping the path so slashes
      // don't get interpreted as regex delimiters.
      const escapedPath = page.url.replace(/\//g, "\\/");
      const mountRe = new RegExp(
        `<BreadcrumbSchema\\s+items=\\{\\[\\{\\s*name:\\s*"${page.label}",\\s*path:\\s*"${escapedPath}"\\s*\\}\\]\\}\\s*\\/>`,
      );
      expect(src).toMatch(mountRe);
    });
  }

  it("BreadcrumbSchema component still emits schema.org BreadcrumbList", () => {
    // Sanity check that the shared component itself hasn't been gutted.
    const src = fs.readFileSync(
      path.join(repoRoot, "src/components/breadcrumb-schema.tsx"),
      "utf-8",
    );
    expect(src).toContain('"@type": "BreadcrumbList"');
    expect(src).toContain('"@type": "ListItem"');
    expect(src).toContain("application/ld+json");
  });
});
