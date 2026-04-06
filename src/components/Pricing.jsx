import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/ project",
    tagline: "Perfect for landing pages & portfolios",
    features: [
      "Single-page website",
      "Responsive design",
      "2 revision rounds",
      "Basic animations",
      "Contact form integration",
      "Deployment setup",
    ],
    notIncluded: ["CMS / Admin panel", "Backend / API", "Ongoing support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$699",
    period: "/ project",
    tagline: "Ideal for full-featured web apps",
    features: [
      "Multi-page web application",
      "Full responsive + animations",
      "5 revision rounds",
      "Authentication system",
      "REST API / Backend",
      "Database integration",
      "CMS / Admin panel",
      "1 month free support",
    ],
    notIncluded: [],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "Tailored solutions for your business",
    features: [
      "Everything in Professional",
      "Custom architecture design",
      "Third-party API integrations",
      "Performance optimization",
      "Team collaboration features",
      "Priority support (3 months)",
      "Dedicated deployment pipeline",
    ],
    notIncluded: [],
    cta: "Let's Talk",
    highlighted: false,
  },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-4 h-4 shrink-0 opacity-30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="pricing" className="scroll-mt-32 px-6 md:px-14 lg:px-24 py-40 bg-white dark:bg-black transition-colors duration-400">
      {/* Section header */}
      <div className="mb-20" data-aos="fade-up">
        <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 mb-6 font-bold">Investment</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black dark:text-white leading-[0.9] border-l-4 border-black dark:border-white pl-8">
            Simple,<br />transparent<br />pricing.
          </h2>
          <p className="text-xl text-black/50 dark:text-white/50 font-light max-w-sm leading-relaxed tracking-tight">
            Clear-cut tiers for projects of all sizes. No surprises, just high-quality engineering delivered on schedule.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`relative flex flex-col rounded-[2.5rem] p-10 md:p-12 transition-all duration-500 hover:scale-[1.02] border ${
              plan.highlighted
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-2xl"
                : "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 text-black dark:text-white"
            }`}
          >
            {/* Popular badge */}
            {plan.highlighted && (
              <div className="absolute -top-5 left-10">
                <span className="px-6 py-2 rounded-full bg-white dark:bg-black text-black dark:text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl ring-1 ring-black/5 dark:ring-white/5">
                  Most Popular
                </span>
              </div>
            )}

            {/* Plan name & tagline */}
            <div className="mb-10">
              <p className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-4 ${plan.highlighted ? "text-white/50 dark:text-black/50" : "text-black/30 dark:text-white/30"}`}>
                {plan.name}
              </p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-6xl md:text-7xl font-light tracking-tighter">{plan.price}</span>
                {plan.period && (
                  <span className={`text-sm pb-3 font-medium uppercase tracking-widest ${plan.highlighted ? "text-white/40 dark:text-black/40" : "text-black/30 dark:text-white/30"}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`text-lg font-light leading-snug tracking-tight ${plan.highlighted ? "text-white/70 dark:text-black/70" : "text-black/50 dark:text-white/50"}`}>
                {plan.tagline}
              </p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-4 flex-1 mb-12">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-4 text-sm font-light leading-relaxed">
                  <span className={`mt-1 ${plan.highlighted ? "text-white dark:text-black" : "text-black/40 dark:text-white/40"}`}>
                    <CheckIcon />
                  </span>
                  <span className={plan.highlighted ? "text-white/90 dark:text-black/90" : "text-black/70 dark:text-white/70"}>{f}</span>
                </li>
              ))}
              {plan.notIncluded.map((f) => (
                <li key={f} className="flex items-start gap-4 text-sm font-light leading-relaxed opacity-40">
                  <span className="mt-1">
                    <CrossIcon />
                  </span>
                  <span className="line-through">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group flex items-center justify-between px-8 py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white dark:bg-black text-black dark:text-white hover:scale-[0.97]"
                  : "bg-black dark:bg-white text-white dark:text-black hover:scale-[0.97]"
              }`}
            >
              <span>{plan.name === "Enterprise" ? "Consult" : "Initiate"}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Footer note */}

      <p className="text-center text-[10px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30 mt-20" data-aos="fade-up">
        All prices are starting estimates · &nbsp;
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
        >
          Request custom quote
        </button>
      </p>
    </section>
  );
}

