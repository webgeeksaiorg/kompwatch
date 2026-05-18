import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { ComparisonFAQ } from "@/components/comparison-faq";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { CompetitorUrlCapture } from "@/components/competitor-url-capture";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Semrush Kompyte Alternative — Independent CI from $49/mo | KompWatch",
  description:
    "Adobe acquired Semrush. Kompyte is now three layers deep. KompWatch is the independent competitor monitoring alternative — self-serve, AI-powered digests, from $49/mo. No sales call.",
  keywords: [
    "Semrush Kompyte alternative",
    "Kompyte alternative after Adobe acquisition",
    "Adobe Semrush competitive intelligence",
    "Semrush competitive intelligence alternative",
    "Kompyte by Semrush replacement",
    "competitor monitoring without Semrush",
    "independent competitive intelligence tool",
    "Kompyte migration",
    "Semrush acquisition CI impact",
    "competitive intelligence SaaS",
  ],
  alternates: {
    canonical: `${siteUrl}/for-semrush-users`,
  },
  openGraph: {
    title: "KompWatch — Independent CI Alternative for Semrush/Kompyte Users",
    description:
      "Adobe acquired Semrush. Kompyte CI is now buried inside an enterprise suite. KompWatch gives you focused competitor monitoring with AI digests, from $49/mo.",
    url: `${siteUrl}/for-semrush-users`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semrush Kompyte Alternative — KompWatch",
    description:
      "Adobe acquired Semrush. Kompyte is three layers deep. KompWatch is the independent alternative — self-serve, AI-powered, from $49/mo.",
  },
};

const acquisitionConcerns = [
  {
    title: "CI is now three layers deep",
    description:
      "Kompyte was independent, then became \"Kompyte by Semrush.\" Now it's Kompyte inside Semrush inside Adobe. Each acquisition layer adds distance between CI users and the team building the product.",
  },
  {
    title: "Enterprise pricing pressure",
    description:
      "Adobe monetizes through enterprise contracts and annual commitments. Historically, acquired tools see price increases and sales-led motions within 12–18 months. Self-serve access often disappears.",
  },
  {
    title: "Roadmap deprioritization risk",
    description:
      "In a $9B acquisition, Semrush's SEO and content marketing tools are the revenue drivers. Kompyte's CI features compete for engineering resources against the core suite — and CI rarely wins that fight.",
  },
];

const whatYouKeep = [
  "Website change monitoring (pricing, features, blog, careers)",
  "AI-generated change summaries and digests",
  "Email digest delivery (weekly, daily, or real-time)",
  "Slack and Microsoft Teams webhook alerts",
  "CSS selector targeting for precision monitoring",
  "MCP server for AI assistant integration",
];

const whatGetsBetter = [
  {
    label: "Cost",
    detail: "Kompyte starts ~$8K/yr with annual lock-in. KompWatch Pro is $49/mo ($588/yr) — 13x less.",
  },
  {
    label: "Onboarding",
    detail: "Self-serve signup, no sales call. First insights within 24 hours.",
  },
  {
    label: "AI digests",
    detail: "Claude-powered summaries that explain what changed and why it matters — not just diff output.",
  },
  {
    label: "Instant pricing alerts",
    detail: "Pricing changes trigger immediate email alerts on Pro+, not just the next digest cycle.",
  },
  {
    label: "Independence",
    detail: "KompWatch is founder-led and focused solely on competitor monitoring. No suite bloat, no acquisition risk.",
  },
];

