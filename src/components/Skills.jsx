import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <h2>{t('skills.title')}</h2>

      <div className="skill-grid">
        <div>
          <h4>{t('skills.genai')}</h4>
          <p>{t('skills.genaiDesc')}</p>
        </div>

        <div>
          <h4>{t('skills.backend')}</h4>
          <p>{t('skills.backendDesc')}</p>
        </div>

        <div>
          <h4>{t('skills.frontend')}</h4>
          <p>{t('skills.frontendDesc')}</p>
        </div>

        <div>
          <h4>{t('skills.cloud')}</h4>
          <p>{t('skills.cloudDesc')}</p>
        </div>
        <div>
          <h4>{t('skills.enterprise')}</h4>
          <p>{t('skills.enterpriseDesc')}</p>
        </div>
        <div>
          <h4>{t('skills.leadership')}</h4>
          <p>{t('skills.leadershipDesc')}</p>
        </div>

      </div>
    </section>
  );
}

