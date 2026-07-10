import Link from "next/link";
import "./contact.css";

export const metadata = {
  title: "Contact — Infinite Vision",
  description: "Get in touch with Infinite Vision. Let's discuss your next brand experience project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <span className="section-label">Contact Us</span>
        <h1>Let&apos;s <span className="gradient-text">connect.</span></h1>
        <p>
          Ready to build a real-world brand experience? Fill out the form below
          or reach out directly — we&apos;d love to hear about your project.
        </p>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <form className="contact-form" action="#">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="you@company.com" />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Brand</label>
                <input type="text" id="company" placeholder="Your company name" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="theme-branding">Theme Branding</option>
                  <option value="events">Events</option>
                  <option value="btl-activations">BTL Activations</option>
                  <option value="branding-solutions">Branding Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" placeholder="Tell us about your project, goals, and timeline..." />
              </div>

              <div className="form-submit">
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message →
                </button>
              </div>
            </form>

            {/* Info Cards */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">📧</div>
                <h3>Email Us</h3>
                <a href="mailto:hello@infinitevision.com">hello@infinitevision.com</a>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <h3>Call Us</h3>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
                <p>Mon — Fri, 9:00 AM — 6:00 PM</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <h3>Visit Us</h3>
                <p>123 Creative Avenue<br />New York, NY 10001</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">🌐</div>
                <h3>Follow Us</h3>
                <p>Instagram • LinkedIn • X (Twitter) • YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
