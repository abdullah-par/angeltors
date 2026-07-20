import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function RaiseCapitalHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden border-b border-slate-200/50">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-angeltors-ink leading-[1.1]">
              Unlock Your Startup's Potential.
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Transform your vision into reality. We connect founders with the right investors, mentors, and growth partners.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-angeltors-ink px-8 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:bg-slate-900 shadow-md hover:shadow-lg"
              >
                <span>Apply to raise capital</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 text-[16px] font-bold text-slate-600 hover:text-angeltors-ink transition-colors"
              >
                <PlayCircle className="h-5 w-5 text-angeltors-accent group-hover:scale-110 transition-transform" />
                <span>See how it works</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] lg:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/images/startups-raisecapitals.jpg"
                alt="Founders raising capital"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
