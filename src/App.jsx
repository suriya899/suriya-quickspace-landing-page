// src/App.jsx
// Component หลักที่รวม Section ทั้งหมดของหน้าเว็บ
// ตอนนี้ยังว่างอยู่ จะค่อยๆ เพิ่ม Section เข้ามาในขั้นต่อๆ ไป

// นำเข้า components ที่เพิ่งสร้างมาทดสอบดู
import Button from "./components/ui/Button"
import FeatureCard from "./components/ui/FeatureCard"
import TestimonialCard from "./components/ui/TestimonialCard"

function App() {
  return (
    <div className="p-10 flex flex-col gap-8 bg-bg-light min-h-screen">
      <h1 className="text-text-heading text-2xl font-bold">
        🧪 ทดสอบ UI Components
      </h1>

      {/* ทดสอบ Button ทั้ง 2 variant */}
      <div className="flex gap-4">
        <Button variant="solid">Try Free</Button>
        <Button variant="outline">View Demo</Button>
        <Button variant="solid" size="small">Small Button</Button>
      </div>git

      {/* ทดสอบ FeatureCard */}
      <div className="grid grid-col-3 gap-6 max-w-4xl">
        <FeatureCard
        icon="🛡️"
        title="Grow Your Business"
        description="Take us wherever you go so that you know what's going on with your money at all times."
        />

        <FeatureCard  
        icon="📊"
        title="Drive More Sales"
        description="Take us wherever you go so that you know what's going on with your money at all times."
        />

        <FeatureCard  
        icon="👤"
        title="Handled By Expert"
        description="Take us wherever you go so that you know what's going on with your money at all times."
        />
      </div>

      {/* ทดสอบ TestimonialCard */}
      <div className="grid grid-cols-2 gap-6 max-w-2xl">
        <TestimonialCard 
        title="Great Services with Good Quality"
        body="I truly have nothing but the highest praise and appreciation for all that you do for us."
        authorName="Pricilla Makalee"
        authorRole="PhotoScape Client"
        authorImage="https://i.pravatar.cc/150?img=47"
        />

        <TestimonialCard
        title="Really love the Fast Delivery!"
        body="I truly have nothing but the highest praise and appreciation for all that you do for us."
        authorName="Dary Olmo"
        authorRole="PhotoScape Client"
        authorImage="https://i.pravatar.cc/150?img=32"
        />

      </div>
    </div>
  )
}

export default App