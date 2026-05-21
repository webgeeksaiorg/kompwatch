import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import { FaqAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "FAQ — KompWatch",
  description:
    "Frequently asked questions about KompWatch — competitor monitoring, pricing, setup, integrations, and more.",
  alternates: { canonical: "/faq" },
};

type FaqItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
};

const CATEGORY_MAP: Record<string, string> = {
  "getting-started": "Getting Started",
  "adding-competitors": "Getting Started",
  "how-monitoring-works": "Getting Started",
  "what-does-kompwatch-track": "Getting Started",
  "why-no-changes-yet": "Getting Started",
  "css-selectors": "Getting Started",
  "how-many-competitors-to-monitor": "Getting Started",
  "which-pages-to-monitor-per-competitor": "Getting Started",
  "try-before-you-sign-up": "Getting Started",

  pricing: "Pricing & Billing",
  "annual-billing": "Pricing & Billing",
  "cancel-or-change-plan": "Pricing & Billing",
  "billing-dispute": "Pricing & Billing",
  "team-plan": "Pricing & Billing",

  "magic-link-login": "Account & Settings",
  "account-settings": "Account & Settings",
  "onboarding-emails": "Account & Settings",
  "gdpr-data-deletion": "Account & Settings",
  "data-security": "Account & Settings",
  "service-status": "Account & Settings",
  "mobile-and-browser-support": "Account & Settings",

  "understanding-the-dashboard": "Using KompWatch",
  "understanding-your-digest": "Using KompWatch",
  "digest-not-arriving": "Using KompWatch",
  "change-severity-levels": "Using KompWatch",
  "managing-competitors": "Using KompWatch",
  "exporting-your-data": "Using KompWatch",
  "snapshot-history-and-data-retention": "Using KompWatch",
  "managing-alert-fatigue": "Using KompWatch",
  "competitor-rebranded-or-url-changed": "Using KompWatch",
  "ai-summary-accuracy": "Using KompWatch",
  "product-changelog": "Using KompWatch",
  "sample-digest-preview": "Using KompWatch",

  "monitoring-javascript-spa-sites": "Advanced Monitoring",
  "monitoring-login-required-pages": "Advanced Monitoring",
  "monitoring-competitor-pricing-pages": "Advanced Monitoring",
  "monitoring-competitor-reviews": "Advanced Monitoring",
  "anti-bot-protection-and-blocked-pages": "Advanced Monitoring",
  "social-media-monitoring": "Advanced Monitoring",
  "competitor-pricing-data-sources": "Advanced Monitoring",
  "how-often-do-competitor-websites-change": "Advanced Monitoring",
  "llm-visibility-monitoring": "Advanced Monitoring",

  "integrations-and-notifications": "Integrations",
  "crm-integrations": "Integrations",
  "mcp-server-and-ai-integrations": "Integrations",

  "switching-from-crayon": "Switching to KompWatch",
  "switching-from-klue": "Switching to KompWatch",
  "switching-from-kompyte": "Switching to KompWatch",
  "switching-from-peerpanda": "Switching to KompWatch",
  "switching-from-changeflow": "Switching to KompWatch",
  "comparing-to-alternatives": "Switching to KompWatch",
  "comparison-page-data": "Switching to KompWatch",
  "google-alerts-and-simple-tools": "Switching to KompWatch",
  "build-vs-buy-competitor-monitoring": "Switching to KompWatch",
  "is-kompwatch-right-for-my-team": "Switching to KompWatch",

  "using-insights-for-sales": "Using CI Strategically",
  "using-insights-for-product-teams": "Using CI Strategically",
  "using-insights-for-marketing-teams": "Using CI Strategically",
  "using-insights-for-customer-success": "Using CI Strategically",
  "using-insights-for-executives": "Using CI Strategically",
  "competitive-intelligence-best-practices": "Using CI Strategically",
  "competitive-battlecards": "Using CI Strategically",
  "creating-sales-battlecards": "Using CI Strategically",
  "reading-competitor-job-listing-signals": "Using CI Strategically",
  "running-a-weekly-competitive-review": "Using CI Strategically",
  "responding-to-a-major-competitor-move": "Using CI Strategically",
  "tracking-competitor-funding-and-acquisitions": "Using CI Strategically",
  "is-competitor-monitoring-legal": "Using CI Strategically",
};

const CATEGORY_ORDER = [
  "Getting Started",
  "Pricing & Billing",
  "Account & Settings",
  "Using KompWatch",
  "Advanced Monitoring",
  "Integrations",
  "Switching to KompWatch",
  "Using CI Strategically",
];

function parseFaqFile(filePath: string): { title: string; summary: string } {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  // Extract title from first # heading
  const titleLine = lines.find((l) => l.startsWith("# "));
  const title = titleLine ? titleLine.replace(/^#\s+/, "") : "Untitled";

  // Extract first non-empty paragraph after the title as summary
  let summaryLines: string[] = [];
  let foundTitle = false;
  let foundContent = false;
  for (const line of lines) {
    if (!foundTitle) {
      if (line.startsWith("# ")) foundTitle = true;
      continue;
    }
    if (!foundContent) {
      if (line.trim() === "") continue;
      if (line.startsWith("#")) break;
      foundContent = true;
    }
    if (foundContent) {
      if (line.trim() === "" || line.startsWith("#")) break;
      summaryLines.push(line);
    }
  }

  const summary = summaryLines
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // strip markdown links
    .replace(/\*\*([^*]+)\*\*/g, "$1") // strip bold
    .replace(/\*([^*]+)\*/g, "$1") // strip italic
    .trim();

  return { title, summary };
}

function loadFaqs(): FaqItem[] {
  const faqDir = path.join(process.cwd(), "docs", "faq");
  const files = fs.readdirSync(faqDir).filter((f) => f.endsWith(".md"));

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(faqDir, file);
    const { title, summary } = parseFaqFile(filePath);
    const category = CATEGORY_MAP[slug] || "General";
    return { slug, title, summary, category };
  });
}

export default function FaqPage() {
  const faqs = loadFaqs();

  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: faqs.filter((f) => f.category === category),
  })).filter((g) => g.items.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.summary,
      },
    })),
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
            Compete<span className="text-brand-600">Watch</span>
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
              href="/login"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Sign in
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-600">
          Everything you need to know about KompWatch. Can&apos;t find what
          you&apos;re looking for?{" "}
          <a
            href="mailto:support@kompwatch.com"
            className="text-brand-600 hover:underline"
          >
            Email us
          </a>
          .
        </p>

        <FaqAccordion grouped={grouped} />
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KompWatch. All rights reserved.
          </div>
          <div className="flex gap-6">
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
