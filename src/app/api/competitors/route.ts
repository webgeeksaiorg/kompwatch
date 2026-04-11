import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { PLANS } from "@/lib/stripe";
import { z } from "zod";

const createSchema = z.object({
  name: z.string().min(1).max(100),
  url: z.string().url().max(500),
  trackPricing: z.boolean().optional().default(true),
  trackBlog: z.boolean().optional().default(true),
  trackFeatures: z.boolean().optional().default(true),
  trackJobs: z.boolean().optional().default(true),
  trackTech: z.boolean().optional().default(false),
});

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const competitors = await db.competitor.findMany({
    where: { userId: user.id },
    include: {
      _count: { select: { snapshots: true, changes: true } },
      changes: {
        orderBy: { createdAt: "desc" },
        take: 1,
        select: { createdAt: true, summary: true, changeType: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ competitors });
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  // Enforce plan limits
  const currentCount = await db.competitor.count({ where: { userId: user.id } });
  const limit = PLANS[user.plan].competitors;
  if (currentCount >= limit) {
    return NextResponse.json(
      { error: `Your ${user.plan} plan allows up to ${limit} competitors. Upgrade to add more.` },
      { status: 403 }
    );
  }

  // Check for duplicate URL
  const existing = await db.competitor.findUnique({
    where: { userId_url: { userId: user.id, url: parsed.data.url } },
  });
  if (existing) {
    return NextResponse.json({ error: "You are already tracking this URL." }, { status: 409 });
  }

  const competitor = await db.competitor.create({
    data: {
      userId: user.id,
      ...parsed.data,
    },
  });

  return NextResponse.json({ competitor }, { status: 201 });
}
