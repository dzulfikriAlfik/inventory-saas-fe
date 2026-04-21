import axios from "axios";
import { env } from "@/config/env";

/**
 * Shared Axios instance: sends cookies cross-origin (`withCredentials`) for HttpOnly JWT cookies.
 * Do not store tokens in localStorage or sessionStorage.
 */
export const apiClient = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});
