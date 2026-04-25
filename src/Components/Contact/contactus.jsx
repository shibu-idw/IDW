import React from "react";
import mapImg from "./../../assets/Footer/Contact1.png";

const HeroContact = () => {
  return (
    <section className="bg-white px-6 md:px-10 lg:px-20 py-15 font-Poppins">

      {/* ── HEADING ── */}
      <div className="text-center max-w-5xl mx-auto mb-10">
        <h1 className="text-[22px] sm:text-[28px] md:text-[38px] lg:text-[52px] font-bold text-black leading-tight">
          Ready to Make Your Brand Roar?
        </h1>
        <p className="font-Inter text-gray-900 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] font-semibold leading-relaxed text-center mt-4">
          Reach out to explore how IDW can support your digital growth. <br />
          Simple guidance, tailored to your needs.
        </p>
      </div>

      {/* ── CONTENT ROW ── */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">

        {/* LEFT — Map + location + email (desktop) */}
        <div className="flex flex-col w-full lg:w-[55%]">

          <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-bold text-black mb-3">
            Bangalore, Tiruvannamalai
          </h3>

          {/* Map with two blue dots */}
          <div className="relative w-full">
            <img
              src={mapImg}
              alt="map"
              className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] object-contain object-left"
            />

            {/* Bangalore dot */}
            <div
              className="absolute w-3 h-3 bg-blue-700 rounded-full border-2 border-white shadow-md"
              style={{ top: "52%", left: "60.5%" }}
              title="Bangalore"
            />

            {/* Tiruvannamalai dot */}
            <div
              className="absolute w-3 h-3 bg-blue-700 rounded-full border-2 border-white shadow-md"
              style={{ top: "56%", left: "60%" }}
              title="Tiruvannamalai"
            />
          </div>

          {/* Desktop — email bottom-left */}
          <p className="hidden lg:block font-Inter text-[20px] text-black mt-4">
            idw.enquiries@gmail.com
          </p>
        </div>

        {/* RIGHT — Form */}
        <div className="w-full lg:w-[40%]">

          <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-medium mb-6 text-black">
            Name (required)
          </h3>

          {/* First + Last name */}
          <div className="flex gap-6 mb-6">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 bg-transparent border-b border-gray-400 font-medium text-[15px] md:text-[17px] text-black placeholder-gray-500 focus:outline-none py-2"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 bg-transparent border-b border-gray-400 font-medium text-[15px] md:text-[17px] text-black placeholder-gray-500 focus:outline-none py-2"
            />
          </div>

          {/* Services */}
          <div className="mb-6">
            <select className="w-full bg-transparent font-medium text-[15px] md:text-[17px] border-b border-gray-400 text-black focus:outline-none py-2 appearance-none cursor-pointer">
              <option>Services</option>
              <option>Digital Marketing</option>
              <option>Design & Development</option>
              <option>Branding & Strategy</option>
              <option>Analytics & Reporting</option>
              <option>Digital Consulting</option>
            </select>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-400 font-medium text-[15px] md:text-[17px] text-black placeholder-gray-500 focus:outline-none py-2"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full bg-transparent border-b border-gray-400 font-medium text-[15px] md:text-[17px] text-black placeholder-gray-500 focus:outline-none py-2"
            />
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Project Description"
              className="w-full bg-transparent border-b border-gray-400 font-medium text-[15px] md:text-[17px] text-black placeholder-gray-500 focus:outline-none py-10"
            />
          </div>

          {/* Submit */}
          <button className="bg-[#1E3A8A] text-white px-8 py-3 text-sm font-medium hover:opacity-90 transition mt-2">
            SUBMIT →
          </button>

          {/* Mobile — email below submit */}
          <p className="font-Inter mt-6 text-[18px] text-black text-left lg:hidden">
            idw.enquiries@gmail.com
          </p>

          {/* Phone */}
          <p className="font-Inter mt-4 text-[20px] md:text-[24px] text-black text-left lg:text-right">
            + 91 9600998036
          </p>

        </div>
      </div>

    </section>
  );
};

export default HeroContact;