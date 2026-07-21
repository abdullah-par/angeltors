import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function TestimonialBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, scale: 0.97, y: 30 }}
      whileInView={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col justify-center rounded-3xl bg-white border border-slate-200/60 p-8 md:p-10 h-full shadow-sm transition-all duration-500 hover:shadow-md group"
    >
      {/* Decorative quote icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200/60 text-angeltors-accent shadow-sm group-hover:scale-110 transition-transform duration-500">
        <svg
          className="h-4 w-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.192 15.757c0-.907-.188-1.754-.565-2.54a5.72 5.72 0 00-1.502-1.971 6.836 6.836 0 00-2.228-1.24 10.381 10.381 0 00-2.707-.375v-1.63a8.914 8.914 0 013.14.544c.907.363 1.696.862 2.368 1.497a6.287 6.287 0 011.519 2.277c.372.907.558 1.914.558 3.02h-1.083zm8.808 0c0-.907-.188-1.754-.565-2.54a5.72 5.72 0 00-1.502-1.971 6.836 6.836 0 00-2.228-1.24 10.381 10.381 0 00-2.707-.375v-1.63a8.914 8.914 0 013.14.544c.907.363 1.696.862 2.368 1.497a6.287 6.287 0 011.519 2.277c.372.907.558 1.914.558 3.02H20v.003z" />
        </svg>
      </div>

      <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-medium text-center">
        "Unlocking potential with Angeltors — we cultivate a vibrant ecosystem where visionary founders, strategic investors, and industry leaders converge to nurture innovation, drive growth, and shape the future of the startup ecosystem."
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px w-8 md:w-12 bg-slate-200" />
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-400 text-center">
          Angeltors Ecosystem
        </span>
        <div className="h-px w-8 md:w-12 bg-slate-200" />
      </div>
    </motion.div>
  );
}
