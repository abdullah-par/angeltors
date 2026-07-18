import { Globe, Layers, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import BorderGlow from "./BorderGlow";

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
    <section id="about-us" className="py-24 bg-transparent relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[3px] text-angeltors-accent">
              Let's Invest In Innovative Startups.
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.05] text-angeltors-ink sm:text-4xl">
              Join the Angeltors, Where Innovation Meets Opportunity.
            </h2>
          </motion.div>

          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
            className="text-angeltors-muted space-y-4 max-w-xl"
          >
            <p className="text-base leading-relaxed lg:text-lg">
              Angeltors group as a Valuable partner for both Startups & Investors/Founders.
            </p>
            <p className="text-base leading-relaxed lg:text-lg">
              Angeltors: Don't look on company, they look on ambitious founders.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  reducedMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.06 }
                }
                className="group transition-all duration-300 ease-out hover:-translate-y-1"
              >
                <BorderGlow
                  className="p-8 h-full min-h-[300px]"
                  borderRadius={20}
                  backgroundColor="#ffffff"
                  glowColor="220 100 45" // Perfect royal blue HSL stop
                  colors={['#00379e', '#2563eb', '#60a5fa']}
                  glowIntensity={0.5}
                  fillOpacity={0.08}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-angeltors-accent/10 to-angeltors-accent/5 border border-angeltors-accent/15 text-angeltors-accent mb-6 shadow-sm">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="flex items-center gap-2.5 text-[1.15rem] font-bold tracking-tight text-angeltors-ink">
                    <span className="h-4.5 w-[3px] bg-angeltors-accent inline-block rounded-full" />
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[0.925rem] leading-relaxed text-angeltors-muted font-normal antialiased">{card.description}</p>
                </BorderGlow>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
