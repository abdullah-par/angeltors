interface OnboardingFieldProps {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  hint?: string;
  privacyNote?: string;
  children: React.ReactNode;
}

export function OnboardingField({
  label,
  required,
  optional,
  error,
  hint,
  privacyNote,
  children,
}: OnboardingFieldProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <label className="text-sm font-semibold text-angeltors-ink">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
          {optional && <span className="ml-1.5 text-xs font-normal text-slate-400">Optional</span>}
        </label>
        {privacyNote && (
          <span className="shrink-0 text-[11px] font-medium text-slate-400">{privacyNote}</span>
        )}
      </div>
      {hint && <p className="mt-0.5 text-xs text-slate-500">{hint}</p>}
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
