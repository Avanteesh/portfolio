export default function Profile()  {
  return (
    <div className="col-4" style={{display: "grid", placeItems: "center"}}>
      <div style={{width: "100%"}}>
        <div className="card text-bg-dark mb-3" style={{width: "70%"}}>
          <img src="avatar.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="btn-group">
              <a href="https://www.github.com/Avanteesh" className="btn btn-outline-primary">Github</a>
              <a href="https://www.linkedin.com/in/avanteesh-motheram-99a2022a1/" className="btn btn-outline-primary">LinkedIn</a>
              <a href="/portfolio/public/resume.pdf" className="btn btn-outline-primary">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

