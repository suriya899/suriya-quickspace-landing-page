import React from 'react';
import NewsletterInput from '../ui/NewsletterInput';

/**
 * ส่วน Newsletter Section
 * - จัดการความกว้างแบบ Dynamic: กึ่งกลางในจอใหญ่ และเต็มหน้าจอในจอเล็ก (< 768px)
 */
const Newsletter = () => {
  return (
    /* 
       Container ชั้นนอกสุด:
       - px-4: สร้างระยะห่างซ้ายขวาในจอขนาดกลาง (เช่น 1073px) ให้เห็นพื้นหลังสีขาว
       - overflow-hidden: กันหน้าจอเลื่อนแนวนอนตอนเราขยายกล่องสีฟ้าในมือถือ
    */
    <section className="py-20 bg-white px-4 overflow-hidden">
      
      {/* 
          กล่องสีฟ้า (Main Box):
          1. สภาวะปกติ (จอใหญ่):
             - max-w-[1117px] mx-auto: กว้างตาม Figma และอยู่กึ่งกลาง
             - rounded-[30px]: ขอบมน 30px
          
          2. สภาวะหน้าจอเล็ก (ต่ำกว่า 768px หรือช่วง 767px):
             - max-md:mx-[-1rem]: ใช้ Negative Margin ดึงขอบซ้ายขวาออกไปติดลบเพื่อหักล้าง px-4 ของตัวแม่
             - max-md:w-[calc(100%+2rem)]: ขยายความกว้างเกิน 100% เพื่อให้ชนขอบจอจริง
             - max-md:rounded-none: เอาขอบมนออกเพื่อให้กล่องแนบสนิทกับขอบจอโทรศัพท์
      */}
      <div className="w-full max-w-[1117px] mx-auto bg-[#E7F5FF] rounded-[30px] py-16 px-6 text-center max-md:mx-[-1rem] max-md:w-[calc(100%+2rem)] max-md:rounded-none transition-all duration-300">
        
        {/* หัวข้อโปรเจกต์: สีน้ำเงินเข้ม #090F4E */}
        <h2 className="text-[#090F4E] text-[28px] md:text-[36px] font-bold mb-4 leading-tight">
          Sign up to our newsletter
        </h2>

        {/* รายละเอียด: สีเทา #63657E */}
        <p className="text-[#63657E] text-base md:text-lg mb-10 max-w-[500px] mx-auto">
          Receive latest news, updates and many other news every week.
        </p>

        {/* ส่วนเรียกใช้ Component Input */}
        <div className="px-4 md:px-0">
          <NewsletterInput />
        </div>

      </div>
    </section>
  );
};

export default Newsletter;