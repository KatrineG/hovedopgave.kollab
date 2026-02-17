import "./digitalHeader.css";
import { Link } from "react-router-dom";
import KollabLogo from "../assets/kollab.logo.svg";

export default function DigitalHeader() {
  return (
    <header className="k-digitalHeader">
      <div className="k-container k-digitalInner">
        {/* venstre: logo-linje */}
        <Link className="k-digitalBrand" to="/">
          <img className="k-digitalLogo" src={KollabLogo} alt="Kollab logo" />
          <span className="k-digitalDivider" aria-hidden="true" />
          <span className="k-digitalLabel">Digital</span>
        </Link>

        {/* højre: submenu */}
        <nav className="k-digitalNav" aria-label="KOLLAB Digital navigation">
          <a className="k-digitalNavLink" href="#oplevelse">Oplevelse</a>
          <a className="k-digitalNavLink" href="#loesninger">Løsninger</a>
          <a className="k-digitalNavLink" href="#teknologi">Teknologi</a>
          <a className="k-digitalNavLink" href="#implementering">Implementering</a>
        </nav>
      </div>
    </header>
  );
}
