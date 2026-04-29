// src/components/sections/DiscoverAndExplore.jsx

import dashboardImg from '../../assets/dashboard-main.png';
import dashboardMobile from '../../assets/dashboard-mobile.png';
import salesChartImg from '../../assets/chart-overlay.png';

export default function DiscoverAndExplore() {
  return (
    // พื้นหลังไล่เฉดสีจากบนลงล่าง และเอา Padding ล่างออกเพื่อให้รูปกินขอบล่าง
    <section className="py-12 md:py-20 pb-0 bg-gradient-to-b from-[#F0F4FF] to-[#F2F5FF] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* ===== Header Area ===== */}
        {/* max-w-4xl ช่วยให้จอคอมไม่ตกบรรทัด แต่ในมือถือจะกว้างเต็มจอ (w-full) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 md:mb-16">
          
          {/* Badge: ปรับขนาดเล็กลงในมือถือ */}
          <span className="bg-[#E9EDFF] text-[#5D5FEF] px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium mb-4 md:mb-6">
            Discover & Explore
          </span>

          {/* Heading: text-3xl ในมือถือ และ text-5xl ในคอม */}
          <h2 className="text-2xl md:text-5xl font-bold text-[#0D1B39] mb-4 md:mb-6 leading-tight">
            Join An Attractive & <br className="block md:hidden" /> Personalized
          </h2>

          {/* Paragraph: text-sm ในมือถือ */}
          <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl">
            Graphs displaying your performance for metrics like follower evolution, 
            average rate per post and reach and impressions to give you the insights.
          </p>
        </div>

        {/* ===== Dashboard Preview Area ===== */}
        {/* ใช้ md:mb-[-20%] เพื่อให้รูป Desktop กินขอบลงไปตั้งแต่หน้าจอ 768px เป็นต้นไป */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-0 mb-0 md:mb-[-20%] lg:mb-[-100px]">

          {/* --- รูปสำหรับ Mobile & Tablet (ขนาดหน้าจอ <= 767px) --- */}
          {/* แสดงเป็นค่าเริ่มต้น (block) และจะซ่อนเมื่อหน้าจอความกว้างตั้งแต่ 768px ขึ้นไป (min-[768px]:hidden) */}
          <div className="block min-[768px]:hidden mt-[-20%] mb-10 rounded-2xl overflow-hidden">
             <img 
               src={dashboardMobile} 
               alt="Dashboard for Mobile and Tablet" 
               className="w-full h-auto" // w-full ทำให้รูปหดตามขนาดหน้าจอแม่ไปเรื่อยๆ
             />
          </div>

          {/* --- รูปสำหรับ Desktop (ขนาดหน้าจอ >= 768px) --- */}
          {/* ซ่อนเป็นค่าเริ่มต้น (hidden) และจะแสดงเมื่อหน้าจอความกว้างตั้งแต่ 768px ขึ้นไป (min-[768px]:block) */}
          <div className="hidden min-[768px]:block relative">
            <div className="rounded-[32px] border border-gray-50 overflow-hidden bg-white">
              <img 
                src={dashboardImg} 
                alt="Dashboard for Desktop" 
                className="w-full h-auto" // w-full ทำให้รูปหดตามขนาดหน้าจอแม่ไปเรื่อยๆ
              />
            </div>

          {/* กราฟลอย: ซ่อนในมือถือ (hidden) และโชว์แค่ในจอใหญ่ (md:block) */}
          <div className="hidden md:block absolute -left-[14%] bottom-[18%] w-[25%] lg:w-64">
            <img 
              src={salesChartImg} 
              alt="Sales Stat" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}