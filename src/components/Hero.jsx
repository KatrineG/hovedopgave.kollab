import React from "react";
import "./hero.css";
import heroVideo from "../assets/KOLLAB-herovideo.mp4";
import ButtonArrow from "../assets/button.arrow.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-title">
            VI SKABER
            <br />
            DIGITALE LØSNINGER
            <br />
            <span className="hero-dash">–</span> SAMMEN
          </h1>

          <p className="hero-text">
            Vores specialister har både hjerne og hjerte på rette sted, og sammen
            udgør vi dit ultimative A-hold.
          </p>

          <div className="hero-actions">
            <a className="hero-link" href="#kontakt">
              <span className="hero-link-label">KONTAKT OS</span>
              <img
                className="hero-link-arrow"
                src={ButtonArrow}
                alt=""
                aria-hidden="true"
              />
            </a>

            <a className="hero-link" href="#cases">
              <span className="hero-link-label">CASES</span>
              <img
                className="hero-link-arrow"
                src={ButtonArrow}
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-media">
          <div className="hero-video-crop">
            <video
              className="hero-video"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
