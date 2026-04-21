import heroBg from "../../../assets/Division/hero.jpg";

export default function Hero() {
  return (
    <div className="w-full bg-[#e6e6e6] flex justify-center py-[28px]">
      
      <div className="w-[94%] max-w-[1580px]">
        
        <div className="relative w-full h-[520px] overflow-hidden">
          
          {/* Background */}
          <img
            src={heroBg}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            
            {/* Heading Top */}
            <h2
              className="text-white font-light leading-none tracking-[-0.02em]
                         text-[64px] md:text-[88px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Structured for
            </h2>

            {/* Heading Main */}
            <h1
              className="text-white font-semibold leading-none mt-[6px]
                         text-[56px] md:text-[96px]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              digital impact
            </h1>

            {/* Description */}
            <p
              className="text-white/85 mt-[18px] max-w-[880px]
                         text-[16px] md:text-[18px] leading-[1.6]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our divisions focus on delivering targeted solutions across different stages of digital growth.
              <br />
              From strategy to execution, each area drives meaningful progress.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}