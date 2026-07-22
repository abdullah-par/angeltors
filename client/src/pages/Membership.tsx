import { Helmet } from 'react-helmet-async';
import MembershipHero from '../features/membership/components/MembershipHero';
import PricingPlans from '../features/membership/components/PricingPlans';
import FeatureComparisonTable from '../features/membership/components/FeatureComparisonTable';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        {/* 1. Hero Section */}
        <MembershipHero />

        {/* 2. Membership Journey Steps */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-angeltors-ink relative border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">How to Join</h2>
            <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-4">
              <div className="hidden md:block absolute top-10 left-12 right-12 h-px bg-slate-200 z-0" />
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

        {/* 3. Pricing Plans */}
        <PricingPlans />

        {/* 4. Comparison Table */}
        <FeatureComparisonTable />

        {/* 5. Trust Metrics */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white text-angeltors-ink relative overflow-hidden">
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

        {/* 6. CTA */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative bg-angeltors-ink text-white">
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
