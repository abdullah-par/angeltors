import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvestHero() {
  const reducedMotion = useReducedMotion();

  const highlights = [
    { label: "Curated Startup Access", val: "Top 1%", icon: Sparkles },
    { label: "Active Investors", val: "500+", icon: Users },
    { label: "Average Deal IRR", val: "32%+", icon: TrendingUp },
    { label: "Structured Due Diligence", val: "100%", icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white border-b border-slate-100">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-angeltors-accent/10 via-transparent to-transparent opacity-70 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-sky-200/30 via-indigo-100/40 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Hero Title */}
        <motion.h1 
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-angeltors-ink tracking-tight leading-[1.08] mb-6 max-w-4xl"
        >
          Invest in High-Growth <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-angeltors-ink via-angeltors-ink to-angeltors-accent">
            Early Stage Startups.
          </span>
        </motion.h1>
        
        {/* Hero Subtitle */}
        <motion.p 
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8 font-medium"
        >
          Discover, evaluate, and back vetted, revenue-generating startups alongside top-tier angel investors and industry leaders.
        </motion.p>
        
        {/* Call to Actions */}
        <motion.div 
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <Link 
            to="/membership" 
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-angeltors-ink px-8 py-4 text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-lg w-full sm:w-auto"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span>Join as Investor</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a 
            href="#why-stage" 
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-bold text-angeltors-ink shadow-xs transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 w-full sm:w-auto"
          >
            <span>Why Early Stage?</span>
          </a>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/80 border border-slate-200/60 rounded-2xl p-5 text-left flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-angeltors-ink">{item.val}</span>
                  <div className="w-8 h-8 rounded-full bg-angeltors-accent/10 flex items-center justify-center text-angeltors-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-500">{item.label}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
