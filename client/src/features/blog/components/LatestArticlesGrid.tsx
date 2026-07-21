import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogPost } from "../types/blog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// ─────────────────────────────────────────────────────────────────────────────
// Shared helpers
// ─────────────────────────────────────────────────────────────────────────────
const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const fallback =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1200&auto=format&fit=crop";

// ─────────────────────────────────────────────────────────────────────────────
// TIER 1  — Hero card (full-width, image-left landscape)
// ─────────────────────────────────────────────────────────────────────────────
function HeroCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full rounded-[1.75rem] overflow-hidden bg-white border border-slate-200/70 shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="grid md:grid-cols-[1.15fr_1fr] min-h-[340px] lg:min-h-[400px]">
        {/* Image */}
        <Link to={`/learn/${post.slug}`} className="relative block overflow-hidden">
          <img
            src={post.thumbnailUrl}
            alt={post.title}
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
            className="w-full h-full object-cover min-h-[260px] md:min-h-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
          />
          {/* Gradient veil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/6 pointer-events-none" />
          {/* Category chip */}
          <span className="absolute top-5 left-5 inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-angeltors-ink shadow-sm">
            {post.category.name}
          </span>
        </Link>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
          <div>
            {/* Accent bar */}
            <div className="w-9 h-1 rounded-full bg-angeltors-accent mb-6" />

            <Link to={`/learn/${post.slug}`}>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-angeltors-ink leading-[1.15] mb-5 hover:text-angeltors-accent transition-colors duration-200 line-clamp-3">
                {post.title}
              </h3>
            </Link>

            <p className="text-slate-500 text-[0.94rem] leading-[1.75] line-clamp-3 mb-8">
              {post.excerpt}
            </p>
          </div>

          {/* Meta + CTA */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-angeltors-accent to-emerald-600 flex items-center justify-center shadow shadow-angeltors-accent/20">
                <span className="text-xs font-black text-white">{post.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-xs font-black text-angeltors-ink leading-none">{post.author}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </div>
            <Link
              to={`/learn/${post.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-angeltors-ink px-5 py-2.5 text-xs font-black text-white hover:bg-angeltors-accent hover:shadow-lg hover:shadow-angeltors-accent/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Read
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TIER 2  — Medium card (tall image on top, substantial content below)
// ─────────────────────────────────────────────────────────────────────────────
function MediumCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 22 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-slate-200/70 shadow-md hover:shadow-xl transition-all duration-400"
    >
      {/* Image — taller aspect for prominence */}
      <Link to={`/learn/${post.slug}`} className="relative block overflow-hidden aspect-[16/10] flex-shrink-0">
        <img
          src={post.thumbnailUrl}
          alt={post.title}
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/92 backdrop-blur-sm px-3 py-1 text-[11px] font-black uppercase tracking-widest text-angeltors-ink shadow-sm">
          {post.category.name}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow p-7">
        <div className="w-7 h-0.5 rounded-full bg-angeltors-accent mb-4 opacity-70" />

        <Link to={`/learn/${post.slug}`} className="flex-grow">
          <h3 className="text-[1.2rem] font-black tracking-tight text-angeltors-ink leading-[1.25] mb-3 group-hover:text-angeltors-accent transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-slate-500 text-[0.88rem] leading-[1.7] line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </Link>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-angeltors-accent to-emerald-600 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">{post.author.charAt(0)}</span>
            </div>
            <p className="text-[11px] font-bold text-slate-500">{formatDate(post.publishedAt)}</p>
          </div>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
            {post.readTimeMinutes} min
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TIER 3  — Compact card (horizontal list-item style)
// ─────────────────────────────────────────────────────────────────────────────
function CompactCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Compact image */}
      <Link to={`/learn/${post.slug}`} className="relative block overflow-hidden aspect-[16/9] flex-shrink-0">
        <img
          src={post.thumbnailUrl}
          alt={post.title}
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-angeltors-ink shadow-sm">
          {post.category.name}
        </span>
      </Link>

      {/* Compact content */}
      <div className="flex flex-col flex-grow p-4 sm:p-5">
        <Link to={`/learn/${post.slug}`} className="flex-grow">
          <h3 className="text-[0.92rem] font-black tracking-tight text-angeltors-ink leading-[1.35] mb-2 group-hover:text-angeltors-accent transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-slate-400 text-[0.8rem] leading-[1.6] line-clamp-2 mb-4">
            {post.excerpt}
          </p>
        </Link>

        <div className="flex items-center justify-between mt-auto">
          <p className="text-[10px] font-bold text-slate-400">
            {formatDate(post.publishedAt)}
          </p>
          <span className="text-[10px] font-bold text-slate-400">
            {post.readTimeMinutes}m
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN: LatestArticlesGrid — Editorial hierarchy layout
// ─────────────────────────────────────────────────────────────────────────────
interface LatestArticlesGridProps {
  posts: BlogPost[];
}

export default function LatestArticlesGrid({ posts }: LatestArticlesGridProps) {
  const reducedMotion = useReducedMotion();

  // Slice into tiers — works with any number of posts
  const heroPost       = posts[0];
  const mediumPosts    = posts.slice(1, 3);     // posts 2–3
  const compactPosts   = posts.slice(3, 9);     // posts 4–9
  const remainingPosts = posts.slice(9);        // everything after

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 relative">
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────── */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-angeltors-accent mb-5">
              Latest Insights
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.03em] text-angeltors-ink leading-tight">
              Fresh From <br className="hidden sm:block" />The Oven.
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-[0.95rem] leading-relaxed">
            Stay up-to-date with our most recent articles, analyses, and deep-dives into the startup ecosystem.
          </p>
        </motion.div>

        {/* ── TIER 1: Hero post ───────────────────────────────────────── */}
        {heroPost && (
          <div className="mb-8">
            <HeroCard post={heroPost} delay={0} />
          </div>
        )}

        {/* ── TIER 2: Two medium cards ────────────────────────────────── */}
        {mediumPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {mediumPosts.map((post, i) => (
              <MediumCard key={post.id} post={post} delay={i * 0.12} />
            ))}
          </div>
        )}

        {/* ── TIER 3: Compact 3-column grid ──────────────────────────── */}
        {compactPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {compactPosts.map((post, i) => (
              <CompactCard key={post.id} post={post} delay={i * 0.07} />
            ))}
          </div>
        )}

        {/* ── Overflow: remaining posts (compact 3-col) ─────────────── */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {remainingPosts.map((post, i) => (
              <CompactCard key={post.id} post={post} delay={i * 0.05} />
            ))}
          </div>
        )}

        {/* ── Load More ──────────────────────────────────────────────── */}
        <div className="mt-14 text-center">
          <button className="group inline-flex items-center gap-3 justify-center rounded-full bg-angeltors-ink px-8 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-angeltors-accent hover:shadow-xl hover:shadow-angeltors-accent/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-angeltors-accent focus:ring-offset-2">
            Load More Articles
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
