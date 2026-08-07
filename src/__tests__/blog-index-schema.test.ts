import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/**
 * Regression guard for /blog index JSON-LD.
 *
 * The blog index emits three schema.org rich-result payloads:
 *   1. BreadcrumbList — Home > Blog (pre-existing helper)
 *   2. Blog           — Blog collection with blogPost[] BlogPostings
 *                       (BlogIndexSchema, driven by posts from getAllPosts())
 *   3. ItemList       — Ordered list of every blog post (same posts[] array)
 *
 * Google requires the schema-emitted content to match what the user sees on
 * the page. Both the visible <article> list and the itemListElement/blogPost
 * arrays are driven from the same `posts` variable so drift is impossible.
 * If someone renames the helper, drops the mount, or swaps the data source,
 * this test fails loudly instead of the page silently losing a rich result.
 *
 * Same pattern as compare-hub-schema.test.ts (ticket 35af2a3) and
 * switch-hub-schema.test.ts (ticket 6b63). tsc is silent on this contract
 * because it's runtime/content, not types.
 */

const repoRoot = process.cwd();
const pageTsxPath = path.join(repoRoot, "src", "app", "blog", "page.tsx");

function readPage(): string {
  return fs.readFileSync(pageTsxPath, "utf-8");
}

describe("/blog index JSON-LD schemas", () => {
  const src = readPage();

  it("declares the BlogIndexSchema helper", () => {
    // If the helper is renamed, this test fails loudly instead of the page
    // silently losing two rich results.
    expect(src).toMatch(/function BlogIndexSchema\(/);
  });

  it("mounts BreadcrumbSchema and BlogIndexSchema inside BlogIndexPage", () => {
    // Unmounted schema = zero rich results. Guard against a merge that
    // deletes one of the mount lines.
    expect(src).toMatch(
      /<BreadcrumbSchema items=\{\[\{ name: "Blog", path: "\/blog" \}\]\} \/>/,
    );
    expect(src).toMatch(/<BlogIndexSchema posts=\{posts\} \/>/);
  });

  it("emits the expected schema.org @type strings", () => {
    expect(src).toContain('"@type": "Blog"');
    expect(src).toContain('"@type": "BlogPosting"');
    expect(src).toContain('"@type": "ItemList"');
    expect(src).toContain('"@type": "ListItem"');
  });

  it("Blog + ItemList source from the posts[] array (schema/DOM parity)", () => {
    // Both the visible article list and the JSON-LD payloads iterate over
    // `posts`. If someone hard-codes one and updates the other, drift
    // silently disables the rich result.
    expect(src).toMatch(/blogPost: posts\.map/);
    expect(src).toMatch(/itemListElement: posts\.map/);
    expect(src).toMatch(/\{posts\.map\(\(post\)/);
  });

  it("guards against emitting an empty Blog/ItemList when there are no posts", () => {
    // getAllPosts() returns [] before any markdown exists; emitting an empty
    // blogPost/ItemList triggers a Google "invalid rich result" warning. The
    // page should only mount BlogIndexSchema when posts.length > 0.
    expect(src).toMatch(/posts\.length > 0 && <BlogIndexSchema/);
  });

  it("ItemList URLs align with the visible article links (/blog/{slug})", () => {
    // The visible list links to `/blog/${post.slug}` and the ItemList URLs
    // use `${siteUrl}/blog/${post.slug}`. If the visible href pattern
    // changes without updating the schema, the ItemList URLs will 404 from
    // Google's perspective and the rich result is dropped.
    expect(src).toMatch(/href=\{`\/blog\/\$\{post\.slug\}`\}/);
    expect(src).toMatch(/url: `\$\{siteUrl\}\/blog\/\$\{post\.slug\}`/);
  });

  it("BlogPosting datePublished uses the ISO-8601 form Google expects", () => {
    // datePublished must be an ISO-8601 string; the shipped /blog/[slug]
    // BlogPosting schema uses `${post.date}T00:00:00Z` and this hub must
    // match so Google indexes the collection and articles consistently.
    expect(src).toMatch(/datePublished: `\$\{post\.date\}T00:00:00Z`/);
  });
});
