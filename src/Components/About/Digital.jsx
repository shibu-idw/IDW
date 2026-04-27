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
      className="relative w-full bg-black text-white font-sans"
      style={{ height: "100svh" }}
    >

      {/* ── BACKGROUND TEXT ── */}
      <div className="pointer-events-none absolute inset-0 select-none z-0 overflow-hidden">

        <h2
          className="hidden lg:block absolute right-0 font-black text-white/[0.035] tracking-[-0.09em] leading-none whitespace-nowrap"
          style={{ top: "-1vh", fontSize: "clamp(120px,16vw,220px)" }}
        >
          IDW
        </h2>

        {/* Introducing */}
        <h2
          className="absolute left-[-6px] font-black text-white/[0.05] tracking-[-0.07em] leading-none whitespace-nowrap"
          style={{ top: "3vh", fontSize: "clamp(38px,7vw,118px)" }}
        >
          Introducing
        </h2>

        {/* Digital */}
        <h2
          className="absolute left-[-12px] font-black text-white/[0.055] tracking-[-0.08em] leading-none whitespace-nowrap"
          style={{ top: "35vh", fontSize: "clamp(88px,20vw,290px)" }}
        >
          Digital
        </h2>

        {/* World */}
        <h2
          className="absolute left-[-12px] font-black text-white/[0.055] tracking-[-0.085em] leading-none whitespace-nowrap"
          style={{ top: "65vh", fontSize: "clamp(100px,25vw,340px)" }}
        >
          World
        </h2>

      </div>


      {/* ══════════════════════════════
          MOBILE < 768px
      ══════════════════════════════ */}
      <div
        className="relative z-10 md:hidden flex flex-col justify-between"
        style={{ height: "100svh", padding: "4vh 18px 4vh" }}
      >
        {/* TOP — always visible z-20 */}
        <div className="relative z-20">
          <h1
            className="font-extralight leading-[0.92] tracking-[-0.06em]"
            style={{ fontSize: "clamp(32px,9.5vw,48px)" }}
          >
            Digital moves,<br />practical
          </h1>
          <p
            className="mt-3 text-gray-400 leading-[1.45]"
            style={{ fontSize: "clamp(12px,3.2vw,14px)", maxWidth: "280px" }}
          >
            Structure, clarity, and action — built to help
            businesses adopt digital tools with confidence.
          </p>
        </div>

        {/* MIDDLE — card travels here */}
        <div
          className="relative flex justify-center pointer-events-none"
          style={{ flex: 1 }}
        >
          <div
            ref={mobileCardRef}
            className="absolute bg-[#f1f1f1] text-black shadow-2xl will-change-transform pointer-events-auto"
            style={{
              zIndex: 30,
              bottom: "-8vh",
              width: "clamp(165px,46vw,215px)",
            }}
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full object-cover object-top"
              style={{ height: "clamp(180px,44vw,240px)" }}
            />
            <div style={{ padding: "10px 12px 12px" }}>
              <h3
                className="font-medium leading-[1.2]"
                style={{ fontSize: "clamp(12px,3.4vw,14px)" }}
              >
                Er.Venkat<br />Chennakrishnan
              </h3>
              <div
                className="flex justify-between font-semibold"
                style={{ marginTop: "10px", fontSize: "clamp(8px,2.1vw,10px)" }}
              >
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group of<br />Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM — z-10 card வரும்போது hide ஆகும் */}
        <div className="relative z-10">
          <ul
            className="list-disc pl-5 text-gray-400 leading-[1.55] space-y-[3px]"
            style={{ fontSize: "clamp(11px,2.9vw,13px)" }}
          >
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li>Helping businesses move from offline to online.</li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2
            className="font-extralight leading-[0.9] tracking-[-0.07em] text-right"
            style={{ marginTop: "14px", fontSize: "clamp(28px,8.5vw,42px)" }}
          >
            Business needs<br />into digital solutions
          </h2>
        </div>
      </div>


      {/* ══════════════════════════════
          TABLET 768px – 1023px
      ══════════════════════════════ */}
      <div
        className="relative z-10 hidden md:flex lg:hidden flex-col justify-between"
        style={{ height: "100svh", padding: "5vh 36px 5vh" }}
      >
        {/* TOP — z-20 */}
        <div className="relative z-20">
          <h1
            className="font-extralight leading-[0.9] tracking-[-0.07em]"
            style={{ fontSize: "clamp(52px,8.5vw,88px)" }}
          >
            Digital moves,<br />practical
          </h1>
          <p
            className="mt-5 text-gray-400 leading-[1.4]"
            style={{ fontSize: "clamp(14px,1.9vw,18px)", maxWidth: "400px" }}
          >
            Structure, clarity, and action — built to help businesses
            adopt digital tools with confidence.
          </p>
        </div>

        {/* MIDDLE — card */}
        <div
          className="relative flex justify-center pointer-events-none"
          style={{ flex: 1 }}
        >
          <div
            ref={tabletCardRef}
            className="absolute bg-[#f1f1f1] text-black shadow-2xl will-change-transform pointer-events-auto"
            style={{
              zIndex: 30,
              bottom: "-12vh",
              width: "clamp(220px,30vw,280px)",
            }}
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full object-cover object-top"
              style={{ height: "clamp(230px,32vw,300px)" }}
            />
            <div style={{ padding: "14px 16px 16px" }}>
              <h3
                className="font-medium leading-[1.2]"
                style={{ fontSize: "clamp(14px,1.8vw,17px)" }}
              >
                Er.Venkat<br />Chennakrishnan
              </h3>
              <div
                className="flex justify-between font-semibold"
                style={{ marginTop: "14px", fontSize: "clamp(9px,1.2vw,12px)" }}
              >
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group of<br />Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM — z-10 card வரும்போது hide ஆகும் */}
        <div className="relative z-10">
          <ul
            className="ml-auto list-disc pl-6 text-gray-400 leading-[1.5] space-y-1"
            style={{ fontSize: "clamp(13px,1.7vw,17px)", maxWidth: "480px" }}
          >
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li>Helping businesses move from offline to online.</li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2
            className="font-extralight leading-[0.9] tracking-[-0.08em] text-right"
            style={{ marginTop: "20px", fontSize: "clamp(44px,7.5vw,80px)" }}
          >
            Business needs<br />into digital solutions
          </h2>
        </div>
      </div>


      {/* ══════════════════════════════
          DESKTOP 1024px+
      ══════════════════════════════ */}
      <div
        className="hidden lg:flex relative z-10 mx-auto max-w-[1440px] flex-col justify-between"
        style={{
          height: "100svh",
          padding: "clamp(40px,6vh,110px) clamp(24px,5vw,80px) clamp(24px,4vh,64px)",
        }}
      >
        {/* TOP — z-20 */}
        <div className="relative z-20">
          <h1
            className="font-extralight leading-[0.9] tracking-[-0.07em]"
            style={{ fontSize: "clamp(60px,8vw,120px)" }}
          >
            Digital moves,<br />practical
          </h1>
          <p
            className="mt-6 text-gray-400 leading-[1.35]"
            style={{
              fontSize: "clamp(14px,1.2vw,18px)",
              maxWidth: "clamp(240px,26vw,400px)",
            }}
          >
            Structure, clarity, and action — built to help businesses
            adopt digital tools with confidence.
          </p>

          {/* FLOATING CARD — z-30 text-ஐ cover பண்ணும் */}
          <div
            ref={desktopCardRef}
            className="absolute bg-[#f1f1f1] text-black shadow-2xl will-change-transform"
            style={{
              zIndex: 30,
              left: "40%",
              top: "clamp(30px,5vh,80px)",
              width: "clamp(210px,18vw,290px)",
            }}
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full object-cover object-top"
              style={{ height: "clamp(260px,27vw,390px)" }}
            />
            <div style={{ padding: "14px 16px 16px" }}>
              <h3
                className="font-medium leading-[1.2]"
                style={{ fontSize: "clamp(13px,1.2vw,17px)" }}
              >
                Er.Venkat<br />Chennakrishnan
              </h3>
              <div
                className="flex justify-between font-semibold uppercase"
                style={{
                  marginTop: "clamp(16px,2vh,32px)",
                  fontSize: "clamp(9px,0.8vw,11px)",
                }}
              >
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group of<br />Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM — z-10 card வரும்போது naturally hide ஆகும் */}
        <div className="relative z-10 flex flex-col items-end">
          <ul
            className="text-gray-400 leading-[1.45] list-disc pl-6 space-y-1"
            style={{
              fontSize: "clamp(12px,1.1vw,16px)",
              width: "clamp(260px,33vw,480px)",
            }}
          >
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li className="whitespace-nowrap">
              Helping businesses move from offline to online.
            </li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2
            className="font-extralight leading-[0.9] tracking-[-0.08em] text-right"
            style={{
              marginTop: "clamp(16px,2.5vh,36px)",
              fontSize: "clamp(44px,7vw,100px)",
            }}
          >
            Business needs<br />into digital solutions
          </h2>
        </div>
      </div>

    </section>
  );
}