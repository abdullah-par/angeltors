import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface OnboardingLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function OnboardingLayout({ title, description, children }: OnboardingLayoutProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen bg-white font-sans text-angeltors-ink selection:bg-angeltors-accent selection:text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        {!reducedMotion && (
          <>
            <motion.div
              animate={{ x: [0, 40, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.15, 0.9, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-1/4 h-[420px] w-[420px] rounded-full bg-angeltors-accent/15 blur-[120px] mix-blend-multiply opacity-60"
            />
            <motion.div
              animate={{ x: [0, -30, 40, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.1, 1] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-1/4 h-[380px] w-[380px] rounded-full bg-angeltors-cyan/10 blur-[110px] mix-blend-multiply opacity-50"
            />
          </>
        )}
      </div>

      <header className="sticky top-0 z-30 border-b border-angeltors-border bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/onboarding"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-angeltors-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Change profile
          </Link>
          <Link to="/">
            <img src="/images/Angeltors_logo.png" alt="Angeltors" className="h-7 w-auto" />
          </Link>
          <div className="w-28" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-black tracking-tight text-angeltors-ink sm:text-3xl">{title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">{description}</p>
        </div>
        {children}
      </main>
    </div>
  );
}
