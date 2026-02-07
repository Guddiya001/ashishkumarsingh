export default function CaseStudyLayout({
  title,
  subtitle,
  problem,
  solution,
  architecture,
  decisions,
  impact,
  learnings,
}) {
  return (
    <section className="case-study">
      <h1>{title}</h1>
      <p className="case-subtitle">{subtitle}</p>

      <Section title="Problem" content={problem} />
      <Section title="Solution" content={solution} />
      <Section title="Architecture & Tech Stack" content={architecture} />
      <Section title="Key Technical Decisions" content={decisions} />
      <Section title="Impact" content={impact} />
      <Section title="What This Demonstrates" content={learnings} />
    </section>
  );
}

function Section({ title, content }) {
  return (
    <div className="case-section">
      <h2>{title}</h2>
      <ul>
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
