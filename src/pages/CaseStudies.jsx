import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <main className="case-hub">
      <header className="case-hub-hero">
        <p className="case-kicker">ENGINEERING WORK / SELECTED CASE STUDIES</p>
        <h1>How I approach <span>complex engineering problems.</span></h1>
        <p className="case-hub-lede">A closer look at system boundaries, architecture choices, reliability concerns and trade-offs behind selected AI and full-stack projects.</p>
        <div className="case-hub-meta"><span>03 SELECTED STUDIES</span><span>AI SYSTEMS · DEVELOPER TOOLS · FINTECH</span></div>
      </header>
      <div className="case-card-list">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.id}>
            <div className="case-card-index">{study.number}</div>
            <div className="case-card-main">
              <div className="case-card-meta"><span>{study.category}</span><span>{study.stage}</span></div>
              <h2>{study.title}</h2>
              <p className="case-card-subtitle">{study.subtitle}</p>
              <p className="case-card-summary">{study.summary}</p>
              <div className="case-tags">{study.stack.slice(0, 6).map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="case-read-link" to={`/case-studies/${study.id}`}>Explore engineering case study <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </div>
      <p className="case-honesty-note">These are portfolio projects and engineering explorations. Scope, implementation details and outcomes are described without inventing production metrics or customer claims.</p>
    </main>
  );
}
