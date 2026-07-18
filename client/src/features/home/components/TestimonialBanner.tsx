import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function TestimonialBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 md:py-36 stripe-gradient-banner border-t-2 border-b-2 border-angeltors-border-dark/60">
      {/* Background Image Container with very low opacity */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="/images/testimonial.jpg"
          alt="Angeltors testimonial backdrop"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.97, y: 15 }}
          whileInView={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl depth-border bg-white p-8 md:p-16 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          {/* Decorative quote icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full border border-angeltors-border bg-white text-angeltors-accent shadow-sm">
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.192 15.757c0-.907-.188-1.754-.565-2.54a5.72 5.72 0 00-1.502-1.971 6.836 6.836 0 00-2.228-1.24 10.381 10.381 0 00-2.707-.375v-1.63a8.914 8.914 0 013.14.544c.907.363 1.696.862 2.368 1.497a6.287 6.287 0 011.519 2.277c.372.907.558 1.914.558 3.02h-1.083zm8.808 0c0-.907-.188-1.754-.565-2.54a5.72 5.72 0 00-1.502-1.971 6.836 6.836 0 00-2.228-1.24 10.381 10.381 0 00-2.707-.375v-1.63a8.914 8.914 0 013.14.544c.907.363 1.696.862 2.368 1.497a6.287 6.287 0 011.519 2.277c.372.907.558 1.914.558 3.02H20v.003z" />
            </svg>
          </div>

          <p className="font-serif text-lg md:text-2xl lg:text-3xl leading-relaxed text-angeltors-ink font-light italic text-justify sm:text-center">
            "Unlocking potential with Angeltors — we cultivate a vibrant ecosystem where visionary founders, strategic investors, and industry leaders converge to nurture innovation, drive growth, and shape the future of the startup ecosystem."
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-angeltors-border" />
            <span className="text-xs uppercase tracking-[3px] font-semibold text-angeltors-accent">
              Angeltors Ecosystem
            </span>
            <div className="h-px w-8 bg-angeltors-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
