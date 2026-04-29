// src/components/sections/Hero.jsx
import Button from "../ui/Button";

// ── Assets: รูปภาพทั้งหมดที่ใช้ใน Hero ──────────────────────────────
import heroImg        from '../../assets/hero-character.png';
import designerAvatar from '../../assets/designer-avatar.png';
import starsImg       from '../../assets/stars.png';
import gavinAvatar    from '../../assets/gavin-avatar.png';
import notificationIcon from '../../assets/notification-icon.png';
import playIcon       from '../../assets/play-icon.png';
import longLogo       from '../../assets/long-logo.png';

export default function Hero() {
  return (
    // ── Section: Hero หลัก ─────────────────────────────────────────
    // min-h-screen  = สูงเต็มจอ
    // pt-20         = เว้นบน 80px ให้ Navbar fixed ที่ลอยอยู่
    <section
      className="min-h-screen pt-20 bg-gradient-to-b from-[#E4ECFF] to-[#EAF0FF00]"
      // style={{ background: "linear-gradient(135deg, var(--color-hero-from) 0%, var(--color-hero-to) 100%)" }}
    >

      {/* ── Container: จำกัดความกว้างและ padding ────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Grid หลัก: 1 col (mobile) → 2 col (desktop) ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch pt-10 lg:pt-20">


          {/* ════════════════════════════════════════
              LEFT COLUMN — Text Content
              order-2: อยู่ล่างบน mobile
              order-1: อยู่ซ้ายบน desktop
          ════════════════════════════════════════ */}
          <div className="flex flex-col items-center lg:items-start justify-end gap-6 order-2 lg:order-1 pb-1 lg:pb-2">

            {/* Badge */}
            <span className="inline-flex items-center bg-indigo-50 text-indigo-500
                             text-sm font-medium px-4 py-1.5 rounded-lg w-fit border border-indigo-100">
              Welcome QuickSpace
            </span>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1] text-center lg:text-left">
              Satisfied Customer <br />
              is the Best Business Strategy
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-md text-center lg:text-left">
              Backed with vast experience and fully up to date, it helps Software
              offer the best in class, Prescription solution.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap mt-2 w-full">
              <Button variant="solid" size="medium">
                Try Free
              </Button>
              <Button variant="ghost" size="medium" className="flex items-center gap-2">
                <img src={playIcon} alt="play" className="w-4 h-4 lg:w-5 lg:h-5" />
                View Demo
              </Button>
            </div>

          </div>
          {/* ── END LEFT COLUMN ─────────────────────────────────────── */}


          {/* ════════════════════════════════════════
              RIGHT COLUMN — Illustration
              order-1: อยู่บนบน mobile
              order-2: อยู่ขวาบน desktop
          ════════════════════════════════════════ */}
          <div className="relative flex justify-center items-end order-1 lg:order-2 h-[450px] lg:h-[520px]">

            {/* Anchor Container: กล่อง wrapper เป็นจุดอ้างอิงให้ floating cards */}
            <div className="relative flex justify-center items-end w-full max-w-[450px]">

              {/* กล่องพื้นหลังสี periwinkle */}
              <div
                className="rounded-[40px] w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] mb-4"
                style={{ backgroundColor: "#B9CCFE" }}
              />

              {/* รูป 3D Character — ลอยทับกล่องพื้นหลัง */}
              <img
                src={heroImg}
                alt="Hero illustration"
                className="absolute bottom-0 object-contain w-[240px] lg:w-[320px] z-10"
              />

              {/* ── Floating Card 1: Great Designer (บนซ้าย) ────────── */}
              <div className="absolute left-[2%] -top-[10px] lg:left-[-5%] lg:-top-[25px]
                              bg-white rounded-sm px-2.5 py-2 flex items-center w-fit z-20
                              scale-90 lg:scale-100">
                {/* Avatar — วางแบบ absolute เพื่อให้โผล่พ้นขอบบน */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full absolute -left-6 -top-9
                                  overflow-hidden bg-[#FFD600]">
                    <img src={designerAvatar} alt="Designer" className="w-full h-full object-cover" />
                  </div>
                  {/* Spacer: ดัน text ให้ไม่ทับ avatar */}
                  <div className="w-3 h-8 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-[9px] lg:text-[11px] font-bold text-gray-800 leading-tight">
                    Great Designer
                  </p>
                  <img src={starsImg} alt="5 Stars" className="mt-0.5" />
                </div>
              </div>
              {/* ── END Floating Card 1 ──────────────────────────────── */}

              {/* ── Floating Card 2: Gavin Henry (ขวากลาง) ──────────── */}
              <div className="absolute right-[-5%] bottom-[30%] lg:right-[-22%] lg:bottom-[20%]
                              bg-white rounded-2xl px-4 py-3 flex items-center gap-3
                              min-w-[160px] z-20 scale-90 lg:scale-100">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src={gavinAvatar} alt="Gavin Henry" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs font-bold text-gray-800">Gavin Henry</p>
                  <p className="text-[8px] lg:text-[10px] text-gray-400">1m ago</p>
                </div>
                <span
                  className="w-8 h-8 rounded-full text-white text-xs flex items-center justify-center font-bold ml-auto"
                  style={{ backgroundColor: '#904CFF80' }}
                >
                  1
                </span>
              </div>
              {/* ── END Floating Card 2 ──────────────────────────────── */}

              {/* ── Floating Card 3: Notification (ล่างซ้าย) ────────── */}
              <div className="absolute left-[-2%] bottom-[5%] lg:left-[-3%] lg:bottom-[-6%]
                              bg-white rounded-2xl px-4 py-3 flex items-center gap-3
                              z-20 scale-90 lg:scale-100">
                <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full flex-shrink-0
                                flex items-center justify-center overflow-hidden">
                  <img src={notificationIcon} alt="Notification Icon" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] lg:text-[13px] font-bold text-slate-800 leading-tight">
                    Notification
                  </p>
                  <p className="text-[9px] lg:text-[11px] text-gray-400 leading-normal">
                    Send a message to <br /> Ilya Zinchenko
                  </p>
                </div>
              </div>
              {/* ── END Floating Card 3 ──────────────────────────────── */}

            </div>
            {/* ── END Anchor Container ─────────────────────────────── */}

          </div>
          {/* ── END RIGHT COLUMN ────────────────────────────────────── */}


        </div>
        {/* ── END Grid ────────────────────────────────────────────── */}

        {/* ── Logo Cloud: แถวโลโก้พาร์ทเนอร์ ─────────────────────── */}
        <div className="mt-16 lg:mt-24 pb-12 flex justify-center lg:justify-start">
          <img
            src={longLogo}
            alt="Partner Logos"
            className="h-10 lg:h-12 mt-20 w-auto object-contain
                       opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </div>

      </div>
      {/* ── END Container ───────────────────────────────────────────── */}

    </section>
  );
}
