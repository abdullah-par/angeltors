import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function SeedToScaleBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 ag-gradient-banner border-t-2 border-b-2 border-angeltors-border-dark/60">
      {/* Background Image Container with light overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="/images/strategic_partner.jpg"
          alt="Seed to scale strategic handshake"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[3px] text-angeltors-accent">
            From Seed To Scale
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] leading-[1.05] text-angeltors-ink sm:text-4xl md:text-5xl">
            Angeltors, Your Strategic Partner : Time to invest, time to build, time to Succeed
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-angeltors-muted md:text-lg">
            A partner throughout the growth journey. From seed funding to scalable success, we empower startups with the capital, mentorship, and network to thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
