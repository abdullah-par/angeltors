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

  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <Link
        to={`/learn/${post.slug}`}
        className="block relative overflow-hidden aspect-[16/10]"
      >
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img
          src={post.thumbnailUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-angeltors-ink shadow-sm">
            {post.category.name}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-grow p-6">
        <Link to={`/learn/${post.slug}`} className="flex-grow">
          <h3 className="text-xl font-black tracking-tight text-angeltors-ink mb-3 group-hover:text-angeltors-accent transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
        </Link>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            {/* Author avatar placeholder */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-angeltors-accent/30 to-angeltors-accent flex items-center justify-center border border-angeltors-accent/20 shadow-sm">
              <span className="text-xs font-black text-white">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-angeltors-ink">{post.author}</p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
            {post.readTimeMinutes} min read
          </span>
        </div>
      </div>
    </motion.article>
  );
}
