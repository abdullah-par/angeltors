import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Briefcase, Users } from 'lucide-react';

export default function MembershipHero() {
  return (
    <section className="bg-angeltors-ink text-white pt-24 pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-8 items-end mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
              Exclusive <br />
              Investment <br />
              <span className="text-slate-500">Ecosystem</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 lg:pl-12 lg:border-l border-white/20 pb-4"
          >
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
              Angeltors is a highly curated network of visionary founders, strategic investors, and industry experts building the future together. No noise, just high-signal opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#plans" className="inline-flex items-center justify-between gap-4 px-8 py-4 bg-white text-angeltors-ink font-bold hover:bg-slate-200 transition-colors group">
                <span>View Memberships</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/20 pt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Why the best founders & investors choose us.
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: 'Curated Deal Flow',
                  desc: 'We rigorously vet startups so investors only see high-signal, high-potential opportunities.',
                  icon: <Target className="w-6 h-6 text-angeltors-cyan" />
                },
                {
                  title: 'Strategic Capital',
                  desc: 'Founders receive more than just funding; they gain strategic partners and operational guidance.',
                  icon: <Briefcase className="w-6 h-6 text-angeltors-cyan" />
                },
                {
                  title: 'High-Impact Network',
                  desc: 'Connect with industry experts, CXOs, and seasoned entrepreneurs who have built and exited.',
                  icon: <Users className="w-6 h-6 text-angeltors-cyan" />
                }
              ].map((item, i) => (
                <div key={i} className="sm:border-l border-white/20 sm:pl-6 space-y-4">
                  <div>{item.icon}</div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
