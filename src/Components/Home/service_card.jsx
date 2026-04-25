import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "UI/UX & Web Design",
    subtitle: "01",
    desc: "We design UI UX and web interfaces by structuring digital products around clarity, usability, and strong visual systems.",
    img: "https://picsum.photos/id/1011/800/600",
  },
  {
    title: "Webflow Development",
    subtitle: "02",
    desc: "We build Webflow websites for companies that need a reliable and maintainable digital presence.",
    img: "https://picsum.photos/id/1012/800/600",
  },
  {
    title: "Brand Strategy",
    subtitle: "03",
    desc: "We define the visual and emotional essence of your brand to create a lasting impact.",
    img: "https://picsum.photos/id/1013/800/600",
  },
];

export default function StickyCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.set(containerRef.current, {
        perspective: 2200,
        transformStyle: "preserve-3d",
      });

      // INITIAL SETUP
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

        // NORMAL CARDS (1 & 2)
        if (i !== cards.length - 1) {
          // Start exit
          tl.to(card, {
            scale: 0.8,
            x: 40,
            y: -20,
            rotate: 1,
            duration: 0.4,
            ease: "none",
          });

          // Continue exit + fade
          tl.to(card, {
            scale: 0.5,
            x: 80,
            y: -70,
            rotate: 4,
            opacity: 0,
            duration: 0.4,
            ease: "none",
          });

          // 👇 NEXT CARD COMES BEFORE CURRENT DISAPPEARS
          if (next) {
            tl.to(
              next,
              {
                yPercent: 0,
                duration: 0.8,
                ease: "power2.out",
              },
              "-=0.3" // 👈 overlap timing
            );
          }
        }

        // LAST CARD → ZOOM + FLIP EXIT
        if (i === cards.length - 1) {
          tl.to(card, {
            scale: 0.5,
            x: 80,
            y: -70,
            rotate: 4,
            rotateX: 60,
            transformOrigin: "center center",
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
      {/* Intro */}
      <div className="h-[20vh] flex items-center justify-center text-white/30 italic text-sm md:text-base">
        Scroll down for the experience
      </div>

      {/* STICKY SECTION */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        {data.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`absolute inset-0 flex items-center justify-center ${
              i % 2 === 0 ? "bg-[#f3f3f3] text-black" : "bg-[#111] text-white"
            }`}
          >
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 sm:px-6 md:px-10">
              
              {/* LEFT */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9]">
                    {item.title}
                  </h2>

                  <p className="mt-6 md:mt-10 text-sm sm:text-base md:text-lg opacity-70 max-w-sm">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-end justify-between mt-8 md:mt-10 gap-4">
                  <button className="px-5 sm:px-6 md:px-8 py-2 md:py-3 border-2 border-current rounded-full uppercase text-[10px] sm:text-xs font-black tracking-widest hover:bg-current hover:text-white transition">
                    Discuss implementation
                  </button>

                  <span className="text-5xl sm:text-7xl md:text-9xl font-thin opacity-10">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center justify-center">
                <div className="w-full h-[250px] sm:h-[350px] md:h-full max-h-[75vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt="preview"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="h-[100vh] bg-black" />
    </div>
  );
}