import Serviceoverview from "../components/Serviceoverview.jsx";
import AwardsSection from "../components/AwardsSection.jsx";
import Marquee from "../components/Marquee.jsx";
import VidenSection from "../components/VidenSection.jsx";
import Spacer from "../components/spacer.jsx";
import ScrollingColor from "../components/ScrollingColor.jsx";


export default function Services() {

  return (

    <>
      <main>

        <ScrollingColor color="#fff">
            <Serviceoverview />
        </ScrollingColor>

        <ScrollingColor color="#fff">
            <AwardsSection />
        </ScrollingColor>
        <Spacer height="50px" />

        <ScrollingColor color="#fff">  
            <Marquee />
        </ScrollingColor>
        <ScrollingColor color="linear-gradient(0deg, #BCA4EA, #CCB4FA)">
            <VidenSection />
        </ScrollingColor>

      </main>

    </>

  );

}
