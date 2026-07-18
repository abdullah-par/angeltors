import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import ScrollProgress from '../layouts/components/ScrollProgress';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function PrivacyPolicy() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Angeltors — Angel Investment Platform</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Angeltors.com (Angeltors Private Limited). Learn how we gather, utilize, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | Angeltors" />
        <meta property="og:description" content="Read the Privacy Policy of Angeltors.com (Angeltors Private Limited). Learn how we gather, utilize, and protect your personal information." />
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
              Privacy Policy
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
              <span className="text-angeltors-cyan font-semibold">Privacy Policy</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-angeltors-bg py-16 md:py-24 text-angeltors-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-angeltors-border p-8 md:p-12 stripe-shadow-md space-y-8">
            
            <p className="text-lg leading-relaxed text-angeltors-ink font-medium">
              Angeltors.com (Angeltors Private Limited) has its own unique privacy policy features. Please read the following to learn more about our privacy policy.
            </p>

            <div className="space-y-4">
              <p>
                This Privacy Policy covers Angeltors.com (Angeltors Private Limited) behaviour towards the personal information which is stored while you are exploring our site and using the services on the site.
              </p>
              <p className="border-l-4 border-angeltors-accent pl-4 italic text-sm">
                However, The Provider of Information shall not be covered by this Privacy Policy, if he/she accesses any other/third party links from the Website.
              </p>
              <p>
                We care about your privacy and therefore, will respect your right to privacy. This privacy policy (&quot;Policy&quot;) contains information regarding the use of personal information provided by you to Angeltors Private Limited (APL/Us/We/Our). All visitors to{' '}
                <a href="https://www.angeltors.com" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">
                  https://www.angeltors.com
                </a>{' '}
                (&quot;Website&quot;) AND to our Mobile Application “Angeltors for Android and iOS” are advised to read and understand our Privacy Policy carefully since by accessing the Website AND/OR Mobile Application, you agree to be bound by the terms and conditions of the below mentioned Privacy Policy and consent to the collection, storage, and use of information pertaining to you as specified herein.
              </p>
              <p>
                If you do not agree with the terms and conditions of our Privacy Policy, which includes the manner of collection or use of your information, please do not use or access the Website.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Gathering &amp; Utilization of Information</h2>
              <p>
                Angeltors Private Limited collects personally identifiable information while registering for Angeltors.com account, Private Placement Equity Services through the partners &amp; associates.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-angeltors-ink">DEFINITIONS</h2>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-angeltors-ink min-w-[150px]">&quot;Applicable Laws&quot;</span>
                  <span>shall mean the Information Technology Act, 2000 and Rules thereunder as amended from time to time.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-angeltors-ink min-w-[150px]">&quot;User&quot;</span>
                  <span>shall mean and refer to natural and legal individuals who use the Website.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-angeltors-ink min-w-[150px]">&quot;Information&quot;</span>
                  <span>shall mean and refer to natural and legal individuals who use the Website.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-angeltors-ink min-w-[150px]">&quot;Personal information&quot;</span>
                  <span>means any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such person.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-angeltors-ink min-w-[150px]">&quot;Rules&quot;</span>
                  <span>shall mean the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 as amended from time to time.</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold text-angeltors-ink min-w-[150px]">&quot;Sensitive Personal Data and Information (SPDI)&quot;</span>
                  <span className="text-sm">
                    shall mean and include such personal information which consists of information relating to:- (i) password; (ii)financial information such as Bank account or credit card or debit card or other payment instrument details ; (iii) physical, physiological and mental health condition; (iv) sexual orientation; (v) medical records and history;(vi) Biometric information; (vii) any detail relating to the above clauses as provided to body corporate for providing service; and (viii) any of the information received under above clauses by body corporate for processing, stored or processed under lawful contract or otherwise: provided that, any information that is freely available or accessible in public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not be regarded as sensitive personal data or information for the purposes of these rules.
                  </span>
                </li>
              </ul>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">PERSONAL INFORMATION</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  While accessing and/or using Our Platform/Mobile Application, We may ask You to provide Us with certain information which may be generic or personally identifiable information that can be used to contact or identify You, which may include Your and/or Your organisation’s name, gender email address, postal address, phone number, PAN, Aadhar, date of birth, father name, citizenship, photographs, demat details, financial and commercial information, LinkedIn URL, cancelled cheque details with respect to Your business, any nominee details, manner of use of the Services or any other information You voluntarily provide to Us in any form, way or manner (Personal Information).
                </li>
                <li>
                  We understand that the Personal Information is extremely private to You and assure You that it will be used only for providing the Services as mutually agreed to be rendered by us, and as stated under this Privacy Policy.
                </li>
                <li>
                  We will not access information without Your explicit consent (as provided on the acceptance of this Privacy Policy). You have the option not to provide Us with consent or to subsequently revoke consent to the collection of Personal Information.
                </li>
              </ol>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">HOW WE COLLECT INFORMATION</h2>
              <p>
                The Personal Information that We collect are only as required to provide Our Services and for Us to better understand Your interests. We may collect information through various means including but not limited to the following:
              </p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>While you register / sign up / create a profile on the Platform/Mobile Application;</li>
                <li>When You sign up or subscribe to any Services;</li>
                <li>When You provide Your Information to Us when you interact with the Platform/Mobile Application.</li>
                <li>When You provide Us Your information through any external mediums such as phone calls, virtual or in person meetings, forms, links, emails, WhatsApp or other messaging platforms, other forms of digital or physical communication, or in any other manner;</li>
                <li>When You use the features on Our platform and/or Mobile Application and/or when You use Services;</li>
                <li>When You access the platform/Mobile Application or Services or</li>
                <li>By use of cookies.</li>
              </ol>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">HOW THE PERSONAL INFORMATION COLLECTED IS USED</h2>
              <p>The Information provided by you is used and processed by Us in the following ways-</p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>To respond to the queries posted by you on our Website.</li>
                <li>To protect and investigate against any unlawful activities, such as, fraud, etc.</li>
                <li>To operate, maintain, provide features &amp; functionality, and to notify about the enhancements to Website.</li>
                <li>To provide User any information, products, or services that User may request from APL, or which We feel may be of interest to User, where you have consented to be contacted for such purposes.</li>
                <li>To carry out its obligations arising from any contracts between User and APL.</li>
                <li>To monitor the effectiveness of our marketing campaigns.</li>
                <li>APL may also use User’s data, or permit selected third parties to use such data, to provide User information about goods and services that may be of interest to such User.</li>
                <li>APL do not disclose information about individuals (that causes them to be identified) to our advertisers, but APL may provide them with aggregated information about our Users. APL may also use such aggregated information to help advertisers reach the kind of audience they intend to target.</li>
                <li>User has the right to ask APL not to process User’s Personal Information for marketing purposes.</li>
              </ol>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">DATA RETENTION</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  We will only retain Your Personal Information for as long as may be necessary for the performance of the Services and for the effective and safe functioning of the platform/ Mobile Application, including for the purposes of satisfying any legal, accounting, or reporting requirements. We reserve the right to retain your Personal Information for the purposes of maintaining records.
                </li>
                <li>
                  In some circumstances, we may anonymize Your Personal Information (so that it can no longer be associated with You) for research or statistical purposes in which case We may use this information indefinitely without further notice to You.
                </li>
              </ol>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">TRANSFER OF YOUR PERSONAL INFORMATION</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  Your Personal Information is processed at Our operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to and maintained on computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may be different to those from Your jurisdiction.
                </li>
                <li>
                  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                </li>
              </ol>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">ACCESS TO USER INFORMATION</h2>
              <p>1. If We have collected Personal Information from You, You may make a request to exercise the following rights:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to withdraw Your consent at any time where We rely on Your consent to process Your Personal Information;</li>
                <li>A right to have Your information rectified if such information is found to be incomplete or inaccurate;</li>
                <li>A right to object to Us processing data collected from You;</li>
                <li>A right to request that We restrict the processing of Your Personal Information;</li>
                <li>A right to be notified in the event of a breach of any Personal Information collected by the platform.</li>
                <li>A right to access, update or to delete information that We have on You; and</li>
                <li>The right to be provided with a copy of Your Personal Data in a structured, machine-readable and commonly used format;</li>
              </ul>
              <ol className="list-decimal pl-5 space-y-3 pt-2" start={2}>
                <li>
                  It is clarified that any rights that You may have under this Clause shall only be applicable and made effective 15 (fifteen) days from the date of request for the exercise of such right and not to any consents, approvals or processing of information that has already taken place prior to such date.
                </li>
                <li>
                  You may decline to submit identifiable information through the platform, in which case You may not be allowed to access certain features / parts of the platform.
                </li>
                <li>
                  If You believe that any of Your Personal Information held by Us is inaccurate, and there is no option provided within the platform to correct or update such information, or if You would like to exercise any of the rights mentioned in this Clause, You may write to Us at the Email ID provided in Annexure A below.
                </li>
                <li>
                  It is Your responsibility to ensure that any information You provide to Us remains accurate and updated.
                </li>
              </ol>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">RIGHT TO UNSUBSCRIBE</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  You always have the option to not provide information by choosing not to use the platform or a particular feature thereof (where such feature is available for opt-out). We may automatically use Our available technology to retain Your preferences.
                </li>
                <li>
                  When You update information, We usually keep a copy of the previous version for Our records. If You do not want to receive updates from Us, please update Your preferences or write to Us at the Email ID provided in Annexure A below. However, opting out of updates still governs Your use of the platform under the Terms of Use and Privacy Policy.
                </li>
              </ol>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Information Sharing &amp; Disclosure</h2>
              <p>
                The information collected by the Angeltors Private Limited or its own website{' '}
                <a href="https://www.angeltors.com" target="_blank" rel="noopener noreferrer" className="text-angeltors-accent hover:underline">
                  https://www.angeltors.com
                </a>{' '}
                is only use for information &amp; services providing. We never use our client personal information to share anyone else or any other institutions except our partner’s institutions.
              </p>
              <p>
                We will preserve your personal information without selling or renting it to anyone. Only those people or companies will have access to the information; who are authorized to do so.
              </p>
              <p>
                Angeltors.com will need to share your information with your consent only.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Edit Your Account Information and Preferences</h2>
              <p>Angeltors.com provides the facility to edit your Account Information and preferences at any time.</p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Security</h2>
              <p>Your Angeltors.com Account Information is password-protected for your privacy and security.</p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Amendments in the Privacy Policy</h2>
              <p>
                Angeltors.com may change this policy from time to time. You will be notified by posting a prominent announcement on our pages in case of substantial amendments in the way we use your personal information.
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Suggestions or Queries</h2>
              <p>
                You are invited to forward your queries and suggestions to the email:{' '}
                <a href="mailto:cs@angeltors.com" className="text-angeltors-accent hover:underline">
                  cs@angeltors.com
                </a>
              </p>
            </div>

            <hr className="border-angeltors-border" />

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-angeltors-ink">Grievance Redressal</h2>
              <p>
                Any Grievance relating to your Personal Information may be addressed to{' '}
                <a href="mailto:cs@angeltors.com" className="text-angeltors-accent hover:underline">
                  cs@angeltors.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
