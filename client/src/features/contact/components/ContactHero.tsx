import { motion } from "framer-motion";
import { ChevronRight, Home, Sparkles } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Link } from "react-router-dom";

export default function ContactHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-40">
      {/* Dynamic animated background gradients */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-angeltors-accent/20 blur-[130px] mix-blend-multiply opacity-60 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-angeltors-cyan/15 blur-[120px] mix-blend-multiply opacity-50 pointer-events-none"
      />

      {/* Modern dot pattern background */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl space-y-8"
        >
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              We're Here to Help
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-angeltors-ink tracking-tighter leading-[0.95]">
            Let's build something <br className="hidden sm:block" /> incredible together.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Whether you're looking for early-stage funding, strategic mentorship, or simply want to learn more about our network, we'd love to hear from you.
          </p>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mt-8 flex justify-center items-center gap-2 text-sm font-bold text-slate-400">
            <Link to="/" className="flex items-center gap-1.5 hover:text-angeltors-ink transition-colors duration-200">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-300" />
            <span className="text-angeltors-ink">Contact</span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
