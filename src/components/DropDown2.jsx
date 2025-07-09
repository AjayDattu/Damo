import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
  FiUser,
  FiAward,
  FiTool,
  FiBookOpen,
  FiBriefcase,
  FiActivity,
  FiPhone,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export const ShiftingDropDown2 = () => {
  return (
    <div className="flex h-full w-full justify-start text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

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
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-1"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

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
      className={`flex items-center gap-1 rounded px-2 py-1 text-xs transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
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
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_16px)] w-72 rounded-md border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-2"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
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
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[16px] left-0 right-0 h-[16px]" />
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
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 opacity-0 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

const Pricing = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="grid grid-cols-3 gap-2 divide-x divide-neutral-700">
      {MENU_ITEMS.map((item) => (
        <div
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="flex w-full flex-col items-center justify-center py-1 text-neutral-400 transition-colors hover:text-neutral-50"
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const MENU_ITEMS = [
  {
    id: "work",
    label: "Works",
    icon: <FiBriefcase className="mb-1 text-base text-indigo-300" />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <FiBarChart2 className="mb-1 text-base text-indigo-300" />,
  },
  {
    id: "edu",
    label: "Education",
    icon: <FiBookOpen className="mb-1 text-base text-indigo-300" />,
  },
  {
    id: "Exp",
    label: "Experience",
    icon: <FiUser className="mb-1 text-base text-indigo-300" />,
  },
  {
    id: "Ach",
    label: "Achievements",
    icon: <FiAward className="mb-1 text-base text-indigo-300" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FiPhone className="mb-1 text-base text-indigo-300" />,
  },
  {
    id: "About",
    label: "About",
    icon: <FiActivity className="mb-1 text-base text-indigo-300" />,
  },
];

const Blog = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="">
        <iframe
          src="https://www.youtube.com/embed/rk7jC7I7KRQ?si=FCWlbhOut700_D7N"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-36"
        ></iframe>
        <h4 className="mb-0.5 text-xs font-medium">DSA with Jay: C++ STL</h4>
        <p className="text-xs text-neutral-400 h-20">
          Learn the basics of STL in C++ and their applications in solving
          problems.
        </p>
        <button className="ml-auto mt-4 flex items-center gap-1 text-xs text-indigo-300">
          <a href="https://www.youtube.com/@Dsa_withjay">YouTube Channel</a>
          <FiArrowRight />
        </button>
      </div>
      <div>
        <p>
          <img
            align="center"
            src="https://leetcard.jacoblin.cool/dattuajay005?theme=dark&font=Encode%20Sans%20Semi%20Expanded&ext=heatmap"
            alt="LeetCode Stats"
            className="h-36"
          />
        </p>
        <h4 className="mb-0.5 text-xs font-medium">Damo Leetcode</h4>
        <div className="text-xs text-neutral-400 h-20">
          This all My Dsa Journey if you want see more click on the below
        </div>
        <button className="ml-auto mt-4 flex items-center gap-1 text-xs text-indigo-300">
          <a href="https://leetcode.com/u/dattuajay005/">LeetCode</a>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Menu",
    Component: Pricing,
  },
  {
    title: "DSA",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
