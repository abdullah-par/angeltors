import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function NewsletterSection() {
  const reducedMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl border-[0.5px] border-angeltors-border-mid/85 stripe-gradient-card p-8 md:p-14 stripe-shadow-sm transition-all duration-300 hover:stripe-shadow-md"
        >
          <p className="text-sm font-semibold uppercase tracking-[3px] text-angeltors-accent">
            Stay Updated
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] leading-[1.05] text-angeltors-ink sm:text-4xl">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base leading-relaxed text-angeltors-muted">
            Get the latest updates, curated investment opportunities, and industry insights delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 rounded-full border border-angeltors-border bg-white px-6 py-3.5 text-sm text-angeltors-ink placeholder-angeltors-muted focus:border-angeltors-accent focus:outline-none focus:ring-1 focus:ring-angeltors-accent shadow-sm"
            />
            <button
              type="submit"
              className="rounded-full bg-angeltors-accent px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 inline-flex items-center justify-center gap-1.5 hover:brightness-90 hover:-translate-y-[2px] hover:shadow-md"
            >
              <span>Subscribe</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
