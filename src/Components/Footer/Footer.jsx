import React from "react";
import footerImg from "./../../assets/Footer/footer.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-10 lg:px-20 pt-16 pb-0">

      {/* ── TOP SECTION: flex row on desktop, single column on mobile/tab ── */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Contact */}
        <div className="lg:w-[30%]">
          <h3 className="text-white text-[28px] font-semibold font-Poppins">
            Contact
          </h3>
          <p className="text-white text-[18px] font-medium font-Inter">
            idw.enquiries@gmail.com
          </p>
          <ul className="space-y-2 text-[18px] mt-6 font-Inter">
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">WhatsApp</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="lg:w-[25%]">
          <h3 className="text-white text-[28px] font-semibold font-Poppins mb-13">
            Navigation
          </h3>
          <ul className="space-y-2 text-[18px] font-Inter">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Divisions</li>
          </ul>
        </div>

        {/* About / IDW Description */}
        <div className="lg:w-[45%] lg:max-w-md">
          <h3 className="text-white text-[26px] font-semibold font-Poppins mb-6">
            IDW – Introducing Digital To The World
          </h3>
          <p className="text-[16px] leading-relaxed mb-4 font-Inter">
            This Space brings together work we've done and work We're currently
            doing, along with conversation that continue beyond Individual
            projects. If it feels right, this can be this starting point.
          </p>
          <p className="text-[16px] font-Inter">
            <span className="text-gray-400">Location</span> <br />
            Bangalore, Tiruvannamalai
          </p>
        </div>

      </div>

      {/* ── BOTTOM SECTION ── */}
      <div className="mt-10">

        {/* ── DESKTOP BOTTOM (lg and above) ── */}
        <div className="hidden lg:flex flex-wrap md:flex-nowrap justify-between items-end pt-10 overflow-hidden">

          {/* Policies */}
          <div className="w-full md:w-auto order-1 md:order-3 ml-10 text-right text-md mb-6 md:mb-0 font-Inter">
            <p className="hover:text-white mb-1 cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-white mb-1 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white mb-1 cursor-pointer">Cookies Policy</p>
            <p className="mt-20 text-gray-500">©2026 IDW. All rights</p>
          </div>

          {/* IDW large text */}
          <h1 className="w-1/2 md:w-auto order-2 md:order-1 text-[127px] sm:text-[120px] md:text-[332px] font-medium font-Poppins text-gray-300 leading-[0.8] -ml-7">
            IDW
          </h1>

          {/* Footer image */}
          <div className="w-1/2 md:w-auto order-3 md:order-2 flex justify-end">
            <img
              src={footerImg}
              alt="footer visual"
              className="w-[95px] sm:w-[180px] md:w-[270px] h-auto object-cover grayscale"
            />
          </div>

        </div>

        {/* ── TAB BOTTOM (md only: 768px–1023px) ── */}
        <div className="hidden md:block lg:hidden pt-6">

          {/* Policies — right aligned */}
          <div className="text-right text-[14px] mb-2 font-Inter">
            <p className="hover:text-white mb-1 cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-white mb-1 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white mb-1 cursor-pointer">Cookies Policy</p>
          </div>

          {/* Copyright — right aligned */}
          <div className="text-right text-[13px] text-gray-500 mb-2 font-Inter">
            @2026 IDW. All rights
          </div>

          {/* IDW full width + image at bottom-right corner */}
          <div className="relative overflow-hidden">
            <h1 className="text-[220px] font-medium font-Poppins text-white leading-[0.85] -ml-4">
              IDW
            </h1>
            <img
              src={footerImg}
              alt="footer visual"
              className="absolute bottom-0 right-0 w-[200px] h-auto object-cover grayscale"
            />
          </div>

        </div>

        {/* ── MOBILE BOTTOM (below md: 0px–767px) ── */}
        <div className="block md:hidden pt-6">

          {/* Policies — right aligned */}
          <div className="text-right text-[14px] mb-2 font-Inter">
            <p className="hover:text-white mb-1 cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-white mb-1 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white mb-1 cursor-pointer">Cookies Policy</p>
          </div>

          {/* Copyright — right aligned */}
          <div className="text-right text-[13px] text-gray-500 mb-2 font-Inter">
            @2026 IDW. All rights
          </div>

          {/* IDW text + image side by side */}
          <div className="flex items-end justify-between overflow-hidden">
            <h1 className="text-[120px] font-medium 
            font-Poppins text-gray-300 leading-[0.85] -ml-3">
              IDW
            </h1>
            <img
              src={footerImg}
              alt="footer visual"
              className="w-[80px] h-auto object-cover grayscale mb-1"
            />
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;