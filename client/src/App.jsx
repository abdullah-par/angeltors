import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    'Home',
    'About Us',
    'Invest With Us',
    'Raise Capital',
    'Learn With Us',
    'Our Services',
    'Blogs',
    'Contact',
  ]

  const footerColumns = [
    {
      title: 'Discover',
      links: ['About Us', 'Invest with us', 'Raise Capital', 'Learn with us'],
    },
    {
      title: 'Services',
      links: ['Investors', 'Startups', 'Mentorship', 'In-House Support'],
    },
    {
      title: 'Quick Links',
      links: ['Sign Up', 'Pitch To Us', 'Blog Post', 'Investor Relation'],
    },
    {
      title: 'Policies',
      links: ['Privacy Policy', 'Terms of Use', 'Refund Policy', 'Disclaimer', 'Cookies Policy'],
    },
  ]

  const socialLinks = [
    { label: 'Facebook', href: '#facebook', short: 'f' },
    { label: 'Instagram', href: '#instagram', short: 'ig' },
    { label: 'LinkedIn', href: '#linkedin', short: 'in' },
    { label: 'YouTube', href: '#youtube', short: 'yt' },
    { label: 'WhatsApp', href: '#whatsapp', short: 'wa' },
  ]

  const valueCards = [
    {
      title: 'Founder-centric approach',
      description:
        'We structure capital conversations around traction, product fit, and long-term execution.',
    },
    {
      title: 'Ethical practices',
      description:
        'Clear diligence, transparent communication, and compliance-first support for every stage.',
    },
    {
      title: 'Collaboration & community',
      description:
        'A networked workflow that keeps founders, operators, and investors moving together.',
    },
    {
      title: 'Impact-driven investment',
      description:
        'Sector-aware backing for businesses that create measurable value and market resilience.',
    },
    {
      title: 'Diversification & innovation',
      description:
        'Multi-sector exposure and innovation-led thesis design for a more adaptive portfolio.',
    },
    {
      title: 'Long-term perspective',
      description:
        'Support that is designed around sustainable scale, not just the next funding round.',
    },
  ]

  const serviceCards = [
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

  const faqItems = [
    'What is Angel Investing?',
    'Who are Angel Investors?',
    'How can I become an Angel Investor with Angeltors?',
    'What are the benefits of Angel Investing?',
    'How can I become an Angel Investor?',
  ]

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Angeltors home">
          <img
            src="/images/Angeltors_logo.png"
            className="brand-logo"
            alt="Angeltors"
          />
          <span className="brand-copy">
            <strong>ANGELTORS</strong>
            <span>Your Growth, Our Success</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
          aria-label="Primary"
        >
          {navigationItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="action-link" href="#login">
            Log in
          </a>
          <a className="cta-button" href="#membership">
            Membership
          </a>
        </div>
      </header>

      <main className="hero-panel" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to Angeltors</p>
          <h1>Empowering Early-Stage Innovation</h1>
          <h2 className="hero-subtitle">Focus On Investment For Potential</h2>
          <p className="hero-text">
            Angeltors is an Angel Investment Platform that supports high growth
            Startups with Seed & Early Stage Funding, Mentorship, In-House Support &
            access to strong network of investors & industry leaders.
            Angeltors empowers visionary founders to build impactful business by
            providing strategic investment & supportive network.
          </p>

          <div className="hero-actions">
            <a className="cta-button" href="#investors">
              For Investors
            </a>
            <a className="action-link" href="#startups">
              For Startups
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-frame">
            <img src="/images/banner3.jpg" alt="" className="hero-image" />
            <div className="hero-overlay hero-overlay-top">
              <span>Live portfolio signal</span>
              <strong>+18.4% this quarter</strong>
            </div>
            <div className="hero-overlay hero-overlay-bottom">
              <span>Angeltors Growth Lab</span>
              <strong>Capital, mentorship, execution</strong>
            </div>
          </div>
        </div>
      </main>

      <section className="section-block section-light" id="about-us">
        <div className="section-heading">
          <p className="section-kicker">Built for modern capital</p>
          <h2>Where innovation meets structured investment support.</h2>
          <p>
            We pair a fintech-style operating model with the human side of angel investing:
            clarity, speed, and an active support system for founders and investors.
          </p>
        </div>

        <div className="value-grid">
          {valueCards.map((card, index) => (
            <article key={card.title} className="value-card">
              <div className="value-index">0{index + 1}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band section-dark" id="investors">
        <div className="section-band-copy">
          <p className="section-kicker section-kicker-on-dark">Build with confidence</p>
          <h2>It is time to grow together with visionary founders and strategic investors.</h2>
          <p>
            The platform gives you a concise view of opportunities, support systems, and the
            execution layer needed to move from idea to scale.
          </p>
          <div className="section-actions">
            <a className="cta-button" href="#contact">
              Read More
            </a>
            <a className="action-link action-link-dark" href="#newsletter">
              Contact Us
            </a>
          </div>
        </div>

        <div className="section-band-media">
          <img src="/images/time_to_grow.jpg" alt="Strategic investors meeting" />
          <div className="band-glass-card">
            <span>Growth velocity</span>
            <strong>Focused capital. Better decisions. Faster progress.</strong>
          </div>
        </div>
      </section>

      <section className="section-block section-services" id="services">
        <div className="section-heading section-heading-center">
          <p className="section-kicker">What we support</p>
          <h2>Products, support, and guidance designed for the startup journey.</h2>
        </div>

        <div className="services-grid">
          {serviceCards.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-strip">
        <div className="strip-copy">
          <p className="section-kicker section-kicker-on-dark">Focus mode</p>
          <h2>Angeltors, your strategic partner from first investment to scalable growth.</h2>
        </div>
        <div className="strip-tags">
          <span>Capital Access</span>
          <span>Portfolio Support</span>
          <span>Founder Ops</span>
          <span>Investor Relations</span>
        </div>
      </section>

      <section className="section-block section-faq" id="learn-with-us">
        <div className="faq-media">
          <img src="/images/strategic_partner.jpg" alt="Strategy session" />
        </div>

        <div className="faq-copy">
          <p className="section-kicker">FAQ</p>
          <h2>Ask your questions</h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item} className="faq-item">
                <summary>{item}</summary>
                <p>
                  Angeltors provides a guided investment and founder support workflow focused on
                  clarity, credibility, and long-term outcomes.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-band">
        <p>
          Unlock potential with Angeltors, where investors, founders, and leaders converge
          to turn ambition into measurable growth.
        </p>
      </section>

      <section className="newsletter-section" id="newsletter">
        <div>
          <p className="section-kicker">Stay updated</p>
          <h2>Subscribe to our newsletter</h2>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" aria-label="Your email address" />
          <button type="submit" className="cta-button">
            Subscribe
          </button>
        </form>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <section className="footer-brand-block">
            <a className="footer-brand" href="#home" aria-label="Angeltors home">
              <img
                src="/images/Angeltors_logo.png"
                className="footer-brand-logo"
                alt="Angeltors"
              />
              <span>
                <strong>ANGELTORS</strong>
                <small>Your Growth, Our Success</small>
              </span>
            </a>

            <p>
              Angeltors is a modern Angel Investment platform focused on well-researched
              startups, capital growth, and long-term founder support.
            </p>

            <div className="footer-social" aria-label="Social links">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  {social.short}
                </a>
              ))}
            </div>
          </section>

          <div className="footer-grid">
            {footerColumns.map((column) => (
              <section key={column.title} className="footer-column">
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="footer-bar">
          <p>© 2026 Angeltors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
