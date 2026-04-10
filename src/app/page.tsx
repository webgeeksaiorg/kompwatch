// Landing page — will be built out by builder agent with full copy,
// pricing section, CTA, social proof, etc.
// This is the starter that proves the build works.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Know when competitors{" "}
          <span className="text-brand-600">change anything</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Track competitor pricing, features, blog posts, and job listings.
          Get AI-analyzed weekly digests. Stop manually checking competitor
          websites.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/login"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See pricing &rarr;
          </a>
        </div>
      </div>
    </main>
  );
}
