import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title: "Competitor Monitoring for Marketing Agencies — KompWatch",
  description:
    "Track competitor websites across every client account. KompWatch gives marketing agencies automated pricing, feature, and content change alerts — so you brief clients before they brief you.",
  keywords: [
    "competitor monitoring for agencies",
    "competitive intelligence marketing agency",
    "agency competitor tracking tool",
    "marketing agency competitive analysis",
    "multi-client competitor monitoring",
    "agency CI tool",
    "competitor monitoring SaaS for agencies",
    "track competitor websites for clients",
  ],
  alternates: {
    canonical: `${siteUrl}/for-marketing-agencies`,
  },
  openGraph: {
    title: "KompWatch for Marketing Agencies — Competitor Monitoring Across Every Client",
    description:
      "Automated competitor tracking across all your client accounts. Pricing changes, feature launches, content updates — delivered before the client asks.",
    url: `${siteUrl}/for-marketing-agencies`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch for Marketing Agencies",
    description:
      "Track competitor websites across every client account. Automated alerts for pricing, features, and content changes.",
  },
};

const painPoints = [
  {
    title: "Client asks about a competitor move you missed",
    description:
      "A competitor dropped their price two weeks ago and your client found out from a prospect. Now you're scrambling to update positioning decks instead of leading the conversation.",
  },
  {
    title: "Manual checking doesn't scale past 3 clients",
    description:
      "Each client has 3–5 competitors with 4 pages each. That's 60+ URLs to check weekly. Nobody does that consistently — so signals get missed.",
  },
  {
    title: "Enterprise CI tools price per seat, not per client",
    description:
      "Crayon and Klue charge $12K–$100K/yr per organization. Running one instance per client is budget suicide. You need multi-client monitoring on one bill.",
  },
];

