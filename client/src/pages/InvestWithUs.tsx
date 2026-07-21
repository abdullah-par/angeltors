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
  Target,
  Crosshair,
  PieChart,
  Rocket,
  Sparkles,
  Maximize,
  Compass,
  Link as LinkIcon,
  Layers,
  Coins,
  Scale,
  ShieldCheck,
  Grid,
  Handshake,
  ArrowRight,
  ChevronDown,
  Building2,
  Stethoscope,
  Cloud,
  Car,
  GraduationCap,
  LineChart,
  PlayCircle,
  FileSearch,
  Wallet,
  Activity,
  DoorOpen,
  CheckCircle2,
  XCircle,
  BrainCircuit
} from 'lucide-react';

export default function InvestWithUs() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // --- REWRITTEN CONCISE DATA ARRAYS (2-line max) ---

  const whyEarlyStage = [
    { title: "Innovation", desc: "Pioneer groundbreaking technologies that create entirely new market landscapes.", icon: Sparkles },
    { title: "Scalability", desc: "Back solutions with strong market fit that expand and multiply rapidly.", icon: Maximize },
    { title: "Portfolio Growth", desc: "Integrate uncorrelated high-growth assets to strengthen overall median returns.", icon: LineChart },
    { title: "Long Term Wealth", desc: "Secure exponential returns through strategic acquisitions or IPOs over 5-10 years.", icon: TrendingUp },
  ];

  const whyAngeltors = [
    { title: "Streamlined Process", desc: "Discover, evaluate, and invest in high-potential startups through a seamless platform.", icon: Zap },
    { title: "Rigorous Diligence", desc: "Leverage expert analysis to mitigate risk and maximize potential outcomes.", icon: ShieldCheck },
    { title: "Transparent Reporting", desc: "Track your portfolio's progress with crystal clear, real-time insights.", icon: Eye },
    { title: "Strategic Selection", desc: "Access a carefully curated pipeline of vetted, high-potential startups.", icon: Target },
  ];

  const investmentProcess = [
    { id: "01", title: "Discover Startup", desc: "Browse our curated pipeline of thoroughly vetted early-stage opportunities.", icon: Crosshair },
    { id: "02", title: "Due Diligence", desc: "Review our comprehensive market, team, and financial analyses.", icon: FileSearch },
    { id: "03", title: "Invest", desc: "Secure your equity seamlessly through our streamlined platform interface.", icon: Wallet },
    { id: "04", title: "Portfolio Tracking", desc: "Monitor performance, milestones, and company updates in real-time.", icon: Activity },
    { id: "05", title: "Exit", desc: "Realize returns through strategic acquisitions, next-round funding, or IPOs.", icon: DoorOpen },
  ];

  const advantages = [
    { title: "Early Advantage", desc: "Secure significant equity for a lower initial outlay.", icon: Rocket },
    { title: "Exclusive Network", desc: "Collaborate with distinguished investors and successful founders.", icon: Network },
    { title: "Active Participation", desc: "Selectively engage through mentorship and strategic board seats.", icon: Users },
    { title: "Future Trends", desc: "Gain firsthand exposure to emerging market technologies.", icon: Lightbulb },
    { title: "Strategic Influence", desc: "Guide startup trajectories with your industry expertise.", icon: Compass },
    { title: "Dynamic Ecosystem", desc: "Connect with experts and potential future collaborators.", icon: LinkIcon },
  ];

  const industries = [
    { name: "Artificial Intelligence", icon: BrainCircuit },
    { name: "FinTech", icon: Coins },
    { name: "Healthcare", icon: Stethoscope },
    { name: "SaaS", icon: Cloud },
    { name: "EV & Mobility", icon: Car },
    { name: "EdTech", icon: GraduationCap },
  ];

  const faqs = [
    { question: "What are the anticipated returns?", answer: "Well-diversified angel portfolios can generate a gross annual (IRR) of 20-30% within 3-5 years.", icon: Coins },
    { question: "How does risk vs. reward work by stage?", answer: "Seed investments carry the highest risk but offer the greatest potential for outsized returns.", icon: Scale },
    { question: "Why is portfolio diversification essential?", answer: "Investing in multiple startups mitigates risk, as larger portfolios generally demonstrate better median returns.", icon: Grid },
    { question: "How does investor engagement impact outcomes?", answer: "Active investors providing mentorship and connections can positively influence their portfolio's returns.", icon: Handshake },
  ];

  const comparisonData = [
    { feature: "Target Returns", traditional: "7% - 10%", angel: "20% - 30%+" },
    { feature: "Liquidity Timeframe", traditional: "High (Immediate)", angel: "Low (5-10 Years)" },
    { feature: "Investor Involvement", traditional: "Passive", angel: "Active & Strategic" },
    { feature: "Innovation Impact", traditional: "Low", angel: "Extremely High" },
    { feature: "Risk Profile", traditional: "Low to Medium", angel: "High (Offset by Diversification)" },
  ];

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

      {/* 1. HERO SECTION (Redesigned Flow) */}
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            <button
              type="button"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-angeltors-ink px-10 py-4 text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_30px_-10px_rgba(0,0,0,0.6)] w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">Start Investing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </button>
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white border border-slate-200 px-10 py-4 text-base font-bold text-angeltors-ink transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 w-full sm:w-auto shadow-sm"
            >
              <span className="flex items-center gap-2"><PlayCircle className="w-5 h-5 text-angeltors-accent" /> Watch Demo</span>
            </button>
          </motion.div>

        </div>
      </section>

      {/* 2. COMMUNITY CALLOUT */}
      <section className="py-24 bg-angeltors-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            A Curated Network of Investors & Founders
          </h2>
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
            Angeltors brings together angel investors, HNIs, startups, and mentors from across India — focused on early-stage, high-potential opportunities.
          </p>
        </div>
      </section>

      {/* 3. WHY EARLY STAGE (Alternating Timeline) */}
      <section className="py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight mb-6 max-w-3xl leading-[1.05]">
              Why Early Stage?
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              The fundamental drivers behind early-stage venture capital.
            </p>
          </div>

          <div className="relative w-full pl-8 md:pl-0">
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200" />
            <div className="md:hidden absolute top-0 bottom-0 left-8 w-px bg-slate-200" />

            <div className="space-y-24 md:space-y-32 w-full relative z-10">
              {whyEarlyStage.map((pt, idx) => {
                const Icon = pt.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal group w-full">
                    
                    <div className="absolute left-[-1.5rem] md:left-1/2 md:-translate-x-1/2 w-12 h-12 flex items-center justify-center z-10 bg-white">
                      <div className="w-6 h-6 rounded-full bg-angeltors-accent/20 border-2 border-angeltors-accent group-hover:scale-150 transition-transform duration-500" />
                    </div>

                    <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-end pr-16' : 'ml-auto pl-16'}`}>
                      <motion.div
                        initial={reducedMotion ? {} : { opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className={`max-w-sm ${isEven ? 'text-right' : 'text-left'}`}
                      >
                        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent group-hover:scale-110 group-hover:bg-angeltors-accent group-hover:text-white transition-all duration-500 ${isEven ? 'ml-auto' : ''}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-extrabold text-angeltors-ink mb-4 tracking-tight leading-tight">
                          {pt.title}
                        </h3>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                          {pt.desc}
                        </p>
                      </motion.div>
                    </div>

                    <div className="md:hidden w-full pl-12 py-2">
                      <motion.div
                        initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
                        whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100"
                      >
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-angeltors-ink mb-3 tracking-tight">
                          {pt.title}
                        </h3>
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

      {/* 4. WHY ANGELTORS (4 Premium Cards) */}
      <section className="py-32 md:py-40 bg-slate-50 relative overflow-hidden border-y border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-24 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight mb-6 max-w-3xl leading-[1.05]">
              Why Angeltors?
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
              We leverage deep expertise to streamline your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {whyAngeltors.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                  whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative flex flex-col p-10 md:p-12 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ease-out"
                >
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent group-hover:scale-110 group-hover:bg-angeltors-accent group-hover:text-white transition-all duration-500 ease-out">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-angeltors-ink mb-4 tracking-tight leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-sm">
                    {pt.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT PROCESS (Numbered Timeline) */}
      <section className="py-32 md:py-40 bg-white relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <div className="text-center mb-24 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight leading-[1.05] mb-6">
              Investment Process
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              From discovery to exit, we handle the complexity.
            </p>
          </div>

          <div className="space-y-6 w-full max-w-3xl">
            {investmentProcess.map((step, idx) => (
              <motion.div
                key={idx}
                initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
                whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 p-8 md:p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-slate-200 transition-all duration-500"
              >
                <div className="text-5xl md:text-6xl font-black text-slate-200 tracking-tighter group-hover:text-angeltors-accent/20 transition-colors duration-500">
                  {step.id}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-angeltors-ink mb-2 tracking-tight group-hover:text-angeltors-accent transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
                <div className="hidden sm:flex w-16 h-16 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 group-hover:scale-110 group-hover:text-angeltors-accent transition-all duration-500">
                  <step.icon className="w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INVESTOR BENEFITS (Radial Layout / Grid) */}
      <section className="py-32 md:py-40 bg-angeltors-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              Investor Benefits
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Join a dynamic ecosystem of founders and experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-center">
            
            {/* Left Column */}
            <div className="space-y-12">
              {advantages.slice(0, 3).map((pt, idx) => (
                <div key={idx} className="flex flex-col items-end text-right group">
                  <div className="mb-4 w-16 h-16 rounded-full bg-angeltors-cyan/10 flex items-center justify-center text-angeltors-cyan group-hover:scale-110 transition-transform duration-500">
                    <pt.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{pt.title}</h4>
                  <p className="text-slate-400 font-medium">{pt.desc}</p>
                </div>
              ))}
            </div>

            {/* Center Abstract Visual */}
            <div className="hidden lg:flex justify-center relative">
              <div className="w-[400px] h-[400px] rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-angeltors-accent/20 blur-[80px] rounded-full" />
                <div className="w-[300px] h-[300px] rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-angeltors-cyan to-angeltors-accent animate-pulse shadow-[0_0_80px_rgba(0,212,255,0.4)]" />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {advantages.slice(3, 6).map((pt, idx) => (
                <div key={idx} className="flex flex-col items-start text-left group">
                  <div className="mb-4 w-16 h-16 rounded-full bg-angeltors-cyan/10 flex items-center justify-center text-angeltors-cyan group-hover:scale-110 transition-transform duration-500">
                    <pt.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{pt.title}</h4>
                  <p className="text-slate-400 font-medium">{pt.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. FEATURED STARTUPS — removed: no verified startup profiles available yet */}

      {/* 8. COMPARISON TABLE */}
      <section className="py-32 md:py-40 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight mb-6">
              Asset Comparison
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Traditional vs Angel Investment.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm text-amber-800 font-medium">
            <span className="mt-0.5 shrink-0 text-amber-500">ⓘ</span>
            <span>
              <strong>Illustrative comparison only.</strong> The figures in this table (e.g. "20%–30%" target returns) are general industry benchmarks widely cited in angel-investing literature and are <em>not</em> Angeltors-specific results, guaranteed returns, or financial advice. Past performance of any asset class does not guarantee future results. Please consult a SEBI-registered investment adviser before making any investment decisions.
            </span>
          </div>

          <div className="rounded-[2.5rem] bg-slate-50 border border-slate-200/60 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-white border-b border-slate-200/60 p-6 md:p-8">
              <div className="font-bold text-slate-400 uppercase tracking-widest text-sm">Feature</div>
              <div className="font-bold text-angeltors-ink text-xl text-center">Traditional</div>
              <div className="font-bold text-angeltors-accent text-xl text-center">Angel Investment</div>
            </div>
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-6 md:p-8 border-b border-slate-200/60 last:border-0 items-center hover:bg-white transition-colors">
                <div className="font-bold text-angeltors-ink text-lg">{row.feature}</div>
                <div className="text-slate-500 font-medium text-center">{row.traditional}</div>
                <div className="text-angeltors-ink font-bold text-center">{row.angel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="py-32 md:py-40 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight mb-6">
              Industries We Cover
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Diversify across high-growth sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-20 h-20 rounded-full bg-angeltors-accent/10 flex items-center justify-center text-angeltors-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                  <ind.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-angeltors-ink">{ind.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS — removed: no verified quotes available yet */}

      {/* 11. FAQ */}
      <section className="py-32 md:py-40 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-angeltors-ink tracking-tight leading-[1.05] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group bg-white rounded-[2rem] border border-slate-200/60 overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-angeltors-accent/40 transition-colors duration-300"
              >
                <summary className="flex items-center justify-between p-8 md:p-10 cursor-pointer font-extrabold text-xl md:text-2xl text-angeltors-ink outline-none select-none tracking-tight">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-angeltors-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <faq.icon className="w-8 h-8 text-angeltors-accent" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                  <span className="transition-transform duration-500 group-open:rotate-180 text-slate-400 w-12 h-12 flex items-center justify-center rounded-full hover:bg-slate-100">
                    <ChevronDown className="w-6 h-6" />
                  </span>
                </summary>
                <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0 text-lg text-slate-500 leading-relaxed font-medium border-t border-slate-100 mt-2">
                  <p className="pt-6">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-32 md:py-40 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] md:rounded-[4rem] bg-white border border-white p-16 md:p-24 text-center shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-angeltors-accent/10 via-angeltors-cyan/10 to-angeltors-accent/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-angeltors-ink tracking-tighter leading-[1.0] mb-8">
                Ready to Build <br /> Your Portfolio?
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-14 font-medium">
                Backed by a growing network of investors and founders across India.
              </p>
              <button
                type="button"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-angeltors-ink px-14 py-6 text-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">Start Investing <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

// Fallback icon definitions mapped to available lucide-react imports
const Box = Grid;
const Triangle = Activity;
