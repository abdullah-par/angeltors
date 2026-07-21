import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpotlightCard from '@/components/common/SpotlightCard';

function CheckIcon({ active = false, highlighted = false }: { active?: boolean, highlighted?: boolean }) {
  // If highlighted card, use accent color for active, muted for inactive
  // If normal card, use white/cyan for active, slate-500 for inactive
  const color = highlighted
    ? (active ? 'text-angeltors-accent' : 'text-angeltors-muted/50')
    : (active ? 'text-angeltors-cyan' : 'text-slate-500');

  return (
    <svg
      className={`h-4 w-4 shrink-0 mt-0.5 ${color}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L6.643 12.8l4.18 4.18 8.485-8.485-1.414-1.414-7.07 7.07z" />
    </svg>
  );
}

export default function Membership() {
  const categories = [
    {
      title: 'Freemium',
      price: '₹0',
      target: 'Idea Stage Entrepreneurs',
      features: [
        'One-to-One Consultation',
        'Idea Submission & Validation',
        'Business Model Discussion',
        'Founder Readiness Assessment',
        'Basic Guidance for Next Steps',
        'Upgrade to Startup Membership once your idea is validated.'
      ],
      highlighted: false,
    },
    {
      title: 'Startup',
      price: '₹14,999',
      suffix: '+ 18% GST',
      target: 'Registered Startups',
      features: [
        'One-to-One Consultation',
        'Business Strategy Sessions',
        'Revenue Model & Growth Planning',
        'Pitch Deck Creation, Review & Modification',
        'Investment Documentation Guidance',
        'Financial Storytelling & Fundraising Strategy',
        'Due Diligence Preparation',
        'Investor Matchmaking, Introductions & Meetings',
        'Angel Funding Assistance & Investor Follow-up',
        'Fundraising Process Guidance'
      ],
      highlighted: true,
      popular: true
    },
    {
      title: 'Angel Investor',
      price: '₹9,999',
      suffix: '+ 18% GST',
      target: 'Individual Angel Investors, HNIs, Family Offices',
      features: [
        'Access to promising startups',
        'Curated Deal Flow & Business Summary',
        'Startup Shortlisting & Pitch Deck Access',
        'Investment Pipeline & Investment Documents',
        'One-to-One Founder Meetings',
        'Pitch Sessions & Demo Days',
        'Interested Startups & Investment Notes',
        'Meeting History & Saved Opportunities',
        'Exclusive Investor Events & Networking',
        'Premium Deal Notifications'
      ],
      highlighted: false,
    },
    {
      title: 'Mentor',
      price: '₹4,999',
      suffix: '+ 18% GST',
      target: 'Industry Experts, CXOs, Startup Mentors',
      features: [
        'Professional Profile & Areas of Expertise',
        'LinkedIn Integration',
        'Years of Experience',
        'Languages & Consultation Fees',
        'Receive Mentorship Requests',
        'Accept/Reject Requests',
        'Schedule Meetings',
        'Provide Consultation',
        'Offer Growth Plans'
      ],
      highlighted: false,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Membership Categories | Angeltors</title>
        <meta
          name="description"
          content="Explore Angeltors Membership Categories for Idea Stage Entrepreneurs, Startups, Angel Investors, and Mentors."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Membership Categories | Angeltors" />
        <meta property="og:description" content="Explore Angeltors Membership Categories for Idea Stage Entrepreneurs, Startups, Angel Investors, and Mentors." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Section */}
      <section className="bg-angeltors-ink min-h-screen py-24 relative font-sans overflow-hidden">
        
        {/* Subtle grid background for the premium feel */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Membership Categories
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-medium">
              Choose a plan that works best for you and your team. No hidden fees.
            </p>
          </div>

          <div className="grid gap-0 lg:grid-cols-4 md:grid-cols-2 max-w-[85rem] mx-auto items-stretch border border-white/5 rounded-2xl lg:rounded-3xl bg-white/5 backdrop-blur-sm">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col relative h-full ${
                  category.highlighted 
                    ? 'lg:scale-[1.04] z-20 shadow-2xl rounded-2xl lg:rounded-3xl border border-angeltors-border/80' 
                    : 'border-b lg:border-b-0 lg:border-r border-white/5 last:border-0'
                }`}
              >
                <SpotlightCard
                  className={`flex flex-col flex-1 p-8 sm:p-10 ${
                    category.highlighted 
                      ? 'bg-angeltors-bg text-angeltors-ink rounded-2xl lg:rounded-3xl' 
                      : 'bg-transparent text-white hover:bg-white/[0.02] transition-colors'
                  }`}
                  spotlightColor={category.highlighted ? 'rgba(99, 91, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)'}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-bold tracking-wide ${category.highlighted ? 'text-angeltors-ink' : 'text-white'}`}>
                        {category.title}
                      </h3>
                      {category.popular && (
                        <span className="bg-angeltors-ink text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className={`text-sm h-10 font-medium ${category.highlighted ? 'text-angeltors-muted' : 'text-slate-400'}`}>
                      {category.target}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold tracking-tight ${category.highlighted ? 'text-angeltors-ink' : 'text-white'}`}>
                        {category.price}
                      </span>
                    </div>
                    {category.suffix ? (
                      <p className={`text-sm mt-1 font-medium ${category.highlighted ? 'text-angeltors-muted' : 'text-slate-400'}`}>
                        {category.suffix}
                      </p>
                    ) : (
                      <p className="text-sm text-transparent mt-1 select-none font-medium">
                        spacer
                      </p>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 flex justify-center items-center mb-10 ${
                      category.highlighted
                        ? 'bg-angeltors-accent text-white hover:bg-angeltors-accent-light shadow-md hover:shadow-lg hover:-translate-y-0.5'
                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    Get Started
                  </Link>

                  <ul className="flex-1 space-y-4">
                    {category.features.map((feature, i) => {
                      // Make last few features 'active' colored to show progression/premium feel
                      const isActive = category.highlighted ? i >= category.features.length - 4 : i >= category.features.length - 2;
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <CheckIcon active={isActive} highlighted={category.highlighted} />
                          <span className={`text-sm leading-relaxed font-medium ${category.highlighted ? 'text-angeltors-muted' : 'text-slate-300'}`}>
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
