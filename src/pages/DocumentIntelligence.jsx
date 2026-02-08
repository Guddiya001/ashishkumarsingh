import CaseStudyLayout from "./CaseStudyLayout";
import { useTranslation } from 'react-i18next';

export default function DocumentIntelligence() {
  const { t } = useTranslation();

  return (
    <CaseStudyLayout
      title={t('caseStudies.documentIntelligence.title')}
      subtitle={t('caseStudies.documentIntelligence.subtitle')}

      problem={t('caseStudies.documentIntelligence.problem', { returnObjects: true })}

      solution={t('caseStudies.documentIntelligence.solution', { returnObjects: true })}

      architecture={t('caseStudies.documentIntelligence.architecture', { returnObjects: true })}

      decisions={t('caseStudies.documentIntelligence.decisions', { returnObjects: true })}

      impact={t('caseStudies.documentIntelligence.impact', { returnObjects: true })}

      learnings={t('caseStudies.documentIntelligence.learnings', { returnObjects: true })}
    />
  );
}
