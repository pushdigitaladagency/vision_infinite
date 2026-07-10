import Link from "next/link";
import "./Home.css";

export default function Home() {
  const BRANDS = [
  "SPR CITY",
  "SKY TOWERS",
  "MARKET OF INDIA",
  "MERCELY'S",
  "NAIDU HALL",
  "MVR CINEMAS",
  "HOME SQUARE",
  "VGN",
];
const repeatedBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];
const SERVICES = [
  {
    title: "Theatre Branding",
    description:
      "Cinema theatres offer one of the most engaging environments for brand promotion. Reach audiences in a powerful and immersive setting.",
    points: [
      "On-screen cinema advertising",
      "Theatre lobby branding",
      "Standee displays",
      "Counter branding",
      "Interior theatre branding",
    ],
    image: "/Images/service-1.webp",
  },
  {
    title: "Events",
    description:
      "Vision Infinite manages corporate and promotional  events with complete planning and execution",
    points: [
      "Conferences",
      "Product launches",
      "Awards ceremonies",
      "Mini concerts",
    ],
    image: "/Images/service-2.webp",
  },
  {
    title: "BTL Activations",
    description:
      "Our BTL activation campaigns create real interactions between brands and consumers in high-footfall environments.",
    points: [
      "Apartment & corporate activations",
      "Joggers park promotions",
      "Canter van campaigns",
      "Auto branding",
        "Lookwalkers & leaflet distribution",
    ],
    image: "/Images/service-3.webp",
  },
  {
    title: "Branding Solutions",
    description:
      "High-visibility branding solutions that help businesses build strong local presence and lasting brand recall.",
    points: [
      "Wall painting",
      "Signages",
      "Point of Purchase (POP) branding",
      "Temporary hoardings",
      "Wall posters & parking boards",
    ],
    image: "/Images/service-4.webp",
  },
];
const PROJECTS = [
  {
    title: "MERCELY'S ICE CREAM ACTIVATION",
    image: "/Images/service-3.webp",
    href: "/projects/mercelys-ice-cream-activation",
  },
  {
    title: "NAIDU HALL BRANDING IN MULTIPLEX LOBBY",
    image: "/Images/service-4.webp",
    href: "/projects/naidu-hall-multiplex-lobby",
  },
  {
    title: "SPR CITY BRANDING IN EXPO",
    image: "/Images/service-2.webp",
    href: "/projects/spr-city-expo",
  },
    
];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
         <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    poster="/Images/header-image.webp"
  >
    <source src="/Videos/header_video.mp4" type="video/mp4" />
  </video>
       <img className= "img_header"src="/Images/header-image.webp" alt="Logo" />
        <div className="hero-content">
          <span className="hero-label">Experiential Branding & Event Solutions</span>
          <h1>
            We Build <span className="gradient-text">Experiences</span>
          </h1>
          <p>
            People remember brands because they experience
them. We bring brands to life in the real world 
across theatres, malls, exhibitions, retail floors and
stages.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary">
           View Projects →
            </Link>
            <Link href="/works" className="btn-outline">
