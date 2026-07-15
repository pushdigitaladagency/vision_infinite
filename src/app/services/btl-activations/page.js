"use client";

import { useEffect, useRef } from "react";
import "./btl.css";

const loadBtlScript = (src) =>
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

const waitForBtlImages = (container) => {
  const images = Array.from(container?.querySelectorAll("img") || []);

  return Promise.all(
    images.map((image) => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    })
  );
};

export default function EventsHero() {
  const btlHeroRef = useRef(null);
  const wdsContainerRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;
    let scrollTriggers = [];
    let refreshFrame;
    let refreshTimeout;
    const previousScrollRestoration = window.history.scrollRestoration;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const keepHeroVisible = (gsapInstance) => {
      const hero = btlHeroRef.current;

      if (!hero) {
        return;
      }

      const heroElements = [
        hero,
        ...hero.querySelectorAll(
          ".btl-eh-container, .btl-eh-eyebrow, .btl-eh-heading, .btl-eh-gradient, .btl-eh-banner, .btl-eh-banner-overlay"
        ),
      ];

      if (gsapInstance) {
        gsapInstance.set(heroElements, {
          clearProps: "opacity,visibility,transform",
        });
        return;
      }

      heroElements.forEach((element) => {
        element.style.removeProperty("opacity");
        element.style.removeProperty("visibility");
        element.style.removeProperty("transform");
      });
    };

    const setupBtlScroll = async () => {
      keepHeroVisible();

      await loadBtlScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
      await loadBtlScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");

      if (isCancelled || !wdsContainerRef.current || !window.gsap || !window.ScrollTrigger) {
        return;
      }

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);
      keepHeroVisible(gsap);
      ScrollTrigger.clearScrollMemory?.("manual");

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && btlHeroRef.current?.contains(trigger.trigger)) {
          trigger.kill();
        }
      });

      // Grab panels scoped ONLY to this page's wrapper
      const panels = Array.from(
        wdsContainerRef.current.querySelectorAll(".btl-wds-panel")
      );

      if (panels.length < 2) {
        return;
      }

      await waitForBtlImages(wdsContainerRef.current);

      if (isCancelled) {
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
            pinSpacing: false, // Must be false to allow panels to slide over each other
            invalidateOnRefresh: true,
            // anticipatePin only on panels that aren't the last pinned one
            // — avoids GSAP applying transforms near .btl-fp-section
            anticipatePin: index < lastPinnedIndex ? 1 : 0,
          })
        );

      scrollTriggers = [...pins];
      refreshFrame = requestAnimationFrame(() => {
        if (!isCancelled) {
          ScrollTrigger.refresh();
          refreshTimeout = window.setTimeout(() => {
            if (!isCancelled) {
              ScrollTrigger.refresh();
            }
          }, 250);
        }
      });
    };

    setupBtlScroll();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(refreshFrame);
      window.clearTimeout(refreshTimeout);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    <section className="btl-eh-section" ref={btlHeroRef}>
      <div className="btl-eh-container">
        <p className="btl-eh-eyebrow">BTL ACTIVATIONS</p>

        <h2 className="btl-eh-heading">
         Bringing Brands Closer Through
          <br />
          <span className="btl-eh-gradient">Powerful Real-World Connections.</span>
        </h2>

        <div className="btl-eh-banner">
          <img src="/Images/BTL.webp" alt="Events" />

          <div className="btl-eh-banner-overlay">
            <h3 className="btl-eh-banner-title">Events</h3>
            <p className="btl-eh-banner-subtitle">
              Large event stages, built for moments people remember.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ---- What We Do: heading stays on white, panels stack below ---- */}
    <section className="btl-wds-section">
      <div className="btl-wds-heading-wrap">
        <h2 className="btl-wds-heading">What We Do</h2>
      </div>
    </section>

    {/* ---- Panels wrapper: panels are direct children, no padding/max-width constraints ---- */}
    <div className="wds-container btl-wds-container btl-wds-panels-wrap" ref={wdsContainerRef}>

      {/* ---- 01 : image left, text right ---- */}
      <div className="btl-wds-item btl-wds-panel btl-wds-panel-1">
        <div className="btl-wds-image">
          <img src="/Images/canter.webp" alt="Corporate Events" />
        </div>
        <div className="btl-wds-content" >
          <span className="btl-wds-number" id="van">01</span>
          <h3 className="btl-wds-title"id="van">Canter Van Campaigns</h3>
          <p className="btl-wds-desc" id="van">
           Take Your Brand Directly to the Streets.         
          </p>
          <p className="btl-wds-detail" id="van"> Canter van campaigns provide a mobile advertising platform that brings your brand directly to customers across cities, towns, and rural markets. Equipped with vibrant branding, LED displays, audio systems, and promotional staff, canter vans create maximum visibility while delivering interactive marketing experiences.</p>
        </div>
      </div>

      {/* ---- 02 : text left, image right ---- */}
      <div className="btl-wds-item btl-wds-item-reverse btl-wds-panel btl-wds-panel-2">
        <div className="btl-wds-image">
          <img src="/Images/jogger.webp" alt="Product Launches" />
        </div>
        <div className="btl-wds-content">
          <span className="btl-wds-number">02</span>
          <h3 className="btl-wds-title">Joggers Park Promotions</h3>
          <p className="btl-wds-desc">
         Reach Health-Conscious Consumers in a Relaxed Environment.
          </p>
          <p className="btl-wds-detail">Joggers parks are ideal venues for brands looking to engage with active, health-conscious, and family-oriented audiences. These promotions allow businesses to connect with consumers during their daily fitness routines through experiential marketing, product sampling, wellness activities, and interactive brand experiences.</p>
        </div>
      </div>

      {/* ---- 03 : image left, text right ---- */}
      <div className="btl-wds-item btl-wds-panel btl-wds-panel-3">
        <div className="btl-wds-image">
          <img src="/Images/apartment.webp" alt="Awards Ceremonies" />
        </div>
        <div className="btl-wds-content">
          <span className="btl-wds-number">03</span>
          <h3 className="btl-wds-title">Apartment &amp; Corporate Activations</h3>
          <p className="btl-wds-desc">
           Engage Your Audience Where They Live and Work.
          </p>
          <p className="btl-wds-detail">Apartment and corporate activations are highly effective below-the-line (BTL) marketing strategies that enable brands to interact directly with their target audience in residential communities and corporate environments. These campaigns create meaningful face-to-face engagement, allowing consumers to experience products, participate in activities, and build trust with your brand.</p>
        </div>
      </div>

      {/* ---- 04 : text left, image right ---- */}
      <div className="btl-wds-item btl-wds-item-reverse btl-wds-panel btl-wds-panel-4">
        <div className="btl-wds-image">
          <img src="/Images/auto.webp" alt="Mini Concerts" />
        </div>
        <div className="btl-wds-content">
          <span className="btl-wds-number">04</span>
          <h3 className="btl-wds-title">Auto Branding</h3>
          <p className="btl-wds-desc">
          Turn Everyday Commutes into Powerful Advertising Opportunities.
          </p>
        <p className="btl-wds-detail">Auto branding transforms auto-rickshaws into moving advertisements that continuously promote your brand across busy streets, residential neighborhoods, commercial hubs, and marketplaces. This cost-effective advertising solution provides extensive local visibility and repeated brand exposure throughout the day.</p>
        </div>
      </div>

      {/* ---- 05 : image left, text right ---- */}
      <div className="btl-wds-item btl-wds-panel btl-wds-panel-5">
        <div className="btl-wds-image">
          <img src="/Images/look.webp" alt="Awards Ceremonies" />
        </div>
        <div className="btl-wds-content">
          <span className="btl-wds-number">05</span>
          <h3 className="btl-wds-title">Lookwalkers &amp; Leaflet Distribution</h3>
          <p className="btl-wds-desc">
          Human-Centered Marketing That Creates Real Connections.
          </p>
          <p className="btl-wds-detail">Lookwalkers and leaflet distribution combine eye-catching visual branding with direct customer interaction to maximize campaign reach. Professionally trained promoters wearing customized branded attire or carrying creative displays walk through high-footfall locations, attracting attention while distributing promotional materials and engaging potential customers.</p>
        </div>
      </div>

    </div>
     <section className="btl-fp-section">
      <div className="btl-fp-container2">
        <div className="btl-fp-heading-row">
          <h2 className="btl-fp-heading">Featured Projects</h2>
          <a href="/projects" className="btl-fp-view-more">
            VIEW MORE <span className="btl-fp-arrow">&rsaquo;</span>
          </a>
        </div>
 
        <div className="btl-fp-grid">
          {/* ---- Card 1 (wide) ---- */}
          <article className="btl-fp-card">
            <img
              src="/Images/v-care.webp"
              alt="Mirchi Awards"
              className="btl-fp-card-image"
            />
            <div className="btl-fp-card-overlay">
              <h3 className="btl-fp-card-title">V-care branding activities </h3>
              <a href="/projects/mirchi-awards" className="btl-fp-card-link">
                View case study <span className="btl-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 2 ---- */}
          <article className="btl-fp-card">
            <img
              src="/Images/croma.webp"
              alt="Music Concert"
              className="btl-fp-card-image"
            />
            <div className="btl-fp-card-overlay">
              <h3 className="btl-fp-card-title">CROMA CYCLE BRANDING</h3>
              <a href="/projects/music-concert" className="btl-fp-card-link">
                View case study <span className="btl-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
 
          {/* ---- Card 3 ---- */}
          <article className="btl-fp-card">
            <img
              src="/Images/leaflet.webp"
              alt="V Care Opening Ceremony"
              className="btl-fp-card-image"
            />
            <div className="btl-fp-card-overlay">
              <h3 className="btl-fp-card-title">CROMA LEAFLET DISTRIBUTION</h3>
              <a href="/projects/v-care-opening-ceremony" className="btl-fp-card-link">
                View case study <span className="btl-fp-arrow">&rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  
    <section className="btl-gal-section">
      <div className="btl-gal-container">
        <div className="btl-gal-heading-row">
          <h2 className="btl-gal-heading">Gallery</h2>
          <a href="/gallery" className="btl-gal-view-more">
            VIEW MORE <span>&rsaquo;</span>
          </a>
        </div>
      </div>

      {/* Single rope + badges image with live text overlaid on each tag.
          Label positions live in GallerySection.css (.btl-gal-tag-1 ... .btl-gal-tag-5) */}
      <div className="btl-gal-image-wrap">
        <img
          src="/Images/bus.webp"
          alt="Gallery of Vision Infinite event badges"
          className="btl-gal-image"
        />

        
      </div>
    </section>
    <section className="btl-git-section">
      <div className="btl-git-container">
        {/* Logo — replace src with your own file */}
        <img src="/Images/Vision.webp" alt="Vision Infinite" className="btl-git-logo" />
 
        <h2 className="btl-git-tagline">
          Let&rsquo;s build a real-world brand
          <br />
          experience.
        </h2>
 
        <p className="btl-git-eyebrow">CONNECT US</p>
        <h3 className="btl-git-heading">Get In Touch</h3>
 
        <div className="btl-git-grid">
          {/* ---- Left: form ---- */}
          <form className="btl-git-form">
            <div className="btl-git-row">
              <div className="btl-git-field">
                <label htmlFor="git-first-name">First Name</label>
                <input
                  id="git-first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
 
              <div className="btl-git-field">
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
 
            <div className="btl-git-row">
              <div className="btl-git-field">
                <label htmlFor="git-email">Email Address</label>
                <input
                  id="git-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
 
              <div className="btl-git-field">
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
 
            <div className="btl-git-field">
              <label htmlFor="git-message">Message</label>
              <textarea
                id="git-message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
              />
            </div>
 
            <button type="submit" className="btl-git-submit">
              Send Message <span className="btl-git-submit-icon">&#9655;</span>
            </button>
          </form>
 
          {/* ---- Right: image — replace src with your own file ---- */}
          <div className="btl-git-image">
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
