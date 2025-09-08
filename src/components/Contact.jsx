import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import socialLinks from "../data/socialLinks";
import "../assets/css/Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  // Use your current env variable names
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setStatus({ message: "⚠️ Please fill in all required fields.", type: "error" });
      return;
    }

    setLoading(true);
    setStatus({ message: "", type: "" });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ message: "✅ Message sent successfully!", type: "success" });
        form.current.reset();
      }, (error) => {
        console.error("EmailJS error:", error);
        setStatus({ message: "❌ Failed to send message. Please try again.", type: "error" });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus({ message: "", type: "" }), 5000);
      });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center">Get in Touch</h2>
        <div className="contact-container">

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form shadow p-4 rounded-3 bg-white">
            {status.message && (
              <div
                className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"}`}
                role="alert"
              >
                {status.message}
              </div>
            )}
            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            <input type="email" name="email" className="form-control" placeholder="Your Email" required />
            <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Direct Contact</h3>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-phone me-3 fs-4 text-primary"></i>
              <div>
                <h5 className="mb-0">Phone</h5>
                <a href="tel:+94756648014">+94756648014</a>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-envelope me-3 fs-4 text-primary"></i>
              <div>
                <h5 className="mb-0">Email</h5>
                <a href="mailto:aman.raheem041@gmail.com">aman.raheem041@gmail.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-links mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="btn btn-outline-primary btn-lg mx-2"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
