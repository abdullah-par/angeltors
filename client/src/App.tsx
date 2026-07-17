import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Globe,
  Layers3,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

type PageKey =
  | 'home'
  | 'invest-with-us'
  | 'raise-capital'
  | 'learn-with-us'
  | 'our-services'
  | 'blogs'
  | 'contact'

type NavItem = {
  label: string
  path: string
}

type SeoMeta = {
  title: string
  description: string
  canonical: string
}

type HeroContent = {
  eyebrow: string
  title: string
  subtitle: string
  body: string
  primaryLabel: string
  secondaryLabel: string
  image: string
  badge: string
}

type PageCopy = {
  seo: SeoMeta
  hero: HeroContent
}

type Stat = {
  value: string
  label: string
}

type Card = {
  title: string
  description: string
  icon: typeof Sparkles
}

type ServiceCard = {
  title: string
  description: string
  image: string
}

type FaqItem = {
  question: string
  answer: string
}

type PageConfig = PageCopy & {
  key: PageKey
  navLabel: string
  path: string
}

const siteUrl = 'https://angeltors.com'
const ogImage = 'https://angeltors.com/assets/images/og-homepage.png'

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Invest With Us', path: '/invest-with-us' },
  { label: 'Raise Capital', path: '/raise-capital' },
  { label: 'Learn With Us', path: '/learn-with-us' },
  { label: 'Our Services', path: '/our-services' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
]

