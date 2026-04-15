import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { PLANS } from "@/lib/stripe";
import { z } from "zod";

const entrySchema = z.object({
  name: z.string().min(1).max(100),
  url: z.string().url().max(500),
});

const bulkSchema = z.object({
  entries: z.array(entrySchema).min(1).max(50),
});

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = bulkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input. Each entry needs a name and valid URL." }, { status: 400 });
  }

  const currentCount = await db.competitor.count({ where: { userId: user.id } });
  const limit = PLANS[user.plan].competitors;
  const remaining = limit - currentCount;

  if (remaining <= 0) {
    return NextResponse.json(
      { error: `Your ${user.plan} plan allows up to ${limit} competitors. Upgrade to add more.` },
      { status: 403 },
    );
  }

  // Fetch existing URLs to check for duplicates
  const existingUrls = new Set(
    (await db.competitor.findMany({
      where: { userId: user.id },
      select: { url: true },
    })).map((c) => c.url),
  );

  const added: string[] = [];
  const skipped: { name: string; url: string; reason: string }[] = [];
  const seenUrls = new Set<string>();

  for (const entry of parsed.data.entries) {
    if (added.length >= remaining) {
      skipped.push({ ...entry, reason: "Plan limit reached" });
      continue;
    }

    if (existingUrls.has(entry.url) || seenUrls.has(entry.url)) {
      skipped.push({ ...entry, reason: "Already tracking this URL" });
      continue;
    }

    await db.competitor.create({
      data: {
        userId: user.id,
        name: entry.name,
        url: entry.url,
      },
    });

    added.push(entry.name);
    seenUrls.add(entry.url);
  }

  return NextResponse.json({ added: added.length, skipped }, { status: 201 });
}
