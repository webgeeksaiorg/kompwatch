import type { Metadata } from "next";
import Link from "next/link";
import { TrackedCTA } from "@/components/tracked-cta";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { SoftwareApplicationSchema } from "@/components/software-schema";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  title:
    "Competitor Monitoring Alternatives — Crayon, Klue, Kompyte, Semrush, Visualping, Kompetar | KompWatch",
  description:
    "Ranked alternatives to the six most-searched competitor-monitoring tools: Crayon (post-SoftwareOne), Klue, Kompyte (post-Semrush shake-up), Semrush, Visualping, and Kompetar. Honest side-by-side comparisons for teams shopping for CI software in 2026.",
  keywords: [
    "competitor monitoring alternatives",
    "competitive intelligence alternatives",
    "crayon alternatives",
    "klue alternatives",
    "kompyte alternatives",
    "semrush alternatives for competitor monitoring",
    "visualping alternatives",
    "kompetar alternatives",
    "best competitor tracking tools 2026",
    "affordable competitor monitoring software",
    "kompwatch alternatives",
    "competitor monitoring tools comparison",
    "SaaS competitor tracking alternatives",
  ],
  alternates: {
    canonical: `${siteUrl}/vs`,
  },
  openGraph: {
    title:
      "Competitor Monitoring Alternatives — Crayon, Klue, Kompyte, Semrush, Visualping, Kompetar | KompWatch",
    description:
      "6 ranked alternatives roundups for the most-searched competitor-monitoring tools. Honest comparisons, real pricing, no vendor spin.",
    url: `${siteUrl}/vs`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Monitoring Alternatives — KompWatch",
    description:
      "6 alternatives roundups for Crayon, Klue, Kompyte, Semrush, Visualping, and Kompetar. Honest 2026 pricing + fit-check.",
  },
};

/**
 * Each entry corresponds to an existing /vs/{slug}-alternative page — a
 * "7 best X alternatives" listicle. Keep this list in sync with:
 *   - src/app/vs/{slug}-alternative/page.tsx (the destination listicles)
 *   - src/app/sitemap.ts (sitemap entries under `/vs/*`)
 * Adding a new alternatives listicle? Add the slug here too so it appears
 * in the ItemList JSON-LD and the visible hub grid.
 */
type Alternative = {
  slug: string;
  tool: string;
  title: string;
  audience: string;
  summary: string;
  angle: string;
};

const alternatives: Alternative[] = [
  {
    slug: "crayon-alternative",
    tool: "Crayon",
    title: "7 Best Crayon Alternatives",
    audience: "Teams evaluating CI platforms post-acquisition",
    summary:
      "Crayon was acquired by SoftwareOne in 2024 and roadmap direction has been unclear since. This is the honest roundup of alternatives — enterprise (Klue), lightweight ($49/mo KompWatch), and DIY — with pricing, fit, and 'what Crayon actually did well' for each.",
    angle: "Post-SoftwareOne acquisition · Updated May 2026",
  },
  {
    slug: "klue-alternative",
    tool: "Klue",
    title: "7 Best Klue Alternatives",
    audience: "PMMs & sales enablement priced out of Klue",
    summary:
      "Klue starts around $15K/yr with seat minimums that don't fit teams under 20 sellers. This roundup covers what to use instead — from Crayon (similar tier) to KompWatch ($49/mo) to open-source scrapers — with the 'when Klue is actually the right call' honesty check.",
    angle: "Ranked honestly for teams under 20 sellers",
  },
  {
    slug: "kompyte-alternative",
    tool: "Kompyte",
    title: "7 Best Kompyte Alternatives",
    audience: "Kompyte customers post-Semrush integration",
    summary:
      "Kompyte was acquired by Semrush and rolled into their bundle. Standalone Kompyte pricing has shifted, and standalone customers are re-evaluating. This roundup covers alternatives at every price tier — from Semrush-bundled options to lightweight KompWatch to Klue for enterprise.",
    angle: "Post-Adobe/Semrush shake-up",
  },
  {
    slug: "semrush-alternative",
    tool: "Semrush",
    title: "7 Best Semrush Alternatives for Competitor Monitoring",
    audience: "Teams using Semrush for CI (wrong tool, right instinct)",
    summary:
      "Semrush is an SEO tool with competitor-monitoring bolted on — great for SERP tracking, weak for pricing-page / feature-page / messaging change detection. This is the roundup of tools purpose-built for competitor monitoring, ranked for teams who don't need the SEO suite.",
    angle: "For teams that don't need the full SEO suite",
  },
  {
    slug: "visualping-alternative",
    tool: "Visualping",
    title: "7 Best Visualping Alternatives",
    audience: "Visualping users hitting the 'raw diff' ceiling",
    summary:
      "Visualping is a general-purpose website change monitor — cheap, simple, but noisy for competitor monitoring (every DOM tweak = an alert). This roundup covers tools with AI-classified diffs, competitor-specific dashboards, and useful digests instead of raw pixel-diffs.",
    angle: "For competitor monitoring specifically",
  },
  {
    slug: "kompetar-alternative",
    tool: "Kompetar",
    title: "7 Best Kompetar Alternatives",
    audience: "Kompetar users comparing same-tier ($49/mo) options",
    summary:
      "Kompetar is an honest $49/mo competitor monitor targeting the same SMB buyer we do — but with change alerts instead of AI digests and no free tier. This roundup covers what to use instead if you want AI-classified summaries, severity tagging, or a free plan to validate first.",
    angle: "Same $49/mo tier · AI digests + free tier",
  },
];

