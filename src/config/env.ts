/**
 * Validated Vite environment (see `.env.development`, `.env.production`, `.env.test`).
 */
function getApiUrl(): string {
  const url = import.meta.env.VITE_API_URL;
  if (!url || typeof url !== "string") {
    throw new Error("VITE_API_URL is missing. Copy .env.example and set VITE_API_URL.");
  }
  return url.replace(/\/$/, "");
}

export const env = {
  apiUrl: getApiUrl(),
  /** Vite mode: `development` | `production` | custom (e.g. `test` when wired in CI). */
  mode: import.meta.env.MODE
};
