import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Crosshair, FileSearch, Wallet, Activity, DoorOpen } from 'lucide-react';

export default function InvestmentProcessSection() {
  const reducedMotion = useReducedMotion();

  const investmentProcess = [
    { id: "01", title: "Discover Startup", desc: "Browse our curated pipeline of thoroughly vetted early-stage opportunities.", icon: Crosshair },
    { id: "02", title: "Due Diligence", desc: "Review our comprehensive market, team, and financial analyses.", icon: FileSearch },
    { id: "03", title: "Invest", desc: "Secure your equity seamlessly through our streamlined platform interface.", icon: Wallet },
    { id: "04", title: "Portfolio Tracking", desc: "Monitor performance, milestones, and company updates in real-time.", icon: Activity },
    { id: "05", title: "Exit", desc: "Realize returns through strategic acquisitions, next-round funding, or IPOs.", icon: DoorOpen },
  ];

  return (
    <section id="process" className="py-16 md:py-20 bg-slate-50 relative overflow-hidden border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-angeltors-ink tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Our structured 5-step framework designed for seamless angel investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {investmentProcess.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-angeltors-accent/40">{step.id}</span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-angeltors-ink">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-angeltors-ink mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
