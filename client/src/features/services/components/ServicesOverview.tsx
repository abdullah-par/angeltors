import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Rocket, Users2, TrendingUp, Target } from 'lucide-react';

export default function ServicesOverview() {
  const reducedMotion = useReducedMotion();

  const overviews = [
    {
      title: "Empower Startups",
      description: "These services empower startups to overcome common challenges, improve operational efficiency, and focus on their core business activities. Angeltors differentiates itself from other investors and becomes a more attractive partner for startups.",
      icon: Rocket,
    },
    {
      title: "Experienced Professionals",
      description: "Angeltors leverages a team of experienced professionals in each domain, ensuring high-quality support and valuable insights. It ensures that startups receive the specific guidance and support they need to achieve their full potential in their industry.",
      icon: Users2,
    },
    {
      title: "Long-Term Value Creation",
      description: "By providing comprehensive support, Angeltors not only helps startups succeed but also increases the likelihood of successful exits and strong returns on investment for both startups and investors. It will give long term relationship and valuable insights.",
      icon: TrendingUp,
    },
    {
      title: "Drive Success",
      description: "By providing access to expertise and resources in critical areas, Angeltors increases the likelihood of startup success and maximizes returns for both startups and investors and allowing founders to focus on innovation, growth, and achieving their business goals.",
      icon: Target,
    },
  ];

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {overviews.map((overview, index) => {
            const Icon = overview.icon;
            return (
              <motion.div
                key={index}
                initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-angeltors-ink shadow-sm border border-slate-200/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-base font-bold text-angeltors-ink">
                  {overview.title}
                </h3>
                <p className="text-xs font-medium leading-loose text-slate-500">
                  {overview.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
