import Hero from "../components/Hero.jsx";
import Accordion from "../components/Accordion.jsx";
import Carousel from "../components/Carousel.jsx";
import Marquee from "../components/Marquee.jsx";
import Values from "../components/Values.jsx";
import Spotlight from "../components/Spotlight.jsx";
import Footer from "../components/Footer.jsx";
import { useRef, useEffect, useState } from "react";

export default function Home() {


  return (
    <>
      <Hero />
      <main className={`app-main`}>
        <Accordion />
        <Carousel />
        <Marquee />
        <Values />
        <Spotlight />
      </main>
      <Footer />
    </>
  );
}
