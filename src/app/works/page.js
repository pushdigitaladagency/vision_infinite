
"use client";

import { useState } from "react";
import "./works.css";

const PR_FILTERS = [
  "All",
  "Theatre",
  "Events",
  "BTL",
  "Branding",
  "Outdoor Advertising",
];

const PR_PROJECTS = [
  {
    id: 1,
    category: "Theatre",
    client: "Cinemas",
    title: "Cinema Lobby",
    image: "/Images/brand-service.webp",
    href: "/projects/cinema-lobby",
  },
  {
    id: 2,
    category: "Events",
    client: "Mercely's",
    title: "Fabrication",
    image: "/Images/BTL.webp",
    href: "/projects/mercelys-fabrication",
  },
  {
    id: 3,
    category: "Events",
    client: "Market Of India",
    title: "Fabrication",
    image: "/Images/box-6.webp",
    href: "/projects/market-of-india-fabrication",
  },
  {
    id: 4,
    category: "Events",
    client: "Sky Towers",
    title: "Fabrication",
    image: "/Images/box-1.webp",
    href: "/projects/sky-towers-fabrication",
  },
  {
    id: 5,
    category: "BTL",
    client: "Naidu Hall",
    title: "Wall Branding",
    image: "/Images/naidu.png",
    href: "/projects/naidu-hall-wall-branding",
  },
  {
    id: 6,
    category: "Branding",
    client: "SPR City",
    title: "Fabrication and Branding",
    image: "/Images/box-7.webp",
    href: "/projects/spr-city",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? PR_PROJECTS
      : PR_PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <>
    <section className="pr-section">
      <div className="pr-container">
        <p className="pr-eyebrow">OUR WORKS</p>

        <h2 className="pr-heading">Projects</h2>

        <p className="pr-subtitle">
          A case-study-driven portfolio. Execution over description.
        </p>

        {/* ---- Filter tabs ---- */}
        <div className="pr-filters">
          {PR_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? "pr-filter pr-filter-active"
                  : "pr-filter"
              }
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === "All" ? "ALL" : filter}
            </button>
          ))}
        </div>

        {/* ---- Project grid ---- */}
        <div className="pr-grid">
          {visibleProjects.map((project) => (
            <a key={project.id} href={project.href} className="pr-card">
              <div className="pr-card-image">
                <img
                  src={project.image}
                  alt={`${project.client} — ${project.title}`}
                />
              </div>

              <p className="pr-card-meta">
                {project.category} <span className="pr-card-dot">&middot;</span>{" "}
                {project.client}
              </p>
              <h3 className="pr-card-title">{project.title}</h3>
            </a>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="pr-empty">
            No projects in this category yet. Pick another filter to keep
            browsing.
          </p>
        )}
      </div>
    </section>

    <section className="git-section">
      <div className="git-container">
        <img src="/Images/Vision.webp" alt="Vision Infinite" className="git-logo" />

        <h2 className="git-tagline">
          Let&rsquo;s build a real-world brand
          <br />
          experience.
        </h2>

        <p className="git-eyebrow">CONNECT US</p>
        <h3 className="git-heading">Get In Touch</h3>

        <div className="git-grid">
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
