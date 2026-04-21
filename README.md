# Inventory SaaS — Frontend

React (Vite) SPA for the Inventory SaaS MVP: admin shell, cookie-based auth (HttpOnly JWT via the API), and placeholder modules for upcoming features.

## Prerequisites

- **Node.js** (LTS recommended)
- **npm**

## Setup

```bash
npm install
```

Copy environment files from the example and adjust as needed:

```bash
cp .env.example .env.development
```

Set `VITE_API_URL` to your backend origin (no trailing slash), for example `http://localhost:3000`.

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Dev server (Vite, `development` mode) |
| `npm run build` | Typecheck and production build |
| `npm run build:test` | Build with `test` mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | ESLint |

## Stack

- React 19, TypeScript, Vite 7
- React Router 7, TanStack Query, Axios (`withCredentials: true`)
- Tailwind CSS 4

## Project layout

Application code lives under `src/`: `app/` (router, providers), `api/` (Axios client and types), `pages/`, `components/`, `hooks/`, `config/`, and `features/` (domain modules). See `docs/architecture.md` for the full structure.

## Local development with the API

Run the backend (`inventory-saas-be`) on the same origin you configure in `VITE_API_URL`. The browser sends cookies to that origin; avoid storing tokens in `localStorage`.
