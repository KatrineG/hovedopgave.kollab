import "./mini-header.css";
import ButtonArrow from "../assets/button.arrow.svg";

export default function MiniHeader() {
  return (
      <div className="k-mini">
        <div className="k-container k-mini-inner">
          <details className="k-lang">
            <summary className="k-lang-btn">
              <span className="k-lang-label">DA</span>
              <img
                className="k-lang-arrow"
                src={ButtonArrow}
                alt=""
                aria-hidden="true"
              />
            </summary>

            <div className="k-lang-menu">
              <a className="k-lang-item" href="#">
                DE
              </a>
              <a className="k-lang-item" href="#">
                EN
              </a>
            </div>
          </details>
        </div>
      </div>
  );
}
