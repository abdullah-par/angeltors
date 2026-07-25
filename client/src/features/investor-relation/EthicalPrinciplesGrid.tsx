import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function EthicalPrinciplesGrid() {
  const reducedMotion = useReducedMotion();

  const principles = [
    {
      title: 'Respect for Founders',
      image: '/images/Respect_Founders.png',
      points: [
        "We value founders' time and expertise, recognizing their pivotal role in driving innovation.",
        "We believe in respecting their judgment regarding business operations, fostering a collaborative partnership."
      ]
    },
    {
      title: 'Confidentiality and Integrity',
      image: '/images/Integrity.png',
      points: [
        "We uphold strict confidentiality regarding all information shared by founders during the fundraising process.",
        "We expect investors to adhere to confidentiality agreements and maintain transparency regarding potential conflicts of interest."
      ]
    },
    {
      title: 'Mutual Support and Collaboration',
      image: '/images/Mutual_Support.png',
      points: [
        "We believe in providing founders with comprehensive support beyond capital, including valuable connections, strategic advice, and resources for hiring.",
        "We foster a collaborative environment where investors and founders work together to achieve shared success."
      ]
    },
    {
      title: 'Transparency and Accountability',
      image: '/images/Transparency.png',
      points: [
        "We are committed to operating with complete transparency, ensuring open communication and clear processes.",
        "We prioritize the interests of both founders and investors, striving to protect their interests and facilitate mutually beneficial outcomes."
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-angeltors-ink">
          Our Ethical Principles
        </h2>
        <p className="text-sm leading-relaxed text-angeltors-muted">
          At Angeltors, we recognize that trust is the cornerstone of a thriving startup ecosystem.
          We are committed to fostering strong, ethical relationships with both our investors and the founders we support.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-white rounded-2xl overflow-hidden depth-border ag-shadow-md hover:ag-shadow-lg transition-shadow duration-300"
          >
            <div className="h-56 sm:h-64 overflow-hidden relative bg-slate-100">
              <img
                src={principle.image}
                alt={principle.title}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-angeltors-ink pl-3 border-l-4 border-angeltors-accent">
                  {principle.title}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-angeltors-muted leading-relaxed">
                  {principle.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-angeltors-accent font-semibold shrink-0">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
