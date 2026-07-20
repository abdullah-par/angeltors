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
    <section className="py-12 sm:py-16 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent shadow-sm">
            ⭐ Featured Article
          </span>
        </div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-200/60 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Image Side */}
            <div className="relative overflow-hidden aspect-square lg:aspect-auto">
              <Link to={`/learn/${post.slug}`} className="block w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 lg:hidden" />
                <img
                  src={post.thumbnailUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1200&auto=format&fit=crop";
                  }}
                />
              </Link>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative bg-white lg:bg-transparent">
              <div className="mb-6">
                <Link to={`/learn?category=${post.category.slug}`}>
                  <span className="inline-flex items-center rounded-full bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent">
                    {post.category.name}
                  </span>
                </Link>
              </div>

              <Link to={`/learn/${post.slug}`}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-angeltors-ink mb-6 leading-[1.1] hover:text-angeltors-accent transition-colors duration-300">
                  {post.title}
                </h2>
              </Link>

              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-angeltors-accent/30 to-angeltors-accent flex items-center justify-center border border-angeltors-accent/20 shadow-sm">
                    <span className="text-sm font-black text-white">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-angeltors-ink">{post.author}</p>
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-0.5">
                      By Angeltors
                    </p>
                  </div>
                </div>

                {/* Date & read time */}
                <div className="text-right hidden sm:block">
                  <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    {formatDate(post.publishedAt)}
                  </p>
                  <p className="text-sm font-bold text-angeltors-ink mt-0.5">
                    {post.readTimeMinutes} min read
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to={`/learn/${post.slug}`}
                className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-angeltors-ink px-6 py-3 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-lg hover:-translate-y-0.5"
              >
                Read Article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
