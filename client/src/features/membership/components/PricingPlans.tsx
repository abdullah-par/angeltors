import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ArrowRight, Zap, Rocket, LineChart, Network } from 'lucide-react';
import SpotlightCard from '@/components/common/SpotlightCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const plans = [
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

export function PlanCard({ plan }: { plan: typeof plans[0] }) {
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
          <div className="flex-1 mb-6">
            <div className={`inline-flex items-center justify-center p-2 rounded-xl mb-4 ${
              plan.highlighted ? 'bg-white/10 text-white' : 'bg-slate-50 text-angeltors-ink border border-slate-200/60'
            }`}>
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
                className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
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

export default function PricingPlans() {
  return (
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
  );
}
