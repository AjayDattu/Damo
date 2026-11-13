import { useState } from "react";
import emailjs from "emailjs-com";
import { Arrow, Container, Eyebrow, Heading, Dot, SocialIcon } from "./ui";
import { profile } from "../data/profile";

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-5 py-4 text-[15px] text-ink placeholder:text-mute/70 focus:border-ink focus:outline-none";

function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await emailjs.send(
        "service_fkqbbpi",
        "template_9xttwk9",
        { from_name: form.name, reply_to: form.email, subject: `Portfolio message from ${form.name}`, message: form.message },
        "Qnx8Bn4NH1yc2Wyd7",
      );
      if (r.status !== 200) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-soft py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <Heading><Dot>Let’s work</Dot>{"\n"}together</Heading>
            <p className="mt-8 max-w-md text-[17px] leading-relaxed text-mute">
              Starting from scratch or refining an existing idea? Tell me about it and I’ll get back to you within a day.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <span className="font-display text-lg font-bold text-ink">Based in {profile.location} |</span>
              <div className="flex gap-5">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-ink transition-colors hover:text-orange">
                    <SocialIcon name={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 md:p-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-display text-sm font-bold text-ink">Name</span>
                <input name="name" value={form.name} onChange={onChange} required placeholder="Name or company" className={`${field} bg-soft`} />
              </label>
              <label className="block">
                <span className="mb-2 block font-display text-sm font-bold text-ink">Email</span>
                <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@example.com" className={`${field} bg-soft`} />
              </label>
            </div>
            <label className="mt-6 block">
              <span className="mb-2 block font-display text-sm font-bold text-ink">Message</span>
              <textarea name="message" rows={6} value={form.message} onChange={onChange} required placeholder="What are you building?" className={`${field} resize-none bg-soft`} />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-ink px-7 py-4 font-display text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 md:w-auto"
            >
              {status === "sending" ? "Sending…" : "Send message"} <Arrow />
            </button>
            <p role="status" className="mt-4 min-h-[1.5rem] text-sm text-mute">
              {status === "sent" && "Got it. I’ll reply soon."}
              {status === "error" && "Something went wrong. Please try again or call."}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
