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
    id: 'freemium',
    title: 'Freemium',
    icon: <Zap className="w-6 h-6" />,
    target: 'Idea Stage Entrepreneurs',
    price: '₹0',
    suffix: '',
    description: 'The starting point for visionary founders who want to validate their ideas before scaling.',
    topFeatures: [
      'One-to-One Consultation',
      'Idea Submission & Validation',
      'Business Model Discussion',
      'Founder Readiness Assessment',
      'Basic Guidance for Next Steps'
    ],
    hiddenFeatures: [
      'Upgrade to Startup Membership once your idea is validated.'
    ],
    highlighted: false,
  },
  {
    id: 'startup',
    title: 'Startup',
    icon: <Rocket className="w-6 h-6" />,
    target: 'Registered Startups',
    price: '₹14,999',
    suffix: '+ 18% GST',
    description: 'A comprehensive growth and fundraising ecosystem for early-stage startups aiming to scale rapidly.',
    topFeatures: [
      'One-to-One Consultation',
      'Business Strategy Sessions',
      'Revenue Model & Growth Planning',
      'Pitch Deck Creation, Review & Modification',
      'Investment Documentation Guidance'
    ],
    hiddenFeatures: [
      'Financial Storytelling & Fundraising Strategy',
      'Due Diligence Preparation',
      'Investor Matchmaking, Introductions & Meetings',
      'Angel Funding Assistance & Investor Follow-up',
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
      'Access to promising startups',
      'Curated Deal Flow & Business Summary',
      'Startup Shortlisting & Pitch Deck Access',
      'Investment Pipeline & Investment Documents',
      'One-to-One Founder Meetings'
    ],
    hiddenFeatures: [
      'Pitch Sessions & Demo Days',
      'Interested Startups & Investment Notes',
      'Meeting History & Saved Opportunities',
      'Exclusive Investor Events & Networking',
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
      'LinkedIn Integration',
      'Years of Experience',
      'Languages & Consultation Fees',
      'Receive Mentorship Requests'
    ],
    hiddenFeatures: [
      'Accept/Reject Requests',
      'Schedule Meetings',
      'Provide Consultation',
      'Offer Growth Plans'
    ],
    highlighted: false,
  }
];

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div variants={fadeIn} className="w-full flex">
      <SpotlightCard
        className={`w-full flex flex-col p-6 ${
          plan.highlighted
            ? 'bg-angeltors-ink text-white rounded-3xl border border-angeltors-navy-light/30 shadow-xl z-10 relative'
            : 'bg-white text-angeltors-ink rounded-3xl border border-slate-200/60 shadow-sm'
        }`}
        spotlightColor={plan.highlighted ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 91, 255, 0.04)'}
      >
        <div className="flex flex-col h-full">
          
          {/* Top Info */}
          <div className="flex-1 mb-6">
            <div className={`inline-flex items-center justify-center p-2 rounded-xl mb-4 ${
              plan.highlighted ? 'bg-white/10 text-white' : 'bg-slate-50 text-angeltors-ink border border-slate-200/60'
            }`}>
              {/* Clone the icon to make it slightly smaller */}
              <div className="scale-75 origin-center">{plan.icon}</div>
            </div>
            <h3 className={`text-xl font-bold tracking-tight mb-1.5 ${plan.highlighted ? 'text-white' : 'text-angeltors-ink'}`}>
              {plan.title}
            </h3>
            <p className={`text-xs font-medium mb-4 min-h-[36px] ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
              {plan.target}
            </p>
            <p className={`text-xs leading-relaxed mb-6 min-h-[54px] ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
              {plan.description}
            </p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className={`text-3xl font-extrabold tracking-tight ${plan.highlighted ? 'text-white' : 'text-angeltors-ink'}`}>
                  {plan.price}
                </span>
              </div>
              <p className={`text-xs mt-1 font-medium ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.suffix || '\u00A0'}
              </p>
            </div>
            
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-xs font-bold transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-angeltors-accent text-white hover:bg-angeltors-accent-light shadow-md hover:-translate-y-0.5'
                  : 'bg-slate-100 text-angeltors-ink hover:bg-slate-200'
              }`}
            >
              Apply now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <hr className={`border-t mb-5 ${plan.highlighted ? 'border-white/10' : 'border-slate-200/60'}`} />

          {/* Features List */}
          <div className="flex flex-col">
            <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
              What's Included
            </h4>
            <ul className="space-y-3">
              {plan.topFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-angeltors-cyan' : 'text-angeltors-accent'}`} />
                  <span className={`text-xs font-medium leading-relaxed ${plan.highlighted ? 'text-slate-200' : 'text-slate-700'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                  plan.highlighted ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-angeltors-ink'
                }`}
              >
                {expanded ? 'Hide full list' : 'View full list'}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {expanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-3 pt-3"
                  >
                    {plan.hiddenFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.highlighted ? 'text-angeltors-cyan' : 'text-angeltors-accent'}`} />
                        <span className={`text-xs font-medium leading-relaxed ${plan.highlighted ? 'text-slate-200' : 'text-slate-700'}`}>
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

      <div className="min-h-screen font-sans selection:bg-angeltors-accent selection:text-white overflow-hidden">
        
        {/* 1. HERO & PILLARS SECTION */}
        <section className="bg-angeltors-ink text-white pt-24 pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
          {/* Subtle geometric pattern instead of blurry glows */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* HERO CONTENT */}
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
                    Talk to our Team
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* PILLARS CONTENT */}
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

        {/* 3. MEMBERSHIP JOURNEY (Timeline) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-angeltors-ink relative border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">How to Join</h2>
            
            <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-4">
              
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute top-10 left-12 right-12 h-px bg-slate-200 z-0"></div>

              {[
                { step: '1', title: 'Apply', desc: 'Select your membership tier and submit your application.' },
                { step: '2', title: 'Verify', desc: 'Our team reviews your profile and conducts due diligence.' },
                { step: '3', title: 'Onboard', desc: 'Get access to the portal, deal flow, or matching engine.' },
                { step: '4', title: 'Scale', desc: 'Invest, raise capital, and build your professional network.' }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center max-w-[200px]">
                  <div className="w-20 h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-md text-angeltors-ink">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MEMBERSHIP PLANS (Stacked Cards) */}
        <section id="plans" className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-angeltors-ink">
          <div className="max-w-[85rem] mx-auto">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Select your Membership</h2>
              <p className="text-lg text-slate-500 font-medium">
                Whether you are validating an idea, raising a seed round, or deploying capital, we have a tailored tier for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. FEATURE COMPARISON MATRIX */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-slate-50 text-angeltors-ink hidden md:block">
          <div className="max-w-[85rem] mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Compare Memberships</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-slate-200/60">
                <thead>
                  <tr>
                    <th className="py-6 px-6 border-b border-slate-200/60 w-1/3 text-slate-500 font-bold uppercase tracking-wider text-sm">Feature</th>
                    <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-ink font-bold">Freemium</th>
                    <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-accent font-bold">Startup</th>
                    <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-ink font-bold">Investor</th>
                    <th className="py-6 px-6 border-b border-slate-200/60 text-angeltors-ink font-bold">Mentor</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-700">
                  {[
                    { name: 'Profile Directory Access', checks: [true, true, true, true] },
                    { name: '1-on-1 Consultation', checks: [true, true, false, false] },
                    { name: 'Pitch Deck Creation', checks: [false, true, false, false] },
                    { name: 'Investor Matchmaking', checks: [false, true, false, false] },
                    { name: 'Curated Deal Flow', checks: [false, false, true, false] },
                    { name: 'Charge Consultation Fees', checks: [false, false, false, true] },
                    { name: 'Access to Pitch Events', checks: [false, true, true, false] },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-5 px-6 border-b border-slate-100 text-angeltors-ink">{row.name}</td>
                      {row.checks.map((hasFeature, j) => (
                        <td key={j} className="py-5 px-6 border-b border-slate-100">
                          {hasFeature ? <Check className={`w-5 h-5 ${j === 1 ? 'text-angeltors-accent' : 'text-slate-400'}`} /> : <span className="text-slate-300">—</span>}
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
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white text-angeltors-ink relative overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
               style={{ backgroundImage: 'radial-gradient(circle at center, #E6EBF1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>

          <div className="max-w-[85rem] mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Trusted by a growing network of innovators</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-10 shadow-sm">
                <p className="text-5xl font-black text-angeltors-ink mb-2">20+</p>
                <p className="text-lg font-bold text-angeltors-ink mb-2">Active Angel Investors</p>
                <p className="text-slate-500 font-medium">Business owners, HNIs, and executives deploying strategic capital.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-10 shadow-sm">
                <p className="text-5xl font-black text-angeltors-accent mb-2">5+</p>
                <p className="text-lg font-bold text-angeltors-ink mb-2">Curated Startups</p>
                <p className="text-slate-500 font-medium">From ideation to beta-launched startups seeking growth.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-10 shadow-sm">
                <p className="text-5xl font-black text-angeltors-ink mb-2">150+</p>
                <p className="text-lg font-bold text-angeltors-ink mb-2">Community Members</p>
                <p className="text-slate-500 font-medium">Founders, mentors, and experts engaging with our ecosystem.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative bg-angeltors-ink text-white">
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
