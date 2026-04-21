import { NavLink, Outlet } from "react-router-dom";
import { RoutePath } from "@/config/routes";
import { useAuth } from "@/hooks/useAuth";

const navItems: { to: string; label: string }[] = [
  { to: RoutePath.Dashboard, label: "Dashboard" },
  { to: RoutePath.Products, label: "Products" },
  { to: RoutePath.Warehouses, label: "Warehouses" },
  { to: RoutePath.Suppliers, label: "Suppliers" },
  { to: RoutePath.Customers, label: "Customers" },
  { to: RoutePath.Stocks, label: "Stocks" },
  { to: RoutePath.StockMovements, label: "Stock Movements" },
  { to: RoutePath.PurchaseReceipts, label: "Purchase Receipts" },
  { to: RoutePath.SalesShipments, label: "Sales Shipments" },
  { to: RoutePath.StockAdjustments, label: "Stock Adjustments" },
  { to: RoutePath.Members, label: "Members" }
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-slate-700 text-white"
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
  ].join(" ");

/**
 * MVP shell: sidebar navigation, header with org name, main content area.
 */
export function AdminLayout() {
  const { me, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside
        className="flex w-56 shrink-0 flex-col border-r border-slate-800 bg-slate-900"
        aria-label="Main navigation"
      >
        <div className="border-b border-slate-800 px-4 py-4 text-lg font-semibold tracking-tight text-white">
          Inventory
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-2">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
          <div className="truncate text-sm font-medium text-slate-800">
            {me?.organization?.name ?? "Organization"}
          </div>
          <button
            type="button"
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            onClick={() => void logout()}
          >
            Log out
          </button>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
