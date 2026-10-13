# WEWIN backend starter — milestone 1

This is a Next.js/TypeScript backend foundation, separate from the original static preview. It adds:
- `GET /api/health`: service status and fail-closed feature flags.
- `GET /api/campaigns`: clearly labelled demo campaign fixtures.
- `POST /api/games/quiz`: schema-validated demo quiz scoring.
- Initial Prisma/PostgreSQL data model for users, campaigns, entries, append-only ledger entries, game attempts, rewards and audit events.

## Local setup
1. Install Node.js 22 or 24.
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000 and `/api/health`.

## Database
Copy `.env.example` to `.env` and set `DATABASE_URL` only to a database you control. Then run `npx prisma validate` and `npx prisma migrate dev --name init` after reviewing the schema. No database URL or secret is included.

## Important current limitations
This milestone does NOT yet implement authentication, production database writes, payment webhooks, entries, draws, refunds, withdrawals, or admin mutations. The quiz endpoint is public and demo-only. It must not grant production rewards until authentication, server-side attempt persistence, anti-cheat, rate limiting and abuse protection are implemented.

Money is represented as integer minor units (`BigInt`) in the schema. Use a balanced, append-only double-entry ledger for real funds. Do not count deposits as revenue or silently alter ledger history.

## Safety gates
Paid-entry draws, paid chance spins, real-money predictions/betting, paid jackpots and withdrawals remain disabled until legal/licensing and payment provider approvals are confirmed for the intended jurisdictions. Free games and sponsored rewards also require appropriate review. Never claim guaranteed income or fabricate live winners/prizes.
