import Hero from "../components/Hero.jsx";
import Accordion from "../components/Accordion.jsx";
import Carousel from "../components/Carousel.jsx";
import Marquee from "../components/Marquee.jsx";
import Values from "../components/Values.jsx";
import Spotlight from "../components/Spotlight.jsx";
import ScrollingColor from "../components/ScrollingColor.jsx";

export default function Home() {


  return (
    <>
      <Hero />
      <main className={`app-main`}>
        <ScrollingColor color="#fff">
          <Accordion />
        </ScrollingColor>
        <ScrollingColor color="#fff">
          <Carousel />
        </ScrollingColor>
        <ScrollingColor color="#FB823B">
          <Marquee />
        </ScrollingColor>
        <ScrollingColor color="#ffdd00">
          <Values />
        </ScrollingColor>
        <ScrollingColor color="#cc00ff">
          <Spotlight />
        </ScrollingColor>
      </main>
    </>
  );
}
