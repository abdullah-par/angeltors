import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogPost } from "../types/blog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FeaturedArticleProps {
  post: BlogPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  const reducedMotion = useReducedMotion();

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="py-16 sm:py-12 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,180,100,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section eyebrow ───────────────────────────────────────────── */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/25 bg-angeltors-accent/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-angeltors-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-angeltors-accent animate-pulse" />
            Editor's Pick
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-angeltors-accent/20 to-transparent" />
        </motion.div>

        {/* ── Main Editorial Card ───────────────────────────────────────── */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="group grid lg:grid-cols-[1.1fr_1fr] xl:grid-cols-[1.2fr_1fr] gap-0 rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] border border-slate-900/8"
        >
          {/* ── LEFT: Image ──────────────────────────────────────────────── */}
          <div className="relative overflow-hidden min-h-[420px] lg:min-h-[580px]">
            <Link to={`/learn/${post.slug}`} className="absolute inset-0">
              <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              {/* Gradient overlay — strong at bottom for mobile, subtle on sides */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/5" />
            </Link>

            {/* Category badge over image */}
            <div className="absolute top-6 left-6 z-10">
              <Link to={`/learn?category=${post.category.slug}`}>
                <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-angeltors-ink shadow-md hover:bg-angeltors-accent hover:text-white transition-colors duration-200">
                  {post.category.name}
                </span>
              </Link>
            </div>

            {/* Read time badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-3.5 py-1.5 text-[11px] font-bold text-white/90">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTimeMinutes} min read
              </span>
            </div>
          </div>

          {/* ── RIGHT: Content ───────────────────────────────────────────── */}
          <div className="relative flex flex-col bg-white px-8 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16">

            {/* Subtle left border accent */}
            <div className="absolute left-0 top-12 bottom-12 w-0.5 bg-gradient-to-b from-transparent via-angeltors-accent/30 to-transparent hidden lg:block" />

            {/* Title */}
            <Link to={`/learn/${post.slug}`} className="flex-none">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] xl:text-[2.4rem] font-black tracking-tight text-angeltors-ink leading-[1.12] mb-5 hover:text-angeltors-accent transition-colors duration-300">
                {post.title}
              </h2>
            </Link>

            {/* Divider accent */}
            <div className="w-12 h-1 rounded-full bg-angeltors-accent mb-6" />

            {/* Excerpt */}
            <p className="text-slate-500 text-base sm:text-[1.05rem] leading-[1.75] mb-10 flex-none line-clamp-4">
              {post.excerpt}
            </p>

            {/* ── Meta row ────────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mt-auto pt-8 border-t border-slate-100">

              {/* Author */}
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-gradient-to-br from-angeltors-accent to-emerald-600 flex items-center justify-center shadow-md shadow-angeltors-accent/25">
                  <span className="text-sm font-black text-white tracking-wide">
                    {post.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-black text-angeltors-ink truncate">{post.author}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 mt-0.5">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to={`/learn/${post.slug}`}
                className="flex-shrink-0 group/btn inline-flex items-center gap-2.5 rounded-full bg-angeltors-ink px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:bg-angeltors-accent hover:shadow-lg hover:shadow-angeltors-accent/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-angeltors-accent focus:ring-offset-2"
              >
                Read Article
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/30 group-hover/btn:translate-x-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
