// Button component ที่ใช้ซ้ำได้ทั้งเว็บ
// รองรับ 2 แบบ คือ variant="solid" (พื้นสี) และ variant="outline" (เส้นขอบ)
// รองรับ 2 ขนาด คือ size="medium" และ size="small"

function Button({
    children,               // ข้อความหรือ element ข้างในปุ่ม
    variant = 'solid',       // รูปแบบปุ่ม: 'solid' หรือ 'outline'
    size = 'medium',         // ขนาดปุ่ม: 'medium' หรือ 'small'
    onClick,                // function ที่จะเรียกเมื่อกดปุ่ม
    className ='',          // class เพิ่มเติมจากภายนอก ถ้าต้องการ
}) {

    // กำหนด class พื้นฐานที่ปุ่มทุกตัวมีเหมือนกัน
    const baseClasses =`
    inline-flex
    items-center
    justify-center
    font-semibold
    rounded-full
    transition-all
    duration-200
    cursor-pointer
    whitespace-nowrap
    `

    // กำหนด class ตาม variant ที่เลือก
    const variantClasses = {
        // ปุ่มพื้นสีน้ำเงิน (Try Free)
        solid: `
        bg-primary
        text-white
        hover:bg-primary-dark
        shadow-md
        hover:shadow-lg
        `,
        // ปุ่มแบบ outline ขอบน้ำเงิน (View Demo)
        outline: `
        bg-transparent
        text-primary
        border-2
        border-primary
        hover:bg-primary-light
        `,
    }
    
    // กำหนด class ตาม size ที่เลือก
    const sizeClasses = {
        medium: 'px-6 py-3 text-sm',
        small: 'px-4 py-2 text-xs',
    }

    return (
        <button
        onClick={onClick} // ส่งฟังก์ชันที่รับมา ไปใส่ในอีเวนต์ onClick ของ HTML button จริงๆ
            // ${baseClasses}          // ใส่ class พื้นฐาน
            // ${variantClasses[variant]}  // ดึง class จาก variant ที่เลือก (เช่น variantClasses['solid'])
            // ${sizeClasses[size]}  // ดึง class จาก size ที่เลือก (เช่น sizeClasses['medium'])
            // ${className} // ตบท้ายด้วย class พิเศษถ้ามีคนส่งมา
        className={`
            ${baseClasses}         
            ${variantClasses[variant]}  
            ${sizeClasses[size]}  
            ${className} 
            `}
            >
                {children} {/* แสดงผลข้อความหรือ icon ที่ส่งมาข้างในปุ่ม */}
            </button>
    )
}

export default Button