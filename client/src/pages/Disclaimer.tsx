import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Disclaimer() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Disclaimer | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Read the Disclaimer of Angeltors.com (Angeltors Private Limited) regarding information accuracy, external links, fair use, and liability."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Disclaimer | Angeltors" />
        <meta property="og:description" content="Read the Disclaimer of Angeltors.com (Angeltors Private Limited) regarding information accuracy, external links, fair use, and liability." />
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
              Disclaimer
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
              <span className="text-angeltors-cyan font-semibold">Disclaimer</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-angeltors-bg py-16 md:py-12 text-angeltors-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl depth-border p-8 md:p-12 ag-shadow-md space-y-8">
            
            <p className="text-sm font-semibold text-angeltors-muted">
              Last updated: March 05, 2025
            </p>

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
                <p>For the purposes of this Disclaimer:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-angeltors-ink">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to Angeltors Private Limited, 11/13/4-C, Tashkand Marg, Civil Lines, Prayagraj (Allahabad), Uttar Pradesh, India - 211001.
                  </li>
                  <li>
                    <strong className="text-angeltors-ink">Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong className="text-angeltors-ink">You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                  <li>
                    <strong className="text-angeltors-ink">Website</strong> refers to Angeltors.com, accessible from <a href="https://angeltors.com" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">https://angeltors.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Disclaimer</h2>
              <p>The information contained on the Service is for general information purposes only.</p>
              <p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
              <p>
                In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
              </p>
              <p>The Company does not warrant that the Service is free of viruses or other harmful components.</p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">External Links Disclaimer</h2>
              <p>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p>
              <p>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Errors and Omissions Disclaimer</h2>
              <p>
                The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
              </p>
              <p>The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Fair Use Disclaimer</h2>
              <p>
                The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
              </p>
              <p>
                This constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the United States Copyright law.
              </p>
              <p>
                If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Views Expressed Disclaimer</h2>
              <p>
                The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
              </p>
              <p>
                Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">No Responsibility Disclaimer</h2>
              <p>
                The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
              </p>
              <p>
                In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">&quot;Use at Your Own Risk&quot; Disclaimer</h2>
              <p>
                All information in the Service is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
              </p>
              <p>
                The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Contact Us</h2>
              <p>If you have any questions about this Disclaimer, You can contact Us:</p>
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
