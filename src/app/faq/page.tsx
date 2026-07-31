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
  "bulk-importing-competitors": "Getting Started",
  "css-selectors": "Getting Started",
  "dashboard-setup-checklist": "Getting Started",
  "demo-competitor-acme-analytics": "Getting Started",
  "does-kompwatch-need-my-credentials": "Getting Started",
  "does-kompwatch-require-a-ci-team": "Getting Started",
  "does-kompwatch-require-engineering-setup": "Getting Started",
  "early-stage-no-clear-competitors": "Getting Started",
  "how-fast-will-i-know-about-a-competitor-change": "Getting Started",
  "free-snapshot": "Getting Started",
  "free-snapshot-email-privacy": "Getting Started",
  "free-snapshot-live-counters": "Getting Started",
  "free-snapshot-rate-limiting": "Getting Started",
  "free-snapshot-signup-prefill": "Getting Started",
  "free-snapshot-track-your-site-cta": "Getting Started",
  "homepage-live-counter": "Getting Started",
  "how-monitoring-works": "Getting Started",
  "how-many-competitors-to-monitor": "Getting Started",
  "how-many-competitors-does-kompwatch-track": "Getting Started",
  "setting-css-selectors": "Getting Started",
  "trial-no-changes-yet": "Getting Started",
  "try-before-you-sign-up": "Getting Started",
  "what-does-kompwatch-track": "Getting Started",
  "which-pages-to-monitor-per-competitor": "Getting Started",
  "why-no-changes-yet": "Getting Started",

  pricing: "Pricing & Billing",
  "annual-billing": "Pricing & Billing",
  "checkout-error-payment-declined": "Pricing & Billing",
  "money-back-guarantee": "Pricing & Billing",
  "founding-customer-vs-founding-user": "Pricing & Billing",
  "when-to-upgrade-from-free-to-pro": "Pricing & Billing",
  "trial-ending-should-i-subscribe": "Pricing & Billing",
  "trial-expired-what-now": "Pricing & Billing",
  "annual-plan-billing-and-savings": "Pricing & Billing",
  "cancel-or-change-plan": "Pricing & Billing",
  "billing-dispute": "Pricing & Billing",
  "billing-by-invoice-or-po": "Pricing & Billing",
  "coupon-and-promo-codes": "Pricing & Billing",
  "downloading-invoices-and-billing-history": "Pricing & Billing",
  "downgrading-your-plan": "Pricing & Billing",
  "enterprise-plan": "Pricing & Billing",
  "failed-payment-and-dunning": "Pricing & Billing",
  "founding-pricing": "Pricing & Billing",
  "founding-user-badge": "Pricing & Billing",
  "free-trial": "Pricing & Billing",
  "no-contract-no-sales-call": "Pricing & Billing",
  "pausing-your-subscription": "Pricing & Billing",
  "plan-competitor-limit-reached": "Pricing & Billing",
  "post-cancellation-data-access": "Pricing & Billing",
  "pro-trial-migration-guide": "Pricing & Billing",
  "referral-and-affiliate-program": "Pricing & Billing",
  "roi-calculator": "Pricing & Billing",
  "roi-report": "Pricing & Billing",
  "subscription-price-changed": "Pricing & Billing",
  "subscription-price-mismatch": "Pricing & Billing",
  "team-plan": "Pricing & Billing",
  "transferring-account-ownership": "Pricing & Billing",
  "trial-extension": "Pricing & Billing",
  "updating-your-payment-method": "Pricing & Billing",
  "upgrade-nudge-one-slot-left": "Pricing & Billing",
  "upgrade-prompt-before-limit": "Pricing & Billing",
  "upgrading-your-plan": "Pricing & Billing",
  "usecase-pricing-hero-experiment": "Pricing & Billing",
  "vat-and-tax-on-invoices": "Pricing & Billing",
  "which-plan-is-right-for-me": "Pricing & Billing",
  "white-label-and-reseller": "Pricing & Billing",

  "magic-link-login": "Account & Settings",
  "account-deletion": "Account & Settings",
  "account-settings": "Account & Settings",
  "audit-logs-and-activity-history": "Account & Settings",
  "changing-your-email-address": "Account & Settings",
  "data-residency-and-compliance": "Account & Settings",
  "data-security": "Account & Settings",
  "email-preferences-and-onboarding-emails": "Account & Settings",
  "gdpr-data-deletion": "Account & Settings",
  "inviting-team-members": "Account & Settings",
  "is-kompwatch-open-source": "Account & Settings",
  "mobile-and-browser-support": "Account & Settings",
  "onboarding-emails": "Account & Settings",
  "onboarding-activation-checklist": "Account & Settings",
  "service-level-agreement": "Account & Settings",
  "service-status": "Account & Settings",
  "sso-and-single-sign-on": "Account & Settings",
  "team-roles-and-permissions": "Account & Settings",
  "trust-and-reviews": "Account & Settings",
  "two-factor-authentication-and-account-security": "Account & Settings",
  "what-happens-if-kompwatch-shuts-down": "Account & Settings",

  "understanding-the-dashboard": "Using KompWatch",
  "understanding-your-digest": "Using KompWatch",
  "ai-confidence-scoring": "Using KompWatch",
  "ai-summary-accuracy": "Using KompWatch",
  "change-severity-levels": "Using KompWatch",
  "competitor-rebranded-or-url-changed": "Using KompWatch",
  "competitor-site-offline-or-errors": "Using KompWatch",
  "competitor-site-redesign-or-relaunch": "Using KompWatch",
  "custom-digest-recipients": "Using KompWatch",
  "dashboard-filter-settings": "Using KompWatch",
  "deleting-a-competitor": "Using KompWatch",
  "digest-frequency-control": "Using KompWatch",
  "digest-not-arriving": "Using KompWatch",
  "digest-schedule-and-timing": "Using KompWatch",
  "dismissing-and-marking-changes": "Using KompWatch",
  "exporting-your-data": "Using KompWatch",
  "filtering-alerts-by-content-zone": "Using KompWatch",
  "filtering-digests-by-severity": "Using KompWatch",
  "first-competitor-change-email": "Using KompWatch",
  "instant-pricing-alerts": "Using KompWatch",
  "managing-alert-fatigue": "Using KompWatch",
  "managing-competitors": "Using KompWatch",
  "manual-snapshot-refresh": "Using KompWatch",
  "manual-snapshot-trigger": "Using KompWatch",
  "missed-competitor-change": "Using KompWatch",
  "missed-snapshots-during-outage": "Using KompWatch",
  "muting-and-snoozing-alerts": "Using KompWatch",
  "organizing-competitors": "Using KompWatch",
  "per-competitor-notification-settings": "Using KompWatch",
  "product-changelog": "Using KompWatch",
  "public-pulse-feed": "Using KompWatch",
  "sample-digest-preview": "Using KompWatch",
  "self-vs-competitor-side-by-side": "Using KompWatch",
  "sharing-digests-with-your-team": "Using KompWatch",
  "snapshot-errors-and-warning-states": "Using KompWatch",
  "snapshot-history-and-data-retention": "Using KompWatch",
  "snapshots-changes-and-digests-explained": "Using KompWatch",
  "under-alerting-vs-over-alerting": "Using KompWatch",
  "using-the-change-history-timeline": "Using KompWatch",
  "what-does-a-change-alert-email-look-like": "Using KompWatch",
  "what-is-kompwatch-ai-agent": "Using KompWatch",
  "what-does-it-mean-when-a-competitor-goes-quiet": "Using KompWatch",
  "how-to-verify-your-monitoring-is-working": "Using KompWatch",
  "paid-subscriber-quiet-month": "Using KompWatch",
  "trial-getting-only-minor-changes": "Using KompWatch",
  "when-a-tracked-competitor-gets-acquired-or-shuts-down": "Using KompWatch",

  "competitor-pricing-tier-restructure": "Advanced Monitoring",
  "monitoring-javascript-spa-sites": "Advanced Monitoring",
  "monitoring-login-required-pages": "Advanced Monitoring",
  "monitoring-competitor-pricing-pages": "Advanced Monitoring",
  "monitoring-competitor-reviews": "Advanced Monitoring",
  "anti-bot-protection-and-blocked-pages": "Advanced Monitoring",
  "social-media-monitoring": "Advanced Monitoring",
  "competitor-pricing-data-sources": "Advanced Monitoring",
  "how-often-do-competitor-websites-change": "Advanced Monitoring",
  "llm-visibility-monitoring": "Advanced Monitoring",
  "monitoring-competitor-seo-strategy": "Advanced Monitoring",
  "ab-testing-and-cdn-variations": "Advanced Monitoring",
  "alert-relevance-scoring": "Advanced Monitoring",
  "competitor-pricing-change-timing": "Advanced Monitoring",
  "competitor-went-behind-a-paywall": "Advanced Monitoring",
  "content-zone-classification": "Advanced Monitoring",
  "cookie-consent-banners-and-gdpr-overlays": "Advanced Monitoring",
  "detecting-competitor-pricing-model-changes": "Advanced Monitoring",
  "detecting-competitor-repositioning": "Advanced Monitoring",
  "detecting-competitor-upmarket-migration": "Advanced Monitoring",
  "does-kompwatch-respect-robots-txt": "Advanced Monitoring",
  "how-kompwatch-filters-html-diff-noise": "Advanced Monitoring",
  "ip-allowlisting-for-scrapers": "Advanced Monitoring",
  "monitoring-anonymity-and-stealth": "Advanced Monitoring",
  "monitoring-competitor-ads": "Advanced Monitoring",
  "monitoring-competitor-affiliate-programs": "Advanced Monitoring",
  "monitoring-competitor-ai-feature-rollouts": "Advanced Monitoring",
  "monitoring-competitor-api-documentation": "Advanced Monitoring",
  "monitoring-competitor-app-store-listings": "Advanced Monitoring",
  "monitoring-competitor-blog-and-content-strategy": "Advanced Monitoring",
  "monitoring-competitor-case-studies-and-customer-stories": "Advanced Monitoring",
  "monitoring-competitor-changelog-and-release-notes": "Advanced Monitoring",
  "monitoring-competitor-community-pages": "Advanced Monitoring",
  "monitoring-competitor-events-and-webinars": "Advanced Monitoring",
  "monitoring-competitor-feature-request-boards": "Advanced Monitoring",
  "monitoring-competitor-github-and-open-source": "Advanced Monitoring",
  "monitoring-competitor-help-centers-and-docs": "Advanced Monitoring",
  "monitoring-competitor-integration-marketplaces": "Advanced Monitoring",
  "monitoring-competitor-job-postings": "Advanced Monitoring",
  "monitoring-competitor-newsletters": "Advanced Monitoring",
  "monitoring-competitor-onboarding-and-signup-flows": "Advanced Monitoring",
  "monitoring-competitor-partner-pages": "Advanced Monitoring",
  "monitoring-competitor-press-and-newsrooms": "Advanced Monitoring",
  "monitoring-competitor-pricing-across-currencies": "Advanced Monitoring",
  "monitoring-competitor-product-launches": "Advanced Monitoring",
  "monitoring-competitor-social-proof": "Advanced Monitoring",
  "monitoring-competitor-status-pages": "Advanced Monitoring",
  "monitoring-competitor-trial-and-demo-strategy": "Advanced Monitoring",
  "monitoring-competitor-video-content": "Advanced Monitoring",
  "monitoring-competitors-during-sales-cycles": "Advanced Monitoring",
  "monitoring-competitors-with-hidden-pricing": "Advanced Monitoring",
  "monitoring-international-competitors": "Advanced Monitoring",
  "monitoring-multiple-pages-per-competitor": "Advanced Monitoring",
  "monitoring-specific-keywords": "Advanced Monitoring",
  "monitoring-tos-and-privacy-policy-changes": "Advanced Monitoring",
  "monitoring-your-own-site": "Advanced Monitoring",
  "monitoring-your-own-website": "Advanced Monitoring",

  "integrations-and-notifications": "Integrations",
  "crm-integrations": "Integrations",
  "mcp-server-and-ai-integrations": "Integrations",
  "airtable-integration": "Integrations",
  "battlecard-export-current-status": "Integrations",
  "blog-email-signup": "Integrations",
  "browser-extension": "Integrations",
  "clickup-monday-asana-integration": "Integrations",
  "command-palette": "Integrations",
  "community-platform-monitoring": "Integrations",
  "compare-page-report-email-capture": "Integrations",
  "discord-notifications": "Integrations",
  "dynamics-365-integration": "Integrations",
  "g2-capterra-acquisition-review-monitoring": "Integrations",
  "gong-integration": "Integrations",
  "google-alerts-alongside-kompwatch": "Integrations",
  "google-chat-notifications": "Integrations",
  "google-sheets-integration": "Integrations",
  "hubspot-integration": "Integrations",
  "intercom-integration": "Integrations",
  "linear-jira-integration": "Integrations",
  "microsoft-teams-notifications": "Integrations",
  "notion-integration": "Integrations",
  "outreach-salesloft-integration": "Integrations",
  "pagerduty-opsgenie-integration": "Integrations",
  "pipedrive-integration": "Integrations",
  "power-bi-tableau-looker-integration": "Integrations",
  "rest-api-and-developer-access": "Integrations",
  "salesforce-integration": "Integrations",
  "slack-notifications": "Integrations",
  "sms-alerts": "Integrations",
  "telegram-whatsapp-alerts": "Integrations",
  "webhook-delivery-history": "Integrations",
  "webhook-payload-format": "Integrations",
  "webhook-retry-and-failure-handling": "Integrations",
  "which-ai-tools-work-with-kompwatch-mcp": "Integrations",
  "zapier-make-n8n-automation": "Integrations",
  "zendesk-integration": "Integrations",

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
  "changedetection-io-comparison": "Switching to KompWatch",
  "chatgpt-vs-website-monitoring": "Switching to KompWatch",
  "ci-market-consolidation-2026": "Switching to KompWatch",
  "ci-tool-acquisition-risk": "Switching to KompWatch",
  "ci-vendor-layoffs": "Switching to KompWatch",
  "competitor-monitoring-for-startups-and-small-teams": "Switching to KompWatch",
  "consolidating-competitive-intelligence-tools": "Switching to KompWatch",
  "crayon-implementation-timeline": "Switching to KompWatch",
  "crayon-mcp-vs-kompwatch-mcp": "Switching to KompWatch",
  "crayon-rebranded-to-softwareone": "Switching to KompWatch",
  "crayon-signal-weighting-noise-problem": "Switching to KompWatch",
  "crayon-sparks-vs-kompwatch-ai": "Switching to KompWatch",
  "crayon-total-cost-of-ownership": "Switching to KompWatch",
  "diy-free-tools-stack-cost": "Switching to KompWatch",
  "evaluating-competitor-monitoring-tools": "Switching to KompWatch",
  "for-semrush-users": "Switching to KompWatch",
  "gartner-magic-quadrant-ci-platforms": "Switching to KompWatch",
  "headsup-vs-kompwatch": "Switching to KompWatch",
  "klue-ai-win-loss-suite-vs-kompwatch": "Switching to KompWatch",
  "klue-compete-agent-vs-kompwatch": "Switching to KompWatch",
  "klue-copilot-mcp-vs-kompwatch-mcp": "Switching to KompWatch",
  "klue-implementation-timeline": "Switching to KompWatch",
  "klue-migration-reimbursement": "Switching to KompWatch",
  "klue-salesforce-security-incident": "Switching to KompWatch",
  "kompyte-pricing-tier-limits": "Switching to KompWatch",
  "manual-curation-tax": "Switching to KompWatch",
  "migration-reimbursement-other-tools": "Switching to KompWatch",
  "switching-from-caelian": "Switching to KompWatch",
  "switching-from-changedetection": "Switching to KompWatch",
  "switching-from-diy-playwright-scraper": "Switching to KompWatch",
  "switching-from-fruitful": "Switching to KompWatch",
  "switching-from-headsup": "Switching to KompWatch",
  "switching-from-ignition": "Switching to KompWatch",
  "switching-from-parano": "Switching to KompWatch",
  "switching-from-playwright-scraper": "Switching to KompWatch",
  "switching-from-ravenseer": "Switching to KompWatch",
  "switching-from-rivalsense": "Switching to KompWatch",
  "switching-from-seeto": "Switching to KompWatch",
  "switching-from-spire21": "Switching to KompWatch",
  "switching-from-tona": "Switching to KompWatch",
  "switching-from-visualping": "Switching to KompWatch",
  "true-cost-of-enterprise-ci-tools": "Switching to KompWatch",
  "what-happens-to-my-data-when-i-cancel-klue": "Switching to KompWatch",
  "when-to-switch-ci-tools": "Switching to KompWatch",
  "when-your-ci-vendor-gets-acquired": "Switching to KompWatch",
  "why-ci-tools-become-shelfware": "Switching to KompWatch",
  "why-klue-costs-34x-more": "Switching to KompWatch",

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
  "measuring-roi-of-competitor-intelligence": "Using CI Strategically",
  "preparing-a-quarterly-competitive-report": "Using CI Strategically",
  "proving-roi-of-competitive-intelligence": "Using CI Strategically",
  "using-kompwatch-for-marketing-agencies": "Using CI Strategically",
  "who-should-own-competitive-monitoring": "Using CI Strategically",
  "win-loss-analysis-with-competitor-monitoring": "Using CI Strategically",
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
  // Fallback bucket — any FAQ whose slug isn't in CATEGORY_MAP lands here
  // instead of being silently dropped from /faq. See faq-coverage.test.ts.
  "General",
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
