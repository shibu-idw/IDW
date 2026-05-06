import Hero_idw from "./../../assets/Home/Hero_idw.jpg";

export default function Hero() {
  return (
    <section className="w-full px-0 lg:px-20 pt-32 md:pt-34 lg:pt-36 pb-16 md:pb-20 lg:pb-24 bg-[#f5f5f5]">
      
      <div className="relative w-full lg:max-w-7xl lg:mx-auto overflow-hidden">
        
        <img
          src={Hero_idw}
          alt="Team meeting"
          className="w-full h-[380px] sm:h-[420px] md:h-[500px] lg:h-[560px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          
          {/* Top Text */}
          <h2 className="text-gray-100 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-[300] leading-tight tracking-tight transform lg:scale-x-116 lg:scale-y-130">
            Empowering Businesses
          </h2>

          <div className="h-4 md:h-6"></div>

          {/* Main Heading */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight transform lg:scale-x-114 lg:scale-y-125">
            Through Digital Growth
          </h1>

          {/* Description */}
          <p className="text-white text-sm sm:text-base lg:text-lg mt-4 max-w-3xl lg:max-w-6xl leading-relaxed">
            Helping brands adapt, grow, and scale in the digital world with
            result-driven strategies.
          </p>

          {/* Button */}
          <button
            onClick={() => {
              const el = document.getElementById("vission");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 bg-[#2f4b8f] hover:bg-[#1f3a7a] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-medium transition"
          >
            ▪ Explore the platform
          </button>

        </div>
      </div>
    </section>
  );
}