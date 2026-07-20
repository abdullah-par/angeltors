import { Globe, Layers, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function FeatureCards() {
  const reducedMotion = useReducedMotion();
  const featureCards = [
    {
      title: "Founder-centric approach",
      description: "Prioritize supporting visionary founders and providing them with the necessary mentorship, guidance, and resources to succeed.",
      icon: Users,
    },
    {
      title: "Ethical practices",
      description: "Conduct all business activities with integrity, transparency, and a commitment to ethical and responsible investment practices towards business.",
      icon: Shield,
    },
    {
      title: "Collaboration & community",
      description: "Foster a strong network of investors, entrepreneurs, and industry leaders to facilitate knowledge sharing, collaboration, and mutual growth.",
      icon: Globe,
    },
    {
      title: "Impact-driven investment",
      description: "Focus on startups with high growth potential that address significant challenges and create positive societal impact.",
      icon: TrendingUp,
    },
    {
      title: "Diversification & innovation",
      description: "Invest across a diverse range of sectors, embracing emerging technologies and innovative business models.",
      icon: Layers,
    },
    {
      title: "Long-term perspective",
      description: "Cultivate long-term partnerships with portfolio companies, providing ongoing support and guidance throughout their growth journey.",
      icon: Layers,
    },
  ];

  return (
    <section id="about-us" className="py-32 md:py-40 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center mb-24 md:mb-32">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent mb-6 shadow-sm">
              Let's Invest In Innovative Startups
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-angeltors-ink">
              Join the Angeltors, Where Innovation Meets Opportunity.
            </h2>
          </motion.div>

          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 space-y-6 max-w-xl text-lg md:text-xl font-medium leading-relaxed"
          >
            <p>
              Angeltors group as a Valuable partner for both Startups & Investors/Founders.
            </p>
            <p>
              Angeltors: Don't look on company, they look on ambitious founders.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col p-10 md:p-12 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 ease-out"
              >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-angeltors-accent/10 text-angeltors-accent group-hover:scale-110 group-hover:bg-angeltors-accent group-hover:text-white transition-all duration-500 ease-out shadow-inner">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-angeltors-ink mb-4 leading-snug">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-500 font-medium">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
