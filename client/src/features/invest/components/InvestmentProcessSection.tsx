import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Crosshair, FileSearch, Wallet, Activity, DoorOpen, ChevronRight } from 'lucide-react';

export default function InvestmentProcessSection() {
  const reducedMotion = useReducedMotion();

  const investmentProcess = [
    { id: "01", title: "Discover Startup", desc: "Browse our curated pipeline of thoroughly vetted early-stage opportunities.", icon: Crosshair },
    { id: "02", title: "Due Diligence", desc: "Review our comprehensive market, team, governance, and financial analyses.", icon: FileSearch },
    { id: "03", title: "Invest", desc: "Secure your equity seamlessly through our compliant, streamlined platform interface.", icon: Wallet },
    { id: "04", title: "Portfolio Tracking", desc: "Monitor company performance, KPIs, and investor updates in real-time.", icon: Activity },
    { id: "05", title: "Exit Opportunities", desc: "Realize returns through strategic acquisitions, secondary sales, or IPOs.", icon: DoorOpen },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="text-xs font-bold tracking-[4px] text-angeltors-accent uppercase mb-3 block">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-angeltors-ink tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            Our 5-step framework built to empower seamless angel investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative">
          {investmentProcess.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-slate-50 p-6 rounded-2xl border border-slate-200/70 hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xl font-black text-angeltors-accent/60 group-hover:text-angeltors-accent transition-colors">
                      {step.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-angeltors-ink group-hover:text-white flex items-center justify-center text-angeltors-ink shadow-xs transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-angeltors-ink mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < investmentProcess.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