// ItemList JSON-LD for /vs hub — surfaces each alternatives roundup as a
// related entity in SERP and helps Google understand the topical cluster.
function ItemListSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KompWatch — Competitor Monitoring Tool Alternatives",
    description:
      "Ranked alternatives roundups for the 6 most-searched competitor-monitoring tools: Crayon, Klue, Kompyte, Semrush, Visualping, and Kompetar.",
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.title,
      url: `${siteUrl}/vs/${alt.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * Hub-level FAQs rendered visibly AND emitted as FAQPage JSON-LD.
 * IMPORTANT: Google FAQPage rich results require the schema question/answer
 * text to match what the user sees. Update both the const and the rendered
 * <dl> together (they render from this array as the single source of truth).
 */
const hubFaqs: { question: string; answer: string }[] = [
  {
    question: "What are the main alternatives to Crayon, Klue, and Kompyte?",
    answer:
      "The main alternatives fall into three tiers. Enterprise CI platforms (Klue, Crayon post-SoftwareOne, Kompyte post-Semrush) run $12K–$100K/yr with sales-team pricing. Mid-market tools (Contify, Similarweb Competitive Suite) sit between. Lightweight tools like KompWatch ($49/mo) focus specifically on 'know what changed on our competitors' sites this week' without the battlecard-authoring or sales-enablement layers. General-purpose website monitors (Visualping, Distill.io) work but are noisy for competitor use because they alert on every DOM change instead of classifying it.",
  },
  {
    question: "How is /vs different from /compare on KompWatch?",
    answer:
      "The /vs pages are 'best alternatives to Tool X' roundups — listicles ranking 7 competitors of a given tool, useful when you're shopping and don't yet know KompWatch. The /compare pages are 1:1 head-to-head 'KompWatch vs Tool X' pages — useful when you're already evaluating KompWatch against a specific tool. Both are honest and cross-linked, but /vs is broader shopping intent and /compare is closer to a purchase decision.",
  },
  {
    question: "Which competitor monitoring tool is the cheapest?",
    answer:
      "The cheapest paid option among purpose-built competitor monitors is KompWatch at $49/mo for 10 competitor URLs, with a genuinely usable free tier (2 URLs, weekly digest). Visualping starts around $13/mo but is a general-purpose change monitor, not a competitor-monitoring tool — expect noisy alerts and no AI classification. Distill.io has a free tier but same limitation. Enterprise tools (Klue, Crayon, Kompyte) start around $12K/yr with seat minimums.",
  },
  {
    question: "When should I pick an enterprise CI platform over a lightweight monitor?",
    answer:
      "Pick an enterprise platform (Klue, Crayon, Kompyte) when you have (1) a dedicated CI or PMM team of 3+ people, (2) more than 20 sellers who need battlecard access, and (3) a real budget for sales enablement software ($15K+/yr). Pick a lightweight monitor (KompWatch, Visualping) when you're a solo PMM, a founder tracking 3–5 competitors, or a lean revops team that just needs to know when a competitor changes pricing, ships a feature, or repositions — without the battlecard-authoring workflow.",
  },
  {
    question: "Are Crayon and Kompyte still worth considering after their acquisitions?",
    answer:
      "It depends on your risk tolerance for roadmap uncertainty. Crayon (acquired by SoftwareOne in 2024) and Kompyte (rolled into Semrush) are both still functional products with active customers. Existing customers on multi-year contracts should ride them out. New evaluators should ask hard questions about roadmap ownership, dedicated CI product management, and standalone product commitment before signing a multi-year deal. If those answers are unclear, our /vs/crayon-alternative and /vs/kompyte-alternative roundups list the honest replacements at every price tier.",
  },
  {
    question: "Does KompWatch have a free tier I can try before comparing to alternatives?",
    answer:
      "Yes. Free tier covers 2 competitor URLs with a weekly AI digest — enough to validate whether AI-classified change detection is the workflow you actually need, before comparing paid tiers. No credit card, no sales call. If you're evaluating multiple tools in this roundup, KompWatch is the only one where you can run a real production trial against 2 competitors for free indefinitely.",
  },
];

// FAQPage JSON-LD — mirrors the visible FAQ section (single source of truth).
function HubFAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function VsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: "Alternatives", path: "/vs" }]} />
      <SoftwareApplicationSchema />
      <ItemListSchema />
      <HubFAQSchema />

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
            <TrackedCTA
              href="/login"
              event="Vs Hub Nav CTA Click"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free
            </TrackedCTA>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            5 roundups · ranked honestly · updated 2026
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Competitor monitoring alternatives
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Ranked alternatives to the six most-searched competitor-monitoring tools — Crayon,
            Klue, Kompyte, Semrush, Visualping, and Kompetar. Every roundup names the right tool for the
            right team, including when KompWatch is <em>not</em> the right pick.{" "}
            <span className="font-semibold text-gray-900">
              Free for 2 competitors, $49/mo for 10.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedCTA
              href="/login"
              event="Vs Hub Hero CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <Link
              href="/compare"
              className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Or see 1:1 comparisons
            </Link>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            2 competitors free forever · 5-minute setup · No sales call
          </p>
        </div>
      </section>

      {/* Alternative roundup cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
            Pick the tool you&apos;re shopping against
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {alternatives.map((alt) => (
              <Link
                key={alt.slug}
                href={`/vs/${alt.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand-600">
                      {alt.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{alt.audience}</p>
                  </div>
                </div>
                <p className="mt-3 inline-block self-start rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-900">
                  {alt.angle}
                </p>
                <p className="mt-4 text-sm text-gray-600">{alt.summary}</p>
                <span className="mt-6 inline-block text-sm font-medium text-brand-600 group-hover:underline">
                  Read the {alt.tool} alternatives roundup &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* /vs vs /compare disambiguation */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Shopping vs deciding — two different pages
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-lg font-semibold text-gray-900">You&apos;re here (/vs)</div>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Shopping intent.</strong> You&apos;re researching what to use instead of
                Crayon / Klue / Kompyte / Semrush / Visualping. Each /vs page ranks 7 alternatives
                honestly, including when KompWatch is <em>not</em> the best fit. Good if you&apos;re
                still comparing categories.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-lg font-semibold text-gray-900">
                <Link href="/compare" className="hover:text-brand-600 hover:underline">
                  Or head to /compare &rarr;
                </Link>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                <strong>Decision intent.</strong> 1:1 head-to-heads: &quot;KompWatch vs Crayon,&quot;
                &quot;KompWatch vs Klue,&quot; etc. Feature-by-feature, price-by-price. Good if
                you&apos;ve already narrowed to two tools and want to make the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-gray-200 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Why KompWatch shows up in every roundup
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-brand-600">$49/mo</div>
              <p className="mt-2 text-sm text-gray-600">
                No seat minimums, no annual contract, no sales call. 10 competitor URLs, AI-classified
                digests, every 6 hours. Cheaper than a Klue seat, more focused than a Semrush bundle.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">AI digests</div>
              <p className="mt-2 text-sm text-gray-600">
                Every detected change is classified (pricing, feature, content, messaging) and
                summarized in plain English. Not raw pixel-diffs like Visualping, not a full CI
                workflow like Klue — just &quot;here&apos;s what changed and why it matters.&quot;
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600">Free tier</div>
              <p className="mt-2 text-sm text-gray-600">
                2 competitor URLs, weekly digest, forever free. Enough to validate the workflow
                against a real competitor before you pay anything — a genuinely rare offer in this
                category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — mirrors hubFaqs (single source of truth for JSON-LD + visible copy) */}
      <section id="faq" className="border-t border-gray-100 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Competitor monitoring alternatives — FAQ
          </h2>
          <dl className="mt-10 space-y-8">
            {hubFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ready to try KompWatch against a real competitor?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start on the free tier — 2 competitors, weekly digest, no credit card. If the workflow
            works, upgrade to Pro. If it doesn&apos;t, one of the roundups above will point you to
            what does.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedCTA
              href="/login"
              event="Vs Hub Bottom CTA Click"
              className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start free — no credit card required
            </TrackedCTA>
            <Link
              href="/pricing"
              className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              See pricing
            </Link>
          </div>
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
            <Link href="/compare" className="text-sm text-gray-500 hover:text-gray-700">
              Compare
            </Link>
            <Link href="/use-case" className="text-sm text-gray-500 hover:text-gray-700">
              Use cases
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
