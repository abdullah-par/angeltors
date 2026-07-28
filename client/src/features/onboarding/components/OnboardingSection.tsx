interface OnboardingSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function OnboardingSection({ title, description, children }: OnboardingSectionProps) {
  return (
    <div>
      <div className="border-b border-angeltors-border px-6 py-5 sm:px-8">
        <h2 className="text-base font-bold text-angeltors-ink">{title}</h2>
        {description && <p className="mt-0.5 text-sm text-slate-500">{description}</p>}
      </div>
      <div className="space-y-6 p-6 sm:p-8">{children}</div>
    </div>
  );
}
