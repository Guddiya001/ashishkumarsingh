import { Link } from "react-router-dom";

export default function CaseStudies() {
  return (
    <section>
      <h1>GenAI Case Studies</h1>

      <ul className="case-list">
        <li>
          <Link to="/case-studies/document-intelligence">
            AI Document Intelligence & Automation
          </Link>
        </li>
        <li>
          <Link to="/case-studies/enterprise-knowledge-assistant">
            Enterprise Knowledge Assistant
          </Link>
        </li>
        <li>
          <Link to="/case-studies/conversational-automation">
            Conversational Automation System
          </Link>
        </li>
      </ul>
    </section>
  );
}
