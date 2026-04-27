import heroBg from "../../assets/Division/hero.jpg";

export default function Hero() {
  return (
    <div className="w-full px-0 lg:px-20 pt-32 md:pt-36 lg:pt-38 pb-16 md:pb-20 lg:pb-24 bg-[#f5f5f5]">

      <div className="relative w-full lg:max-w-7xl lg:mx-auto overflow-hidden">

        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[520px] overflow-hidden">

          {/* Background */}
          <img
            src={heroBg}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[16px]">

            {/* Heading Top */}
            <p
              className="
                text-white/90
                leading-[1.1]
                tracking-[-0.02em]
                text-[31px]
                sm:text-[40px]
                md:text-[56px]
                lg:text-[88px]
              "
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 200
              }}
            >
              Structured for
            </p>

            {/* Heading Main */}
            <h1
              className="
                text-white
                leading-[1.05]
                mt-[12px]
                text-[34px]
                sm:text-[42px]
                md:text-[64px]
                lg:text-[96px]
              "
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500
              }}
            >
              digital impact
            </h1>

            {/* Description */}
            <p
              className="
                text-white/85
                text-center
                mt-[24px]
                max-w-[300px]
                text-[12px]
                leading-[1.6]
                sm:max-w-[420px]
                sm:text-[13px]
                md:max-w-[700px]
                md:text-[15px]
                lg:max-w-[880px]
                lg:text-[18px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400
              }}
            >
              Our divisions focus on delivering targeted solutions across
              different stages of digital growth. <br />
              From strategy to execution, each area drives meaningful progress.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}