import Serviceoverview from "../components/Serviceoverview.jsx";
import AwardsSection from "../components/AwardsSection.jsx";
import Marquee from "../components/Marquee.jsx";
import VidenSection from "../components/VidenSection.jsx";
import Footer from "../components/Footer.jsx";   // ✅ tilføj denne


export default function Services() {

  return (

    <>
      <main>

        <Serviceoverview />

        <AwardsSection />

        <Marquee />

        <VidenSection />

      </main>

      <Footer />   {/* ✅ footer nederst */}

    </>

  );

}
