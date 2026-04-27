import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personImg from "./../../assets/About/p8.png";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalIntro() {
  const sectionRef = useRef(null);
  const desktopCardRef = useRef(null);
  const tabletCardRef = useRef(null);
  const mobileCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(max-width: 767px)": () => {
          gsap.fromTo(
            mobileCardRef.current,
            { y: "110vh" },
            {
              y: "-110vh",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1800",
                scrub: 1.8,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
              },
            }
          );
        },

        "(min-width: 768px) and (max-width: 1023px)": () => {
          gsap.fromTo(
            tabletCardRef.current,
            { y: "110vh" },
            {
              y: "-110vh",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1800",
                scrub: 1.8,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
              },
            }
          );
        },

        "(min-width: 1024px)": () => {
          gsap.fromTo(
            desktopCardRef.current,
            { y: "110vh" },
            {
              y: "-110vh",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1800",
                scrub: 1.8,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
              },
            }
          );
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full bg-black text-white font-sans
        px-6 py-12 md:py-16 lg:py-20
      "
      style={{ height: "100svh" }}
    >

      {/* BACKGROUND TEXT */}
      <div className="pointer-events-none absolute inset-0 select-none z-0 overflow-hidden">

        <h2 className="hidden lg:block absolute right-0 font-black text-white/[0.035] tracking-[-0.09em] leading-none whitespace-nowrap"
          style={{ top: "-1vh", fontSize: "clamp(120px,16vw,220px)" }}>
          IDW
        </h2>

        <h2 className="absolute left-[-6px] font-black text-white/[0.05] tracking-[-0.07em] leading-none whitespace-nowrap"
          style={{ top: "3vh", fontSize: "clamp(38px,7vw,118px)" }}>
          Introducing
        </h2>

        <h2 className="absolute left-[-12px] font-black text-white/[0.055] tracking-[-0.08em] leading-none whitespace-nowrap"
          style={{ top: "35vh", fontSize: "clamp(88px,20vw,290px)" }}>
          Digital
        </h2>

        <h2 className="absolute left-[-12px] font-black text-white/[0.055] tracking-[-0.085em] leading-none whitespace-nowrap"
          style={{ top: "65vh", fontSize: "clamp(100px,25vw,340px)" }}>
          World
        </h2>

      </div>

      {/* MOBILE */}
      <div
        className="relative z-10 md:hidden flex flex-col justify-between"
        style={{ height: "100svh", padding: "0" }}
      >
        <div>
          <h1 className="font-extralight leading-[0.92] tracking-[-0.06em]"
            style={{ fontSize: "clamp(32px,9.5vw,48px)" }}>
            Digital moves,<br />practical
          </h1>

          <p className="mt-3 text-gray-400 leading-[1.45]"
            style={{ fontSize: "clamp(12px,3.2vw,14px)", maxWidth: "280px" }}>
            Structure, clarity, and action — built to help
            businesses adopt digital tools with confidence.
          </p>
        </div>

        <div className="relative flex justify-center pointer-events-none" style={{ flex: 1 }}>
          <div
            ref={mobileCardRef}
            className="absolute bg-[#f1f1f1] text-black shadow-2xl will-change-transform pointer-events-auto"
            style={{ zIndex: 30, bottom: "-8vh", width: "clamp(165px,46vw,215px)" }}
          >
            <img src={personImg} className="w-full object-cover object-top"
              style={{ height: "clamp(180px,44vw,240px)" }} />
          </div>
        </div>

        <div>
          <ul className="list-disc pl-5 text-gray-400">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li>Helping businesses move from offline to online.</li>
            <li>See how ideas become digital progress.</li>
          </ul>

          <h2 className="text-right mt-4 text-[32px] font-extralight">
            Business needs<br />into digital solutions
          </h2>
        </div>
      </div>

      {/* TABLET */}
      <div
        className="relative z-10 hidden md:flex lg:hidden flex-col justify-between"
        style={{ height: "100svh", padding: "0" }}
      >
        <div>
          <h1 className="text-[72px] font-extralight">
            Digital moves,<br />practical
          </h1>
        </div>

        <div className="relative flex justify-center pointer-events-none flex-1">
          <div ref={tabletCardRef} className="absolute bottom-[-10vh] w-[260px] bg-white shadow-xl" />
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="hidden lg:flex relative z-10 mx-auto max-w-[1440px] flex-col justify-between"
        style={{ height: "100svh", padding: "0" }}
      >
        <div>
          <h1 className="text-[110px] font-extralight">
            Digital moves,<br />practical
          </h1>
        </div>

        <div ref={desktopCardRef} className="absolute left-[40%] top-[80px] w-[260px] bg-white shadow-xl" />
      </div>

    </section>
  );
}