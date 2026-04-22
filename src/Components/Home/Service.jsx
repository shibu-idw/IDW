import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20 font-poppins">
      
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Label */}
        <p className="text-black font-semibold mb-6 tracking-wide text-2xl">
          /OUR CORE SERVICES/
        </p>

        {/* 🔥 Center Heading */}
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900 max-w-md">
            <span className="block">Our core disciplines</span>
            <span className="block">where thinking</span>
            <span className="block">becomes design.</span>
          </h2>
        </div>

        {/* 🔥 Bottom Right Paragraph */}
        <div className="mt-12 flex justify-end">
          <p className="text-[#7A7A7A] text-md font-semibold leading-tight max-w-sm">
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