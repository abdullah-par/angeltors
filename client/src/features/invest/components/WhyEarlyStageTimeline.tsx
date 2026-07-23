import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Sparkles, Maximize, LineChart, TrendingUp } from 'lucide-react';

export default function WhyEarlyStageTimeline() {
  const reducedMotion = useReducedMotion();

  const whyEarlyStage = [
    { title: "Groundbreaking Innovation", desc: "Pioneer disruptive technologies and business models that create entirely new market landscapes.", icon: Sparkles },
    { title: "Rapid Scalability", desc: "Back high-margin solutions with proven product-market fit that expand exponentially.", icon: Maximize },
    { title: "Diversified Growth", desc: "Integrate uncorrelated high-growth tech assets to strengthen overall portfolio yield.", icon: LineChart },
    { title: "Long-Term Wealth", desc: "Secure multi-fold returns through strategic acquisitions, secondary sales, or IPOs.", icon: TrendingUp },
  ];

  return (
    <section id="why-stage" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-angeltors-ink tracking-tight mb-4 leading-tight">
            Why Invest in Early Stage?
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
            The fundamental value drivers powering early-stage venture capital performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {whyEarlyStage.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-angeltors-accent/10 text-angeltors-accent group-hover:bg-angeltors-ink group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-angeltors-ink mb-3 tracking-tight">
                    {pt.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
                    {pt.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pillar 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-angeltors-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
