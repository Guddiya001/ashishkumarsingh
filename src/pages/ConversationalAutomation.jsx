import CaseStudyLayout from "./CaseStudyLayout";

export default function ConversationalAutomation() {
  return (
    <CaseStudyLayout
      title="LLM-Based Conversational Automation System"
      subtitle="Scalable conversational AI for support and workflows"

      problem={[
        "Repetitive customer and internal workflow queries",
        "Rule-based bots lacked flexibility",
        "High load on human agents",
      ]}

      solution={[
        "Designed an LLM-powered conversational system",
        "Enabled multi-turn context-aware conversations",
        "Automated workflow execution via tool calling",
      ]}

      architecture={[
        "LLMs: OpenAI",
        "GenAI Framework: LangChain",
        "Backend: Python, FastAPI",
        "Event Streaming: Kafka",
        "Cloud: AWS (API Gateway, Autoscaling, IAM)",
      ]}

      decisions={[
        "Conversation memory and state management",
        "Dynamic tool/function calling",
        "Event-driven architecture using Kafka",
        "Role-based access control for security",
      ]}

      impact={[
        "70%+ query auto-resolution rate",
        "Reduced support workload significantly",
        "Improved response time and satisfaction",
      ]}

      learnings={[
        "Conversational AI at scale",
        "Event-driven GenAI systems",
        "Secure and reliable cloud deployment",
      ]}
    />
  );
}
