// All site content lives here. Swap images by changing the imports below.
import portrait from "../assets/ajay-full.webp";
import aboutPortrait from "../assets/ajay-arms.webp";

export const profile = {
  firstName: "Ajay",
  lastName: "Dattu",
  role: "Full-stack Developer",
  location: "India",
  phone: "+91 81068 69354",
  phoneHref: "tel:+918106869354",
  portrait,          // hero (home) image
  aboutPortrait,     // about section / about page image
  yearsOfExperience: "2+",
  intro:
    "A full-stack developer who ships real products: two apps on the App Store, web platforms used by paying customers, and 550+ solved algorithm problems behind it all.",
  bio:
    "I work across React Native, React, Next.js and Node.js, from the first screen to the API behind it. I care about clean architecture, performance and the small details that make software feel finished.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ajaydattu005/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/AjayDattu", icon: "github" },
    { label: "LeetCode", href: "https://leetcode.com/dattuajay005/", icon: "leetcode" },
    { label: "YouTube", href: "https://youtube.com/@flash_byte_404", icon: "youtube" },
  ],
};

export const counters = [
  { value: "550+", label: "Problems solved" },
  { value: "02", label: "Apps published" },
  { value: "12+", label: "Projects shipped" },
];

export const services = [
  { title: "Mobile app\ndevelopment", icon: "phone" },
  { title: "Web\ndevelopment", icon: "globe" },
  { title: "Backend &\nAPIs", icon: "server" },
  { title: "UI\nimplementation", icon: "layout" },
  { title: "In-app\npurchases", icon: "card" },
  { title: "Performance\noptimisation", icon: "bolt" },
];

export const experience = [
  { period: "2025 – Present", title: "Software Engineer — SDE 1", company: "Memoa, USA (Remote)",
    points: ["Built the interactive streaks feature across the React Native Expo app.", "Shipped In-App Purchases with subscription tiers on iOS and Android.", "Owned scalable components and complex state management."] },
  { period: "Jan 2025 – Jun 2025", title: "Full Stack Developer", company: "Axis Intelligence, USA (Remote)",
    points: ["Responsive UI components with full device compatibility.", "Accessibility and performance work that cut Total Blocking Time."] },
  { period: "2024", title: "Full Stack Developer Intern", company: "BlackBucks Company",
    points: ["React and Node.js web apps with a modular approach.", "Integrated Ant Design, MUI and Chakra for different clients."] },
  { period: "2023", title: "Java Developer Intern", company: "Henotic Technologies",
    points: ["Backend services and REST APIs in Java.", "Desktop tools built on backtracking algorithms."] },
];

export const education = [
  { period: "2022 – 2025", title: "BTech in Computer Science", company: "SRKR Engineering College, Bhimavaram" },
  { period: "2019 – 2022", title: "Diploma in Engineering", company: "AANM VVSRS Polytechnic, Gudlavalleru" },
];

export const skills = [
  { name: "React / React Native", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js & Express", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "MongoDB / Supabase", level: 75 },
  { name: "Data structures & algorithms", level: 90 },
];

export const awards = [
  { year: "2024", label: "Winner", title: "Best Impactful Solution — Prajwala Hackathon" },
  { year: "2023", label: "Finalist", title: "Smart India Hackathon" },
  { year: "2023", label: "Rank 79", title: "AP ECET state entrance" },
  { year: "2024", label: "550+", title: "LeetCode problems solved" },
];

export const apps = [
  {
    id: "memoa-vault",
    title: "Memoa Vault",
    tags: ["iOS", "React Native"],
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/66/b9/88/66b988db-d3d3-17fa-1ae5-e6792a59df4a/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
    href: "https://apps.apple.com/in/app/memoa-vault/id6759069483",
    blurb: "A private, encrypted vault for brokers and clients: document high-value items, track AI valuations, protect assets.",
  },
  {
    id: "memoa",
    title: "Memoa",
    tags: ["iOS", "Android"],
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a4/e7/6f/a4e76fdc-ada1-c124-b88a-632c883f531e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
    href: "https://apps.apple.com/in/app/memoa/id6743237503",
    blurb: "A global collectibles community used in 40+ countries. I built the streaks system and the shared component library.",
  },
];
