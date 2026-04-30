// Card แสดง Feature แต่ละอย่าง ใช้ใน Perfect Solutions section
// รับ props: icon, title, description
// icon คือ emoji หรือ element รูปภาพ

function FeatureCard({ icon, title, description, isActive = false, iconBackground }) {
    return(
        <div className={`
        rounded-2xl p-8 transition-all duration-300 h-full w-[70%] flex flex-col
        ${isActive 
        ? "bg-white shadow-xs border-none" // ถ้าเด่น: พื้นหลังขาว มีเงาหนา ไม่มีเส้นขอบ
        : "bg-transparent border-none shadow-none" // ถ้าไม่เด่น: พื้นหลังใส ไม่มีเงา
        }
        `}>

        {/* กล่อง icon  */}

            <div className="w-[100px] h-[100px] rounded-2xl flex items-center justify-center mb-6 bg-opacity-20"
            style={{ backgroundColor: iconBackground }}>
            <img src={icon} alt={title} className="w-[44px] h-[44px] object-contain" />
            </div>

        {/* หัวข้อ card */}
        <h3 className="text-gray-900 font-bold text-xl mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow ">{description}</p>

        {/* ลิงก์ Get Started */}
        <a 
        href="#"
        className="text-gray-500 font-bold inline-flex items-center gap-1 mt-auto hover:text-gray-900 transition-colors">
        Get Started »
      </a>
        </div>
    )
    
}

export default FeatureCard