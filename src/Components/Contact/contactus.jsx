import React, { useEffect } from "react";
import mapImg from "./../../assets/Contact/footer.png";

const HeroContact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // 🔴 Bangalore Map Redirect
  const openBangaloreMap = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946",
      "_blank"
    );
  };

  // 🔵 Tiruvannamalai Map Redirect
  const openTiruvannamalaiMap = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=12.2253,79.0747",
      "_blank"
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

          {/* ================= MAP SECTION ================= */}
          <div className="flex flex-col items-center lg:items-start w-full">

            <h3 className="text-[24px] font-bold w-full text-left mb-4">
              Bangalore, Tiruvannamalai
            </h3>

            {/* ================= MAP ================= */}
            <div className="relative w-full max-w-[700px]">

              <img
                src={mapImg}
                alt="India Map"
                className="w-full h-auto object-contain rounded-xl"
              />

              {/* ================= BANGALORE PIN ================= */}
              {/* 
                Bangalore is roughly at 12.97°N, 77.59°E
                On a standard India-only map image:
                  - Left edge ≈ 68°E, Right edge ≈ 97°E → width span ≈ 29°
                  - Top edge ≈ 37°N, Bottom edge ≈ 8°N  → height span ≈ 29°
                Horizontal: (77.59 - 68) / 29 ≈ 33%
                Vertical:   (37 - 12.97) / 29 ≈ 83%
                Adjust based on your actual map image boundaries below.
              */}
              <button
                onClick={openBangaloreMap}
                className="
                  absolute
                  top-[83%]
                  left-[33%]
                  -translate-x-1/2
                  -translate-y-1/2
                  group
                  cursor-pointer
                "
              >
                {/* Tooltip */}
                <div
                  className="
                    absolute
                    bottom-10
                    left-1/2
                    -translate-x-1/2
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    scale-90
                    group-hover:scale-100
                    pointer-events-none
                    z-50
                  "
                >
                  <div className="bg-white shadow-2xl rounded-xl px-4 py-3 min-w-[220px] border border-gray-200">
                    <h4 className="text-red-600 font-bold text-[16px]">
                      Bangalore Office
                    </h4>
                    <p className="text-gray-700 text-[13px] mt-1 leading-relaxed">
                      IDW Digital Solutions
                      <br />
                      Bangalore, Karnataka
                    </p>
                    <p className="text-blue-600 text-[12px] mt-2 font-medium">
                      Click for Directions →
                    </p>
                  </div>
                </div>

                {/* Pin */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-7 w-7 rounded-full bg-red-500 opacity-70 animate-ping"></span>
                  <span className="relative h-5 w-5 rounded-full bg-red-600 border-[3px] border-white shadow-xl"></span>
                </div>
              </button>

              {/* ================= TIRUVANNAMALAI PIN ================= */}
              {/* 
                Tiruvannamalai is at 12.22°N, 79.07°E
                Horizontal: (79.07 - 68) / 29 ≈ 38%
                Vertical:   (37 - 12.22) / 29 ≈ 85.5%
                Tiruvannamalai is slightly east and slightly south of Bangalore.
              */}
              <button
                onClick={openTiruvannamalaiMap}
                className="
                  absolute
                  top-[85.5%]
                  left-[38%]
                  -translate-x-1/2
                  -translate-y-1/2
                  group
                  cursor-pointer
                "
              >
                {/* Tooltip */}
                <div
                  className="
                    absolute
                    bottom-10
                    left-1/2
                    -translate-x-1/2
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    scale-90
                    group-hover:scale-100
                    pointer-events-none
                    z-50
                  "
                >
                  <div className="bg-white shadow-2xl rounded-xl px-4 py-3 min-w-[230px] border border-gray-200">
                    <h4 className="text-blue-600 font-bold text-[16px]">
                      Tiruvannamalai Office
                    </h4>
                    <p className="text-gray-700 text-[13px] mt-1 leading-relaxed">
                      IDW Digital Solutions
                      <br />
                      Tiruvannamalai, Tamil Nadu
                    </p>
                    <p className="text-blue-600 text-[12px] mt-2 font-medium">
                      Click for Directions →
                    </p>
                  </div>
                </div>

                {/* Pin */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-7 w-7 rounded-full bg-blue-500 opacity-70 animate-ping"></span>
                  <span className="relative h-5 w-5 rounded-full bg-blue-600 border-[3px] border-white shadow-xl"></span>
                </div>
              </button>

            </div>

            {/* ================= EMAIL ================= */}
            <p className="hidden mt-12 ml-29 lg:block font-Inter text-[28px] text-black">
              idw.enquiries@gmail.com
            </p>

          </div>

          {/* ================= FORM SECTION ================= */}
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
                <option value="" disabled hidden>Services</option>
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
              +91 9600998036
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;