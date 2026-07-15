"use client";

import { useEffect, useRef } from "react";
import "./outdoor.css";

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
        wdsContainerRef.current.querySelectorAll(".od-wds-item")
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
    <section className="od-eh-section">
      <div className="od-eh-container">
        <p className="od-eh-eyebrow">outdoor advertising</p>

        <h2 className="od-eh-heading">
          Commanding Attention Across Every
          <br />
          <span className="od-eh-gradient">Street, Skyline and Journey.</span>
        </h2>

        <div className="od-eh-banner">
          <img src="/Images/mercly.webp" alt="Events" />

          <div className="od-eh-banner-overlay">
            <h3 className="od-eh-banner-title">Outdoor Advertising</h3>
            <p className="od-eh-banner-subtitle">
             Attention and reach engineered into every location.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="od-wds-section">
      <div className="od-wds-container" ref={wdsContainerRef}>
        <h2 className="od-wds-heading">What We Do</h2>
 
        {/* ---- 01 : image left, text right ---- */}
        <div className="od-wds-item">
          <div className="od-wds-image">
            <img src="/Images/vcare.webp" alt="Corporate Events" />
          </div>
          <div className="od-wds-content">
            <span className="od-wds-number" id="Corporate">01</span>
            <h3 className="od-wds-title" id="Corporate">Unipole Center Medians</h3>
            <p className="od-wds-desc" id="Corporate">
           Maximize Brand Visibility with High-Impact Roadside Advertising.         
            </p>
            <p className="od-successful"id="Corporate">
             Unipoles and center median displays are among the most effective forms of outdoor advertising, offering continuous exposure to thousands of commuters every day. Strategically installed along highways, arterial roads, city entrances, and busy intersections, these advertising formats ensure your brand remains highly visible to both motorists and pedestrians.
            </p>
          </div>
        </div>
 
        {/* ---- 02 : text left, image right ---- */}
        <div className="od-wds-item od-wds-item-reverse od-wds-panel-product-launches">
          <div className="od-wds-image">
            <img src="/Images/brighter.webp" alt="Product Launches" />
          </div>
          <div className="od-wds-content">
            <span className="od-wds-number">02</span>
            <h3 className="od-wds-title">Pole Kiosk</h3>
            <p className="od-wds-desc">
            Capture Attention at Street Level.
            </p>
            
            <p className="od-successful">Pole kiosks are compact yet highly effective outdoor advertising solutions installed on streetlight and utility poles across busy roads, commercial areas, residential neighborhoods, and shopping districts. Their strategic placement at eye level ensures repeated exposure to pedestrians and motorists, making them an excellent choice for localized brand awareness and promotional campaigns.</p>
         
          </div>
        </div>
 
        {/* ---- 03 : image left, text right ---- */}
        <div className="od-wds-item od-wds-panel-awards-night">
          <div className="od-wds-image">
            <img src="/Images/pocket.webp" alt="Awards Ceremonies" />
          </div>
          <div className="od-wds-content">
            <span className="od-wds-number">03</span>
            <h3 className="od-wds-title">Hoardings</h3>
            <p className="od-wds-desc">
             Make a Bold Statement with Large-Format Outdoor Advertising.
            </p>
            <p className="od-successful">Hoardings are one of the most powerful and recognizable outdoor advertising mediums, delivering exceptional visibility and widespread brand exposure. Positioned along highways, city roads, commercial hubs, shopping districts, and high-traffic intersections, hoardings enable brands to communicate impactful messages to large audiences around the clock.</p>

          </div>
        </div>
 
      </div>
    </section>
     <section className="od-fp-section">
      <div className="od-fp-container2">
        <div className="od-fp-heading-row">
          <h2 className="od-fp-heading">Featured Projects</h2>
          <a href="/projects" className="od-fp-view-more">
            VIEW MORE <span className="od-fp-arrow">&rsaquo;</span>
          </a>
        </div>
 
        <div className="od-fp-grid">
          {/* ---- Card 1 (wide) ---- */}
          <article className="od-fp-card">
            <img
              src="/Images/mercly.webp"
              alt="Mirchi Awards"
              className="od-fp-card-image"
            />
            <div className="od-fp-card-overlay">
              <h3 className="od-fp-card-title">mercely’s icecream hoarding </h3>
              <a href="/projects/mirchi-awards" className="od-fp-card-link">
                View case study <span className="od-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 2 ---- */}
          <article className="od-fp-card">
            <img
              src="/Images/anuj.webp"
              alt="Music Concert"
              className="od-fp-card-image"
            />
            <div className="od-fp-card-overlay">
              <h3 className="od-fp-card-title">anuj tiles hoarding</h3>
              <a href="/projects/music-concert" className="od-fp-card-link">
                View case study <span className="od-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 3 ---- */}
          <article className="od-fp-card">
            <img
              src="/Images/pocket.webp"
              alt="V Care Opening Ceremony"
              className="od-fp-card-image"
            />
            <div className="od-fp-card-overlay">
              <h3 className="od-fp-card-title">parkville pole kiosk</h3>
              <a href="/projects/v-care-opening-ceremony" className="od-fp-card-link">
                View case study <span className="od-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  
    <section className="od-gal-section">
      <div className="od-gal-container">
        <div className="od-gal-heading-row">
          <h2 className="od-gal-heading">Gallery</h2>
          <a href="/gallery" className="od-gal-view-more">
            VIEW MORE <span>&rsaquo;</span>
          </a>
        </div>
      </div>

      {/* Single rope + badges image with live text overlaid on each tag.
          Label positions live in GallerySection.css (.od-gal-tag-1 ... .od-gal-tag-5) */}
      <div className="od-gal-image-wrap">
        <img
          src="/Images/gallery-img-outdoor.webp"
          alt="Gallery of Vision Infinite event badges"
          className="od-gal-image"
        />

        
      </div>
    </section>
    <section className="od-git-section">
      <div className="od-git-container">
        {/* Logo — replace src with your own file */}
        <img src="/Images/Vision.webp" alt="Vision Infinite" className="od-git-logo" />
 
        <h2 className="od-git-tagline">
          Let&rsquo;s build a real-world brand
          <br />
          experience.
        </h2>
 
        <p className="od-git-eyebrow">CONNECT US</p>
        <h3 className="od-git-heading">Get In Touch</h3>
 
        <div className="od-git-grid">
          {/* ---- Left: form ---- */}
          <form className="od-git-form">
            <div className="od-git-row">
              <div className="od-git-field">
                <label htmlFor="od-git-first-name">First Name</label>
                <input
                  id="od-git-first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
 
              <div className="od-git-field">
                <label htmlFor="od-git-mobile">Mobile Number</label>
                <input
                  id="od-git-mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91"
                  required
                />
              </div>
            </div>
 
            <div className="od-git-row">
              <div className="od-git-field">
                <label htmlFor="od-git-email">Email Address</label>
                <input
                  id="od-git-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
 
              <div className="od-git-field">
                <label htmlFor="od-git-service">Services Wanted</label>
                <select id="od-git-service" name="service" defaultValue="Events">
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
 
            <div className="od-git-field">
              <label htmlFor="od-git-message">Message</label>
              <textarea
                id="od-git-message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
              />
            </div>
 
            <button type="submit" className="od-git-submit">
              Send Message <span className="od-git-submit-icon">&#9655;</span>
            </button>
          </form>
 
          {/* ---- Right: image — replace src with your own file ---- */}
          <div className="od-git-image">
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
