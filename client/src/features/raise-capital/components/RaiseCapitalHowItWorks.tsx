import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function RaiseCapitalHowItWorks() {
  const reducedMotion = useReducedMotion();

  // Using the user's actual content to create 4 steps
  const steps = [
    {
      num: "1",
      title: "Craft Your Pitch",
      desc: "Receive expert Pitch Deck Review & Refinement to captivate investors."
    },
    {
      num: "2",
      title: "Connect with Investors",
      desc: "Gain direct access to Investor Connect Sessions to streamline fundraising."
    },
    {
      num: "3",
      title: "Secure Early Growth",
      desc: "Secure crucial seed funding to ignite your startup's journey."
    },
    {
      num: "4",
      title: "Scale with Guidance",
      desc: "Benefit from dedicated mentorship pairing with seasoned professionals."
    }
  ];

  return (
    <section id="how-it-works" className="bg-slate-50 py-12 border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-black tracking-tight text-angeltors-ink">How it works</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-4 relative"
            >
              {/* Connecting line (hidden on mobile, visible on lg) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-12 right-0 h-[1px] bg-slate-200 w-[calc(100%-1rem)]" />
              )}
              
              <div className="h-12 w-12 rounded-full bg-angeltors-ink text-white font-bold flex items-center justify-center text-lg z-10 shrink-0">
                {step.num}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-angeltors-ink mb-2">{step.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
