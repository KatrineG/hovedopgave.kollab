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

  const items = [...logos, ...logos];

  return (

    <section className="marquee-section" aria-label="Client logos marquee">

      {/* 👇 NY – Samarbejder */}
      <div className="marquee-eyebrow">
        Samarbejder
      </div>


      <h2 className="marquee-title">

        VI HAR GJORT DET 1.000 GANGE FØR, OG VI GØR DET GERNE IGEN

      </h2>


      <div className="marquee fade">

        <div className="marquee-track">

          {items.map((l, i) => (

            <div className="marquee-item" key={`${l.id}-${i}`}>

              <img src={l.img} alt={l.alt} loading="lazy" />

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}
