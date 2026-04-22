// Card แสดง Feature แต่ละอย่าง ใช้ใน Perfect Solutions section
// รับ props: icon, title, description
// icon คือ emoji หรือ element รูปภาพ

function FeatureCard({ icon, title, description}){
    return(
        // กรอบ card สีขาว มีเงาเบาๆ และขอบโค้ง
        <div className="
        bg-white    
        rounded-2xl
        p-8
        shadow-sm
        border
        border-border
        hover:shadow-md
        transition-shadow
        duration-200
        ">

        {/* กล่อง icon สีพื้นหลังอ่อน */}
        <div className="
        w-14
        h-14
        rounded-xl
        bg-primary-light
        flex
        items-center
        justify-center
        mb-5">

        {/* icon ที่รับมาจาก props */}
        <span className="text-2xl">{icon}</span>
        </div>

        {/* หัวข้อ card */}
        <h3 className="
        text-text-heading
        font-semibold
        text-lg
        mb-3
        ">{title}
        </h3>

        {/* คำอธิบาย */}
        <p className="
        text-text-body
        text-sm
        leading-relaxed
        mb-4
        ">{description}
        </p>

        {/* ลิงก์ Get Started */}
        <a 
        href="#"
        className="
        text-primary
        text-sm
        font-medium
        hover:underline
        inline-flex
        items-center
        gap-1
        "
        >
            Get Started →
        </a>
        </div>
    )
}

export default FeatureCard