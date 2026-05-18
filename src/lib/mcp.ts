import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { db } from "./db";

/**
 * Create an MCP server instance scoped to a specific user.
 * Each connection gets its own server so queries are always user-scoped.
 */
export function createMcpServer(userId: string): McpServer {
  const server = new McpServer(
    {
      name: "kompwatch",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
      instructions:
        "KompWatch MCP server — query your competitor monitoring data. " +
        "Use list-competitors to see tracked competitors, search-changes to find detected changes, " +
        "and get-competitor to see details for a specific competitor.",
    }
  );

  // ── Tool: list-competitors ────────────────────────────────────

  server.tool(
    "list-competitors",
    "List all tracked competitors with their latest change and snapshot counts",
    {},
    async () => {
      const competitors = await db.competitor.findMany({
        where: { userId },
        include: {
          _count: { select: { snapshots: true, changes: true } },
          changes: {
            orderBy: { createdAt: "desc" },
            take: 1,
            select: {
              createdAt: true,
              summary: true,
              changeType: true,
              severity: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      const results = competitors.map((c) => ({
        id: c.id,
        name: c.name,
        url: c.url,
        isActive: c.isActive,
        tracking: {
          pricing: c.trackPricing,
          blog: c.trackBlog,
          features: c.trackFeatures,
          jobs: c.trackJobs,
          tech: c.trackTech,
        },
        snapshotCount: c._count.snapshots,
        changeCount: c._count.changes,
        latestChange: c.changes[0]
          ? {
              date: c.changes[0].createdAt.toISOString(),
              summary: c.changes[0].summary,
              type: c.changes[0].changeType,
              severity: c.changes[0].severity,
            }
          : null,
      }));

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(results, null, 2),
          },
        ],
      };
    }
  );

  // ── Tool: get-competitor ──────────────────────────────────────

  server.tool(
    "get-competitor",
    "Get detailed information about a specific competitor including recent changes",
    {
      competitorId: z.string().describe("The competitor ID"),
      changeLimit: z
        .number()
        .min(1)
        .max(50)
        .default(10)
        .describe("Number of recent changes to include (default: 10)"),
    },
    async ({ competitorId, changeLimit }) => {
      const competitor = await db.competitor.findFirst({
        where: { id: competitorId, userId },
        include: {
          changes: {
            orderBy: { createdAt: "desc" },
            take: changeLimit,
            select: {
              id: true,
              createdAt: true,
              changeType: true,
              contentZone: true,
              summary: true,
              details: true,
              severity: true,
              confidenceScore: true,
              signalScore: true,
              pageUrl: true,
            },
          },
          snapshots: {
            orderBy: { createdAt: "desc" },
            take: 1,
            select: {
              createdAt: true,
              httpStatus: true,
              blogTitles: true,
              jobTitles: true,
              techStack: true,
            },
          },
        },
      });

      if (!competitor) {
        return {
          content: [
            { type: "text" as const, text: "Competitor not found." },
          ],
          isError: true,
        };
      }

      const result = {
        id: competitor.id,
        name: competitor.name,
        url: competitor.url,
        isActive: competitor.isActive,
        tracking: {
          pricing: competitor.trackPricing,
          blog: competitor.trackBlog,
          features: competitor.trackFeatures,
          jobs: competitor.trackJobs,
          tech: competitor.trackTech,
        },
        latestSnapshot: competitor.snapshots[0]
          ? {
              capturedAt: competitor.snapshots[0].createdAt.toISOString(),
              httpStatus: competitor.snapshots[0].httpStatus,
              blogTitles: competitor.snapshots[0].blogTitles,
              jobTitles: competitor.snapshots[0].jobTitles,
              techStack: competitor.snapshots[0].techStack,
            }
          : null,
        recentChanges: competitor.changes.map((c) => ({
          id: c.id,
          date: c.createdAt.toISOString(),
          type: c.changeType,
          zone: c.contentZone,
          summary: c.summary,
          details: c.details,
          severity: c.severity,
          confidence: c.confidenceScore,
          signalScore: c.signalScore,
          pageUrl: c.pageUrl,
        })),
      };

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }
  );

  // ── Tool: search-changes ──────────────────────────────────────

  server.tool(
    "search-changes",
    "Search and filter competitor changes by type, severity, zone, date range, or keyword",
    {
      competitorId: z
        .string()
        .optional()
        .describe("Filter by specific competitor ID"),
      changeType: z
        .enum(["PRICING", "FEATURE", "BLOG", "JOB", "TECH", "GENERAL"])
        .optional()
        .describe("Filter by change type"),
      severity: z
        .enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"])
        .optional()
        .describe("Minimum severity level"),
      contentZone: z
        .enum([
          "POSITIONING",
          "MONETIZATION",
          "PRODUCT",
          "MARKETING",
          "TALENT",
          "LEGAL",
          "OPERATIONS",
          "UNKNOWN",
        ])
        .optional()
        .describe("Filter by content zone"),
      since: z
        .string()
        .optional()
        .describe("ISO date string — only include changes after this date"),
      until: z
        .string()
        .optional()
        .describe("ISO date string — only include changes before this date"),
      keyword: z
        .string()
        .optional()
        .describe("Search keyword in change summary"),
      limit: z
        .number()
        .min(1)
        .max(100)
        .default(20)
        .describe("Max results to return (default: 20)"),
    },
    async ({
      competitorId,
      changeType,
      severity,
      contentZone,
      since,
      until,
      keyword,
      limit,
    }) => {
      const severityOrder = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
      const minSeverityIdx = severity
        ? severityOrder.indexOf(severity)
        : 0;
      const allowedSeverities = severityOrder.slice(minSeverityIdx);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const where: any = {
        competitor: { userId },
        severity: { in: allowedSeverities },
      };

      if (competitorId) where.competitorId = competitorId;
      if (changeType) where.changeType = changeType;
      if (contentZone) where.contentZone = contentZone;
      if (since || until) {
        where.createdAt = {};
        if (since) where.createdAt.gte = new Date(since);
        if (until) where.createdAt.lte = new Date(until);
      }
      if (keyword) {
        where.summary = { contains: keyword, mode: "insensitive" };
      }

      const changes = await db.change.findMany({
        where,
        include: {
          competitor: { select: { name: true, url: true } },
        },
        orderBy: { createdAt: "desc" },
        take: limit,
      });

      const results = changes.map((c) => ({
        id: c.id,
        date: c.createdAt.toISOString(),
        competitor: c.competitor.name,
        competitorUrl: c.competitor.url,
        type: c.changeType,
        zone: c.contentZone,
        summary: c.summary,
        details: c.details,
        severity: c.severity,
        confidence: c.confidenceScore,
        signalScore: c.signalScore,
        pageUrl: c.pageUrl,
      }));

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(
              { count: results.length, changes: results },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  // ── Tool: get-digest-summary ──────────────────────────────────

  server.tool(
    "get-digest-summary",
    "Get a summary of recent changes grouped by competitor — similar to what the email digest contains",
    {
      since: z
        .string()
        .optional()
        .describe(
          "ISO date string — summarize changes after this date (default: last 7 days)"
        ),
    },
    async ({ since }) => {
      const sinceDate = since
        ? new Date(since)
        : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

      const changes = await db.change.findMany({
        where: {
          competitor: { userId },
          createdAt: { gte: sinceDate },
        },
        include: {
          competitor: { select: { name: true, url: true } },
        },
        orderBy: { createdAt: "desc" },
      });

      // Group by competitor
      const grouped: Record<
        string,
        {
          competitor: { name: string; url: string };
          changes: Array<{
            date: string;
            type: string;
            zone: string;
            severity: string;
            summary: string;
          }>;
        }
      > = {};

      for (const c of changes) {
        const key = c.competitorId;
        if (!grouped[key]) {
          grouped[key] = {
            competitor: {
              name: c.competitor.name,
              url: c.competitor.url,
            },
            changes: [],
          };
        }
        grouped[key].changes.push({
          date: c.createdAt.toISOString(),
          type: c.changeType,
          zone: c.contentZone,
          severity: c.severity,
          summary: c.summary,
        });
      }

      const result = {
        period: {
          since: sinceDate.toISOString(),
          until: new Date().toISOString(),
        },
        totalChanges: changes.length,
        competitors: Object.values(grouped),
      };

      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }
  );

  return server;
}
