export default function FooterPage()  {
  return (
  <div className="container" >
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
      </div>
    </div>
  </div>
  );
}
