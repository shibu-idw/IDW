import { useEffect, useRef, useState } from "react";

import logo1 from "../../assets/About/p1.png";
import logo2 from "../../assets/About/p2.png";
import logo3 from "../../assets/About/p3.png";
import logo4 from "../../assets/About/p4.png";
import logo5 from "../../assets/About/p5.png";
import logo6 from "../../assets/About/p6.png";
import logo7 from "../../assets/About/p7.png";

const stats = [
  { label: "Employees", value: 50, suffix: "+" },
  { label: "Projects", value: 150, suffix: "+" },
  { label: "Experiences", value: 10, suffix: "+" },
];

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

function CountUp({ end, suffix = "", duration = 1500, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let frame;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function VisionMission() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStartCount(true),
      { threshold: 0.35 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#f3f3f3] overflow-hidden">
      <div
        className="
          max-w-[1440px] mx-auto
          px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20
          py-12 sm:py-16 md:py-20
        "
      >
        {/* HEADER + CONTENT GRID */}
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[260px_1fr]
            xl:grid-cols-[300px_1fr]
            gap-6 md:gap-8 lg:gap-16 xl:gap-20
            items-start
          "
        >
          {/* LEFT TITLE */}
          <h3
            className="
              font-[Poppins] font-semibold text-black
              leading-[1.05] tracking-[-0.02em]
              whitespace-nowrap self-start
            "
            style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
          >
            /OUR VISION & MISSION/
          </h3>

          {/* RIGHT CONTENT */}
          <div className="w-full flex flex-col justify-start">
            {/* VISION / MISSION */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p
                className="text-[#5f5f5f] leading-[1.28]"
                style={{ fontSize: "clamp(25px, 3.2vw, 45px)" }}
              >
                <span className="font-semibold text-black mr-2">01</span>
                To become a trusted digital growth
                <br />
                partner for businesses across
                <br />
                industries
              </p>

              <p
                className="text-[#5f5f5f] leading-[1.28]"
                style={{ fontSize: "clamp(26px, 3.2vw, 46px)" }}
              >
                <span className="font-semibold text-black mr-2">02</span>
                To make digital accessible,
                <br />
                effective, and growth-driven for every
                <br />
                business.
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 lg:mt-10 lg:max-w-[820px]">
              <p
                className="text-[#6c6c6c] leading-[1.4]"
                style={{ fontSize: "clamp(14px, 1.4vw, 19px)" }}
              >
                We provide end-to-end digital solutions including marketing,
                branding, development, and consulting to help businesses achieve
                measurable growth.
              </p>

              <div className="mt-4 h-px bg-[#9d9d9d]" />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 lg:mt-10 lg:max-w-[820px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <h4
                    className="font-semibold text-black leading-none"
                    style={{ fontSize: "clamp(13px, 1.4vw, 22px)" }}
                  >
                    {s.label}
                  </h4>

                  <div
                    className="mt-2 text-black font-light leading-none"
                    style={{ fontSize: "clamp(32px, 4.2vw, 58px)" }}
                  >
                    <CountUp
                      end={s.value}
                      suffix={s.suffix}
                      start={startCount}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOGO SCROLL */}
        <div className="mt-14 sm:mt-16 overflow-hidden group">
          <div
            className="
              flex w-max items-center gap-16 sm:gap-20
              animate-scroll group-hover:[animation-play-state:paused]
            "
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-10 sm:h-12 lg:h-14 grayscale object-contain"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}