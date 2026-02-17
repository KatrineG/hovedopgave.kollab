import "./digitalHero.css";

import img1 from "../assets/digital.marquee.png";
import img2 from "../assets/digital.marquee2.png";
import img3 from "../assets/digital.marquee3.png";
import img4 from "../assets/digital.marquee4.png";
import img5 from "../assets/digital.marquee5.png";
import img6 from "../assets/digital.marquee6.png";
import img7 from "../assets/digital.marquee7.png";
import img8 from "../assets/digital.marquee8.png";
import img9 from "../assets/digital.marquee9.png";
import img10 from "../assets/digital.marquee10.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function DigitalHero() {
  // vi duplikerer rækken for et smooth loop
  const loopImages = [...images, ...images];

  return (
    <section className="digital-hero">
      <div className="digital-hero-inner">
        <div className="digital-hero-left">
          <h1 className="digital-hero-title">
            VI LOVER IKKE GULD OG GRØNNE SKÆRME
            <br />
            <span className="digital-hero-dash">–</span> BARE RIGTIG GODE DIGITALE LØSNINGER
          </h1>

          <p className="digital-hero-text">
            Vi er et team, der hellere vil stille de rigtige spørgsmål end at komme med hurtige svar.
            På den måde skaber vi digitale løsninger, der faktisk holder.
          </p>
        </div>
      </div>

      {/* Marquee digitalr */}
      <div className="digital-marquee" aria-hidden="true">
        <div className="digital-marquee-track">
          {loopImages.map((src, i) => (
            <div className={`digital-marquee-item digital-marquee-item-${(i % images.length) + 1}`} key={i}>
              <img className="digital-marquee-img" src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
