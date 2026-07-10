import Image from "next/image";
import React from "react";
import "./Services.css";

const images = [
  "/Images/box-1.webp",
  "/Images/box-2.webp",
  "/Images/box-3.webp",
  "/Images/box-4.webp",
  "/Images/box-5.webp",
  "/Images/box-6.webp",
  "/Images/box-7.webp",
  "/Images/box-8.webp",
];

const orbitCards = [
  { src: images[7], className: "orbit-card-1", w: 205, h: 148 },
  { src: images[0], className: "orbit-card-2", w: 205, h: 148 },
  { src: images[1], className: "orbit-card-3", w: 205, h: 148 },
  { src: images[6], className: "orbit-card-4", w: 205, h: 148 },
  { src: images[2], className: "orbit-card-5", w: 205, h: 148 },
  { src: images[5], className: "orbit-card-6", w: 205, h: 148 },
  { src: images[4], className: "orbit-card-7", w: 205, h: 148 },
  { src: images[3], className: "orbit-card-8", w: 205, h: 148 },
];

const filmVideos = [
  "/Videos/Video1.mp4",
  "/Videos/Video2.mp4",
  "/Videos/Video3.mp4",
  "/Videos/Video4.mp4",
  "/Videos/Video5.mp4",
  "/Videos/Video6.mp4",
];

const allVideos = [...filmVideos, ...filmVideos];

const categories = [
  {
    title: "Theatre Branding",
    bgClass: "category-card-theatre",
    image: "/Images/box-1.webp",
    tags: [
      { text: "On-screen cinema advertising", className: "category-tag-theatre-1" },
      { text: "Counter branding", className: "category-tag-theatre-2" },
      { text: "Theatre/lobby branding", className: "category-tag-theatre-3" },
      { text: "Interior theatre branding", className: "category-tag-theatre-4" },
    ],
  },
  {
    title: "Events",
    bgClass: "category-card-events",
    image: "/Images/Service2.svg",
    tags: [
      { text: "Conferences", className: "category-tag-events-1" },
      { text: "Awards ceremonies", className: "category-tag-events-2" },
      { text: "Gala events", className: "category-tag-events-3" },
      { text: "Product launches", className: "category-tag-events-4" },
    ],
  },
  {
    title: "BTL Activations",
    bgClass: "category-card-btl",
    image: "/Images/Service3.svg",
    tags: [
      { text: "Apartment & corporate activations", className: "category-tag-btl-1" },
      { text: "Auto branding", className: "category-tag-btl-2" },
      { text: "Centre zone campaigns", className: "category-tag-btl-3" },
      { text: "Lookwalker & leaflet distribution", className: "category-tag-btl-4" },
    ],
  },
  {
    title: "Branding Solutions",
    bgClass: "category-card-branding",
    image: "/Images/Service4.svg",
    tags: [
      { text: "Wall painting", className: "category-tag-branding-1" },
      { text: "Signages", className: "category-tag-branding-2" },
      { text: "Temporary hoardings", className: "category-tag-branding-3" },
      { text: "Poll kiosks & parking boards", className: "category-tag-branding-4" },
    ],
  },
  {
    title: "Outdoor Advertising",
    bgClass: "category-card-outdoor",
    image: "/Images/Service5.svg",
    tags: [
      { text: "Unipole center medians", className: "category-tag-outdoor-1" },
      { text: "Pole kiosks", className: "category-tag-outdoor-2" },
      { text: "Hoardings", className: "category-tag-outdoor-3" },
    ],
  },
];

export default function services() {
  return (
    <>
      {/* ── Orbit Grid Section ──────────────────────────── */}
      <section className="services">
        <div className="services-container">
          <div className="services-heading">
            <p>What We Do</p>
            <h2>
              Every service is an <br />
              <span>experience.</span>
            </h2>
          </div>

          <div className="orbit-wrapper">
            {orbitCards.map((card, i) => (
              <div
                key={i}
                className={`orbit-card ${card.className}`}
              >
                <Image
                  src={card.src}
                  alt={`Service ${i + 1}`}
                  width={card.w}
                  height={card.h}
                  className="orbit-card-image"
                />
              </div>
            ))}

            <div className="orbit-center">
              <Image
                src="/Images/Vision.webp"
                alt="Infinity"
                width={90}
                height={60}
                className="orbit-center-logo"
              />
              <h3>Every Brand Has a</h3>
              <span>Story.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Film Strip Section ──────────────────────────── */}
      <section className="filmstrip-section">
        <div className="filmstrip-wrapper">
          <div className="filmstrip-reel">
            <div className="filmstrip-scroll">
              <div className="sprocket-row top">
                {Array.from({ length: 150 }).map((_, i) => (
                  <span key={i} className="sprocket-hole" />
                ))}
              </div>

              <div className="filmstrip-track">
                {allVideos.map((src, i) => (
                  <div key={i} className="film-frame">
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="film-frame-video"
                    />
                  </div>
                ))}
              </div>

              <div className="sprocket-row bottom">
                {Array.from({ length: 150 }).map((_, i) => (
                  <span key={i} className="sprocket-hole" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories Section ──────────────────────────── */}
      <section className="categories-section">
        <div className="categories-container">
          <div className="categories-grid">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`category-card ${cat.bgClass}`}
              >
                <h3 className="category-title">{cat.title}</h3>

                <div className="category-image-wrapper">
                  <div className="category-image-inner">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="category-image"
                    />
                  </div>

                  {cat.tags.map((tag, i) => (
                    <div
                      key={i}
                      className={`category-tag ${tag.className}`}
                    >
                      {tag.text}
                    </div>
                  ))}
                </div>

                <button className="explore-btn">
                  Explore &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────── */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <Image src="/Images/Vision.webp" alt="Infinity Logo" width={60} height={40} />
            <h2>Let’s build a real-world brand<br />experience.</h2>
            <p className="contact-subtitle">CONNECT US</p>
            <h3>Get In Touch</h3>
          </div>

          <div className="contact-content">
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="text" placeholder="+91" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Services Wanted</label>
                  <select defaultValue="Events">
                    <option value="Events">Events</option>
                    <option value="Theatre Branding">Theatre Branding</option>
                    <option value="BTL Activations">BTL Activations</option>
                    <option value="Outdoor Advertising">Outdoor Advertising</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="send-btn">
                Send Message
                <svg className="send-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>

            <div className="contact-image">
              <div className="contact-image-wrapper">
                <video
                  src="/Videos/Video3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="contact-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
