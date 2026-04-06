import "./MarqueeSkills.css";

const ROW_1 = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "GSAP", "Framer Motion", "Redux", "HTML5", "CSS3",
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "GSAP", "Framer Motion", "Redux", "HTML5", "CSS3",
];

const ROW_2 = [
  "Node.js", "Express.js", "MongoDB", "Supabase", "PostgreSQL",
  "Git", "GitHub", "Figma", "Postman", "C++", "Java",
  "Node.js", "Express.js", "MongoDB", "Supabase", "PostgreSQL",
  "Git", "GitHub", "Figma", "Postman", "C++", "Java",
];

const Dot = () => (
  <span className="mx-6 text-black/10 dark:text-white/10 select-none">·</span>
);


export default function MarqueeSkills() {
  return (
    <div className="w-full overflow-hidden py-4 select-none">
      {/* Row 1 — scrolls left */}
      <div className="marquee-track marquee-left mb-4">
        {ROW_1.map((skill, i) => (
          <span key={i} className="marquee-item">
            {skill}
            <Dot />
          </span>
        ))}
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-track marquee-right">
        {ROW_2.map((skill, i) => (
          <span key={i} className="marquee-item">
            {skill}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
