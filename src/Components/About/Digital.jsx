import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personImg from "./../../assets/About/p8.png";
// Background watermark image-ai inga import pannunga
import watermarkBg from "./../../assets/About/p16.png"; 

gsap.registerPlugin(ScrollTrigger);

export default function DigitalIntro() {
  const sectionRef     = useRef(null);
  const desktopCardRef = useRef(null);
  const tabletCardRef  = useRef(null);
  const mobileCardRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Mobile Animation
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
              },
            }
          );
        },
        // Tablet Animation
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
              },
            }
          );
        },
        // Desktop & Laptop Animation
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
      {/* ── BACKGROUND IMAGE WATERMARK ── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img 
          src={watermarkBg} 
          alt="background watermark" 
          className="w-full h-full object-contain object-center scale-110 lg:scale-100"
        />
      </div>

      {/* ══════════════════════════════ MOBILE < 768px ══════════════════════════════ */}
      <div className="relative z-10 md:hidden flex flex-col justify-between h-full" style={{ padding: "5vh 24px" }}>
        <div className="relative z-20">
          <h1 className="font-extralight leading-[1.1] tracking-tight text-[34px]">
            Digital moves,<br />practical
          </h1>
          <p className="mt-4 text-gray-400 text-[14px] max-w-[260px] font-light">
            Structure, clarity, and action — built to help businesses adopt digital tools with confidence.
          </p>
        </div>

        <div className="relative flex justify-center flex-1">
          <div ref={mobileCardRef} className="absolute bg-[#f1f1f1] text-black shadow-2xl z-30" style={{ bottom: "-10vh", width: "190px" }}>
            <img src={personImg} alt="Founder" className="w-full h-[220px] object-cover object-top" />
            <div className="p-3">
              <h3 className="font-medium text-[13px] leading-tight">Er.Venkat<br />Chennakrishnan</h3>
              <div className="flex justify-between mt-3 text-[9px] font-bold uppercase opacity-60">
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="font-extralight leading-none text-right text-[28px] tracking-tighter">
            Business needs into<br/>digital solutions
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════ TABLET 768px – 1023px ══════════════════════════════ */}
      <div className="relative z-10 hidden md:flex lg:hidden flex-col justify-between h-full" style={{ padding: "8vh 40px" }}>
        <div className="relative z-20">
          <h1 className="font-extralight leading-none tracking-tighter text-[64px]">
            Digital moves,<br />practical
          </h1>
        </div>

        <div className="relative flex justify-center flex-1">
          <div ref={tabletCardRef} className="absolute bg-[#f1f1f1] text-black shadow-2xl z-30" style={{ bottom: "-15vh", width: "260px" }}>
            <img src={personImg} alt="Founder" className="w-full h-[300px] object-cover object-top" />
            <div className="p-4 text-center">
              <h3 className="font-medium text-[16px]">Er.Venkat Chennakrishnan</h3>
              <p className="text-[10px] font-bold uppercase mt-2 opacity-50">Founder & CEO - Quality Group</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="font-extralight leading-none text-right text-[54px] tracking-tighter">
            Business needs into digital solutions
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════ DESKTOP 1024px+ ══════════════════════════════ */}
      <div className="hidden lg:flex relative z-10 mx-auto max-w-[1440px] flex-col justify-between h-full" style={{ padding: "10vh 80px" }}>
        <div className="relative z-20">
          <h1 className="font-extralight leading-[0.95] tracking-tight text-[clamp(70px,8vw,110px)]">
            Digital moves,<br />practical
          </h1>
          <p className="mt-8 text-gray-400 text-[18px] max-w-[360px] font-light">
            Structure, clarity, and action — built to help businesses adopt digital tools with confidence.
          </p>

          <div ref={desktopCardRef} className="absolute bg-[#f1f1f1] text-black shadow-2xl z-30" style={{ left: "48%", top: "5vh", width: "clamp(240px, 18vw, 300px)" }}>
            <img src={personImg} alt="Founder" className="w-full h-[clamp(300px, 25vw, 380px)] object-cover object-top" />
            <div className="p-5">
              <h3 className="font-medium text-[17px] leading-tight text-center">Er.Venkat Chennakrishnan</h3>
              <div className="flex justify-between mt-6 text-[10px] font-bold uppercase opacity-50 tracking-widest border-t border-black/10 pt-4">
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-end">
          <ul className="text-gray-400 text-[15px] list-disc pl-6 space-y-2 max-w-[420px] font-light mb-8">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2 className="font-extralight leading-none text-right text-[clamp(60px,7vw,100px)] tracking-tighter">
            Business needs<br />into digital solutions
          </h2>
        </div>
      </div>
    </section>
  );
}