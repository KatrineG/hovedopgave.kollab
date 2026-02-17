import "./serviceoverview.css";

import { Link } from "react-router-dom";   // ✅ IMPORT

import digitalImg from "../assets/digital.service.png";
import financeImg from "../assets/finance.service.png";
import brandImg from "../assets/brand.service.png";
import businessImg from "../assets/business.service.png";
import arrowWhite from "../assets/arrow.hvid.svg";


const services = [
  {
    title: "DIGITAL",
    image: digitalImg,
    desc: "Her finder du løsninger, der spænder fra web til systemer og automatisering.",
    link: "/digital",   // ✅ TILFØJET
  },
  {
    title: "FINANCE",
    image: financeImg,
    desc: "Planlægning og overblik, økonomi, budget og prognoser – skræddersyet til din forretning.",
  },
  {
    title: "BRAND & STRATEGY",
    image: brandImg,
    desc: "Brand, strategi og design, der hjælper med at finde jeres retning.",
  },
  {
    title: "BUSINESS SYSTEMS",
    image: businessImg,
    desc: "Drift, HR, data og forretningssystemer samlet ét sted.",
  },
];



export default function Serviceoverview() {

  return (

    <section className="services">

      <div className="services-inner">

        <header className="services-header">

          <h2 className="services-title">
            UDFORSK VORES <br />
            <span className="services-dash">–</span> SERVICES
          </h2>

          <p className="services-text">
            Hos KOLLAB er vi et samlet team af specialister på tværs af fagområder.
            Vi arbejder tæt sammen for at skabe sammenhængende løsninger.
            Det betyder, at vi kan hjælpe dig hele vejen, uanset om du har brug for én service eller flere i samspil.
          </p>

        </header>



        <div className="services-grid">

          {services.map((service) => {

            const CardContent = (

              <article className="service-card">

                <img
                  className="service-image"
                  src={service.image}
                  alt={service.title}
                />

                <div className="service-overlay">

                  <div className="service-titleRow">

                    <span className="service-label">
                      {service.title}
                    </span>

                    <img
                      className="service-arrow"
                      src={arrowWhite}
                      alt=""
                      aria-hidden="true"
                    />

                  </div>

                  <p className="service-hoverText">
                    {service.desc}
                  </p>

                </div>

              </article>

            );


            return service.link ? (

              <Link
                key={service.title}
                to={service.link}
                className="service-card-link"
              >

                {CardContent}

              </Link>

            ) : (

              <div key={service.title}>

                {CardContent}

              </div>

            );

          })}

        </div>


      </div>

    </section>

  );

}
