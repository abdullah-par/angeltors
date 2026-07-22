import { Helmet } from 'react-helmet-async';
import ScrollProgress from '../layouts/components/ScrollProgress';
import InvestHero from '../features/invest/components/InvestHero';
import WhyEarlyStageTimeline from '../features/invest/components/WhyEarlyStageTimeline';
import InvestmentProcessSection from '../features/invest/components/InvestmentProcessSection';

export default function InvestWithUs() {
  return (
    <div className="bg-slate-50 selection:bg-angeltors-accent/20">
      <Helmet>
        <title>Invest With Us | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Identify and capitalize on groundbreaking startups. Drive exceptional returns through strategic, early-stage investments."
        />
      </Helmet>

      <ScrollProgress />
      <InvestHero />
      <WhyEarlyStageTimeline />
      <InvestmentProcessSection />
    </div>
  );
}
