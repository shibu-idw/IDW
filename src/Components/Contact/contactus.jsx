import React, { useEffect } from "react";
import mapImg from "./../../assets/Contact/footer.png";

const HeroContact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const openBangaloreMap = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946",
      "_blank",
    );
  };

  const openTiruvannamalaiMap = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=12.2253,79.0747",
      "_blank",
    );
  };

  return (
    <section className="bg-[#f5f5f5] px-6 md:px-10 lg:px-20 pb-15 pt-35 font-Poppins">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-[36px] md:text-[52px] font-bold text-black max-w-[280px] mx-auto md:max-w-full">
          Ready to Make Your Brand Roar?
        </h1>

        <p className="font-Inter text-gray-900 text-[24px] font-semibold leading-relaxed text-center max-w-[260px] mx-auto md:max-w-full">
          Reach out to explore how IDW can support your digital growth.
          <br className="hidden md:block" />
          Simple guidance, tailored to your needs.
        </p>
      </div>

      <div className="mt-4">
        <div className="flex flex-col lg:flex-row lg:justify-end gap-3 lg:gap-25">
          {/* IMAGE */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <h3 className="text-[24px] font-bold w-full text-left">
              Bangalore, Tiruvannamalai
            </h3>

            {/* ✅ MAP + PINS */}
            <div className="relative w-full max-w-[700px]">
              <img
                src={mapImg}
                alt="map"
                className="w-full h-[450px] object-contain"
              />

              {/* 🔴 Bangalore Pin */}
              <div
                onClick={openBangaloreMap}
                className="absolute top-[45%] left-[60%] cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-5 h-5 bg-red-600 rounded-full"></div>
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75"></div>
                </div>

                <span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 
                                 bg-black text-white text-xs px-2 py-1 rounded 
                                 opacity-0 group-hover:opacity-100 transition"
                >
                  Bangalore Office
                </span>
              </div>

              {/* 🔵 Tiruvannamalai Pin */}
              <div
                onClick={openTiruvannamalaiMap}
                className="absolute top-[55%] left-[62%] cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                </div>

                <span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 
                                 bg-black text-white text-xs px-2 py-1 rounded 
                                 opacity-0 group-hover:opacity-100 transition"
                >
                  Tiruvannamalai Office
                </span>
              </div>
            </div>

            <p className="hidden mt-12 ml-29 lg:block font-Inter text-[28px] text-black">
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
                className="w-full bg-transparent font-medium text-[16px] md:text-[18px] lg:text-[20px] border-b-2 border-gray-400 text-black focus:outline-none py-2"
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

            <p className="font-Inter mt-6 text-[26px] text-black text-left lg:hidden">
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
