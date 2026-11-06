import React from "react";
import "../assets/styles/BrandIdentity.scss";

import kesarSvg from "../assets/images/logo_kesar.svg";
import ugaoSvg from "../assets/images/logo_ugao.svg";
import aranyaSvg from "../assets/images/logo_aranya.svg";
import tejaSvg from "../assets/images/logo_teja.svg";

const brands = [
  {
    svg: kesarSvg,
    name: "KESAR",
    tagline: "Kashmir Saffron & Exotic Spices",
    palette: ["#120610", "#C9952A", "#F0E2C0", "#2A0A22"],
    paletteNames: ["Aubergine", "Gold", "Cream", "Deep Plum"],
    type: "Luxury / Premium",
    desc: "An octagonal wax seal stamp enclosing a hand-drawn saffron crocus — six petals with realistic stigma threads. Conveys heritage, exclusivity, and Kashmir provenance. Dark aubergine background with hammered gold lettering.",
  },
  {
    svg: ugaoSvg,
    name: "UGAO",
    tagline: "Fresh Ground Masalas",
    palette: ["#F7F4EE", "#D4531C", "#1C1C1C", "#E87040"],
    paletteNames: ["Off-White", "Terracotta", "Charcoal", "Warm Orange"],
    type: "D2C / Modern",
    desc: "A bold geometric U monogram with a terracotta 'seed / sunrise' circle sitting in the opening — eight short rays radiate outward. Minimal, confident, and shelf-ready for the new-age Indian D2C market.",
  },
  {
    svg: aranyaSvg,
    name: "ARANYA",
    tagline: "From the Forest — Organic Herbs",
    palette: ["#F2EDE0", "#1D3A20", "#7AAB62", "#A04018"],
    paletteNames: ["Cream", "Forest", "Sage", "Rust"],
    type: "Organic / Natural",
    desc: "A circle badge with a single large leaf bearing a full vein network and dew drop at the tip. Arched Latin text wraps the border. Clean apothecary aesthetic — feels honest, earthy, and trustworthy.",
  },
  {
    svg: tejaSvg,
    name: "TEJA",
    tagline: "Asli Laal Mirch — Extra Hot",
    palette: ["#111111", "#C81400", "#F5C800", "#8A0E00"],
    paletteNames: ["Black", "Chilli Red", "Electric Yellow", "Deep Red"],
    type: "Mass Market / Bold",
    desc: "The T crossbar is a bold red slash; the vertical stroke IS the chilli body — complete with stem and leaf. 'EJA' in heavy Impact type follows. A yellow footer stripe anchors the brand. Aggressive, shelf-stopping energy.",
  },
];

function BrandIdentity() {
  return (
    <section className="brand-identity section-alt" id="branding">
      <span className="brand-eyebrow">Brand Identity Design</span>
      <h2 className="brand-title">Indian FMCG Logo Concepts</h2>
      <p className="brand-subtitle">
        Four original brand identities designed for the Indian food &amp; spice
        market — from luxury saffron gifting to mass-market chilli. Each logo
        is fully vector, production-ready, and category-researched.
      </p>

      <div className="brand-grid">
        {brands.map((b, i) => (
          <div key={i} className="brand-card">
            <div className="brand-logo-pane">
              <img src={b.svg} alt={`${b.name} logo`} />
            </div>

            <div className="brand-info-pane">
              <span className="brand-type-badge">{b.type}</span>
              <h3 className="brand-name">{b.name}</h3>
              <p className="brand-tagline">{b.tagline}</p>
              <p className="brand-desc">{b.desc}</p>

              <div className="brand-palette">
                <span className="palette-label">Colour Palette</span>
                <div className="palette-swatches">
                  {b.palette.map((col, ci) => (
                    <div key={ci} className="swatch">
                      <div
                        className="swatch-dot"
                        style={{ backgroundColor: col }}
                        title={b.paletteNames[ci]}
                      />
                      <span className="swatch-name">{b.paletteNames[ci]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandIdentity;
