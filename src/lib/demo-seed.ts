import { db } from "@/lib/db";

/**
 * Pre-seeds a demo competitor with sample changes for new users.
 * Gives new signups an immediate "aha" moment on their dashboard
 * instead of an empty state.
 */
export async function seedDemoCompetitor(userId: string): Promise<void> {
  const now = new Date();

  const competitor = await db.competitor.create({
    data: {
      userId,
      name: "Acme Analytics",
      url: "https://www.example-competitor.com",
      trackPricing: true,
      trackBlog: true,
      trackFeatures: true,
      trackJobs: true,
      trackTech: false,
    },
  });

  // Create a baseline snapshot
  await db.snapshot.create({
    data: {
      competitorId: competitor.id,
      createdAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      pricingHtml: "<div>Pro: $49/mo, Team: $149/mo</div>",
      featuresHtml: "<div>Dashboard, Reports, Integrations</div>",
      blogTitles: ["How We Scaled to 10k Users", "Q1 Product Recap"],
      jobTitles: ["Senior Engineer", "Product Designer"],
      httpStatus: 200,
      fetchTimeMs: 1200,
    },
  });

  // Create sample changes that showcase CompeteWatch's value
  const sampleChanges = [
    {
      competitorId: competitor.id,
      createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      changeType: "PRICING" as const,
      summary: "Increased Pro plan price from $49/mo to $59/mo",
      details:
        "The Pro tier pricing page now shows $59/mo (previously $49/mo). The Team plan remains at $149/mo. This is a 20% price increase on their most popular tier.",
      severity: "HIGH" as const,
      pageUrl: "https://www.example-competitor.com/pricing",
    },
    {
      competitorId: competitor.id,
      createdAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      changeType: "FEATURE" as const,
      summary: "Launched new AI-powered reporting feature",
      details:
        'New "AI Insights" section added to the features page. Appears to use automated analysis to generate weekly summaries. Positioned as a premium feature for Team plans.',
      severity: "MEDIUM" as const,
      pageUrl: "https://www.example-competitor.com/features",
    },
    {
      competitorId: competitor.id,
      createdAt: new Date(now.getTime() - 6 * 60 * 60 * 1000), // 6 hours ago
      changeType: "BLOG" as const,
      summary: "Published blog post: \"Why We're Betting Big on AI\"",
      details:
        "New blog post discussing their AI strategy and roadmap. Mentions upcoming features including predictive analytics and natural language queries.",
      severity: "LOW" as const,
      pageUrl: "https://www.example-competitor.com/blog",
    },
  ];

  await db.change.createMany({ data: sampleChanges });
}
