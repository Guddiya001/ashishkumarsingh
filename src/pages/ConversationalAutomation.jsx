import CaseStudyLayout from './CaseStudyLayout';
import { caseStudies } from '../data/caseStudies';
export default function ConversationalAutomation() { return <CaseStudyLayout study={caseStudies.find((item) => item.id === 'finpay')} />; }
