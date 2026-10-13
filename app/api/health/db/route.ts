import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { service: "wewin-api", database: "not-configured" },
      { status: 503 },
    );
  }

  try {
    const result = await prisma.$queryRaw<Array<{ ok: number }>>`SELECT 1 AS ok`;
    return NextResponse.json({
      service: "wewin-api",
      database: result[0]?.ok === 1 ? "connected" : "query-unexpected-result",
      query: "SELECT 1",
      timestamp: new Date().toISOString(),
    }, { status: result[0]?.ok === 1 ? 200 : 503 });
  } catch (error) {
    // Do not return database URLs, credentials, or raw driver errors to callers.
    console.error("WEWIN database connectivity check failed", error instanceof Error ? error.name : "unknown_error");
    return NextResponse.json({
      service: "wewin-api",
      database: "connection-failed",
      hint: "Check the server-side DATABASE_URL, Neon status, and network/SSL settings in Vercel logs.",
      timestamp: new Date().toISOString(),
    }, { status: 503 });
  }
}
