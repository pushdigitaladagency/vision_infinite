import Image from "next/image";
import Link from "next/link";
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
];

const allVideos = [...filmVideos, ...filmVideos, ...filmVideos, ...filmVideos];

const categories = [
  {
    title: "Theatre Branding",
    href: "/services/theatre-branding",
    bgClass: "category-card-theatre",
    image: "/Images/blue.webp",
    tags: [
      { text: "On-screen cinema advertising", className: "category-tag-theatre-1" },
      { text: "Counter branding", className: "category-tag-theatre-2" },
      { text: "Theatre/lobby branding", className: "category-tag-theatre-3" },
      { text: "Interior theatre branding", className: "category-tag-theatre-4" },
    ],
  },
  {
    title: "Events",
    href: "/services/events",
    bgClass: "category-card-events",
    image: "/Images/green.webp",
    tags: [
      { text: "Conferences", className: "category-tag-events-1" },
      { text: "Awards ceremonies", className: "category-tag-events-2" },
      { text: "Gala events", className: "category-tag-events-3" },
      { text: "Product launches", className: "category-tag-events-4" },
    ],
  },
  {
    title: "BTL Activations",
    href: "/services/btl-activations",
    bgClass: "category-card-btl",
    image: "/Images/sky.webp",
    tags: [
      { text: "Apartment & corporate activations", className: "category-tag-btl-1" },
      { text: "Auto branding", className: "category-tag-btl-2" },
      { text: "Centre zone campaigns", className: "category-tag-btl-3" },
      { text: "Lookwalker & leaflet distribution", className: "category-tag-btl-4" },
    ],
  },
  {
    title: "Branding Solutions",
    href: "/services/branding",
    bgClass: "category-card-branding",
    image: "/Images/pink.webp",
    tags: [
      { text: "Wall painting", className: "category-tag-branding-1" },
      { text: "Signages", className: "category-tag-branding-2" },
      { text: "Temporary hoardings", className: "category-tag-branding-3" },
      { text: "Poll kiosks & parking boards", className: "category-tag-branding-4" },
    ],
  },
  {
    title: "Outdoor Advertising",
    href: "/services/outdoor-advertising",
    bgClass: "category-card-outdoor",
    image: "/Images/white.webp",
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
            {categories.map((cat, index) => {
              const Card = cat.href ? Link : "div";

              return (
                <Card
                  key={index}
                  href={cat.href}
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

                  <span className="explore-btn">
                  Explore &rarr;
                  </span>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────── */}
      <section className="git-section">
      <div className="git-container">
        {/* Logo — replace src with your own file */}
        <img src="/Images/Vision.webp" alt="Vision Infinite" className="git-logo" />
 
        <h2 className="git-tagline">
          Let&rsquo;s build a real-world brand
          <br />
          experience.
        </h2>
 
        <p className="git-eyebrow">CONNECT US</p>
        <h3 className="git-heading">Get In Touch</h3>
 
        <div className="git-grid">
          {/* ---- Left: form ---- */}
          <form className="git-form">
            <div className="git-row">
              <div className="git-field">
                <label htmlFor="git-first-name">First Name</label>
                <input
                  id="git-first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
 
              <div className="git-field">
                <label htmlFor="git-mobile">Mobile Number</label>
                <input
                  id="git-mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91"
                  required
                />
              </div>
            </div>
 
            <div className="git-row">
              <div className="git-field">
                <label htmlFor="git-email">Email Address</label>
                <input
                  id="git-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
 
              <div className="git-field">
                <label htmlFor="git-service">Services Wanted</label>
                <select id="git-service" name="service" defaultValue="Events">
                  <option value="Events">Events</option>
                  <option value="Theatre Branding">Theatre Branding</option>
                  <option value="Mall Activations">Mall Activations</option>
                  <option value="Exhibition Pavilions">
                    Exhibition Pavilions
                  </option>
                  <option value="Product Launches">Product Launches</option>
                </select>
              </div>
            </div>
 
            <div className="git-field">
              <label htmlFor="git-message">Message</label>
              <textarea
                id="git-message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
              />
            </div>
 
            <button type="submit" className="git-submit">
              Send Message <span className="git-submit-icon">&#9655;</span>
            </button>
          </form>
 
          {/* ---- Right: image — replace src with your own file ---- */}
          <div className="git-image">
            <video autoPlay muted loop playsInline preload="auto">
              <source src="/Videos/Video3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
