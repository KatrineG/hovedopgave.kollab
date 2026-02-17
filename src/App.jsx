import "./App.css";
import gradientVideo from "./assets/Gradientanimationloop.mp4";
import Footer from "./components/Footer.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from "./components/header.jsx";
import KollabDigitalHeader from "./components/KollabDigitalHeader.jsx";

import Home from "./pages/Home.jsx";
import Digital from "./pages/Digital.jsx";
import Services from "./pages/Services.jsx";
import MiniHeader from "./components/mini-header.jsx";

function AppContent() {
  const location = useLocation();
  const isDigital = location.pathname.startsWith("/digital");

  return (
    <>
      {/* ✅ altid én header: normal eller digital */}
      <MiniHeader />
      {isDigital ? <KollabDigitalHeader /> : <Header />}

      {/* ✅ baggrundsvideo (kan være global nu uden at ødelægge layout) */}
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
    
      <Footer />
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
