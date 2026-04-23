// src/App.jsx
// Component หลักที่รวม Section ทั้งหมดของหน้าเว็บ
// ตอนนี้ยังว่างอยู่ จะค่อยๆ เพิ่ม Section เข้ามาในขั้นต่อๆ ไป

// // นำเข้า components ที่เพิ่งสร้างมาทดสอบดู
// import Button from "./components/ui/Button"
// import FeatureCard from "./components/ui/FeatureCard"
// import TestimonialCard from "./components/ui/TestimonialCard"

// นำเข้า components NAVBAR
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    // (1) <> </> คือ Fragment — ห่อ elements หลายตัวโดยไม่สร้าง div เกินมา

    <>
    {/* (2) Navbar: fixed อยู่ด้านบน ลอยทับ content ทุกอย่าง */}
      <Navbar />
    {/* (3) <main> คือ semantic tag บอกว่านี่คือเนื้อหาหลักของหน้า
              pt-16 = padding-top 64px ดัน content ลงมา
              ไม่ให้ถูก Navbar (สูง h-16 = 64px) บัง */}
      <main className="bg-bg-light min-h-screen">

        {/* sections จะมาวางตรงนี้ทีละตัว เช่น */}
        {/* <Hero /> */}
        {/* <Logos /> */}
        {/* <PerfectSolutions /> */}

      </main>  
    </>

  )
}

export default App