import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-left">
            <h3>VI ELSKER AT DELE UD AF VORES VIDEN</h3>
            <p>Vi hader sæv at blive spammet med kedelige nyhedsbreve. Derfor kan du hos os, vælge lige dét du gerne vil høre mere på.</p>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input placeholder="Fornavn" />
              <input placeholder="Efternavn" />
            </div>
            <div className="form-row">
              <input placeholder="Virksomhed" />
              <input placeholder="Titel" />
            </div>
            <div className="form-row">
              <input placeholder="E-mail" className="wide" />
            </div>
            <label className="form-check">
              <input type="checkbox" /> Jeg accepterer at modtage nyhedsbrev via e-mail
            </label>
            <button className="btn-primary" type="submit">Tilmeld</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">KOLLAB</div>

          <div className="footer-columns">
            <div className="col">
              <div>CVR-nr: 36920836</div>
              <div>+45 71 72 77 77</div>
              <div>kontakt@kollab.dk</div>
            </div>

            <div className="col">
              <a>Privatpolitik</a>
              <a>Kontakt</a>
              <a>Job</a>
            </div>

            <div className="col social">
              <a aria-label="Facebook" className="social-icon">FB</a>
              <a aria-label="Instagram" className="social-icon">IG</a>
              <a aria-label="LinkedIn" className="social-icon">IN</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
