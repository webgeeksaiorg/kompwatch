import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { trackEvent } from "@/lib/plausible";

const leadSchema = z.object({
  email: z
    .string()
    .max(255)
    .transform((s) => s.trim().toLowerCase())
    .pipe(z.string().email("Please enter a valid email address.")),
  source: z.string().min(1).max(64),
});

const ALLOWED_SOURCES = new Set([
  "sample-digest",
  "vs-crayon",
  "vs-klue",
  "vs-kompyte",
  "vs-battlecard",
  "vs-google-alerts",
  "vs-visualping",
  "vs-caelian",
  "vs-seeto",
  "vs-already-dev",
  "vs-rivalsense",
  "llm-visibility-waitlist",
]);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = leadSchema.parse(body);

    if (!ALLOWED_SOURCES.has(source)) {
      return NextResponse.json({ error: "Unknown source" }, { status: 400 });
    }

    let duplicate = false;
    try {
      await db.emailLead.create({
        data: { email, source },
      });
    } catch (err) {
      // P2002 = unique constraint violation. Treat duplicate as success
      // so the form is idempotent and doesn't leak which emails are stored.
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        duplicate = true;
      } else {
        throw err;
      }
    }

    // Server-side event — fires even when client-side Plausible is blocked.
    // The client-side `email-capture` event (in EmailCaptureForm) only fires
    // for ad-blocker-free users, so this is the source of truth for the funnel.
    trackEvent("email-capture", `/${source}`, {
      source,
      ...(duplicate ? { duplicate: "true" } : {}),
    });

    if (duplicate) return NextResponse.json({ ok: true, duplicate: true });
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Lead capture error:", err);
    return NextResponse.json(
      { error: "Could not save your email. Please try again." },
      { status: 500 }
    );
  }
}