const migrationSteps = [
  {
    step: 1,
    title: "Sign up (free, 30 seconds)",
    description:
      "Create your account at kompwatch.com. No credit card, no sales call. Free plan includes 2 competitors.",
  },
  {
    step: 2,
    title: "Recreate your competitor list",
    description:
      "Open your Kompyte dashboard, note the URLs you track. Paste them into KompWatch — about 1 minute per competitor.",
  },
  {
    step: 3,
    title: "Set CSS selectors for precision",
    description:
      "Target specific page sections (e.g. .pricing-table, #features) instead of full-page monitoring. This reduces noise and improves change detection quality.",
  },
  {
    step: 4,
    title: "Connect Slack or Teams (optional)",
    description:
      "Route AI digests to your #competitive-intel channel. Configure webhook endpoints per change type — pricing alerts to one channel, feature changes to another.",
  },
  {
    step: 5,
    title: "First insights within 24 hours",
    description:
      "Snapshots run immediately. Change detection begins after the second scan — typically within hours on Pro, 24 hours on Free.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "What happened with Adobe and Semrush?",
    answer:
      "Adobe completed its acquisition of Semrush on April 28, 2026 for approximately $9 billion. Semrush's tools — including Kompyte — are now part of the Adobe product portfolio. Kompyte was already acquired by Semrush in 2022, so it's now a product within a product within Adobe.",
  },
  {
    question: "Will Kompyte still exist after the Adobe acquisition?",
    answer:
      "It's too early to say with certainty. Adobe hasn't announced specific plans for Kompyte. But the pattern with enterprise acquisitions is consolidation: standalone products either get folded into the parent suite or receive reduced investment. If you depend on Kompyte for daily CI workflows, it's worth having a backup plan.",
  },
  {
    question: "How does KompWatch pricing compare to Kompyte?",
    answer:
      "Kompyte requires a sales call and starts at approximately $8,000/yr with annual contracts (based on G2 and Capterra reviews). KompWatch starts free (2 competitors, weekly digest) and Pro is $49/mo ($588/yr) with no annual lock-in — roughly 13x less expensive.",
  },
  {
    question: "Can I import my data from Kompyte?",
    answer:
      "There's no direct import tool. But adding competitors in KompWatch takes about 1 minute each: paste the URL, set a CSS selector, done. Most teams are fully set up in 15 minutes. KompWatch starts monitoring history fresh — export any important battlecard content from Kompyte before canceling.",
  },
  {
    question: "What does KompWatch have that Kompyte doesn't?",
    answer:
      "Instant pricing-change email alerts (Pro+), CSS selector precision targeting, an MCP server for AI assistant integration, content zone classification, and self-serve signup with transparent pricing. KompWatch also delivers Claude-powered AI summaries that explain what changed and why it matters.",
  },
  {
    question: "What does Kompyte have that KompWatch doesn't?",
    answer:
      "Battlecard generation (on our roadmap), win/loss tracking workflows, native CRM integrations (Salesforce, HubSpot), and social media monitoring. If battlecards and CRM sync are must-haves for your sales team, Kompyte may still be the better fit — and we'll say that honestly.",
  },
  {
    question: "Can I run KompWatch alongside Kompyte to compare?",
    answer:
      "Yes — and we recommend it. KompWatch's free tier (2 competitors, weekly digests) lets you run both in parallel at zero cost. Compare digest quality side-by-side for a month before committing. Zero risk.",
  },
  {
    question: "Is KompWatch also going to get acquired?",
    answer:
      "KompWatch is bootstrapped, founder-led, and profitable by design. There are no investors pushing for an exit. Our incentive is to build a product worth paying for, not a product worth acquiring. That said, no one can guarantee the future — but our structure makes acquisition the least likely path.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ForSemrushUsersPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[{ name: "KompWatch for Semrush/Kompyte Users", path: "/for-semrush-users" }]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Nav */}
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
            <Link
              href="/login"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          Adobe acquired Semrush — April 2026
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Kompyte is now three layers deep.{" "}
          <span className="text-brand-600">Your CI shouldn&rsquo;t be.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Adobe&rsquo;s $9B acquisition of Semrush puts Kompyte — already a product-within-a-product
          since 2022 — another layer deeper inside an enterprise suite. If you rely on competitive
          intelligence daily, now is the time to evaluate an independent alternative.
        </p>
        <div className="mt-8 mx-auto max-w-md">
          <CompetitorUrlCapture
            competitor="Semrush"
            placeholder="Enter a competitor URL to start monitoring"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Semrush Hero CTA Click"
            eventProps={{ vertical: "semrush-users" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — no credit card
          </TrackedCTA>
          <Link
            href="#migration"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See migration steps &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever. No sales call. Upgrade when you&rsquo;re ready.
        </p>
      </section>

      {/* Acquisition concerns */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            What the Adobe acquisition means for Kompyte users
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Not speculation — patterns from every major SaaS acquisition.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {acquisitionConcerns.map((concern) => (
              <div key={concern.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="text-sm font-semibold text-gray-900">{concern.title}</div>
                <p className="mt-2 text-sm text-gray-600">{concern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What stays, what gets better */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Everything you use in Kompyte, plus what&rsquo;s better
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-200 bg-brand-50/30 p-6">
              <h3 className="text-base font-semibold text-gray-900">What you keep</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {whatYouKeep.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-900">What gets better</h3>
              {whatGetsBetter.map((item) => (
                <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-sm font-semibold text-brand-700">{item.label}</div>
                  <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="border-y border-gray-100 bg-brand-50 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Not ready to cancel Kompyte? Run both for a month.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
            KompWatch&rsquo;s free plan lets you track 2 competitors alongside Kompyte. Compare the
            AI digest quality side-by-side before committing. Zero risk, zero cost.
          </p>
          <div className="mt-6">
            <TrackedCTA
              href="/login"
              event="Semrush Mid CTA Click"
              eventProps={{ vertical: "semrush-users" }}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free trial alongside Kompyte
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* Migration steps */}
      <section id="migration" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            How to migrate — 5 steps, under 15 minutes
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            No import tool needed. Recreate your setup from scratch in less time than a Kompyte sales call.
          </p>
          <div className="mt-12 space-y-8">
            {migrationSteps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Transparent pricing — no sales call
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              Kompyte: ~$8K/yr + sales call. KompWatch: from $0.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              Month-to-month billing on all paid plans. No annual lock-in. No per-seat fees.
              Your entire team accesses one dashboard.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Free</div>
              <div className="mt-2 text-3xl font-bold">$0<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">2 competitors · weekly digest</div>
              <p className="mt-4 text-sm text-gray-300">
                Run alongside Kompyte at zero cost. Compare digest quality before committing.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Pro · most popular</div>
              <div className="mt-2 text-3xl font-bold">$49<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">10 competitors · daily digest · instant pricing alerts</div>
              <p className="mt-4 text-sm text-gray-300">
                Full Kompyte replacement for most teams. Daily digests, 6-hour scans, instant pricing
                alerts. $588/yr vs ~$8,000/yr.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team</div>
              <div className="mt-2 text-3xl font-bold">$149<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">50 competitors · hourly · API + MCP</div>
              <p className="mt-4 text-sm text-gray-300">
                For teams tracking a wide competitive landscape. Hourly scans, API access,
                MCP server, and webhook alerts.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Semrush Pricing CTA Click"
              eventProps={{ vertical: "semrush-users" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when you need daily digests
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              <Link href="/pricing" className="underline hover:text-white">
                Full pricing details
              </Link>{" "}
              ·{" "}
              <Link href="/switching-from-kompyte" className="underline hover:text-white">
                Kompyte migration guide
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ComparisonFAQ
        competitor="Semrush/Kompyte"
        faqs={faqs}
      />

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Don&rsquo;t wait for the next acquisition update
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Set up KompWatch in 15 minutes. Same competitor monitoring, AI-powered digests,
            13&times; lower cost. Independent and focused on CI.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Semrush Bottom CTA Click"
              eventProps={{ vertical: "semrush-users" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need help migrating from Kompyte?{" "}
            <a href="mailto:support@kompwatch.com" className="underline hover:text-gray-700">
              Email us your competitor list
            </a>{" "}
            and we&rsquo;ll configure your selectors.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms
            </Link>
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-700">
              Pricing
            </Link>
            <Link href="/switching-from-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              Switching from Kompyte
            </Link>
            <Link href="/vs-kompyte" className="text-sm text-gray-500 hover:text-gray-700">
              vs Kompyte
            </Link>
            <Link href="/vs-crayon" className="text-sm text-gray-500 hover:text-gray-700">
              vs Crayon
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
