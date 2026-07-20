import { motion } from "framer-motion";
import { BlogPost } from "../types/blog";
import BlogCard from "./BlogCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LatestArticlesGridProps {
  posts: BlogPost[];
}

export default function LatestArticlesGrid({ posts }: LatestArticlesGridProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent shadow-sm mb-6">
              Latest Insights
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-angeltors-ink leading-tight">
              Fresh From <br className="hidden sm:block" /> The Oven.
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-md">
            Stay up-to-date with our most recent articles, analyses, and deep-dives into the startup ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-angeltors-ink px-8 py-4 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-angeltors-ink focus:ring-offset-2">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
