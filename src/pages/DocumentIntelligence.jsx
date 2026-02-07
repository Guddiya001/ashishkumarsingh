import CaseStudyLayout from "./CaseStudyLayout";

export default function DocumentIntelligence() {
  return (
    <CaseStudyLayout
      title="AI Document Intelligence & Automation Platform"
      subtitle="GenAI-powered document processing using RAG and LLMs"

      problem={[
        "Manual processing of large volumes of structured and unstructured documents",
        "OCR-based systems failed to understand context and long documents",
        "High turnaround time and operational bottlenecks",
      ]}

      solution={[
        "Designed a GenAI-powered document intelligence platform",
        "Implemented Retrieval-Augmented Generation (RAG) pipelines",
        "Added human-in-the-loop validation workflows",
      ]}

      architecture={[
        "LLMs: OpenAI GPT models",
        "GenAI Framework: LangChain",
        "Backend: Python, Node.js",
        "Vector Databases: FAISS / Pinecone",
        "Caching: Redis",
        "Frontend: React",
        "Cloud: AWS (Docker, Kubernetes, CI/CD)",
      ]}

      decisions={[
        "Semantic chunking to preserve document context",
        "Batch inference and caching to reduce LLM costs",
        "Token optimization for long-document summarization",
        "Fallback strategies for low-confidence retrieval",
      ]}

      impact={[
        "45–55% improvement in document processing efficiency",
        "Reduced manual review time significantly",
        "Production-ready, cost-efficient GenAI deployment",
      ]}

      learnings={[
        "End-to-end GenAI system design",
        "Cost–latency–accuracy trade-offs in production",
        "Scalable RAG architecture for enterprises",
      ]}
    />
  );
}
