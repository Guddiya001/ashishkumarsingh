import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <strong>{p.impact}</strong>
            <span>{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

