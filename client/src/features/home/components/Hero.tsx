import { useState, useEffect } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Typewriter() {
  const words = ["Let's Grow", "Let's Invest", "Let's Partner", "Let's Go"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    const fullWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setIsDeleting(true);
          setSpeed(1500); // pause at full word
        } else {
          setSpeed(80);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(300);
        } else {
          setSpeed(40);
        }
      }
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed, words]);

  return (
    <span className="text-angeltors-accent border-r-2 border-angeltors-accent pr-1">
      {currentText}
    </span>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const heroElements = [
    { type: "headline", delay: 0 },
    { type: "subheadline", delay: 80 },
    { type: "body", delay: 160 },
    { type: "buttons", delay: 240 },
  ];

  return (
    <section id="hero" className="relative py-16 lg:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Dynamic animated background gradients */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-angeltors-accent/20 blur-[130px] mix-blend-multiply opacity-60 pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-10 -z-10 h-[450px] w-[450px] rounded-full bg-angeltors-cyan/15 blur-[120px] mix-blend-multiply opacity-50 pointer-events-none"
        />
        
        {/* Modern dot pattern background */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
        
        <div className="relative z-10 max-w-2xl px-4 sm:px-0">
          {heroElements.map((el) => {
            const initial = reducedMotion ? {} : { opacity: 0, y: 24 };
            const animate = reducedMotion ? {} : { opacity: 1, y: 0 };
            const transition = (reducedMotion
              ? { duration: 0 }
              : { duration: 0.5, delay: el.delay / 1000, ease: "easeOut" }) as any;
            return (
              <motion.div
                key={el.type}
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {el.type === "headline" && (
                  <div className="mt-8">
                    <h1 className="text-5xl sm:text-7xl font-black text-angeltors-ink tracking-tighter leading-[0.95] pb-1">
                      Empowering Early-Stage <br className="hidden sm:block" /> Innovation
                    </h1>
                    <div className="mt-4 text-3xl sm:text-4xl font-black text-angeltors-accent h-12 tracking-tight flex items-center">
                      <Typewriter />
                    </div>
                  </div>
                )}

                {el.type === "subheadline" && (
                  <p className="mt-8 text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                    Angeltors is an Angel Investment Platform that supports high growth Startups with Seed & Early Stage Funding, Mentorship, In-House Support & access to strong network of investors & industry leaders.
                  </p>
                )}

                {el.type === "body" && (
                  <p className="mt-6 text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                    Angeltors empowers visionary founders to build impactful business by providing strategic investment & supportive network.
                  </p>
                )}

                {el.type === "buttons" && (
                  <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                      href="/membership"
                      className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-angeltors-ink px-10 py-4 text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_-6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_30px_-10px_rgba(0,0,0,0.6)] w-full sm:w-auto"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10 flex items-center gap-2">Explore <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                    </a>
                    <a
                      href="/about"
                      className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white border border-slate-200/60 px-10 py-4 text-base font-bold text-angeltors-ink transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-md w-full sm:w-auto"
                    >
                      <span className="relative z-10 flex items-center gap-2">About Us<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="relative lg:ml-auto w-full max-w-lg lg:max-w-none px-4 sm:px-0"
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.95, x: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative rounded-[3rem] bg-white p-2 sm:p-3 shadow-2xl ring-1 ring-black/5 hover:-translate-y-2 transition-transform duration-500 group">
            {/* Creative Floating Badge 1 - Active Investors */}
            <motion.div 
              animate={reducedMotion ? {} : { y: [0, -8, 0] }}
              transition={reducedMotion ? {} : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 rounded-[1.5rem] border border-white bg-white/90 p-4 shadow-xl backdrop-blur-md flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-extrabold text-blue-700 shadow-sm">A1</div>
                <div className="h-10 w-10 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-extrabold text-indigo-700 shadow-sm">A2</div>
                <div className="h-10 w-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-extrabold text-slate-600 shadow-sm">A3</div>
              </div>
              <div className="leading-tight pr-2">
                <span className="block text-sm font-extrabold text-angeltors-ink tracking-tight">Growing Network</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Founders & Investors</span>
              </div>
            </motion.div>

            {/* Creative Floating Badge 2 - Average Growth */}
            <motion.div 
              animate={reducedMotion ? {} : { y: [0, 8, 0] }}
              transition={reducedMotion ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 z-20 rounded-[1.5rem] border border-white bg-white/90 p-4 shadow-xl backdrop-blur-md flex items-center gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-emerald-100 text-emerald-600 shadow-inner">
                <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="leading-tight pr-2">
                <span className="block text-sm font-extrabold text-angeltors-ink tracking-tight">High-Growth Focus</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Early-Stage Deals</span>
              </div>
            </motion.div>

            <div className="overflow-hidden rounded-[2.5rem] relative">
              <img
                src="/images/hero_startup_success.png"
                alt="Angeltors platform visual"
                className="h-[25rem] w-full object-cover sm:h-[40rem] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-angeltors-ink/90 via-angeltors-ink/30 to-transparent"></div>
            </div>
            
            {/* Glassmorphic Overlay Block inside the image card */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 rounded-[2rem] border border-white/20 bg-white/10 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                Opportunity
              </span>
              <h3 className="mt-2 text-2xl font-black text-white tracking-tight drop-shadow-sm">
                Invest Smart With Angeltors
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
