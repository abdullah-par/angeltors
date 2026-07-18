import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Membership() {
  const reducedMotion = useReducedMotion();

  const plans = [
    {
      title: 'Investor Tier',
      subtitle: '"Angeltors Vantage"',
      image: '/images/Investor.jpg',
      points: [
        'Exclusive Deal Previews',
        'In-Depth Investment Reports and market analysis',
        'Webinars insights from industry experts and successful investors',
        'Priority Access to Angeltors Events',
        'Personalized Portfolio Analysis',
        'Dashboard of Real-time data of startup sectors & market trends',
        'Access to Co-Investment opportunities'
      ]
    },
    {
      title: 'Startup Tier',
      subtitle: '"Angeltors Accelerator"',
      image: '/images/Startup.jpg',
      points: [
        'Dedicated Mentor Pairing',
        'Access to Angeltors\' In-House Support Portal',
        'Growth Hacking Workshops',
        'Pitch Deck Review & Refinement',
        'Investor Connect Sessions',
        'Access to a Knowledge base',
        'Startup Community access'
      ]
    },
    {
      title: 'Mentor Tier',
      subtitle: '"Angeltors Catalyst"',
      image: '/images/Mentorship.jpg',
      points: [
        'Exclusive Mentor Network Access',
        'Thought Leadership Opportunities',
        'Priority Access to Startup Deal Flow for potential investment',
        'Recognition & Profile Promotion',
        'Access to Mentor only workshops',
        'Access to a curated database of startups'
      ]
    },
    {
      title: 'In house Services Tier',
      subtitle: '"Angeltors Direction"',
      image: '/images/In-house-support.jpg',
      points: [
        'Personalize Guidance and Expertise',
        'Holistic Approach that focus on their core product or service',
        'Access to experienced professionals, saving startups time & money',
        'Reduced Risk',
        'Accelerated Growth',
        'Increased Success Rate'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Subscription Plans &amp; Membership | Angeltors</title>
        <meta
          name="description"
          content="Unlock exclusive access and accelerate your success with Angeltors Subscription Plans. Explore tiers for Investors, Startups, Mentors, and In-house services."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Subscription Plans | Angeltors" />
        <meta property="og:description" content="Unlock exclusive access and accelerate your success with Angeltors Subscription Plans." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-angeltors-ink text-white">
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

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 22 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="space-y-5"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white max-w-4xl mx-auto">
              Elevate Your Startup Journey - Subscription Plans
            </h1>
            
            <p className="text-angeltors-cyan text-sm sm:text-base font-medium max-w-2xl mx-auto">
              Unlock Exclusive Access &amp; Accelerate Your Success with Angeltors Subscription Plans!
            </p>

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
              <span className="text-angeltors-cyan font-semibold">Membership</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Intro & Cards section */}
      <section className="bg-[#F8FAFC] py-16 md:py-24 text-angeltors-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm sm:text-base leading-relaxed text-angeltors-ink font-medium">
              We&apos;re excited to announce the launch of our exclusive subscription plans, designed to provide investors, startups, and mentors with unparalleled access, resources, and opportunities within the Angeltors ecosystem.
            </p>
          </div>

          {/* 2x2 Grid of Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl overflow-hidden depth-border stripe-shadow-md hover:stripe-shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-56 sm:h-64 overflow-hidden relative bg-slate-100">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-angeltors-ink">
                        {plan.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-angeltors-accent mt-0.5">
                        {plan.subtitle}
                      </h4>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-angeltors-muted leading-relaxed">
                      {plan.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-angeltors-accent font-semibold shrink-0">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-angeltors-ink px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-angeltors-accent"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
