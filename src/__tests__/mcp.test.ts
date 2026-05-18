import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock Prisma
const mockCompetitorFindMany = vi.fn();
const mockCompetitorFindFirst = vi.fn();
const mockChangeFindMany = vi.fn();

vi.mock("@/lib/db", () => ({
  db: {
    competitor: {
      findMany: (...args: unknown[]) => mockCompetitorFindMany(...args),
      findFirst: (...args: unknown[]) => mockCompetitorFindFirst(...args),
    },
    change: {
      findMany: (...args: unknown[]) => mockChangeFindMany(...args),
    },
  },
}));

import { createMcpServer } from "@/lib/mcp";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";

const TEST_USER_ID = "user_test_123";

async function createTestClient() {
  const server = createMcpServer(TEST_USER_ID);
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();

  const client = new Client({ name: "test-client", version: "1.0.0" });

  await Promise.all([
    client.connect(clientTransport),
    server.connect(serverTransport),
  ]);

  return client;
}

describe("MCP Server", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("lists available tools", async () => {
    const client = await createTestClient();
    const { tools } = await client.listTools();

    const toolNames = tools.map((t) => t.name);
    expect(toolNames).toContain("list-competitors");
    expect(toolNames).toContain("get-competitor");
    expect(toolNames).toContain("search-changes");
    expect(toolNames).toContain("get-digest-summary");
    expect(tools.length).toBe(4);
  });

  describe("list-competitors", () => {
    it("returns competitors for the scoped user", async () => {
      mockCompetitorFindMany.mockResolvedValue([
        {
          id: "comp_1",
          name: "Acme Corp",
          url: "https://acme.com",
          isActive: true,
          trackPricing: true,
          trackBlog: true,
          trackFeatures: true,
          trackJobs: false,
          trackTech: false,
          _count: { snapshots: 10, changes: 5 },
          changes: [
            {
              createdAt: new Date("2026-05-01T12:00:00Z"),
              summary: "Raised prices by 20%",
              changeType: "PRICING",
              severity: "HIGH",
            },
          ],
        },
      ]);

      const client = await createTestClient();
      const result = await client.callTool({ name: "list-competitors", arguments: {} });

      const text = (result.content as Array<{ type: string; text: string }>)[0].text;
      const data = JSON.parse(text);
      expect(data).toHaveLength(1);
      expect(data[0].name).toBe("Acme Corp");
      expect(data[0].snapshotCount).toBe(10);
      expect(data[0].latestChange.summary).toBe("Raised prices by 20%");

      // Verify user scoping
      expect(mockCompetitorFindMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { userId: TEST_USER_ID },
        })
      );
    });
  });

  describe("get-competitor", () => {
    it("returns competitor details with changes", async () => {
      mockCompetitorFindFirst.mockResolvedValue({
        id: "comp_1",
        name: "Beta Inc",
        url: "https://beta.io",
        isActive: true,
        trackPricing: true,
        trackBlog: false,
        trackFeatures: true,
        trackJobs: true,
        trackTech: false,
        changes: [
          {
            id: "chg_1",
            createdAt: new Date("2026-05-10T08:00:00Z"),
            changeType: "FEATURE",
            contentZone: "PRODUCT",
            summary: "Launched API v2",
            details: "Full REST API with pagination",
            severity: "MEDIUM",
            confidenceScore: 0.9,
            signalScore: 0.7,
            pageUrl: "https://beta.io/features",
          },
        ],
        snapshots: [
          {
            createdAt: new Date("2026-05-10T06:00:00Z"),
            httpStatus: 200,
            blogTitles: ["AI Trends"],
            jobTitles: ["SWE"],
            techStack: ["React", "Node"],
          },
        ],
      });

      const client = await createTestClient();
      const result = await client.callTool({
        name: "get-competitor",
        arguments: { competitorId: "comp_1" },
      });

      const text = (result.content as Array<{ type: string; text: string }>)[0].text;
      const data = JSON.parse(text);
      expect(data.name).toBe("Beta Inc");
      expect(data.recentChanges).toHaveLength(1);
      expect(data.recentChanges[0].summary).toBe("Launched API v2");
      expect(data.latestSnapshot.techStack).toContain("React");

      // Verify user scoping
      expect(mockCompetitorFindFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: "comp_1", userId: TEST_USER_ID },
        })
      );
    });

    it("returns error for nonexistent competitor", async () => {
      mockCompetitorFindFirst.mockResolvedValue(null);

      const client = await createTestClient();
      const result = await client.callTool({
        name: "get-competitor",
        arguments: { competitorId: "comp_nonexistent" },
      });

      expect(result.isError).toBe(true);
      const text = (result.content as Array<{ type: string; text: string }>)[0].text;
      expect(text).toContain("not found");
    });
  });

  describe("search-changes", () => {
    it("filters changes by type and severity", async () => {
      mockChangeFindMany.mockResolvedValue([
        {
          id: "chg_1",
          createdAt: new Date("2026-05-15T10:00:00Z"),
          changeType: "PRICING",
          contentZone: "MONETIZATION",
          summary: "Price increased",
          details: null,
          severity: "HIGH",
          confidenceScore: 0.95,
          signalScore: 0.85,
          pageUrl: null,
          competitorId: "comp_1",
          competitor: { name: "Acme", url: "https://acme.com" },
        },
      ]);

      const client = await createTestClient();
      const result = await client.callTool({
        name: "search-changes",
        arguments: {
          changeType: "PRICING",
          severity: "HIGH",
          limit: 10,
        },
      });

      const text = (result.content as Array<{ type: string; text: string }>)[0].text;
      const data = JSON.parse(text);
      expect(data.count).toBe(1);
      expect(data.changes[0].type).toBe("PRICING");

      // Verify severity filter includes HIGH and CRITICAL
      expect(mockChangeFindMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            competitor: { userId: TEST_USER_ID },
            severity: { in: ["HIGH", "CRITICAL"] },
            changeType: "PRICING",
          }),
        })
      );
    });

    it("filters by date range", async () => {
      mockChangeFindMany.mockResolvedValue([]);

      const client = await createTestClient();
      await client.callTool({
        name: "search-changes",
        arguments: {
          since: "2026-05-01T00:00:00Z",
          until: "2026-05-15T00:00:00Z",
        },
      });

      expect(mockChangeFindMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            createdAt: {
              gte: new Date("2026-05-01T00:00:00Z"),
              lte: new Date("2026-05-15T00:00:00Z"),
            },
          }),
        })
      );
    });
  });

  describe("get-digest-summary", () => {
    it("groups changes by competitor", async () => {
      mockChangeFindMany.mockResolvedValue([
        {
          competitorId: "comp_1",
          createdAt: new Date("2026-05-14T10:00:00Z"),
          changeType: "PRICING",
          contentZone: "MONETIZATION",
          severity: "HIGH",
          summary: "Raised Pro price",
          competitor: { name: "Acme", url: "https://acme.com" },
        },
        {
          competitorId: "comp_1",
          createdAt: new Date("2026-05-15T11:00:00Z"),
          changeType: "BLOG",
          contentZone: "MARKETING",
          severity: "LOW",
          summary: "New blog post",
          competitor: { name: "Acme", url: "https://acme.com" },
        },
        {
          competitorId: "comp_2",
          createdAt: new Date("2026-05-14T09:00:00Z"),
          changeType: "FEATURE",
          contentZone: "PRODUCT",
          severity: "MEDIUM",
          summary: "Launched SSO",
          competitor: { name: "Beta", url: "https://beta.io" },
        },
      ]);

      const client = await createTestClient();
      const result = await client.callTool({
        name: "get-digest-summary",
        arguments: {},
      });

      const text = (result.content as Array<{ type: string; text: string }>)[0].text;
      const data = JSON.parse(text);
      expect(data.totalChanges).toBe(3);
      expect(data.competitors).toHaveLength(2);

      const acme = data.competitors.find(
        (c: { competitor: { name: string } }) => c.competitor.name === "Acme"
      );
      expect(acme.changes).toHaveLength(2);
    });
  });
});
