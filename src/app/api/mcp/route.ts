import { NextRequest } from "next/server";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createMcpServer } from "@/lib/mcp";
import { extractBearerToken, validateApiKey } from "@/lib/api-keys";
import { planAllowsApiAccess } from "@/lib/stripe";

/**
 * Authenticate the request via API key and verify the user has API access.
 * Returns the user or a JSON error Response.
 */
async function authenticateRequest(req: NextRequest) {
  const token = extractBearerToken(req.headers.get("authorization"));
  if (!token) {
    return new Response(
      JSON.stringify({ error: "Missing Authorization header. Use: Bearer <api_key>" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const user = await validateApiKey(token);
  if (!user) {
    return new Response(
      JSON.stringify({ error: "Invalid or expired API key" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!planAllowsApiAccess(user.plan)) {
    return new Response(
      JSON.stringify({ error: "MCP API access requires a Team plan. Upgrade at /pricing" }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  return user;
}

export async function POST(req: NextRequest) {
  const result = await authenticateRequest(req);
  if (result instanceof Response) return result;
  const user = result;

  const server = createMcpServer(user.id);
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless — each request is independent
  });

  await server.connect(transport);
  return transport.handleRequest(req);
}

export async function GET(req: NextRequest) {
  const result = await authenticateRequest(req);
  if (result instanceof Response) return result;
  const user = result;

  const server = createMcpServer(user.id);
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  await server.connect(transport);
  return transport.handleRequest(req);
}

export async function DELETE() {
  // Stateless mode — no sessions to terminate
  return new Response(null, { status: 405 });
}
