import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "What is Angel Investing?",
    answer:
      "Angel investing is a form of private equity financing where individual high-net-worth individuals (angels) invest their own money in early-stage, high-growth potential companies.",
  },
  {
    question: "Who are Angel Investors?",
    answer:
      "Angel investors are typically successful entrepreneurs, business executives, or high-net-worth individuals who have accumulated wealth and are looking to invest in promising startups.",
  },
  {
    question: "What is the focus of Angel Investing at Angeltors?",
    answer:
      "Angeltors focuses on investing in high-growth, early-stage startups with strong potential for significant impact. We prioritize companies with innovative solutions, experienced founding teams, and a clear path to market.",
  },
  {
    question: "How can I become an Angel Investor with Angeltors?",
    answer:
      "To become an investor with Angeltors, please contact us through our website. We will guide you through the process and provide you with more information on investment opportunities.",
  },
  {
    question: "What are the benefits of Angel Investing?",
    answer:
      "Key benefits include high potential returns on early-stage investments, the ability to support innovative companies, mentorship opportunities, access to a strong investor network, and personal satisfaction from contributing to meaningful ventures.",
  },
  {
    question: "How can startups apply for funding?",
    answer:
      "Startups can apply by visiting our Raise Capital page, submitting their details, and our team will review the application. We evaluate factors such as market opportunity, founding team strength, and stage of growth.",
  },
  {
    question: "What sectors does Angeltors focus on?",
    answer:
      "We focus on high-growth sectors including HiTech & Nano Tech, Pharma & BioTech, EV & Green Energy, Lifestyle & Beauty, and Retail & FMCG — all with strong long-term tailwinds.",
  },
  {
    question: "Does Angeltors offer mentorship to startups?",
    answer:
      "Yes. Beyond capital, Angeltors connects startups with experienced mentors, industry experts, and in-house advisory support to help them navigate challenges and scale effectively.",
  },
  {
    question: "How do I contact the Angeltors team?",
    answer:
      "You can reach us via our Contact page or email us directly at connect@angeltors.com. Our team typically responds within 1–2 business days.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="faq" className="py-14 md:py-16 bg-slate-50 relative">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Row — title top, support text bottom */}
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-angeltors-ink leading-[1.05]">
            Frequently asked questions
          </h2>
          <p className="text-base text-slate-500 font-medium max-w-2xl">
            We are here to help you with any questions you may have. If you
            don't find what you need, please contact us at{" "}
            <a
              href="mailto:connect@angeltors.com"
              className="text-angeltors-accent font-semibold hover:underline"
            >
              connect@angeltors.com
            </a>
          </p>
        </div>

        {/* FAQ Grid — 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqItems.map((item) => {
            const id = item.question;
            const isOpen = openId === id;

            return (
              <motion.div
                key={id}
                layout
                className={`rounded-2xl border bg-white p-6 cursor-pointer transition-all duration-300 ${
                  isOpen
                    ? "border-angeltors-accent/40 shadow-md"
                    : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                }`}
                onClick={() => setOpenId(isOpen ? null : id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`text-sm font-bold leading-snug transition-colors duration-200 ${
                      isOpen ? "text-angeltors-accent" : "text-angeltors-ink"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span
                    className={`shrink-0 mt-0.5 transition-colors duration-200 ${
                      isOpen ? "text-angeltors-accent" : "text-slate-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
                      animate={
                        reducedMotion ? {} : { height: "auto", opacity: 1 }
                      }
                      exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
                      transition={
                        reducedMotion
                          ? { duration: 0 }
                          : {
                              height: {
                                duration: 0.35,
                                ease: [0.16, 1, 0.3, 1],
                              },
                              opacity: { duration: 0.25 },
                            }
                      }
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
