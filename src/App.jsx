import "./App.css";
import gradientVideo from "./assets/Gradientanimationloop.mp4";
import Footer from "./components/Footer.jsx";

import { useEffect } from "react";

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

function selectBackgroundColor() {

  const elements = document.querySelectorAll('[data-scrolling-color]');
  const viewportCenter = window.innerHeight / 2;
  let closestDistance = Infinity;
  let selectedColor = null;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const elementCenter = (rect.top + rect.bottom) / 2;
    const distance = Math.abs(elementCenter - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      selectedColor = el.getAttribute('data-scrolling-color') || getComputedStyle(el).backgroundColor;
    }
  });

    // Add scroll background to .k-main
    const kMain = document.querySelector('.k-main');
    if (kMain) {
      if (window.scrollY > 0) {
        kMain.classList.add('scrolled');
      kMain.style.background = selectedColor || '';
      } else {
        kMain.classList.remove('scrolled');
        kMain.style.background = '';
      }

    }

  document.body.style.background = selectedColor || '';
}

function AppContent() {
  const location = useLocation();
  const isDigital = location.pathname.startsWith("/digital");

  useEffect(() => {
    window.addEventListener('scroll', selectBackgroundColor);
    // Call once on mount
    selectBackgroundColor();
    return () => {
      window.removeEventListener('scroll', selectBackgroundColor);
    };
  }, []);

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
