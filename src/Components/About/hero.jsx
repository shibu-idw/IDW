import heroImg from "./../../assets/About/idw.png";

export default function AboutHero() {
  return (
    <section className="w-full bg-[#f5f5f5] px-3 sm:px-4 md:px-6 lg:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-38 pb-12 sm:pb-16 lg:pb-24">
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <img
          src={heroImg}
          alt="Digital growth"
          className="w-full h-[420px] sm:h-[460px] md:h-[520px] lg:h-[560px] object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
          <h2 className="text-gray-100 text-[42px] sm:text-[56px] md:text-[74px] lg:text-7xl font-thin leading-[1.05] tracking-tight">
            Built to simplify
          </h2>

          <h1 className="text-white text-[48px] sm:text-[64px] md:text-[82px] lg:text-7xl font-medium mt-2 leading-[1.05] tracking-tight">
            Digital growth
          </h1>

          <p className="text-white text-[15px] sm:text-[17px] md:text-[19px] lg:text-lg mt-5 max-w-[760px] lg:max-w-5xl leading-[1.35]">
            IDW helps businesses and individuals navigate digital adoption with
            clarity and confidence. From understanding to action, we make every
            step simple, practical, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}