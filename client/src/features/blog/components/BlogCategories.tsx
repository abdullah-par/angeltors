import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Category } from "../types/blog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface BlogCategoriesProps {
  categories: Category[];
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  const reducedMotion = useReducedMotion();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <section className="py-0 bg-white border-b border-slate-200/60 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: -8 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center gap-2 overflow-x-auto scrollbar-none py-4"
        >
          {/* "All" pill */}
          <Link
            to="/learn"
            className={`flex-shrink-0 inline-flex items-center rounded-full px-5 py-2 text-xs font-black transition-all duration-200 ${
              !activeCategory
                ? "bg-angeltors-ink text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-slate-200 mx-1 flex-shrink-0" />

          {categories.map((category, i) => {
            const isActive = activeCategory === category.slug;
            return (
              <motion.div
                key={category.id}
                initial={reducedMotion ? {} : { opacity: 0, x: -6 }}
                animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
                className="flex-shrink-0"
              >
                <Link
                  to={`/learn?category=${category.slug}`}
                  className={`inline-flex items-center rounded-full px-4.5 py-2 text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-angeltors-ink text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-angeltors-accent/40 hover:bg-angeltors-accent/8 hover:text-angeltors-accent"
                  }`}
                >
                  {category.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
