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
    <section ref={ref} className="py-14 md:py-16 bg-angeltors-ink relative overflow-hidden rounded-[2rem] shadow-2xl mt-10 md:mt-14 border border-angeltors-navy-light/30">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-angeltors-accent/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
      
      {/* Giant Background Text Watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0 px-4">
        <h2 className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-center bg-gradient-to-b from-slate-100 via-slate-400 to-slate-800 bg-clip-text text-transparent opacity-10">
          Our Growing <br /> Ecosystem
        </h2>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

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
