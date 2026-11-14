import CaseStudyLayout from './CaseStudyLayout';
import { caseStudies } from '../data/caseStudies';
export default function DocumentIntelligence() { return <CaseStudyLayout study={caseStudies.find((item) => item.id === 'vastrastudio')} />; }
