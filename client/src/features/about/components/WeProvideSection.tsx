import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import ScrollStack, { ScrollStackItem } from '@/components/common/ScrollStack';

// ─── Data ─────────────────────────────────────────────────────────────────────

const whatWeDoPoints = [
  'Access to high-growth, early-stage investment opportunities',
  'Diversification of investment portfolios across various sectors',
  'Potential for significant returns through successful startup exits',
  'Exposure to cutting-edge technologies and innovative business models',
  'Access to capital and strategic funding',
  'Mentorship and guidance from experienced entrepreneurs',
  'Market access and introductions to key industry players',
  'In-house operational support',
];

const whyChooseUsCards = [
  {
    num: '01',
    title: 'Experienced Team',
    desc: 'Decades of entrepreneurial and investment expertise guiding every decision.',
  },
  {
    num: '02',
    title: 'Diversified Portfolio',
    desc: 'Balanced exposure across high-growth sectors for sustainable returns.',
  },
  {
    num: '03',
    title: 'Founder-First Approach',
    desc: 'We prioritize the long-term success of every founder in our ecosystem.',
  },
  {
    num: '04',
    title: 'Vast Network',
    desc: 'Immediate access to investors, mentors, and industry-leading partners.',
  },
];

// ─── Card shell ────────────────────────────────────────────────────────────────

interface CardProps {
  badge: string;
  title: string;
  bg?: string;
  dark?: boolean;
  image: string;
  imageAlt: string;
  imageLeft?: boolean;
  children: React.ReactNode;
}

function Card({ badge, title, bg, dark = false, image, imageAlt, imageLeft = false, children }: CardProps) {
  const textBase = dark ? 'text-white' : 'text-angeltors-ink';
  const textMuted = dark ? 'text-slate-300' : 'text-angeltors-muted';
  const badgeBg = dark ? 'bg-white/10 border-white/20 text-angeltors-cyan' : 'bg-angeltors-accent/8 border-angeltors-accent/15 text-angeltors-accent';

  const textCol = (
    <div className="p-10 lg:p-14 flex flex-col justify-center gap-6">
      <span className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] w-fit ${badgeBg}`}>
        {badge}
      </span>
      <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] leading-tight ${textBase}`}>
        {title}
      </h3>
      <div className={`space-y-4 text-sm leading-relaxed ${textMuted}`}>
        {children}
      </div>
    </div>
  );

  const imgCol = (
    <div className="relative overflow-hidden min-h-[280px] lg:min-h-0">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      {dark && <div className="absolute inset-0 bg-gradient-to-r from-angeltors-ink/60 to-transparent" />}
    </div>
  );

  return (
    <div
      className="rounded-2xl border border-angeltors-border overflow-hidden shadow-md"
      style={{ background: bg ?? '#ffffff' }}
    >
      <div className={`grid lg:grid-cols-2 min-h-[72vh] ${imageLeft ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
        {textCol}
        {imgCol}
      </div>
    </div>
  );
}

// ─── WeProvideSection ──────────────────────────────────────────────────────────

export default function WeProvideSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-white">
      {/* ── Section Header ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          <p className="text-xs font-bold uppercase tracking-[4px] text-angeltors-accent">We Provide</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-angeltors-ink max-w-3xl mx-auto leading-tight">
            Specialization in Developing Investment Strategy
          </h2>
          <p className="text-base text-angeltors-muted max-w-2xl mx-auto leading-relaxed">
            From seed funding to strategic mentorship, we provide a comprehensive ecosystem designed to help founders build category-defining companies.
          </p>
        </motion.div>
      </div>

      {/* ── ScrollStack ── */}
      <ScrollStack className="px-4 sm:px-6 lg:px-8">

        {/* Card 1 — What We Do */}
        <ScrollStackItem className="max-w-7xl mx-auto pb-5">
          <Card
            badge="01 · What We Do"
            title="Empowering Innovation Through Strategic Investment"
            image="/images/what-we-do.jpg"
            imageAlt="What We Do"
            bg="#F6F9FC"
          >
            <p>
              We invest in and mentor high-growth startups, connecting visionary founders with strategic capital and a thriving ecosystem built for success.
            </p>
            <ul className="space-y-2.5 mt-1">
              {whatWeDoPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </ScrollStackItem>

        {/* Card 2 — Our Mission */}
        <ScrollStackItem className="max-w-7xl mx-auto pb-5">
          <Card
            badge="02 · Our Mission"
            title="Fueling the Next Generation of Market Leaders"
            image="/images/Mission.jpg"
            imageAlt="Our Mission"
            bg="#ffffff"
          >
            <p>
              Our mission is to identify and nurture India's most promising early-stage startups by providing not just capital, but a complete support system encompassing mentorship, strategic guidance, and operational resources.
            </p>
            <p>
              We are committed to building a transparent, founder-centric investment platform that democratises access to angel capital — empowering innovators from all backgrounds to build scalable, impactful businesses.
            </p>
            <p>
              By fostering a culture of collaboration, integrity, and long-term value creation, Angeltors aims to become the most trusted angel investment network in South Asia.
            </p>
          </Card>
        </ScrollStackItem>

        {/* Card 3 — Our Vision */}
        <ScrollStackItem className="max-w-7xl mx-auto pb-5">
          <Card
            badge="03 · Our Vision"
            title="Building India's Most Influential Angel Network"
            image="/images/Vision.jpg"
            imageAlt="Our Vision"
            bg="linear-gradient(135deg, #f0f4fb 0%, #e8eef8 100%)"
          >
            <p>
              We envision a future where every visionary founder has access to the capital, mentorship, and network needed to bring their ideas to life — regardless of their background or geography.
            </p>
            <p>
              Angeltors aspires to be at the forefront of India's startup revolution, creating a thriving ecosystem where innovation is rewarded, risk is managed intelligently, and long-term value is created for investors, founders, and society alike.
            </p>
            <p>
              Our vision extends beyond financial returns — we see ourselves as architects of a more inclusive, innovation-driven economy that positions India as a global startup powerhouse.
            </p>
          </Card>
        </ScrollStackItem>

        {/* Card 4 — Why Choose Us */}
        <ScrollStackItem className="max-w-7xl mx-auto pb-5">
          <Card
            badge="04 · Why Choose Us"
            title="The Angeltors Advantage"
            image="/images/Why Choose us.jpg"
            imageAlt="Why Choose Angeltors"
            bg="linear-gradient(135deg, #0A2540 0%, #162f52 100%)"
            dark
          >
            <p className="text-slate-300">
              We combine deep industry expertise with a founder-first philosophy to deliver outcomes that matter — for investors and entrepreneurs alike.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 mt-2">
              {whyChooseUsCards.map((c) => (
                <div key={c.num} className="rounded-xl bg-white/[0.06] border border-white/10 p-4 space-y-1.5">
                  <span className="text-angeltors-cyan text-[10px] font-bold uppercase tracking-[2px]">{c.num}</span>
                  <h4 className="text-white font-bold text-sm">{c.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </ScrollStackItem>

      </ScrollStack>

      <div className="pb-16" />
    </section>
  );
}
