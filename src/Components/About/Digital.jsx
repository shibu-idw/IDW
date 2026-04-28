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
            { y: 80 },
            {
              y: -80,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 0.8,
              },
            }
          );
        },

        "(min-width: 768px) and (max-width: 1023px)": () => {
          gsap.fromTo(
            tabletCardRef.current,
            { y: 100 },
            {
              y: -100,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 0.8,
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
      className="relative w-full bg-black text-white font-sans overflow-hidden min-h-[80svh] md:min-h-[86svh] lg:min-h-[150svh] z-10"
    >
      {/* WATERMARK TEXT */}
      <div className="pointer-events-none absolute inset-0 select-none z-0 overflow-hidden">
        <h2
          className="hidden lg:block absolute right-0 font-black text-white/[0.03] tracking-wider leading-none uppercase"
          style={{ fontSize: "clamp(60px, 10vw, 160px)" }}
        >
          IDW
        </h2>

        <div className="absolute left-0 bottom-0 flex flex-col">
          <h2
            className="font-black text-white/[0.04] tracking-[0.03em] leading-none uppercase"
            style={{ fontSize: "clamp(34px, 7vw, 100px)" }}
          >
            Introducing
          </h2>

          <h2
            className="font-black text-white/[0.045] tracking-[0.02em] leading-none uppercase"
            style={{ fontSize: "clamp(82px, 20vw, 240px)" }}
          >
            Digital
          </h2>

          <h2
            className="font-black text-white/[0.045] tracking-[0.03em] leading-none uppercase"
            style={{ fontSize: "clamp(82px, 20vw, 240px)" }}
          >
            World
          </h2>
        </div>
      </div>

      {/* MOBILE */}
      <div className="relative z-10 md:hidden flex flex-col justify-between min-h-[80svh] px-4 py-4">
        <div className="relative z-20">
          <h1 className="font-normal leading-[1] tracking-tight text-[30px]">
            Digital moves,
            <br />
            practical
          </h1>

          <p className="mt-2 text-gray-400 text-[12px] max-w-[250px]">
            Structure, clarity, and action — built to help businesses adopt
            digital tools with confidence.
          </p>
        </div>

        <div className="relative flex justify-center flex-1 min-h-[235px]">
          <div
            ref={mobileCardRef}
            className="absolute bottom-0 bg-[#f1f1f1] text-black shadow-2xl z-30 w-[175px]"
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[180px] object-cover object-top"
            />

            <div className="p-2.5">
              <h3 className="font-medium text-[12px] leading-tight">
                Er.Venkat
                <br />
                Chennakrishnan
              </h3>

              <div className="flex justify-between mt-2 text-[7px] font-bold uppercase">
                <p>Founder & CEO</p>
                <p className="text-right">Quality Group</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20">
          <ul className="list-disc pl-5 text-gray-400 text-[10px] space-y-0.5">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
          </ul>

          <h2 className="font-normal leading-none text-right mt-2 text-[24px]">
            Business needs into digital solutions
          </h2>
        </div>
      </div>

      {/* TABLET */}
<div className="relative z-10 hidden md:flex lg:hidden flex-col justify-between min-h-[80svh] px-[30px] py-[24px]">
  {/* TOP */}
  <div className="relative z-20">
    <h1 className="font-normal leading-none tracking-tight text-[58px]">
      Digital moves,
      <br />
      practical
    </h1>

    <p className="mt-3 text-gray-400 text-[16px] max-w-[380px]">
      Structure, clarity, and action — built to help businesses adopt
      digital tools with confidence.
    </p>
  </div>

  {/* CENTER CARD */}
  <div className="relative flex justify-center flex-1 min-h-[300px]">
    <div
      ref={tabletCardRef}
      className="absolute bottom-0 bg-[#f1f1f1] text-black shadow-2xl z-30 w-[250px]"
    >
      <img
        src={personImg}
        alt="Founder"
        className="w-full h-[260px] object-cover object-top"
      />

      <div className="p-4">
        <h3 className="font-medium text-[15px] leading-tight">
          Er.Venkat
          <br />
          Chennakrishnan
        </h3>

        <div className="flex justify-between mt-3 text-[9px] font-bold uppercase">
          <p>Founder & CEO</p>
          <p className="text-right">Quality Group</p>
        </div>
      </div>
    </div>
  </div>

  {/* BOTTOM */}
  <div className="relative z-20">
    <h2 className="font-normal leading-none text-right text-[48px]">
      Business needs into digital solutions
    </h2>
  </div>
</div>

      {/* DESKTOP - UNCHANGED */}
      <div
        className="hidden lg:flex relative z-10 mx-auto max-w-[1440px] flex-col justify-between h-[150svh]"
        style={{ padding: "8vh 80px" }}
      >
        <div className="relative z-20">
          <h1 className="font-normal leading-[0.9] tracking-tight text-[110px]">
            Digital moves,
            <br />
            practical
          </h1>

          <p className="mt-6 text-gray-400 text-[18px] max-w-[350px]">
            Structure, clarity, and action — built to help businesses adopt
            digital tools with confidence.
          </p>

          <div
            ref={desktopCardRef}
            className="absolute bg-[#f1f1f1] text-black shadow-2xl z-30"
            style={{ left: "45%", top: "5vh", width: "280px" }}
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[360px] object-cover object-top"
            />

            <div className="p-5">
              <h3 className="font-medium text-[18px]">
                Er.Venkat Chennakrishnan
              </h3>

              <div className="flex justify-between mt-6 text-[11px] font-bold uppercase">
                <p>Founder & CEO</p>
                <p className="text-right">
                  Quality Group of
                  <br />
                  Companies
                </p>
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

          <h2 className="font-normal leading-none text-right mt-8 text-[90px]">
            Business needs
            <br />
            into digital solutions
          </h2>
        </div>
      </div>
    </section>
  );
}