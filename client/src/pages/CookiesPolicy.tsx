import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function CookiesPolicy() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Cookies Policy | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Read the Cookies Policy of Angeltors.com (Angeltors Private Limited). Learn what cookies are, how we use them, and your choices."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cookies Policy | Angeltors" />
        <meta property="og:description" content="Read the Cookies Policy of Angeltors.com (Angeltors Private Limited). Learn what cookies are, how we use them, and your choices." />
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
              Cookies Policy
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
              <span className="text-angeltors-cyan font-semibold">Cookies Policy</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-angeltors-bg py-16 md:py-24 text-angeltors-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-angeltors-border p-8 md:p-12 stripe-shadow-md space-y-8">
            
            <p className="text-sm font-semibold text-angeltors-muted">
              Last updated: March 05, 2025
            </p>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-angeltors-ink font-medium">
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
              </p>
              <p>
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
              </p>
              <p>
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-angeltors-ink">Interpretation and Definitions</h2>
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-angeltors-ink">Interpretation</h3>
                <p>
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-angeltors-ink">Definitions</h3>
                <p>For the purposes of this Cookies Policy:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-angeltors-ink">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to Angeltors Private Limited, 11/13/4-C, Tashkand Marg, Civil Lines, Prayagraj (Allahabad), Uttar Pradesh, India - 211001.
                  </li>
                  <li>
                    <strong className="text-angeltors-ink">Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
                  </li>
                  <li>
                    <strong className="text-angeltors-ink">Website</strong> refers to Angeltors.com, accessible from <a href="https://angeltors.com" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">https://angeltors.com</a>
                  </li>
                  <li>
                    <strong className="text-angeltors-ink">You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-angeltors-ink">The use of the Cookies</h2>
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-angeltors-ink">Type of Cookies We Use</h3>
                <p>
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
                </p>
                <p>We use both session and persistent Cookies for the purposes set out below:</p>
              </div>

              <div className="space-y-4 border border-angeltors-border rounded-xl p-6 bg-slate-50">
                <h4 className="font-bold text-angeltors-ink">Necessary / Essential Cookies</h4>
                <p className="text-sm text-angeltors-muted">Type: Session Cookies | Administered by: Us</p>
                <p className="text-sm mt-2">
                  Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                </p>
              </div>

              <div className="space-y-4 border border-angeltors-border rounded-xl p-6 bg-slate-50">
                <h4 className="font-bold text-angeltors-ink">Functionality Cookies</h4>
                <p className="text-sm text-angeltors-muted">Type: Persistent Cookies | Administered by: Us</p>
                <p className="text-sm mt-2">
                  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                </p>
              </div>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Your Choices Regarding Cookies</h2>
              <p>
                If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
              </p>
              <p>
                If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
              </p>
              <p>
                If You&apos;d like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  For the Chrome web browser, please visit this page from Google:{' '}
                  <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">
                    Google Support
                  </a>
                </li>
                <li>
                  For the Internet Explorer web browser, please visit this page from Microsoft:{' '}
                  <a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">
                    Microsoft Support
                  </a>
                </li>
                <li>
                  For the Firefox web browser, please visit this page from Mozilla:{' '}
                  <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">
                    Mozilla Support
                  </a>
                </li>
                <li>
                  For the Safari web browser, please visit this page from Apple:{' '}
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">
                    Apple Support
                  </a>
                </li>
                <li>
                  For any other web browser, please visit your web browser&apos;s official web pages.
                </li>
              </ul>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Contact Us</h2>
              <p>If you have any questions about this Cookies Policy, You can contact us:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  By Email:{' '}
                  <a href="mailto:privacy@angeltors.com" className="text-angeltors-accent hover:underline">
                    privacy@angeltors.com
                  </a>
                </li>
                <li>
                  By visiting this page on our website:{' '}
                  <a href="/contact" className="text-angeltors-accent hover:underline">
                    /contact
                  </a>
                </li>
                <li>
                  By Mail: 11/13/4-C, Tashkand Marg, Civil Lines, Prayagraj (Allahabad), Uttar Pradesh, India - 211001
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
