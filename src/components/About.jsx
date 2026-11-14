import React from 'react';

const highlights = [
  { value: '10+', label: 'Years in software engineering' },
  { value: '6+', label: 'Global teams supported through micro-frontend architecture' },
  { value: '35%', label: 'Bundle-size reduction on a modernization initiative' },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="page-container">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Engineering experience.<br /><span>AI-forward thinking.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-main">
            <p className="lead-copy">
              I&apos;m a software engineer focused on turning complex requirements into dependable products — from enterprise web platforms to intelligent AI applications.
            </p>
            <p>
              Over 10+ years, I&apos;ve contributed to technology initiatives across healthcare, banking and retail, including work associated with UnitedHealth Group, DBS Bank and Walmart. My core engineering background spans React, TypeScript, Node.js, Python, cloud infrastructure, microservices and micro-frontends.
            </p>
            <p>
              Alongside enterprise engineering, I build and experiment with LLM-powered applications, retrieval-augmented generation, local models and agentic workflows using LangChain, LangGraph, MCP, Ollama and cloud AI platforms. I enjoy working across the stack — understanding the problem, shaping the architecture and delivering a usable solution.
            </p>
            <div className="about-links">
              <a href="https://github.com/Guddiya001" target="_blank" rel="noreferrer">Explore GitHub <span>↗</span></a>
              <a href="https://www.linkedin.com/in/ashish-kumar-singh1986/" target="_blank" rel="noreferrer">LinkedIn profile <span>↗</span></a>
            </div>
          </div>
          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
            <div className="location-card"><span className="location-pin">⌖</span><div><strong>Based in India</strong><span>Open to global remote roles and international relocation, including visa-sponsored opportunities.</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
