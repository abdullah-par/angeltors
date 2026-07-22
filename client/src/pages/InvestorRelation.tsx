import { Helmet } from 'react-helmet-async';
import ScrollProgress from '../layouts/components/ScrollProgress';
import InvestorRelationHero from '../features/investor-relation/components/InvestorRelationHero';
import EthicalPrinciplesGrid from '../features/investor-relation/components/EthicalPrinciplesGrid';
import GrievanceMechanismCard from '../features/investor-relation/components/GrievanceMechanismCard';

export default function InvestorRelation() {
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
      <InvestorRelationHero />

      <section className="bg-[#F8FAFC] py-16 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <EthicalPrinciplesGrid />
          <GrievanceMechanismCard />
        </div>
      </section>
    </>
  );
}
