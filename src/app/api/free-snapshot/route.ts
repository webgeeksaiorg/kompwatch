import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { trackEvent } from "@/lib/plausible";
import { analyzeCompetitor } from "@/lib/instant-snapshot";

/* ---------- validation ---------- */

const snapshotSchema = z.object({
  url: z
    .string()
    .max(2048)
    .transform((s) => s.trim())
    .pipe(z.string().url("Please enter a valid URL.")),
  email: z
    .string()
    .max(255)
    .transform((s) => s.trim().toLowerCase())
    .pipe(z.string().email("Please enter a valid email address.")),
});

/* ---------- rate limiting (in-memory, per-process) ---------- */

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // 3 snapshots per email per hour

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

/* ---------- route handler ---------- */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = snapshotSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      );
    }

    const { url, email } = parsed.data;

    // Rate limit by email
    if (isRateLimited(email)) {
      return NextResponse.json(
        { error: "You've reached the limit of 3 free snapshots per hour. Try again later." },
        { status: 429 }
      );
    }

    // Capture lead (same pattern as /api/leads)
    try {
      await db.emailLead.create({
        data: { email, source: "free-snapshot" },
      });
    } catch (err) {
      // P2002 = duplicate — that's fine, lead already captured
      if (
        !(err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002")
      ) {
        throw err;
      }
    }

    // Track event
    trackEvent("free-snapshot-instant", "/free-snapshot", {
      competitor_url: url,
    });

    // Run lightweight analysis
    const result = await analyzeCompetitor(url);

    return NextResponse.json({ ok: true, snapshot: result });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Free snapshot error:", err);
    return NextResponse.json(
      { error: "Analysis failed. Please check the URL and try again." },
      { status: 500 }
    );
  }
}
