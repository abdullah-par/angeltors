import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function NewsletterSection() {
  const reducedMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-white relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[3.5rem] bg-angeltors-ink p-12 md:p-24 shadow-2xl relative overflow-hidden"
        >
          {/* Abstract glows inside the newsletter block */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-angeltors-cyan/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-angeltors-accent/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-angeltors-cyan/20 bg-angeltors-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-cyan mb-6 shadow-sm">
              Stay Updated
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-white">
              Subscribe to our Newsletter
            </h2>
            
            <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-400 font-medium">
              Get the latest updates, curated investment opportunities, and industry insights delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 rounded-full border-2 border-white/10 bg-white/5 px-8 py-5 text-base font-medium text-white placeholder-white/40 focus:border-white focus:bg-white/10 focus:outline-none transition-all shadow-inner"
              />
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-base font-bold text-angeltors-ink overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)] shrink-0"
              >
                <span className="relative z-10 flex items-center gap-2">Subscribe <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
