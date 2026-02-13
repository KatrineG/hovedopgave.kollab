import React, { useMemo, useRef, useState, useEffect } from "react";
import "./carousel.css";
import arrowIcon from "../assets/button.arrow.svg";

import ppcdImg from "../assets/ppcd.png";
import faboImg from "../assets/fabo.png";
import optikosImg from "../assets/optikos.png";

import saxoImg from "../assets/saxo bank.png";
import omnigraphImg from "../assets/omnigraph.png";
import jksImg from "../assets/jks.png";
import scandlinesImg from "../assets/scandlines.jpg";

export default function Carousel() {
  const slides = useMemo(
    () => [
      { id: 1, title: "Saxo Bank", subtitle: "Sammen med Saxo Bank har vi skabt et læringssetup, der gør viden mere engagerende.", img: saxoImg },
      { id: 2, title: "OmniGraph", subtitle: "Da OmniGraph stod klar med vision og teknologi, hjalp Jumpstart med at føre AI-platformen til virkelighed.", img: omnigraphImg },
      { id: 3, title: "JKS", subtitle: "Hvordan digitaliserer man et helt vikar-setup? Vi har skabt tre integrerede platforme.", img: jksImg },
      { id: 4, title: "Scandlines", subtitle: "Komplekse projekter løst med fokus på drift og brugerrejse.", img: scandlinesImg },
      { id: 5, title: "PPCD", subtitle: "Med en kærlig UX-overhaling er brugeroplevelsen nu skarpere og mere effektiv. Projektet med greenStruct sikrede sig også en UX Nordic Award i 2024.", img: ppcdImg },
      { id: 6, title: "Fabo", subtitle: "Med fokus på digital suverænitet og brugerdrevet e-learning omsatte Learning Lab vision til handling gennem Fabo læringsplatformen.", img: faboImg },
      { id: 7, title: "OptikosPrime", subtitle: "OptikosPrime flytter synstesten fra klinikken til lommen og bringer samtidig global sundhed inden for rækkevidde på 30 sekunder.", img: optikosImg },
    ],
    []
  );

  const trackRef = useRef(null);
  const firstCardRef = useRef(null);

  // ✅ vi måler venstre start på header-indholdet (ikke containerens kant)
  const headerLeftRef = useRef(null);

  const [gutterLeft, setGutterLeft] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const measure = () => {
      const el = headerLeftRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setGutterLeft(Math.max(0, rect.left)); // px fra viewport-left til headerens start
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const getStep = () => {
    const track = trackRef.current;
    const card = firstCardRef.current;
    if (!track || !card) return 0;

    const styles = getComputedStyle(track);
    const gapValue = styles.getPropertyValue("--card-gap").trim();
    const gap = gapValue ? parseFloat(gapValue) : 22;

    return card.offsetWidth + gap;
  };

  const scrollNext = () => {
    const el = trackRef.current;
    if (!el) return;
    setHasInteracted(true);
    el.scrollBy({ left: getStep(), behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = trackRef.current;
    if (!el) return;
    setHasInteracted(true);
    el.scrollBy({ left: -getStep(), behavior: "smooth" });
  };

  return (
    <section className="carousel">
      <div className="k-container">
        <div className="carousel-header">
          <div className="carousel-header-left" ref={headerLeftRef}>
            <div className="eyebrow">Cases</div>
            <h2 className="carousel-title">
              KURVEN ER FYLDT MED GODE ERFARINGER – OG ENDNU TÆTTERE SAMARBEJDER
            </h2>

            <div className="carousel-actions">
              <a href="/" onClick={(e) => e.preventDefault()} className="cases-link">
                <span className="cases-link-text">SE ALLE CASES</span>
                <img src={arrowIcon} alt="" className="cases-link-arrow" />
              </a>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="circle-btn" onClick={scrollPrev} aria-label="Previous" type="button">
              <img src={arrowIcon} alt="" className="circle-arrow prev" />
            </button>
            <button className="circle-btn" onClick={scrollNext} aria-label="Next" type="button">
              <img src={arrowIcon} alt="" className="circle-arrow" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width område så højre side kan gå HELT ud til viewport */}
      <div className="carousel-bleed-area" style={{ "--gutter-left": `${gutterLeft}px` }}>
        <div
          className={
            "carousel-track " + (hasInteracted ? "is-bleed-both" : "is-bleed-right")
          }
          ref={trackRef}
        >
          {slides.map((s, i) => (
            <article key={s.id} ref={i === 0 ? firstCardRef : null} className="carousel-card">
              <div className="card-media">
                <img src={s.img} alt={s.title} className="card-image" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                <p className="card-sub">{s.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
