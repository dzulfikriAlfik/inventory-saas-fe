import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { routeSegment, RoutePath } from "@/config/routes";
import { CustomersPage } from "@/pages/CustomersPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { LoginPage } from "@/pages/LoginPage";
import { MembersPage } from "@/pages/MembersPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { PurchaseReceiptsPage } from "@/pages/PurchaseReceiptsPage";
import { SalesShipmentsPage } from "@/pages/SalesShipmentsPage";
import { StockAdjustmentsPage } from "@/pages/StockAdjustmentsPage";
import { StockMovementsPage } from "@/pages/StockMovementsPage";
import { StocksPage } from "@/pages/StocksPage";
import { SuppliersPage } from "@/pages/SuppliersPage";
import { WarehousesPage } from "@/pages/WarehousesPage";

/**
 * Application routes: public login and protected admin shell with MVP module placeholders.
 */
export function AppRouter() {
  return (
    <Routes>
      <Route path={RoutePath.Login} element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to={RoutePath.Dashboard} replace />} />
          <Route path={routeSegment(RoutePath.Dashboard)} element={<DashboardPage />} />
          <Route path={routeSegment(RoutePath.Products)} element={<ProductsPage />} />
          <Route path={routeSegment(RoutePath.Warehouses)} element={<WarehousesPage />} />
          <Route path={routeSegment(RoutePath.Suppliers)} element={<SuppliersPage />} />
          <Route path={routeSegment(RoutePath.Customers)} element={<CustomersPage />} />
          <Route path={routeSegment(RoutePath.Stocks)} element={<StocksPage />} />
          <Route path={routeSegment(RoutePath.StockMovements)} element={<StockMovementsPage />} />
          <Route path={routeSegment(RoutePath.PurchaseReceipts)} element={<PurchaseReceiptsPage />} />
          <Route path={routeSegment(RoutePath.SalesShipments)} element={<SalesShipmentsPage />} />
          <Route path={routeSegment(RoutePath.StockAdjustments)} element={<StockAdjustmentsPage />} />
          <Route path={routeSegment(RoutePath.Members)} element={<MembersPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={RoutePath.Login} replace />} />
    </Routes>
  );
}
