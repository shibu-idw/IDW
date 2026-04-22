import React from "react";
import BannerImg from "./../../assets/Home/Explore.png";

export default function WorkHighlight() {
  return (
    <section className="w-full py-16 md:py-42">
      
      <div className="relative w-full h-[500px] md:h-[600px]">
        
        {/* Background Image */}
        <img
          src={BannerImg}
          alt="work"
          className="w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/60 to-transparent"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20 text-center">
          
          <p className="text-white text-lg md:text-4xl leading-tight tracking-wide max-w-5xl font-medium">
            Explore the work we’ve done to help businesses <br/> take meaningful steps
            toward digital growth. <br/> Each project reflects practical solutions,
            clear <br/> strategy, and real-world impact.
          </p>

        </div>
      </div>

    </section>
  );
}