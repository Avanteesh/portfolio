import Editor from "@monaco-editor/react";

export default function FooterPage()  {
  const skillsJson: string = `{
  "core_identity": {
    "role": "Systems Engineer",
    "approach": "First-Principles Thinking"
  },
  "engineering_interests": [
    "Concurrency Models",
    "Protocol Design",
    "Parser Construction",
    "Storage Systems",
    "Performance Trade-offs"
  ],
  "technologies_that_shaped_my_thinking": [
    {
      "name": "Linux",
      "why": "An example of craftsmanship in operating system design."
    },
    {
      "name": "C",
      "why": "Gives direct control over memory and execution, which forces careful thinking and responsibility."
    },
    {
      "name": "SQLite",
      "why": "A small, self-contained system that demonstrates how disciplined engineering and simplicity can scale to global adoption."
    },
    {
      "name": "Redis",
      "why": "Elegant data structures with predictable performance."
    },
    {
      "name": "Elixir",
      "why": "Inspired by Erlang's telecom heritage and Joe Armstrong's approach to building fault-tolerant distributed systems."
    }
  ]
}`;
  return (
  <div className="container" >
    <div className="container py-4" style={{width: '96%'}}>
      <h1 style={{margin: "8px", color: "#fff"}}>systems_philosophy.json</h1>
      <Editor height="80vh" width="100%" language="json" theme="hc-black" value={skillsJson}
        path="systems.json" options={{fontSize: 17, minimap: {enabled: false},readOnly: true}}
      />
    </div>
    <div className="container py-4">
      <h1 style={{margin: "8px", color: "#fff"}}>~/.projects</h1>
      <div className="row g-3">
        <div className="mb-4">
          <div className="border rounded p-4 bg-dark text-light">
            <a href="https://github.com/aashishraieng/metaverse.club" className="fw-semibold fs-5 text-decoration-none">metaverse.com</a>
            <p className="text-secondary mt-2 mb-3">Full-stack platform for university club registrations and talent portfolios. Built with a backend-first approach, focusing on scalability and maintainability.</p>
            <div className="d-flex gap-4 small text-secondary align-items-center">
              <span className="d-flex align-items-center gap-1">
              <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: "#f1e05a" }}/>JavaScript</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="border rounder p-4 bg-dark text-light">
            <a href="https://github.com/Avanteesh/KeyValueStore-with-Remote-Procedure-Calls" className="fw-semibold fs-5 text-decoration-none">Keyvalue store like redis</a>
            <p className="text-secondary mt-2 mb-3">A simplified in-memory key-value store inspired by Redis and uses JSON-RPC. Built to understand data structures and request handling.</p>
            <div className="d-flex gap-4 small text-secondary align-items-center">
              <span className="d-flex align-items-center gap-1">
              <span className="rounded-circle" style={{width: 10, height: 10, backgroundColor: "#0462bf"}} />Python</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="border rounder p-4 bg-dark text-light">
            <a href="https://github.com/Avanteesh/Your-Shell-AI-Agent" className="fw-semibold fs-5 text-decoration-none">Shell AI agent</a>
            <p className="text-secondary mt-2 mb-3">An AI-powered shell assistant that interprets user intent and executes shell commands with safety checks. Built to explore command execution, system interaction, and human-in-the-loop automation.</p>
            <div className="d-flex gap-4 small text-secondary align-items-center">
              <span className="d-flex align-items-center gap-1">
              <span className="rounded-circle" style={{width: 10, height:10, backgroundColor: "#0462bf"}} />Python</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="border rounder p-4 bg-dark text-light">
            <a href="https://github.com/Avanteesh/Transpyler" className="fw-semibold fs-5 text-decoration-none">Transpyler</a>
            <p className="text-secondary mt-2 mb-3">Transpyler is a miniature programming language and transpiler written in Python. It parses custom syntax, builds an AST, and generates valid Python code — a playground for compiler design and DSL experimentation. </p>
            <div className="d-flex gap-4 small text-secondary align-items-center">
              <span className="d-flex align-items-center gap-1">
              <span className="rounded-circle" style={{width: 10, height: 10, backgroundColor: "#0462bf"}} />Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
