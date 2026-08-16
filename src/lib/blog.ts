import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(
  process.cwd(),
  "content",
  "marketing",
  "queue",
  "blog",
);

export type BlogHowToStep = {
  name: string;
  text: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
};

export type BlogPost = BlogPostMeta & {
  body: string;
  /**
   * Optional HowTo schema for step-by-step guides. When both `howtoName`
   * and `howtoSteps` are set in the post frontmatter, the blog post page
   * emits schema.org HowTo JSON-LD alongside BlogPosting. This gives the
   * post a shot at rich-result "How to" featured snippets (Google).
   */
  howtoName?: string;
  howtoDescription?: string;
  howtoSteps?: BlogHowToStep[];
};

/**
 * Derive a slug from the filename: strip the YYYY-MM-DD- prefix and .md suffix.
 */
function filenameToSlug(filename: string): string {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
}

/**
 * Extract the date prefix from the filename.
 */
function filenameToDate(filename: string): string {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : "2026-01-01";
}

function parsePost(filename: string): BlogPost | null {
  const filepath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  const slug = filenameToSlug(filename);
  const date = filenameToDate(filename);

  // Extract title from first H1 in the markdown body
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = (data.title as string) || (titleMatch ? titleMatch[1] : slug);

  const description =
    (data.description as string) ||
    content
      .replace(/^#.*$/gm, "")
      .replace(/\n+/g, " ")
      .trim()
      .slice(0, 160);

  const keywords: string[] = Array.isArray(data.keywords) ? data.keywords : [];

  // Optional HowTo schema fields — only emit HowTo JSON-LD when both
  // `howto_name` and a non-empty `howto_steps` array are present.
  // Each step must have {name, text} shape (schema.org HowToStep).
  const howtoName =
    typeof data.howto_name === "string" && data.howto_name.trim().length > 0
      ? data.howto_name.trim()
      : undefined;
  const howtoDescription =
    typeof data.howto_description === "string"
      ? data.howto_description.trim()
      : undefined;
  const howtoSteps: BlogHowToStep[] | undefined = Array.isArray(data.howto_steps)
    ? (data.howto_steps as unknown[])
        .map((raw): BlogHowToStep | null => {
          if (
            raw &&
            typeof raw === "object" &&
            "name" in raw &&
            "text" in raw &&
            typeof (raw as { name: unknown }).name === "string" &&
            typeof (raw as { text: unknown }).text === "string"
          ) {
            const s = raw as { name: string; text: string };
            return { name: s.name.trim(), text: s.text.trim() };
          }
          return null;
        })
        .filter((s): s is BlogHowToStep => s !== null && s.name.length > 0 && s.text.length > 0)
    : undefined;

  return {
    slug,
    title,
    description,
    date,
    keywords,
    body: content,
    howtoName,
    howtoDescription,
    howtoSteps: howtoSteps && howtoSteps.length > 0 ? howtoSteps : undefined,
  };
}

/**
 * Return all published blog posts (status === "ready"), newest first.
 * De-duplicates by slug — keeps the most recent file when multiple exist.
 */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse(); // newest first

  const seen = new Set<string>();
  const posts: BlogPostMeta[] = [];

  for (const file of files) {
    const filepath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filepath, "utf8");
    const { data } = matter(raw);

    if (data.status !== "ready") continue;

    const slug = filenameToSlug(file);
    if (seen.has(slug)) continue;
    seen.add(slug);

    const post = parsePost(file);
    if (!post) continue;

    const { body: _, ...meta } = post;
    posts.push(meta);
  }

  return posts;
}

/**
 * Return all unique slugs for static generation.
 */
export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/**
 * Find and return a full blog post by slug.
 * Returns the most recent file matching the slug.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse();

  for (const file of files) {
    if (filenameToSlug(file) === slug) {
      const post = parsePost(file);
      if (post) return post;
    }
  }

  return null;
}
