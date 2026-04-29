// src/App.jsx
// Component หลักที่รวม Section ทั้งหมดของหน้าเว็บ
// ตอนนี้ยังว่างอยู่ จะค่อยๆ เพิ่ม Section เข้ามาในขั้นต่อๆ ไป

// // นำเข้า components ที่เพิ่งสร้างมาทดสอบดู
// import Button from "./components/ui/Button"
// import FeatureCard from "./components/ui/FeatureCard"
// import TestimonialCard from "./components/ui/TestimonialCard"

// นำเข้า components NAVBAR
import Navbar from "./components/layout/Navbar";

// นำเข้า Hero
import Hero from "./components/sections/Hero";  

import PerfectSolutions from "./components/sections/PerfectSolutions";

import DiscoverAndExplore from "./components/sections/DiscoverAndExplore";

function App() {

  return (
    <>
      <Navbar />
      <main className="bg-bg-light min-h-screen">
        <Hero />
        <PerfectSolutions />
        <DiscoverAndExplore />
      </main>  
    </>

  )
}

export default App