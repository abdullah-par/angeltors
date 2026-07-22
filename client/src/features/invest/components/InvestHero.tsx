import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function InvestHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-angeltors-accent/10 via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1 
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black text-angeltors-ink tracking-tighter leading-[0.95] mb-8"
        >
          Invest in the <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-angeltors-ink to-angeltors-accent">future.</span>
        </motion.h1>
        
        <motion.p 
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          Discover, evaluate, and invest in high-potential startups through our streamlined investment platform.
        </motion.p>
        
        <motion.div 
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a href="#process" className="w-full sm:w-auto px-8 py-4 bg-angeltors-ink hover:bg-slate-800 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2 group shadow-lg">
            <span>Explore Opportunities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#why-stage" className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-angeltors-ink font-bold rounded-full transition-colors flex items-center justify-center gap-2">
            <PlayCircle className="w-4 h-4 text-angeltors-accent" />
            <span>Why Early Stage?</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
