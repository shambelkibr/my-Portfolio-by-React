import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "../styles/contact.css";

const contactChannels = [
  {
    label: "Phone",
    value: "+251 962585655",
    href: "tel:+251962585655",
    icon: faPhone,
  },
  {
    label: "Telegram",
    value: "@shanbelkibre",
    href: "https://t.me/shanbelkibre",
    icon: faTelegram,
  },
  {
    label: "TikTok",
    value: "@shanbo5110",
    href: "https://www.tiktok.com/@shanbo5110",
    icon: faTiktok,
  },
  {
    label: "YouTube",
    value: "Shanbel Kibre",
    href: "https://www.youtube.com/",
    icon: faYoutube,
  },
];

const MotionSection = motion.section;
const MotionAside = motion.aside;
const MotionDiv = motion.div;

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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
    const phoneRegex = /^\+?[0-9\s-]{9,18}$/;

    if (
      !form.firstName ||
      !form.lastName ||
      !form.phone ||
      !form.email ||
      !form.message
    ) {
      setError("All fields are required");
      return;
    }

    if (!emailRegex.test(form.email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!phoneRegex.test(form.phone)) {
      setError("Enter a valid phone number");
      return;
    }

    setError("");
    setLoading(true);

    emailjs
      .send(
        "service_tcd0ork",
        "template_b1y0637",
        {
          first_name: form.firstName,
          last_name: form.lastName,
          phone: form.phone,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message: form.message,
        },
        "_CI5uADgo7iCSq5Iu",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setForm({
          firstName: "",
          lastName: "",
          phone: "",
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
    <MotionSection
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Contact Me</h2>

      <div className="contact-layout">
        <MotionAside
          className="contact-info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>Let's Connect</h3>
          <p className="contact-location-title">
            Debre Birhan University, Block 34
          </p>

          <div className="contact-links">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="contact-link-item"
                target={channel.label === "Phone" ? undefined : "_blank"}
                rel={channel.label === "Phone" ? undefined : "noreferrer"}
              >
                <span className="contact-link-icon">
                  <FontAwesomeIcon icon={channel.icon} />
                </span>
                <span>
                  <strong>{channel.label}</strong>
                  <small>{channel.value}</small>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-map">
            <iframe
              title="Debre Birhan University Block 34 Map"
              src="https://www.google.com/maps?q=Debre%20Birhan%20University%20Block%2034&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </MotionAside>

        <MotionDiv
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Message sent successfully!</p>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                aria-label="First name"
              />

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+251 xxx-xxx-xxx"
              aria-label="Phone number"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              aria-label="Your email"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              aria-label="Message"
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default Contact;
