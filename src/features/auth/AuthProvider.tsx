import { useCallback, useMemo, type ReactNode } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAuthMe, login as loginRequest, logout as logoutRequest } from "@/api/auth";
import type { AuthMeResponse, LoginRequest } from "@/api/types";
import { AuthContext, type AuthContextValue } from "@/features/auth/auth-context";

const AUTH_ME_KEY = ["auth", "me"] as const;

type AuthProviderProps = {
  children: ReactNode;
};

/**
 * Provides session state from `GET /auth/me` (HttpOnly cookies; no token storage).
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();

  const { data, isPending, refetch } = useQuery<AuthMeResponse | null>({
    queryKey: AUTH_ME_KEY,
    queryFn: fetchAuthMe,
    staleTime: 5 * 60 * 1000,
    retry: false
  });

  const loginMutation = useMutation({
    mutationFn: async (body: LoginRequest) => {
      await loginRequest(body);
      await queryClient.invalidateQueries({ queryKey: AUTH_ME_KEY });
    }
  });

  const logoutMutation = useMutation({
    mutationFn: logoutRequest,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: AUTH_ME_KEY });
    }
  });

  const login = useCallback(
    async (body: LoginRequest) => {
      await loginMutation.mutateAsync(body);
    },
    [loginMutation]
  );

  const logout = useCallback(async () => {
    await logoutMutation.mutateAsync();
  }, [logoutMutation]);

  const refetchSession = useCallback(async () => {
    await refetch();
  }, [refetch]);

  const value = useMemo<AuthContextValue>(
    () => ({
      me: data,
      isPending,
      isAuthenticated: Boolean(data?.user),
      login,
      logout,
      refetchSession
    }),
    [data, isPending, login, logout, refetchSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
