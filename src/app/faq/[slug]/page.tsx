import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import {
  getAllFaqSlugs,
  getFaqEntry,
  getFaqTitle,
  getRelatedFaqSlugs,
} from "@/lib/faq";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllFaqSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getFaqEntry(slug);
  if (!entry) {
    return { title: "FAQ — KompWatch" };
  }
  const description =
    entry.excerpt ||
    "Read the full answer in the KompWatch help center.";
  return {
    title: `${entry.title} — KompWatch FAQ`,
    description,
    alternates: { canonical: `/faq/${entry.slug}` },
    openGraph: {
      title: entry.title,
      description,
      url: `https://kompwatch.com/faq/${entry.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: entry.title,
      description,
    },
  };
}

export default async function FaqEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getFaqEntry(slug);
  if (!entry) notFound();

  const html = marked.parse(entry.body, { async: false }) as string;
  const relatedSlugs = getRelatedFaqSlugs(entry.slug, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: entry.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.excerpt,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Komp<span className="text-brand-600">Watch</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
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
          <Link href="/faq" className="hover:text-brand-700">
            FAQ
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-700">{entry.title}</span>
        </nav>

        <article
          className="faq-article mt-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {relatedSlugs.length > 0 && (
          <section className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Related answers
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedSlugs.map((s) => (
                <li key={s}>
                  <Link
                    href={`/faq/${s}`}
                    className="flex items-start gap-2 text-sm text-brand-700 hover:underline"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {getFaqTitle(s)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Still need help?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We reply to every email within 24 hours.
          </p>
          <a
            href="mailto:support@kompwatch.com"
            className="mt-4 inline-block rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            support@kompwatch.com
          </a>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/faq" className="text-sm text-gray-500 hover:text-gray-700">
              FAQ
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms
            </Link>
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-700">
              Pricing
            </Link>
            <Link href="/changelog" className="text-sm text-gray-500 hover:text-gray-700">
              Changelog
            </Link>
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
