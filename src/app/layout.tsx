import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kompwatch.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KompWatch — Know When Competitors Change Anything",
    template: "%s | KompWatch",
  },
  description:
    "Track competitor pricing, features, blog posts, and job listings. Get AI-analyzed weekly digests delivered to your inbox. Free plan available.",
  keywords: [
    "competitor monitoring",
    "competitive intelligence",
    "competitor tracking",
    "pricing monitoring",
    "AI competitor analysis",
    "SaaS competitor tracking",
    "competitor alerts",
  ],
  authors: [{ name: "KompWatch" }],
  openGraph: {
    title: "KompWatch — AI Competitor Monitoring",
    description:
      "Track competitor pricing, features, blog posts, and job listings. Get AI-analyzed digests delivered to your inbox.",
    url: siteUrl,
    siteName: "KompWatch",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KompWatch — AI Competitor Monitoring",
    description:
      "Track competitor pricing, features, blog posts, and job listings. Get AI-analyzed digests delivered to your inbox.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://analytics.webgeeksai.in/js/script.js"
          />
        )}
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
