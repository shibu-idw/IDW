import mainImg from "../../assets/Division/main.png";
import sideImg from "../../assets/Division/side.png";

export default function DivisionSection() {
  return (
    <div className="w-full bg-[#eeeeee] py-[80px] px-[60px]">
      
      <div className="max-w-[1400px] mx-auto flex items-start gap-[90px]">
        
        {/* LEFT CONTENT */}
        <div className="w-[45%]">
          
          {/* Small label */}
          <p
            className="text-black text-[16px] mb-[18px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            /IDW/
          </p>

          {/* Heading */}
          <h2
            className="mb-[20px]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "42px",
              lineHeight: "100%",
              letterSpacing: "-0.03em",
              textAlign: "justify",
              color: "#000000"
            }}
          >
            Empowering businesses to take confident steps into the digital world.
          </h2>

          {/* Paragraph */}
          <p
            className="max-w-[420px]"
            style={{
              fontFamily: "Inter, sans-serif",
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
        <div className="w-[50%] flex items-start gap-[24px]">
          
          <div className="w-[70%]">
            <img
              src={mainImg}
              alt="main"
              className="w-full h-[420px] object-cover"
            />
          </div>

          <div className="w-[30%]">
            <img
              src={sideImg}
              alt="side"
              className="w-full h-[200px] object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}