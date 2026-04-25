import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import serviceImg1 from "../../assets/Service/serviceImg1.png";
import serviceImg2 from "../../assets/Service/serviceImg2.png";
import serviceImg3 from "../../assets/Service/serviceImg3.png";
import serviceImg4 from "../../assets/Service/serviceImg4.png";
import serviceImg5 from "../../assets/Service/serviceImg5.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Digital Marketing", desc: "Content, ads, social growth strategies.", img: serviceImg1 },
  { id: "02", title: "Design & Development", desc: "UI/UX, websites, apps systems.", img: serviceImg2 },
  { id: "03", title: "Branding & Strategy", desc: "Brand identity & positioning.", img: serviceImg3 },
  { id: "04", title: "Analytics & Reporting", desc: "Tracking and performance insights.", img: serviceImg4 },
  { id: "05", title: "Digital Consulting", desc: "Business growth consulting.", img: serviceImg5 },
];

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.set(containerRef.current, {
        perspective: 2200,
        transformStyle: "preserve-3d",
      });

      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          inset: 0,
          zIndex: i + 1,
          yPercent: i === 0 ? 0 : 120,
          scale: 1,
          rotateX: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 130}%`,
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        const next = cards[i + 1];

        if (i !== cards.length - 1) {
          tl.to(card, {
            scale: 0.8,
            x: 40,
            y: -20,
            rotate: 1,
            duration: 0.4,
            ease: "none",
          });

          tl.to(card, {
            scale: 0.5,
            x: 80,
            y: -70,
            rotate: 4,
            opacity: 0,
            duration: 0.4,
            ease: "none",
          });

          if (next) {
            tl.to(
              next,
              { yPercent: 0, duration: 0.8, ease: "power2.out" },
              "-=0.3"
            );
          }
        }

        if (i === cards.length - 1) {
          tl.to(card, {
            scale: 0.5,
            x: 80,
            y: -70,
            rotate: 4,
            rotateX: 60,
            opacity: 0,
            duration: 0.7,
            ease: "power2.in",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black">

      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        {services.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute inset-0 flex items-center justify-center bg-[#f5f5f5] text-black"
          >
            <div className="w-full max-w-7xl px-6 md:px-10 lg:px-20 bg-[#f5f5f5]">

              {/* ================= DESKTOP ================= */}
              <div className="hidden lg:grid grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-6xl font-bold opacity-10">{item.id}</span>
                  <h2 className="text-5xl lg:text-7xl font-black uppercase">
                    {item.title}
                  </h2>
                  <p className="mt-6 text-sm lg:text-lg opacity-70 max-w-md">
                    {item.desc}
                  </p>
                  <button className="mt-8 px-6 py-3 border border-black rounded-full text-sm font-bold uppercase">
                    Get Started →
                  </button>
                </div>

                <div className="h-[400px] rounded-2xl overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* ================= TABLET ================= */}
              <div className="hidden sm:flex lg:hidden flex-col items-center justify-center text-center">

                {/* ID + TITLE */}
                <div className="flex justify-between w-full px-4 items-center">
                  <span className="text-7xl font-bold opacity-20">
                    {item.id}
                  </span>

                  <h2 className="text-5xl font-black uppercase text-right">
                    {item.title}
                  </h2>
                </div>

                {/* IMAGE */}
                <div className="mt-5 w-full rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-[600px] object-cover"
                  />
                </div>

                {/* DESCRIPTION */}
                <p className="text-4xl opacity-70 mt-5 px-4">
                  {item.desc}
                </p>
<br/>
                {/* BUTTON */}
                <button className="mt-5 px-6 py-3 border border-black rounded-full text-xl bg-gray-200">
                  Get Started →
                </button>

              </div>

              {/* ================= MOBILE ================= */}
              <div className="sm:hidden flex flex-col items-center justify-center text-center">

                <div className="flex justify-between w-full px-2 items-center">
                  <span className="text-3xl font-bold opacity-20">
                    {item.id}
                  </span>

                  <h2 className="text-lg font-black uppercase text-right">
                    {item.title}
                  </h2>
                </div>

                <div className="mt-4 w-full rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <p className="text-sm opacity-70 mt-4 px-2">
                  {item.desc}
                </p>

                <button className="mt-4 px-5 py-2 border border-black rounded-full text-sm bg-gray-200">
                  Get Started →
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="h-[20vh] bg-black" />
    </div>
  );
}