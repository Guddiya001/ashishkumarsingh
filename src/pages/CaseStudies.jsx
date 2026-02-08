import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function CaseStudies() {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('caseStudies.title')}</h1>

      <ul className="case-list">
        <li>
          <Link to="/case-studies/document-intelligence">
            {t('caseStudies.documentIntelligence.title')}
          </Link>
        </li>
        <li>
          <Link to="/case-studies/enterprise-knowledge-assistant">
            {t('caseStudies.knowledgeAssistant.title')}
          </Link>
        </li>
        <li>
          <Link to="/case-studies/conversational-automation">
            {t('caseStudies.conversationalAutomation.title')}
          </Link>
        </li>
      </ul>
    </section>
  );
}
