export const caseStudies = [
  {
    id: 'vastrastudio', number: '01', category: 'AI PRODUCT ENGINEERING', stage: 'Product build',
    title: 'VastraStudio AI', subtitle: 'A workflow-oriented AI catalog studio for fashion commerce.',
    summary: 'Designing a system that turns fragmented seller inputs and garment imagery into structured, marketplace-ready catalog workflows.',
    context: 'Fashion sellers often coordinate product imagery, model presentation, product copy and channel-specific catalog requirements across disconnected tools. The engineering challenge is not a single image-generation call; it is coordinating a repeatable workflow while keeping product data and generated assets connected.',
    approach: [
      ['Workflow boundaries', 'Separate garment and product data, generation requests, generated assets and catalog outputs so each stage can be validated and retried independently.'],
      ['Typed service contracts', 'Use Python, FastAPI, Pydantic and SQLAlchemy to define explicit request and persistence boundaries between the application and its AI workflows.'],
      ['Seller-facing experience', 'Use Next.js and TypeScript for a responsive workspace that organizes catalog operations rather than exposing raw model interactions.'],
      ['Operational packaging', 'Use Docker and a PWA-oriented delivery approach to support a consistent development and application experience.']
    ],
    architecture: ['Next.js + TypeScript application layer', 'Python + FastAPI service layer', 'Pydantic request and response validation', 'SQLAlchemy persistence layer', 'AI-assisted catalog and virtual try-on workflows', 'Docker-based application packaging'],
    decisions: [
      ['Keep workflow state explicit', 'Generation is asynchronous and can fail independently of catalog data. Representing workflow states makes retries and user feedback easier to reason about.'],
      ['Validate before persistence', 'Typed schemas reduce ambiguity at service boundaries and make invalid inputs easier to reject close to the source.'],
      ['Separate product data from generated media', 'This avoids coupling catalog identity to a particular generation attempt and allows assets to be reviewed or regenerated.']
    ],
    engineering: ['Model and image-provider latency must not block the user interface.', 'Generated output needs review before it becomes a seller-facing catalog asset.', 'Marketplace requirements should be represented as explicit constraints, not scattered UI conditionals.', 'Retries must avoid creating confusing duplicate catalog records.'],
    evidence: 'Repository: VastraStudio-AI. The description reflects the project scope and named technologies; it does not claim measured production adoption or performance improvements.',
    stack: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Pydantic', 'SQLAlchemy', 'Docker'],
    links: [{label:'Source code', url:'https://github.com/Guddiya001/VastraStudio-AI'}]
  },
  {
    id: 'mcp-file-assistant', number: '02', category: 'AGENT INTEGRATION', stage: 'Developer tool',
    title: 'MCP File Assistant', subtitle: 'A controlled file-tool interface for MCP-compatible AI clients.',
    summary: 'Expose useful workspace operations through Model Context Protocol without giving an assistant unrestricted filesystem access.',
    context: 'An AI assistant can only work reliably with local project material when its tools have clear contracts and predictable boundaries. The core problem is to make file discovery and reading available to an MCP client while limiting access to the intended workspace.',
    approach: [
      ['Tool-oriented interface', 'Expose file listing, file reading and content search as discrete MCP tools with focused responsibilities.'],
      ['Resource discovery', 'Represent reusable workspace information through MCP resources where appropriate, rather than making every interaction an ad-hoc prompt.'],
      ['Filesystem boundary', 'Resolve requested paths against a configured workspace and guard against path traversal outside that boundary.'],
      ['Python implementation', 'Use Python and FastMCP to keep tool definitions direct, readable and straightforward to extend.']
    ],
    architecture: ['MCP-compatible client', 'FastMCP server and tool registry', 'Workspace/path validation layer', 'Filesystem access through pathlib', 'Structured tool results returned to the client'],
    decisions: [
      ['Constrain the workspace', 'The server should operate only within an explicitly configured root; user-supplied paths must not become arbitrary filesystem paths.'],
      ['Keep tools small and composable', 'Listing, reading and searching are separate capabilities, making permissions and failure handling easier to reason about.'],
      ['Return bounded results', 'Search and file-reading operations should avoid unbounded output that can overwhelm an LLM context window.']
    ],
    engineering: ['Reject paths that resolve outside the permitted workspace.', 'Handle missing files, unsupported file types and read errors as clear tool responses.', 'Bound search output and file content to keep context manageable.', 'Treat file contents as untrusted data, not as instructions to the assistant.'],
    evidence: 'Repository: file-assistant. This is a developer-tool project; no claim is made that it is a hosted enterprise service.',
    stack: ['Python', 'MCP', 'FastMCP', 'pathlib'],
    links: [{label:'Source code', url:'https://github.com/Guddiya001/file-assistant'}]
  },
  {
    id: 'finpay', number: '03', category: 'FINTECH ENGINEERING', stage: 'Full-stack system',
    title: 'FinPay', subtitle: 'A refund-management workflow built around transaction integrity.',
    summary: 'Model refund operations as a controlled financial workflow, where duplicate requests, concurrent updates and auditability matter as much as the user interface.',
    context: 'Refund operations are sensitive to retries and concurrency. A repeated request must not create a second refund, and the system needs a traceable record of what changed. This project focuses on those engineering concerns rather than treating a refund as a simple CRUD update.',
    approach: [
      ['Explicit refund lifecycle', 'Separate transaction lookup, eligibility checks and refund execution so each step has a clear responsibility.'],
      ['Idempotent request handling', 'Use an idempotency strategy to make client retries safe and prevent duplicate processing of the same logical request.'],
      ['Concurrency protection', 'Protect transaction updates against competing requests using database-level consistency mechanisms.'],
      ['Traceability and tests', 'Record audit-relevant events and exercise backend behavior with automated tests.']
    ],
    architecture: ['React + TypeScript user interface', 'Node.js + Express API', 'PostgreSQL persistence', 'JWT-based authentication and authorization', 'Idempotency and transaction consistency controls', 'Jest and Supertest test coverage'],
    decisions: [
      ['Make retries safe', 'Idempotency is a business correctness requirement for financial operations, not merely an API convenience.'],
      ['Enforce invariants near the data', 'Concurrency-sensitive rules should be protected by database transactions/locking rather than relying only on frontend state.'],
      ['Preserve an audit trail', 'Refund actions need traceable records to support investigation and operational review.'],
      ['Test failure paths', 'Duplicate submissions, invalid states and concurrent requests are important scenarios alongside the happy path.']
    ],
    engineering: ['A retry should not create a second refund.', 'Concurrent operations must not violate transaction state.', 'Authorization must be checked at the API boundary.', 'Sensitive information should be masked in logs and responses.'],
    evidence: 'Repository: finpay. The case study describes implemented design concerns visible in the project; it does not claim financial institution deployment or transaction-volume metrics.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Jest', 'Supertest'],
    links: [{label:'Source code', url:'https://github.com/Guddiya001/finpay'}]
  }
];
