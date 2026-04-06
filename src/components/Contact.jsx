import { message as antdMessage } from "antd";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS send function
      const result = await emailjs.send(
        "service_fkqbbpi", // Replace with your service ID
        "template_9xttwk9", // Replace with your template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Qnx8Bn4NH1yc2Wyd7", // Replace with your user ID
      );

      if (result.status === 200) {
        antdMessage.success(
          "Got it! I’ll get back to you in no time. Thanks for getting in touch!",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        antdMessage.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      antdMessage.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Field */}
          <div className="space-y-3">
            <label htmlFor="name" className="block text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
              Identification
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all placeholder:text-black/20 dark:placeholder:text-white/20 font-light"
              placeholder="Name or Organization"
              required
            />
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <label htmlFor="email" className="block text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
              Electronic Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-5 rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all placeholder:text-black/20 dark:placeholder:text-white/20 font-light"
              placeholder="email@example.com"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-3">
          <label htmlFor="message" className="block text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
            Brief / Inquiry
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-6 rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none placeholder:text-black/20 dark:placeholder:text-white/20 font-light leading-relaxed"
            placeholder="Describe your project goals..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="group relative w-full py-6 bg-black dark:bg-white text-white dark:text-black rounded-2xl text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:scale-[0.99] active:scale-95 disabled:opacity-50"
          disabled={isSubmitting}
        >
          <span className="relative z-10">
            {isSubmitting ? "Transmitting..." : "Send Submission"}
          </span>
          <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </form>
    </div>
  );
}

