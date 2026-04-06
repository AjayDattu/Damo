import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiPieChart,
  FiUser,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiPhone,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export const ShiftingDropDown2 = () => {
  return (
    <div className="flex h-full w-full justify-start text-black md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSelected(null);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex h-fit gap-1"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-light transition-all ${
        selected === tab
          ? "bg-black/10 text-black"
          : "text-black/50 hover:text-black"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform duration-200 ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-0 top-[calc(100%_+_12px)] w-80 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-3 z-50"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 80 : dir === "r" ? -80 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <t.Component />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[12px] left-0 right-0 h-[12px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");
      if (!hoveredTab || !overlayContent) return;
      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-white/60 bg-white/40"
    />
  );
};

// ── Menu (navigation links) ───────────────────────────────────────────────────
const MENU_ITEMS = [
  { id: "work",    label: "Works",       icon: <FiBriefcase className="text-base" /> },
  { id: "skills",  label: "Skills",      icon: <FiBarChart2  className="text-base" /> },
  { id: "edu",     label: "Education",   icon: <FiBookOpen   className="text-base" /> },
  { id: "Exp",     label: "Experience",  icon: <FiUser       className="text-base" /> },
  { id: "Ach",     label: "Achievements",icon: <FiAward      className="text-base" /> },
  { id: "pricing", label: "Pricing",     icon: <FiPieChart   className="text-base" /> },
  { id: "contact", label: "Contact",     icon: <FiPhone      className="text-base" /> },
];

const Menu = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-1">
      {MENU_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-black/50 transition-all hover:bg-black/[0.04] hover:text-black active:scale-95"
        >
          {item.icon}
          <span className="text-[10px] tracking-wide">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

// ── DSA (YouTube + LeetCode) ──────────────────────────────────────────────────
const DSA = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <iframe
          src="https://www.youtube.com/embed/rk7jC7I7KRQ?si=FCWlbhOut700_D7N"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-32 rounded-xl"
        />
        <h4 className="mt-2 text-xs font-medium text-black">DSA with Jay: C++ STL</h4>
        <p className="text-[10px] text-black/50 mt-1 leading-relaxed">
          STL basics in C++ and their applications.
        </p>
        <a
          href="https://www.youtube.com/@Dsa_withjay"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-1 text-[10px] text-black/60 hover:text-black"
        >
          YouTube Channel <FiArrowRight size={10} />
        </a>
      </div>
      <div>
        <img
          src="https://leetcard.jacoblin.cool/dattuajay005?theme=light&font=Inter&ext=heatmap"
          alt="LeetCode Stats"
          className="w-full h-32 object-cover rounded-xl"
        />
        <h4 className="mt-2 text-xs font-medium text-black">Damo LeetCode</h4>
        <p className="text-[10px] text-black/50 mt-1 leading-relaxed">
          My full DSA journey — 550+ problems solved.
        </p>
        <a
          href="https://leetcode.com/u/dattuajay005/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-1 text-[10px] text-black/60 hover:text-black"
        >
          LeetCode Profile <FiArrowRight size={10} />
        </a>
      </div>
    </div>
  );
};

// ── Tab definitions ───────────────────────────────────────────────────────────
const TABS = [
  { title: "Menu", Component: Menu },
  { title: "DSA",  Component: DSA  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
