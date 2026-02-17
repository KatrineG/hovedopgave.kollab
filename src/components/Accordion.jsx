import React, { useRef, useState } from "react";
import "./accordion.css";

import digitalImg from "../assets/digital.billede.png";
import businessImg from "../assets/business.billede.png";
import financeImg from "../assets/finance.billede.png";
import brandImg from "../assets/brand.billede.png";

import arrowBlue from "../assets/arrow.blå.svg";
import arrowGreen from "../assets/arrow.grøn.svg";
import arrowOrange from "../assets/arrow.orange.svg";
import arrowPurple from "../assets/arrow.lilla.svg";

// helper: HEX -> "r,g,b"
function hexToRgbString(hex) {
  const clean = hex.replace("#", "").trim();
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

const items = [
  {
    id: 1,
    title: "Digital",
    image: digitalImg,
    intro:
      "Vi hjælper jer med at skabe digitale løsninger, der hænger sammen og kan udvikle sig i takt med jeres forretning.",
    cta: "UDFORSK KOLLAB DIGITAL",
    bulletsLeft: ["Websites og e-commerce", "IT-rådgivning", "Cloud og drift"],
    bulletsRight: [
      "Digitalisering og automatisering",
      "IT-arkitektur",
      "IoT og intelligente løsninger",
    ],
    arrow: arrowBlue,
    color: "#19247D",
    fade: "#C4F5FA",
  },
  {
    id: 2,
    title: "Business Systems",
    image: businessImg,
    intro:
      "Data og forretningssystemer bringes sammen, så drift, planlægning og beslutninger giver bedre mening i hverdagen.",
    cta: "UDFORSK KOLLAB BUSINESS SYSTEMS",
    bulletsLeft: ["ERP og forretningssystemer", "Lager- og produktionsstyring", "ESG-data og compliance"],
    bulletsRight: ["HR og tidsregistrering", "Data, rapportering og AI", "Kunde- og leverandørportaler"],
    arrow: arrowGreen,
    color: "#053E2F",
    fade: "#B7E8D1",
  },
  {
    id: 3,
    title: "Finance",
    image: financeImg,
    intro:
      "Med indsigt og de rette systemer gør vi det nemmere at planlægge, prioritere og tage beslutninger, der holder i hverdagen.",
    cta: "UDFORSK KOLLAB FINANCE",
    bulletsLeft: ["Økonomisystemer", "Lønsystemer", "Forecasting"],
    bulletsRight: ["Gap assessment", "Disponering (MRP)", "Budgettering"],
    arrow: arrowOrange,
    color: "#FB823B",
    fade: "#F8D4A2",
  },
  {
    id: 4,
    title: "Brand & Strategy",
    image: brandImg,
    intro:
      "Vi skaber sammenhæng mellem brand, brugeroplevelse og visuel identitet. Med rådgivning og indsigt hjælper vi jer med at træffe klare valg.",
    cta: "UDFORSK KOLLAB BRAND & STRATEGY",
    bulletsLeft: ["Branding & positionering", "Digital transformation", "UI Design"],
    bulletsRight: ["Digitaliseringsrådgivning", "Brugeroplevelse (UX)", "Salg & marketing (strategi)"],
    arrow: arrowPurple,
    color: "#35296B",
    fade: "#BCA4EA",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const panelContentRefs = useRef({});

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  const onHeaderKeyDown = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i);
    }
  };

  return (
    <section className="services-accordion k-container">
      <div className="accordion">
        <div className="accordion-header-title">Services</div>

        <div className="accordion-list">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const contentEl = panelContentRefs.current[i];
            const height = contentEl ? contentEl.scrollHeight : 0;

            return (
              <div
                key={item.id}
                className={"accordion-item " + (isOpen ? "open" : "")}
                style={{
                  "--accent-color": item.color,
                  "--fade-rgb": hexToRgbString(item.fade),
                }}
              >
                {/* Header row */}
                <div
                  className="accordion-btn"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => onHeaderKeyDown(e, i)}
                >
                  <span className="label-row">
                    <span className="item-label">{item.title}</span>

                    <button
                      type="button"
                      className="arrow-svg"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle(i);
                      }}
                      aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                      <img
                        src={item.arrow}
                        alt=""
                        className={"arrow-icon " + (isOpen ? "is-open" : "")}
                      />
                    </button>
                  </span>
                </div>

                {/* Panel */}
                <div
                  id={`panel-${item.id}`}
                  className="accordion-panel"
                  style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
                  aria-hidden={!isOpen}
                >
                  <div ref={(el) => (panelContentRefs.current[i] = el)} className="panel-inner">
                    <div className="panel-grid">
                      <div className="panel-media">
                        {item.image ? <img src={item.image} alt="" /> : null}
                      </div>

                      <div className="panel-content">
                        {item.intro ? <p className="panel-intro">{item.intro}</p> : null}

                        {item.cta ? (
                          <a className="panel-cta" href="/" onClick={(e) => e.preventDefault()}>
                            <span className="panel-cta-text">{item.cta}</span>
                            <span className="cta-arrow" aria-hidden="true">
                              <img src={item.arrow} alt="" className="cta-arrow-icon" />
                            </span>
                          </a>
                        ) : null}

                        {(item.bulletsLeft?.length || item.bulletsRight?.length) ? (
                          <div className="panel-bullets">
                            <ul>
                              {(item.bulletsLeft || []).map((b) => (
                                <li key={b}>{b}</li>
                              ))}
                            </ul>
                            <ul>
                              {(item.bulletsRight || []).map((b) => (
                                <li key={b}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
