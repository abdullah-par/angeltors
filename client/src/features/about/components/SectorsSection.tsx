import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const sectors = [
  {
    id: 'hitech',
    label: 'HiTech & Nano Tech',
    percentage: '35%',
    image: '/images/HiTech.jpg',
    blocks: [
      {
        heading: 'Future Impact',
        body: "This sector drives innovation in AI, biotechnology, and nanotechnology, fostering economic growth and enhancing India's global technological leadership.",
      },
      {
        heading: 'Potential Returns',
        body: 'High-growth companies in this sector offer significant investment potential. Investing in disruptive technologies can yield substantial returns as they revolutionise markets.',
      },
    ],
  },
  {
    id: 'pharma',
    label: 'Pharma & BioTech',
    percentage: '20%',
    image: '/images/Pharma_BioTech.jpg',
    blocks: [
      {
        heading: 'Future Impact',
        body: 'This sector drives advancements in healthcare, improving human health and contributing significantly to economic growth. Growing global demand for innovative healthcare solutions presents significant opportunities.',
      },
      {
        heading: 'Potential Returns',
        body: 'The global pharmaceutical and biotechnology market offers high-growth potential. Companies in this sector often possess valuable intellectual property, providing a strong competitive advantage and driving significant returns.',
      },
    ],
  },
  {
    id: 'ev',
    label: 'EV & Green Energy',
    percentage: '15%',
    image: '/images/EV_Green_Energy.jpg',
    blocks: [
      {
        heading: 'Future Impact',
        body: 'This sector contributes to environmental sustainability by promoting renewable energy sources, enhancing energy security, and reducing reliance on fossil fuels.',
      },
      {
        heading: 'Economic Growth',
        body: 'Driven by increasing demand and government support, the renewable energy sector is poised for significant growth, offering substantial economic opportunities.',
      },
    ],
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle & Beauty',
    percentage: '18%',
    image: '/images/Lifestyle_Beauty.jpg',
    blocks: [
      {
        heading: 'Future Impact',
        body: 'This sector is experiencing rapid growth driven by changing consumer lifestyles, increasing disposable incomes, and growing awareness of wellness and personal care.',
      },
      {
        heading: 'Potential Returns',
        body: 'The Lifestyle & Beauty market offers attractive investment opportunities, with strong consumer demand fuelling growth and innovation across premium and accessible segments.',
      },
    ],
  },
  {
    id: 'retail',
    label: 'Retail & FMCG',
    percentage: '12%',
    image: '/images/Retail_FMCG.jpg',
    blocks: [
      {
        heading: 'Future Impact',
        body: 'This sector serves the evolving needs of consumers, driving economic growth and creating employment opportunities across the entire value chain.',
      },
      {
        heading: 'Potential Returns',
        body: 'The Retail & FMCG sector offers stable returns with strong cash flows, benefiting from consistent consumer demand and significant opportunities for brand expansion.',
      },
    ],
  },
];

export default function SectorsSection() {
  const [activeId, setActiveId] = useState(sectors[0].id);
  const reducedMotion = useReducedMotion();
  const active = sectors.find((s) => s.id === activeId)!;

  return (
    <section className="relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ab1.jpg"
          alt=""
          className="h-full w-full object-cover object-center scale-105"
          aria-hidden
        />
        <div className="absolute inset-0 bg-angeltors-ink/82" />
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 space-y-4"
        >
          <p className="text-xs font-bold uppercase tracking-[4px] text-angeltors-cyan">We Provide</p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold tracking-[-0.03em] text-white leading-tight">
            Strategically Allocating Capital<br className="hidden sm:block" /> Across High-Growth Sectors
          </h2>
        </motion.div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveId(sector.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 border ${
                activeId === sector.id
                  ? 'bg-white text-angeltors-ink border-white shadow-md scale-105'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30'
              }`}
            >
              {sector.label}
            </button>
          ))}
        </div>

        {/* Animated content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={reducedMotion ? {} : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            exit={reducedMotion ? {} : { opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid gap-8 lg:grid-cols-2 items-center"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={active.image}
                alt={active.label}
                className="h-72 w-full object-cover lg:h-[400px] transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  {active.label}{' '}
                  <span className="text-angeltors-cyan">({active.percentage})</span>
                </h3>
              </div>

              <div className="space-y-4">
                {active.blocks.map((block) => (
                  <div
                    key={block.heading}
                    className="rounded-xl border border-white/10 p-5 space-y-2"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[2px] text-angeltors-cyan">{block.heading}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
