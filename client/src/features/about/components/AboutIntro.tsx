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
    <section className="pt-8 pb-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-2 items-center">

          {/* ── Left: Written content ── */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[4px] text-angeltors-accent">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight text-angeltors-ink">
                Fueling the next<br className="hidden sm:block" /> generation of leaders.
              </h2>
            </div>

            <div className="space-y-6">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[17px] font-medium leading-relaxed text-slate-500"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-angeltors-ink px-9 py-4 text-[15px] font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_30px_-10px_rgba(0,0,0,0.6)]"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span>Contact Us</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="/#our-services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/60 bg-white px-9 py-4 text-[15px] font-bold text-angeltors-ink shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>Our Services</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* ── Right: Bento Box Mosaic ── */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.96 }}
            whileInView={reducedMotion ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px] p-4 rounded-[3rem] bg-white border border-slate-200/60 shadow-xl"
          >
            {gridImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={reducedMotion ? {} : { opacity: 0, scale: 0.93 }}
                whileInView={reducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.12 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`overflow-hidden rounded-[2rem] shadow-sm relative group ${img.className}`}
              >
                {/* Glossy overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
