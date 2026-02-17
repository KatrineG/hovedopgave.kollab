import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import "./carousel.css";
import arrowIcon from "../assets/arrow.orange.svg";

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

  // 0px marker der står PRÆCIS hvor din header-tekst starter
  const alignRef = useRef(null);

  const [alignLeftPx, setAlignLeftPx] = useState(0);

  // Før klik: flugt venstre til header-start + bleed højre.
  // Efter klik: må gerne bleed helt venstre.
  const [hasInteracted, setHasInteracted] = useState(false);

  // Active card + disabled knapper
  const [activeId, setActiveId] = useState(slides[0]?.id ?? null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // --- measure header-start (align marker) ---
  useEffect(() => {
    const measure = () => {
      const el = alignRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setAlignLeftPx(Math.max(0, rect.left));
    };

    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 0);

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  // --- step for 1-card-per-click ---
  const getStep = () => {
    const track = trackRef.current;
    const card = firstCardRef.current;
    if (!track || !card) return 0;

    const styles = getComputedStyle(track);
    const gapValue = styles.getPropertyValue("--card-gap").trim();
    const gap = gapValue ? parseFloat(gapValue) : 22;

    return card.offsetWidth + gap;
  };

  // --- update UI state on scroll (active card + disabled) ---
  const rafRef = useRef(0);

  const updateUIState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;

    // disabled state
    const atStart = scrollLeft <= 2;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 2;
    setCanPrev(!atStart);
    setCanNext(!atEnd);

    // active card: find card closest to reference X
    // before interaction: reference is header start line (alignLeftPx)
    // after interaction: reference is viewport left (0)
    const refX = hasInteracted ? 0 : alignLeftPx;

    const cards = Array.from(track.querySelectorAll(".carousel-card"));
    let bestId = activeId;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs(rect.left - refX);
      if (dist < bestDist) {
        bestDist = dist;
        const idStr = card.getAttribute("data-id");
        bestId = idStr ? Number(idStr) : bestId;
      }
    }

    if (bestId !== activeId) setActiveId(bestId);
  }, [activeId, alignLeftPx, hasInteracted]);

  const onScroll = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(updateUIState);
  };

  useEffect(() => {
    // initial + when hasInteracted/alignLeftPx changes
    updateUIState();
  }, [updateUIState]);

  // --- controls ---
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

  // (valgfri) keyboard support: piletaster når track er fokuseret
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    }
  };

  return (
    <section className="carousel">
      <div className="k-container">
        <div className="carousel-header">
          <div className="carousel-header-left">
            <span ref={alignRef} className="carousel-align-marker" />

            <div className="eyebrow">Cases</div>
            <h2 className="carousel-title">
              KURVEN ER FYLDT MED GODE ERFARINGER – OG ENDNU TÆTTERE SAMARBEJDER
            </h2>

            <div className="carousel-actions">
              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="cases-link"
              >
                <span className="cases-link-text">SE ALLE CASES</span>
                <img src={arrowIcon} alt="" className="cases-link-arrow" />
              </a>
            </div>
          </div>

          <div className="carousel-controls">
            <button
              className="circle-btn"
              onClick={scrollPrev}
              aria-label="Previous"
              type="button"
              disabled={!canPrev}
            >
              <img src={arrowIcon} alt="" className="circle-arrow prev" />
            </button>

            <button
              className="circle-btn"
              onClick={scrollNext}
              aria-label="Next"
              type="button"
              disabled={!canNext}
            >
              <img src={arrowIcon} alt="" className="circle-arrow" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width område: højre bleed er altid muligt */}
      <div
        className="carousel-bleed-area"
        style={{ "--align-left": `${alignLeftPx}px` }}
      >
        <div
          className={
            "carousel-track " +
            (hasInteracted ? "is-bleed-both" : "is-bleed-right")
          }
          ref={trackRef}
          onScroll={onScroll}
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-label="Cases carousel"
        >
          {slides.map((s, i) => (
            <article
              key={s.id}
              data-id={s.id}
              ref={i === 0 ? firstCardRef : null}
              className={"carousel-card " + (activeId === s.id ? "is-active" : "")}
            >
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
