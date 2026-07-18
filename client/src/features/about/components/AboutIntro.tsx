import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const gridImages = [
  { src: '/images/Investor1.jpg',    alt: 'Angel Investors',       className: 'col-span-1 row-span-2' },
  { src: '/images/Startup1.jpg',     alt: 'Startup Founders',      className: 'col-span-1' },
  { src: '/images/Mentorship.jpg',   alt: 'Mentorship Session',    className: 'col-span-1' },
  { src: '/images/OurServices.jpg',  alt: 'Services Overview',     className: 'col-span-1' },
  { src: '/images/mac-business.png', alt: 'Business Strategy',     className: 'col-span-1' },
  { src: '/images/g8.jpg',           alt: 'Investment Discussion', className: 'col-span-1' },
];

const paragraphs = [
  <>
    <strong className="font-bold text-angeltors-accent">Angeltors is a prominent Angel Investment Platform</strong>{' '}
    focusing on well-researched, promising, and revenue-generating startups — comprised of a network of successful leaders who have
    built, managed, and exited businesses across various industries. They provide top investment opportunities for investors while
    helping founders secure the funding needed for their growth.
  </>,
  <>
    The network's investment reach is global, with members and portfolio companies spanning different geographies. Unlike traditional
    angel groups that focus solely on technology, Angeltors's portfolio is diversified across sectors — including Agritech,
    Electric Vehicles, Deep Science &amp; Technology, Healthcare, Fintech, D2C, IT, and Web 3.0.
  </>,
  <>
    Our startup ecosystem members provide invaluable insights and mentorship through a wide range of events — fundraising
    masterclasses, pitch days, and workshops — all aimed at nurturing startups through various stages of growth. Angeltors
    contributes to portfolio growth through market access, process maturity, branding, and strategic support.
  </>,
  <>
    Angeltors collaborates with angel networks globally to offer a unified presence on cap tables, ensuring compliance and
    streamlining future fundraising. We also track startups preparing for IPOs, providing attractive Pre-IPO investment
    opportunities that deliver upside for our investors.
  </>,
];

export default function AboutIntro() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-24 bg-angeltors-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* ── Left: Written content ── */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-7"
          >
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[4px] text-angeltors-accent">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-angeltors-ink">
                India's Premier Angel<br className="hidden sm:block" /> Investment Platform
              </h2>
            </div>

            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="text-base leading-relaxed text-angeltors-muted"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-angeltors-accent px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:brightness-90 hover:-translate-y-[2px] hover:shadow-md"
              >
                <span>Contact Us</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="/#our-services"
                className="inline-flex items-center gap-2 rounded-full border border-angeltors-border bg-white px-7 py-3.5 text-sm font-bold text-angeltors-ink shadow-sm transition-all duration-300 hover:border-angeltors-accent/30 hover:-translate-y-[2px] hover:shadow-md"
              >
                <span>Our Services</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* ── Right: Image mosaic ── */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            className="grid grid-cols-3 grid-rows-2 gap-3"
          >
            {gridImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={reducedMotion ? {} : { opacity: 0, scale: 0.93 }}
                whileInView={reducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + i * 0.07, duration: 0.4 }}
                className={`overflow-hidden rounded-xl ${img.className}`}
                style={{ aspectRatio: img.className.includes('row-span-2') ? undefined : '1/1' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: '140px' }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
