import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function AboutHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-32 pb-4">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-[15px] font-bold text-slate-400">
            <Link to="/" className="flex items-center gap-1.5 hover:text-angeltors-ink transition-colors duration-200">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-300" />
            <span className="text-angeltors-ink">About Us</span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
