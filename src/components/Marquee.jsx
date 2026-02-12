import React from "react";
import "./marquee.css";

const logos = [
  { id: 1, alt: "Vestas", img: "src/assets/vestaslogo.png" },
  { id: 2, alt: "DR", img: "src/assets/drlogo.png" },
  { id: 3, alt: "L'Oreal", img: "src/assets/loreallogo.png" },
  { id: 4, alt: "GLS", img: "src/assets/glslogo.png" },
  { id: 5, alt: "Saxo", img: "src/assets/saxologo.png" },
  { id: 6, alt: "Salling", img: "src/assets/sallinglogo.png" },
];

export default function Marquee() {
  // Duplicate the logos array so the CSS animation can loop seamlessly
  const items = [...logos, ...logos];

  return (
    <div className="marquee" aria-label="Client logos marquee">
      <div className="marquee-track">
        {items.map((l, i) => (
          <div className="marquee-item" key={i}>
            <img src={l.img} alt={l.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
