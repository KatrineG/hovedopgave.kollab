import Serviceoverview from "../components/Serviceoverview.jsx";
import AwardsSection from "../components/AwardsSection.jsx";
import Marquee from "../components/Marquee.jsx";
import VidenSection from "../components/VidenSection.jsx";
import Footer from "../components/Footer.jsx";   // ✅ tilføj denne
import Spacer from "../components/spacer.jsx";


export default function Services() {

  return (

    <>
      <main>

        <Serviceoverview />

        <AwardsSection />

        <Spacer height="50px" />

        <Marquee />

        <VidenSection />

      </main>

    </>

  );

}
