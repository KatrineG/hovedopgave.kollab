import "./vidensection.css";
import { useEffect } from "react";

import computerImg from "../assets/computer.billede.png";
import spiritImg from "../assets/spirit.billede.png";
import livetImg from "../assets/liveterforkort.billede.png";
import produktImg from "../assets/produkt.billede.png";

import sparkleFigur from "../assets/sparkle.figur.svg";
import arrowLilla from "../assets/arrow.lilla.svg";

const posts = [
  {
    date: "d. 5. januar 2026",
    title: "VIL DU OGSÅ DET DER COMPUTER?",
    readtime: "Læsetid: 7 min.",
    image: computerImg,
  },
  {
    date: "d. 5. januar 2026",
    title: "ANNETTES TILGANG ER ENKEL: ORDENTLIGHED BETALER SIG",
    readtime: "Læsetid: 9 min.",
    image: spiritImg,
  },
  {
    date: "d. 6. november 2025",
    title: "LIVET ER FOR KORT TIL GRÅDIGHED",
    readtime: "Læsetid: 4 min.",
    image: livetImg,
  },
  {
    date: "d. 10. oktober 2025",
    title:
      "EFFEKTIV HÅNDTERING AF PRODUKTANSVAR FOR EMBALLAGE MED NAVITUS: BUSINESS CENTRAL UDVIDELSE",
    readtime: "Læsetid: 7 min.",
    image: produktImg,
  },
];

export default function VidenSection() {

  useEffect(() => {

    const sparkle = document.querySelector(".viden-sparkle");
    const section = document.querySelector(".viden");

    if (!sparkle || !section) return;

    const clamp01 = (v) => Math.max(0, Math.min(1, v));

    const startX = -240;
    const endX = 0;

    const update = () => {

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const raw = (vh - rect.top) / (vh + rect.height);
      const t = clamp01(raw);

      const eased = 0.5 - Math.cos(Math.PI * t) / 2;

      const x = startX + (endX - startX) * eased;

      sparkle.style.setProperty("--sparkle-x", `${x}px`);

    };

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    update();

    return () => {

      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);

    };

  }, []);


  return (

    <section className="viden">

      <div className="viden-inner">

        <header className="viden-header">

          <div className="viden-left">

            <p className="viden-eyebrow">Viden</p>

            <h3 className="viden-title">

              VI ARBEJDER MED DIGITALE LØSNINGER HVER DAG
              <br />
              OG DELER GERNE DET, VI LÆRER UNDERVEJS

            </h3>

          </div>


          <a className="viden-link" href="#">

            <span className="viden-link-text">
              UDFORSK FLERE AF VORES ARTIKLER
            </span>

            <img
              className="viden-link-icon"
              src={arrowLilla}
              alt=""
            />

          </a>

        </header>


        <div className="viden-grid">

          {posts.map((p) => (

            <article key={p.title} className="viden-card">

              <div className="viden-media">

                <img
                  className="viden-img"
                  src={p.image}
                  alt=""
                />

              </div>


              <div className="viden-body">

                <p className="viden-date">{p.date}</p>

                <h4 className="viden-card-title">
                  {p.title}
                </h4>

                <p className="viden-readtime">
                  {p.readtime}
                </p>

              </div>

            </article>

          ))}

        </div>


        <img
          className="viden-sparkle"
          src={sparkleFigur}
          alt=""
        />


      </div>

    </section>

  );

}
