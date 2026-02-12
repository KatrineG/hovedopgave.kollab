import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="k-header">
      {/* MINI HEADER */}
      <div className="k-mini">
        <div className="k-container k-mini-inner">
          <div className="k-lang">
            <button className="k-lang-btn" type="button">
              DA <span className="k-chevron">›</span>
            </button>

            {/* Dropdown */}
            <div className="k-lang-menu">
              <a className="k-lang-item" href="#">
                EN
              </a>
              <a className="k-lang-item" href="#">
                DE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="k-main">
        <div className="k-container k-main-inner">
          {/* Logo (placeholder tekst – kan skiftes til billede senere) */}
          <Link className="k-logo" to="/">
            KOLLAB
          </Link>

          <nav className="k-nav">
            <Link className="k-nav-link" to="/services">
              Services
            </Link>
            <Link className="k-nav-link" to="#">
              Cases
            </Link>
            <Link className="k-nav-link" to="#">
              Viden
            </Link>
            <Link className="k-nav-link" to="#">
              Karriere
            </Link>
            <Link className="k-nav-link" to="#">
              Events
            </Link>
            <Link className="k-nav-link" to="#">
              Om os
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
