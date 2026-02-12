import React from "react";
import "./spotlight.css";
import ArrowFig from "../assets/arrow-figur.svg";

export default function Spotlight() {
  return (
    <section className="spotlight">
      <div className="spotlight-inner">
        <div className="spotlight-media">
          <img
            src="https://via.placeholder.com/420x560?text=Dummy+Image"
            alt="Spotlight"
            className="spotlight-img"
          />
        </div>

        <div className="spotlight-body">
          <div className="spotlight-eyebrow">Karriere</div>
          <h2 className="spotlight-title">LIVET ER FOR KORT TIL KEDLIGE ARBEJDSPLADSER</h2>
          <p className="spotlight-text">
            Bag stærke løsninger står passionerede mennesker. Vi tror på forskellighed,
            fællesskab og faglighed. Der er plads til både grin og ambitioner. Og
            til at dyrke fællesskabet – også uden for arbejdet.
          </p>
          <a className="spotlight-cta">BLIV EN DEL AF HOLDEN</a>
        </div>

        <img src={ArrowFig} alt="decorative" className="spotlight-figure" />
      </div>
    </section>
  );
}
