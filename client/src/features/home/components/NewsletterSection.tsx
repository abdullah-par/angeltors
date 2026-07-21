import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function NewsletterSection() {
  const reducedMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl bg-angeltors-ink p-10 md:p-16 lg:p-20 shadow-lg relative overflow-hidden flex flex-col justify-center items-center text-center"
    >
      {/* Abstract glows inside the newsletter block */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-angeltors-cyan/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-angeltors-accent/20 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white mb-6">
          Stay Connected with Angeltors
        </h2>
        
        <p className="mx-auto max-w-lg text-base md:text-lg leading-relaxed text-slate-300 font-medium mb-10">
          Get startup insights, funding opportunities, investment trends and exclusive ecosystem updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-base font-medium text-white placeholder-white/40 focus:border-white focus:bg-white/10 focus:outline-none transition-all shadow-inner text-center"
          />
          <button
            type="submit"
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-angeltors-ink overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <span className="relative z-10 flex items-center gap-2">Subscribe <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Trusted by Founders &bull; Investors &bull; Mentors
          </p>
        </div>
      </div>
    </motion.div>
  );
}
