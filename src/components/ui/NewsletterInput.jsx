import React from 'react';

/**
 * ส่วนของ Input สำหรับกรอกอีเมล
 * - ใช้ความกว้างสูงสุด 600px และจัดกึ่งกลาง
 */
const NewsletterInput = () => {
  return (
    <form 
      className="relative max-w-[600px] mx-auto w-full" 
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative">
        {/* 
            Input Field: 
            - rounded-[50px]: ปรับขอบมนแบบวงรีตาม Figma
            - pr-20: เว้นพื้นที่ด้านขวาเพื่อไม่ให้ตัวหนังสือทับกับปุ่มส่ง
        */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full py-5 px-8 pr-20 rounded-[50px] bg-white border-none focus:outline-none text-[#63657E] shadow-sm placeholder:text-[#63657E]/50"
          required
        />
        
        {/* 
            Submit Button: 
            - ใช้ absolute เพื่อแปะปุ่มไว้บนช่อง Input 
            - top-1/2 -translate-y-1/2: เทคนิคจัดปุ่มให้อยู่กึ่งกลางแนวตั้งเสมอ
        */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-200"
        >
          {/* SVG ไอคอนลูกศรสีน้ำเงิน #293FCC */}
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill="#293FCC"/>
            <path d="M24.3478 23L18.6553 17.3075L20.2814 15.6814L27.6 23L20.2814 30.3186L18.6553 28.6925L24.3478 23Z" fill="white"/>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default NewsletterInput;