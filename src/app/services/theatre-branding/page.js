"use client";

import { useEffect, useRef } from "react";
import "./theater.css";

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
        wdsContainerRef.current.querySelectorAll(".ev-wds-item")
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
    <section className="ev-eh-section">
      <div className="ev-eh-container">
        <p className="ev-eh-eyebrow">THEATRE BRANDING</p>

        <h2 className="ev-eh-heading">
          Turning Every Cinema Visit into a
          <br />
          <span className="ev-eh-gradient">Brand Experiences.</span>
        </h2>

        <div className="ev-eh-banner">
          <img src="/Images/theater.webp" alt="Events" />

          <div className="ev-eh-banner-overlay">
            <h3 className="ev-eh-banner-title">Events</h3>
            <p className="ev-eh-banner-subtitle">
              Large event stages, built for moments people remember.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="ev-wds-section">
      <div className="ev-wds-container" ref={wdsContainerRef}>
        {/* ---- 01 : image left, text right ---- */}
        <div className="ev-wds-item ev-wds-panel-1">
          <div className="ev-wds-image">
            <h2 className="ev-wds-heading">What We Do</h2>
            <img src="/Images/hall.webp" alt="Corporate Events" />
          </div>
          <div className="ev-wds-content">
            <span className="ev-wds-number">01</span>
            <h3 className="ev-wds-title">Theatre Lobby Branding</h3>
            <p className="ev-wds-desc">
              Capture your audience when they are fully engaged. Your brand takes center stage on the big screen through impactful video commercials displayed before the movie begins, ensuring maximum visibility and memorable brand recall.
            </p>
          </div>
        </div>
 
        {/* ---- 02 : text left, image right ---- */}
        <div className="ev-wds-item ev-wds-item-reverse ev-wds-panel-2">
          <div className="ev-wds-image">
            <img src="/Images/standee.webp" alt="Product Launches" />
          </div>
          <div className="ev-wds-content">
            <span className="ev-wds-number">02</span>
            <h3 className="ev-wds-title">Standee Displays</h3>
            <p className="ev-wds-desc">
             Transform theatre lobbies into immersive brand experiences. From entry points to waiting areas, we create high-impact branding environments that engage moviegoers before they enter the auditorium.
            </p>
          </div>
        </div>
 
        {/* ---- 03 : image left, text right ---- */}
        <div className="ev-wds-item ev-wds-panel-3">
          <div className="ev-wds-image">
            <img src="/Images/counter.webp" alt="Awards Ceremonies" />
          </div>
          <div className="ev-wds-content">
            <span className="ev-wds-number">03</span>
            <h3 className="ev-wds-title">Counter Branding</h3>
            <p className="ev-wds-desc">Make your campaign impossible to miss with strategically placed standees. Designed to attract attention and communicate your message instantly, they help drive awareness, promotions, and customer engagement.   Transform theatre lobbies into immersive brand experiences. From entry points to waiting areas, we create high-impact branding environments that engage moviegoers before they enter the auditorium.
            </p>
          </div>
        </div>
 
        {/* ---- 04 : text left, image right ---- */}
        <div className="ev-wds-item ev-wds-item-reverse ev-wds-panel-4">
          <div className="ev-wds-image">
            <img src="/Images/interior.webp" alt="Mini Concerts" />
          </div>
          <div className="ev-wds-content">
            <span className="ev-wds-number">04</span>
            <h3 className="ev-wds-title">Interior Branding</h3>
            <p className="ev-wds-desc">
             Turn every customer interaction into a branding opportunity. Our customized counter branding solutions enhance visibility at ticket counters, concession areas, and service desks, keeping your brand front and center.
            </p>
          </div>
        </div>
        {/* ---- 05 : image left, text right ---- */}
        <div className="ev-wds-item ev-wds-panel-5">
          <div className="ev-wds-image">
            <img src="/Images/onscreen.webp" alt="Awards Ceremonies" />
          </div>
          <div className="ev-wds-content">
            <span className="ev-wds-number">05</span>
            <h3 className="ev-wds-title">On Screen Advertising</h3>
            <p className="ev-wds-desc">
          Extend your brand presence throughout the cinema. We design and execute premium interior branding solutions across walls, pillars, pathways, seating areas, and other high-visibility spaces to create a lasting impression on every visitor.
            </p>
          </div>
        </div>
      </div>
    </section>
     <section className="ev-fp-section">
      <div className="ev-fp-container2">
        <div className="ev-fp-heading-row">
          <h2 className="ev-fp-heading">Featured Projects</h2>
          <a href="/projects" className="ev-fp-view-more">
            VIEW MORE <span className="ev-fp-arrow">&rsaquo;</span>
          </a>
        </div>
 
        <div className="ev-fp-grid">
          {/* ---- Card 1 (wide) ---- */}
          <article className="ev-fp-card">
            <img
              src="/Images/onscreen.webp"
              alt="Mirchi Awards"
              className="ev-fp-card-image"
            />
            <div className="ev-fp-card-overlay">
              <h3 className="ev-fp-card-title">MIRCHI AWARDS</h3>
              <a href="/works" className="ev-fp-card-link">
                View case study <span className="ev-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 2 ---- */}
          <article className="ev-fp-card">
            <img
              src="/Images/service-img-2.webp"
              alt="Music Concert"
              className="ev-fp-card-image"
            />
            <div className="ev-fp-card-overlay">
              <h3 className="ev-fp-card-title">MUSIC CONCERT</h3>
              <a href="/works" className="ev-fp-card-link">
                View case study <span className="ev-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 3 ---- */}
          <article className="ev-fp-card">
            <img
              src="/Images/service-img-3.webp"
              alt="V Care Opening Ceremony"
              className="ev-fp-card-image"
            />
            <div className="ev-fp-card-overlay">
              <h3 className="ev-fp-card-title">V CARE OPENING CEREMONY</h3>
              <a href="/works" className="ev-fp-card-link">
                View case study <span className="ev-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  
    <section className="ev-gal-section">
      <div className="ev-gal-container">
        <div className="ev-gal-heading-row">
          <h2 className="ev-gal-heading">Gallery</h2>
          <a href="/gallery" className="ev-gal-view-more">
            VIEW MORE <span>&rsaquo;</span>
          </a>
        </div>
      </div>

      {/* Single rope + badges image with live text overlaid on each tag.
          Label positions live in GallerySection.css (.ev-gal-tag-1 ... .ev-gal-tag-5) */}
      <div className="ev-gal-image-wrap">
        <img
          src="/Images/theater-img.webp"
          alt="Gallery of Vision Infinite event badges"
          className="ev-gal-image"
        />

        
      </div>
    </section>
    <section className="ev-git-section">
      <div className="ev-git-container">
        {/* Logo — replace src with your own file */}
        <img src="/Images/Vision.webp" alt="Vision Infinite" className="ev-git-logo" />
 
        <h2 className="ev-git-tagline">
          Let&rsquo;s build a real-world brand
          <br />
          experience.
        </h2>
 
        <p className="ev-git-eyebrow">CONNECT US</p>
        <h3 className="ev-git-heading">Get In Touch</h3>
 
        <div className="ev-git-grid">
          {/* ---- Left: form ---- */}
          <form className="ev-git-form">
            <div className="ev-git-row">
              <div className="ev-git-field">
                <label htmlFor="git-first-name">First Name</label>
                <input
                  id="git-first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
 
              <div className="ev-git-field">
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
 
            <div className="ev-git-row">
              <div className="ev-git-field">
                <label htmlFor="git-email">Email Address</label>
                <input
                  id="git-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
 
              <div className="ev-git-field">
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
 
            <div className="ev-git-field">
              <label htmlFor="git-message">Message</label>
              <textarea
                id="git-message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
              />
            </div>
 
            <button type="submit" className="ev-git-submit">
              Send Message <span className="ev-git-submit-icon">&#9655;</span>
            </button>
          </form>
 
          {/* ---- Right: image — replace src with your own file ---- */}
          <div className="ev-git-image">
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
