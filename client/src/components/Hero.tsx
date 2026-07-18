import { useState, useEffect } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

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
    <section id="hero" className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-14 py-12 bg-transparent">
      {/* Stripe-style dynamic animated background gradients */}
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
      
      <div className="relative z-10 max-w-2xl">
        {heroElements.map((el) => {
          const initial = reducedMotion ? {} : { opacity: 0, y: 24 };
          const animate = reducedMotion ? {} : { opacity: 1, y: 0 };
          const transition = reducedMotion
            ? { duration: 0 }
            : { duration: 0.4, delay: el.delay / 1000, ease: "easeOut" };
          return (
            <motion.div
              key={el.type}
              initial={initial}
              animate={animate}
              transition={transition}
            >
              {el.type === "eyebrow" && (
                <span className="inline-flex items-center gap-2 rounded-full border border-angeltors-accent/20 bg-angeltors-accent/5 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-angeltors-accent">
                  <Sparkles className="h-4 w-4" />
                  Angel Investment Platform
                </span>
              )}

              {el.type === "headline" && (
                <div className="mt-8">
                  <h1 className="text-4xl font-bold tracking-[-0.04em] leading-[0.95] text-angeltors-ink sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95] xl:text-[6rem]">
                    Empowering Early-Stage Innovation
                  </h1>
                  <div className="mt-4 text-2xl font-bold sm:text-3xl text-angeltors-accent h-10 tracking-tight">
                    <Typewriter />
                  </div>
                </div>
              )}

              {el.type === "subheadline" && (
                <p className="mt-8 text-base leading-relaxed text-angeltors-muted lg:text-lg">
                  Angeltors is an Angel Investment Platform that supports high growth Startups with Seed & Early Stage Funding, Mentorship, In-House Support & access to strong network of investors & industry leaders.
                </p>
              )}

              {el.type === "body" && (
                <p className="mt-4 text-base leading-relaxed text-angeltors-muted lg:text-lg">
                  Angeltors empowers visionary founders to build impactful business by providing strategic investment & supportive network.
                </p>
              )}

              {el.type === "buttons" && (
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#our-services"
                    className="rounded-full bg-angeltors-accent px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 inline-flex items-center gap-1.5 hover:brightness-90 hover:-translate-y-[2px] hover:shadow-md"
                  >
                    <span>For Investors</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#our-services"
                    className="rounded-full border border-[#D8DEE9] bg-white px-6 py-3.5 text-sm font-semibold text-angeltors-ink transition-all duration-300 inline-flex items-center gap-1.5 hover:bg-neutral-50 hover:-translate-y-[2px] hover:shadow-sm"
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
        className="relative"
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.95, x: 20 }}
        animate={reducedMotion ? {} : { opacity: 1, scale: 1, x: 0 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative rounded-2xl border border-angeltors-border bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-2">
          {/* Creative Floating Badge 1 - Active Investors */}
          <motion.div 
            animate={reducedMotion ? {} : { y: [0, -6, 0] }}
            transition={reducedMotion ? {} : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 z-20 rounded-xl border border-angeltors-border bg-white/95 p-3 shadow-md backdrop-blur-md flex items-center gap-2.5"
          >
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full bg-angeltors-accent/10 border-2 border-white flex items-center justify-center text-[8px] font-bold text-angeltors-accent">A1</div>
              <div className="h-6 w-6 rounded-full bg-angeltors-cyan/10 border-2 border-white flex items-center justify-center text-[8px] font-bold text-angeltors-ink">A2</div>
              <div className="h-6 w-6 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-angeltors-muted">A3</div>
            </div>
            <div className="leading-none">
              <span className="block text-[10px] font-bold text-angeltors-ink">340+ Founders</span>
              <span className="text-[8px] text-angeltors-muted">Active in Ecosystem</span>
            </div>
          </motion.div>

          {/* Creative Floating Badge 2 - Average Growth */}
          <motion.div 
            animate={reducedMotion ? {} : { y: [0, 6, 0] }}
            transition={reducedMotion ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -right-4 z-20 rounded-xl border border-angeltors-border bg-white/95 p-3 shadow-md backdrop-blur-md flex items-center gap-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <svg className="h-4.5 w-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="block text-[10px] font-bold text-angeltors-ink">18% Avg. ROI</span>
              <span className="text-[8px] text-angeltors-muted">Outperforming Index</span>
            </div>
          </motion.div>

          <img
            src="/images/InvestWithUs.jpg"
            alt="Angeltors platform visual"
            className="h-[26rem] w-full object-cover sm:h-[32rem] rounded-[14px] brightness-95"
          />
          {/* Glassmorphic Overlay Block inside the image card - Stripe theme */}
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-angeltors-border bg-white/95 p-5 shadow-sm backdrop-blur-md">
            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-angeltors-accent">
              Opportunity
            </span>
            <h3 className="mt-1 text-lg font-bold text-angeltors-ink">
              Invest Smart With Angeltors
            </h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
