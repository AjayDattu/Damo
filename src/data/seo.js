// Keep this file free of asset imports: the build-time SEO plugin (seo-plugin.js) also loads it in Node.

// Set VITE_SITE_URL at build time (e.g. https://ajaydattu.dev) so canonical links,
// the sitemap and social previews use your real domain.
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || "https://ajaydattu005.netlify.app").replace(/\/$/, "");

export const site = {
  name: "Ajay Dattu",
  title: "Ajay Dattu — Full-stack Developer | React Native, React, Next.js, Node.js",
  description:
    "Ajay Dattu is a full-stack software developer from India building React Native mobile apps, React and Next.js web platforms and Node.js APIs. Two apps live on the App Store, 550+ LeetCode problems solved. Available for hire.",
  keywords:
    "full-stack developer, software developer India, React Native developer, React developer, Next.js developer, Node.js developer, mobile app developer, hire freelance developer, in-app purchases, Expo developer, portfolio",
};

export const pages = {
  "/": { title: site.title, description: site.description },
  "/about": {
    title: "About Ajay Dattu — Software Engineer, React Native & Full-stack",
    description: "Experience, education, skills and awards of Ajay Dattu: SDE 1 at Memoa, full-stack developer, hackathon winner and 550+ LeetCode problems solved.",
  },
  "/projects": {
    title: "Projects — React Native, React & Next.js apps by Ajay Dattu",
    description: "Selected mobile apps and web platforms built by Ajay Dattu with React Native, React, Next.js and Node.js, including two live App Store apps.",
  },
  "/learn": {
    title: "Learn — Guides on React Native, React, Next.js, Node.js & DSA | Ajay Dattu",
    description: "Practical developer guides written by a working full-stack engineer: React Native performance, in-app purchases, Next.js vs React, Node.js API design and a DSA roadmap.",
  },
};

export const faqs = [
  {
    q: "What does a full-stack developer do?",
    a: "A full-stack developer builds both the part of a product people see (the user interface) and the part they don't (APIs, databases, authentication, hosting). I work across React, Next.js and React Native on the front, and Node.js with MongoDB or Supabase on the back, so one person can take a feature from idea to production.",
  },
  {
    q: "Do you build both iOS and Android apps?",
    a: "Yes. I build cross-platform mobile apps with React Native and Expo, so one codebase ships to the App Store and Google Play. I have published apps on the App Store and shipped subscription billing on both platforms.",
  },
  {
    q: "Can you add in-app purchases and subscriptions to my app?",
    a: "Yes. I have implemented in-app purchases with subscription tiers on iOS and Android, including product setup, purchase and restore flows, entitlement checks and server-side receipt handling.",
  },
  {
    q: "Which technologies do you work with?",
    a: "React, Next.js, React Native, Expo, TypeScript, Node.js, Express, MongoDB, Supabase and REST APIs. I also use Java and have a strong data structures and algorithms background, with 550+ LeetCode problems solved.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "A focused MVP with one core flow, authentication and a simple backend typically takes 4 to 8 weeks, depending on scope. After a short discovery call I give a clear estimate and a milestone plan.",
  },
  {
    q: "Are you available for freelance or full-time work?",
    a: "Yes. I am open to full-time software engineering roles and selected freelance projects. Use the contact form or call and I will reply promptly.",
  },
  {
    q: "Where are you based and do you work remotely?",
    a: "I am based in India and work remotely with teams in the USA and elsewhere, comfortable with asynchronous communication and overlapping time zones.",
  },
];

export const techGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Context"] },
  { title: "Mobile", items: ["React Native", "Expo", "iOS App Store", "Google Play", "In-app purchases", "Push notifications"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Java", "Authentication / JWT", "Webhooks"] },
  { title: "Data & Cloud", items: ["MongoDB", "Supabase", "PostgreSQL", "Firebase", "Netlify / Vercel", "CI/CD"] },
  { title: "Fundamentals", items: ["Data structures", "Algorithms", "System design basics", "Testing", "Accessibility", "Web performance"] },
];

export const process = [
  { n: "01", title: "Discover", text: "We agree on the problem, the users and what success looks like before any code is written." },
  { n: "02", title: "Design & plan", text: "Screens, data model and a milestone plan, so scope and timeline are clear up front." },
  { n: "03", title: "Build", text: "Iterative delivery in small, reviewable releases with clean, typed and tested code." },
  { n: "04", title: "Ship & improve", text: "Store submission, deployment, monitoring and performance tuning after launch." },
];
