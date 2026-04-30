import React from "react";

/**
 * PricingCard Component: แสดงรายละเอียดราคาและฟีเจอร์ของแต่ละแพ็กเกจ
 * @param {boolean} isHighlighted - กำหนดว่าเป็นการ์ดที่ต้องเน้น (กล่องกลาง) หรือไม่
 * @param {boolean} isMobile - ตรวจสอบสถานะหน้าจอเพื่อแสดงผล Dropdown สลับแพ็กเกจ
 * @param {function} onPlanChange - Callback function เมื่อมีการเปลี่ยนแพ็กเกจบน Mobile
 */
const PricingCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  isHighlighted,
  onPlanChange,
  isMobile,
}) => {
  return (
    /* Container หลัก: ใช้ flex-col และ items-stretch เพื่อให้ทุกการ์ดสูงเท่ากันแม้เนื้อหาไม่เท่ากัน */
    <div
      className={`p-8 rounded-3xl border border-gray-100 flex flex-col gap-6 bg-white transition-all duration-300 ${
        isHighlighted ? "shadow-[0_20px_50px_rgba(0,0,0,0.1)]" : "shadow-sm"
      }`}
    >
      {/* Header: ชื่อแพ็กเกจและระบบสลับแผนบน Mobile */}
      <div className="relative flex items-center gap-2">
        <h3 className="text-2xl font-bold text-[#0D1B39]">{title}</h3>

        {/* Mobile Dropdown Logic: แสดงไอคอนลูกศรข้างชื่อเฉพาะหน้าจอเล็ก */}
        {isMobile && (
          <div className="relative flex items-center group">
            {/* ไอคอน Dropdown ตามดีไซน์ Figma (12x6 px) */}
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6L0 0H12L6 6Z" fill="black" />
            </svg>

            {/* Invisible Select: เทคนิคซ้อน Select จริงไว้ข้างบนเพื่อเรียกใช้ Native UI ของมือถือ 
                แต่ทำให้มองไม่เห็น (opacity-0) เพื่อรักษาดีไซน์ตาม Figma */}
            <select
              className="absolute inset-0 opacity-0 cursor-pointer w-full"
              onChange={(e) => onPlanChange(Number(e.target.value))}
              value={title === "Base" ? 0 : title === "Standard" ? 1 : 2}
              aria-label="Select pricing plan"
            >
              <option value={0}>Base</option>
              <option value={1}>Standard</option>
              <option value={2}>Unlimited</option>
            </select>
          </div>
        )}
      </div>

      {/* คำบรรยายแพ็กเกจ: ใช้ leading-relaxed เพื่อให้อ่านง่ายขึ้น */}
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      {/* ส่วนแสดงราคา: ใช้ items-baseline เพื่อให้สัญลักษณ์ $ และตัวเลขเรียงสวยงาม */}
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-[#0D1B39]">${price}</span>
        <span className="text-gray-400 text-sm">/ Per User / Per Year</span>
      </div>

      {/* รายการฟีเจอร์: แยกส่วนด้วยเส้นขอบด้านบน (border-t) */}
      <div className="space-y-4 py-6 border-t border-gray-100">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* ไอคอนเครื่องหมายถูก (Checkmark) สีฟ้าอ่อนตาม Branding */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="12"
                cy="11.9915"
                rx="12"
                ry="11.9915"
                fill="#E5F1FF"
              />
              <path
                d="M18.0212 8.44299L9.87017 16.9116L6.16516 13.0626"
                stroke="#377DFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-[#4B5563] font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button: ใช้ mt-auto เพื่อดันปุ่มให้ติดขอบล่างของการ์ดเสมอแม้จำนวนฟีเจอร์จะไม่เท่ากัน */}
      <button
        className={`mt-auto py-4 px-6 rounded-xl font-bold transition-all active:scale-95 ${
          isHighlighted
            ? "bg-[#293FCC] text-white hover:bg-[#1e2ea3]"
            : "bg-[#E5F1FF] text-[#293FCC] hover:bg-[#d4e7ff]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
