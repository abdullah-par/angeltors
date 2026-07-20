import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Category } from "../types/blog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BlogCategoriesProps {
  categories: Category[];
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-8 bg-white border-y border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 md:gap-4"
        >
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mr-2">Topics:</span>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/learn?category=${category.slug}`}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-bold text-angeltors-ink transition-all hover:border-angeltors-accent/30 hover:bg-angeltors-accent/5 hover:text-angeltors-accent hover:shadow-sm"
            >
              {category.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
