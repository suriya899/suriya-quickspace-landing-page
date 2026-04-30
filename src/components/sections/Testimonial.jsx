import TestimonialCard from "../ui/TestimonialCard";
import pricillia from "../../assets/pricillia-icon.png";
import dany from "../../assets/dany-icon.png";

export default function Testimonial() {
  return (
    <section className="py-20  bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl mt-40">
        {/* ===== Header Area: อยู่ด้านบนสุดเหมือนเดิม พร้อม Quote Icon ลอย ===== */}
        <div className="relative mb-16 md:mb-24">
          {/* Quote Icon: ใช้ absolute เยื้องตำแหน่งตาม Figma */}
          <div className="absolute -top-9 -left-2 md:-left-9 w-19 h-19 bg-[#13A6FA] rounded-full flex items-center justify-center z-10">
            <svg
              width="64"
              height="64"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                fill="#13A6FA"
              />
              <path
                d="M59 38H54V34C54 31.8125 55.75 30 58 30H58.5C59.3125 30 60 29.375 60 28.5V25.5C60 24.6875 59.3125 24 58.5 24H58C52.4375 24 48 28.5 48 34V49C48 50.6875 49.3125 52 51 52H59C60.625 52 62 50.6875 62 49V41C62 39.375 60.625 38 59 38ZM41 38H36V34C36 31.8125 37.75 30 40 30H40.5C41.3125 30 42 29.375 42 28.5V25.5C42 24.6875 41.3125 24 40.5 24H40C34.4375 24 30 28.5 30 34V49C30 50.6875 31.3125 52 33 52H41C42.625 52 44 50.6875 44 49V41C44 39.375 42.625 38 41 38Z"
                fill="white"
              />
            </svg>
          </div>
          {/* หัวข้อ: ใช้ pl-4 เพื่อเว้นระยะจาก Icon ที่ลอยมาทับ */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B39] relative z-20 pl-4">
            What Our Customer <br /> are Saying
          </h2>
        </div>

        {/* ===== Cards Area: ใช้ Flexbox จัดเรียงการ์ดหน้ากระดาน 2 ใบในจอใหญ่ ===== */}
        <div className="flex flex-col md:flex-row relative">
          {/* การ์ดฝั่งซ้าย: 
              - ใน Mobile: เพิ่มเส้นแนวนอน (border-b) และเว้นระยะ (pb-10) 
              - ใน Desktop: เพิ่มเส้นแนวตั้ง (md:border-r) และเว้นระยะ (md:pr-16) และเอาเส้นนอนออก (md:border-b-0) */}
          <div className="flex-1 pb-10 md:pb-0 md:pr-16  md:border-b-0 md:border-r-2 border-gray-200">
            <TestimonialCard
              title="Great Services with Good Quality Photographers PhotoScape"
              description="I truly have nothing but the highest praise and appreciation for all that you did for us. Saving me on the video montage projection was huge, and even more important the amazing pictures."
              avatar={pricillia}
              name="Pricillia Makalew"
              role="EhyaScape Client"
              //   {/* การ์ด Desktop ระดับปกติ (ไม่ต้องใส่ mt ติดลบ) */}
            />
          </div>

          {/* --- เส้นคั่นเฉพาะตอนจอเล็ก (Mobile Only) --- */}
          <div className="block md:hidden h-[2px] w-[80%] mx-auto bg-gray-200 mt-10"></div>

          {/* การ์ดฝั่งขวา: 
              - ใน Mobile: เว้นระยะบน (pt-10) 
              - ใน Desktop: เว้นระยะซ้าย (md:pl-16) และไม่มี mt ติดลบ */}
          <div className="flex-1 pt-10 md:pt-0 md:pl-16">
            <TestimonialCard
              title="Really love the Fast Delivery Photos File Service. Just 48 Hours. It's Crazy!"
              description="I truly have nothing but the highest praise and appreciation for all that you did for us. Saving me on the video montage projection was huge, and even more important the amazing pictures."
              avatar={dany}
              name="Dany Olmo"
              role="EhyaScape Client"
              //   {/* การ์ด Desktop ระดับปกติ (ไม่ต้องใส่ mt ติดลบ) */}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
