import "./awardssection.css";
import dot from "../assets/dot.cirkel.svg";
import { useEffect } from "react";

export default function AwardsSection() {

  useEffect(() => {

    const dots = document.querySelector(".dots");
    const section = document.querySelector(".awards");

    if (!dots || !section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const clamp01 = (v) => Math.max(0, Math.min(1, v));

    const startX = 180; // hvor langt ude til højre den starter (px)
    const endX = 0;

    const onScroll = () => {

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      // 0 -> 1 progress mens sektionen kommer ind i viewport
      const start = vh * 0.95;
      const end = vh * 0.45;

      const t = clamp01((start - rect.top) / (start - end));

      // rolig ease-in-out
      const eased = 0.5 - Math.cos(Math.PI * t) / 2;

      const x = startX + (endX - startX) * eased;

      dots.style.setProperty("--dots-x", `${x}px`);

    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

  }, []);


  return (

    <section className="awards">

      <div className="awards-inner">

        <div className="awards-content">

          <h3 className="awards-title">+13 PRISER VUNDET MED HØJDESPRINGENDE FART</h3>

          <p className="awards-text">
            Fang os hvis du kan, for vi er blandt de hurtigste på den ambitiøse spillebane.
            Indtil videre har vi vundet mere end 13 Børsen Gazelle-priser, og det taler næsten for sig selv.
            Vi arbejder målrettet for at udvikle os, springe højt og gøre os fortjent til endnu flere priser.
          </p>

        </div>


        <div className="dots" aria-hidden="true">

          {Array.from({ length: 9 }).map((_, i) => (

            <img
              key={i}
              className="dot"
              src={dot}
              alt=""
            />

          ))}

        </div>

      </div>

    </section>

  );

}
