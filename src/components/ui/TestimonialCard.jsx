// Card แสดง review จากลูกค้า ใช้ใน Testimonial section
// รับ props: title, body, authorName, authorRole, authorImage

function TestimonialCard({ title, body, authorName, authorRole, authorImage}){
    return (
        //กรอบ card สีขาว
        <div className="
        bg-white
        rounded-2xl
        p-8
        shadow-sm
        border
        border-border
        ">
        
        {/* หัวข้อ review */}
        <h4 className="
        text-text-heading
        font-semibold
        text-base
        mb-3
        ">
            {title}
        </h4>

        {/* เนื้อหา review */}
        <p className="
        text-text-body
        text-sm
        leading-relaxed
        mb-6
        ">
            {body}
        </p>

        {/* ส่วนข้อมูลผู้เขียน review */}
        <div className="flex items-center gap-3">

            {/* รูปโปรไฟล์ */}
            <img 
            src="{authorImage}" 
            alt="{authorName}"
            className="
            w-10
            h-10
            rounded-full
            object-cover
            "
             />
        
        {/* ชื่อและตำแหน่ง */}
        <div>
            <p className="text-text-heading font-semibold text-sm">
                {authorName}
            </p>
            <p className="text-text-muted text-xs">
                {authorRole}
            </p>
        </div>

        </div>



        </div>
    )
}

export default TestimonialCard