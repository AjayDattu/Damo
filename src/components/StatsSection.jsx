import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(valueStr, inView) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = valueStr.match(/^(0*)(\d+)(.*)$/);
    if (!match) { setDisplay(valueStr); return; }
    const [, leading, numStr, suffix] = match;
    const num = parseInt(numStr, 10);
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * num);
      const padded = leading + String(current).padStart(numStr.length, "0");
      setDisplay(progress < 0.98 ? padded : leading + numStr + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, valueStr]);

  return display;
}

const StatItem = ({ label, value, subtext }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const display = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-black/10 dark:hover:border-white/10 transition-colors duration-300"
    >
      <span className="text-5xl md:text-6xl font-light tracking-tighter text-black dark:text-white tabular-nums">
        {display}
      </span>
      <span className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
        {label}
      </span>
      {subtext && (
        <span className="mt-1 text-xs font-light text-black/30 dark:text-white/20 whitespace-nowrap">
          {subtext}
        </span>
      )}
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Problems Solved", value: "550+", subtext: "LeetCode & Competitive" },
    { label: "ECET Rank", value: "79", subtext: "Top 0.1% State Level" },
    { label: "Hackathons", value: "05+", subtext: "SIH & Prajwala Finalist" },
    { label: "Projects", value: "12+", subtext: "Full Stack & Web3" },
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
