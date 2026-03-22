"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  label: string;
  icon: React.ReactNode;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
  label,
  icon,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const stepTime = (duration * 1000) / end;
    const increment = Math.max(1, Math.floor(end / 60));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime * increment, 16));

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-extrabold text-white tabular-nums">
          {count.toLocaleString()}
          <span className="text-teal-400">{suffix}</span>
        </div>
        <div className="text-[11px] text-slate-400 uppercase tracking-wider leading-tight">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
