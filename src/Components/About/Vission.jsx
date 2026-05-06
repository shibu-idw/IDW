import { useEffect, useRef, useState } from "react";

import logo1 from "../../assets/About/p1.png";
import logo2 from "../../assets/About/p2.png";
import logo3 from "../../assets/About/p3.png";
import logo4 from "../../assets/About/p4.png";
import logo5 from "../../assets/About/p5.png";
import logo6 from "../../assets/About/p6.png";
import logo7 from "../../assets/About/p7.png";

const stats = [
  { label: "Employees",   value: 50,  suffix: "+" },
  { label: "Projects",    value: 150, suffix: "+" },
  { label: "Experiences", value: 10,  suffix: "+" },
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

  return <span>{count}{suffix}</span>;
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
    <section ref={ref} className="w-full bg-[#f5f5f5] overflow-hidden">
      <div
        className="max-w-[1440px] mx-auto"
        style={{
          padding: "clamp(40px,6vh,88px) clamp(20px,5vw,80px)",
        }}
      >

        {/* ── HEADER + CONTENT ── */}
        <div className="flex flex-col lg:flex-row lg:items-start"
          style={{ gap: "clamp(20px,3vw,64px)" }}
        >

          {/* LEFT — title */}
          <div className="shrink-0 mb-6 lg:mb-0">
            <h3
              className="font-[Poppins] font-semibold text-black leading-none tracking-[-0.02em] whitespace-nowrap"
              style={{ fontSize: "clamp(16px,1.60vw,24px)" }}
            >
              /OUR VISION & MISSION/
            </h3>
          </div>

          {/* RIGHT — content */}
          <div className="flex-1 min-w-0 lg:pl-[clamp(0px,3vw,48px)]">

            {/* 01 & 02 Section - FIXED ALIGNMENT FOR MOBILE */}
            <div className="flex flex-col gap-[clamp(24px,3vh,40px)]">

              {/* Point 01 */}
              <div className="flex items-start gap-4">
                <span className="font-semibold text-black font-[Poppins] leading-[1.2]" 
                      style={{ fontSize: "clamp(20px,2.8vw,46px)" }}>01</span>
                <p className="text-[#5f5f5f] leading-[1.2] font-[Poppins]"
                   style={{ fontSize: "clamp(20px,2.8vw,46px)" }}>
                  To become a trusted digital growth partner for businesses across industries.
                </p>
              </div>

              {/* Point 02 */}
              <div className="flex items-start gap-4">
                <span className="font-semibold text-black font-[Poppins] leading-[1.2]" 
                      style={{ fontSize: "clamp(20px,2.8vw,46px)" }}>02</span>
                <p className="text-[#5f5f5f] leading-[1.2] font-[Poppins]"
                   style={{ fontSize: "clamp(20px,2.8vw,46px)" }}>
                  To make digital accessible, effective, and growth-driven for every business.
                </p>
              </div>

            </div>

            {/* DESCRIPTION */}
            <div style={{ marginTop: "clamp(32px,5vh,64px)" }}>
              <p
                className="text-[#6c6c6c] leading-[1.45] font-[Poppins]"
                style={{ fontSize: "clamp(14px,1.2vw,18px)", maxWidth: "820px" }}
              >
                We provide end-to-end digital solutions including marketing,
                branding, development, and consulting to help businesses
                achieve measurable growth.
              </p>
              <div className="h-px bg-[#d1d1d1]" style={{ marginTop: "clamp(16px,2vh,24px)" }} />
            </div>

            {/* STATS */}
            <div
              className="grid grid-cols-3"
              style={{
                gap: "clamp(12px,2vw,32px)",
                marginTop: "clamp(24px,4vh,48px)",
                maxWidth: "820px",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <h4
                    className="font-semibold text-black font-[Poppins] leading-none"
                    style={{ fontSize: "clamp(11px,1.2vw,20px)" }}
                  >
                    {s.label}
                  </h4>
                  <div
                    className="text-black font-light leading-none"
                    style={{
                      fontSize: "clamp(24px,3.8vw,56px)",
                      marginTop: "clamp(8px,1vh,16px)",
                    }}
                  >
                    <CountUp end={s.value} suffix={s.suffix} start={startCount} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── LOGO SCROLL ── */}
        <div
          className="overflow-hidden group"
          style={{ marginTop: "clamp(48px,8vh,88px)" }}
        >
          <div className="flex w-max items-center animate-scroll group-hover:[animation-play-state:paused]"
            style={{ gap: "clamp(40px,5vw,80px)" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="grayscale object-contain opacity-60 hover:opacity-100 transition-opacity"
                style={{ height: "clamp(28px,3.5vw,56px)" }}
                alt=""
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}