import React, { useState } from "react";
import Logo from "../ui/Logo";

// Import Assets
import mailIcon from "../../assets/e-mail-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import locationIcon from "../../assets/location-icon.png";
import phoneIcon from "../../assets/telephone-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import googleIcon from "../../assets/google-icon.png";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-white pt-16 pb-8 font-sans">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* ส่วนบน: Logo & Menu Content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-4 md:px-10">
          {/* คอลัมน์ 1: Logo & Social Mobile */}
          <div className="flex flex-col gap-6 px-6 md:px-0 md:w-[30%] lg:w-[25%]">
            <Logo />
            <p className="md:hidden text-[#63657E] text-[15px] leading-relaxed">
              Winged moving moveth created for shall and a divide the their days
              male midst shall hath doesn't won't for. Midst life.Over a great
              night.
            </p>

            {/* Contact Desktop */}
            <div className="hidden md:flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <img src={mailIcon} alt="mail" className="w-5 h-5" />
                <span className="text-[#63657E]">quickspace@mail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={phoneIcon} alt="phone" className="w-5 h-5" />
                <span className="text-[#63657E]">548 457 3695 55</span>
              </div>
            </div>

            {/* Social Icons Mobile */}
            <div className="flex md:hidden gap-3 mt-4">
              <SocialIconSVG type="facebook" />
              <SocialIconSVG type="twitter" />
              <SocialIconSVG type="linkedin" />
              <SocialIconSVG type="youtube" />
            </div>
          </div>

          {/* ส่วนเมนู 3 คอลัมน์: หน้าจอใหญ่กระจายตัว หน้าจอเล็กมีเส้นคั่นสุดขอบ */}
          <div className="flex flex-col md:flex-row md:justify-between md:w-[65%] lg:w-[60%] md:gap-4">
            <FooterNav
              title="Home"
              mobileTitle="Customer Support"
              links={[
                "Accesibility",
                "Certification",
                "Knowledge Base",
                "Documentation",
                "User Group",
              ]}
              isOpen={openSection === "home"}
              onToggle={() => toggleSection("home")}
            />

            <FooterNav
              title="Pages"
              mobileTitle="Quick Links"
              links={["Blogs", "Careers", "Communities", "Webinars", "Videos"]}
              isOpen={openSection === "pages"}
              onToggle={() => toggleSection("pages")}
            />

            {/* คอลัมน์ Address / Resources */}
            <div className="flex flex-col border-b border-gray-100 md:border-none">
              <div
                className="flex justify-between items-center py-6 px-6 md:px-0 md:py-0 cursor-pointer"
                onClick={() => toggleSection("address")}
              >
                <h4 className="text-[#090F4E] font-bold text-[18px] md:text-[20px]">
                  <span className="hidden md:inline">Our Address</span>
                  <span className="md:hidden">Resources</span>
                </h4>
                <ToggleIcon className="md:hidden" />
              </div>

              <div
                className={`${openSection === "address" ? "flex" : "hidden"} md:flex flex-col gap-4 mb-6 px-6 md:px-0 md:mt-6`}
              >
                <div className="flex gap-3 max-w-[220px]">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-[#63657E] text-[15px]">
                    London, New area road 04, England
                  </p>
                </div>
                {/* Social Desktop */}
                <div className="hidden md:flex gap-4 mt-2">
                  <img
                    src={googleIcon}
                    alt="google"
                    className="w-5 h-5 opacity-80 cursor-pointer"
                  />
                  <img
                    src={twitterIcon}
                    alt="twitter"
                    className="w-5 h-5 opacity-80 cursor-pointer"
                  />
                  <img
                    src={instagramIcon}
                    alt="instagram"
                    className="w-5 h-5 opacity-80 cursor-pointer"
                  />
                  <img
                    src={linkedinIcon}
                    alt="linkedin"
                    className="w-5 h-5 opacity-80 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ส่วน Footer ล่างสุด: Copyright (ซ้าย) | Links (ขวา) */}
        <div className="mt-12 md:mt-24 pt-8 md:border-t md:border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-10">
          <p className="text-[#63657E] text-sm order-2 md:order-1 opacity-70 md:opacity-100">
            <span className="md:hidden">Copyright ©2020 Quicklinks</span>
            <span className="hidden md:inline">
              Copyright ©2021 QuickSpace. All Rights Reserved
            </span>
          </p>
          <div className="flex gap-6 md:gap-8 text-[#63657E] text-sm order-1 md:order-2">
            <a href="#" className="hover:text-[#293FCC] transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-[#293FCC] transition-colors">
              Team
            </a>
            <a href="#" className="hover:text-[#293FCC] transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-[#293FCC] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Component ย่อยสำหรับเมนู
const FooterNav = ({ title, mobileTitle, links, isOpen, onToggle }) => (
  <div className="flex flex-col border-b border-gray-100 md:border-none">
    <div
      className="flex justify-between items-center py-6 px-6 md:px-0 md:py-0 cursor-pointer"
      onClick={onToggle}
    >
      <h4 className="text-[#090F4E] font-bold text-[18px] md:text-[20px]">
        <span className="hidden md:inline">{title}</span>
        <span className="md:hidden">{mobileTitle}</span>
      </h4>
      <ToggleIcon className="md:hidden" />
    </div>
    <ul
      className={`${isOpen ? "flex" : "hidden"} md:flex flex-col gap-4 mb-6 px-6 md:px-0 md:mt-6 text-[#63657E] text-[15px]`}
    >
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="hover:text-[#293FCC] transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ToggleIcon = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path d="M12 16L6 10H18L12 16Z" fill="#223242" />
  </svg>
);

const SocialIconSVG = ({ type }) => {
  const bg = "rgba(41, 63, 204, 0.1)";
  const iconColor = "#293FCC";

  if (type === "facebook")
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill={bg} />
        <path
          d="M17.3334 16.9999H19L19.6667 14.3333H17.3334V12.9999C17.3334 12.3133 17.3334 11.6666 18.6667 11.6666H19.6667V9.42659C19.4494 9.39792 18.6287 9.33325 17.762 9.33325C15.952 9.33325 14.6667 10.4379 14.6667 12.4666V14.3333H12.6667V16.9999H14.6667V22.6666H17.3334V16.9999Z"
          fill={iconColor}
        />
      </svg>
    );

  if (type === "twitter")
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill={bg} />
        <path
          d="M22.7747 10.7133C22.2657 10.9947 21.726 11.1795 21.1734 11.2616C21.7559 10.8261 22.1918 10.1408 22.4 9.33327C21.8534 9.73994 21.254 10.0249 20.6294 10.1791C20.2098 9.61792 19.6536 9.24574 19.0473 9.12043C18.4411 8.99511 17.8187 9.12368 17.2769 9.48615C16.7351 9.84862 16.3043 10.4247 16.0514 11.1248C15.7986 11.8249 15.7379 12.6098 15.8787 13.3574C14.7701 13.288 13.6856 12.9279 12.6956 12.3005C11.7055 11.6731 10.8321 10.7925 10.132 9.71577C9.88423 10.2478 9.75401 10.8526 9.7547 11.4683C9.7547 12.6766 10.2467 13.7441 10.9947 14.3691C10.552 14.3517 10.1191 14.2023 9.73204 13.9333V13.9766C9.73217 14.7814 9.95495 15.5613 10.3626 16.1842C10.7703 16.807 11.3377 17.2345 11.9687 17.3941C11.5578 17.5333 11.1269 17.5538 10.7087 17.4541C10.8866 18.1468 11.2334 18.7526 11.7004 19.1867C12.1675 19.6208 12.7315 19.8614 13.3134 19.8749C12.735 20.4427 12.0728 20.8624 11.3646 21.1101C10.6564 21.3577 9.91612 21.4285 9.18604 21.3183C10.4605 22.3428 11.9441 22.8867 13.4594 22.8849C18.588 22.8849 21.3927 17.5741 21.3927 12.9683C21.3927 12.8183 21.3894 12.6666 21.384 12.5183C21.9299 12.0251 22.4011 11.4141 22.7754 10.7141L22.7747 10.7133Z"
          fill={iconColor}
        />
      </svg>
    );

  if (type === "linkedin")
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill={bg} />
        <path
          d="M12.6267 11.3333C12.6265 11.6869 12.4859 12.026 12.2357 12.2759C11.9855 12.5258 11.6463 12.6661 11.2927 12.6659C10.9391 12.6658 10.6 12.5251 10.3501 12.2749C10.1002 12.0248 9.95985 11.6856 9.96002 11.3319C9.9602 10.9783 10.1008 10.6392 10.351 10.3893C10.6012 10.1394 10.9404 9.99909 11.294 9.99927C11.6476 9.99944 11.9867 10.1401 12.2366 10.3903C12.4866 10.6404 12.6269 10.9796 12.6267 11.3333ZM12.6667 13.6533H10V21.9999H12.6667V13.6533ZM16.88 13.6533H14.2267V21.9999H16.8534V17.6199C16.8534 15.1799 20.0334 14.9533 20.0334 17.6199V21.9999H22.6667V16.7133C22.6667 12.5999 17.96 12.7533 16.8534 14.7733L16.88 13.6533Z"
          fill={iconColor}
        />
      </svg>
    );

  if (type === "youtube")
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill={bg} />
        <path
          d="M22.362 12.3321C22.6666 13.5201 22.6666 16.0001 22.6666 16.0001C22.6666 16.0001 22.6666 18.4801 22.362 19.6681C22.1926 20.3247 21.6973 20.8414 21.07 21.0161C19.9306 21.3334 16 21.3334 16 21.3334C16 21.3334 12.0713 21.3334 10.93 21.0161C10.3 20.8387 9.80531 20.3227 9.63798 19.6681C9.33331 18.4801 9.33331 16.0001 9.33331 16.0001C9.33331 16.0001 9.33331 13.5201 9.63798 12.3321C9.80731 11.6754 10.3026 11.1587 10.93 10.9841C12.0713 10.6667 16 10.6667 16 10.6667C16 10.6667 19.9306 10.6667 21.07 10.9841C21.7 11.1614 22.1946 11.6774 22.362 12.3321ZM14.6666 18.3334L18.6666 16.0001L14.6666 13.6667V18.3334Z"
          fill={iconColor}
        />
      </svg>
    );

  return null;
};

export default Footer;
