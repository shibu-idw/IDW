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

  return <span>{count}{suffix}</span>;
}

export default function VisionMission() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStartCount(true),
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#f3f3f3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20">

        {/* GRID */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-12">

          {/* LEFT */}
          <h3 className="font-[Poppins] font-semibold text-black text-[28px] leading-none">
            /OUR VISION & MISSION/
          </h3>

          {/* RIGHT */}
          <div>

            {/* 01 / 02 TEXT */}
            <div className="space-y-3">

              {/* 01 */}
              <p className="font-[Poppins] font-normal text-[#5f5f5f] text-[42px] leading-[1.3]">
                <span className="font-semibold text-black inline-block mr-3">01</span>
                To become a trusted digital growth
                <br />
                <span className="inline-block w-[76px]"></span>
                partner for businesses across
                <br />
                <span className="inline-block w-[76px]"></span>
                industries
              </p>

              {/* 02 */}
              <p className="font-[Poppins] font-normal text-[#5f5f5f] text-[42px] leading-[1.3]">
                <span className="font-semibold text-black inline-block mr-3">02</span>
                To make digital accessible,
                <br />
                <span className="inline-block w-[76px]"></span>
                effective, and growth-driven for every
                <br />
                <span className="inline-block w-[76px]"></span>
                business.
              </p>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-12 max-w-[820px]">
              <p className="font-[Poppins] text-[#6c6c6c] text-[18px] leading-[1.25]">
                We provide end-to-end digital solutions including marketing,
                branding, development, and consulting to help businesses
                achieve measurable growth.
              </p>

              <div className="mt-3 h-px bg-[#9d9d9d]" />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-12 mt-10 max-w-[820px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <h4 className="font-[Poppins] text-[24px] text-black">
                    {s.label}
                  </h4>
                  <div className="mt-4 text-[56px] font-[Poppins]">
                    <CountUp end={s.value} suffix={s.suffix} start={startCount} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* LOGO SCROLL */}
        <div className="mt-20 overflow-hidden group">
          <div className="flex w-max gap-24 animate-scroll group-hover:[animation-play-state:paused]">

            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="h-14 grayscale"
                alt=""
              />
            ))}

          </div>
        </div>

      </div>

      {/* SCROLL ANIMATION */}
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