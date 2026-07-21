import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ChevronDown, 
  ArrowRight, 
  Shield, 
  Rocket, 
  Network, 
  Target, 
  Briefcase, 
  Zap, 
  Users,
  LineChart,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import SpotlightCard from '@/components/common/SpotlightCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Plan Data
const plans = [
  {
    id: 'startup',
    title: 'Startup',
    icon: <Rocket className="w-6 h-6" />,
    target: 'Registered Startups ready for growth & capital',
    price: '₹14,999',
    suffix: '+ 18% GST',
    description: 'A comprehensive growth and fundraising ecosystem for early-stage startups aiming to scale rapidly.',
    topFeatures: [
      'One-to-One Consultation & Business Strategy',
      'Pitch Deck Creation & Investment Documentation',
      'Investor Matchmaking & Introductions',
      'Angel Funding Assistance & Follow-up',
      'Due Diligence Preparation'
    ],
    hiddenFeatures: [
      'Revenue Model & Growth Planning',
      'Financial Storytelling & Fundraising Strategy',
      'Fundraising Process Guidance'
    ],
    highlighted: true,
  },
  {
    id: 'investor',
    title: 'Angel Investor',
    icon: <LineChart className="w-6 h-6" />,
    target: 'Individual Angel Investors, HNIs, Family Offices',
    price: '₹9,999',
    suffix: '+ 18% GST',
    description: 'Exclusive access to vetted, high-potential startups and a network of elite co-investors.',
    topFeatures: [
      'Access to promising, vetted startups',
      'Curated Deal Flow & Business Summaries',
      'One-to-One Founder Meetings',
      'Pitch Sessions & Demo Days',
      'Exclusive Investor Events & Networking'
    ],
    hiddenFeatures: [
      'Startup Shortlisting & Pitch Deck Access',
      'Investment Pipeline & Investment Documents',
      'Interested Startups & Investment Notes',
      'Meeting History & Saved Opportunities',
      'Premium Deal Notifications'
    ],
    highlighted: false,
  },
  {
    id: 'mentor',
    title: 'Mentor',
    icon: <Network className="w-6 h-6" />,
    target: 'Industry Experts, CXOs, Startup Mentors',
    price: '₹4,999',
    suffix: '+ 18% GST',
    description: 'Give back to the ecosystem while building your professional brand and consulting pipeline.',
    topFeatures: [
      'Professional Profile & Areas of Expertise',
      'Receive & Filter Mentorship Requests',
      'Schedule Meetings & Provide Consultation',
      'Set Custom Consultation Fees',
      'Offer Dedicated Growth Plans'
    ],
    hiddenFeatures: [
      'LinkedIn Integration',
      'Years of Experience Display',
      'Languages Profiling',
      'Accept/Reject Requests Flexibly'
    ],
    highlighted: false,
  },
  {
    id: 'freemium',
    title: 'Freemium',
    icon: <Zap className="w-6 h-6" />,
    target: 'Idea Stage Entrepreneurs',
    price: '₹0',
    suffix: 'Free forever',
    description: 'The starting point for visionary founders who want to validate their ideas before scaling.',
    topFeatures: [
      'Idea Submission & Validation',
      'One-to-One Baseline Consultation',
      'Business Model Discussion',
      'Founder Readiness Assessment',
      'Basic Guidance for Next Steps'
    ],
    hiddenFeatures: [
      'Upgrade to Startup Membership once your idea is validated.'
    ],
    highlighted: false,
  }
];

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div variants={fadeIn} className="w-full">
      <SpotlightCard
        className={`w-full text-left p-8 md:p-10 ${
          plan.highlighted
            ? 'bg-angeltors-bg text-angeltors-ink rounded-3xl border border-angeltors-border/80 shadow-2xl z-10'
            : 'bg-white/5 text-white rounded-3xl border border-white/10 backdrop-blur-md'
        }`}
        spotlightColor={plan.highlighted ? 'rgba(99, 91, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)'}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Core Info */}
          <div className="flex-1 lg:max-w-md">
            <div className={`inline-flex items-center justify-center p-3 rounded-2xl mb-6 ${
              plan.highlighted ? 'bg-angeltors-ink text-white' : 'bg-white/10 text-white'
            }`}>
              {plan.icon}
            </div>
            <h3 className={`text-3xl font-bold tracking-tight mb-2 ${plan.highlighted ? 'text-angeltors-ink' : 'text-white'}`}>
              {plan.title}
            </h3>
            <p className={`text-sm font-medium mb-6 ${plan.highlighted ? 'text-angeltors-muted' : 'text-slate-400'}`}>
              {plan.target}
            </p>
            <p className={`text-base leading-relaxed mb-8 ${plan.highlighted ? 'text-slate-700' : 'text-slate-300'}`}>
              {plan.description}
            </p>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-extrabold tracking-tight ${plan.highlighted ? 'text-angeltors-ink' : 'text-white'}`}>
                  {plan.price}
                </span>
              </div>
              <p className={`text-sm mt-2 font-medium ${plan.highlighted ? 'text-angeltors-muted' : 'text-slate-400'}`}>
                {plan.suffix}
              </p>
            </div>
            
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl text-base font-bold transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-angeltors-accent text-white hover:bg-angeltors-accent-light shadow-lg hover:-translate-y-0.5'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Apply for {plan.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Features */}
          <div className="flex-1 flex flex-col justify-center">
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-6 ${plan.highlighted ? 'text-angeltors-ink' : 'text-slate-400'}`}>
              What's Included
            </h4>
            <ul className="space-y-5">
              {plan.topFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-angeltors-accent' : 'text-angeltors-cyan'}`} />
                  <span className={`text-base font-medium ${plan.highlighted ? 'text-slate-800' : 'text-slate-200'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button
                onClick={() => setExpanded(!expanded)}
                className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                  plan.highlighted ? 'text-angeltors-ink hover:text-angeltors-accent' : 'text-slate-400 hover:text-white'
                }`}
              >
                {expanded ? 'Hide full feature list' : 'View full feature list'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {expanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-5 pt-5"
                  >
                    {plan.hiddenFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-angeltors-accent' : 'text-angeltors-cyan'}`} />
                        <span className={`text-base font-medium ${plan.highlighted ? 'text-slate-800' : 'text-slate-200'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default function Membership() {
  return (
    <>
      <Helmet>
        <title>Membership & Ecosystem | Angeltors</title>
        <meta
          name="description"
          content="Apply to join the Angeltors ecosystem. We connect visionary founders, strategic investors, and industry experts."
        />
      </Helmet>

      <div className="bg-angeltors-ink min-h-screen text-white font-sans selection:bg-angeltors-accent selection:text-white overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20">
            <div className="w-[800px] h-[800px] bg-angeltors-accent rounded-full blur-[120px] mix-blend-screen opacity-30 transform -translate-y-1/4"></div>
          </div>
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="relative z-10 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Shield className="w-4 h-4 text-angeltors-cyan" />
              <span className="text-xs font-bold tracking-wide uppercase">By Application Only</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Join an Exclusive <br className="hidden md:block"/> Investment Ecosystem
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-12">
              Angeltors is more than a platform. We are a highly curated network of visionary founders, strategic investors, and industry experts building the future together.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#plans" className="px-8 py-4 bg-white text-angeltors-ink font-bold rounded-xl hover:bg-slate-100 transition-colors">
                View Memberships
              </a>
              <Link to="/contact" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-md">
                Talk to our Team
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. WHY BECOME A MEMBER (Value Props) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
          <div className="max-w-[85rem] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ecosystem Pillars</h2>
              <p className="text-slate-400 font-medium">Why the best founders and investors choose Angeltors.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Curated Deal Flow',
                  desc: 'We rigorously vet startups so investors only see high-signal, high-potential opportunities.',
                  icon: <Target className="w-8 h-8 text-angeltors-cyan" />
                },
                {
                  title: 'Strategic Capital',
                  desc: 'Founders receive more than just funding; they gain strategic partners, mentorship, and operational guidance.',
                  icon: <Briefcase className="w-8 h-8 text-angeltors-accent" />
                },
                {
                  title: 'High-Impact Network',
                  desc: 'Connect with industry experts, CXOs, and seasoned entrepreneurs who have built and exited businesses.',
                  icon: <Users className="w-8 h-8 text-white" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MEMBERSHIP JOURNEY (Timeline) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 relative border-t border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">How to Join</h2>
            
            <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-4">
              
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-white/10 z-0"></div>

              {[
                { step: '1', title: 'Apply', desc: 'Select your membership tier and submit your application.' },
                { step: '2', title: 'Verify', desc: 'Our team reviews your profile and conducts due diligence.' },
                { step: '3', title: 'Onboard', desc: 'Get access to the portal, deal flow, or matching engine.' },
                { step: '4', title: 'Scale', desc: 'Invest, raise capital, and build your professional network.' }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center max-w-[200px]">
                  <div className="w-20 h-20 bg-angeltors-ink border-2 border-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-xl text-white">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MEMBERSHIP PLANS (Stacked Cards) */}
        <section id="plans" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-[85rem] mx-auto">
            <div className="mb-20 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Select your Membership</h2>
              <p className="text-lg text-slate-400 font-medium">
                Whether you are validating an idea, raising a seed round, or deploying capital, we have a tailored tier for you.
              </p>
            </div>

            <div className="space-y-8">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. FEATURE COMPARISON MATRIX */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black/20 hidden md:block">
          <div className="max-w-[85rem] mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Compare Memberships</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-6 px-4 border-b border-white/10 w-1/3 text-slate-400 font-bold uppercase tracking-wider text-sm">Feature</th>
                    <th className="py-6 px-4 border-b border-white/10 text-white font-bold">Freemium</th>
                    <th className="py-6 px-4 border-b border-white/10 text-angeltors-accent font-bold">Startup</th>
                    <th className="py-6 px-4 border-b border-white/10 text-white font-bold">Investor</th>
                    <th className="py-6 px-4 border-b border-white/10 text-white font-bold">Mentor</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-300">
                  {[
                    { name: 'Profile Directory Access', checks: [true, true, true, true] },
                    { name: '1-on-1 Consultation', checks: [true, true, false, false] },
                    { name: 'Pitch Deck Creation', checks: [false, true, false, false] },
                    { name: 'Investor Matchmaking', checks: [false, true, false, false] },
                    { name: 'Curated Deal Flow', checks: [false, false, true, false] },
                    { name: 'Charge Consultation Fees', checks: [false, false, false, true] },
                    { name: 'Access to Pitch Events', checks: [false, true, true, false] },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-5 px-4 border-b border-white/5 text-white">{row.name}</td>
                      {row.checks.map((hasFeature, j) => (
                        <td key={j} className="py-5 px-4 border-b border-white/5">
                          {hasFeature ? <Check className={`w-5 h-5 ${j === 1 ? 'text-angeltors-accent' : 'text-angeltors-cyan'}`} /> : <span className="text-white/20">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. COMMUNITY & TRUST (Real Data) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
               style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>

          <div className="max-w-[85rem] mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Trusted by a growing network of innovators</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
                <p className="text-5xl font-black text-angeltors-cyan mb-2">20+</p>
                <p className="text-lg font-bold text-white mb-2">Active Angel Investors</p>
                <p className="text-slate-400 font-medium">Business owners, HNIs, and executives deploying strategic capital.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
                <p className="text-5xl font-black text-angeltors-accent mb-2">5+</p>
                <p className="text-lg font-bold text-white mb-2">Curated Startups</p>
                <p className="text-slate-400 font-medium">From ideation to beta-launched startups seeking growth.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
                <p className="text-5xl font-black text-white mb-2">150+</p>
                <p className="text-lg font-bold text-white mb-2">Community Members</p>
                <p className="text-slate-400 font-medium">Founders, mentors, and experts engaging with our ecosystem.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-angeltors-ink to-black pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Globe className="w-12 h-12 text-white/50 mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Ready to shape the future?</h2>
            <p className="text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
              Submit your application today. Our team will review your profile and get back to you with the next steps.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-angeltors-ink font-bold rounded-full text-lg hover:bg-slate-100 hover:scale-105 transition-all shadow-xl"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
