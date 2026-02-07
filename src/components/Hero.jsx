export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Ashish Kumar Singh</h1>
        <div className="hero-image">
          <img src="profile.jpg" alt="Ashish Kumar Singh" width="200" height="200" />
        </div>
          <h2>
            Senior Full-Stack & GenAI Engineer
          </h2>
          <p>
            Building scalable AI-powered platforms with React, Node.js, Python,
            LLMs, RAG, and AWS.
          </p>

          <div className="hero-actions" style={{ paddingTop: '20px' }}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.pdf" className="btn-outline">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
