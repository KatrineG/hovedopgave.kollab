// Spotlight.jsx
import React, { useEffect, useRef, useState } from "react";
import "./spotlight.css";

import Karriere1 from "../assets/karriere.billede.png";
import Karriere2 from "../assets/karriere2.billede.png";
import Karriere3 from "../assets/karriere3.billede.png";
import Karriere4 from "../assets/karriere4.billede.png";
import Karriere5 from "../assets/karriere5.billede.png"; // ret hvis din fil faktisk hedder .opng

import ButtonArrow from "../assets/button.arrow.svg";
import ArrowFig from "../assets/arrow-figur.svg";

export default function Spotlight() {
  const images = [Karriere1, Karriere2, Karriere3, Karriere4, Karriere5];
  const [current, setCurrent] = useState(0);

  // slideshow: skift hvert 5. sekund (smooth fade via CSS)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  // scroll-linked arrow: KUN translate (ingen rotation) + kun opdater ved scroll/resize
  const sectionRef = useRef(null);
  const figRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const figEl = figRef.current;
    if (!sectionEl || !figEl) return;

    let rafId = 0;
    let active = false;

    const clamp01 = (v) => Math.max(0, Math.min(1, v));
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    // ===== TUNING =====
    const startX = 240; // starter ude til højre
    const startY = 14;  // lille offset (så den ikke rammer kant helt hårdt)
    const slow = 0.30;  // lavere = langsommere bevægelse

    const updateOnce = () => {
      rafId = 0;
      if (!active) return;

      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 0;

      // Lang scroll-range for at gøre bevægelsen langsom
      const start = vh * 0.95;
      const end = -rect.height * 0.85;

      const raw = (start - rect.top) / (start - end);
      const p = clamp01(raw);

      const t = easeOutCubic(clamp01(p * slow));

      const x = (1 - t) * startX;
      const y = (1 - t) * startY;

      // ✅ KUN translate — helt lige hele tiden
      figEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onScrollOrResize = () => {
      if (!active) return;
      if (!rafId) rafId = requestAnimationFrame(updateOnce);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;

        if (active) {
          onScrollOrResize(); // sæt position med det samme
          window.addEventListener("scroll", onScrollOrResize, { passive: true });
          window.addEventListener("resize", onScrollOrResize);
        } else {
          window.removeEventListener("scroll", onScrollOrResize);
          window.removeEventListener("resize", onScrollOrResize);
          if (rafId) cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { threshold: 0.01 }
    );

    io.observe(sectionEl);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="spotlight" ref={sectionRef}>
      <div className="spotlight-inner">
        <div className="spotlight-media" aria-hidden="true">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={index === current ? "spotlight-img active" : "spotlight-img"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>

        <div className="spotlight-body">
          <div className="spotlight-eyebrow">Karriere</div>

          <h2 className="spotlight-title">
            LIVET ER FOR KORT TIL <br />
            KEDELIGE ARBEJDSPLADSER
          </h2>

          <p className="spotlight-text">
            Bag stærke løsninger står passionerede mennesker.
            <br />
            Vi tror på forskellighed, fællesskab og faglighed.
            <br />
            Der er plads til både grin og ambitioner.
            <br />
            Og til at dyrke fællesskabet – også uden for arbejdet.
          </p>

          <a className="spotlight-cta" href="/" onClick={(e) => e.preventDefault()}>
            <span className="spotlight-cta-text">BLIV EN DEL AF HOLDET</span>
            <img className="spotlight-cta-arrow" src={ButtonArrow} alt="" />
          </a>
        </div>

        {/* Dekorativ figur (bemærk: hvis SVG-filen selv er skæv, skal den rettes i asset) */}
        <img ref={figRef} src={ArrowFig} alt="" className="spotlight-figure" />
      </div>
    </section>
  );
}
