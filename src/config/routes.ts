/**
 * Client route pathnames (leading slash).
 */
/**
 * React Router nested `path` prop uses segments without a leading slash.
 */
export function routeSegment(fullPath: string): string {
  return fullPath.replace(/^\//, "");
}

export const RoutePath = {
  Root: "/",
  Login: "/login",
  Dashboard: "/dashboard",
  Products: "/products",
  Warehouses: "/warehouses",
  Suppliers: "/suppliers",
  Customers: "/customers",
  Stocks: "/stocks",
  StockMovements: "/stock-movements",
  PurchaseReceipts: "/purchase-receipts",
  SalesShipments: "/sales-shipments",
  StockAdjustments: "/stock-adjustments",
  /** Team / membership management (architecture: `features/members`). */
  Members: "/members"
} as const;
