import React from "react";
import { Link } from "react-router-dom";

import footerImg from "./../../assets/Footer/footerlast.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-10 lg:px-20 pt-16 pb-0">

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
            <li className="hover:text-white cursor-pointer">
              <a 
                href="https://www.instagram.com/idwindia?igsh=azh0ZW9iMXdvYmxh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">WhatsApp</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="lg:w-[25%]">
          <h3 className="text-white text-[28px] font-semibold font-Poppins mb-13">
            Navigation
          </h3>
          <ul className="space-y-2 text-[18px] font-Inter">
            <li className="hover:text-white cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/">Services</Link> {/* scroll handled in header */}
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/division">Divisions</Link> {/* ✅ fixed */}
            </li>
          </ul>
        </div>

        {/* About Section (unchanged) */}
        <div className="w-full md:w-[70%] lg:w-[45%] lg:max-w-md px-0 md:px-0 lg:px-0">
          <h3 className="text-white text-[20px] md:text-[24px] lg:text-[26px] font-semibold font-Poppins mb-6 md:mb-10 lg:mb-14 ml-0 md:ml-0 lg:-ml-16">
            IDW – Introducing Digital To The World
          </h3>

          <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed mb-4 font-Inter ml-0 lg:-ml-16">
            This Space brings together work we've done and work We're currently
            doing, along with conversation that continue beyond Individual
            projects. If it feels right, this can be this starting point.
          </p>

          <p className="text-[14px] md:text-[15px] lg:text-[16px] font-Inter ml-0 lg:-ml-16">
            <span className="text-gray-400">Location</span> <br />
            Bangalore, Tiruvannamalai
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10">

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-wrap md:flex-nowrap justify-between items-end pt-10 overflow-hidden">

          <div className="w-full md:w-auto order-1 md:order-3 ml-10 text-right text-md mb-6 md:mb-0 font-Inter">
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/terms">Terms & Conditions</Link> {/* ✅ fixed */}
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/privacy">Privacy Policy</Link> {/* ✅ fixed */}
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/privacy">Cookies Policy</Link> {/* fallback */}
            </p>
            <p className="mt-18 text-gray-500">©2026 IDW. All rights</p>
          </div>

          <h1 className="w-1/2 md:w-auto order-2 md:order-1 text-[127px] sm:text-[120px] md:text-[332px] font-medium font-Poppins text-gray-300 leading-[0.8] -ml-7">
            IDW
          </h1>

          <div className="w-1/2 md:w-auto order-3 md:order-2 flex justify-end">
            <img
              src={footerImg}
              alt="footer visual"
              className="w-[95px] sm:w-[180px] md:w-[252px] h-auto object-cover grayscale"
            />
          </div>
        </div>

        {/* TAB */}
        <div className="hidden md:block lg:hidden pt-6">
          <div className="text-right text-[14px] mb-2 font-Inter">
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/terms">Terms & Conditions</Link>
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/privacy">Privacy Policy</Link>
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/privacy">Cookies Policy</Link>
            </p>
          </div>

          <div className="text-right text-[13px] text-gray-500 mb-2 font-Inter">
            ©2026 IDW. All rights
          </div>

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

        {/* MOBILE */}
        <div className="block md:hidden pt-6">
          <div className="text-right text-[14px] mb-2 font-Inter">
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/terms">Terms & Conditions</Link>
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/privacy">Privacy Policy</Link>
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              <Link to="/privacy">Cookies Policy</Link>
            </p>
          </div>

          <div className="text-right text-[13px] text-gray-500 mb-2 font-Inter">
            ©2026 IDW. All rights
          </div>

          <div className="flex items-end justify-between overflow-hidden">
            <h1 className="text-[120px] font-medium font-Poppins text-gray-300 leading-[0.85] -ml-3">
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