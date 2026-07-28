import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Rocket,
  LineChart,
  Network,
  Zap,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import SpotlightCard from "@/components/common/SpotlightCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProfileOption {
  id: "startup" | "mentor" | "investor" | "freemium";
  num: string;
  title: string;
  desc: string;
  tagline: string;
  icon: LucideIcon;
  targetRoute: string;
}

const profileOptions: ProfileOption[] = [
  {
    id: "startup",
    num: "01",
    title: "Startup",
    tagline: "Build & scale",
    desc: "Comprehensive growth, fundraising ecosystem, and mentorship to scale rapidly.",
    icon: Rocket,
    targetRoute: "/onboarding/startup",
  },
  {
    id: "investor",
    num: "02",
    title: "Angel Investor",
    tagline: "Discover & invest",
    desc: "Exclusive access to vetted, high-potential startups and co-investment syndicates.",
    icon: LineChart,
    targetRoute: "/onboarding/investor",
  },
  {
    id: "mentor",
    num: "03",
    title: "Mentor",
    tagline: "Guide & connect",
    desc: "Guide promising founders, offer consultation, and build your consulting pipeline.",
    icon: Network,
    targetRoute: "/onboarding/mentor",
  },
  {
    id: "freemium",
    num: "04",
    title: "Freemium",
    tagline: "Explore & validate",
    desc: "Starting point for visionary founders validating business models before scaling.",
    icon: Zap,
    targetRoute: "/onboarding/freemium",
  },
];

export default function OnboardingProfile() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedOption = profileOptions.find((p) => p.id === selectedId);

  const handleContinue = () => {
    if (!selectedOption) return;
    navigate(selectedOption.targetRoute);
  };

  return (
    <>
      <Helmet>
        <title>What Describes You? | Angeltors</title>
      </Helmet>

      <div className="relative min-h-screen flex flex-col overflow-hidden bg-white font-sans selection:bg-angeltors-accent selection:text-white">
        {/* Ambient background — matches Hero / Register */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          {!reducedMotion && (
            <>
              <motion.div
                animate={{ x: [0, 40, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.15, 0.9, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-angeltors-accent/20 blur-[130px] mix-blend-multiply opacity-60"
              />
              <motion.div
                animate={{ x: [0, -30, 40, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.1, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-1/4 h-[450px] w-[450px] rounded-full bg-angeltors-cyan/15 blur-[120px] mix-blend-multiply opacity-50"
              />
            </>
          )}
        </div>

        {/* Header */}
        <header className="relative z-10 w-full px-6 py-6 flex items-center justify-between border-b border-slate-100">
          <Link
            to="/"
            className="inline-flex items-center group text-slate-500 hover:text-angeltors-ink transition-colors text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <img src="/images/Angeltors_logo.png" alt="Angeltors" className="h-8 w-auto object-contain" />
          <div className="w-24" />
        </header>

        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-14 max-w-6xl mx-auto w-full">
          {/* Hero copy */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 sm:mb-14 max-w-3xl mx-auto text-center"
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-angeltors-ink tracking-tight mb-5 leading-[1.08]">
              What Describes{" "}
              <span className="text-angeltors-accent">You?</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
              Pick the role that fits you best we&apos;ll tailor your dashboard, tools, and community from there.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
            {profileOptions.map((option, idx) => {
              const Icon = option.icon;
              const isSelected = selectedId === option.id;

              return (
                <motion.div
                  key={option.id}
                  initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
                  animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        className="absolute -inset-1 rounded-[1.35rem] bg-angeltors-accent/30 blur-md -z-10"
                      />
                    )}
                  </AnimatePresence>

                  <SpotlightCard
                    spotlightColor={isSelected ? "rgba(255,255,255,0.1)" : "rgba(0, 55, 158, 0.08)"}
                    className={`group h-full rounded-2xl cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-angeltors-ink text-white shadow-2xl scale-[1.02]"
                        : "bg-white text-angeltors-ink border border-slate-200/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedId(option.id)}
                      className="w-full h-full p-7 text-left flex flex-col justify-between min-h-[220px] cursor-pointer"
                    >
                      <div>
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex flex-col gap-1">
                            <span
                              className={`text-xl font-black transition-colors ${
                                isSelected ? "text-angeltors-cyan" : "text-angeltors-accent/60 group-hover:text-angeltors-accent"
                              }`}
                            >
                              {option.num}
                            </span>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-widest ${
                                isSelected ? "text-white/50" : "text-slate-400"
                              }`}
                            >
                              {option.tagline}
                            </span>
                          </div>

                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                              isSelected
                                ? "bg-white/10 text-white"
                                : "bg-white text-angeltors-ink border border-slate-200/60 group-hover:bg-angeltors-ink group-hover:text-white group-hover:border-angeltors-ink"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <h3
                          className={`text-xl font-bold tracking-tight mb-2 transition-colors ${
                            isSelected ? "text-white" : "text-angeltors-ink"
                          }`}
                        >
                          {option.title}
                        </h3>

                        <p
                          className={`text-xs font-medium leading-relaxed transition-colors ${
                            isSelected ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {option.desc}
                        </p>
                      </div>

                      <div
                        className={`mt-8 pt-4 border-t flex items-center justify-between ${
                          isSelected ? "border-white/15" : "border-slate-200/40"
                        }`}
                      >
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                            isSelected ? "text-angeltors-cyan" : "text-slate-400 group-hover:text-angeltors-accent"
                          }`}
                        >
                          {isSelected ? "Selected" : "Select Option"}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isSelected
                              ? "bg-angeltors-accent text-white"
                              : "border border-slate-300 group-hover:border-angeltors-accent"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={handleContinue}
              disabled={!selectedId}
              className={`group inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-bold transition-all duration-300 ${
                selectedId
                  ? "bg-angeltors-ink text-white shadow-lg hover:bg-angeltors-accent hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              {selectedOption ? (
                <>
                  Continue as {selectedOption.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              ) : (
                <>Select an option to continue</>
              )}
            </button>

            <p className="text-xs text-slate-400 font-medium">
              You can always update your profile later in settings.
            </p>
          </motion.div>
        </main>

        <footer className="relative z-10 w-full py-6 text-center text-xs text-slate-400 border-t border-slate-100">
          © Angeltors · Empowering global innovation
        </footer>
      </div>
    </>
  );
}
