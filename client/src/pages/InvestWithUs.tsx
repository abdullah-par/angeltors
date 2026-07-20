import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useRef } from 'react';
import {
  Zap,
  Lightbulb,
  Eye,
  Users,
  TrendingUp,
  Network,
  SearchCheck,
  Target,
  Crosshair,
  PieChart,
  Rocket,
  Sparkles,
  Maximize,
  HeartHandshake,
  Compass,
  Link as LinkIcon,
  Layers,
  Hourglass,
  Coins,
  Scale,
  ShieldCheck,
  Grid,
  Handshake,
  DoorOpen,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function InvestWithUs() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // --- SEMANTIC DATA MAPPING FOR LANDING PAGE FLOW ---
  
  const benefits = [
    { title: "Streamlined Investment Process", desc: "Our platform often streamlines the investment process, making it more efficient and less time-consuming for investors to identify, evaluate, and invest in promising startups.", icon: Zap },
    { title: "Transparency and Reporting", desc: "Receive clear and consistent reports on the progress and performance of your investments.", icon: Eye },
    { title: "Due Diligence and Insights", desc: "Leverage our expertise and thorough due diligence process to make informed investment decisions.", icon: SearchCheck },
  ];

  const howItWorks = [
    { title: "Strategic Selection", desc: "Discover carefully selected startups poised for significant growth and market-disrupting innovation.", icon: Crosshair },
    { title: "Impact of Due Diligence", desc: "Thoroughly investigating the startup's team, business model, market, and competitive environment is critical.", icon: ShieldCheck },
    { title: "Long-Term Perspective", desc: "Returns typically materialize over a 5-10 year timeframe or longer, often through acquisition, next funding round or IPO.", icon: Hourglass },
    { title: "Exit Strategy Matters", desc: "The timing and nature of the exit (acquisition, IPO) will ultimately determine the returns realized by investor.", icon: DoorOpen },
  ];

  const whyInvest = [
    { title: "Fueling Innovation", desc: "Early-stage startups are often pioneers, developing groundbreaking technologies and business models that can revolutionize existing markets and create entirely new landscapes.", icon: Sparkles },
    { title: "Significant Scalability", desc: "Startups with compelling solutions and strong market fit possess the potential for rapid expansion, offering investors the chance to see their investment multiply quickly.", icon: Maximize },
    { title: "Support Innovation", desc: "Many investors are motivated by the desire to foster innovation, contribute to emerging industries, and empower visionary entrepreneurs.", icon: HeartHandshake },
    { title: "Early-Stage Value Creation", desc: "Capitalize on the significant appreciation potential inherent in investing in companies at their earliest stages of development.", icon: TrendingUp },
  ];

  const advantages = [
    { title: "Early Investment Advantage", desc: "Entering at the foundational stage allows investors to secure significant equity for a lower initial outlay.", icon: Rocket },
    { title: "Exclusive Investor Network", desc: "Connect and collaborate with a distinguished community of fellow investors, industry thought leaders, and successful entrepreneurs.", icon: Network },
    { title: "Active Participation", desc: "Selectively engage with portfolio companies through mentorship and support, directly contributing to their success.", icon: Users },
    { title: "Insight Into Future Trends", desc: "Stay at the forefront of innovation with exposure to emerging technologies, evolving market trends, and innovative business models.", icon: Lightbulb },
    { title: "Influence and Involvement", desc: "Early-stage investors often have the chance to actively participate in a startup's journey, offering their expertise and guidance.", icon: Compass },
    { title: "Networking Opportunities", desc: "Investing in early-stage startups connects investors with a dynamic ecosystem of founders and industry experts.", icon: LinkIcon },
  ];

  const faqs = [
    { question: "What are the anticipated returns?", answer: "Studies suggest that well-diversified angel investment portfolios can generate average returns of 2-3 times the initial investment within 3-5 years, resulting in a gross annual (IRR) of 20-30%.", icon: Coins },
    { question: "How does risk vs. reward work by stage?", answer: "While seed and pre-seed investments carry the highest risk, they also offer the greatest potential for outsized returns. Later-stage investments (Series A, B) generally involve less risk but may yield lower multiples.", icon: Scale },
    { question: "Why is portfolio diversification essential?", answer: "Investing in a portfolio of multiple startups is essential for risk mitigation. Larger portfolios generally demonstrate better median returns. Integrating early-stage startups can provide valuable diversification benefits due to their often uncorrelated growth patterns.", icon: Grid },
    { question: "What is your approach to returns?", answer: "We are committed to delivering substantial and sustainable returns through investments in fundamentally strong and innovative businesses.", icon: Target },
    { question: "How does investor engagement impact outcomes?", answer: "Active investors who provide mentorship, guidance, and valuable connections to their portfolio companies can positively influence returns.", icon: Handshake },
    { question: "How do I achieve diversified growth potential?", answer: "Explore investment opportunities across a wide spectrum of high-growth sectors on our platform, mitigating risk and maximizing portfolio potential.", icon: PieChart },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div ref={containerRef} className="bg-slate-50 selection:bg-angeltors-accent/20">
      <Helmet>
        <title>Invest With Us | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Identify and capitalize on groundbreaking startups. Drive exceptional returns through strategic, early-stage investments."
        />
      </Helmet>

      <ScrollProgress />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 lg:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-angeltors-accent/10 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-md shadow-sm text-angeltors-ink text-xs font-semibold mb-8 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="uppercase tracking-widest text-[10px]">Trusted by 500+ Angel Investors</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-angeltors-ink tracking-tighter leading-[0.95] mb-8">
              Invest in the <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-angeltors-ink to-angeltors-accent">future.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
              Identify and capitalize on groundbreaking startups. Drive exceptional returns through strategic, early-stage investments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Polished Premium CTA */}
              <button
                type="button"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-angeltors-ink px-10 py-4 text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_30px_-10px_rgba(0,0,0,0.6)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">Start Investing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: reducedMotion ? 0 : yParallax }}
            className="relative mx-auto max-w-5xl mt-24 md:mt-32 h-auto pb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
                animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] p-8 md:p-10 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"><TrendingUp className="w-6 h-6" /></div>
                  <div className="text-4xl font-extrabold text-angeltors-ink mb-2 tracking-tight">20-30%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target Annual IRR</div>
                </div>
              </motion.div>

              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
                animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[2rem] bg-angeltors-ink border border-angeltors-navy-light p-8 md:p-10 text-left shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:-translate-y-8 transition-all duration-500 hover:-translate-y-10 group"
              >
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-angeltors-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 transition-transform duration-500"><Target className="w-6 h-6" /></div>
                  <div className="text-4xl font-extrabold text-white mb-2 tracking-tight">Top 1%</div>
                  <div className="text-xs font-bold text-angeltors-cyan uppercase tracking-widest">Startups Selected</div>
                </div>
              </motion.div>

              <motion.div
                initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
                animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] p-8 md:p-10 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-angeltors-accent/10 text-angeltors-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"><Network className="w-6 h-6" /></div>
                  <div className="text-4xl font-extrabold text-angeltors-ink mb-2 tracking-tight">Global</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Investor Network</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* 3. BENEFITS SECTION (Bento Grid) */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 md:mb-24 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-angeltors-ink tracking-tight leading-[1.1] mb-6 max-w-3xl">
              Platform Features
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-medium">
              We leverage deep expertise and thorough analysis to streamline your experience and provide profound insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 lg:gap-8 auto-rows-[250px] lg:auto-rows-[300px]">
            
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 md:row-span-2 group relative rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] transition-all duration-500 ease-out overflow-hidden flex flex-col justify-end min-h-[500px]"
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-[url('/images/Startup.jpg')] bg-cover bg-center mix-blend-multiply opacity-50 grayscale group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>
              
              <div className="relative z-10 p-10 md:p-12 mt-auto">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-angeltors-ink text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-angeltors-ink mb-4 tracking-tight leading-snug">
                  {benefits[0].title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  {benefits[0].desc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 md:row-span-1 group relative rounded-[2.5rem] bg-angeltors-ink border border-angeltors-navy-light shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.15)] transition-all duration-500 ease-out overflow-hidden p-10 md:p-12 flex items-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-angeltors-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700">
                <TrendingUp className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 pr-12 lg:pr-16">
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                  {benefits[1].title}
                </h3>
                <p className="text-base text-slate-400 leading-relaxed font-medium max-w-sm">
                  {benefits[1].desc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 md:row-span-1 group relative rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] transition-all duration-500 ease-out flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-angeltors-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-angeltors-accent shadow-inner group-hover:scale-110 group-hover:bg-angeltors-accent group-hover:text-white transition-all duration-500">
                <SearchCheck className="w-10 h-10" />
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 md:row-span-1 group relative rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] transition-all duration-500 ease-out p-8 md:p-10 flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold text-angeltors-ink mb-3 tracking-tight group-hover:text-angeltors-accent transition-colors">
                {benefits[2].title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {benefits[2].desc}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION (Polished Timeline) */}
      <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <div className="text-center mb-20 md:mb-32 space-y-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase">
              The Lifecycle
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight leading-[1.05] max-w-3xl">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mt-4 font-medium">
              A transparent look at the timeline and strategies that influence early-stage outcomes.
            </p>
          </div>

          <div className="relative w-full pl-6 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

            <div className="space-y-16 md:space-y-24 w-full relative z-10">
              {howItWorks.map((pt, idx) => {
                const Icon = pt.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal group w-full">
                    
                    <div className="absolute left-[-1.5rem] md:left-1/2 md:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-10">
                      <div className="absolute inset-0 rounded-full bg-angeltors-accent/20 scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
                      <div className="relative w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-angeltors-accent group-hover:text-angeltors-accent transition-colors duration-500 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-end pr-12 lg:pr-16' : 'ml-auto pl-12 lg:pl-16'}`}>
                      <motion.div
                        initial={reducedMotion ? {} : { opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className={`max-w-sm ${isEven ? 'text-right' : 'text-left'}`}
                      >
                        <h4 className="text-2xl font-bold text-angeltors-ink mb-3 tracking-tight">
                          {pt.title}
                        </h4>
                        <p className="text-base text-slate-500 leading-relaxed font-medium">
                          {pt.desc}
                        </p>
                      </motion.div>
                    </div>

                    <div className="md:hidden w-full pl-10 py-2">
                      <motion.div
                        initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
                        whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                      >
                        <h4 className="text-xl font-bold text-angeltors-ink mb-3 tracking-tight">
                          {pt.title}
                        </h4>
                        <p className="text-base text-slate-500 leading-relaxed font-medium">
                          {pt.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY INVEST SECTION (Polished ZigZag) */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight mb-8 max-w-3xl leading-[1.05]">
              Why Invest in Early Stage?
            </h2>
            <div className="h-1 w-20 bg-angeltors-accent rounded-full opacity-80" />
          </div>

          <div className="space-y-32 md:space-y-48">
            {[
              {
                title: "Fueling Groundbreaking Innovation",
                desc: "Early-stage startups are pioneers, developing technologies that revolutionize markets and create new landscapes. Empower visionary entrepreneurs to build the future.",
                icon: Sparkles
              },
              {
                title: "Capturing Exponential Value",
                desc: "Startups with strong market fit possess the potential for rapid expansion. Capitalize on the significant appreciation potential inherent in investing at the earliest stages.",
                icon: Maximize
              }
            ].map((pt, idx) => {
              const Icon = pt.icon;
              const isEven = idx % 2 === 1;
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-16 lg:gap-32 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, x: isEven ? 50 : -50, filter: 'blur(10px)' }}
                    whileInView={reducedMotion ? {} : { opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 relative"
                  >
                    <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden bg-gradient-to-br from-slate-200/50 to-white border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex items-center justify-center group">
                      <div className="absolute inset-0 bg-[url('/images/Startup.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay grayscale group-hover:scale-105 transition-transform duration-1000 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent" />
                      
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-2xl flex items-center justify-center text-angeltors-accent"
                      >
                        <Icon className="w-10 h-10 md:w-12 md:h-12" />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 space-y-6 md:space-y-8"
                  >
                    <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-[1.25rem] bg-white border border-slate-200/60 text-angeltors-accent shadow-sm">
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-angeltors-ink tracking-tight leading-[1.1]">
                      {pt.title}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                      {pt.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. INVESTOR ADVANTAGES (Polished Staggered Cards) */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-angeltors-accent/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-angeltors-cyan/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-5">
              <div className="sticky top-40 space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                  Investor <br/> Advantages
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-md">
                  Join a dynamic ecosystem of founders and experts while securing early access to the future.
                </p>
              </div>
            </div>
            
            <motion.div 
              className="lg:col-span-7 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {advantages.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group flex flex-col sm:flex-row gap-6 md:gap-8 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] bg-angeltors-cyan/10 border border-angeltors-cyan/20 flex items-center justify-center text-angeltors-cyan group-hover:scale-110 group-hover:bg-angeltors-cyan group-hover:text-black transition-all duration-500 ease-out shadow-inner">
                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-angeltors-cyan transition-colors duration-300">
                        {pt.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                        {pt.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (Polished Accordion Hierarchy) */}
      <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-20 md:mb-24 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight leading-[1.05] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              Dive into the strategic details of early-stage investing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.details 
                key={idx} 
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-slate-50 rounded-[2rem] border border-slate-200/60 overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-angeltors-accent/40 transition-colors duration-300 open:bg-white open:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              >
                <summary className="flex items-center justify-between p-8 md:p-10 cursor-pointer font-extrabold text-xl md:text-2xl text-angeltors-ink outline-none select-none tracking-tight">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-angeltors-accent/40 transition-colors shadow-sm">
                      <faq.icon className="w-5 h-5 text-angeltors-accent" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                  <span className="transition-transform duration-500 group-open:rotate-180 text-slate-400 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100">
                    <ChevronDown className="w-6 h-6" />
                  </span>
                </summary>
                <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 text-base md:text-lg text-slate-500 leading-relaxed font-medium border-t border-slate-100 mt-2">
                  <p className="pt-6">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FINAL CTA BLOCK (Polished Massive Element) */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 40, scale: 0.95 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[3rem] md:rounded-[4rem] bg-white border border-white p-12 md:p-24 text-center shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* Huge Glow for Focal Point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-angeltors-accent/10 via-angeltors-cyan/10 to-angeltors-accent/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-angeltors-ink tracking-tighter leading-[1.0] mb-8">
                Ready to diversify <br className="hidden md:block" /> your portfolio?
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
                Join Angeltors today and gain access to a curated selection of high-growth, early-stage investment opportunities.
              </p>
              <button
                type="button"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-angeltors-ink px-12 py-5 text-base md:text-lg font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_30px_-10px_rgba(0,0,0,0.6)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">Subscribe Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
