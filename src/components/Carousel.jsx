import React, { useRef } from "react";
import "./carousel.css";

const slides = [
  {
    id: 1,
    title: "Saxo Bank",
    subtitle:
      "Sammen med Saxo Bank har vi skabt et læringssetup, der gør viden mere engagerende.",
    img: "src/assets/saxo bank.png",
  },
  {
    id: 2,
    title: "OmniGraph",
    subtitle:
      "Da OmniGraph stod klar med vision og teknologi, hjalp Jumpstart med at føre AI-platformen til virkelighed.",
    img: "src/assets/omnigraph.png",
  },
  {
    id: 3,
    title: "JKS",
    subtitle:
      "Hvordan digitaliserer man et helt vikar-setup? Vi har skabt tre integrerede platforme.",
    img: "src/assets/jks.png",
  },
  {
    id: 4,
    title: "Scandlines",
    subtitle:
      "Komplekse projekter løst med fokus på drift og brugerrejse.",
    img: "src/assets/scandlines.jpg",
  },
  {
    id: 5,
    title: "Case Five",
    subtitle: "Kort beskrivelse af casen.",
    img: "https://via.placeholder.com/420x280?text=Image+5",
  },
];

export default function Carousel() {
  const trackRef = useRef(null);

  const scrollNext = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.95, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth * 0.95, behavior: "smooth" });
  };

  return (
    <section className="carousel">
      <div className="carousel-header">
        <div className="carousel-header-left">
          <div className="eyebrow">Cases</div>
          <h2 className="carousel-title">KURVEN ER FYLDT MED GODE ERFARINGER – OG ENDNU TÆTTERE SAMARBEJDER</h2>
        </div>
        <div className="carousel-controls">
          <button className="circle-btn" onClick={scrollPrev} aria-label="Previous">
            ‹
          </button>
          <button className="circle-btn" onClick={scrollNext} aria-label="Next">
            ›
          </button>
        </div>
      </div>

      <div className="carousel-track" ref={trackRef}>
        {slides.map((s) => (
          <article key={s.id} className="carousel-card">
            <div className="card-image-wrap">
              <img src={s.img} alt={s.title} className="card-image" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{s.title}</h3>
              <p className="card-sub">{s.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
