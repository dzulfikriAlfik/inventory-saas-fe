import axios from "axios";
import { apiClient } from "@/api/axios";
import type { AuthMeResponse, LoginRequest } from "@/api/types";

const AUTH_ME = "/auth/me";
const AUTH_LOGIN = "/auth/login";
const AUTH_LOGOUT = "/auth/logout";

/**
 * Fetches current user + organization. Returns `null` when unauthenticated (401).
 */
export async function fetchAuthMe(): Promise<AuthMeResponse | null> {
  try {
    const { data } = await apiClient.get<AuthMeResponse>(AUTH_ME);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return null;
    }
    throw error;
  }
}

/**
 * Login with email/password; backend sets HttpOnly cookies on success.
 */
export async function login(request: LoginRequest): Promise<void> {
  await apiClient.post(AUTH_LOGIN, request);
}

/**
 * Clears session cookies on the server (best-effort).
 */
export async function logout(): Promise<void> {
  await apiClient.post(AUTH_LOGOUT);
}
