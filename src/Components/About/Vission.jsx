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

          {/* LEFT — title always single line */}
          <div className="shrink-0">
            <h3
              className="font-[Poppins] font-semibold text-black leading-none tracking-[-0.02em] whitespace-nowrap"
              style={{ fontSize: "clamp(14px,1.55vw,22px)" }}
            >
              /OUR VISION & MISSION/
            </h3>
          </div>

          {/* RIGHT — content */}
          <div
  className="flex-1 min-w-0"
  style={{ paddingLeft: "clamp(0px, 3vw, 48px)" }}
>

            {/* 01 & 02 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px,1.8vh,20px)" }}>

              <p
                className="text-[#5f5f5f] leading-[1.28] font-[Poppins]"
                style={{ fontSize: "clamp(20px,2.8vw,46px)" }}
              >
                <span className="font-semibold text-black" style={{ marginRight: "0.3em" }}>01</span>
                To become a trusted digital growth<br />
                partner for businesses across<br />
                industries
              </p>

              <p
                className="text-[#5f5f5f] leading-[1.28] font-[Poppins]"
                style={{ fontSize: "clamp(20px,2.8vw,46px)" }}
              >
                <span className="font-semibold text-black" style={{ marginRight: "0.3em" }}>02</span>
                To make digital accessible,<br />
                effective, and growth-driven for every<br />
                business.
              </p>

            </div>

            {/* DESCRIPTION */}
            <div style={{ marginTop: "clamp(24px,4vh,48px)" }}>
              <p
                className="text-[#6c6c6c] leading-[1.45] font-[Poppins]"
                style={{ fontSize: "clamp(13px,1.2vw,18px)", maxWidth: "820px" }}
              >
                We provide end-to-end digital solutions including marketing,
                branding, development, and consulting to help businesses
                achieve measurable growth.
              </p>
              <div className="h-px bg-[#9d9d9d]" style={{ marginTop: "clamp(12px,2vh,20px)" }} />
            </div>

            {/* STATS */}
            <div
              className="grid grid-cols-3"
              style={{
                gap: "clamp(12px,2vw,32px)",
                marginTop: "clamp(20px,3.5vh,40px)",
                maxWidth: "820px",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <h4
                    className="font-semibold text-black font-[Poppins] leading-none"
                    style={{ fontSize: "clamp(12px,1.2vw,20px)" }}
                  >
                    {s.label}
                  </h4>
                  <div
                    className="text-black font-light leading-none"
                    style={{
                      fontSize: "clamp(28px,3.8vw,56px)",
                      marginTop: "clamp(6px,1vh,12px)",
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
          style={{ marginTop: "clamp(40px,7vh,72px)" }}
        >
          <div className="flex w-max items-center animate-scroll group-hover:[animation-play-state:paused]"
            style={{ gap: "clamp(40px,5vw,80px)" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="grayscale object-contain"
                style={{ height: "clamp(32px,3.5vw,56px)" }}
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
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}