import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function BlogHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-white pt-28 pb-10 border-b border-slate-200/60 overflow-hidden">
      {/* Accent glow — very subtle, top-right */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-angeltors-accent/6 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 14 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          {/* Left — title block */}
          <div>
            {/* Eyebrow */}
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-angeltors-accent mb-3">
              Insights · Startups · Funding
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black tracking-[-0.03em] text-angeltors-ink leading-[1.08]">
              Learn With Angeltors.
            </h1>
          </div>

          {/* Right — descriptor + stat pills */}
          <div className="flex flex-col gap-4 sm:items-end sm:text-right max-w-sm">
            <p className="text-[0.95rem] text-slate-500 font-medium leading-[1.65]">
              Curated startup insights, funding guides, and growth strategies — written by founders and investors.
            </p>

            {/* Quick stats */}
            <div className="flex items-center gap-3 sm:justify-end flex-wrap">
              {[
                { label: "Articles", value: "36+" },
                { label: "Categories", value: "7" },
                { label: "Avg read", value: "11 min" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1.5"
                >
                  <span className="text-xs font-black text-angeltors-ink">{value}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
