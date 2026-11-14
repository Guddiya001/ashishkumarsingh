import CaseStudyLayout from './CaseStudyLayout';
import { caseStudies } from '../data/caseStudies';
export default function KnowledgeAssistant() { return <CaseStudyLayout study={caseStudies.find((item) => item.id === 'mcp-file-assistant')} />; }
