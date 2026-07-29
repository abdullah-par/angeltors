interface OnboardingReviewDetail {
  label: string;
  value?: string | null;
}

interface OnboardingReviewDetailsProps {
  title: string;
  details: OnboardingReviewDetail[];
}

/** A consistent, readable summary of the values entered in an onboarding step. */
export function OnboardingReviewDetails({ title, details }: OnboardingReviewDetailsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-700">{title}</h4>
      <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {details.map(({ label, value }) => (
          <div key={label} className="min-w-0">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
            <dd className="mt-1 break-words text-sm font-semibold text-angeltors-ink">{value?.trim() || "—"}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
