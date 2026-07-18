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
    <section id="faq" className="mt-20 bg-transparent">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-angeltors-accent">FAQ's</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.05] text-angeltors-ink sm:text-4xl">Ask Your Questions</h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
        {/* Left Side: Sticky Notes Image */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl depth-border bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
        >
          <img
            src="/images/LearnWithUs.jpg"
            alt="Collaboration and sticky notes session"
            className="rounded-[14px] h-full min-h-[22rem] w-full object-cover"
          />
        </motion.div>

        {/* Right Side: Accordion */}
        <div className="space-y-4">
          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const id = item.question;
              const isOpen = openId === id;
              return (
                <div
                  key={id}
                  className="rounded-2xl border-[0.5px] border-angeltors-border-mid/85 ag-gradient-card ag-shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:ag-shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all"
                  >
                    <span className="text-sm font-semibold text-angeltors-ink">{item.question}</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent transition-all duration-300">
                      <ChevronRight className={
                        "h-4 w-4 shrink-0 transition-transform " +
                        (isOpen ? "rotate-90 text-angeltors-accent" : "text-angeltors-accent")
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
                                height: { duration: 0.3, ease: "easeOut" },
                                opacity: { duration: 0.2, ease: "easeOut" },
                              }
                        }
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm leading-relaxed text-angeltors-muted whitespace-pre-line">
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
          <div className="flex justify-end pt-4">
            <a
              href="#contact"
              className="rounded-full border border-[#D8DEE9] bg-white px-6 py-3.5 text-sm font-semibold text-angeltors-ink transition-all duration-300 inline-flex items-center gap-1.5 hover:bg-neutral-50 hover:-translate-y-[2px] hover:shadow-sm"
            >
              <span>Read More FAQ's</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
