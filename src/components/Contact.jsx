import { useState } from "react";
import emailjs from "@emailjs/browser";

import "../styles/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing
    if (error) setError("");
    if (success) setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      return;
    }

    if (!emailRegex.test(form.email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);

    emailjs
      .send(
        "service_tcd0ork",
        "template_b1y0637",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "_CI5uADgo7iCSq5Iu",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        setError("Failed to send message");
      });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">Message sent successfully!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
