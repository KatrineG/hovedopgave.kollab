import React from "react";
import "./footer.css";

import KollabLogo from "../assets/kollab.hvid.logo.svg";
import SocialLogos from "../assets/social.logos.svg";

export default function Footer() {
  return (
    <>
      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-left">
            <h3 className="newsletter-title">
              VI ELSKER AT DELE UD AF <br />
              VORES VIDEN
            </h3>

            <p className="newsletter-desc">
              Vi hader selv at blive spammet med kedelige nyhedsbreve. Derfor kan
              du hos os, vælge lige dét du gerne vil høre mere på.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input className="field" placeholder="Fornavn" />
              <input className="field" placeholder="Efternavn" />
            </div>

            <div className="form-row">
              <input className="field" placeholder="Virksomhed" />
              <input className="field" placeholder="Titel" />
            </div>

            <div className="form-row">
              <input className="field field-wide" placeholder="E-mail" />
            </div>

            <label className="form-check">
              <input type="checkbox" />
              <span>Jeg accepterer at modtage nyhedsbrev via e-mail</span>
            </label>

            <button className="newsletter-btn" type="submit">
              Tilmeld
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <img src={KollabLogo} alt="KOLLAB" className="footer-logo" />

          <div className="footer-columns">
            {/* Kolonne 1 */}
            <div className="footer-col">
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                CVR-nr: 36920836
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                +45 71 72 77 77
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                kontakt@kollab.dk
              </a>
            </div>

            {/* Kolonne 2 */}
            <div className="footer-col">
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                Privatlivspolitik
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                Samfundsansvar – CSR
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                Download
              </a>
            </div>

            {/* Kolonne 3 */}
            <div className="footer-col">
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                Lokationer
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                Salgs- og leveringsbetingelser
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                Cookies
              </a>
            </div>

            {/* Kolonne 4 */}
            <div className="footer-col">
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                C2IT Digital
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                /et al.
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                IT-Kartellet
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                C2IT
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} className="footer-link">
                People-IT
              </a>
            </div>

            {/* Kolonne 5 (SIDSTE) */}
            <div className="footer-col footer-social">
              <img src={SocialLogos} alt="Social media" className="social-icons" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
