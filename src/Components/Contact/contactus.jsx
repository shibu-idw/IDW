import React from "react";
import  { useEffect } from "react";

import mapImg from "./../../assets/Contact/footer.png";

const HeroContact = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  
  return (
    <section className="bg-[#f5f5f5] px-6 md:px-10 lg:px-20 pb-15 pt-35 font-Poppins">

      <div className="text-center max-w-5xl mx-auto">
        
        {/* Mobile 3 lines */}
        <h1 className="text-[36px] md:text-[52px] font-bold text-black 
                       max-w-[280px] mx-auto md:max-w-full">
          Ready to Make Your Brand Roar?
        </h1>

        {/* Mobile 4 lines */}
<p className="font-Inter text-gray-900 text-[24px] font-semibold leading-relaxed text-center
              max-w-[260px] mx-auto md:max-w-full">
  Reach out to explore how IDW can support your digital growth.
  <br className="hidden md:block" />
  Simple guidance, tailored to your needs.
</p>
      </div>

      {/* Content */}
      <div className="mt-4">
        
        <div className="flex flex-col lg:flex-row lg:justify-end gap-3 lg:gap-25">

          {/* IMAGE */}
          <div className="flex flex-col items-center lg:items-start w-full">
            
            <h3 className="text-[24px] font-bold w-full text-left">
              Bangalore, Tiruvannamalai
            </h3>

            <img
              src={mapImg}
              alt="map"
              className="w-full max-w-[700px] h-[450px] object-contain"
            />

            {/* ✅ Desktop only mail */}
            <p className="hidden mt-12 ml-29 lg:block font-Inter text-[28px]  text-black">
              idw.enquiries@gmail.com
            </p>
          </div>

          {/* FORM */}
          <div className="w-full max-w-[320px] self-start md:self-start lg:self-auto">

            <h3 className="text-[24px] font-medium mb-6 text-black">
              Name (required)
            </h3>

            <div className="flex gap-6 mb-6">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 bg-transparent border-b-2 border-gray-400 font-medium text-[20px] text-black placeholder-gray-900 focus:outline-none py-2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 bg-transparent border-b-2 border-gray-400 font-medium text-[20px] text-black placeholder-gray-900 focus:outline-none py-2"
              />
            </div>
            <div className="mb-6">
              <select
                defaultValue=""
                className="w-full bg-transparent font-medium text-[16px] md:text-[18px] lg:text-[20px]
                          border-b-2 border-gray-400 text-black focus:outline-none py-2"
              >
                <option value="" disabled hidden>
                  Services
                </option>
                <option>Digital Marketing</option>
                <option>Design & Development</option>
                <option>Branding & Strategy</option>
                <option>Analytics & Reporting</option>
                <option>Digital Consulting</option>
              </select>
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b-2 border-gray-400 font-medium text-[20px] text-black placeholder-gray-900 focus:outline-none py-2"
              />
            </div>

            <div className="-mt-3">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full bg-transparent border-b-2 border-gray-400 font-medium text-[20px] text-black placeholder-gray-900 focus:outline-none py-2"
              />
            </div>

            <div className="-mt-5">
              <input
                type="text"
                placeholder="Project Description"
                className="w-full bg-transparent border-b-2 border-gray-400 font-medium text-[20px] text-black placeholder-gray-900 focus:outline-none py-10"
              />
            </div>

            <button className="bg-[#1E3A8A] text-white px-8 py-3 text-sm font-medium hover:opacity-90 transition mt-8">
              SUBMIT →
            </button>

            {/* ✅ Mobile mail */}
            <p className="font-Inter mt-6 text-[26px] text-black text-left md:text-left lg:hidden">
              idw.enquiries@gmail.com
            </p>

            <p className="font-Inter mt-4 md:mt-6 lg:mt-14 text-[28px] text-black pb-10 text-left">
              + 91 9600998036
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroContact;