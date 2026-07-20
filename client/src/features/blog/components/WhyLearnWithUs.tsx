import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const benefits = [
  {
    title: "Expert Insights",
    description: "Learn directly from venture capitalists, successful founders, and industry veterans who have been there and done that.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Actionable Advice",
    description: "No fluff. Just practical, step-by-step frameworks you can apply to your startup immediately to drive growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Curated Resources",
    description: "Save time with our hand-picked templates, checklists, and guides tailored for early-stage companies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function WhyLearnWithUs() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-angeltors-ink mb-6">
            Why Learn With Us?
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            We are democratizing startup education. Our goal is to equip the next generation of founders with the knowledge they need to build enduring companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-angeltors-accent/10 text-angeltors-accent mb-6 group-hover:scale-110 group-hover:bg-angeltors-accent group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-angeltors-ink mb-4">{benefit.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
