import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CollaborationSection() {
  const reducedMotion = useReducedMotion();

  const features = [
    {
      title: "More Than Just Funding",
      description: "We offer a holistic ecosystem of support, recognizing that capital is only one piece of the puzzle. Our mentorship, resources, and network are designed to accelerate your growth and de-risk your journey.",
    },
    {
      title: "Strategic Connections",
      description: "We actively connect you with relevant investors who understand your industry and can provide not just capital but also valuable strategic insights and connections.",
    },
    {
      title: "Actionable Insights, Real Results",
      description: "Our workshops and resources are practical and results-oriented, equipping you with the tools and knowledge to drive tangible growth.",
    },
    {
      title: "Dedicated to Your Success",
      description: "Your growth is our priority. We are deeply invested in helping you validate your business model, scale your operations, and achieve your ambitious vision.",
    },
    {
      title: "Access to a Diverse Network",
      description: "Benefit from our extensive network of industry leaders, potential partners, and experienced advisors who can open doors and provide invaluable guidance.",
    },
    {
      title: "Tailored Support",
      description: "Our Angeltors Accelerator tier is specifically designed to address the unique needs of early-stage startups, providing targeted support at a critical juncture.",
    },
  ];

  return (
    <section className="relative bg-white pb-32">
      
      {/* Dark Banner */}
      <div className="bg-angeltors-ink py-12 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-white"
          >
            Collaboration with Angeltors
          </motion.h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Image */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
              <img
                src="/images/RaiseCapital.jpg"
                alt="Collaboration with Angeltors"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Bullet List */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-angeltors-accent" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-angeltors-ink">
                    {feature.title}:
                  </h3>
                  <p className="mt-1 text-[15px] font-medium text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
        
        {/* Centered CTA */}
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center rounded-lg bg-black px-10 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:bg-slate-900 shadow-md"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </section>
  );
}
