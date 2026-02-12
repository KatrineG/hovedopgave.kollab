import React, { useState } from "react";
import "./values.css";

const cards = [
  {
    id: 1,
    number: "01.",
    title: "Vi starter med mennesker",
    short: "Livet er for kort til kedelige arbejdspladser",
    long: "Vi sætter mennesker først og designer løsninger, som virker i hverdagen. Vi tester med rigtige brugere, itererer og leverer værdiskabende oplevelser.",
  },
  {
    id: 2,
    number: "02.",
    title: "Brugbarhed først",
    short: "Livet er for kort til halvtomme glas",
    long: "Vores tilgang sikrer at løsninger ikke blot ser pæne ud, men også er brugbare og effektive i praksis over tid.",
  },
  {
    id: 3,
    number: "03.",
    title: "Holder relationer",
    short: "Livet er for kort til korte relationer",
    long: "Vi bygger langvarige samarbejder med kunder og partnere — fordi de bedste resultater kommer af kontinuerlig tillid.",
  },
  {
    id: 4,
    number: "04.",
    title: "Resultater",
    short: "Livet er for kort til korte resultater",
    long: "Vi fokuserer på klare mål, målinger og resultater, så vores løsninger reelt skaber værdi for din forretning.",
  },
];

export default function Values() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="values">
      <div className="values-inner">
        <div className="values-header">
          <div className="values-eyebrow">Vores værdier</div>
          <h2 className="values-title">VI STARTER MED MENNESKER</h2>
          <a className="values-link">LÆS MERE OM OS ›</a>
        </div>

        <div className="values-grid">
          {cards.map((c) => (
            <div key={c.id} className={"values-card " + (open === c.id ? "open" : "")}> 
              <div className="card-top">
                <div className="card-number">{c.number}</div>
                <button
                  className="card-toggle"
                  onClick={() => toggle(c.id)}
                  aria-expanded={open === c.id}
                >
                  {open === c.id ? "–" : "+"}
                </button>
              </div>

              <div className="card-content">
                <h3 className="card-heading">{c.title}</h3>
                <p className="card-short">{c.short}</p>
                <div className="card-divider" />
                <div className="card-long" aria-hidden={open !== c.id}>
                  {c.long}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
