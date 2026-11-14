import React from 'react';

const skillGroups = [
  {
    number: '01', title: 'Generative AI & LLMs', accent: 'violet',
    description: 'Building LLM-powered applications, retrieval workflows and grounded AI experiences.',
    items: ['LLM integration', 'Prompt engineering', 'RAG', 'Embeddings', 'Vector search', 'Context engineering', 'LLM evaluation', 'OpenAI APIs', 'Anthropic APIs']
  },
  {
    number: '02', title: 'Agentic AI & orchestration', accent: 'blue',
    description: 'Connecting models, tools and workflows to create useful agent experiences.',
    items: ['LangChain', 'LangGraph', 'MCP', 'Tool calling', 'Multi-agent patterns', 'Stateful workflows', 'Human-in-the-loop']
  },
  {
    number: '03', title: 'Models & ML', accent: 'cyan',
    description: 'Working across hosted models and local open-weight model environments.',
    items: ['Hugging Face Transformers', 'PyTorch', 'BERT', 'NLP', 'Ollama', 'Qwen3', 'Gemma 3', 'Model training & fine-tuning', 'Model inference']
  },
  {
    number: '04', title: 'Cloud AI platforms', accent: 'orange',
    description: 'Integrating managed AI services and model APIs into application workflows.',
    items: ['Microsoft Foundry (Azure AI Foundry)', 'Amazon Bedrock', 'OpenAI', 'Anthropic', 'AWS']
  },
  {
    number: '05', title: 'Full-stack engineering', accent: 'green',
    description: 'Designing maintainable interfaces and reliable APIs for enterprise products.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'REST', 'GraphQL']
  },
  {
    number: '06', title: 'Architecture & delivery', accent: 'pink',
    description: 'Creating scalable systems and improving the developer and delivery experience.',
    items: ['Microservices', 'Micro-frontends', 'Module Federation', 'System design', 'Docker', 'Kubernetes', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka']
  },
];

export default function Skills() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="page-container">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">CAPABILITIES & TECHNOLOGY</p>
          <h2>From software foundations<br /><span>to intelligent systems.</span></h2>
          <p className="section-intro">A practical mix of enterprise engineering, application architecture and modern AI development.</p>
        </div>
        <div className="expertise-grid">
          {skillGroups.map((group) => (
            <article className={`expertise-card accent-${group.accent}`} key={group.number}>
              <div className="expertise-card-top"><span className="expertise-number">{group.number}</span><span className="expertise-indicator" /></div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="skills-note">Technology list reflects tools and areas used across professional work, personal projects and hands-on development.</p>
      </div>
    </section>
  );
}