const footerColumns = [
  {
    title: 'Discover',
    links: [
      { label: 'About Us', path: '/#about-us' },
      { label: 'Invest With Us', path: '/invest-with-us' },
      { label: 'Raise Capital', path: '/raise-capital' },
      { label: 'Learn With Us', path: '/learn-with-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Investors', path: '/our-services' },
      { label: 'Startups', path: '/our-services' },
      { label: 'Mentorship', path: '/our-services' },
      { label: 'In-House Support', path: '/our-services' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Sign Up', path: '/contact' },
      { label: 'Pitch To Us', path: '/raise-capital' },
      { label: 'Blog Post', path: '/blogs' },
      { label: 'Investor Relation', path: '/contact' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Privacy Policy', path: '/contact' },
      { label: 'Terms of Use', path: '/contact' },
      { label: 'Refund Policy', path: '/contact' },
      { label: 'Disclaimer', path: '/contact' },
      { label: 'Cookies Policy', path: '/contact' },
    ],
  },
]

const socialLinks = [
  { label: 'Facebook', href: '#facebook', short: 'FB' },
  { label: 'Instagram', href: '#instagram', short: 'IG' },
  { label: 'LinkedIn', href: '#linkedin', short: 'IN' },
  { label: 'YouTube', href: '#youtube', short: 'YT' },
  { label: 'WhatsApp', href: '#whatsapp', short: 'WA' },
]

const featureCards: Card[] = [
  {
    title: 'Founder-centric approach',
    description:
      'We structure capital conversations around traction, product fit, and long-term execution.',
    icon: Users,
  },
  {
    title: 'Ethical practices',
    description:
      'Clear diligence, transparent communication, and compliance-first support for every stage.',
    icon: ShieldCheck,
  },
  {
    title: 'Collaboration & community',
    description:
      'A networked workflow that keeps founders, operators, and investors moving together.',
    icon: Globe,
  },
  {
    title: 'Impact-driven investment',
    description:
      'Sector-aware backing for businesses that create measurable value and market resilience.',
    icon: TrendingUp,
  },
  {
    title: 'Diversification & innovation',
    description:
      'Multi-sector exposure and innovation-led thesis design for a more adaptive portfolio.',
    icon: Layers3,
  },
  {
    title: 'Long-term perspective',
    description:
      'Support that is designed around sustainable scale, not just the next funding round.',
    icon: BarChart3,
  },
]

const serviceCards: ServiceCard[] = [
  {
    title: 'Investors',
    image: '/images/Investor1.jpg',
    description:
      'Discover curated opportunities, diligence summaries, and portfolio signals in one place.',
  },
  {
    title: 'Startup',
    image: '/images/Startup.jpg',
    description:
      'Access capital pathways, strategic support, and founder tools that accelerate momentum.',
  },
  {
    title: 'Mentorship',
    image: '/images/Mentorship.jpg',
    description:
      'Pair with seasoned operators and advisors for strategy, execution, and milestone planning.',
  },
  {
    title: 'In-House Support',
    image: '/images/In-house-support.jpg',
    description:
      'A practical support layer for compliance, systems, operations, and growth coordination.',
  },
]

const faqItems: FaqItem[] = [
  {
    question: 'What is Angel Investing?',
    answer:
      'Angel investing is an early-stage funding model where experienced individuals support promising startups with capital and strategic guidance.',
  },
  {
    question: 'Who are Angel Investors?',
    answer:
      'Angel investors are people or groups who back startups early and often contribute advice, connections, and market experience.',
  },
  {
    question: 'How can I become an Angel Investor with Angeltors?',
    answer:
      'Create an account, review available opportunities, and connect with the Angeltors team to explore curated startup deals.',
  },
  {
    question: 'What are the benefits of Angel Investing?',
    answer:
      'You can diversify across high-growth opportunities while helping founders build meaningful businesses and ecosystems.',
  },
  {
    question: 'How can I become an Angel Investor?',
    answer:
      'Start by exploring the platform, completing your profile, and discussing your goals with the Angeltors onboarding team.',
  },
]

const pageConfigs: PageConfig[] = [
  {
    key: 'home',
    navLabel: 'Home',
    path: '/',
    seo: {
      title: 'Angeltors | Angel Investment, Startup Mentorship & In-House Support',
      description:
        'Angeltors helps startups raise capital, get mentorship, in-house support, and access business advisory, legal, IP, tech, marketing, SEO, HRMS, and accounting services.',
      canonical: `${siteUrl}/`,
    },
    hero: {
      eyebrow: 'Angel Investment Platform',
      title: 'Connecting Visionary Founders with Strategic Capital',
      subtitle: 'Revolutionising private market investing — where investors find high quality deals and founders raise from right backers.',
      body:
        'Angeltors helps startups raise capital, get mentorship, in-house support, and access business advisory, legal, IP, tech, marketing, SEO, HRMS, and accounting services.',
      primaryLabel: 'For Investors',
      secondaryLabel: 'For Founders',
      image: '/images/banner3.jpg',
      badge: 'Live portfolio signal',
    },
  },
  {
    key: 'invest-with-us',
    navLabel: 'Invest With Us',
    path: '/invest-with-us',
    seo: {
      title: 'Angeltors | Invest With Us',
      description:
        'Invest with Angeltors and access curated startup opportunities, diligence support, and a premium investor experience.',
      canonical: `${siteUrl}/invest-with-us`,
    },
    hero: {
      eyebrow: 'Invest With Us',
      title: 'A cleaner way to discover high-potential startup opportunities.',
      subtitle: 'Built for investors who want clarity, diligence, and control',
      body:
        'Review opportunities, track portfolio signals, and connect with founders through a platform designed for premium angel investing.',
      primaryLabel: 'View Opportunities',
      secondaryLabel: 'Talk to Us',
      image: '/images/Investor1.jpg',
      badge: 'Curated deals',
    },
  },
  {
    key: 'raise-capital',
    navLabel: 'Raise Capital',
    path: '/raise-capital',
    seo: {
      title: 'Angeltors | Raise Capital',
      description:
        'Raise capital with Angeltors through a modern, founder-friendly workflow built for early-stage growth.',
      canonical: `${siteUrl}/raise-capital`,
    },
    hero: {
      eyebrow: 'Raise Capital',
      title: 'Pitch your startup with a modern founder-friendly workflow.',
      subtitle: 'Access funding, strategy, and support from one platform',
      body:
        'Share your traction, connect with investors, and unlock support for product, operations, and market growth.',
      primaryLabel: 'Pitch To Us',
      secondaryLabel: 'See Support',
      image: '/images/Startup.jpg',
      badge: 'Founder workflow',
    },
  },
  {
    key: 'learn-with-us',
    navLabel: 'Learn With Us',
    path: '/learn-with-us',
    seo: {
      title: 'Angeltors | Learn With Us',
      description:
        'Learn with Angeltors through mentorship, investor education, and startup-ready guidance on strategy and growth.',
      canonical: `${siteUrl}/learn-with-us`,
    },
    hero: {
      eyebrow: 'Learn With Us',
      title: 'Learn, build, and grow with investor-grade mentorship.',
      subtitle: 'Designed to turn experience into execution',
      body:
        'Access practical insights, mentorship, and guidance to help you make better decisions at every stage of growth.',
      primaryLabel: 'Start Learning',
      secondaryLabel: 'Explore FAQ',
      image: '/images/Mentorship.jpg',
      badge: 'Mentorship loop',
    },
  },
  {
    key: 'our-services',
    navLabel: 'Our Services',
    path: '/our-services',
    seo: {
      title: 'Angeltors | Our Services',
      description:
        'Explore Angeltors services including investors, startups, mentorship, and in-house support.',
      canonical: `${siteUrl}/our-services`,
    },
    hero: {
      eyebrow: 'Our Services',
      title: 'Everything a modern startup needs to move faster.',
      subtitle: 'Capital, advice, and operational support in one platform',
      body:
        'From legal and compliance support to marketing, tech, and accounting, Angeltors helps startups stay focused on growth.',
      primaryLabel: 'Explore Services',
      secondaryLabel: 'Book a Call',
      image: '/images/In-house-support.jpg',
      badge: 'Support stack',
    },
  },
  {
    key: 'blogs',
    navLabel: 'Blogs',
    path: '/blogs',
    seo: {
      title: 'Angeltors | Blogs',
      description:
        'Read the latest Angeltors insights on startups, investment strategy, and the modern capital ecosystem.',
      canonical: `${siteUrl}/blogs`,
    },
    hero: {
      eyebrow: 'Blogs',
      title: 'Insights that help founders and investors make better decisions.',
      subtitle: 'A sharper view into startup growth and capital strategy',
      body:
        'Explore thought pieces, updates, and practical guidance on building resilient companies and strong portfolios.',
      primaryLabel: 'Read Insights',
      secondaryLabel: 'Join Network',
      image: '/images/time_to_grow.jpg',
      badge: 'Market insights',
    },
  },
  {
    key: 'contact',
    navLabel: 'Contact',
    path: '/contact',
    seo: {
      title: 'Angeltors | Contact',
      description:
        'Contact Angeltors to discuss investment opportunities, startup support, or partnership requests.',
      canonical: `${siteUrl}/contact`,
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Start a conversation with the Angeltors team.',
      subtitle: 'We’re ready to talk startups, capital, and partnerships',
      body:
        'Get in touch if you want to invest, raise capital, or explore how Angeltors can support your growth.',
      primaryLabel: 'Contact Team',
      secondaryLabel: 'View Services',
      image: '/images/strategic_partner.jpg',
      badge: 'Let’s connect',
    },
  },
]

const heroStats: Stat[] = [
  { value: '12+', label: 'Active Deals' },
  { value: '340+', label: 'Founders Onboarded' },
  { value: '+18%', label: 'Average Growth' },
  { value: '715+', label: 'Numbers of Deals' },
]

function Seo({ title, description, canonical }: SeoMeta) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Angel Investment, Startup Mentorship, In-House Support, Invest With Us, Raise Capital, Business Advisory, Legal, IP, Tech, Marketing, SEO, HRMS, Accounting" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Angeltors" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={canonical} />
      <meta name="theme-color" content="#0a1a38" />
    </Helmet>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow: string
  title: string
  body: string
  center?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={clsx('max-w-3xl', center && 'mx-auto text-center')}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-angeltors-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{body}</p>
    </motion.div>
  )
}

