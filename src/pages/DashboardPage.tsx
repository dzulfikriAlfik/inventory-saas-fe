import { PlaceholderPage } from "@/components/PlaceholderPage";

/**
 * Dashboard: MVP metrics (total products, total warehouses) will be wired to the API later.
 */
export function DashboardPage() {
  return (
    <div>
      <PlaceholderPage title="Dashboard" />
      <section className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4" aria-label="MVP metrics">
        <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <span className="text-[0.8125rem] text-slate-600">Total products</span>
          <span className="text-2xl font-bold text-slate-900">—</span>
        </div>
        <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <span className="text-[0.8125rem] text-slate-600">Total warehouses</span>
          <span className="text-2xl font-bold text-slate-900">—</span>
        </div>
      </section>
    </div>
  );
}
