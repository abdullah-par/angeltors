import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RaiseCapitalCTA() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-angeltors-ink py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
              Ready to transform your vision into reality?
            </h2>
            <p className="text-slate-400 font-medium text-lg">
              Connect with Angeltors and let's build the future together.
            </p>
          </div>
          
          <div className="shrink-0">
            <Link
              to="/membership"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-[16px] font-bold text-angeltors-ink transition-all duration-300 hover:bg-slate-100 shadow-md hover:scale-105"
            >
              <span>Apply to raise capital</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
