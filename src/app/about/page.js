import "./about.css";

export const metadata = {
  title: "About — Infinite Vision",
  description: "Learn about Infinite Vision, our story, our team, and the values that drive us to create unforgettable brand experiences.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <span className="section-label">About Us</span>
        <h1>Built to be <span className="gradient-text">remembered.</span></h1>
        <p>
          We&apos;re a team of creative strategists, designers, and producers who
          believe brands should be experienced, not just seen.
        </p>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="about-content">
            <div>
              <h2>Our Story</h2>
              <p>
                Founded with a passion for transforming how brands connect with
                people, Infinite Vision has spent over 15 years pushing the
                boundaries of experiential marketing.
              </p>
              <p>
                From our first pop-up installation to large-scale multi-city
                activations, we&apos;ve built a reputation for delivering
                experiences that resonate, engage, and convert. Every project we
                take on is an opportunity to create something extraordinary.
              </p>
              <p>
                Our multidisciplinary team combines strategic thinking with
                creative execution to deliver campaigns that don&apos;t just meet
                expectations — they exceed them.
              </p>
            </div>
            <div className="about-visual">✦</div>
          </div>
        </div>
      </section>

      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Our Values</span>
          <h2 className="section-title">What drives us forward.</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Purpose-Driven</h3>
              <p>Every experience we create is rooted in strategic intent and measurable outcomes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaborative</h3>
              <p>We work as an extension of your team, ensuring alignment at every step of the journey.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovative</h3>
              <p>We push creative boundaries to deliver unique experiences that stand out from the crowd.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Detail-Obsessed</h3>
              <p>From concept to execution, every detail is meticulously planned and perfectly delivered.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Strategic</h3>
              <p>Data-informed creative decisions that maximize ROI and brand impact for every campaign.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Sustainable</h3>
              <p>Committed to eco-conscious practices and sustainable production in all our projects.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
