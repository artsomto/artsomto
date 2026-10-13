async function getHealth() {
 try {
  const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const res = await fetch(`${base}/api/health`, {cache:"no-store"});
  return await res.json();
 } catch { return {status:"unknown",mode:"safe-demo"}; }
}
export default async function Home() {
 const health = await getHealth();
 return <main><div className="brand">W<span>✦</span> WEWIN</div><p className="eyebrow">BACKEND FOUNDATION · MILESTONE 1</p><h1>Play smart.<br/><span>Build with trust.</span></h1><p className="intro">WEWIN's backend foundation is deployed separately from the interactive demo. These endpoints are a safe starting point; authentication, persistent database writes and live payments are not enabled yet.</p><section><h2>Service status</h2><pre>{JSON.stringify(health,null,2)}</pre></section><section><h2>API routes</h2><ul><li><a href="/api/health">GET /api/health</a> — service and safety flags</li><li><a href="/api/campaigns">GET /api/campaigns</a> — demo campaign data</li></ul><p>Quiz scoring: POST /api/games/quiz with {"{ answers: [1,1,2,2,0] }"}.</p></section><p className="note">Demo fixtures only. No real money, paid entries, live draws or cash withdrawals. Configure PostgreSQL before enabling persistence.</p></main>;
}