Talk to us
            </Link>
          </div>
        </div>
      </section>
 <section className="brands-section">
      <h2 className="brands-heading">BRANDS WE&apos;VE BROUGHT TO LIFE</h2>
 
      <div className="marquee" aria-label="Brand names scrolling">
        <div className="marquee-track">
       {repeatedBrands.map((brand, index) => (
                 <span className="brand-item" key={index}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
    

      
      {/* ===== STATS ===== */}
      <section className="about-section">
      {/* Decorative doodles — replace src with your own images */}
      <img
        src="/images/doodle-left.png"
        alt=""
        className="about-doodle about-doodle-left"
      />
      <img
        src="/images/doodle-right.png"
        alt=""
        className="about-doodle about-doodle-right"
      />
 
      <div className="about-container">
        {/* Left column */}
        <div className="about-left">
          <img  className= "star" src="/Images/star.webp" alt="About Vision Infinite" />
          <p className="about-eyebrow">
            <span className="about-eyebrow-line" />
            ABOUT VISION INFINITE
          </p>
 
          <h2 className="about-heading">
            Where brands
            <br />
            become
            <br />
            <span className="about-gradient">experiences</span>
            <span className="about-dot">.</span>
          </h2>
        </div>
 
        {/* Right column */}
        <div className="about-right">
          <img  className= "line" src="/Images/Lines.webp" alt="About" />
          <p>
          Vision Infinite is an experiential branding company.
We turn brands into spaces, moments and memories
designing and physically executing the environments people walk through, touch and
remember.
          </p>
          <p>
            Where others run campaigns, we build the real
world: theatre branding, mall activations, exhibition
pavilions, product launches and large-format
fabrication. From concept to on-site execution,
every detail is owned in-house.
          </p>
        </div>
      </div>
    </section>




      {/* ===== TESTIMONIALS ===== */}
      
     <section className="wwd-section">
      <div className="wwd-container">
        <p className="wwd-eyebrow">
          <span className="wwd-eyebrow-line" />
          WHAT WE DO
        </p>
 
        <h2 className="wwd-heading">
          Five ways we put brands
          <br />
          into the physical world.
        </h2>
 
        <div className="wwd-services">
          {SERVICES.map((service) => (
            <div className="wwd-service" key={service.title}>
              <div className="wwd-service-image">
                <img src={service.image} alt={service.title} />
              </div>
 
              <div className="wwd-service-content">
                <h3 className="wwd-service-title">{service.title}</h3>
                <p className="wwd-service-desc">{service.description}</p>
                <ul className="wwd-service-points">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      <section className="fp-section">
      <div className="fp-container">
        <p className="fp-eyebrow">
          <span className="fp-eyebrow-line" />
          FEATURED PROJECTS
        </p>
 
        <div className="fp-heading-row">
          <h2 className="fp-heading">Built to be remembered.</h2>
          <a href="/projects" className="fp-view-more">
            VIEW MORE <span className="fp-arrow">&rsaquo;</span>
          </a>
        </div>
 
        <div className="fp-grid">
          {PROJECTS.map((project) => (
            <article className="fp-card" key={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="fp-card-image"
              />
              <div className="fp-card-overlay">
                <h3 className="fp-card-title">{project.title}</h3>
                <a href={project.href} className="fp-card-link">
                  View case study <span className="fp-arrow">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="hww-section">
      <div className="hww-container">
        <p className="hww-eyebrow">
          <span className="hww-eyebrow-line" />
          HOW WE WORK
        </p>
 
        <h2 className="hww-heading">
          One continuous flow,
          <br />
          from idea to impact.
        </h2>
 
        <div className="hww-steps">
          <div className="hww-step">
            <span className="hww-step-number">01</span>
            <h3 className="hww-step-title">Discover</h3>
            <p className="hww-step-desc">
              Brand, audience, space and objective we map what the experience
              must achieve.
            </p>
          </div>
 
          <div className="hww-step">
            <span className="hww-step-number">02</span>
            <h3 className="hww-step-title">Concept</h3>
            <p className="hww-step-desc">
              A big creative idea, translated into a spatial and experiential
              narrative.
            </p>
          </div>
 
          <div className="hww-step">
            <span className="hww-step-number">03</span>
            <h3 className="hww-step-title">Design</h3>
            <p className="hww-step-desc">
              Detailed design, renders and engineering drawings for every
              element.
            </p>
          </div>
 
          <div className="hww-step">
            <span className="hww-step-number">04</span>
            <h3 className="hww-step-title">Fabricate</h3>
            <p className="hww-step-desc">
              Built in-house large format, signage, structures, stage and
              lighting.
            </p>
          </div>
 
          <div className="hww-step">
            <span className="hww-step-number">05</span>
            <h3 className="hww-step-title">Execute</h3>
            <p className="hww-step-desc">
              On-ground teams install and run the experience, on time and on
              site.
            </p>
          </div>
 
          <div className="hww-step">
            <span className="hww-step-number">06</span>
            <h3 className="hww-step-title">Measure</h3>
            <p className="hww-step-desc">
              Footfall, engagement and reach &mdash; captured and reported
              back.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="tm-section">
      <div className="tm-container">
        <p className="tm-eyebrow">
          <span className="tm-eyebrow-line" />
          TESTIMONIALS
        </p>
 
        <div className="tm-heading-row">
          <h2 className="tm-heading">What partners say.</h2>
          <button className="tm-arrow-btn" aria-label="Next testimonials">
            &rarr;
          </button>
        </div>
 
        <div className="tm-grid">
          <div className="tm-card">
            <p className="tm-quote">
              <span className="tm-quote-mark">&ldquo;</span>
              They turned our product launch into a full sensory experience
              &mdash; flawless execution across fourteen cities.
              <span className="tm-quote-mark">&rdquo;</span>
            </p>
            <div className="tm-author">
              <span className="tm-avatar" />
              <div>
                <p className="tm-name">Head of Marketing</p>
                <p className="tm-role">Consumer Brand</p>
              </div>
            </div>
          </div>
 
          <div className="tm-card">
            <p className="tm-quote">
              <span className="tm-quote-mark">&ldquo;</span>
              From concept to fabrication, Vision Infinite owned every detail.
              Our mall activation drew record footfall.
              <span className="tm-quote-mark">&rdquo;</span>
            </p>
            <div className="tm-author">
              <span className="tm-avatar" />
              <div>
                <p className="tm-name">Brand Manager</p>
                <p className="tm-role">Consumer Brand</p>
              </div>
            </div>
          </div>
 
          <div className="tm-card">
            <p className="tm-quote">
              <span className="tm-quote-mark">&ldquo;</span>
              The theatre branding rollout was on time, on budget and
              absolutely unmissable.
              <span className="tm-quote-mark">&rdquo;</span>
            </p>
            <div className="tm-author">
              <span className="tm-avatar" />
              <div>
                <p className="tm-name">Regional Lead</p>
                <p className="tm-role">Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="git-section">
      <div className="git-container">
        {/* Logo — replace src with your own file */}
        <img src="/Images/vision.webp" alt="Vision Infinite" className="git-logo" />
 
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
