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
    <section id="pricing" className="scroll-mt-32 px-6 md:px-14 lg:px-20 py-32 bg-brand-bg">
      {/* Section header */}
      <div className="mb-16" data-aos="fade-up">
        <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">Pricing</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-black leading-none">
            Simple,<br />transparent pricing.
          </h2>
          <p className="text-lg text-black/50 font-light max-w-sm">
            No hidden fees. Choose the plan that fits your project — or reach out for a custom quote.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`relative flex flex-col rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 ${
              plan.highlighted
                ? "bg-black text-white shadow-2xl"
                : "bg-brand-secondary/50 border border-black/5 text-black"
            }`}
          >
            {/* Popular badge */}
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-5 py-1.5 rounded-full bg-white text-black text-xs font-medium tracking-widest uppercase shadow-md">
                  Most Popular
                </span>
              </div>
            )}

            {/* Plan name & tagline */}
            <div className="mb-8">
              <p className={`text-xs uppercase tracking-widest mb-2 ${plan.highlighted ? "text-white/40" : "text-black/35"}`}>
                {plan.name}
              </p>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl md:text-6xl font-light tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className={`pb-2 font-light ${plan.highlighted ? "text-white/40" : "text-black/35"}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`text-sm font-light ${plan.highlighted ? "text-white/60" : "text-black/50"}`}>
                {plan.tagline}
              </p>
            </div>

            {/* Divider */}
            <div className={`h-px mb-8 ${plan.highlighted ? "bg-white/10" : "bg-black/5"}`} />

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1 mb-10">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-light">
                  <span className={plan.highlighted ? "text-white" : "text-black"}>
                    <CheckIcon />
                  </span>
                  <span className={plan.highlighted ? "text-white/80" : "text-black/70"}>{f}</span>
                </li>
              ))}
              {plan.notIncluded.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-light">
                  <span>
                    <CrossIcon />
                  </span>
                  <span className={`line-through ${plan.highlighted ? "text-white/25" : "text-black/25"}`}>{f}</span>
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
              className={`group flex items-center justify-between px-6 py-4 rounded-2xl text-sm font-light tracking-wide transition-all ${
                plan.highlighted
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/80"
              }`}
            >
              <span>{plan.name === "Enterprise" ? "Let's Talk" : "Get Started"}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-sm text-black/35 font-light mt-12" data-aos="fade-up">
        All prices are starting estimates. Final pricing depends on project scope and requirements. &nbsp;
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="underline underline-offset-4 hover:text-black/60 transition-colors"
        >
          Contact me
        </button>
        &nbsp;for a custom quote.
      </p>
    </section>
  );
}
