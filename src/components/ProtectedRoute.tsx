import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RoutePath } from "@/config/routes";
import { useAuth } from "@/hooks/useAuth";

/**
 * Renders child routes when authenticated; redirects to login or shows bootstrap UI.
 */
export function ProtectedRoute() {
  const { isPending, isAuthenticated } = useAuth();
  const location = useLocation();

  if (isPending) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600"
        role="status"
      >
        <span className="text-sm font-medium">Loading session…</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={RoutePath.Login} replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
