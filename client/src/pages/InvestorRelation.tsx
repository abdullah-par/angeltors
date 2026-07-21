import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function InvestorRelation() {
  const reducedMotion = useReducedMotion();

  const principles = [
    {
      title: 'Respect for Founders',
      image: '/images/Respect_Founders.png',
      points: [
        "We value founders' time and expertise, recognizing their pivotal role in driving innovation.",
        "We believe in respecting their judgment regarding business operations, fostering a collaborative partnership."
      ]
    },
    {
      title: 'Confidentiality and Integrity',
      image: '/images/Integrity.png',
      points: [
        "We uphold strict confidentiality regarding all information shared by founders during the fundraising process.",
        "We expect investors to adhere to confidentiality agreements and maintain transparency regarding potential conflicts of interest."
      ]
    },
    {
      title: 'Mutual Support and Collaboration',
      image: '/images/Mutual_Support.png',
      points: [
        "We believe in providing founders with comprehensive support beyond capital, including valuable connections, strategic advice, and resources for hiring.",
        "We foster a collaborative environment where investors and founders work together to achieve shared success."
      ]
    },
    {
      title: 'Transparency and Accountability',
      image: '/images/Transparency.png',
      points: [
        "We are committed to operating with complete transparency, ensuring open communication and clear processes.",
        "We prioritize the interests of both founders and investors, striving to protect their interests and facilitate mutually beneficial outcomes."
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Investor Relation | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Learn about our ethical principles, respect for founders, confidentiality, mutual support, transparency, and investor grievance redressal at Angeltors."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Investor Relation | Angeltors" />
        <meta property="og:description" content="Learn about our ethical principles, respect for founders, confidentiality, mutual support, transparency, and investor grievance redressal at Angeltors." />
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-12 text-center">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 22 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="space-y-5"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              Investor Relation
            </h1>

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
              <span className="text-angeltors-cyan font-semibold">Investor Relation</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#F8FAFC] py-16 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-angeltors-ink">
              Our Ethical Principles
            </h2>
            <p className="text-sm leading-relaxed text-angeltors-muted">
              At Angeltors, we recognize that trust is the cornerstone of a thriving startup ecosystem.
              We are committed to fostering strong, ethical relationships with both our investors and the founders we support.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl overflow-hidden depth-border ag-shadow-md hover:ag-shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="h-56 sm:h-64 overflow-hidden relative bg-slate-100">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-angeltors-ink pl-3 border-l-4 border-angeltors-accent">
                      {principle.title}
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-angeltors-muted leading-relaxed">
                      {principle.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-angeltors-accent font-semibold shrink-0">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grievance Mechanism Card */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 depth-border ag-shadow-md space-y-6"
          >
            <h3 className="text-lg sm:text-xl font-bold text-angeltors-ink pl-3 border-l-4 border-angeltors-accent">
              Investor Grievance Mechanism
            </h3>
            <p className="text-xs sm:text-sm text-angeltors-muted leading-relaxed">
              Angeltors is committed to addressing investor grievances in a timely and efficient manner.
              Investors can submit their grievances through the following channels:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm pt-2">
              <div className="space-y-1">
                <span className="font-bold text-angeltors-ink block">Email:</span>
                <a href="mailto:cs@angeltors.com" className="text-angeltors-accent hover:underline font-semibold">
                  cs@angeltors.com
                </a>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-angeltors-ink block">Phone:</span>
                <span className="text-angeltors-muted">+91 - 9161 - 110 - 125</span>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-angeltors-ink block">Address:</span>
                <span className="text-angeltors-muted leading-relaxed block">
                  11/13/4-C, 2nd Floor, Tashkand Marg, Civil Lines, Prayagraj, Uttar Pradesh, India - 211001
                </span>
              </div>
            </div>

            <p className="text-xs text-angeltors-muted italic border-t border-angeltors-border pt-4">
              We will acknowledge receipt of all grievances within 2 business days and strive to resolve them within 7 business days.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}
