import React from "react";
import footerImg from "./../../assets/Footer/footer.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-10 lg:px-20 pt-16 pb-0">

      {/* TOP (FLEX) */}
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Contact */}
        <div className="md:w-[30%]">
          <h3 className="text-white text-[28px] font-semibold font-Poppins">
            Contact
          </h3>

          <p className="text-white text-[18px] font-medium">
            idw.enquiries@gmail.com
          </p>

          <ul className="space-y-2 text-[18px] mt-6">
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">WhatsApp</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="md:w-[25%]">
          <h3 className="text-white text-[28px] font-semibold font-Poppins mb-13">
            Navigation
          </h3>

          <ul className="space-y-2 text-[18px]">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Divisions</li>
          </ul>
        </div>

        {/* About */}
        <div className="md:w-[45%] max-w-md">
          <h3 className="text-white text-[26px] font-semibold font-Poppins -ml-4.5 mb-6">
            IDW – Introducing Digital To The World
          </h3>

          <div className="px-6 md:px-10 lg:px-20 -mx-6 md:-mx-10 lg:-mx-20">
            <p className="text-[16px] leading-relaxed mb-4 text-left -ml-4.5">
              This Space brings together work we've done and work We're currently
              doing, along with conversation that continue beyond Individual
              projects. If it feels right, this can be this starting point.
            </p>

            <p className="text-[16px] text-left -ml-4.5">
              <span className="text-gray-400">Location</span> <br />
              Bangalore, Tiruvannamalai
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-10">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-end pt-10 overflow-hidden">

          {/* POLICIES */}
          <div className="w-full md:w-auto order-1 md:order-3 ml-10 text-right text-md mb-6 md:mb-0">
            <p className="hover:text-white mb-1 cursor-pointer">
              Terms & Conditions
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-white mb-1 cursor-pointer">
              Cookies Policy
            </p>

            <p className="mt-20 text-gray-500">
              ©2026 IDW. All rights
            </p>
          </div>

          {/* IDW */}
          <h1 className="w-1/2 md:w-auto order-2 md:order-1 text-[127px] sm:text-[120px] md:text-[332px] font-medium text-gray-300 leading-[0.8] -ml-7">
            IDW
          </h1>

          {/* IMAGE */}
          <div className="w-1/2 md:w-auto order-3 md:order-2 flex justify-end">
            <img
              src={footerImg}
              alt="footer visual"
              className="w-[95px] sm:w-[180px] md:w-[270px] h-auto object-cover grayscale"
            />
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;