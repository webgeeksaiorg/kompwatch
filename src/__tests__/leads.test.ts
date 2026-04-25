import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const { mockDb } = vi.hoisted(() => ({
  mockDb: {
    emailLead: { create: vi.fn() },
  },
}));

vi.mock("@/lib/db", () => ({ db: mockDb }));

// Match the prisma client export shape used by the route's duplicate-check.
vi.mock("@prisma/client", async () => {
  class PrismaClientKnownRequestError extends Error {
    code: string;
    constructor(message: string, opts: { code: string }) {
      super(message);
      this.code = opts.code;
    }
  }
  return {
    Prisma: { PrismaClientKnownRequestError },
  };
});

import { POST } from "@/app/api/leads/route";
// Re-import the mocked Prisma after module mocking is set up so the test can
// throw the same error class the route catches.
import { Prisma } from "@prisma/client";

function makeReq(body: unknown): NextRequest {
  return new NextRequest("http://localhost/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  vi.clearAllMocks();
  mockDb.emailLead.create.mockResolvedValue({ id: "lead_1" });
});

describe("POST /api/leads", () => {
  it("creates a lead and returns ok", async () => {
    const res = await POST(makeReq({ email: "user@example.com", source: "sample-digest" }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ ok: true });
    expect(mockDb.emailLead.create).toHaveBeenCalledWith({
      data: { email: "user@example.com", source: "sample-digest" },
    });
  });

  it("normalizes email to lowercase and trims whitespace", async () => {
    const res = await POST(
      makeReq({ email: "  USER@Example.COM  ", source: "sample-digest" })
    );
    expect(res.status).toBe(200);
    expect(mockDb.emailLead.create).toHaveBeenCalledWith({
      data: { email: "user@example.com", source: "sample-digest" },
    });
  });

  it("rejects an invalid email with a friendly error", async () => {
    const res = await POST(makeReq({ email: "not-an-email", source: "sample-digest" }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toMatch(/valid email/i);
    expect(mockDb.emailLead.create).not.toHaveBeenCalled();
  });

  it("rejects an unknown source", async () => {
    const res = await POST(makeReq({ email: "user@example.com", source: "rogue-source" }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toMatch(/unknown source/i);
    expect(mockDb.emailLead.create).not.toHaveBeenCalled();
  });

  it("treats duplicate (P2002) as success without leaking existence", async () => {
    mockDb.emailLead.create.mockRejectedValueOnce(
      new Prisma.PrismaClientKnownRequestError("dup", {
        code: "P2002",
        clientVersion: "test",
      })
    );
    const res = await POST(makeReq({ email: "dup@example.com", source: "sample-digest" }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ ok: true, duplicate: true });
  });

  it("returns 500 on unexpected DB errors", async () => {
    mockDb.emailLead.create.mockRejectedValueOnce(new Error("db down"));
    const res = await POST(makeReq({ email: "user@example.com", source: "sample-digest" }));
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json.error).toMatch(/could not save/i);
  });
});
