import { Helmet } from 'react-helmet-async';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { 
  RaiseCapitalHero, 
  RaiseCapitalHowItWorks,
  RaiseCapitalWhyChoose,
  RaiseCapitalCTA
} from '../features/raise-capital';

export default function RaiseCapital() {
  return (
    <>
      <Helmet>
        <title>Raise Capital | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Unlock your startup's potential with Angeltors. Connect with the right investors, receive expert guidance, and transform your vision into reality."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Raise Capital | Angeltors" />
        <meta property="og:description" content="Secure crucial seed funding and ignite your startup's journey with Angeltors." />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollProgress />

      <RaiseCapitalHero />
      <RaiseCapitalHowItWorks />
      <RaiseCapitalWhyChoose />
      <RaiseCapitalCTA />
    </>
  );
}
