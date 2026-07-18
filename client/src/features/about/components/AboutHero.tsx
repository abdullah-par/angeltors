import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function AboutHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-angeltors-ink text-white">
      {/* Animated background blobs */}
      <motion.div
        animate={reducedMotion ? {} : { x: [0, 18, -12, 0], y: [0, -18, 8, 0], scale: [1, 1.06, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 right-1/3 h-96 w-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,55,158,0.55) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={reducedMotion ? {} : { x: [0, -14, 10, 0], y: [0, 14, -8, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)' }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 22 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="space-y-5"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
            About Us
          </h1>

          {/* Cyan accent rule */}
          <div className="flex justify-center">
            <div className="h-1 w-16 rounded-full bg-angeltors-cyan opacity-80" />
          </div>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-sm font-medium text-slate-400">
            <Link to="/" className="flex items-center gap-1.5 hover:text-angeltors-cyan transition-colors duration-200">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-600" />
            <span className="text-angeltors-cyan font-semibold">About Us</span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
