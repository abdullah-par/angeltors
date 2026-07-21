import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const heroStats = [
  { value: 20, suffix: "+", label: "Angel Investors" },
  { value: 5, suffix: "+", label: "Startups Onboarded" },
  { value: 36, suffix: "+", label: "Blog Posts Published" },
  { value: 35, suffix: "+", label: "Newsletter Subscribers" },
];

interface StatCardProps {
  stat: { value: number; suffix: string; label: string };
  index: number;
  isInView: boolean;
  reducedMotion: boolean;
}

function StatCard({ stat, index, isInView, reducedMotion }: StatCardProps) {
  const count = useCountUp(stat.value, {
    duration: 1000,
    disabled: !isInView || reducedMotion,
  });

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={isInView && !reducedMotion ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex flex-col items-center justify-center p-8 transition-all duration-500 group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
      <p className="relative z-10 text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-sm mb-3">
        {isInView ? count : 0}
        <span className="text-angeltors-cyan">{stat.suffix}</span>
      </p>
      <p className="relative z-10 text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors duration-300">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-angeltors-ink relative overflow-hidden rounded-[3rem] shadow-2xl mt-16 md:mt-24 border border-angeltors-navy-light/30">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-angeltors-accent/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView && !reducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-cyan/20 bg-angeltors-cyan/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-angeltors-cyan shadow-sm backdrop-blur-sm">
            Our Growing Ecosystem
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {heroStats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
