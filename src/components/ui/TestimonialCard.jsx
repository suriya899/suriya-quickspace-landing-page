// src/components/ui/TestimonialCard.jsx

function TestimonialCard({ title, description, avatar, name, role, className }) {
  return (
    <div className={`bg-white p-8 md:p-10 rounded-[32px]  h-full flex flex-col ${className}`}>
      {/* หัวข้อของการรีวิว */}
      <h3 className="text-xl md:text-2xl font-bold text-[#0D1B39] mb-4 leading-tight">
        {title}
      </h3>
      
      {/* เนื้อหาการรีวิว */}
      <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* ส่วนข้อมูลผู้รีวิว (Avatar + Info) */}
      <div className="flex items-center gap-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover" 
        />
        <div>
          <h4 className="font-bold text-[#0D1B39] text-sm md:text-base">{name}</h4>
          <p className="text-gray-400 text-xs md:text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;