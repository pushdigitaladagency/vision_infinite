"use client";

import "./about.css";

export default function AboutHero() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    alert("Thanks for reaching out. We'll get back to you soon.");
  };

  return (
    <>
    <section className="ab-section">
      <div className="ab-container">
        <p className="ab-eyebrow">ABOUT</p>

        <h2 className="ab-heading">
          We Build Brands
          <br />
          <span className="ab-gradient">You Can Walk Into.</span>
        </h2>

        {/* Replace src with your own image */}
        <div className="ab-banner">
           <video
   
    src="/Videos/header_video.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/Images/header-image.webp"
  />
        </div>

        <div className="ab-text-grid">
          <p className="ab-text">
            Vision Infinite is a brand experience studio. We work at the seam between design and the physical world — cinemas, stages, streets and storefronts — turning brand ideas into places, objects and events that people actually remember.
          </p>
          <p className="ab-text">
            Founded by a team that has spent a decade branding theatres and staging events across India, we combine the rigour of a design practice with the execution muscle of a production house. One partner, from first sketch to final install.
          </p>
        </div>

        <div className="ab-stats">
          <div className="ab-stat">
            <p className="ab-stat-number">10+</p>
            <p className="ab-stat-label">YEARS IN THE FIELD</p>
          </div>

          <div className="ab-stat">
            <p className="ab-stat-number">100+</p>
            <p className="ab-stat-label">SUCCESSFULL PROJECTS</p>
          </div>

          <div className="ab-stat">
            <p className="ab-stat-number">50+</p>
            <p className="ab-stat-label">EVENTS STAGED</p>
          </div>

          <div className="ab-stat">
            <p className="ab-stat-number">60+</p>
            <p className="ab-stat-label">HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </section>
    <section className="hwt-section">
      <div className="hwt-container">
        <p className="hwt-eyebrow">
          <span className="hwt-eyebrow-line" />
          HOW WE THINK
        </p>
 
        <h2 className="hwt-heading">
          Great Brands Don&rsquo;t Compete.
          <br />
          They Stand Out.
        </h2>
 
        <p className="hwt-intro">
         Every brand has a story, but only a few know how to tell it in a way that people remember. We believe every campaign should create attention, spark conversations, and leave a lasting impression.
        </p>
 
        <div className="hwt-grid">
          {/* ---- Card 01 : purple ---- */}
          <div className="hwt-card hwt-card-purple">
            <span className="hwt-card-number">01</span>
            <h3 className="hwt-card-title">Strategy Before Creativity</h3>
            <p className="hwt-card-text">
              We believe creativity without strategy is just decoration. Before designing, branding, or executing any campaign, we understand your audience, business goals, market, and brand identity. Every idea we create is backed by purpose, ensuring your investment delivers measurable results rather than just visual appeal.
            </p>
          </div>
 
          {/* ---- Card 02 : lime ---- */}
          <div className="hwt-card hwt-card-lime">
            <span className="hwt-card-number">02</span>
            <h3 className="hwt-card-title">Experiences Build Stronger Brands</h3>
            <p className="hwt-card-text">
              Modern audiences don't just want to see a brand. They want to interact with it. That's why we focus on creating immersive brand experiences through activations, events, outdoor media, and innovative branding solutions that encourage engagement, strengthen emotional connections, and inspire action.
            </p>
          </div>
 
          {/* ---- Card 03 : blue ---- */}
          <div className="hwt-card hwt-card-blue">
            <span className="hwt-card-number">03</span>
            <h3 className="hwt-card-title">Every Touchpoint Matters</h3>
            <p className="hwt-card-text">
              From a roadside hoarding to an exhibition booth, from a corporate event to a retail display, every customer interaction shapes how your brand is perceived. We ensure every visual, message, and experience reflects a unified identity that builds trust and strengthens brand recall across every platform.
            </p>
          </div>
 
          {/* ---- Card 04 : pink ---- */}
          <div className="hwt-card hwt-card-pink">
            <span className="hwt-card-number">04</span>
            <h3 className="hwt-card-title">Execution Defines Success</h3>
            <p className="hwt-card-text">
           A successful campaign depends not only on great concepts but also on precise execution. We believe in meticulous planning, attention to detail, quality craftsmanship, and on-time delivery. From concept to completion, every project is managed with professionalism, ensuring your vision is transformed into impactful real-world experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="hwk-section">
      <div className="hwk-container">
        <p className="hwk-eyebrow">
          <span className="hwk-eyebrow-line" />
          HOW WE WORK
        </p>
 
        <h2 className="hwk-heading">
          One Continuous Flow,
          <br />
          From Idea to Impact.
        </h2>
 
        <div className="hwk-steps">
          <div className="hwk-step">
            <span className="hwk-step-number">01</span>
            <h3 className="hwk-step-title">Discover</h3>
            <p className="hwk-step-desc">
             Brand, audience, space and objective we map what the experience must achieve.
            </p>
          </div>
 
          <div className="hwk-step">
            <span className="hwk-step-number">02</span>
            <h3 className="hwk-step-title">Concept</h3>
            <p className="hwk-step-desc">
             A big creative idea,
translated into a spatial and experiential 
narrative.
            </p>
          </div>
 
          <div className="hwk-step">
            <span className="hwk-step-number">03</span>
            <h3 className="hwk-step-title">Design</h3>
            <p className="hwk-step-desc">
              Detailed design, renders and engineering 
drawings for 
every element.
            </p>
          </div>
 
          <div className="hwk-step">
            <span className="hwk-step-number">04</span>
            <h3 className="hwk-step-title">Fabricate</h3>
            <p className="hwk-step-desc">
             Built in-house 
large format, signage,
structures, stage and lighting.
            </p>
          </div>
 
          <div className="hwk-step">
            <span className="hwk-step-number">05</span>
            <h3 className="hwk-step-title">Execute</h3>
            <p className="hwk-step-desc">
            On-ground teams install and run the experience, on time and on 
site.
            </p>
          </div>
 
          <div className="hwk-step">
            <span className="hwk-step-number">06</span>
            <h3 className="hwk-step-title">Measure</h3>
            <p className="hwk-step-desc">
             Footfall, 
engagement and reach — captured  and reported back.
            </p>
          </div>
        </div>
      </div>
    </section>
     <section className="wd-section">
      <div className="wd-container">
        <p className="wd-eyebrow">
          <span className="wd-eyebrow-line" />
          WHAT WE DO
        </p>
 
        <h2 className="wd-heading">
          We Turn Ideas into Impactful
          <br />
          Brand Experiences.
        </h2>
 
        <div className="wd-list">
          <a href="/services/theatre-branding" className="wd-item">
            <span className="wd-item-number">01</span>
            <span className="wd-item-title">THEATRE BRANDING</span>
            <span className="wd-item-arrow">↗</span>
          </a>
 
          <a href="/services/events" className="wd-item">
            <span className="wd-item-number">02</span>
            <span className="wd-item-title">EVENTS</span>
            <span className="wd-item-arrow">↗</span>
          </a>
 
          <a href="/services/btl-activations" className="wd-item">
            <span className="wd-item-number">03</span>
            <span className="wd-item-title">BTL ACTIVATIONS</span>
            <span className="wd-item-arrow">↗</span>
          </a>
 
          <a href="/services/branding" className="wd-item">
            <span className="wd-item-number">04</span>
            <span className="wd-item-title">BRANDING SOLUTIONS</span>
            <span className="wd-item-arrow">↗</span>
          </a>
 
          <a href="/services/outdoor-advertising" className="wd-item">
            <span className="wd-item-number">05</span>
            <span className="wd-item-title">OUTDOOR ADVERTISING</span>
            <span className="wd-item-arrow">↗</span>
          </a>
        </div>
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
          <form className="git-form" onSubmit={handleSubmit}>
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
