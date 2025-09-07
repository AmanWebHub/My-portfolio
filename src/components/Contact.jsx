// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  // Environment variables (Vite)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_YOU;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();
    if (!name || !email || !message) {
      setStatus({ message: "⚠️ Please fill in all required fields.", type: "error" });
      return;
    }

    setLoading(true);
    setStatus({ message: "", type: "" });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus({ message: "✅ Message sent successfully!", type: "success" });
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus({ message: "❌ Failed to send message. Please try again.", type: "error" });
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus({ message: "", type: "" }), 5000);
      });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="row justify-content-center g-5">

          {/* Contact Form */}
          <div className="col-lg-6">
            <form ref={form} onSubmit={sendEmail} className="contact-form shadow p-4 rounded-3 bg-white">
              {status.message && (
                <div
                  className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"}`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

       

              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6 text-center text-md-start">
            <div className="contact-info p-4">
              <h3 className="mb-4">Direct Contact</h3>
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-phone me-3 fs-4 text-primary"></i>
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <a href="tel:+94756648014" className="text-decoration-none">+94756648014</a>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-envelope me-3 fs-4 text-primary"></i>
                <div>
                  <h5 className="mb-0">Email</h5>
                  <a href="mailto:aman.raheem041@gmail.com" className="text-decoration-none">
                    aman.raheem041@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
