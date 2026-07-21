import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const serviceCards = [
  {
    title: "Investors",
    image: "/images/Investor1.jpg",
    description: "Discover curated opportunities, diligence summaries, and portfolio signals in one place.",
    tag: "Growth",
    actionLabel: "Sign Up",
  },
  {
    title: "Startup",
    image: "/images/Startup.jpg",
    description: "Access capital pathways, strategic support, and founder tools that accelerate momentum.",
    tag: "Success",
    actionLabel: "Sign Up",
  },
  {
    title: "Mentorship",
    image: "/images/Mentorship.jpg",
    description: "Pair with seasoned operators and advisors for strategy, execution, and milestone planning.",
    tag: "Potential",
    actionLabel: "Sign Up",
  },
  {
    title: "In-House Support",
    image: "/images/In-house-support.jpg",
    description: "A practical support layer for compliance, systems, operations, and growth coordination.",
    tag: "Strength",
    actionLabel: "Sign Up",
  },
];

export default function ServicesGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="our-services" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-angeltors-ink mb-6">
            Investors, Startups, Mentorship, and In-House Support.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-medium">
            A premium operating stack for people who need capital, guidance, and execution support in one place.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              <div className="relative overflow-hidden h-56">
                <span className="absolute top-6 right-6 z-10 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-angeltors-ink backdrop-blur-sm shadow-md">
                  {service.tag}
                </span>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-angeltors-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col flex-1 p-8 md:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-angeltors-ink mb-3 group-hover:text-angeltors-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="flex-1 text-base leading-relaxed text-slate-500 font-medium">
                  {service.description}
                </p>
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-angeltors-ink py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] gap-2 group/btn"
                  >
                    <span>{service.actionLabel}</span>
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
