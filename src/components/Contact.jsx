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
    <div className="w-full mx-auto p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-lg">
      <h2 className="text-3xl font-light text-neutral-200">Contact Me</h2>
      <p className="text-sm mt-2 text-neutral-300">
        I build beautiful websites like this one.
      </p>
      <p className="text-sm mt-2 text-neutral-300">
        Feel free to reach out for projects, collaborations, or any queries.
      </p>
      <form onSubmit={handleSubmit} className="my-6 space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-white mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Let's collaborate!"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 rounded bg-neutral-900 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
