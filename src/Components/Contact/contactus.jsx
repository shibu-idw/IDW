import React from "react";
import mapImg from "./../../assets/Footer/Contact1.png";

const HeroContact = () => {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 pt-20 pb-15 font-Poppins min-h-screen">

      {/* ── HEADING ── */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold text-black leading-[1.2] whitespace-normal break-words">
          Ready to Make Your <br /> Brand Roar?
        </h1>
        <p className="font-Inter text-gray-700 text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-relaxed text-center mt-6 max-w-2xl mx-auto">
          Reach out to explore how IDW can support your digital growth.
          <br className="hidden sm:block" />
          Simple guidance, tailored to your needs.
        </p>
      </div>

      {/* ── CONTENT ROW ── */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

        {/* LEFT — Map + location + email */}
        <div className="flex flex-col w-full lg:w-[50%]">

          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-black mb-4">
            Bangalore, Tiruvannamalai
          </h3>

          {/* Map with two blue dots */}
          <div className="relative w-full">
            <img
              src={mapImg}
              alt="map"
              className="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] object-cover rounded-lg"
            />

            {/* Bangalore dot */}
            <div
              className="absolute w-3 h-3 bg-blue-600 rounded-full"
              style={{ top: "48%", left: "58.5%" }}
              title="Bangalore"
            />

            {/* Tiruvannamalai dot */}
            <div
              className="absolute w-3 h-3 bg-blue-600 rounded-full"
              style={{ top: "54%", left: "57.8%" }}
              title="Tiruvannamalai"
            />
          </div>

          {/* Desktop — email bottom-left */}
          <p className="hidden lg:block font-Inter text-[16px] text-gray-600 mt-6">
            idw.enquiries@gmail.com
          </p>
        </div>

        {/* RIGHT — Form */}
        <div className="w-full lg:w-[45%]">

          {/* Name */}
          <div className="mb-6">
            <label className="text-[16px] md:text-[18px] font-medium text-black block mb-4">
              Name (required)
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 bg-transparent border-b border-gray-300 text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600 py-2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 bg-transparent border-b border-gray-300 text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600 py-2"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-6">
            <div className="border-b border-gray-300 py-2">
              <label className="text-[15px] font-medium text-black block mb-1">Services</label>
              <select className="w-full bg-transparent text-[15px] text-gray-500 focus:outline-none cursor-pointer">
                <option value="" disabled selected></option>
                <option>Digital Marketing</option>
                <option>Design & Development</option>
                <option>Branding & Strategy</option>
                <option>Analytics & Reporting</option>
                <option>Digital Consulting</option>
              </select>
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-300 text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600 py-2"
            />
          </div>

          {/* Email ID */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full bg-transparent border-b border-gray-300 text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600 py-2"
            />
          </div>

          {/* Project Description */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Project Description"
              className="w-full bg-transparent border-b border-gray-300 text-[15px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600 py-10"
            />
          </div>

          {/* Submit */}
          <button className="bg-[#1E3A8A] text-white px-8 py-3 text-sm font-medium hover:bg-[#15306b] transition">
            SUBMIT →
          </button>

          {/* Mobile email */}
          <p className="font-Inter mt-8 text-[15px] text-gray-600 lg:hidden">
            idw.enquiries@gmail.com
          </p>

          {/* Phone number */}
          <p className="font-Inter mt-6 text-[16px] text-gray-700 lg:text-right">
            + 91 9600998036
          </p>

        </div>
      </div>

    </section>
  );
};

export default HeroContact;