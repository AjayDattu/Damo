import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../utils/ThemeContext";

const ThemeSelectionModal = () => {
    const { theme, selectTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (!savedTheme) {
            setIsVisible(true);
        }
    }, []);

    const handleSelect = (mode) => {
        selectTheme(mode);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg dark:bg-brand-darkBg"
                >
                    <div className="max-w-2xl w-full p-8 text-center space-y-12">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-brand-text dark:text-brand-darkText">
                                Choose your experience
                            </h2>
                            <p className="mt-4 text-brand-text/50 dark:text-brand-darkText/50 font-light tracking-wide">
                                Select a theme to personalize your visit.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Light Mode Option */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSelect("light")}
                                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-brand-text/10 bg-white shadow-2xl flex flex-col items-center justify-center gap-4 transition-all hover:border-brand-text/30"
                            >
                                <div className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center text-brand-text">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                </div>
                                <span className="text-xl font-light tracking-tight text-brand-text">Light Mode</span>
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>

                            {/* Dark Mode Option */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSelect("dark")}
                                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-brand-darkText/10 bg-[#111] shadow-2xl flex flex-col items-center justify-center gap-4 transition-all hover:border-brand-darkText/30"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center text-brand-darkText">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                </div>
                                <span className="text-xl font-light tracking-tight text-brand-darkText">Dark Mode</span>
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                        </div>

                        <motion.button
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ delay: 1 }}
                             onClick={() => handleSelect("light")}
                             className="text-xs uppercase tracking-[0.2em] text-brand-text/30 dark:text-brand-darkText/30 hover:text-brand-text dark:hover:text-brand-darkText transition-colors"
                        >
                            Skip for now (Defaults to Light)
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ThemeSelectionModal;
