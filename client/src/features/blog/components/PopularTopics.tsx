import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const topics = [
  { name: "Term Sheets", count: 12 },
  { name: "Product Market Fit", count: 8 },
  { name: "Co-founder Agreements", count: 5 },
  { name: "Pitching", count: 15 },
  { name: "Financial Modeling", count: 7 },
  { name: "Growth Hacking", count: 9 },
  { name: "B2B Sales", count: 11 },
  { name: "Hiring", count: 6 },
];

export default function PopularTopics() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-angeltors-ink mb-4">
              Trending Now
            </h2>
            <p className="text-slate-500 font-medium mb-8">
              Explore the topics our community of founders and investors are reading right now.
            </p>
            <Link 
              to="/learn/topics" 
              className="inline-flex items-center text-angeltors-accent font-bold hover:text-angeltors-accent/80 transition-colors"
            >
              View all topics 
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
          
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-4">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic.name}
                  initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                  whileInView={reducedMotion ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                >
                  <Link
                    to={`/learn?tag=${topic.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-angeltors-accent/30 hover:shadow-md"
                  >
                    <span className="font-bold text-angeltors-ink group-hover:text-angeltors-accent transition-colors">
                      {topic.name}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-xs font-bold text-slate-400 group-hover:bg-angeltors-accent/10 group-hover:text-angeltors-accent transition-colors">
                      {topic.count}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
