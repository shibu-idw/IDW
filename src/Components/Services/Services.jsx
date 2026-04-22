import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    bg: "bg-black text-white",
    img: "https://via.placeholder.com/400x300",
  },
  {
    id: "02",
    title: "Design & Development",
    bg: "bg-gray-100 text-black",
    img: "https://via.placeholder.com/400x300",
  },
  {
    id: "03",
    title: "Branding & Strategy",
    bg: "bg-black text-white",
    img: "https://via.placeholder.com/400x300",
  },
  {
    id: "04",
    title: "Analytics & Reporting",
    bg: "bg-black text-white",
    img: "https://via.placeholder.com/400x300",
  },
  {
    id: "05",
    title: "Digital Consulting",
    bg: "bg-gray-100 text-black",
    img: "https://via.placeholder.com/400x300",
  },
];

const Services = () => {
  const containerRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    // Stack cards
    gsap.set(cards, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    });

    // z-index order
    gsap.set(cards, {
      zIndex: (i, target, arr) => arr.length - i,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: 1,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      // next card comes up
      tl.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        i
      );

      // previous card goes up
      tl.to(
        cards[i - 1],
        {
          y: -100,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
        },
        i
      );
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gray-200 h-screen overflow-hidden"
    >
      {services.map((item) => (
        <div
          key={item.id}
          className="card h-screen flex justify-center items-center"
        >
          <div
            className={`relative w-[90%] md:w-[80%] lg:w-[70%] rounded-2xl shadow-2xl p-6 md:p-10 ${item.bg}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* TITLE */}
              <div className="md:col-span-12 mb-4">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {item.title}
                </h1>
              </div>

              {/* LEFT */}
              <div className="md:col-span-3 text-sm opacity-80">
                <h2 className="font-semibold mb-2">Approach</h2>
                <p>Strategic planning with execution focus.</p>
              </div>

              {/* MIDDLE */}
              <div className="md:col-span-3 text-sm space-y-3">
                <div>
                  <h3 className="font-semibold">Content Marketing</h3>
                  <p className="opacity-70">Engaging content creation.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <p className="opacity-70">Audience growth.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Performance</h3>
                  <p className="opacity-70">Conversion campaigns.</p>
                </div>

                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                  Get started →
                </button>
              </div>

              {/* RIGHT */}
              <div className="md:col-span-3 text-sm space-y-3">
                <div>
                  <h3 className="font-semibold">SEO</h3>
                  <p className="opacity-70">Ranking improvement.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Campaign</h3>
                  <p className="opacity-70">Strategy execution.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Analytics</h3>
                  <p className="opacity-70">Data insights.</p>
                </div>
              </div>

              {/* IMAGE */}
              <div className="md:col-span-3 flex justify-center md:justify-end">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full max-w-xs md:max-w-sm rounded-lg"
                />
              </div>
            </div>

            {/* NUMBER */}
            <div className="absolute top-6 right-10 text-4xl md:text-5xl font-bold opacity-20">
              {item.id}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;