// นำเข้า useState สำหรับเก็บ state, useEffect สำหรับ side effects จาก React
import { useState, useEffect } from "react";

// นำเข้า Button component ที่สร้างไว้แล้วใน ui/
import Button from "../ui/Button";

// นำเข้า Logo /
import Logo from "../ui/Logo";

// กำหนด array ของ nav links ไว้นอก component เพื่อไม่ให้ re-create ทุก render
const NAV_LINKS = [
  { label: "Company", href: "#company" },
  { label: "Feature", href: "#feature" },
  { label: "Pricing", href: "#pricing" },
  { label: "Log In", href: "#login" },
];

// ประกาศ component Navbar และ export เป็น default
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // state เปิด/ปิด mobile menu

  const [scrolled, setScrolled] = useState(false); // scrolled = true/false → ใช้ควบคุมว่าผู้ใช้ scroll ลงมาแล้วหรือยัง

  // useEffect — ทำงานครั้งเดียวหลัง component mount
  //     ลงทะเบียน scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); //ถ้า scroll เกิน 20px → true
    };

    window.addEventListener("scroll", handleScroll);
    //สั่ง Browser ว่า "ถ้ามีการไถจอ (scroll) ให้เรียกใช้ฟังก์ชัน handleScroll ข้างบนนะ"

    return () => window.removeEventListener("scroll", handleScroll);
    //ส่วนทำความสะอาด: ถ้าเราย้ายหน้า หรือลบ Navbar นี้ทิ้ง ให้ "เลิกสั่ง" Browser ด้วย (ป้องกันเครื่องอืด)
  }, []); //ใส่ [] ไว้เพื่อให้มันเริ่ม run แค่รอบแรกที่เปิดหน้าเว็บพอ

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  //ฟังก์ชัน toggle เปิด/ปิด mobile menu

  const closeMenu = () => setMenuOpen(false);
  //ฟังก์ชันสั่งปิดเมนูไปเลย (เอาไว้ใช้ตอนกดลิงก์)

  return (
    //<header> — semantic HTML tag สำหรับส่วนบนสุดของหน้า
    //fixed = ติดอยู่กับ viewport ไม่เลื่อนตาม scroll
    //top-0 left-0 right-0 = ชิดขอบบน ซ้าย ขวา
    //z-50 = อยู่บนสุด (z-index: 50) ไม่ให้ content อื่นทับ
    //transition-shadow = animate shadow เวลา scrolled เปลี่ยน

    <header
      className={`
            fixed
            top-0
            left-0
            right-0
            z-50
            w-full
            transition-shadow
            duration-300
            ${
              scrolled
                ? "bg-white shadow-md" //ถ้าไถจอแล้ว -> พื้นสีขาวทึบ + มีเงาใต้เมนู
                : "bg-transparent" //ยังไม่ scroll → โปร่งใส นั่งบน gradient ของ Hero
            }`}
    >
      {/* กล่องคอนเทนเนอร์: จัดระเบียบให้เนื้อหาอยู่กลางจอ ไม่ชิดขอบซ้ายขวาเกินไป */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between h-16">
          {/* ===== LOGO ===== */}
          {/* <a> ที่ href="#home" → คลิกแล้วกลับขึ้นบนสุด */}
          <a
            href="#home"
            className="flex items-center"
            //ถ้า menu เปิดอยู่แล้วกด logo → ปิด menu ด้วย
            onClick={closeMenu}
          >
            <Logo className="h-8 w-auto" /> {/*เรียกใช้งาน Logo*/}
          </a>

          {/* ===== DESKTOP NAV + BUTTON ===== */}
          {/* hidden md:flex = ซ่อนบน mobile, แสดงบน md ขึ้นไป */}
          <div className="hidden md:flex items-center gap-8">
            {/* .map() วน loop สร้าง <a> จากข้อมูลใน NAV_LINKS */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.href} // key ช่วย React track element ใน list
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[--color-primary] transition-colors duration-200"
                // transition-colors = animate สีเวลา hover
              >
                {link.label}
              </a>
            ))}
            <Button variant="solid" size="small">
              Try Free
            </Button>
          </div>

          {/* ===== ปุ่มสามขีดสำหรับมือถือ (HAMBURGER BUTTON) ===== */}
          {/* md:hidden = ซ่อนบน desktop, แสดงบน mobile เท่านั้น */}

          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={toggleMenu} // (26) พอกดปุ่มนี้ ให้สลับสวิตช์เปิด/ปิดเมนู
            aria-label="Toggle menu" // (27) ช่วยบอกคนตาบอดว่าปุ่มนี้คือปุ่มเปิดเมนู
            aria-expanded={menuOpen} // (28) บอกสถานะตอนนี้ว่าเมนูเปิดอยู่หรือเปล่า
          >
            {/* ถ้าเมนูเปิดอยู่ (true) ให้แสดงรูป X, ถ้าปิดอยู่ (false) ให้แสดงรูปสามขีด */}

            {menuOpen ? (
              // X icon
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* ===== รายการเมนูที่ยืดลงมาเวลาอยู่ในมือถือ (MOBILE MENU) ===== */}
      {/* จะวาดส่วนนี้ออกมา "เฉพาะ" ตอนที่ menuOpen เป็น true เท่านั้น */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {/* วนลูปวาดลิงก์เหมือนข้างบนเลย แต่จัดแนวตั้งแทน */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu} // สำคัญ! พอกดลิงก์แล้ว ต้องสั่งให้เมนูหุบเก็บเข้าไปด้วย
                className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}

            {/* เส้นคั่นบางๆ แล้วตามด้วยปุ่ม Log in / Try Free ในมือถือ */}
            <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
              <Button variant="outline" size="small">
                Log in
              </Button>
              <Button variant="solid" size="small">
                Try Free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
