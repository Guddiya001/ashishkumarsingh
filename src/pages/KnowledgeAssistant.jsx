import CaseStudyLayout from "./CaseStudyLayout";

export default function KnowledgeAssistant() {
  return (
    <CaseStudyLayout
      title="Enterprise Knowledge Assistant (GenAI + RAG)"
      subtitle="LLM-based assistant for enterprise knowledge discovery"

      problem={[
        "Knowledge scattered across multiple tools",
        "Manual lookup slowed onboarding and productivity",
        "High dependency on tribal knowledge",
      ]}

      solution={[
        "Built a production-grade GenAI knowledge assistant",
        "Implemented document ingestion and semantic search",
        "Enabled natural language Q&A over enterprise data",
      ]}

      architecture={[
        "LLMs: OpenAI",
        "RAG Framework: LangChain",
        "Backend: Python, FastAPI",
        "Vector Databases: FAISS / Pinecone",
        "Cloud: AWS (Docker, Kubernetes, CI/CD)",
        "Security: Authenticated APIs and monitoring",
      ]}

      decisions={[
        "Multi-stage retrieval (semantic + ranking)",
        "Prompt grounding to reduce hallucinations",
        "Confidence-based fallback responses",
        "Continuous document ingestion pipelines",
      ]}

      impact={[
        "~60% reduction in manual knowledge lookup time",
        "Improved onboarding speed",
        "Higher trust in AI-generated answers",
      ]}

      learnings={[
        "Enterprise-grade RAG architecture",
        "Hallucination mitigation strategies",
        "Secure AI system deployment",
      ]}
    />
  );
}
