import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function GET() {
 const databaseConfigured = Boolean(process.env.DATABASE_URL);
 return NextResponse.json({
   service: "wewin-api",
   status: "ok",
   version: "0.2.0",
   mode: "safe-demo",
   database: databaseConfigured ? "configured-not-verified" : "not-configured",
   payments: "disabled",
   paidDraws: "disabled",
   paidGames: "disabled",
   realWithdrawals: "disabled",
   timestamp: new Date().toISOString()
 }, { headers: { "Cache-Control": "no-store" } });
}