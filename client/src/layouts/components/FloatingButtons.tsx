import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
            animate={reducedMotion ? {} : { opacity: 1, scale: 1 }}
            exit={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-angeltors-border bg-white text-angeltors-accent shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-angeltors-accent/50"
            aria-label="Back to top"
          >
            <svg
              className="h-6 w-6 stroke-current fill-none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
