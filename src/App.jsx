// Component หลักที่รวม Section ทั้งหมดของหน้าเว็บ

// นำเข้า components NAVBAR
import Navbar from "./components/layout/Navbar";
// นำเข้า Hero
import Hero from "./components/sections/Hero";
// นำเข้า perfect solutions
import PerfectSolutions from "./components/sections/PerfectSolutions";
// นำเข้า DiscoverAndExplore
import DiscoverAndExplore from "./components/sections/DiscoverAndExplore";
// นำเข้า Testimonial
import Testimonial from "./components/sections/Testimonial";
// นำเข้า Pricing
import Pricing from "./components/sections/Pricing";
// นำเข้า Newsletter
import Newsletter from "./components/sections/Newsletter";
// นำเข้า Footer
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-bg-light min-h-screen">
        <Hero />
        <PerfectSolutions />
        <DiscoverAndExplore />
        <Testimonial />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
