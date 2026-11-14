import React from 'react';

const experiences = [
  {
    role: 'Senior Engineering Lead', company: 'Persistent Systems', client: 'UnitedHealth Group · Client engagement', location: 'Noida, India', period: 'Oct 2023 – Present',
    points: [
      'Contributed to modernization of an enterprise healthcare platform, migrating legacy frontend applications toward React 18 and TypeScript to improve maintainability, scalability and application performance.',
      'Helped evolve a monolithic frontend into a micro-frontend architecture using Webpack Module Federation, supporting independently developed features and delivery across 6+ global engineering teams.',
      'Contributed to full-stack integration of LLM-powered capabilities and AI services, connecting React/TypeScript user interfaces with NestJS backend services and Python/FastAPI AI services powered by AWS Bedrock.',
      'Integrated AI service workflows and backend APIs, supporting communication between the Node.js/NestJS application layer and Python-based services for AI model interactions.',
      'Developed reusable React components, integrated REST APIs and supported end-to-end application workflows in collaboration with backend, AI and cross-functional engineering teams.',
      'Worked with PL/SQL-based data operations and containerized application services using Docker, supporting integration across the healthcare platform.',
      'Contributed to frontend performance optimization, achieving a 35% reduction in bundle size and improving the Lighthouse performance score from 62 to 94.',
      'Applied modular architecture, API-driven integration, reusable component design and performance engineering practices to improve platform maintainability and support future AI-enabled capabilities.',
      <strong>Technology Stack: React 18, TypeScript, JavaScript, Webpack Module Federation, Micro-frontends, Node.js, NestJS, Python, FastAPI, AWS Bedrock, LLM Integration, REST APIs, PL/SQL, Docker, Frontend Platform Engineering, Performance Optimization, Lighthouse.</strong>
    ]
  },
  {
    role: 'Senior Software Engineer', company: 'LTIMindtree', client: 'DBS Bank · Client engagement', location: 'Singapore', period: 'Jun 2022 – Mar 2023',
    points: ['Contributed to enterprise banking software development and API integration in a client delivery environment.']
  },
  {
    role: 'Senior Software Engineer', company: 'Coforge', client: 'Walmart · Client engagement', location: 'India', period: 'Oct 2020 – Jun 2022',
    points: ['Contributed to enterprise retail application development and frontend engineering for a large-scale client environment.']
  },
  {
    role: 'Software Engineer', company: 'Peerxp Info Technologies', location: 'Gurgaon, India', period: 'Jan 2019 – Oct 2020',
    points: ['Developed React-based product features and reusable user-interface components.']
  },
  {
    role: 'Software Engineer', company: 'Advance Research & Web Development', location: 'Delhi, India', period: 'Jan 2016 – Jan 2019',
    points: ['Developed responsive web interfaces and delivered UI solutions for client requirements.']
  }
];

const healthcareEngagements = [
  {
    client: 'Syneos Health',
    category: 'AZURE AI · CLINICAL DOCUMENTATION',
    title: 'AI-powered patient history and clinical narrative generation',
    summary: 'A clinical documentation workflow that turns patient-history inputs into structured narratives and case notes for physician review.',
    contribution: 'Contributed across Python service development, Azure AI integration, retrieval and grounding, clinical output validation, data protection and responsible-AI safeguards.',
    safeguards: ['Prompt & output guardrails', 'Grounding / hallucination reduction', 'Clinical output validation', 'PII masking', 'Content safety', 'Human doctor review'],
    technologies: ['NestJS', 'PL/SQL', 'Docker', 'Azure AI Foundry', 'Azure OpenAI', 'Python', 'FastAPI', 'Pydantic', 'Azure AI Search', 'Embeddings', 'Vector search', 'Azure Blob Storage', 'Azure Key Vault', 'Azure AI Content Safety', 'Docker', 'Pytest', 'Azure Monitor', 'Application Insights']
  },
  {
    client: 'UnitedHealth Group',
    category: 'AWS BEDROCK · HEALTHCARE PLATFORM',
    title: 'AI-enabled healthcare workflow and service integration',
    summary: 'A connected healthcare platform supporting patient-history review, doctor workflows, prescriptions, pharmacy routing, payments and appointment booking.',
    contribution: 'Worked across multiple platform areas, including backend services and AI integration. A Python process bridges the Node.js environment with model-training workflows.',
    safeguards: ['Patient-history workflows', 'Doctor-led prescription flow', 'Backend service integration', 'Model-training workflow integration'],
    technologies: ['NestJS', 'PL/SQL', 'Docker', 'Node.js', 'Python', 'FastAPI', 'AWS Bedrock', 'AWS S3', 'AWS EC2', 'AWS SQS', 'AWS EKS', 'AWS SageMaker', 'AWS Secrets Manager', 'AWS CloudWatch', 'AWS IAM', 'AWS SDK', 'AWS Lambda', 'AWS CloudFormation']
  }
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="page-container experience-layout">
        <div className="section-heading experience-intro">
          <p className="eyebrow">CAREER JOURNEY</p>
          <h2>Enterprise engineering.<br /><span>Applied AI in practice.</span></h2>
          <p className="section-intro">10+ years across enterprise software, with recent work connecting cloud AI, secure backend services and healthcare workflows. The engagement highlights below are separated from dated employment history.</p>
          <div className="experience-focus">
            <span>LLM integration</span><span>Healthcare AI</span><span>Full-stack architecture</span>
          </div>
        </div>
        <div className="experience-main">
          <div className="timeline" aria-label="Professional experience timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-content">
                  <div className="timeline-meta"><span>{item.period}</span><span>{item.location}</span></div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}{item.client ? ` · ${item.client}` : ''}</p>
                  <ul>{item.points.map((point, pointIndex) => <li key={pointIndex}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>

          <div className="healthcare-engagements">
            <div className="engagement-heading">
              <p className="eyebrow">SELECTED CLIENT ENGAGEMENTS</p>
              <h3>Healthcare AI & platform delivery</h3>
              <p>Applied AI capabilities, clinical safeguards and service integration in healthcare environments.</p>
            </div>
            <div className="engagement-grid">
              {healthcareEngagements.map((engagement) => (
                <article className="engagement-card" key={engagement.client}>
                  <div className="engagement-card-top"><span>{engagement.category}</span><strong>{engagement.client}</strong></div>
                  <h4>{engagement.title}</h4>
                  <p className="engagement-summary">{engagement.summary}</p>
                  <p className="engagement-contribution">{engagement.contribution}</p>
                  <div className="engagement-subsection">
                    <span>DELIVERY & SAFEGUARDS</span>
                    <div className="engagement-tags">{engagement.safeguards.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <div className="engagement-subsection">
                    <span>TECHNOLOGY</span>
                    <div className="engagement-tags tech">{engagement.technologies.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
