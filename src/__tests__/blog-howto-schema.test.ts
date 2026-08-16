import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPostBySlug } from "@/lib/blog";

/**
 * Regression guard for the optional HowTo JSON-LD emitted by /blog/[slug]
 * when a post's frontmatter defines a step-by-step tutorial.
 *
 * The competitive-analysis-template-2026 post (ticket d2a5) is the first
 * blog post shipped with `howto_name` + `howto_steps` frontmatter. If the
 * blog page template ever drops the HowTo emit block or the lib stops
 * parsing the frontmatter fields, this test fails loudly instead of the
 * post silently losing its "How to" rich-result eligibility.
 *
 * Same drift-guard pattern as blog-index-schema.test.ts and
 * compare-hub-schema.test.ts — schema/content parity is a runtime contract
 * that tsc can't check.
 */

const repoRoot = process.cwd();
const blogSlugPagePath = path.join(
  repoRoot,
  "src",
  "app",
  "blog",
  "[slug]",
  "page.tsx",
);
const templatePostPath = path.join(
  repoRoot,
  "content",
  "marketing",
  "queue",
  "blog",
  "2026-05-17-competitive-analysis-template-2026.md",
);

describe("/blog/[slug] HowTo JSON-LD", () => {
  const pageSrc = fs.readFileSync(blogSlugPagePath, "utf-8");

  it("blog post page builds the HowTo JSON-LD payload", () => {
    // If someone deletes the howtoJsonLd block or renames the frontmatter
    // fields, this test fails before the change ships. Losing the emit
    // silently costs the post its featured-snippet eligibility.
    expect(pageSrc).toMatch(/const howtoJsonLd\s*=/);
    expect(pageSrc).toContain('"@type": "HowTo"');
    expect(pageSrc).toContain('"@type": "HowToStep"');
  });

  it("blog post page mounts the HowTo <script> conditionally", () => {
    // The <script> must be gated on howtoJsonLd so posts without the
    // frontmatter don't emit an empty HowTo (which triggers a Google
    // "invalid rich result" warning).
    expect(pageSrc).toMatch(
      /\{howtoJsonLd && \(\s*<script/,
    );
  });

  it("competitive-analysis-template-2026 post defines howto_name + steps", () => {
    // Ship-time proof that the first HowTo-enabled post has the frontmatter
    // the emit block expects. If someone drops the frontmatter later, the
    // rich result quietly disappears.
    const raw = fs.readFileSync(templatePostPath, "utf-8");
    const { data } = matter(raw);
    expect(data.status).toBe("ready");
    expect(typeof data.howto_name).toBe("string");
    expect((data.howto_name as string).length).toBeGreaterThan(10);
    expect(Array.isArray(data.howto_steps)).toBe(true);
    expect((data.howto_steps as unknown[]).length).toBeGreaterThanOrEqual(5);
  });

  it("getPostBySlug parses howto frontmatter into typed fields", () => {
    // Contract between the lib and the page template: the page reads
    // post.howtoName + post.howtoSteps; the lib must populate them.
    const post = getPostBySlug("competitive-analysis-template-2026");
    expect(post).not.toBeNull();
    expect(post!.howtoName).toMatch(/competitive analysis/i);
    expect(post!.howtoSteps).toBeDefined();
    expect(post!.howtoSteps!.length).toBeGreaterThanOrEqual(5);
    // Every step must have a non-empty name + text (schema.org HowToStep
    // shape). Empty strings would be rejected by Google's validator.
    for (const step of post!.howtoSteps!) {
      expect(step.name.length).toBeGreaterThan(0);
      expect(step.text.length).toBeGreaterThan(0);
    }
  });

  it("posts without howto frontmatter get undefined howto fields", () => {
    // Guard: the presence of the parser must not accidentally attach
    // howto* fields to posts that don't opt in. Otherwise every post
    // would emit an empty HowTo and trigger validator warnings.
    const post = getPostBySlug("competitive-battlecard-template");
    expect(post).not.toBeNull();
    expect(post!.howtoName).toBeUndefined();
    expect(post!.howtoSteps).toBeUndefined();
  });
});
