import visionMain from "./../../assets/Home/vision-main.jpg";
import visionSmall from "./../../assets/Home/vision-small.png";

export default function Vision() {
  return (
    <section className="w-full bg-[#f5f5f5] px-4 md:px-8 lg:px-20 py-25">
      
      <div className="max-w-7xl mx-auto">

        {/* Top Label */}
        <p className="text-black font-semibold mb-6 tracking-wide text-2xl">
          /OUR VISION/
        </p>

        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          
          {/* Left Images */}
          <div className="flex gap-6 items-start">
            
            <img
              src={visionSmall}
              alt="team"
              className="w-50 h-50 object-cover"
            />

            <img
              src={visionMain}
              alt="vision"
              className="w-[260px] md:w-[320px] lg:w-[400px] h-[340px] md:h-[420px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Right Heading */}
          <div className="flex-1 flex items-end h-[340px] md:h-[420px] lg:h-[420px]">
            <h2 className="text-black font-semibold leading-tight
              text-2xl md:text-3xl lg:text-4xl w-[420px]">
              
              <span className="block">Empowering business</span>
              <span className="block">to take confident steps</span>
              <span className="block">into the digital world.</span>

            </h2>
          </div>
        </div>

        {/* 🔥 Bottom Section FIXED */}
        <div className="mt-14 flex flex-col lg:flex-row gap-10">
          
          {/* Empty space = small image width + gap */}
          <div className="hidden lg:block w-[calc(50px+130px)]"></div>

          {/* Content aligned with MAIN image start */}
          <div className="flex-1 flex flex-col lg:flex-row">
            
            {/* Left Title */}
            <div className="lg:w-1/3 flex items-start gap-4">
              <span className="text-2xl font-semibold">01</span>
              <h3 className="text-xl md:text-2xl font-semibold">
                Who We Are
              </h3>
            </div>

            {/* Right Content */}
            <div className="lg:w-2/3 text-[#7A7A7A] text-sm md:text-xl font-semibold leading-relaxed space-y-6">
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