function MarketingPage({ page }: { page: PageConfig }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <Seo {...page.seo} />
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-angeltors-accent/20 blur-[120px]" />
          <div className="absolute right-[-6rem] top-32 h-72 w-72 rounded-full bg-angeltors-accent-light/10 blur-[100px]" />
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-angeltors-dark/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link to="/" className="group flex items-center gap-3">
              <img
                src="/images/Angeltors_logo.png"
                alt="Angeltors"
                className="h-10 w-10 rounded-xl object-contain shadow-lg shadow-angeltors-accent/10"
              />
              <span className="flex flex-col leading-tight">
                <strong className="text-sm font-semibold tracking-[0.28em] text-white">
                  ANGELTORS
                </strong>
                <span className="text-xs text-slate-400">Your Growth, Our Success</span>
              </span>
            </Link>

            <nav className="ml-4 hidden flex-1 items-center justify-center gap-1 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(
                      'rounded-full px-4 py-2 text-sm font-medium transition',
                      isActive
                        ? 'bg-angeltors-accent/15 text-angeltors-accent'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden rounded-full bg-angeltors-accent px-5 py-2 text-sm font-semibold text-angeltors-dark transition hover:bg-angeltors-accent-light hover:-translate-y-0.5 sm:inline-flex"
              >
                Contact Sales
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="border-t border-white/10 bg-angeltors-dark/95 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        clsx(
                          'rounded-2xl px-4 py-3 text-sm font-medium transition',
                          isActive
                            ? 'bg-angeltors-accent/15 text-angeltors-accent'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
          {/* Hero Section */}
          <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(320px,1.04fr)] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl pt-2 lg:pt-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-angeltors-accent">
                <Sparkles className="h-4 w-4" />
                {page.hero.eyebrow}
              </span>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[4.4rem] lg:leading-[1.02]">
                {page.hero.title}
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                {page.hero.subtitle}
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                {page.hero.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={page.key === 'home' ? '/invest-with-us' : '/contact'}
                  className="inline-flex items-center gap-2 rounded-full bg-angeltors-accent px-6 py-3 text-sm font-semibold text-angeltors-dark shadow-lg shadow-angeltors-accent/20 transition hover:-translate-y-0.5 hover:bg-angeltors-accent-light"
                >
                  {page.hero.primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={page.key === 'home' ? '/raise-capital' : '/our-services'}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {page.hero.secondaryLabel}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-angeltors-dark">
                <img src={page.hero.image} alt="Angeltors platform visual" className="h-[26rem] w-full object-cover sm:h-[32rem]" />
              </div>
            </motion.div>
          </section>

          {/* Stats Section (like the examples) */}
          <section className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Real Numbers. Real Impact.</h2>
            </motion.div>

            <div className="mt-8 grid gap-0 md:grid-cols-4">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-none border border-white/10 bg-gradient-to-br from-angeltors-accent/30 to-angeltors-accent/10 p-8 text-center transition first:rounded-l-3xl last:rounded-r-3xl hover:-translate-y-1 hover:from-angeltors-accent/40 hover:to-angeltors-accent/20"
                >
                  <div className="absolute -left-4 top-1/2 h-16 w-16 -translate-y-1/2 bg-angeltors-accent/20 clip-path-[polygon(0_0,100%_50%,0_100%)]" />
                  <p className="text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Feature Cards */}
          <section id="about-us" className="pt-24 sm:pt-28">
            <SectionHeading
              eyebrow="Our Services"
              title="More Than Just Funding"
              body="A modern support system for founders and investors that combines capital, guidance, and operational help in one place."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featureCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-angeltors-accent/40 hover:bg-white/10"
                  >
                    <div className="inline-flex rounded-2xl bg-gradient-to-br from-angeltors-accent/20 to-angeltors-accent-light/10 p-3 text-angeltors-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p>
                  </motion.article>
                )
              })}
            </div>
          </section>

          {/* Diversified Portfolio Section */}
          <section className="mt-24 grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-angeltors-dark to-angeltors-dark-2 p-6 shadow-2xl shadow-angeltors-dark lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-angeltors-accent">
                Diversified Portfolio
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Our commitment is to sectors with strong growth potential.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                We focus on high-potential opportunities across technology, consumer,
                healthcare, and emerging market segments with a disciplined support model.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-angeltors-dark transition hover:-translate-y-0.5"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/learn-with-us"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
            >
              <img src="/images/time_to_grow.jpg" alt="Strategic investors meeting" className="h-full min-h-[22rem] w-full object-cover" />
            </motion.div>
          </section>

          {/* Services Section */}
          <section id="our-services" className="pt-24 sm:pt-28">
            <SectionHeading
              eyebrow="What we offer"
              title="Investors, Startups, Mentorship, and In-House Support."
              body="A premium operating stack for people who need capital, guidance, and execution support in one place."
              center
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
            >
              <img src="/images/strategic_partner.jpg" alt="Strategy session" className="h-full min-h-[22rem] w-full object-cover" />
            </motion.div>

            <div>
              <SectionHeading
                eyebrow="Learn With Us"
                title="Frequently asked questions"
                body="Questions from investors and founders, answered with the kind of clarity expected in a modern fintech product."
              />

              <div className="mt-8 space-y-3">
                {faqItems.map((item, index) => (
                  <motion.details
                    key={item.question}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                      {item.question}
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 pr-6 text-sm leading-7 text-slate-400">{item.answer}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-r from-angeltors-accent/15 via-angeltors-accent-light/10 to-angeltors-accent/10 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-angeltors-accent">
                  Stay updated
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Join the Angeltors network
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Get updates on startups, investment opportunities, and founder support built for a premium SaaS experience.
                </p>
              </div>

              <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Your email address"
                  className="h-12 flex-1 rounded-full border border-white/20 bg-white/5 px-5 text-sm text-white placeholder:text-slate-500 outline-none ring-0 transition focus:border-angeltors-accent"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-angeltors-dark transition hover:-translate-y-0.5"
                >
                  Subscribe
                  <Mail className="h-4 w-4" />
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-angeltors-dark/90">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1.4fr] lg:px-8">
            <div className="max-w-md">
              <Link to="/" className="flex items-center gap-3">
                <img src="/images/Angeltors_logo.png" alt="Angeltors" className="h-12 w-12 rounded-xl object-contain" />
                <span className="flex flex-col leading-tight">
                  <strong className="text-sm font-semibold tracking-[0.3em] text-white">ANGELTORS</strong>
                  <span className="text-xs text-slate-400">Your Growth, Our Success</span>
                </span>
              </Link>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Angeltors is a prominent angel investment platform focused on well-researched, promising startups across high-growth sectors.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[0.65rem] font-semibold text-slate-200 transition hover:bg-white/10"
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-semibold tracking-[0.24em] text-white">
                    {column.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          className="text-sm text-slate-400 transition hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
            © 2026 Angeltors. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      {pageConfigs.map((page) => (
        <Route key={page.key} path={page.path} element={<MarketingPage page={page} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
