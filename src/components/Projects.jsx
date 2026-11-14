import React from 'react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="page-container">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects built to<br /><span>solve real problems.</span></h2>
          </div>
          <a className="text-link" href="https://github.com/Guddiya001" target="_blank" rel="noreferrer">View all GitHub repositories <span>↗</span></a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`} key={project.title}>
              <div className="project-card-head">
                <span className="project-index">0{index + 1}</span>
                <span className="project-label">{project.label}</span>
              </div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub repository <span>↗</span></a>
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <span>↗</span></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
