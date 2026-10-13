import { NextResponse } from "next/server";
import { demoCampaigns } from "@/lib/demo-data";
export const runtime = "nodejs";
export async function GET() {
 return NextResponse.json({
   items: demoCampaigns,
   count: demoCampaigns.length,
   source: "demo-fixtures",
   message: "Demo campaigns only. Database persistence and live entries are not enabled."
 }, { headers: { "Cache-Control": "no-store" } });
}