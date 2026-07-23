import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Link } from 'react-router-dom';

export default function ServicesIntro() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-white pt-32 pb-20 overflow-hidden border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
              <img
                src="/images/mac-business.png"
                alt="Angeltors Platform"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
            animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col items-start gap-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-angeltors-ink leading-[1.15]">
              More Than Investment, We Empower Startups With End-To-End Support To Accelerate Growth And Maximize Success.
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed text-[16px] sm:text-[17px]">
              Angeltors extends beyond financial investment by offering comprehensive support to early-stage and growth startups. Our ecosystem connects founders with experienced mentors, domain experts, market expansion channels, and follow-on capital opportunities equipping entrepreneurs with the exact tools and guidance needed for rapid, sustainable scale.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-angeltors-ink px-8 py-3.5 text-sm font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_30px_-10px_rgba(0,0,0,0.6)]"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span>Get Started</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
