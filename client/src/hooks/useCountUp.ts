import { useEffect, useRef, useState } from "react";

export function useCountUp(
  target: number,
  { start = 0, duration = 1000, disabled = false } = {}
) {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (disabled || target === 0) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const currentCount = Math.floor(start + progress * (target - start));
      setCount(currentCount);

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [target, start, duration, disabled]);

  return count;
}
