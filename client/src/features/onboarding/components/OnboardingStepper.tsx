import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface OnboardingStep {
  number: number;
  title: string;
  icon?: LucideIcon;
}

interface OnboardingStepperProps {
  steps: OnboardingStep[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function OnboardingStepper({ steps, currentStep, onStepClick }: OnboardingStepperProps) {
  const progress = steps.length > 1 ? ((currentStep - 1) / (steps.length - 1)) * 100 : 0;

  return (
    <div className="border-b border-angeltors-border px-6 py-6 sm:px-8">
      <div className="mb-4 flex items-center justify-between text-xs font-medium text-slate-500 sm:hidden">
        <span>
          Step {currentStep} of {steps.length}
        </span>
        <span className="text-angeltors-accent">{steps[currentStep - 1]?.title}</span>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-[15px] h-px bg-angeltors-border" />
        <div
          className="absolute left-0 top-[15px] h-px bg-angeltors-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />

        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isCompleted = currentStep > step.number;
            const isActive = currentStep === step.number;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => onStepClick(step.number)}
                className="group flex max-w-[120px] flex-col items-center gap-2 focus:outline-none"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    isCompleted
                      ? "bg-angeltors-ink text-white"
                      : isActive
                      ? "bg-angeltors-accent text-white ring-4 ring-angeltors-accent/15"
                      : "border border-angeltors-border bg-white text-slate-400 group-hover:border-slate-300"
                  }`}
                >
                  {isCompleted ? <Check className="h-4 w-4 stroke-[2.5]" /> : step.number}
                </div>
                <span
                  className={`hidden text-center text-[11px] font-semibold leading-tight sm:block ${
                    isActive ? "text-angeltors-accent" : isCompleted ? "text-angeltors-ink" : "text-slate-400"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
