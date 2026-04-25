import React from "react";
import BannerImg from "./../../assets/Home/Explore.png";

export default function WorkHighlight() {
  return (
    <section className="w-full py-16 md:py-32 lg:py-42 bg-[#f5f5f5]">
      
      <div className="relative w-full h-[380px] sm:h-[450px] md:h-[550px] lg:h-[670px]">
        
        {/* Background Image */}
        <img
          src={BannerImg}
          alt="work"
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          
          <p className="text-white 
            text-base sm:text-lg md:text-3xl lg:text-4xl 
            leading-relaxed md:leading-tight 
            tracking-widest md:tracking-wide lg:tracking-wide
            max-w-md sm:max-w-md md:max-w-3xl lg:max-w-5xl 
            font-medium mt-0 md:mt-0 lg:mt-50">
            
            Explore the work we’ve done to help business  
            <br className="hidden sm:block" />
            take meaningful steps toward digital growth. 
            <br className="hidden md:block" />
            Each project reflects practical solutions, 
            clear strategy, and real-world impact.
          
          </p>

        </div>
      </div>

    </section>
  );
}