const useCases = [
  {
    title: "Proactive client briefings",
    description:
      "Get an AI digest when a client's competitor changes pricing, launches a feature, or publishes new positioning. Brief the client before they brief you.",
    signal: "Pricing page changed · Feature page updated · Blog published",
  },
  {
    title: "Quarterly competitive audits",
    description:
      "Pull 90 days of competitor changes into a structured timeline. Build the competitive section of QBRs from real data, not memory and screenshots.",
    signal: "Change timeline export · Zone-classified changes · Severity scoring",
  },
  {
    title: "Positioning & messaging strategy",
    description:
      "Watch how competitors position themselves across homepage, features, and pricing pages. Spot messaging shifts early and advise clients on counter-positioning.",
    signal: "Content zone classification · AI change summaries · Diff history",
  },
  {
    title: "Pitch defense",
    description:
      "When a client's prospect is also evaluating a competitor, pull the latest competitor intel — pricing, features, recent moves — into a battlecard in minutes.",
    signal: "Competitor snapshots · Pricing history · Feature comparisons",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "Can I monitor competitors for multiple clients on one KompWatch account?",
    answer:
      "Yes. Each competitor you add is just a name + URL. You can organize them however you like — by client, by industry, or by competitor. The Team plan ($149/mo) covers up to 50 competitors, which typically handles 8–12 client accounts at 4–5 competitors each.",
  },
  {
    question: "How do I share competitor alerts with my clients?",
    answer:
      "KompWatch sends email digests (daily or weekly depending on plan) that summarize detected changes with AI-generated explanations. You can forward these to clients, or use the dashboard to pull change timelines for QBR decks. Webhook integrations let you push alerts to Slack or Teams channels shared with clients.",
  },
  {
    question: "What's the cost per client?",
    answer:
      "KompWatch charges per competitor tracked, not per client or seat. On the Team plan ($149/mo for 50 competitors), that's roughly $3/competitor/month. If each client has 5 competitors, you're paying about $15/client/month for automated monitoring — significantly less than the analyst time you'd spend checking manually.",
  },
  {
    question: "Is there an agency or reseller plan?",
    answer:
      "Not yet — the Team plan ($149/mo, 50 competitors) is our current best fit for agencies. If you're tracking more than 50 competitors across clients, email sales@kompwatch.com and we'll work out volume pricing.",
  },
  {
    question: "What kind of changes does KompWatch detect?",
    answer:
      "KompWatch uses a real headless browser (Playwright) to visit competitor pages and detect: pricing changes (new tiers, price increases/decreases, removed plans), feature page updates (new features, removed features, repositioning), blog and changelog posts, hiring signal changes (new job listings), and any other visible content change on the monitored URLs. Changes are classified by zone (pricing, features, content, careers) and severity.",
  },
  {
    question: "How is this different from just setting up Google Alerts for each client?",
    answer:
      "Google Alerts monitors mentions of a keyword across the web — useful for PR tracking, but it doesn't watch the competitor's own website. If a competitor quietly raises prices, adds a new plan, or removes a feature, Google Alerts won't catch it. KompWatch visits the actual pages and diffs them on a schedule.",
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

export default function ForMarketingAgenciesPage() {
  return (
    <div className="bg-white">
      <BreadcrumbSchema
        items={[{ name: "KompWatch for Marketing Agencies", path: "/for-marketing-agencies" }]}
      />
      <SoftwareApplicationSchema />
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
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          Built for marketing agencies
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Brief clients on competitor moves{" "}
          <span className="text-brand-600">before they brief you</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Track competitor pricing, features, and content changes across every client account.
          KompWatch monitors the pages that matter and sends AI-summarized digests —
          so you lead the conversation, not chase it.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <TrackedCTA
            href="/login"
            event="Agency Hero CTA Click"
            eventProps={{ vertical: "marketing-agencies" }}
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Start free — 2 competitors, no credit card
          </TrackedCTA>
          <Link
            href="#use-cases"
            className="text-sm font-semibold text-gray-900 hover:text-brand-600"
          >
            See use cases &rarr;
          </Link>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Free plan forever. Team plan covers 50 competitors (~10 clients).
        </p>
      </section>

      {/* Pain points */}
      <section className="border-y border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            The agency CI problem
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Most agencies find out about competitor moves from the client — not the other way around.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {painPoints.map((point) => (
              <div key={point.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="text-sm font-semibold text-gray-900">{point.title}</div>
                <p className="mt-2 text-sm text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              How agencies use KompWatch
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Four workflows that turn competitor monitoring from a chore into a client retention tool.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-gray-900">{uc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{uc.description}</p>
                <div className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-xs font-medium text-brand-700">
                  {uc.signal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing fit */}
      <section className="border-y border-gray-100 bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Agency pricing
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">
              ~$3/competitor/month on Team — covers 8–12 clients
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
              No per-seat fees. No per-client pricing. One account, one bill.
              Track 50 competitors across all your clients for $149/mo.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Free</div>
              <div className="mt-2 text-3xl font-bold">$0<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">2 competitors · weekly digest</div>
              <p className="mt-4 text-sm text-gray-300">
                Test the workflow with one client. See if automated monitoring fits your process.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Pro</div>
              <div className="mt-2 text-3xl font-bold">$49<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">10 competitors · daily digest</div>
              <p className="mt-4 text-sm text-gray-300">
                Covers 2–3 clients at 3–5 competitors each. Daily digests keep you ahead of weekly QBR cycles.
              </p>
            </div>
            <div className="rounded-xl border border-brand-300 bg-brand-600/10 p-5 ring-1 ring-brand-300">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">Team · best for agencies</div>
              <div className="mt-2 text-3xl font-bold">$149<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="mt-1 text-xs text-gray-400">50 competitors · hourly checks · API</div>
              <p className="mt-4 text-sm text-gray-300">
                The agency sweet spot. 50 competitors covers 8–12 clients. Hourly checks mean you catch moves same-day.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <TrackedCTA
              href="/login"
              event="Agency Pricing CTA Click"
              eventProps={{ vertical: "marketing-agencies" }}
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Start free — upgrade when you&rsquo;re ready
            </TrackedCTA>
            <p className="mt-3 text-xs text-gray-400">
              <Link href="/pricing" className="underline hover:text-white">
                Full pricing details
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            KompWatch for agencies — FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Stop finding out about competitor moves from your clients
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with 2 competitors free. Scale to 50 on Team ($149/mo).
            One account covers every client.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/login"
              event="Agency Bottom CTA Click"
              eventProps={{ vertical: "marketing-agencies" }}
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Need more than 50 competitors?{" "}
            <a href="mailto:sales@kompwatch.com" className="underline hover:text-gray-700">
              Contact sales
            </a>{" "}
            for volume pricing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
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
            <Link href="/for-product-teams" className="text-sm text-gray-500 hover:text-gray-700">
              For product teams
            </Link>
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              All comparisons
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
