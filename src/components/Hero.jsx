import React from 'react';

const focusAreas = ['Production AI', 'Agentic systems', 'Enterprise software'];
const stack = ['Python', 'LangGraph', 'LangChain', 'MCP', 'React', 'Node.js', 'AWS'];

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-layout page-container">
        <div className="hero-copy">
          <div className="availability-pill"><span className="availability-dot" /> Available for opportunities · Immediate joiner</div>
          <p className="eyebrow">SENIOR SOFTWARE ENGINEER · PRODUCTION AI ENGINEER</p>
          <h1>Building intelligent software.<br /><span>Engineering what&apos;s next.</span></h1>
          <p className="hero-description">
            I&apos;m Ashish Kumar Singh — an engineer with <strong>10+ years of experience</strong> building enterprise applications and AI-powered solutions across healthcare, banking and retail.
            I bring full-stack engineering depth together with LLMs, RAG and agentic AI.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
            <a className="button button-secondary" href="/downloads/Ashish_Kumar_Singh_Resume.pdf" download>Download resume <span>↓</span></a>
            <a className="button button-secondary" href="/downloads/Ashish_Kumar_Singh_Cover_Letter.pdf" download>Cover letter <span>↓</span></a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/ashish-kumar-singh1986/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
          </div>
          <div className="hero-focus-row">
            {focusAreas.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile and technology highlights">
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />
          <div className="profile-card">
            <div className="profile-card-top"><span>ENGINEERING PROFILE</span><span className="profile-card-status">● OPEN</span></div>
            <img className="profile-photo" src="/profile.jpg" alt="Ashish Kumar Singh" />
            <h2>Ashish Kumar Singh</h2>
            <p>Senior Software · AI Engineer</p>
            <div className="profile-divider" />
            <div className="profile-stats">
              <div><strong>10+</strong><span>Years</span></div>
              <div><strong>AI +</strong><span>Full stack</span></div>
              <div><strong>Global</strong><span>Mindset</span></div>
            </div>
            <div className="profile-stack-label">WORKING TOOLKIT</div>
            <div className="stack-chips">
              {stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="floating-note note-top"><span className="note-icon">✳</span><span><strong>Agentic AI</strong><small>LLMs · RAG · MCP</small></span></div>
          <div className="floating-note note-bottom"><span className="note-icon note-icon-blue">⌘</span><span><strong>Enterprise systems</strong><small>Architecture · Scale · Delivery</small></span></div>
        </div>
      </div>
      <div className="hero-bottom page-container"><span>INDIA · OPEN TO GLOBAL REMOTE & RELOCATION</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
    </section>
  );
}
