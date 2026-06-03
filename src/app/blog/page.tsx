import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Blog — KompWatch",
  description:
    "Practical guides on competitor monitoring, pricing tracking, and competitive intelligence for SaaS teams.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: "KompWatch Blog",
    description:
      "Practical guides on competitor monitoring, pricing tracking, and competitive intelligence.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white">
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
            <Link href="/blog" className="text-sm font-medium text-gray-900">
              Blog
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

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Practical guides on competitor monitoring, pricing tracking, and
          competitive intelligence for SaaS teams.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-gray-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="mt-12 divide-y divide-gray-100">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0">
                <time
                  dateTime={post.date}
                  className="text-sm text-gray-400"
                >
                  {new Date(post.date + "T00:00:00").toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" },
                  )}
                </time>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700">
              Blog
            </Link>
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
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
