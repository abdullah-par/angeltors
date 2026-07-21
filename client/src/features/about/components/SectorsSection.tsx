import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const sectors = [
  {
    id: 'hitech',
    label: 'HiTech & Nano Tech',
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
    <section className="relative overflow-hidden bg-white py-16 border-t border-slate-200/50">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 space-y-6"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-angeltors-ink max-w-4xl mx-auto leading-[0.95]">
            Strategically Allocating Capital<br className="hidden sm:block" /> Across High-Growth Sectors.
          </h2>
        </motion.div>

        {/* Tab pills (Apple Style) */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-2 rounded-full bg-slate-100 max-w-fit mx-auto border border-slate-200/60 shadow-inner">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveId(sector.id)}
              className={`relative rounded-full px-6 py-3 text-[14px] font-bold transition-all duration-300 ${
                activeId === sector.id
                  ? 'text-angeltors-ink shadow-sm bg-white'
                  : 'text-slate-500 hover:text-angeltors-ink hover:bg-slate-200/50'
              }`}
            >
              <span className="relative z-10">{sector.label}</span>
            </button>
          ))}
        </div>

        {/* Animated content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.98, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? {} : { opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-[3rem] p-4 lg:p-6 border border-slate-200/60 shadow-xl"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-[2.5rem] shadow-sm relative group h-[400px] lg:h-[550px]">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img
                src={active.image}
                alt={active.label}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>

            {/* Text */}
            <div className="space-y-8 p-6 lg:p-10">
              <div>
                <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-angeltors-ink leading-tight">
                  {active.label}
                </h3>
              </div>

              <div className="space-y-6">
                {active.blocks.map((block) => (
                  <div
                    key={block.heading}
                    className="space-y-2 border-l-2 border-angeltors-cyan pl-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[2.5px] text-angeltors-ink">{block.heading}</p>
                    <p className="text-[16px] text-slate-500 font-medium leading-relaxed">{block.body}</p>
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
