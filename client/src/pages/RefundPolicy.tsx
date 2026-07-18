import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function RefundPolicy() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Returns &amp; Refunds Policy | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Read the Returns and Refunds Policy of Angeltors.com (Angeltors Private Limited) governing your purchases and digital products."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Returns &amp; Refunds Policy | Angeltors" />
        <meta property="og:description" content="Read the Returns and Refunds Policy of Angeltors.com (Angeltors Private Limited) governing your purchases and digital products." />
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-tight text-white">
              Returns &amp; Refunds Policy
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
              <span className="text-angeltors-cyan font-semibold">Returns &amp; Refunds Policy</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-angeltors-bg py-16 md:py-24 text-angeltors-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-angeltors-border p-8 md:p-12 stripe-shadow-md space-y-8">
            
            <p className="text-lg leading-relaxed text-angeltors-ink font-medium">
              Thank you for shopping at Angeltors.com
            </p>

            <p>
              Angeltors.com takes the utmost care to process consultancy, advisory, brokerage, services &amp; mediation as per the instructions given by our clients, online.
            </p>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Non-tangible irrevocable goods (&quot;Digital Products&quot;)</h2>
              <p>
                We do not issue refunds for non-tangible irrevocable goods (&quot;Digital Products&quot;) once the order is confirmed and the product is sent.
              </p>
              <p>
                We recommend contacting us for assistance if you experience any issues receiving or downloading our products.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Contact Us</h2>
              <p>
                Contact us for any issues at:{' '}
                <a href="mailto:connect@angeltors.com" className="text-angeltors-accent hover:underline">
                  connect@angeltors.com
                </a>
              </p>
              <p>
                If you have any questions about our Returns and Refunds Policy, please contact us:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  By email:{' '}
                  <a href="mailto:privacy@angeltors.com" className="text-angeltors-accent hover:underline">
                    privacy@angeltors.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
