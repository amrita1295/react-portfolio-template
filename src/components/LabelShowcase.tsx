import React, { useState } from "react";
import "../assets/styles/LabelShowcase.scss";
import dates from "../assets/images/dates-packaging-design-label-box.jpg";
import soda from "../assets/images/generic_soda_can_label_b.jpg";
import kombucha from "../assets/images/hand-drawn-kombucha-label-collection.jpg";
import honey from "../assets/images/honey_bottle_final_lable.png";
import kombucha_label from "../assets/images/kombucha-label-design.jpg"
import lemon from "../assets/images/lemon_juice_print065.jpg";
function LabelShowcase() {
  const [activeLabel, setActiveLabel] = useState<number | null>(null);

  const labels = [
    {
      img: dates,
      title: "Desert Gold — Premium Dates Packaging",
      desc: "Crafted a premium, earthy label design emphasizing purity and natural energy, with polished rich organic tones.",
    },
    {
      img: soda,
      title: "Zero Rush — Diet Soda Label Design",
      desc: "Designed a vibrant, high-impact soda label capturing energy and freshness with bold colors and dynamic layout for instant shelf appeal",
    },
    {
      img: kombucha,
      title: "Mr. Bucha — Kombucha Bottle Series",
      desc: "Created a playful, flavor-centric kombucha label line combining hand-drawn charm with balanced design aesthetics for strong brand recall.",
    },
    {
      img: honey,
      title: "Sweet Legacy — Pure Honey Label",
      desc: "Designed a rustic yet polished honey label featuring natural honeycomb patterns and minimal visuals to reflect authenticity and purity",
    },
    {
      img: kombucha_label,
      title: "Green Vital — Kombucha Wellness Range",
      desc: "Built a rejuvenating kombucha label collection with vibrant colors, clean layout, and organic illustrations that echo health and freshness",
    },
    {
      img: lemon,
      title: "Zest & Co. — Lemon Juice Label",
      desc: "Delivered a sleek, minimalist label emphasizing natural goodness and purity through sharp typography, balanced spacing, and citrus-inspired hues.",
    },
  ];

  return (
    <div className="label-showcase" id="label">
      <h2 className="label-title">Label Design Showcase</h2>
      <p className="label-subtitle">
        A glimpse into my product label and packaging design work — crafted for clarity, identity, and visual appeal.
      </p>

      <div className="label-grid">
        {labels.map((label, i) => (
          <div
            key={i}
            className={`label-card ${activeLabel === i ? "active" : ""}`}
            style={{ ["--i" as any]: i }}
            onClick={() => setActiveLabel(activeLabel === i ? null : i)}
          >
            <div className="label-inner">
              <img src={label.img} alt={label.title} />
              <div className="label-overlay">
                <h3>{label.title}</h3>
                <p>{label.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enlarged View */}
      
      {activeLabel !== null && (
        <div className="label-popup" onClick={() => setActiveLabel(null)}>
          <div className="popup-content">
            <img src={labels[activeLabel].img} alt={labels[activeLabel].title} />
            <div className="popup-overlay">
              <h3>{labels[activeLabel].title}</h3>
              <p>{labels[activeLabel].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabelShowcase;
