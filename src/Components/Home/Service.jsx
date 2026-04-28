import React from "react";

const Services = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-20 lg:py-20 px-6 md:px-10 lg:px-20">
      
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Label */}
        <p className="text-black font-semibold mb-6 tracking-wide 
          text-lg md:text-3xl lg:text-2xl">
          /OUR CORE SERVICES/
        </p>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden lg:block">

          {/* Center Heading */}
          <div className="flex justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900 max-w-md">
              <span className="block">Our core disciplines</span>
              <span className="block">where thinking</span>
              <span className="block">becomes design.</span>
            </h2>
          </div>

          {/* Bottom Right Paragraph */}
<div className="mt-12 flex justify-end">
  <p
    className="text-[#7A7A7A] text-md font-semibold leading-tight tracking-wide max-w-sm
    text-left
    whitespace-pre-line
    break-words"
  >
    We work across a focused set of disciplines shaping how digital
    products are structured, designed, and built. Each service
    represents a distinct area of responsibility within design and
    development.
  </p>
</div>

        </div>

        {/* ================= TABLET + MOBILE ================= */}
        <div className="block lg:hidden md:flex md:flex-col md:items-start">

          {/* Heading */}
          <h2 className="text-3xl md:text-[40px] font-semibold leading-tight text-gray-900 max-w-[500px]">
            <span className="block">Our core disciplines</span>
            <span className="block">where thinking</span>
            <span className="block">becomes design.</span>
          </h2>

          {/* Paragraph (flex aligned) */}
          <p className="mt-6 text-[#7A7A7A] 
            text-sm md:text-lg 
            font-semibold leading-relaxed tracking-wide md:tracking-wider lg:tracking-wide 
            max-w-[540px] md:max-w-[750px]">
            We work across a focused set of disciplines shaping how digital 
            products are structured, designed, and built. Each services 
            represents a distinct area of responsibility within design and 
            development.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Services;