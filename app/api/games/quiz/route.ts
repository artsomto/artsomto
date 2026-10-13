import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
export const runtime = "nodejs";
const schema = z.object({ answers: z.array(z.number().int().min(0).max(3)).length(5) });
const questions = [
 {id:"q1",correct:1,explanation:"Abuja is Nigeria's federal capital."},
 {id:"q2",correct:1,explanation:"A hexagon has six sides."},
 {id:"q3",correct:2,explanation:"Mars is commonly called the Red Planet."},
 {id:"q4",correct:2,explanation:"Solar energy is replenished by sunlight."},
 {id:"q5",correct:0,explanation:"CPU means Central Processing Unit."}
];
export async function POST(req: NextRequest) {
 const parsed = schema.safeParse(await req.json().catch(() => null));
 if (!parsed.success) return NextResponse.json({error:"Submit exactly five valid answer indexes."},{status:400});
 const correct = parsed.data.answers.reduce((n, answer, i) => n + Number(answer === questions[i].correct), 0);
 return NextResponse.json({
   score: correct,
   maxScore: questions.length,
   xpAwarded: correct * 20,
   explanations: questions.map((q,i)=>({questionId:q.id,correct:parsed.data.answers[i]===q.correct,explanation:q.explanation})),
   persistence: "not-configured",
   demoOnly: true,
   note: "This endpoint is a demo scaffold. Do not use this response to grant production rewards until authenticated attempts, rate limits, persistence and anti-cheat controls are implemented."
 }, { headers: { "Cache-Control": "no-store" } });
}