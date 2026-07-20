import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Eye, LifeBuoy, BookOpen, Handshake, Link as LinkIcon, Lightbulb, Heart, Globe, Settings } from 'lucide-react';

export default function RaiseCapitalWhyChoose() {
  const reducedMotion = useReducedMotion();

  // The remaining 9 items from the original screenshot
  const features = [
    {
      title: "From Vision to Reality",
      description: "Partner with us to transform groundbreaking ideas into industry-disrupting businesses.",
      icon: Eye,
    },
    {
      title: "Dedicated Support Hub",
      description: "Access our exclusive In-House Support Portal for resources and assistance anytime.",
      icon: LifeBuoy,
    },
    {
      title: "Empower Your Knowledge",
      description: "Tap into our comprehensive Knowledge Base, packed with startup best practices.",
      icon: BookOpen,
    },
    {
      title: "More Than Just Funding",
      description: "A holistic ecosystem of mentorship, resources, and networks to de-risk your journey.",
      icon: Handshake,
    },
    {
      title: "Strategic Connections",
      description: "We connect you with relevant investors who understand your specific industry.",
      icon: LinkIcon,
    },
    {
      title: "Actionable Insights",
      description: "Practical, results-oriented workshops equipping you to drive tangible growth.",
      icon: Lightbulb,
    },
    {
      title: "Dedicated to Your Success",
      description: "Deeply invested in helping you validate, scale, and achieve your vision.",
      icon: Heart,
    },
    {
      title: "Diverse Network Access",
      description: "Benefit from our extensive network of leaders, partners, and experienced advisors.",
      icon: Globe,
    },
    {
      title: "Tailored Accelerator Support",
      description: "Specifically designed to address the unique needs of early-stage startups.",
      icon: Settings,
    }
  ];

  return (
    <section className="bg-white py-24 lg:py-32 border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl font-black tracking-tight text-angeltors-ink">Why raise with Angeltors</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-50 border border-slate-200/60 rounded-xl p-6 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-angeltors-ink" />
                  </div>
                  <h3 className="text-lg font-bold text-angeltors-ink leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
