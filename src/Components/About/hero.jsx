import heroImg from "./../../assets/About/idw.png";

export default function AboutHero() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-20 pt-38 pb-24 bg-[#f5f5f5]">
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <img
          src={heroImg}
          alt="Digital growth"
          className="w-full h-[420px] md:h-[500px] lg:h-[560px] object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-gray-100 text-3xl md:text-5xl lg:text-7xl font-thin leading-tight tracking-tight">
            Built to simplify
          </h2>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium mt-3 leading-tight tracking-tight">
            Digital growth
          </h1>

          <p className="text-white text-sm md:text-base lg:text-lg mt-4 max-w-5xl leading-relaxed">
            IDW helps businesses and individuals navigate digital adoption with
            clarity and confidence. From understanding to action, we make every
            step simple, practical, and impactful.
          </p>

          <button className="mt-6 bg-[#1E3A8A] hover:bg-[#1f3a7a] text-white px-6 py-3 text-sm md:text-base font-medium transition">
            ▪ Explore the platform
          </button>
        </div>
      </div>
    </section>
  );
}