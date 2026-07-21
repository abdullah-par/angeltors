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
    // No border-top — hugs the hero bottom border directly
    <section className="py-0 bg-white border-b border-slate-200/60 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: -8 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center gap-1 overflow-x-auto scrollbar-none py-3"
        >
          {/* "All" pill — active state placeholder */}
          <Link
            to="/learn"
            className="flex-shrink-0 inline-flex items-center rounded-full bg-angeltors-ink px-4 py-1.5 text-xs font-black text-white transition-all hover:bg-angeltors-accent"
          >
            All
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-slate-200 mx-2 flex-shrink-0" />

          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={reducedMotion ? {} : { opacity: 0, x: -6 }}
              animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <Link
                to={`/learn?category=${category.slug}`}
                className="inline-flex items-center rounded-full border border-slate-200 bg-transparent px-4 py-1.5 text-xs font-bold text-slate-600 transition-all duration-200 hover:border-angeltors-accent/40 hover:bg-angeltors-accent/8 hover:text-angeltors-accent whitespace-nowrap"
              >
                {category.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
