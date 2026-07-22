export default function PageLoader() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="flex flex-col items-center">
        {/* Logo with ambient pulse */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-angeltors-accent/20 rounded-full blur-xl animate-pulse" />
          <img
            src="/images/Angeltors_logo.png"
            alt="Angeltors"
            className="h-9 w-auto object-contain relative z-10"
          />
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-angeltors-ink via-angeltors-accent to-angeltors-cyan rounded-full animate-[shimmer_1.5s_infinite_linear]" />
        </div>
      </div>
    </div>
  );
}
