import React from "react";
import "./hero.css";
import heroVideo from "../assets/KOLLAB-herovideo.mp4";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            VI SKABER<br />DIGITALE LØSNINGER<br />
            <span className="hero-highlight">— SAMMEN</span>
          </h1>
          <p className="hero-text">
            Vores specialister har både hjerne og hjerte på rette sted, og sammen udgør vi dit ultimative A-hold.
          </p>
          <div className="hero-actions">
            <a className="hero-btn" href="#kontakt">KONTAKT OS ›</a>
            <a className="hero-btn secondary" href="#cases">CASES ›</a>
          </div>
        </div>
        <div className="hero-media">
          <video className="hero-video" src={heroVideo} autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
}