import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { CheckCircle2 } from 'lucide-react';

export default function UnlockPotentialSection() {
  const reducedMotion = useReducedMotion();

  const features = [
    {
      title: "From Vision to Reality",
      description: "We're your partner in transforming groundbreaking ideas into thriving, industry-disrupting businesses.",
    },
    {
      title: "Fueling Early Growth",
      description: "Secure crucial seed funding to ignite your startup's journey and achieve key milestones.",
    },
    {
      title: "Expert Guidance, Every Step",
      description: "Benefit from dedicated mentorship pairing with seasoned professionals who've built and scaled successful ventures.",
    },
    {
      title: "Your Dedicated Support Hub",
      description: "Access our exclusive Angeltors In-House Support Portal for resources and assistance whenever you need it.",
    },
    {
      title: "Craft Your Winning Pitch",
      description: "Receive expert Pitch Deck Review & Refinement to captivate investors and communicate your vision effectively.",
    },
    {
      title: "Connect with the Right Investors",
      description: "Gain direct access to Investor Connect Sessions, streamlining your fundraising efforts.",
    },
    {
      title: "Empower Your Knowledge",
      description: "Tap into our comprehensive Knowledge Base, packed with insights and best practices for startup success.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-angeltors-ink leading-[1.2]">
            Unlock Your Startup's Potential With Angeltors, Ready To Transform Your Vision Into Reality? Connect With Angeltors And Let's Build The Future Together.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bullet List */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
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

          {/* Right Column: Image */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
              <img
                src="/images/startups-raisecapitals.jpg"
                alt="Startups working with Angeltors"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
