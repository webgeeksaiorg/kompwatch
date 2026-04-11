import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  const competitor = await db.competitor.findUnique({ where: { id } });
  if (!competitor || competitor.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await db.competitor.delete({ where: { id } });
  return NextResponse.json({ success: true });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  const competitor = await db.competitor.findUnique({ where: { id } });
  if (!competitor || competitor.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const body = await req.json();
  const updated = await db.competitor.update({
    where: { id },
    data: {
      isActive: body.isActive,
      name: body.name,
      trackPricing: body.trackPricing,
      trackBlog: body.trackBlog,
      trackFeatures: body.trackFeatures,
      trackJobs: body.trackJobs,
      trackTech: body.trackTech,
    },
  });

  return NextResponse.json({ competitor: updated });
}
