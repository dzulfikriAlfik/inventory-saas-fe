# Vite + TypeScript setup (inventory-saas-fe)

## Prerequisites

- Node.js 20+ recommended (matches current Vite 7 / toolchain expectations).

## Environment files

Vite injects only variables prefixed with `VITE_`.

| File               | When used                                      |
|--------------------|------------------------------------------------|
| `.env.development` | `npm run dev` (mode `development`)             |
| `.env.production`  | `npm run build` / production preview           |
| `.env.test`        | Reserved for future Vitest / CI test builds    |
| `.env.example`     | Template for new clones (copy to `.env.local`) |

Required variable: `VITE_API_URL` — backend origin (no trailing slash), e.g. `http://localhost:3000`.

## Scripts

- `npm run dev` — Vite dev server (default port 5173).
- `npm run build` — `tsc --noEmit` then production bundle to `dist/`.
- `npm run preview` — serve `dist/` locally.

## Path alias

`@/*` maps to `src/*` (see `vite.config.ts` and `tsconfig.json`).

## CORS and cookies

The API must allow the frontend origin and credentials. The Axios client uses `withCredentials: true` so HttpOnly cookies are sent on cross-origin requests during development (e.g. `localhost:5173` → `localhost:3000`).
