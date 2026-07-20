import { Helmet } from 'react-helmet-async';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { ServicesIntro, ServicesGrid, ServicesOverview } from '../features/services';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Angeltors</title>
        <meta
          name="description"
          content="More than investment, we empower startups with comprehensive support to accelerate growth and maximize success. Discover our full range of services."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services | Angeltors" />
        <meta property="og:description" content="Discover our full range of startup services including business advisory, legal compliance, tech support, and more." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollProgress />

      <ServicesIntro />
      <ServicesGrid />
      <ServicesOverview />
    </>
  );
}
