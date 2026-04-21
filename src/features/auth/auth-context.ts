import { createContext } from "react";
import type { AuthMeResponse, LoginRequest } from "@/api/types";

export type AuthContextValue = {
  me: AuthMeResponse | null | undefined;
  isPending: boolean;
  isAuthenticated: boolean;
  login: (body: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  refetchSession: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
