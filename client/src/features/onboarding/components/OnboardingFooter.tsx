import { ArrowLeft, ArrowRight } from "lucide-react";

interface OnboardingFooterProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  onBack: () => void;
  onNext: () => void;
  isLastStep?: boolean;
  submitLabel?: string;
}

export function OnboardingFooter({
  currentStep,
  totalSteps,
  stepTitle,
  onBack,
  onNext,
  isLastStep,
  submitLabel = "Complete profile",
}: OnboardingFooterProps) {
  return (
    <div className="flex flex-col gap-4 border-t border-angeltors-border bg-slate-50/50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div className="flex items-center gap-3">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg border border-angeltors-border bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-angeltors-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-lg border border-angeltors-border bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-300 cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        )}
        <span className="hidden text-xs text-slate-400 sm:inline">
          Step {currentStep} of {totalSteps} · {stepTitle}
        </span>
      </div>

      {isLastStep ? (
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-angeltors-ink px-6 py-2.5 text-sm font-bold text-white transition hover:bg-angeltors-accent sm:w-auto"
        >
          {submitLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-angeltors-ink px-6 py-2.5 text-sm font-bold text-white transition hover:bg-angeltors-accent sm:w-auto"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
