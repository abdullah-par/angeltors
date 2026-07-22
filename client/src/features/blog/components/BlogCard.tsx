import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogPost } from "../types/blog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const reducedMotion = useReducedMotion();

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const fallbackImage =
    "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop";

  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.08, ease: "easeOut" }}
      className="group flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* ── Top Image Container ─────────────────────────────────────────── */}
      <Link
        to={`/learn/${post.slug}`}
        className="relative block overflow-hidden aspect-[16/10] bg-slate-100 flex-shrink-0"
      >
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
        
        <img
          src={post.thumbnailUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallbackImage;
          }}
        />

        {/* Top-Left Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-angeltors-ink shadow-md">
            {post.category.name}
          </span>
        </div>
      </Link>

      {/* ── Card Content Body ───────────────────────────────────────────── */}
      <div className="flex flex-col flex-grow p-6 justify-between bg-white">
        <div>
          <Link to={`/learn/${post.slug}`} className="block group/title">
            <h3 className="text-lg sm:text-[1.125rem] font-extrabold tracking-tight text-angeltors-ink leading-snug mb-3 group-hover/title:text-angeltors-accent transition-colors duration-200 line-clamp-2">
              {post.title}
            </h3>
          </Link>
          <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* ── Card Footer & CTA ──────────────────────────────────────────── */}
        <div className="pt-4 border-t border-slate-100 mt-auto flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full">
              {post.readTimeMinutes}m read
            </span>
          </div>

          <Link
            to={`/learn/${post.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-angeltors-ink px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-angeltors-accent hover:shadow-lg transition-all duration-300 group/btn"
          >
            <span>Read Article</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
