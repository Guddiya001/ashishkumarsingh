export default function Experience() {
  return (
    <section id="experience">
      <h2>Work Experience</h2>

      <div className="experience-list">

        <ExperienceItem
          title="Senior Engineering Lead"
          company="Persistent Systems · UnitedHealth Group (Client)"
          location="Noida, India"
          duration="Oct 2023 – Present"
          points={[
            "Senior Frontend & GenAI Technical Lead for enterprise healthcare platforms",
            "Architected AI-enabled frontend systems using React, Next.js, and TypeScript",
            "Integrated LLM-powered services, RAG pipelines, and AI-driven workflows",
            "Collaborated with AI, backend, and platform teams on GenAI orchestration",
            "Mentored engineers on scalable architecture and AI-aware UI design",
            "Contributed to a 42% reduction in incident resolution time"
          ]}
        />

        <ExperienceItem
          title="Senior Software Engineer"
          company="DBS Bank"
          location="Singapore"
          duration="Jul 2022 – Mar 2023"
          points={[
            "Built mission-critical frontend applications using React and Next.js",
            "Integrated AI-assisted workflows into enterprise banking platforms",
            "Optimized SSR performance to support 2M+ monthly users",
            "Ensured long-term maintainability through strong TypeScript and testing practices"
          ]}
        />

        <ExperienceItem
          title="Senior Software Engineer"
          company="Coforge Ltd · Walmart (Client)"
          location="Noida, India"
          duration="Oct 2020 – Jun 2022"
          points={[
            "Led frontend modernization for global e-commerce platforms",
            "Built data-intensive dashboards processing 500k+ daily transactions",
            "Worked on API-driven systems and automation use cases",
            "Applied accessibility, performance, and scalable design principles"
          ]}
        />

        <ExperienceItem
          title="Software Engineer"
          company="Peerxp Info Technologies"
          location="Gurgaon, India"
          duration="Jan 2019 – Oct 2020"
          points={[
            "Developed React-based product features in a fast-paced environment",
            "Built reusable UI components and mentored junior engineers"
          ]}
        />

        <ExperienceItem
          title="Software Engineer"
          company="Advance Research & Web Development (ARWD)"
          location="Delhi, India"
          duration="Jan 2016 – Jan 2019"
          points={[
            "Developed responsive web interfaces with strong UX fundamentals",
            "Worked directly with clients to deliver business-aligned UI solutions"
          ]}
        />

      </div>
    </section>
  );
}

function ExperienceItem({ title, company, location, duration, points }) {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <strong>{company}</strong>
      <div className="experience-meta">
        {location} · {duration}
      </div>

      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
