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
    <section id="our-services" className="bg-transparent">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-angeltors-accent">What we offer</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.05] text-angeltors-ink sm:text-4xl">Investors, Startups, Mentorship, and In-House Support.</h2>
        <p className="mt-4 text-base leading-relaxed text-angeltors-muted sm:text-lg">A premium operating stack for people who need capital, guidance, and execution support in one place.</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {serviceCards.map((service, index) => (
          <motion.div
            key={service.title}
            initial={reducedMotion ? {} : { opacity: 0, y: 14 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            className="flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-angeltors-border-mid/85 stripe-gradient-card transition-all duration-300 ease-out hover:-translate-y-1 hover:stripe-shadow-lg stripe-shadow-sm"
          >
            <div className="relative overflow-hidden">
              <span className="absolute top-4 right-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-angeltors-ink backdrop-blur-sm shadow-sm">
                {service.tag}
              </span>
              <motion.img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
                initial={{ scale: 1 }}
                whileHover={reducedMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-lg font-bold text-angeltors-ink">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-angeltors-muted">{service.description}</p>
              <div className="mt-8 pt-6 border-t border-angeltors-border">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-angeltors-accent py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:brightness-90 hover:-translate-y-[2px] hover:shadow-md gap-1.5"
                >
                  <span>{service.actionLabel}</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
