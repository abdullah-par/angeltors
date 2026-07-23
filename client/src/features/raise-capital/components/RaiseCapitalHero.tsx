import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function RaiseCapitalHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden border-b border-slate-200/50">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8 w-full"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-angeltors-ink leading-[1.1] whitespace-nowrap">
            Unlock Your Startup's Potential
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Transform your vision into reality. We connect founders with the right investors, mentors, and growth partners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              to="/membership"
              className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-angeltors-ink px-8 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:bg-slate-900 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <span>Apply to raise capital</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#how-it-works"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200/80 bg-white px-8 py-4 text-[16px] font-bold text-slate-700 shadow-xs transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:text-angeltors-ink w-full sm:w-auto"
            >
              <PlayCircle className="h-5 w-5 text-angeltors-accent group-hover:scale-110 transition-transform" />
              <span>See how it works</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
