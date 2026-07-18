import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function TermsOfUse() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Read the Terms and Conditions of Angeltors.com (Angeltors Private Limited) governing your use of our platform."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms and Conditions | Angeltors" />
        <meta property="og:description" content="Read the Terms and Conditions of Angeltors.com (Angeltors Private Limited) governing your use of our platform." />
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
              Terms &amp; Conditions
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
              <span className="text-angeltors-cyan font-semibold">Terms &amp; Conditions</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-angeltors-bg py-16 md:py-24 text-angeltors-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl depth-border p-8 md:p-12 ag-shadow-md space-y-8">
            
            <p className="text-sm font-semibold text-angeltors-muted">
              Last updated: March 05, 2025
            </p>

            <p className="text-lg leading-relaxed text-angeltors-ink font-medium">
              Please read these terms and conditions carefully before using Our Service.
            </p>

            <hr className="border-angeltors-border" />

            {/* Interpretation and Definitions */}
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
                <p>For the purposes of these Terms and Conditions:</p>
                
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Affiliate</span>
                    <span>means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Country</span>
                    <span>refers to: Uttar Pradesh, India</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Company</span>
                    <span>(referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Angeltors Private Limited, 11/13/4-C, Tashkand Marg, Civil Lines, Prayagraj (Allahabad), Uttar Pradesh, India - 211001.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Device</span>
                    <span>means any device that can access the Service such as a computer, a cellphone or a digital tablet.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Service</span>
                    <span>refers to the Website.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Terms and Conditions</span>
                    <span>(also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Third-party Service</span>
                    <span>means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">Website</span>
                    <span>refers to Angeltors.com, accessible from <a href="https://angeltors.com" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">https://angeltors.com</a></span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-angeltors-ink min-w-[150px]">You</span>
                    <span>means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-angeltors-border" />

            {/* Acknowledgment */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Acknowledgment</h2>
              <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <p>
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>
              <p>
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Links to Other Websites */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Links to Other Websites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>
              <p>
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
              <p>
                We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Termination */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Termination</h2>
              <p>
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p>
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Limitation of Liability</h2>
              <p>
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
              </p>
              <p>
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
              <p>
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* AS IS Disclaimer */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
              <p>
                The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
              </p>
              <p>
                Without limiting the foregoing, neither the Company nor any of the company&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Governing Law */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Governing Law</h2>
              <p>
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Disputes Resolution */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Disputes Resolution</h2>
              <p>
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* European Union Users */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">For European Union (EU) Users</h2>
              <p>
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* US Compliance */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">United States Legal Compliance</h2>
              <p>
                You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Severability and Waiver */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-angeltors-ink">Severability and Waiver</h2>
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-angeltors-ink">Severability</h3>
                <p>
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-angeltors-ink">Waiver</h3>
                <p>
                  Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                </p>
              </div>
            </div>

            <hr className="border-angeltors-border" />

            {/* Translation Interpretation */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Translation Interpretation</h2>
              <p>
                These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Changes to Terms */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Changes to These Terms and Conditions</h2>
              <p>
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p>
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            {/* Contact Us */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
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
