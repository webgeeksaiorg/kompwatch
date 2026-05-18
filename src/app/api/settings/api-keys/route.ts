import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { planAllowsApiAccess } from "@/lib/stripe";
import { generateApiKey, hashApiKey, keyDisplayPrefix } from "@/lib/api-keys";
import { z } from "zod";

const createSchema = z.object({
  name: z.string().min(1).max(100),
});

/** List all API keys for the current user (excluding revoked) */
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!planAllowsApiAccess(user.plan)) {
    return NextResponse.json(
      { error: "API keys require a Team plan." },
      { status: 403 }
    );
  }

  const keys = await db.apiKey.findMany({
    where: { userId: user.id, revokedAt: null },
    select: {
      id: true,
      name: true,
      prefix: true,
      createdAt: true,
      lastUsedAt: true,
      expiresAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ keys });
}

/** Create a new API key */
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!planAllowsApiAccess(user.plan)) {
    return NextResponse.json(
      { error: "API keys require a Team plan." },
      { status: 403 }
    );
  }

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // Limit to 5 active keys per user
  const activeCount = await db.apiKey.count({
    where: { userId: user.id, revokedAt: null },
  });
  if (activeCount >= 5) {
    return NextResponse.json(
      { error: "Maximum 5 active API keys. Revoke an existing key first." },
      { status: 400 }
    );
  }

  const rawKey = generateApiKey();
  const keyHash = hashApiKey(rawKey);
  const prefix = keyDisplayPrefix(rawKey);

  const apiKey = await db.apiKey.create({
    data: {
      userId: user.id,
      name: parsed.data.name,
      keyHash,
      prefix,
    },
  });

  return NextResponse.json(
    {
      key: {
        id: apiKey.id,
        name: apiKey.name,
        prefix: apiKey.prefix,
        createdAt: apiKey.createdAt,
        // Return the raw key ONLY on creation — never stored or returned again
        rawKey,
      },
    },
    { status: 201 }
  );
}

/** Revoke an API key */
export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const keyId = searchParams.get("id");
  if (!keyId) {
    return NextResponse.json({ error: "Missing key id" }, { status: 400 });
  }

  const apiKey = await db.apiKey.findFirst({
    where: { id: keyId, userId: user.id },
  });
  if (!apiKey) {
    return NextResponse.json({ error: "API key not found" }, { status: 404 });
  }

  await db.apiKey.update({
    where: { id: keyId },
    data: { revokedAt: new Date() },
  });

  return NextResponse.json({ success: true });
}
