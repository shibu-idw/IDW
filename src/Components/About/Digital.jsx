import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personImg from "./../../assets/About/p8.png";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalIntro() {
  const sectionRef = useRef(null);
  const desktopCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({

        "(max-width: 767px)": () => {
          gsap.set(desktopCardRef.current, { y: "100vh" });
          gsap.to(desktopCardRef.current, {
            y: "-100vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=1800",
              scrub: 0.5,
              pin: true,
              pinSpacing: true,
            },
          });
        },

        // ─── TABLET ───────────────────────────────────────────
        "(min-width: 768px) and (max-width: 1023px)": () => {
          gsap.set(desktopCardRef.current, { y: "100vh" });
          gsap.to(desktopCardRef.current, {
            y: "-100vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=1800",
              scrub: 0.5,
              pin: true,
              pinSpacing: true,
            },
          });
        },

        // ─── DESKTOP ──────────────────────────────────────────
        "(min-width: 1024px)": () => {
          gsap.set(desktopCardRef.current, { y: "100vh" });

          gsap.to(desktopCardRef.current, {
            y: "-100vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=3000",
              scrub: 1.5,
              pin: true,
              pinSpacing: true,
            },
          });
        },

      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full bg-black text-white font-sans overflow-hidden"
        style={{ height: "100svh" }}
      >
        {/* WATERMARK */}
        <div className="pointer-events-none absolute inset-0 select-none z-0 overflow-hidden">
          <h2
            className="hidden lg:block absolute right-[5%] font-black text-white/[0.02] tracking-widest leading-none uppercase"
            style={{ top: "2vh", fontSize: "clamp(120px, 14vw, 200px)" }}
          >IDW</h2>
          <h2
            className="absolute left-[6%] font-black text-white/[0.02] tracking-[0.05em] leading-none uppercase"
            style={{ top: "10vh", fontSize: "clamp(35px, 6vw, 100px)" }}
          >Introducing</h2>
          <h2
            className="absolute left-[6%] font-black text-white/[0.025] tracking-[0.02em] leading-none uppercase"
            style={{ top: "38vh", fontSize: "clamp(80px, 18vw, 240px)" }}
          >Digital</h2>
          <h2
            className="absolute left-[6%] font-black text-white/[0.025] tracking-[0.03em] leading-none uppercase"
            style={{ top: "65vh", fontSize: "clamp(90px, 22vw, 280px)" }}
          >World</h2>
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 h-full w-full overflow-hidden">

          {/* MOBILE & TABLET text */}
          <div className="lg:hidden flex flex-col justify-between h-full p-[4vh_20px] md:p-[8vh_6vw]">
            <div className="max-w-[100%] md:max-w-[60%]">
              <h1 className="font-extralight text-[32px] md:text-[clamp(60px,8vw,90px)] leading-tight">
                Digital made<br />practical
              </h1>
              <p className="mt-4 text-gray-400 text-[13px] md:text-[15px] max-w-[300px]">
                Structure, clarity, and action built to help businesses adopt digital tools.
              </p>
            </div>
            <div className="flex flex-col items-end text-right">
              <ul className="text-gray-400 text-[11px] md:text-[13px] list-disc pl-5 space-y-1 text-left mb-4">
                <li>Small businesses. Clear direction.</li>
                <li>A practical path into digital adoption.</li>
                <li>Helping businesses move from offline to online.</li>
                <li>See how ideas become digital progress.</li>
              </ul>
              <h2 className="font-extralight text-[28px] md:text-[clamp(50px,7vw,80px)] leading-none">
                Business needs into digital solutions
              </h2>
            </div>
          </div>

          {/* DESKTOP text */}
          <div
            className="hidden lg:flex flex-col justify-between h-full mx-auto"
            style={{ padding: "5vh 6vw", maxWidth: "1600px" }}
          >
            <div className="w-fit self-start">
              <h1
                className="font-extralight leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(60px, 7vw, 100px)" }}
              >
                Digital made<br />practical
              </h1>
              <p className="mt-6 text-gray-400 max-w-[400px]" style={{ fontSize: "17px" }}>
                Structure, clarity, and action — built to help businesses adopt digital tools with confidence.
              </p>
            </div>
            <div className="w-fit self-end flex flex-col items-end">
              <ul
                className="text-gray-400 list-disc space-y-1 mb-5 max-w-[400px] text-left"
                style={{ fontSize: "16px" }}
              >
                <li>Small businesses. Clear direction.</li>
                <li>A practical path into digital adoption.</li>
                <li>Helping businesses move from offline to online.</li>
                <li>See how ideas become digital progress.</li>
              </ul>
              <h2
                className="font-extralight leading-[1] text-right"
                style={{ fontSize: "clamp(36px, 4vw, 66px)" }}
              >
                Business needs<br />into digital solutions
              </h2>
            </div>
          </div>
        </div>

        {/* MOVING CARD - All screens */}
        <div
          ref={desktopCardRef}
          className="flex flex-col text-black shadow-2xl"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(180px, 30vw, 260px)",
            zIndex: 9999,
            pointerEvents: "none",
            background: "#f1f1f1",
          }}
        >
          <img
            src={personImg}
            alt="Founder"
            className="w-full object-cover object-top"
            style={{ height: "clamp(220px, 35vw, 320px)", display: "block" }}
          />
          <div style={{ padding: "12px 14px", background: "#f1f1f1" }}>
            <p style={{ fontWeight: 500, fontSize: "13px", marginBottom: "8px" }}>Er.Venkat Chennakrishnan</p>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(0,0,0,0.12)",
              paddingTop: "8px",
              fontSize: "9px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}>
              <p style={{ margin: 0 }}>Founder & CEO</p>
              <p style={{ margin: 0, textAlign: "right" }}>Quality Group of<br />Companies</p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
