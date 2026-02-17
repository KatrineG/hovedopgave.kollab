// Values.jsx
import React, { useState } from "react";
import "./values.css";
import arrowFigur from "../assets/arrow-figur.svg";

const cards = [
  {
    id: 1,
    number: "01.",
    shortBold: "Livet er for kort til",
    shortItalic: "kedelige arbejdspladser",
    long:
      "Det skal være sjovt og udviklende at gå på arbejde — både i vores samarbejde og i vores opgaveløsning.",
  },
  {
    id: 2,
    number: "02.",
    shortBold: "Livet er for kort til",
    shortItalic: "halvtomme glas",
    long:
      "Vi vil gerne have de positive briller på og se muligheder i stedet for begrænsninger.",
  },
  {
    id: 3,
    number: "03.",
    shortBold: "Livet er for kort til",
    shortItalic: "korte relationer",
    long:
      "Vi vil gerne have langvarige relationer til hinanden og vores kunder.",
  },
  {
    id: 4,
    number: "04.",
    shortBold: "Livet er for kort til",
    shortItalic: "ligegyldighed",
    long:
      "Vi tager ansvar for mennesker, opgaver og resultater – og for det samfund, vi er en del af.",
  },
];

export default function Values() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section className="values">
      <div className="values-inner">
        <div className="values-header">
          <div className="values-eyebrow">Vores værdier</div>
          <h2 className="values-title">VI STARTER MED MENNESKER</h2>

          <a className="values-link" href="/" onClick={(e) => e.preventDefault()}>
            <span className="values-link-text">LÆS MERE OM OS</span>
            <img className="values-link-arrow" src={arrowFigur} alt="" />
          </a>
        </div>

        <div className="values-grid">
          {cards.map((c, idx) => {
            const isOpen = open === c.id;

            return (
              <article
                key={c.id}
                className={[
                  "values-card",
                  isOpen ? "open" : "",
                  idx === 1 ? "value-card-2" : "",
                  idx === 3 ? "value-card-4" : "",
                ].join(" ")}
              >
                {/* Toggle ligger uafhængigt i top-right */}
                <button
                  className={"card-toggle " + (isOpen ? "is-open" : "")}
                  onClick={() => toggle(c.id)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  {isOpen ? "–" : "+"}
                </button>

                {/* Alt andet er centreret lodret */}
                <div className="card-content">
                  <div className={"card-number " + (isOpen ? "is-open" : "")}>
                    {c.number}
                  </div>

                  {!isOpen ? (
                    <p className="card-short">
                      <span className="short-bold">{c.shortBold}</span>
                      {c.shortItalic ? (
                        <>
                          <br />
                          <span className="short-italic">{c.shortItalic}</span>
                        </>
                      ) : null}
                    </p>
                  ) : (
                    <p className="card-long">{c.long}</p>
                  )}

                  <div className="card-divider" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
