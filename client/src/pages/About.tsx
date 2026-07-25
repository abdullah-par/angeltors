import { Helmet } from 'react-helmet-async';
import ScrollProgress from '../layouts/components/ScrollProgress';
import AboutHero from '../features/about/components/AboutHero';
import AboutIntro from '../features/about/components/AboutIntro';
import WeProvideSection from '../features/about/components/WeProvideSection';
import SectorsSection from '../features/about/components/SectorsSection';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Learn about Angeltors, India's premier angel investment platform connecting visionary founders with strategic capital, mentorship, and in-house operational support."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Angeltors" />
        <meta property="og:description" content="Angeltors is a prominent Angel Investment Platform focused on high-growth startups with seed & early-stage funding, mentorship, and in-house support." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollProgress />

      <AboutHero />
      <AboutIntro />
      <WeProvideSection />
      <SectorsSection />
    </>
  );
}
