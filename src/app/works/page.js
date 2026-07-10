import "./works.css";

export const metadata = {
  title: "Our Works — Infinite Vision",
  description: "Browse our portfolio of experiential branding projects — from immersive theme installations to large-scale brand activations.",
};

export default function WorksPage() {
  const projects = [
    {
      tag: "Theme Branding",
      title: "Cosmic Playground — Mall Takeover",
      description: "A full-scale mall transformation into an intergalactic experience zone for a major tech brand launch, featuring custom fabrication and interactive installations.",
      icon: "🌌",
      featured: true,
    },
    {
      tag: "Events",
      title: "NovaBrands Annual Summit 2025",
      description: "A three-day brand conference with immersive stage design, interactive breakout zones, and a live product showcase.",
      icon: "🎤",
    },
    {
      tag: "BTL Activation",
      title: "Street Style Pop-Up Series",
      description: "A multi-city pop-up campaign for a fashion brand featuring interactive styling stations and social media integration.",
      icon: "👟",
    },
    {
      tag: "Branding Solutions",
      title: "FreshBrew — Complete Brand Overhaul",
      description: "End-to-end visual identity redesign including logo, packaging, retail environment, and brand guidelines.",
      icon: "☕",
    },
    {
      tag: "Events",
      title: "Luxe Auto Unveiling Experience",
      description: "An exclusive invitation-only product reveal combining projection mapping, spatial audio, and premium hospitality.",
      icon: "🏎️",
    },
    {
      tag: "BTL Activation",
      title: "Wellness Zone — Health Expo Activation",
      description: "An interactive health and wellness brand experience with personalized consultations and product sampling.",
      icon: "🧘",
    },
  ];

  return (
    <>
      <section className="works-hero">
        <span className="section-label">Portfolio</span>
        <h1>Our <span className="gradient-text">Works.</span></h1>
        <p>
          A curated selection of projects that showcase our expertise in creating
          memorable brand experiences across industries.
        </p>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="works-grid">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`work-card ${project.featured ? "work-card-featured" : ""}`}
              >
                <div className="work-card-image">{project.icon}</div>
                <div className="work-card-body">
                  <span className="work-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
