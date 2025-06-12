import React, { useEffect } from "react";
import "./TextShpere.css";
import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML5",
      "CSS3",
      "MySQL",
      "JavaScript",
      "React.js",
      "Python",
      "Node.js",
      "C Language",
      "Tailwind CSS",
      "TypeScript",
      "Git",
      "GitHub",
      "Next.js",
      "C++",
      "Firebase",
      "Java",
      "MongoDB",
    ];

    // Determine radius based on screen width
    const radius = window.innerWidth < 768 ? 200 : 300; // Smaller radius for mobile

    const options = {
      radius: radius,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    // Initialize TagCloud
    TagCloud(container, texts, options);

    // Cleanup on component unmount
    return () => {
      const element = document.querySelector(container);
      if (element) element.innerHTML = ""; // Remove cloud content
    };
  }, []);

  return (
    <>
      <div className="text-shpere flex">
        {/* span tag className must be "tagcloud" */}
        <span className="tagcloud text-[10px] md:text-[12px] font-light"></span>
      </div>
    </>
  );
};

export default TextShpere;
