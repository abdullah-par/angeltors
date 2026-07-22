import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Sparkles, Maximize, LineChart, TrendingUp } from 'lucide-react';

export default function WhyEarlyStageTimeline() {
  const reducedMotion = useReducedMotion();

  const whyEarlyStage = [
    { title: "Innovation", desc: "Pioneer groundbreaking technologies that create entirely new market landscapes.", icon: Sparkles },
    { title: "Scalability", desc: "Back solutions with strong market fit that expand and multiply rapidly.", icon: Maximize },
    { title: "Portfolio Growth", desc: "Integrate uncorrelated high-growth assets to strengthen overall median returns.", icon: LineChart },
    { title: "Long Term Wealth", desc: "Secure exponential returns through strategic acquisitions or IPOs over 5-10 years.", icon: TrendingUp },
  ];

  return (
    <section id="why-stage" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight mb-6 max-w-3xl leading-[1.05]">
            Why Early Stage?
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            The fundamental drivers behind early-stage venture capital.
          </p>
        </div>

        <div className="relative w-full pl-8 md:pl-0">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200" />
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-px bg-slate-200" />

          <div className="space-y-24 md:space-y-32 w-full relative z-10">
            {whyEarlyStage.map((pt, idx) => {
              const Icon = pt.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal group w-full">
                  <div className="absolute left-[-1.5rem] md:left-1/2 md:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-10 bg-white">
                    <div className="w-6 h-6 rounded-full bg-angeltors-accent/20 border-2 border-angeltors-accent group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-end pr-16' : 'ml-auto pl-16'}`}>
                    <motion.div
                      initial={reducedMotion ? {} : { opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className={`max-w-sm ${isEven ? 'text-right' : 'text-left'}`}
                    >
                      <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent group-hover:scale-110 group-hover:bg-angeltors-accent group-hover:text-white transition-all duration-500 ${isEven ? 'ml-auto' : ''}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-extrabold text-angeltors-ink mb-4 tracking-tight leading-tight">
                        {pt.title}
                      </h3>
                      <p className="text-lg text-slate-500 leading-relaxed font-medium">
                        {pt.desc}
                      </p>
                    </motion.div>
                  </div>

                  <div className="md:hidden w-full pl-12 py-2">
                    <motion.div
                      initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
                      whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100"
                    >
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-angeltors-ink mb-3 tracking-tight">
                        {pt.title}
                      </h3>
                      <p className="text-base text-slate-500 leading-relaxed font-medium">
                        {pt.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
