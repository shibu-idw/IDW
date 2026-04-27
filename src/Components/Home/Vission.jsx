import visionMain from "./../../assets/Home/vision-main.jpg";
import visionSmall from "./../../assets/Home/vision-small.png";

export default function Vision() {
  return (
    <section className="w-full bg-[#f5f5f5] px-6 md:px-10 lg:px-20 py-15 md:py-25 lg:py-25">
      
      <div className="max-w-7xl mx-auto">

        {/* Top Label */}
        <p className="text-black font-semibold mb-6 tracking-wide text-lg md:text-2xl">
          /OUR VISION/
        </p>

        {/* ================= DESKTOP ONLY ================= */}
        <div className="hidden lg:flex items-start gap-10">
          
          {/* Images */}
          <div className="flex gap-6 items-start">
            
            <img
              src={visionSmall}
              alt="team"
              className="w-50 h-50 object-cover"
            />

            <img
              src={visionMain}
              alt="vision"
              className="w-[400px] h-[420px] object-cover"
            />
          </div>

          {/* Heading */}
          <div className="flex-1 flex items-end h-[420px]">
            <h2 className="text-black font-semibold leading-tight text-4xl max-w-[420px]">
              <span className="block">Empowering business</span>
              <span className="block">to take confident steps</span>
              <span className="block">into the digital world.</span>
            </h2>
          </div>
        </div>

        {/* ================= TABLET ONLY ================= */}
        <div className="hidden md:block lg:hidden">

          {/* Images Row */}
          <div className="flex gap-6 items-start mb-8">
            <img
              src={visionSmall}
              alt="team"
              className="w-55 h-60 object-cover"
            />

            <img
              src={visionMain}
              alt="vision"
              className="w-[496px] h-[520px] object-cover"
            />
          </div>

          {/* Heading BELOW images */}
          <h2 className="text-black font-semibold leading-tight tracking-wide text-[44px] mb-10">
            Empowering businesses to take confident steps into the digital world.
          </h2>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden">
          
          {/* Top Row */}
          <div className="flex justify-between items-start mb-6">
            
            <h2 className="text-[#7A7A7A] font-semibold leading-tight text-xl w-[60%]">
              Empowering businesses to take confident steps into the digital world.
            </h2>

            <img
              src={visionSmall}
              alt="team"
              className="w-30 h-30 object-cover"
            />
          </div>

          {/* FULL WIDTH IMAGE */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[300px] overflow-hidden">
            
            <img
              src={visionMain}
              alt="vision"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="absolute inset-0 p-4 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 mb-3">
                <span className="text-white text-2xl font-semibold">01</span>
                <h3 className="text-white text-lg font-semibold">
                  Who We Are
                </h3>
              </div>

              <p className="text-white text-xs leading-relaxed mb-3">
                IDW (Introducing Digital to the World) is a digital growth initiative
                focused on enabling businesses to successfully transition into the digital space.
              </p>

              <p className="text-white text-xs leading-relaxed">
                We partner with startups, small businesses, and growing brands to build
                strong digital foundations and scale through strategic marketing and
                technology solutions.
              </p>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM (TAB + DESKTOP) ================= */}
        <div className="hidden md:flex mt-10 lg:mt-14 md:flex-row lg:flex-row gap-8 lg:gap-10">
          
          {/* Spacer (desktop only) */}
          <div className="hidden lg:block w-[calc(50px+130px)]"></div>

          <div className="flex-1 flex md:flex-row lg:flex-row">
            
            {/* Left Title */}
            <div className="w-full md:w-1/3 lg:w-1/3 flex items-start gap-4">
              <span className="text-3xl font-semibold">01</span>
              <h3 className="text-xl md:text-2xl font-semibold">
                Who We Are
              </h3>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 lg:w-2/3 text-[#7A7A7A] 
              text-sm md:text-base lg:text-xl 
              font-semibold leading-relaxed 
              space-y-4 md:space-y-5 lg:space-y-6 
              mt-4 md:mt-0 lg:mt-0">

              <p>
                IDW (Introducing Digital to the World) is a digital growth initiative
                focused on enabling businesses to successfully transition into the digital space.
              </p>

              <p>
                We partner with startups, small businesses, and growing brands to build
                strong digital foundations and scale through strategic marketing and
                technology solutions.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}