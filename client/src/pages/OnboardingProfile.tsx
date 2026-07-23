import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Rocket, LineChart, Network, Zap, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileOption {
  id: "startup" | "mentor" | "investor" | "freemium";
  num: string;
  title: string;
  desc: string;
  icon: any;
  targetRoute: string;
}

const profileOptions: ProfileOption[] = [
  {
    id: "startup",
    num: "01",
    title: "Startup",
    desc: "Comprehensive growth, fundraising ecosystem, and mentorship to scale rapidly.",
    icon: Rocket,
    targetRoute: "/dashboard/startup",
  },
  {
    id: "investor",
    num: "02",
    title: "Angel Investor",
    desc: "Exclusive access to vetted, high-potential startups and co-investment syndicates.",
    icon: LineChart,
    targetRoute: "/dashboard/investor",
  },
  {
    id: "mentor",
    num: "03",
    title: "Mentor",
    desc: "Guide promising founders, offer consultation, and build your consulting pipeline.",
    icon: Network,
    targetRoute: "/dashboard/mentor",
  },
  {
    id: "freemium",
    num: "04",
    title: "Freemium",
    desc: "Starting point for visionary founders validating business models before scaling.",
    icon: Zap,
    targetRoute: "/dashboard/freemium",
  },
];

export default function OnboardingProfile() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedId) return;
    const selected = profileOptions.find((p) => p.id === selectedId);
    if (selected) {
      navigate(selected.targetRoute);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>What Describes You? | Angeltors</title>
      </Helmet>

      <div className="min-h-screen flex flex-col justify-between bg-white font-sans selection:bg-angeltors-accent selection:text-white">
        {/* Navigation Bar */}
        <header className="w-full px-6 py-6 border-b border-slate-100 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center group text-slate-500 hover:text-angeltors-ink transition-colors text-sm font-bold">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <img src="/images/Angeltors_logo.png" alt="Angeltors" className="h-8 w-auto object-contain" />
          <div className="w-24" />
        </header>

        {/* Main Content Container */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 max-w-6xl mx-auto w-full text-center">
          {/* Header & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-2xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-black text-angeltors-ink tracking-tight mb-4 leading-tight">
              What Describes You?
            </h1>
            <p className="text-base sm:text-lg text-slate-500 font-medium">
              Select your primary goal to personalize your Angeltors experience.
            </p>
          </motion.div>

          {/* 4 Cards Grid - Styled like InvestmentProcessSection / How It Works Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
            {profileOptions.map((option, idx) => {
              const Icon = option.icon;
              const isSelected = selectedId === option.id;

              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedId(option.id)}
                  className={`group relative p-7 rounded-2xl border text-left cursor-pointer flex flex-col justify-between transition-all duration-300 ${isSelected
                    ? "bg-angeltors-ink text-white border-angeltors-ink shadow-2xl scale-[1.02]"
                    : "bg-slate-50 text-angeltors-ink border-slate-200/70 hover:bg-white hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5"
                    }`}
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-xl font-black transition-colors ${isSelected ? "text-angeltors-accent" : "text-angeltors-accent/60 group-hover:text-angeltors-accent"
                        }`}>
                        {option.num}
                      </span>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-xs transition-all duration-300 ${isSelected
                        ? "bg-white/10 text-white"
                        : "bg-white text-angeltors-ink group-hover:bg-angeltors-ink group-hover:text-white"
                        }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold tracking-tight mb-2 transition-colors ${isSelected ? "text-white" : "text-angeltors-ink"
                      }`}>
                      {option.title}
                    </h3>

                    {/* One Line Description */}
                    <p className={`text-xs font-medium leading-relaxed transition-colors ${isSelected ? "text-slate-300" : "text-slate-500"
                      }`}>
                      {option.desc}
                    </p>
                  </div>

                  {/* Selection Indicator Footer */}
                  <div className="mt-8 pt-4 border-t border-slate-200/40 flex items-center justify-between">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? "text-angeltors-cyan" : "text-slate-400"
                      }`}>
                      {isSelected ? "Selected" : "Select Option"}
                    </span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${isSelected ? "bg-angeltors-accent text-white" : "border border-slate-300 group-hover:border-angeltors-accent"
                      }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={handleContinue}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-angeltors-ink px-10 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-angeltors-accent hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Continue to Dashboard</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-xs text-slate-400 border-t border-slate-100">
          © Angeltors · Empowering global innovation
        </footer>
      </div>
    </>
  );
}
