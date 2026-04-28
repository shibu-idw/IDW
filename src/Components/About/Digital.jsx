import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personImg from "./../../assets/About/p8.png";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalIntro() {
  const sectionRef     = useRef(null);
  const desktopCardRef = useRef(null);
  const tabletCardRef  = useRef(null);
  const mobileCardRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(max-width: 767px)": () => {
          gsap.fromTo(mobileCardRef.current,
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
          gsap.fromTo(tabletCardRef.current,
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
          gsap.fromTo(desktopCardRef.current,
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
      className="relative w-full bg-black text-white font-sans overflow-hidden"
      style={{ height: "100svh" }}
    >

      {/* ── BACKGROUND WATERMARK TEXT (CLEANED) ── */}
      <div className="pointer-events-none absolute inset-0 select-none z-0 overflow-hidden">
        
        {/* IDW - Only for Desktop */}
        <h2
          className="hidden lg:block absolute right-[-2%] font-black text-white/[0.03] tracking-wider leading-none uppercase"
          style={{ top: "0vh", fontSize: "clamp(150px, 18vw, 250px)" }}
        >
          IDW
        </h2>

        {/* Introducing - Clean Spacing */}
        <h2
          className="absolute left-4 font-black text-white/[0.04] tracking-[0.05em] leading-none uppercase"
          style={{ top: "8vh", fontSize: "clamp(40px, 8vw, 120px)" }}
        >
          Introducing
        </h2>

        {/* Digital - Clean Spacing */}
        <h2
          className="absolute left-4 font-black text-white/[0.045] tracking-[0.02em] leading-none uppercase"
          style={{ top: "35vh", fontSize: "clamp(90px, 22vw, 300px)" }}
        >
          Digital
        </h2>

        {/* World - Clean Spacing */}
        <h2
          className="absolute left-4 font-black text-white/[0.045] tracking-[0.03em] leading-none uppercase"
          style={{ top: "62vh", fontSize: "clamp(100px, 26vw, 350px)" }}
        >
          World
        </h2>
      </div>

      {/* ══════════════════════════════ MOBILE < 768px ══════════════════════════════ */}
      <div className="relative z-10 md:hidden flex flex-col justify-between h-full" style={{ padding: "4vh 20px" }}>
        <div className="relative z-20">
          <h1 className="font-extralight leading-[1] tracking-tight text-[36px]">
            Digital moves,<br />practical
          </h1>
          <p className="mt-4 text-gray-400 text-[14px] max-w-[260px]">
            Structure, clarity, and action — built to help businesses adopt digital tools with confidence.
          </p>
        </div>

        <div className="relative flex justify-center flex-1">
          <div ref={mobileCardRef} className="absolute bg-[#f1f1f1] text-black shadow-2xl z-30" style={{ bottom: "-10vh", width: "200px" }}>
            <img src={personImg} alt="Founder" className="w-full h-[220px] object-cover object-top" />
            <div className="p-3">
              <h3 className="font-medium text-[14px] leading-tight">Er.Venkat<br />Chennakrishnan</h3>
              <div className="flex justify-between mt-3 text-[9px] font-bold uppercase">
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <ul className="list-disc pl-5 text-gray-400 text-[12px] space-y-1">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
          </ul>
          <h2 className="font-extralight leading-none text-right mt-4 text-[32px]">
            Business needs into digital solutions
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════ TABLET 768px – 1023px ══════════════════════════════ */}
      <div className="relative z-10 hidden md:flex lg:hidden flex-col justify-between h-full" style={{ padding: "6vh 40px" }}>
        <div className="relative z-20">
          <h1 className="font-extralight leading-none tracking-tight text-[70px]">
            Digital moves,<br />practical
          </h1>
          <p className="mt-5 text-gray-400 text-[18px] max-w-[380px]">
            Structure, clarity, and action — built to help businesses adopt digital tools with confidence.
          </p>
        </div>

        <div className="relative flex justify-center flex-1">
          <div ref={tabletCardRef} className="absolute bg-[#f1f1f1] text-black shadow-2xl z-30" style={{ bottom: "-15vh", width: "260px" }}>
            <img src={personImg} alt="Founder" className="w-full h-[280px] object-cover object-top" />
            <div className="p-4">
              <h3 className="font-medium text-[16px]">Er.Venkat Chennakrishnan</h3>
              <div className="flex justify-between mt-4 text-[10px] font-bold uppercase">
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="font-extralight leading-none text-right text-[60px]">
            Business needs into digital solutions
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════ DESKTOP 1024px+ ══════════════════════════════ */}
      <div className="hidden lg:flex relative z-10 mx-auto max-w-[1440px] flex-col justify-between h-full" style={{ padding: "8vh 80px" }}>
        <div className="relative z-20">
          <h1 className="font-extralight leading-[0.9] tracking-tight text-[110px]">
            Digital moves,<br />practical
          </h1>
          <p className="mt-6 text-gray-400 text-[18px] max-w-[350px]">
            Structure, clarity, and action — built to help businesses adopt digital tools with confidence.
          </p>

          <div ref={desktopCardRef} className="absolute bg-[#f1f1f1] text-black shadow-2xl z-30" style={{ left: "45%", top: "5vh", width: "280px" }}>
            <img src={personImg} alt="Founder" className="w-full h-[360px] object-cover object-top" />
            <div className="p-5">
              <h3 className="font-medium text-[18px]">Er.Venkat Chennakrishnan</h3>
              <div className="flex justify-between mt-6 text-[11px] font-bold uppercase">
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group of<br />Companies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-end">
          <ul className="text-gray-400 text-[16px] list-disc pl-6 space-y-1 max-w-[400px]">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2 className="font-extralight leading-none text-right mt-8 text-[90px]">
            Business needs<br />into digital solutions
          </h2>
        </div>
      </div>

    </section>
  );
}