import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{t('hero.greeting')} Ashish Kumar Singh</h1>
        <div className="hero-image">
          <img src="profile.jpg" alt="Ashish Kumar Singh" width="200" height="200" />
        </div>
          <h2>
            Senior Full-Stack & GenAI Engineer
          </h2>
          <p>
            {t('hero.description')}
          </p>

          <div className="hero-actions" style={{ paddingTop: '20px' }}>
            <a href="#projects" className="btn-primary">{t('hero.viewProjects')}</a>
            <a href="/resume.pdf" className="btn-outline">{t('hero.downloadResume')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
