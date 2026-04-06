import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Simplicity", "conveys", "clarity."];

const QuoteAnimation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/MainPage");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-black relative overflow-hidden transition-colors duration-700">

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-black/5 dark:bg-white/5 blur-[120px] opacity-60" />
      </div>

      {/* Words */}
      <div className="relative flex items-center justify-center px-6 whitespace-nowrap">
        {words.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.5,
            }}
            className={`text-black dark:text-white tracking-tighter select-none mx-3 ${
              i === 1
                ? "text-2xl md:text-4xl lg:text-5xl font-semibold italic"
                : "text-2xl md:text-4xl lg:text-5xl font-light"
            }`}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Subtle progress line */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-20 h-px bg-black/5 dark:bg-white/5 overflow-hidden">
        <motion.div
          className="h-full bg-black dark:bg-white"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </div>
    </div>
  );
};


export default QuoteAnimation;
