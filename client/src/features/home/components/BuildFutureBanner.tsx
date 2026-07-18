import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function BuildFutureBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 ag-gradient-banner border-t-2 border-b-2 border-angeltors-border-dark/60">
      {/* Background Image Container with very faint opacity */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="/images/ab1.jpg"
          alt="Grow Together Background"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Column 1: Heading and Info */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[3px] text-angeltors-accent">
              Build The Future
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] leading-[1.05] text-angeltors-ink sm:text-4xl md:text-5xl">
              It's time to grow together : with visionary Founders and strategic Investors
            </h2>
            <p className="text-base leading-relaxed text-angeltors-muted md:text-lg max-w-xl">
              The future of growth with Angeltors that empowers innovation and shapes the future of startup ecosystem. Angeltors drives impactful collaboration and delivers exceptional returns
            </p>
            <div className="mt-10 flex flex-wrap gap-4 pt-2">
              <a
                href="#about-us"
                className="rounded-full border border-[#D8DEE9] bg-white px-6 py-3.5 text-sm font-semibold text-angeltors-ink transition-all duration-300 inline-flex items-center gap-1.5 hover:bg-neutral-50 hover:-translate-y-[2px] hover:shadow-sm"
              >
                <span>Read More</span>
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="rounded-full bg-angeltors-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 inline-flex items-center gap-1.5 hover:brightness-90 hover:-translate-y-[2px] hover:shadow-md"
              >
                <span>Contact Us</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Styled Image Presentation */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.95, x: 24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl depth-border bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <img
                src="/images/time-to-grow.jpg"
                alt="Visionary founders and investors meeting"
                className="rounded-[14px] h-[22rem] w-full object-cover md:h-[26rem]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
