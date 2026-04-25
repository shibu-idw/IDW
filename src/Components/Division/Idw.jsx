import mainImg from "../../assets/Division/main.png";
import sideImg from "../../assets/Division/side.png";

export default function DivisionSection() {
  return (
    <div className="w-full bg-[#f5f5f5] px-6 md:px-10 lg:px-20 py-15 md:py-25 lg:py-5">
      
       <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-start gap-[24px] lg:gap-[80px]">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[45%]">
            
            {/* Small label */}
            <p
              className="text-black text-[14px] lg:text-[16px] mb-[12px] lg:mb-[18px] font-semibold "
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-0.03em"
              
              }}
            >
              /IDW/
            </p>

            {/* Heading — desktop only */}
            <h2
              className="mb-[16px] lg:mb-[24px] hidden lg:block w-full"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "42px",
                lineHeight: "100%",
                letterSpacing: "-0.03em",
                color: "#000000",
                textAlign: "justify",
                hangingPunctuation: "first last",
                hyphens: "none"
              }}
            >
              Empowering business to take confident steps into the digital world.
            </h2>

            {/* Heading — mobile/tab only */}
            <h2
              className="mb-[16px] block lg:hidden"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(26px, 3.5vw, 42px)",
                lineHeight: "115%",
                letterSpacing: "-0.03em",
                color: "#000000"
              }}
            >
              Empowering businesses to take confident steps into the digital world.
            </h2>

            {/* Paragraph */}
            <p
              className="w-full"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "130%",
                letterSpacing: "-0.03em",
                textAlign: "justify",
                color: "#7A7A7A"
              }}
            >
              We partner with startups, small businesses, and growing brands to build strong digital foundations and scale through strategic marketing and technology solutions.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="w-full lg:w-[55%] flex gap-[12px] lg:gap-[16px]">
            
            {/* BIG IMAGE */}
            <div className="w-[55%] md:w-[50%] lg:w-[60%]">
              <img
                src={mainImg}
                alt="main"
                className="w-full h-[340px] md:h-[500px] lg:h-[480px] object-cover"
              />
            </div>

            {/* SMALL IMAGE */}
            <div className="w-[45%] md:w-[50%] lg:w-[40%] flex items-start">
              <img
                src={sideImg}
                alt="side"
                className="w-full h-[180px] md:h-[220px] lg:h-[220px] object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}