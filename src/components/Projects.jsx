import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.item1.title'),
      description: t('projects.item1.description'),
      impact: t('projects.item1.impact'),
      tech: t('projects.item1.tech')
    },
    {
      title: t('projects.item2.title'),
      description: t('projects.item2.description'),
      impact: t('projects.item2.impact'),
      tech: t('projects.item2.tech')
    },
    {
      title: t('projects.item3.title'),
      description: t('projects.item3.description'),
      impact: t('projects.item3.impact'),
      tech: t('projects.item3.tech')
    }
  ];

  return (
    <section id="projects">
      <h2>{t('projects.title')}</h2>

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

