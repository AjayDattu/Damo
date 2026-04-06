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
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#F9F8F6] relative overflow-hidden">

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#EFE9E3] blur-[120px] opacity-60" />
      </div>

      {/* Words */}
      <div className="relative flex items-baseline justify-center px-6 whitespace-nowrap">
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
            className={`text-black tracking-tight select-none mx-2 ${
              i === 1
                ? "text-xl md:text-3xl lg:text-4xl font-semibold"
                : "text-xl md:text-3xl lg:text-4xl font-light"
            }`}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Subtle progress line */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 h-px bg-black/10"
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 3.8, ease: "linear" }}
      />
    </div>
  );
};

export default QuoteAnimation;
