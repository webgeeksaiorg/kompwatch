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

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords: string[];
};

export type BlogPost = BlogPostMeta & {
  body: string;
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

  return { slug, title, description, date, keywords, body: content };
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
