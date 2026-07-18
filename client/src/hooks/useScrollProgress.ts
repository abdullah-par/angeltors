import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(
        Math.max(0, (scrollTop / (docHeight || 1)) * 100),
        100
      );
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
