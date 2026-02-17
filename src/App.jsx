import Header from "./components/header.jsx";
import "./App.css";
import gradientVideo from "./assets/Gradientanimationloop.mp4";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Digital from "./pages/Digital.jsx";
import Services from "./pages/Services.jsx";

function AppContent() {
  const location = useLocation();

  // 🔥 Skjul den “almindelige” header på Digital-siden
  const hideMainHeader = location.pathname.startsWith("/digital");

  return (
    <>
      {!hideMainHeader && <Header />}

      <div className="background-video-layer" aria-hidden="true">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={gradientVideo} type="video/mp4" />
        </video>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
