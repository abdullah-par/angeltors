import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function BuildFutureBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-angeltors-ink">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-angeltors-cyan/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-angeltors-accent/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-5 mix-blend-overlay">
        <img
          src="/images/ab1.jpg"
          alt="Grow Together Background"
          className="h-full w-full object-cover object-center grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Column 1: Heading and Info */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-white">
              It's time to grow together : with visionary Founders and strategic Investors
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 font-medium max-w-xl">
              The future of growth with Angeltors that empowers innovation and shapes the future of startup ecosystem. Angeltors drives impactful collaboration and delivers exceptional returns
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/learn"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-angeltors-ink overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">Read More <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-angeltors-ink border border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/5 hover:border-white/30 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">Contact Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Styled Image Presentation */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.95, x: 30 }}
            whileInView={reducedMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-3 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 group">
              <img
                src="/images/time-to-grow.jpg"
                alt="Visionary founders and investors meeting"
                className="rounded-[2rem] h-[22rem] w-full object-cover md:h-[30rem] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
