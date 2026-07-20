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
            <span className="text-sm font-bold tracking-widest text-angeltors-accent uppercase">
              Angeltors
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-angeltors-ink leading-[1.2]">
              More Than Investment, We Empower Startups With Comprehensive Support To Accelerate Growth And Maximize Success.
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed">
              Angeltors extends beyond financial investment, offering comprehensive support to startups. This holistic approach equips entrepreneurs with the necessary tools and resources for achieving rapid and sustainable growth, ultimately enabling them to reach their full potential and achieve significant success.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-black px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-slate-900 shadow-md"
            >
              Sign Up
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
