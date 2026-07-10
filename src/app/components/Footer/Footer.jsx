import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <img src="/Images/Vision Infinite.svg" alt="Vision Infinite" />
          </div>
          <p className="footer-description">
            Experiential branding &amp; event solutions.<br />
            Where brands become experiences.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">SERVICES</h4>
          <ul className="footer-links">
            <li><a href="#">Theatre Branding</a></li>
            <li><a href="#">BTL Activations</a></li>
            <li><a href="#">Branding Solutions</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">COMPANY</h4>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Process</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">CONNECT</h4>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4 className="footer-heading">GET IN TOUCH</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span className="contact-text">No: 3, Third Floor, Kasi Talkies,<br/>Jafferkhanpet, Chennai - 83</span>
            </li>
            <li>
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <span className="contact-text">+91 9500030641</span>
            </li>
            <li>
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <span className="contact-text">
                <a href="mailto:krishna.p@visioninfinite.co">krishna.p@visioninfinite.co</a><br/>
                <a href="mailto:visioninfinite.net@gmail.com">visioninfinite.net@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2026 Vision Infinite. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;