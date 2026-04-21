type PlaceholderPageProps = {
  title: string;
};

/**
 * MVP stub for modules that will be implemented in later milestones.
 */
export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-2 text-xl font-semibold text-slate-900">{title}</h1>
      <p className="m-0 text-[0.9375rem] text-slate-600">
        This screen is a placeholder for the MVP roadmap.
      </p>
    </article>
  );
}
