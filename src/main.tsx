import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CodeSegment from "./components/CodeSegment.tsx";
import Profile from "./components/profile.tsx";
import FooterPage from "./components/FooterPage.tsx";
import "bootstrap/dist/css/bootstrap.css";
import './index.css'

function App()  {
  return (<>
    <div className="row">
      <CodeSegment />
      <Profile />
    </div>
    <FooterPage />
  </>);
}


createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
