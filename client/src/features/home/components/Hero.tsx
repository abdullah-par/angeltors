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
    { type: "eyebrow", delay: 0 },
    { type: "headline", delay: 80 },
    { type: "subheadline", delay: 160 },
    { type: "body", delay: 240 },
    { type: "buttons", delay: 320 },
  ];

  return (
    <section id="hero" className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16 py-16 lg:py-20 bg-transparent overflow-hidden">
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
      <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="relative z-10 max-w-2xl">
        {heroElements.map((el) => {
          const initial = reducedMotion ? {} : { opacity: 0, y: 24 };
          const animate = reducedMotion ? {} : { opacity: 1, y: 0 };
          const transition = reducedMotion
            ? { duration: 0 }
            : { duration: 0.5, delay: el.delay / 1000, ease: "easeOut" };
          return (
            <motion.div
              key={el.type}
              initial={initial}
              animate={animate}
              transition={transition} 
            >
              {el.type === "eyebrow" && (
                <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/30 bg-angeltors-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-angeltors-accent shadow-sm backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  Angel Investment Platform
                </span>
              )}

              {el.type === "headline" && (
                <div className="mt-8">
                  <h1 className="text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-[4rem] lg:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-angeltors-ink to-gray-600 pb-1">
                    Empowering Early-Stage Innovation
                  </h1>
                  <div className="mt-3 text-2xl font-bold sm:text-3xl text-angeltors-accent h-12 tracking-tight flex items-center">
                    <Typewriter />
                  </div>
                </div>
              )}

              {el.type === "subheadline" && (
                <p className="mt-6 text-base leading-relaxed text-gray-600 lg:text-lg">
                  Angeltors is an Angel Investment Platform that supports high growth Startups with Seed & Early Stage Funding, Mentorship, In-House Support & access to strong network of investors & industry leaders.
                </p>
              )}

              {el.type === "body" && (
                <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                  Angeltors empowers visionary founders to build impactful business by providing strategic investment & supportive network.
                </p>
              )}

              {el.type === "buttons" && (
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#our-services"
                    className="rounded-full bg-gradient-to-r from-angeltors-accent to-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-2 hover:shadow-blue-500/50 hover:-translate-y-1"
                  >
                    <span>For Investors</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#our-services"
                    className="rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition-all duration-300 inline-flex items-center gap-2 hover:bg-white hover:-translate-y-1 hover:shadow-md hover:border-gray-300"
                  >
                    <span>For Startups</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.95, x: 20 }}
        animate={reducedMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative rounded-[2rem] bg-white p-3 shadow-2xl ring-1 ring-black/5 hover:-translate-y-2 transition-transform duration-500 group">
          {/* Creative Floating Badge 1 - Active Investors */}
          <motion.div 
            animate={reducedMotion ? {} : { y: [0, -8, 0] }}
            transition={reducedMotion ? {} : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 z-20 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-xl backdrop-blur-md flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[9px] font-extrabold text-blue-700 shadow-sm">A1</div>
              <div className="h-8 w-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[9px] font-extrabold text-indigo-700 shadow-sm">A2</div>
              <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[9px] font-extrabold text-gray-600 shadow-sm">A3</div>
            </div>
            <div className="leading-tight pr-2">
              <span className="block text-xs font-extrabold text-gray-900">340+ Founders</span>
              <span className="text-[10px] font-medium text-gray-500">Active in Ecosystem</span>
            </div>
          </motion.div>

          {/* Creative Floating Badge 2 - Average Growth */}
          <motion.div 
            animate={reducedMotion ? {} : { y: [0, 8, 0] }}
            transition={reducedMotion ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -right-6 z-20 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-xl backdrop-blur-md flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 shadow-sm">
              <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="leading-tight pr-2">
              <span className="block text-xs font-extrabold text-gray-900">18% Avg. ROI</span>
              <span className="text-[10px] font-medium text-gray-500">Outperforming Index</span>
            </div>
          </motion.div>

          <div className="overflow-hidden rounded-[1.5rem] relative">
            <img
              src="/images/hero_startup_success.png"
              alt="Angeltors platform visual"
              className="h-[2rem] w-full object-cover sm:h-[35rem] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Glassmorphic Overlay Block inside the image card */}
          <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
              Opportunity
            </span>
            <h3 className="mt-1 text-xl font-bold text-white drop-shadow-sm">
              Invest Smart With Angeltors
            </h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
