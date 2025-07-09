import { useNavigate } from "react-router-dom"; // Updated import for react-router-dom
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const QuoteAnimation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/MainPage");
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center bg-black gap-5">
      <motion.h2
        className="text-white text-xl md:text-4xl font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Simplicity
      </motion.h2>
      <motion.h1
        className="text-white text-xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        conveys
      </motion.h1>
      <motion.h2
        className="text-white text-xl md:text-4xl font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 2 }}
      >
        clarity.
      </motion.h2>
    </div>
  );
};

export default QuoteAnimation;
