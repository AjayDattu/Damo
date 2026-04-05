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
    <div className="w-full mx-auto p-10 rounded-3xl bg-brand-secondary/50 backdrop-blur-xl border border-black/5">
      <h2 className="text-4xl font-light text-black tracking-tight">Contact Me</h2>
      <p className="text-lg mt-4 text-black/60 font-light">
        Feel free to reach out for projects, collaborations, or just to say hi.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-black/40 uppercase tracking-widest">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white border border-black/5 text-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-black/40 uppercase tracking-widest">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white border border-black/5 text-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            placeholder="john@example.com"
            required
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-black/40 uppercase tracking-widest">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 rounded-xl bg-white border border-black/5 text-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-black text-white rounded-xl text-lg font-light hover:bg-black/80 transition-all transform active:scale-95 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
