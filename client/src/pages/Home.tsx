import { Helmet } from "react-helmet-async";
import ScrollProgress from "../layouts/components/ScrollProgress";
import Hero from "../features/home/components/Hero";
import StatsSection from "../features/home/components/StatsSection";
import FeatureCards from "../features/home/components/FeatureCards";
import BuildFutureBanner from "../features/home/components/BuildFutureBanner";
import ServicesGrid from "../features/home/components/ServicesGrid";
import SeedToScaleBanner from "../features/home/components/SeedToScaleBanner";
import FAQSection from "../features/home/components/FAQSection";
import TestimonialBanner from "../features/home/components/TestimonialBanner";
import NewsletterSection from "../features/home/components/NewsletterSection";
import FloatingButtons from "../layouts/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Angeltors | Angel Investment, Startup Mentorship & In-House Support</title>
        <meta name="description" content="Angeltors helps startups raise capital, get mentorship, in-house support, and access business advisory, legal, IP, tech, marketing, SEO, HRMS, and accounting services." />
        <meta name="keywords" content="Angel Investment, Startup Mentorship, In-House Support, Invest With Us, Raise Capital, Business Advisory, Legal, IP, Tech, Marketing, SEO, HRMS, Accounting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Angeltors | Angel Investment, Startup Mentorship & In-House Support" />
        <meta property="og:description" content="Angeltors helps startups raise capital, get mentorship, in-house support, and access business advisory, legal, IP, tech, marketing, SEO, HRMS, and accounting services." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://angeltors.com/assets/images/og-homepage.png" />
        <meta property="og:site_name" content="Angeltors" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Angeltors | Angel Investment, Startup Mentorship & In-House Support" />
        <meta name="twitter:description" content="Angeltors helps startups raise capital, get mentorship, in-house support, and access business advisory, legal, IP, tech, marketing, SEO, HRMS, and accounting services." />
        <meta name="twitter:image" content="https://angeltors.com/assets/images/og-homepage.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <ScrollProgress />
      
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <Hero />
        <StatsSection />
      </div>

      <FeatureCards />

      <BuildFutureBanner />

      <div className="mx-auto max-w-7xl px-4 py-24 lg:py-32 sm:px-6 lg:px-8">
        <ServicesGrid />
      </div>

      <SeedToScaleBanner />

      <div className="mx-auto max-w-7xl px-4 py-24 lg:py-32 sm:px-6 lg:px-8">
        <FAQSection />
      </div>

      <TestimonialBanner />

      <div className="pb-24 pt-12">
        <NewsletterSection />
      </div>

      <FloatingButtons />
    </>
  );
}
