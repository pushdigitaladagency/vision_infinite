"use client";

import { useEffect, useRef } from "react";
import "./branding.css";

const loadWdsScript = (src) =>
  new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }

      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.loaded = "false";
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    });
    script.addEventListener("error", reject);
    document.head.appendChild(script);
  });

export default function EventsHero() {
  const wdsContainerRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;
    let scrollTriggers = [];
    let refreshFrame;

    const setupWdsScroll = async () => {
      await loadWdsScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
      await loadWdsScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");

      if (isCancelled || !wdsContainerRef.current || !window.gsap || !window.ScrollTrigger) {
        return;
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const panels = Array.from(
        wdsContainerRef.current.querySelectorAll(".br-wds-item")
      );

      if (panels.length < 2) {
        return;
      }

      panels.forEach((panel) => {
        panel.style.removeProperty("z-index");
      });

      const lastPinnedIndex = panels.length - 2;
      const pins = panels
        .slice(0, panels.length - 1)
        .map((panel, index) =>
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
            anticipatePin: index < lastPinnedIndex ? 1 : 0,
          })
        );

      scrollTriggers = [...pins];
      refreshFrame = requestAnimationFrame(() => {
        if (!isCancelled) {
          ScrollTrigger.refresh();
        }
      });
    };

    setupWdsScroll();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(refreshFrame);
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    <section className="br-eh-section">
      <div className="br-eh-container">
        <p className="br-eh-eyebrow">BRANDING SOLUTIONS</p>

        <h2 className="br-eh-heading">
        Shaping Distinctive Identities
          <br />
          <span className="br-eh-gradient">Built to Inspire and Endure.</span>
        </h2>

        <div className="br-eh-banner">
          <img src="/Images/branding-1.webp" alt="Events" />

          <div className="br-eh-banner-overlay">
            <h3 className="br-eh-banner-title">Branding Solutions</h3>
            <p className="br-eh-banner-subtitle">
       Signage and retail branding built like architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="br-wds-section">
      <div className="br-wds-container" ref={wdsContainerRef}>
        <h2 className="br-wds-heading">What We Do</h2>
 
        {/* ---- 01 : image left, text right ---- */}
        <div className="br-wds-item">
          <div className="br-wds-image">
            <img src="/Images/croma-1.webp" alt="Corporate Events" />
          </div>
          <div className="br-wds-content">
            <span className="br-wds-number" id="Corporate">01</span>
            <h3 className="br-wds-title" id="Corporate">Point of Purchase (POP) Branding</h3>
            <p className="br-wds-desc" id="Corporate">
            Influence Buying Decisions Right Where It Matters.       
            </p>
            <p className="br-successful"id="Corporate">
             Point of Purchase (POP) branding is designed to capture customer attention at the exact moment they are making purchasing decisions. Attractive displays, shelf branding, standees, and promotional materials increase product visibility, encourage impulse buying, and strengthen brand recall inside retail environments.
            </p>
          </div>
        </div>
 
        {/* ---- 02 : text left, image right ---- */}
        <div className="br-wds-item br-wds-item-reverse br-wds-panel-product-launches">
          <div className="br-wds-image">
            <img src="/Images/croma-2.webp" alt="Product Launches" />
          </div>
          <div className="br-wds-content">
            <span className="br-wds-number">02</span>
            <h3 className="br-wds-title">Signages</h3>
            <p className="br-wds-desc">
           Create a Strong First Impression with Premium Signage Solutions.
            </p>
            
            <p className="br-successful">Your signage is often the first interaction customers have with your business. A professionally designed and installed sign not only improves visibility but also reinforces your brand identity. We design, manufacture, and install customized signage solutions that help businesses stand out both day and night.</p>
          </div>
        </div>
 
        {/* ---- 03 : image left, text right ---- */}
        <div className="br-wds-item br-wds-panel-awards-night">
          <div className="br-wds-image">
            <img src="/Images/vasanth.webp" alt="Awards Ceremonies" />
          </div>
          <div className="br-wds-content">
            <span className="br-wds-number">03</span>
            <h3 className="br-wds-title">Temporary Hoardings</h3>
            <p className="br-wds-desc">
           Short-Term Advertising with Long-Term Impact.
            </p>
            <p className="br-successful">Temporary hoardings are one of the most effective outdoor advertising solutions for product launches, seasonal promotions, festivals, political campaigns, real estate projects, and event marketing. Positioned in high-traffic areas, temporary hoardings provide massive visibility while allowing brands to run flexible promotional campaigns.</p>
            
          </div>
        </div>
 
        {/* ---- 04 : text left, image right ---- */}
        <div className="br-wds-item br-wds-item-reverse">
          <div className="br-wds-image">
            <img src="/Images/vasanth-2.webp" alt="Mini Concerts" />
          </div>
          <div className="br-wds-content">
            <span className="br-wds-number">04</span>
            <h3 className="br-wds-title">Wall Painting</h3>
            <p className="br-wds-desc">
             Transform Blank Walls into Powerful Brand Stories.
            </p>
            <p className="br-successful">Wall painting is one of the most impactful forms of outdoor advertising. It transforms ordinary walls into eye-catching brand assets that remain visible to thousands of people every day. Whether it's promoting a product, increasing brand awareness, or communicating social messages, professionally executed wall paintings create lasting impressions while blending creativity with strategic placement.</p>

          </div>
        </div>
          <div className="br-wds-item br-wds-item-reverse br-wds-panel-mini-concerts">
          <div className="br-wds-image">
            <img src="/Images/paper.webp" alt="Mini Concerts" />
          </div>
          <div className="br-wds-content">
            <span className="br-wds-number">05</span>
            <h3 className="br-wds-title">Wall Posters & Parking Boards</h3>
            <p className="br-wds-desc">
             Smart Branding Solutions for Everyday Visibility.
            </p>
            <p className="br-successful">Wall posters and parking boards are practical branding tools that deliver continuous visibility while guiding customers and reinforcing your brand presence. Wall posters are ideal for promotional campaigns, product advertisements, educational communication, and awareness drives, while parking boards improve navigation and enhance the professional appearance of commercial spaces.</p>
           
          </div>
        </div>
      </div>
    </section>
     <section className="br-fp-section">
      <div className="br-fp-container2">
        <div className="br-fp-heading-row">
          <h2 className="br-fp-heading">Featured Projects</h2>
          <a href="/projects" className="br-fp-view-more">
            VIEW MORE <span className="br-fp-arrow">&rsaquo;</span>
          </a>
        </div>
 
        <div className="br-fp-grid">
          {/* ---- Card 1 (wide) ---- */}
          <article className="br-fp-card">
            <img
              src="/Images/brand-vasanth.webp"
              alt="Mirchi Awards"
              className="br-fp-card-image"
            />
            <div className="br-fp-card-overlay">
              <h3 className="br-fp-card-title">VASANTH & CO BRANDING</h3>
              <a href="/projects/mirchi-awards" className="br-fp-card-link">
                View case study <span className="br-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 2 ---- */}
          <article className="br-fp-card">
            <img
              src="/Images/brand-service.webp"
              alt="Music Concert"
              className="br-fp-card-image"
            />
            <div className="br-fp-card-overlay">
              <h3 className="br-fp-card-title">NAIDU HALL BRANDING</h3>
              <a href="/projects/music-concert" className="br-fp-card-link">
                View case study <span className="br-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 3 ---- */}
          <article className="br-fp-card">
            <img
              src="/Images/icecream.webp"
              alt="V Care Opening Ceremony"
              className="br-fp-card-image"
            />
            <div className="br-fp-card-overlay">
              <h3 className="br-fp-card-title">MERCELY'S BRANDING – WALL POSTER</h3>
              <a href="/projects/v-care-opening-ceremony" className="br-fp-card-link">
                View case study <span className="br-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  
    <section className="br-gal-section">
      <div className="br-gal-container">
        <div className="br-gal-heading-row">
          <h2 className="br-gal-heading">Gallery</h2>
          <a href="/gallery" className="br-gal-view-more">
            VIEW MORE <span>&rsaquo;</span>
          </a>
        </div>
      </div>

      {/* Single rope + badges image with live text overlaid on each tag.
          Label positions live in GallerySection.css (.br-gal-tag-1 ... .br-gal-tag-5) */}
          <div className="fw-section">
            <img
              src="/Images/background-img.webp"
              alt="V Care Hair Therapy"
              className="fw-bg-image"
            />
      <div className="fw-row">
        {/* ---- Frame 1 ---- */}
        <div className="fw-frame">
          <div className="fw-image">
            <img src="/Images/welcome.webp" alt="V Care Opening Ceremony" />
          </div>
        </div>
 
        {/* ---- Frame 2 ---- */}
        <div className="fw-frame">
          <div className="fw-image">
            <img src="/Images/paper-branding.webp" alt="V Care Hair Therapy" />
          </div>
        </div>
 
        {/* ---- Frame 3 ---- */}
        <div className="fw-frame">
          <div className="fw-image">
            <img src="/Images/icecream.webp" alt="Mercely's Ice Cream" />
          </div>
        </div>
        </div>
      </div>
    </section>
    <section className="br-git-section">
      <div className="br-git-container">
        {/* Logo — replace src with your own file */}
        <img src="/Images/Vision.webp" alt="Vision Infinite" className="br-git-logo" />
 
        <h2 className="br-git-tagline">
          Let&rsquo;s build a real-world brand
          <br />
          experience.
        </h2>
 
        <p className="br-git-eyebrow">CONNECT US</p>
        <h3 className="br-git-heading">Get In Touch</h3>
 
        <div className="br-git-grid">
          {/* ---- Left: form ---- */}
          <form className="br-git-form">
            <div className="br-git-row">
              <div className="br-git-field">
                <label htmlFor="br-git-first-name">First Name</label>
                <input
                  id="br-git-first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
 
              <div className="br-git-field">
                <label htmlFor="br-git-mobile">Mobile Number</label>
                <input
                  id="br-git-mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91"
                  required
                />
              </div>
            </div>
 
            <div className="br-git-row">
              <div className="br-git-field">
                <label htmlFor="br-git-email">Email Address</label>
                <input
                  id="br-git-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
 
              <div className="br-git-field">
                <label htmlFor="br-git-service">Services Wanted</label>
                <select id="br-git-service" name="service" defaultValue="Events">
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
 
            <div className="br-git-field">
              <label htmlFor="br-git-message">Message</label>
              <textarea
                id="br-git-message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
              />
            </div>
 
            <button type="submit" className="br-git-submit">
              Send Message <span className="br-git-submit-icon">&#9655;</span>
            </button>
          </form>
 
          {/* ---- Right: image — replace src with your own file ---- */}
          <div className="br-git-image">
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
