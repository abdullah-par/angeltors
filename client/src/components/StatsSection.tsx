import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../hooks/useCountUp";
import { useReducedMotion } from "../hooks/useReducedMotion";

const heroStats = [
  { value: 12, suffix: "+", label: "Active Deals" },
  { value: 340, suffix: "+", label: "Founders Onboarded" },
  { value: 18, suffix: "%", label: "Average Growth" },
  { value: 715, suffix: "+", label: "Numbers of Deals" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="mt-16">
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={isInView && !reducedMotion ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-xl font-semibold uppercase tracking-[3px] text-angeltors-accent">Real Numbers. Real Impact.</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {heroStats.map((stat, index) => {
          const count = useCountUp(stat.value, {
            duration: 1000,
            disabled: !isInView || reducedMotion,
          });
          return (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
              animate={isInView && !reducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="relative overflow-hidden rounded-2xl border border-angeltors-border bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-4xl font-extrabold tracking-tight text-angeltors-ink">
                {isInView ? count : 0}
                {stat.suffix}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[3px] text-angeltors-muted">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
