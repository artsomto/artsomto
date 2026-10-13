# WEWIN database connectivity check and migration preparation

This update adds `GET /api/health/db`, which executes `SELECT 1` using Prisma and returns only a safe status. It never returns the connection string or raw database errors.

## Before deployment
- Keep `DATABASE_URL` configured in Vercel server-side environment variables.
- Do not put it in any `NEXT_PUBLIC_*` variable, client component, source file, or chat.
- Deploy this code, then open `/api/health/db` on the deployed backend.
- `database: connected` confirms a real query worked. `connection-failed` means inspect server logs and verify the Neon URL/SSL/network configuration without exposing secrets.

## Migration safety
The existing `prisma/schema.prisma` is an initial schema only; this update does not invent or apply a migration.

1. Use a separate Neon development branch/database first and put its URL in local `.env` (never commit `.env`).
2. Run `npm install`, `npm run db:validate`, `npm run db:generate`.
3. Review schema changes, then run `npm run db:migrate:dev -- --name init` against the development database. Review the generated `prisma/migrations/.../migration.sql` and test the app.
4. Commit the migration SQL and schema, but never commit `.env`.
5. Only after review and backup, set the intended production connection string in Vercel and run `npm run db:migrate:deploy` from a trusted release workflow/local shell configured for the intended production URL. Do not use `migrate dev` against production.

The current app still lacks production authentication, wallet/ledger transaction flows, campaign-entry persistence, payment integrations and real draws. Paid and cash features must remain disabled until appropriate legal and provider approvals.
