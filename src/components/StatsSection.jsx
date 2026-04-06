import React from "react";
import { motion } from "framer-motion";

const StatItem = ({ label, value, subtext }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
    >
      <span className="text-5xl md:text-6xl font-light tracking-tighter text-black dark:text-white">
        {value}
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
