import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.item1.title'),
      company: t('experience.item1.company'),
      location: t('experience.item1.location'),
      duration: t('experience.item1.duration'),
      points: t('experience.item1.points', { returnObjects: true })
    },
    {
      title: t('experience.item2.title'),
      company: t('experience.item2.company'),
      location: t('experience.item2.location'),
      duration: t('experience.item2.duration'),
      points: t('experience.item2.points', { returnObjects: true })
    },
    {
      title: t('experience.item3.title'),
      company: t('experience.item3.company'),
      location: t('experience.item3.location'),
      duration: t('experience.item3.duration'),
      points: t('experience.item3.points', { returnObjects: true })
    },
    {
      title: t('experience.item4.title'),
      company: t('experience.item4.company'),
      location: t('experience.item4.location'),
      duration: t('experience.item4.duration'),
      points: t('experience.item4.points', { returnObjects: true })
    },
    {
      title: t('experience.item5.title'),
      company: t('experience.item5.company'),
      location: t('experience.item5.location'),
      duration: t('experience.item5.duration'),
      points: t('experience.item5.points', { returnObjects: true })
    }
  ];

  return (
    <section id="experience">
      <h2>{t('experience.title')}</h2>

      <div className="experience-list">
        {experiences.map((exp, i) => (
          <ExperienceItem
            key={i}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            duration={exp.duration}
            points={exp.points}
          />
        ))}
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
