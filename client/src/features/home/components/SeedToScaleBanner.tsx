import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function SeedToScaleBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-32 md:py-40 bg-angeltors-ink">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-angeltors-cyan/20 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Background Image Container with light overlay */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <img
          src="/images/strategic_partner.jpg"
          alt="Seed to scale strategic handshake"
          className="h-full w-full object-cover object-center grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-cyan/20 bg-angeltors-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-cyan shadow-sm backdrop-blur-sm">
            From Seed To Scale
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-white">
            Angeltors, Your Strategic Partner : Time to invest, time to build, time to Succeed
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-slate-400 font-medium">
            A partner throughout the growth journey. From seed funding to scalable success, we empower startups with the capital, mentorship, and network to thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
