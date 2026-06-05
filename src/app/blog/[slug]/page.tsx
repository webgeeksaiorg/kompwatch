import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { EmailCaptureForm } from "@/components/email-capture-form";

const siteUrl = "https://kompwatch.com";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog — KompWatch" };

  return {
    title: `${post.title} — KompWatch Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: `${post.date}T00:00:00Z`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

/**
 * Extract FAQ question/answer pairs from the raw markdown body.
 * Expects a section starting with **FAQ** followed by bold questions and plain-text answers.
 */
function extractFaqPairs(
  markdown: string,
): { question: string; answer: string }[] {
  // Find the FAQ section — starts with a line that is just **FAQ**
  const faqIdx = markdown.indexOf("\n**FAQ**\n");
  if (faqIdx === -1) return [];

  const faqSection = markdown.slice(faqIdx);

  // Match bold questions followed by answer text
  const pairs: { question: string; answer: string }[] = [];
  const re = /\*\*(.+?)\*\*\n([\s\S]*?)(?=\n\*\*|$)/g;
  let match: RegExpExecArray | null;

  // Skip the first match which is the "FAQ" heading itself
  let isFirst = true;
  while ((match = re.exec(faqSection)) !== null) {
    if (isFirst) {
      isFirst = false;
      continue;
    }
    const question = match[1].trim();
    const answer = match[2].trim();
    if (question && answer) {
      pairs.push({ question, answer });
    }
  }

  return pairs;
}

/**
 * Split rendered HTML roughly in half (after the mid-point paragraph)
 * so we can inject the email capture CTA between the two halves.
 */
function splitHtml(html: string): [string, string] {
  // Split on closing </p>, </ul>, </ol>, or </blockquote> tags
  const blockEndRe = /<\/(?:p|ul|ol|blockquote|h[23456])>/gi;
  const matches = [...html.matchAll(blockEndRe)];
  if (matches.length < 4) return [html, ""];

  // Insert CTA roughly 40% through the article
  const target = Math.floor(matches.length * 0.4);
  const splitIndex =
    (matches[target].index ?? 0) + matches[target][0].length;

  return [html.slice(0, splitIndex), html.slice(splitIndex)];
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = marked.parse(post.body, { async: false }) as string;
  const [firstHalf, secondHalf] = splitHtml(html);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T00:00:00Z`,
    author: { "@type": "Organization", name: "KompWatch" },
    publisher: { "@type": "Organization", name: "KompWatch" },
    url: `${siteUrl}/blog/${post.slug}`,
  };

  const faqPairs = extractFaqPairs(post.body);
  const faqJsonLd =
    faqPairs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqPairs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-900"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link
              href="/login"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <Link href="/blog" className="hover:text-brand-700">
            Blog
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        <time
          dateTime={post.date}
          className="mt-4 block text-sm text-gray-400"
        >
          {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        {/* First half of the article */}
        <article
          className="blog-article prose prose-gray mt-6 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: firstHalf }}
        />

        {/* Inline email capture CTA */}
        {secondHalf && (
          <aside className="my-10 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Get competitor insights in your inbox
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              KompWatch tracks competitor pricing, features, and content changes
              — and sends you an AI-analyzed digest. Free to start, no credit
              card required.
            </p>
            <div className="mt-4">
              <EmailCaptureForm
                source="blog"
                event="blog-email-capture"
                buttonLabel="Start free"
                placeholder="you@company.com"
                successMessage="You're in — check your inbox for next steps."
              />
            </div>
          </aside>
        )}

        {/* Second half of the article */}
        {secondHalf && (
          <article
            className="blog-article prose prose-gray max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: secondHalf }}
          />
        )}

        {/* Bottom CTA */}
        <section className="mt-16 rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Stop checking competitor websites manually
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            KompWatch monitors competitor changes and sends you AI-analyzed
            digests. Free plan includes 2 competitors.
          </p>
          <Link
            href="/login"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free &rarr;
          </Link>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/blog"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              FAQ
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
