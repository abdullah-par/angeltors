import { motion } from "framer-motion";
import { BookOpen, LayoutGrid, Clock } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function BlogHero() {
  const reducedMotion = useReducedMotion();

  const stats = [
    { label: "Articles", value: "36+", icon: BookOpen },
    { label: "Categories", value: "7", icon: LayoutGrid },
    { label: "Avg Read", value: "11 min", icon: Clock },
  ];

  return (
    <section className="relative bg-white pt-28 sm:pt-32 pb-12 sm:pb-16 border-b border-slate-200/60 overflow-hidden">
      {/* Dynamic ambient lighting & grid texture */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-angeltors-accent/10 via-angeltors-cyan/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-10"
        >
          {/* Left Header Content */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/25 bg-angeltors-accent/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-angeltors-accent shadow-xs mb-4">
              <span className="w-2 h-2 rounded-full bg-angeltors-accent animate-pulse" />
              Insights · Startups · Funding
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black tracking-[-0.03em] text-angeltors-ink leading-[1.08]">
              Learn With{" "}
              <span className="bg-gradient-to-r from-angeltors-ink via-slate-800 to-angeltors-accent bg-clip-text text-transparent">
                Angeltors.
              </span>
            </h1>
          </div>

          {/* Right Description & Quick Stats */}
          <div className="flex flex-col gap-6 lg:items-end lg:text-right max-w-md">
            <p className="text-base sm:text-[1.025rem] text-slate-500 font-medium leading-relaxed">
              Curated startup insights, funding guides, and growth strategies — written by founders and investors for ambitious builders.
            </p>

            {/* Stat Pill Badges */}
            <div className="flex items-center gap-3 lg:justify-end flex-wrap">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-slate-50/90 border border-slate-200/80 px-4 py-2 shadow-xs transition-all duration-300 hover:border-angeltors-accent/30 hover:bg-white hover:shadow-md"
                >
                  <Icon className="w-3.5 h-3.5 text-angeltors-accent transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-black text-angeltors-ink">{value}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
