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
            {/* MOBILE + TABLET TEXT */}
            <div className="space-y-5 lg:hidden">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="font-[Poppins] font-semibold text-black text-[30px] sm:text-[44px] md:text-[56px] leading-[1.25] shrink-0">
                  01
                </span>

                <p className="font-[Poppins] font-normal text-[#5f5f5f] text-[30px] sm:text-[44px] md:text-[56px] leading-[1.25] tracking-[-0.02em]">
                  To become a trusted digital growth partner for businesses
                  across industries
                </p>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <span className="font-[Poppins] font-semibold text-black text-[30px] sm:text-[44px] md:text-[56px] leading-[1.25] shrink-0">
                  02
                </span>

                <p className="font-[Poppins] font-normal text-[#5f5f5f] text-[30px] sm:text-[44px] md:text-[56px] leading-[1.25] tracking-[-0.02em]">
                  To make digital accessible, effective, and growth-driven for
                  every business.
                </p>
              </div>
            </div>

            {/* DESKTOP TEXT */}
            <div className="hidden lg:block space-y-3">
              <p className="font-[Poppins] font-normal text-[#5f5f5f] text-[42px] leading-[1.3] tracking-[0em]">
                <span className="font-semibold text-black inline-block mr-3">
                  01
                </span>
                To become a trusted digital growth
                <br />
                <span className="inline-block w-[76px]" />
                partner for businesses across
                <br />
                <span className="inline-block w-[76px]" />
                industries
              </p>

              <p className="font-[Poppins] font-normal text-[#5f5f5f] text-[42px] leading-[1.3] tracking-[0em]">
                <span className="font-semibold text-black inline-block mr-3">
                  02
                </span>
                To make digital accessible,
                <br />
                <span className="inline-block w-[76px]" />
                effective, and growth-driven for every
                <br />
                <span className="inline-block w-[76px]" />
                business.
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-12 max-w-full lg:max-w-[820px]">
              <p className="font-[Poppins] text-[#6c6c6c] text-[15px] sm:text-[18px] md:text-[22px] lg:text-[18px] leading-[1.35] lg:leading-[1.25]">
                We provide end-to-end digital solutions including marketing,
                branding, development, and consulting to help businesses achieve
                measurable growth.
              </p>

              <div className="mt-3 h-px bg-[#9d9d9d]" />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 lg:gap-12 mt-8 sm:mt-10 max-w-full lg:max-w-[820px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <h4 className="font-[Poppins] font-semibold text-black text-[14px] sm:text-[20px] md:text-[26px] lg:text-[24px] leading-none">
                    {s.label}
                  </h4>

                  <div className="mt-3 sm:mt-5 font-[Poppins] text-black text-[34px] sm:text-[52px] md:text-[68px] lg:text-[56px] leading-none">
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
        <div className="mt-14 sm:mt-18 md:mt-24 lg:mt-20 overflow-hidden group">
          <div className="flex w-max items-center gap-14 sm:gap-20 md:gap-28 lg:gap-24 animate-scroll group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-9 sm:h-12 md:h-16 lg:h-14 w-auto object-contain grayscale shrink-0"
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

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 16s;
          }
        }
      `}</style>
    </section>
  );
}