import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function TestimonialBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-32 md:py-40 bg-slate-50 border-t border-slate-200/60">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.97, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] bg-white border border-slate-200/60 p-10 md:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] group"
        >
          {/* Decorative quote icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-white border border-slate-200/60 text-angeltors-accent shadow-xl group-hover:scale-110 transition-transform duration-500">
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.192 15.757c0-.907-.188-1.754-.565-2.54a5.72 5.72 0 00-1.502-1.971 6.836 6.836 0 00-2.228-1.24 10.381 10.381 0 00-2.707-.375v-1.63a8.914 8.914 0 013.14.544c.907.363 1.696.862 2.368 1.497a6.287 6.287 0 011.519 2.277c.372.907.558 1.914.558 3.02h-1.083zm8.808 0c0-.907-.188-1.754-.565-2.54a5.72 5.72 0 00-1.502-1.971 6.836 6.836 0 00-2.228-1.24 10.381 10.381 0 00-2.707-.375v-1.63a8.914 8.914 0 013.14.544c.907.363 1.696.862 2.368 1.497a6.287 6.287 0 011.519 2.277c.372.907.558 1.914.558 3.02H20v.003z" />
            </svg>
          </div>

          <p className="text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-tight text-angeltors-ink font-bold tracking-tight text-center">
            "Unlocking potential with Angeltors — we cultivate a vibrant ecosystem where visionary founders, strategic investors, and industry leaders converge to nurture innovation, drive growth, and shape the future of the startup ecosystem."
          </p>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-200" />
            <span className="text-sm uppercase tracking-widest font-bold text-slate-500">
              Angeltors Ecosystem
            </span>
            <div className="h-px w-12 bg-slate-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
