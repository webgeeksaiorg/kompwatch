import fs from "node:fs";
import path from "node:path";

const FAQ_DIR = path.join(process.cwd(), "docs", "faq");

export type FaqEntryFull = {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
};

export function getAllFaqSlugs(): string[] {
  if (!fs.existsSync(FAQ_DIR)) return [];
  return fs
    .readdirSync(FAQ_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort();
}

export function getFaqEntry(slug: string): FaqEntryFull | null {
  const file = path.join(FAQ_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const lines = raw.split("\n");

  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace(/^#\s+/, "").trim() : slug;

  const bodyStart = titleLine ? lines.indexOf(titleLine) + 1 : 0;
  const body = lines.slice(bodyStart).join("\n").trim();

  const excerpt = extractExcerpt(body);

  return { slug, title, body: raw, excerpt };
}

export function getRelatedFaqSlugs(currentSlug: string, limit = 4): string[] {
  const all = getAllFaqSlugs().filter((s) => s !== currentSlug);
  const tokens = new Set(currentSlug.split("-").filter((t) => t.length > 2));
  const scored = all.map((slug) => {
    let score = 0;
    for (const t of slug.split("-")) {
      if (tokens.has(t)) score += 1;
    }
    return { slug, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.slug);
}

export function getFaqTitle(slug: string): string {
  const entry = getFaqEntry(slug);
  return entry?.title ?? slug;
}

function extractExcerpt(text: string): string {
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^[#|>\-*`]/.test(trimmed)) continue;
    const stripped = trimmed
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1");
    if (stripped.length > 200) {
      return stripped.slice(0, 200).replace(/\s+\S*$/, "") + "…";
    }
    return stripped;
  }
  return "";
}
