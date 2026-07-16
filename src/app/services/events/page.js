"use client";

import { useEffect, useRef } from "react";
import "./events.css";

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
        wdsContainerRef.current.querySelectorAll(".wds-item")
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
    <section className="eh-section">
      <div className="eh-container">
        <p className="eh-eyebrow">EVENTS</p>

        <h2 className="eh-heading">
          Extraordinary events, crafted for
          <br />
          <span className="eh-gradient">Unforgettable Experiences.</span>
        </h2>

        <div className="eh-banner">
          <img src="/Images/events.webp" alt="Events" />

          <div className="eh-banner-overlay">
            <h3 className="eh-banner-title">Events</h3>
            <p className="eh-banner-subtitle">
              Large event stages, built for moments people remember.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="wds-section">
      <div className="wds-container" ref={wdsContainerRef}>
        <h2 className="wds-heading">What We Do</h2>
 
        {/* ---- 01 : image left, text right ---- */}
        <div className="wds-item">
          <div className="wds-image">
            <img src="/Images/stage-1.webp" alt="Corporate Events" />
          </div>
          <div className="wds-content">
            <span className="wds-number" id="Corporate">01</span>
            <h3 className="wds-title" id="Corporate">Corporate Events</h3>
            <p className="wds-desc" id="Corporate">
            Professional Conference Management That Inspires Collaboration.         
            </p>
            <p className="successful"id="Corporate">
              A successful conference is more than a gathering -it's an opportunity to exchange ideas, strengthen relationships, and create meaningful business connections. We specialize in planning and executing professional conferences that reflect your organization's vision while ensuring a seamless experience for speakers, delegates, and attendees.
            </p>
          </div>
        </div>
 
        {/* ---- 02 : text left, image right ---- */}
        <div className="wds-item wds-item-reverse wds-panel-product-launches">
          <div className="wds-image">
            <img src="/Images/stage-2.webp" alt="Product Launches" />
          </div>
          <div className="wds-content">
            <span className="wds-number">02</span>
            <h3 className="wds-title">Product Launches</h3>
            <p className="wds-desc">
             Launch Your Product with Maximum Impact.
            </p>
            
            <p className="successful">A product launch is your brand's opportunity to make a memorable first impression. We design high-impact launch events that build excitement, generate media attention, engage customers, and position your product for success.</p>
          <p className="successful">Whether you're introducing a new product, unveiling a service, or entering a new market, our team creates immersive launch experiences that combine creativity, technology, and strategic event planning to ensure your message reaches the right audience.</p>
          </div>
        </div>
 
        {/* ---- 03 : image left, text right ---- */}
        <div className="wds-item wds-panel-awards-night">
          <div className="wds-image">
            <img src="/Images/stage-3.webp" alt="Awards Ceremonies" />
          </div>
          <div className="wds-content">
            <span className="wds-number">03</span>
            <h3 className="wds-title">Awards Night</h3>
            <p className="wds-desc">
             Create Unforgettable Live Entertainment Experiences.
            </p>
            <p className="successful">Mini concerts are an exciting way to connect audiences with your brand through music, entertainment, and live performances. Whether organized for corporate celebrations, product launches, festivals, college events, shopping malls, or public gatherings, our concerts are designed to captivate audiences and create lasting impressions.</p>
            <p className="successful-2" >Our experienced team handles artist coordination, technical production, stage design, audience management, and event logistics to ensure every performance is memorable.</p>

          </div>
        </div>
 
        {/* ---- 04 : text left, image right ---- */}
        <div className="wds-item wds-item-reverse">
          <div className="wds-image">
            <img src="/Images/stage-4.webp" alt="Mini Concerts" />
          </div>
          <div className="wds-content">
            <span className="wds-number">04</span>
            <h3 className="wds-title">Mini Concerts</h3>
            <p className="wds-desc">
             Celebrate Excellence with Memorable Award Events.
            </p>
            <p className="successful">Awards ceremonies recognize achievements, inspire excellence, and strengthen organizational culture. We create elegant and professionally managed award events that celebrate success while delivering a premium experience for nominees, winners, guests, and stakeholders.</p>
            <p className="successful-2">Our team combines creative stage production, engaging presentations, and meticulous event coordination to deliver ceremonies that leave lasting memories.</p>
          </div>
        </div>
      </div>
    </section>
     <section className="fp-section">
      <div className="fp-container2">
        <div className="fp-heading-row">
          <h2 className="fp-heading">Featured Projects</h2>
          <a href="/projects" className="fp-view-more">
            VIEW MORE <span className="fp-arrow">&rsaquo;</span>
          </a>
        </div>
 
        <div className="fp-grid">
          {/* ---- Card 1 (wide) ---- */}
          <article className="fp-card">
            <img
              src="/Images/service-img-1.webp"
              alt="Mirchi Awards"
              className="fp-card-image"
            />
            <div className="fp-card-overlay">
              <h3 className="fp-card-title">MIRCHI AWARDS</h3>
              <a href="/projects/mirchi-awards" className="fp-card-link">
                View case study <span className="fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 2 ---- */}
          <article className="fp-card">
            <img
              src="/Images/service-img-2.webp"
              alt="Music Concert"
              className="fp-card-image"
            />
            <div className="fp-card-overlay">
              <h3 className="fp-card-title">MUSIC CONCERT</h3>
              <a href="/projects/music-concert" className="fp-card-link">
                View case study <span className="fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 3 ---- */}
          <article className="fp-card">
            <img
              src="/Images/service-img-3.webp"
              alt="V Care Opening Ceremony"
              className="fp-card-image"
            />
            <div className="fp-card-overlay">
              <h3 className="fp-card-title">V CARE OPENING CEREMONY</h3>
              <a href="/projects/v-care-opening-ceremony" className="fp-card-link">
                View case study <span className="fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  
    <section className="gal-section">
      <div className="gal-container">
        <div className="gal-heading-row">
          <h2 className="gal-heading">Gallery</h2>
          <a href="/gallery" className="gal-view-more">
            VIEW MORE <span>&rsaquo;</span>
          </a>
        </div>
      </div>

      {/* Single rope + badges image with live text overlaid on each tag.
          Label positions live in GallerySection.css (.gal-tag-1 ... .gal-tag-5) */}
      <div className="gal-image-wrap">
        <img
          src="/Images/tag.webp"
          alt="Gallery of Vision Infinite event badges"
          className="gal-image"
        />

        {/* ---- Tag 1 ---- */}
        <div className="gal-tag-label gal-tag-1">
          <p className="gal-tag-category">AWARDS NIGHT</p>
          <p className="gal-tag-title">MIRCHI AWARDS</p>
        </div>

        {/* ---- Tag 2 ---- */}
        <div className="gal-tag-label gal-tag-2">
          <p className="gal-tag-category">CORPORATE EVENTS</p>
          <p className="gal-tag-title">CONSULTANT MEET</p>
        </div>

        {/* ---- Tag 3 ---- */}
        <div className="gal-tag-label gal-tag-3">
          <p className="gal-tag-category">MINI CONCERTS</p>
          <p className="gal-tag-title">MUSIC CONCERT</p>
        </div>

        {/* ---- Tag 4 ---- */}
        <div className="gal-tag-label gal-tag-4">
          <p className="gal-tag-category">PRODUCT LAUNCHES</p>
          <p className="gal-tag-title">MERCELY&rsquo;S ICECREAM</p>
        </div>

        {/* ---- Tag 5 ---- */}
        <div className="gal-tag-label gal-tag-5">
          <p className="gal-tag-category">PRODUCT LAUNCHES</p>
          <p className="gal-tag-title">MARKET OF INDIA</p>
        </div>

        <span className="gal-vip-label gal-vip-1">VIP ACCESS</span>
        <span className="gal-vip-label gal-vip-2">VIP ACCESS</span>
        <span className="gal-vip-label gal-vip-3">VIP ACCESS</span>
        <span className="gal-vip-label gal-vip-4">VIP ACCESS</span>
        <span className="gal-vip-label gal-vip-5">VIP ACCESS</span>
      </div>
    </section>
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
