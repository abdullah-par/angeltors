interface OnboardingCardProps {
  children: React.ReactNode;
}

export function OnboardingCard({ children }: OnboardingCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-angeltors-border bg-white shadow-[0_1px_3px_rgba(10,37,64,0.06),0_8px_24px_rgba(10,37,64,0.04)]">
      {children}
    </div>
  );
}
