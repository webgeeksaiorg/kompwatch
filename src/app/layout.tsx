import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompeteWatch — Know When Competitors Change Anything",
  description:
    "Track competitor pricing, features, blog posts, and job listings. Get AI-analyzed weekly digests. From $0/mo.",
  openGraph: {
    title: "CompeteWatch — AI Competitor Monitoring",
    description: "Track competitor changes automatically. Pricing starts at $0.",
    type: "website",
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
