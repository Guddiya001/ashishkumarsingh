import { Link } from 'react-router-dom';

export default function CaseStudyLayout({ study }) {
  if (!study) return <main className="case-detail"><h1>Case study not found</h1><Link to="/case-studies">Back to case studies</Link></main>;
  return (
    <main className="case-detail">
      <Link className="case-back" to="/case-studies">← All case studies</Link>
      <header className="case-detail-hero">
        <p className="case-kicker">{study.number} / {study.category}</p>
        <h1>{study.title}</h1>
        <p className="case-detail-subtitle">{study.subtitle}</p>
        <p className="case-detail-summary">{study.summary}</p>
        <div className="case-tags case-detail-tags">{study.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="case-links">{study.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
      </header>
      <div className="case-detail-grid">
        <aside className="case-sidebar"><span>CASE STUDY CONTENTS</span><a href="#context">01 Context</a><a href="#approach">02 Engineering approach</a><a href="#architecture">03 Architecture</a><a href="#decisions">04 Key decisions</a><a href="#quality">05 Reliability & quality</a></aside>
        <div className="case-content">
          <section id="context" className="case-prose-section"><p className="case-section-index">01 / CONTEXT</p><h2>The engineering problem</h2><p>{study.context}</p></section>
          <section id="approach" className="case-prose-section"><p className="case-section-index">02 / APPROACH</p><h2>How the system is approached</h2><div className="case-approach-list">{study.approach.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
          <section id="architecture" className="case-prose-section"><p className="case-section-index">03 / SYSTEM DESIGN</p><h2>Architecture at a glance</h2><div className="case-architecture">{study.architecture.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, '0')}</span>{item}</div>)}</div></section>
          <section id="decisions" className="case-prose-section"><p className="case-section-index">04 / TRADE-OFFS</p><h2>Key technical decisions</h2><div className="case-decision-grid">{study.decisions.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
          <section id="quality" className="case-prose-section"><p className="case-section-index">05 / ENGINEERING QUALITY</p><h2>What I pay attention to</h2><ul className="case-quality-list">{study.engineering.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <div className="case-evidence"><strong>Scope & evidence</strong><p>{study.evidence}</p></div>
          <Link className="case-back-bottom" to="/case-studies">← Explore other case studies</Link>
        </div>
      </div>
    </main>
  );
}
