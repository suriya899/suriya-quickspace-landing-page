import React, { useState } from "react";
import PricingCard from "../ui/PricingCard";

export default function Pricing() {
  // State สำหรับสลับราคารายเดือน (Monthly) หรือรายปี (Annual)
  const [isAnnual, setIsAnnual] = useState(false);

  // State สำหรับเลือกแพ็กเกจที่จะโชว์บนหน้าจอมือถือ (เริ่มต้นที่ Standard = index 1)
  const [selectedIndex, setSelectedIndex] = useState(1);

  // ข้อมูลฟีเจอร์ที่เหมือนกันทุกแพ็กเกจตาม Figma ล่าสุด
  const commonFeatures = [
    "Access to editing all blocks",
    "Editing blocks together",
    "Access to all premium icons",
    "A dedicated domain",
    "Ability to integrate with CMS",
  ];

  // ชุดข้อมูลราคาและรายละเอียดของแต่ละ Plan
  const pricingData = [
    {
      title: "Base",
      description: "Free start for your project on our platform.",
      price: "0",
      features: commonFeatures,
      buttonText: "Try for Free",
    },
    {
      title: "Standard",
      description: "For a small company that wants to show what it's worth.",
      price: isAnnual ? "300" : "400", // เปลี่ยนตาม State isAnnual
      features: commonFeatures,
      buttonText: "Start 14 Days Free Trial",
      isHighlighted: true, // ตัวกำหนดให้มีการเพิ่ม Shadow เนียนๆ
    },
    {
      title: "Unlimited",
      description: "For a large company that wants to achieve maximum returns.",
      price: isAnnual ? "600" : "500",
      features: commonFeatures,
      buttonText: "Start 14 Days Free Trial",
    },
  ];

  return (
    <section className="py-20 bg-white ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* ส่วนหัวข้อ (Header) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B39] mb-4">
            Expand your options with a subscription
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Graphs displaying your performance for metrics like follower
            evolution, average rate per post and reach and impressions to give
            you the insights.
          </p>

          {/* ปุ่ม Toggle สลับรายเดือน/รายปี */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm ${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-400"}`}
            >
              Bill Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 bg-[#55D3A7] rounded-full relative transition-all"
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${isAnnual ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
            <span
              className={`text-sm ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-400"}`}
            >
              Bill Annually
            </span>
          </div>
        </div>

        {/* ส่วนแสดงผลบน Mobile: จะโชว์การ์ดเพียงใบเดียว (ตาม State selectedIndex) */}
        <div className="md:hidden">
          <PricingCard
            {...pricingData[selectedIndex]}
            isMobile={true}
            onPlanChange={(index) => setSelectedIndex(index)} // เมื่อเลือก Plan ใหม่ใน Dropdown จะมาอัปเดตตรงนี้
          />
        </div>

        {/* ส่วนแสดงผลบน Desktop: แสดงทั้ง 3 ใบเรียงกัน (ซ่อน Dropdown ภายใน Card) */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} isMobile={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
