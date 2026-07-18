import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-angeltors-band">
        <div
          className="h-full bg-angeltors-accent"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-angeltors-band">
      <motion.div
        className="h-full bg-angeltors-accent origin-left"
        style={{ width: `${progress}%` }}
        transition={{ type: "tween", duration: 0.1, ease: "easeOut" }}
      />
    </div>
  );
}
