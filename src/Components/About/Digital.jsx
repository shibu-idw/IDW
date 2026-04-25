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
            { y: "125vh" },
            {
              y: "-125vh",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1900",
                scrub: 1.2,
                pin: true,
                anticipatePin: 1,
              },
            }
          );
        },
        "(min-width: 768px) and (max-width: 1023px)": () => {
          gsap.fromTo(
            tabletCardRef.current,
            { y: "125vh" },
            {
              y: "-125vh",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1900",
                scrub: 1.2,
                pin: true,
                anticipatePin: 1,
              },
            }
          );
        },
        "(min-width: 1024px)": () => {
          gsap.fromTo(
            desktopCardRef.current,
            { y: "125vh" },
            {
              y: "-125vh",
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1900",
                scrub: 1.2,
                pin: true,
                anticipatePin: 1,
              },
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden font-sans"
    >
      {/* ── BACKGROUND TEXT ── */}
      <div className="pointer-events-none absolute inset-0 select-none z-0 overflow-hidden">
        <h2 className="hidden lg:block absolute top-[-40px] right-4 text-[260px] font-bold text-white/[0.04] tracking-[-0.08em] leading-none">
          IDW
        </h2>
        <h2
          className="
            absolute top-[8%] left-[-10px]
            text-[48px] sm:text-[80px] md:text-[100px] lg:text-[130px]
            font-bold text-white/[0.045]
            tracking-[-0.07em] leading-[1.1] whitespace-nowrap
          "
        >
          Introducing
        </h2>
        <h2
          className="
            absolute top-[38%] left-[-20px]
            text-[110px] sm:text-[180px] md:text-[240px] lg:text-[320px]
            font-bold text-white/[0.05]
            tracking-[-0.08em] leading-[0.9] whitespace-nowrap
          "
        >
          Digital
        </h2>
        <h2
          className="
            absolute bottom-[-8%] left-[-20px]
            text-[120px] sm:text-[210px] md:text-[270px] lg:text-[380px]
            font-bold text-white/[0.05]
            tracking-[-0.085em] leading-[0.9] whitespace-nowrap
          "
        >
          World
        </h2>
      </div>

      {/* ── MOBILE (< 768px) ── */}
      <div className="relative z-10 md:hidden px-4 pt-10 pb-6 h-screen flex flex-col justify-between">
        {/* TOP */}
        <div>
          <h1 className="text-[clamp(38px,11vw,52px)] font-extralight leading-[0.9] tracking-[-0.07em]">
            Digital moves,
            <br />
            practical
          </h1>
          <p className="mt-4 text-gray-300 text-[clamp(13px,3.8vw,16px)] leading-[1.4] max-w-[320px]">
            Structure, clarity, and action — built to help businesses adopt
            digital tools with confidence.
          </p>
        </div>

        {/* MIDDLE — floating card anchor */}
        <div className="relative flex justify-center pointer-events-none flex-1">
          <div
            ref={mobileCardRef}
            className="absolute bottom-[-100px] w-[clamp(200px,55vw,250px)] bg-[#f1f1f1] text-black shadow-2xl will-change-transform pointer-events-auto"
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[clamp(220px,55vw,290px)] object-cover object-top"
            />
            <div className="p-3">
              <h3 className="text-[clamp(14px,4vw,17px)] font-medium leading-[1.15]">
                Er.Venkat <br /> Chennakrishnan
              </h3>
              <div className="mt-4 flex justify-between text-[clamp(9px,2.5vw,11px)] font-semibold">
                <p>Founder & CEO</p>
                <p className="text-right">
                  Quality Group of <br /> Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div>
          <ul className="list-disc pl-5 text-gray-300 text-[clamp(12px,3.5vw,15px)] leading-[1.5] space-y-1">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li>Helping businesses move from offline to online.</li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2 className="mt-5 text-[clamp(34px,10vw,50px)] font-extralight leading-[0.9] tracking-[-0.08em] text-right">
            Business needs <br /> into digital solutions
          </h2>
        </div>
      </div>

      {/* ── TABLET (768px – 1023px) ── */}
      <div className="relative z-10 hidden md:flex lg:hidden px-8 pt-12 pb-8 h-screen flex-col justify-between">
        {/* TOP */}
        <div>
          <h1 className="text-[clamp(64px,10vw,100px)] font-extralight leading-[0.88] tracking-[-0.07em]">
            Digital moves,
            <br />
            practical
          </h1>
          <p className="mt-6 text-gray-300 text-[clamp(16px,2.4vw,22px)] leading-[1.35] max-w-[460px]">
            Structure, clarity, and action — built to help businesses adopt
            digital tools with confidence.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="relative flex justify-center pointer-events-none flex-1">
          <div
            ref={tabletCardRef}
            className="absolute bottom-[-140px] w-[clamp(260px,38vw,320px)] bg-[#f1f1f1] text-black shadow-2xl will-change-transform pointer-events-auto"
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[clamp(280px,40vw,340px)] object-cover object-top"
            />
            <div className="p-4">
              <h3 className="text-[clamp(16px,2.5vw,20px)] font-medium leading-[1.15]">
                Er.Venkat <br /> Chennakrishnan
              </h3>
              <div className="mt-6 flex justify-between text-[clamp(11px,1.6vw,13px)] font-semibold">
                <p>Founder & CEO</p>
                <p className="text-right">
                  Quality Group of <br /> Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div>
          <ul className="ml-auto list-disc pl-6 max-w-[560px] text-gray-300 text-[clamp(15px,2vw,20px)] leading-[1.5] space-y-1">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li>Helping businesses move from offline to online.</li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2 className="mt-8 text-[clamp(60px,9vw,96px)] font-extralight leading-[0.9] tracking-[-0.08em] text-right">
            Business needs <br /> into digital solutions
          </h2>
        </div>
      </div>

      {/* ── DESKTOP (1024px+) ── */}
      <div className="hidden lg:flex relative z-10 mx-auto max-w-[1440px] px-[clamp(24px,5vw,80px)] h-screen flex-col justify-between">
        {/* TOP */}
        <div className="relative pt-[clamp(60px,8vh,160px)]">
          <div className="relative z-[5]">
            <h1 className="text-[clamp(72px,9vw,130px)] font-extralight leading-[0.88] tracking-[-0.07em]">
              Digital moves,
              <br />
              practical
            </h1>
            <p className="mt-8 w-[clamp(300px,30vw,420px)] text-gray-300 text-[clamp(15px,1.4vw,19px)] leading-[1.3]">
              Structure, clarity, and action — built to help businesses adopt
              digital tools with confidence.
            </p>
          </div>

          {/* FLOATING CARD */}
          <div
            ref={desktopCardRef}
            className="absolute left-[42%] top-[clamp(80px,10vw,120px)] z-[50] w-[clamp(240px,22vw,310px)] bg-[#f1f1f1] text-black shadow-2xl will-change-transform"
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[clamp(300px,32vw,430px)] object-cover object-top"
            />
            <div className="p-4">
              <h3 className="text-[clamp(15px,1.4vw,19px)] font-medium leading-[1.15]">
                Er.Venkat <br /> Chennakrishnan
              </h3>
              <div className="mt-10 flex justify-between text-[clamp(10px,0.95vw,13px)] font-semibold">
                <p>Founder & CEO</p>
                <p className="text-right uppercase">
                  Quality Group of <br /> Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pb-[clamp(24px,4vh,80px)] flex flex-col items-end">
          <ul className="text-gray-300 text-[clamp(14px,1.3vw,18px)] leading-[1.45] w-[clamp(320px,38vw,520px)] list-disc pl-6 space-y-1">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li className="whitespace-nowrap">
              Helping businesses move from offline to online.
            </li>
            <li>See how ideas become digital progress.</li>
          </ul>
          <h2 className="mt-10 text-[clamp(56px,8vw,110px)] font-extralight leading-[0.9] tracking-[-0.08em] text-right">
            Business needs <br /> into digital solutions
          </h2>
        </div>
      </div>
    </section>
  );
}