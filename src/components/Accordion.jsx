import React, { useState } from "react";
import "./accordion.css";

const items = [
  { id: 1, title: "Digital", content: "Digital services and details go here." },
  { id: 2, title: "Business Systems", content: "Business Systems details go here." },
  { id: 3, title: "Finance", content: "Finance-related items and details." },
  { id: 4, title: "Brand & Strategy", content: "Brand & Strategy details and links." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="accordion">
      <div className="accordion-inner">
        <div className="accordion-header-title">Services</div>
        {items.map((item, i) => (
          <div key={item.id} className="accordion-item">
            <button
              className={"accordion-btn " + (openIndex === i ? "open" : "")}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span className="item-label">{item.title}</span>
              <span className="item-chevron">›</span>
            </button>

            <div
              className="accordion-panel"
              style={{ maxHeight: openIndex === i ? "240px" : "0px" }}
              aria-hidden={openIndex !== i}
            >
              <div className="panel-inner">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
