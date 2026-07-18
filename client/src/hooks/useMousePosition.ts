import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    let lastMoveTime = 0;
    const THROTTLE = 16;

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMoveTime > THROTTLE) {
        lastMoveTime = now;
        rafId = requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY });
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return position;
}
