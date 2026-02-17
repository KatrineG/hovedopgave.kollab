import "./header.css";
import { Link } from "react-router-dom";
import KollabLogo from "../assets/kollab.logo.svg";
import ButtonArrow from "../assets/button.arrow.svg";

export default function Header() {
  return (
    <header className="k-main k-main-sticky">
        <div className="k-container k-main-inner">
          <Link className="k-logo" to="/">
            <img src={KollabLogo} alt="Kollab logo" />
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
      </header>
  );
}
