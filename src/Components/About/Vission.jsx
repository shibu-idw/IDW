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
      if (progress < 1) frame = requestAnimationFrame(animate);
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
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20 py-14 sm:py-16 md:py-20 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 md:gap-10 lg:gap-12">
          
          {/* LEFT TITLE */}
          <h3 className="font-[Poppins] font-semibold text-black text-[24px] sm:text-[32px] md:text-[38px] lg:text-[28px] leading-[1.05] tracking-[-0.02em]">
            /OUR VISION & MISSION/
          </h3>

          {/* RIGHT CONTENT */}
          <div className="w-full">

            {/* MOBILE + TABLET */}
            <div className="space-y-5 lg:hidden">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="font-semibold text-black text-[30px] sm:text-[44px] md:text-[56px]">
                  01
                </span>

                <p className="text-[#5f5f5f] text-[30px] sm:text-[44px] md:text-[56px] leading-[1.25]">
                  To become a trusted digital growth partner for businesses across industries
                </p>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="font-semibold text-black text-[30px] sm:text-[44px] md:text-[56px]">
                  02
                </span>

                <p className="text-[#5f5f5f] text-[30px] sm:text-[44px] md:text-[56px] leading-[1.25]">
                  To make digital accessible, effective, and growth-driven for every business.
                </p>
              </div>
            </div>

            {/* ✅ DESKTOP (FIXED ALIGNMENT) */}
            <div className="hidden lg:block space-y-4">

              <p className="text-[#5f5f5f] text-[42px] leading-[1.28]">
                <span className="font-semibold text-black mr-2">01</span>
                To become a trusted digital growth
                <br />
                partner for businesses across
                <br />
                industries
              </p>

              <p className="text-[#5f5f5f] text-[42px] leading-[1.28]">
                <span className="font-semibold text-black mr-2">02</span>
                To make digital accessible,
                <br />
                effective, and growth-driven for every
                <br />
                business.
              </p>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-10 lg:max-w-[820px]">
              <p className="text-[#6c6c6c] text-[15px] sm:text-[18px] md:text-[22px] lg:text-[18px] leading-[1.35]">
                We provide end-to-end digital solutions including marketing,
                branding, development, and consulting to help businesses achieve
                measurable growth.
              </p>

              <div className="mt-3 h-px bg-[#9d9d9d]" />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-10 lg:max-w-[820px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <h4 className="font-semibold text-black text-[18px] lg:text-[24px]">
                    {s.label}
                  </h4>

                  <div className="mt-3 text-black text-[40px] lg:text-[56px]">
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
        <div className="mt-16 overflow-hidden group">
          <div className="flex w-max items-center gap-20 animate-scroll group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-12 lg:h-14 grayscale"
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