import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const faqItems = [
  {
    question: "What is Angel Investing?",
    answer: "Angel investing is a form of private equity financing where individual high-net-worth individuals (angels) invest their own money in early-stage, high-growth potential companies.",
  },
  {
    question: "Who are Angel Investors?",
    answer: "Angel investors are typically successful entrepreneurs, business executives, or high-net-worth individuals who have accumulated wealth and are looking to invest in promising startups.",
  },
  {
    question: "What is the focus of Angel Investing at Angeltors?",
    answer: "Angeltors focuses on investing in high-growth, early-stage startups with strong potential for significant impact. We prioritize companies with innovative solutions, experienced founding teams, and a clear path to market dominance.",
  },
  {
    question: "How can I become an Angel Investor with Angeltors?",
    answer: "To become an investor with Angeltors, please contact us through the contact information provided on our website. We will guide you through the process and provide you with more information on investment opportunities.",
  },
  {
    question: "What are the benefits of Angel Investing?",
    answer: "• High potential returns: Early-stage investments can generate significant returns if the company succeeds.\n• Impact investing: Angel investors can support innovative companies that address societal challenges and create a positive impact.\n• Mentorship and guidance: Many angel investors provide mentorship and guidance to portfolio companies, leveraging their experience and industry connections.\n• Networking opportunities: Angel investing provides access to a network of entrepreneurs, investors, and industry leaders.\n• Personal satisfaction: The opportunity to contribute to the growth of promising companies and support innovation can be personally rewarding.",
  },
  {
    question: "How can I become an Angel Investor?",
    answer: "• Build wealth: Accumulate sufficient wealth to invest in early-stage companies.\n• Gain relevant experience: Develop an understanding of the startup ecosystem, investment principles, and due diligence processes.\n• Join an angel investment group: Consider joining an angel investment group to gain access to deal flow, mentorship, and a supportive community.\n• Network with entrepreneurs: Build relationships with entrepreneurs and other investors in the startup ecosystem.\n• Conduct thorough due diligence: Carefully evaluate investment opportunities and conduct thorough due diligence before making any investment decisions.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="faq" className="py-32 md:py-40 bg-white relative">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent mb-6 shadow-sm">
            FAQ's
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-angeltors-ink">
            Ask Your Questions
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] items-start">
          {/* Left Side: Sticky Notes Image */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/60 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <img
              src="/images/LearnWithUs.jpg"
              alt="Collaboration and sticky notes session"
              className="rounded-[2rem] h-[30rem] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right Side: Accordion */}
          <div className="space-y-6">
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const id = item.question;
                const isOpen = openId === id;
                return (
                  <div
                    key={id}
                    className={`rounded-[1.5rem] border ${isOpen ? 'border-angeltors-accent shadow-md bg-white' : 'border-slate-200/60 bg-slate-50 shadow-sm'} transition-all duration-300 overflow-hidden`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-all"
                    >
                      <span className={`text-lg md:text-xl font-bold tracking-tight ${isOpen ? 'text-angeltors-accent' : 'text-angeltors-ink'}`}>{item.question}</span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-angeltors-accent text-white' : 'bg-slate-200 text-slate-500'}`}>
                        <ChevronRight className={
                          "h-5 w-5 transition-transform duration-300 " +
                          (isOpen ? "rotate-90" : "")
                        } />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
                          animate={reducedMotion ? {} : { height: "auto", opacity: 1 }}
                          exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
                          transition={
                            reducedMotion
                              ? { duration: 0 }
                              : {
                                  height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                                  opacity: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                                }
                          }
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 text-base leading-relaxed text-slate-500 font-medium whitespace-pre-line border-t border-slate-100 pt-6">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Read More FAQ's button at the bottom right */}
            <div className="flex justify-end pt-6">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white border border-slate-200/60 px-8 py-4 text-sm font-bold text-angeltors-ink transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-md"
              >
                <span>Read More FAQ's</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
