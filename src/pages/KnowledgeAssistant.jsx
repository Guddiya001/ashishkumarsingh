import CaseStudyLayout from "./CaseStudyLayout";
import { useTranslation } from 'react-i18next';

export default function KnowledgeAssistant() {
  const { t } = useTranslation();

  return (
    <CaseStudyLayout
      title={t('caseStudies.knowledgeAssistant.title')}
      subtitle={t('caseStudies.knowledgeAssistant.subtitle')}

      problem={t('caseStudies.knowledgeAssistant.problem', { returnObjects: true })}

      solution={t('caseStudies.knowledgeAssistant.solution', { returnObjects: true })}

      architecture={t('caseStudies.knowledgeAssistant.architecture', { returnObjects: true })}

      decisions={t('caseStudies.knowledgeAssistant.decisions', { returnObjects: true })}

      impact={t('caseStudies.knowledgeAssistant.impact', { returnObjects: true })}

      learnings={t('caseStudies.knowledgeAssistant.learnings', { returnObjects: true })}
    />
  );
}
