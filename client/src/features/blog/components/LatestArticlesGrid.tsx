import { useState } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "../types/blog";
import BlogCard from "./BlogCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface LatestArticlesGridProps {
  posts: BlogPost[];
}

export default function LatestArticlesGrid({ posts }: LatestArticlesGridProps) {
  const reducedMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(9);

  const displayedPosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 relative">
      {/* Top subtle border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-angeltors-accent mb-3">
              Startup & Tech Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-angeltors-ink">
              Latest Articles
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-md text-sm sm:text-base leading-relaxed">
            Explore curated funding guides, founder success stories, and startup profitability analyses.
          </p>
        </motion.div>

        {/* ── Uniform 3-Column Grid ──────────────────────────────────────── */}
        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/60 shadow-xs">
            <p className="text-slate-500 font-medium text-base">
              No articles found matching this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {displayedPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}

        {/* ── Load More Action ───────────────────────────────────────────── */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="group inline-flex items-center gap-3 justify-center rounded-full bg-angeltors-ink px-8 py-3.5 text-sm font-black text-white shadow-md transition-all duration-300 hover:bg-angeltors-accent hover:shadow-xl hover:-translate-y-0.5 focus:outline-none"
            >
              <span>Load More Articles</span>
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
