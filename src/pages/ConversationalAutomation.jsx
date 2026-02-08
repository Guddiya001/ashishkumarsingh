import CaseStudyLayout from "./CaseStudyLayout";
import { useTranslation } from 'react-i18next';

export default function ConversationalAutomation() {
  const { t } = useTranslation();

  return (
    <CaseStudyLayout
      title={t('caseStudies.conversationalAutomation.title')}
      subtitle={t('caseStudies.conversationalAutomation.subtitle')}

      problem={t('caseStudies.conversationalAutomation.problem', { returnObjects: true })}

      solution={t('caseStudies.conversationalAutomation.solution', { returnObjects: true })}

      architecture={t('caseStudies.conversationalAutomation.architecture', { returnObjects: true })}

      decisions={t('caseStudies.conversationalAutomation.decisions', { returnObjects: true })}

      impact={t('caseStudies.conversationalAutomation.impact', { returnObjects: true })}

      learnings={t('caseStudies.conversationalAutomation.learnings', { returnObjects: true })}
    />
  );
}
